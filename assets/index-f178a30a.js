var gi=Object.defineProperty;var bi=(e,t,r)=>t in e?gi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var pr=(e,t,r)=>(bi(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function vi(e,t){return e.includes(t)}function pt(e){return!!e}function yi(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}const $i={capitalizeFirstLetter:!1};function wi(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function xi(e,t){return t.capitalizeFirstLetter?wi(e):e}function pa(e,t=$i){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const a=o[1];return a?a.toUpperCase():""});return xi(n,t)}function ma(e){if(!e||e.length===0)return;const t=e[0];return e.length===1&&t?t:new Error(e.map(r=>rr(r).trim()).join(`
`))}function rr(e){return e?e instanceof Error?e.message:H(e,"message")?String(e.message):String(e):""}function an(e){return e instanceof Error?e:new Error(rr(e))}function me(e){return!!e&&typeof e=="object"}function ki(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Ci=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function H(e,t){return e?Ci.some(r=>{try{return r(e,t)}catch{return!1}}):!1}function ga(e,t){return e&&t.every(r=>H(e,r))}function B(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Rr(e){return Array.isArray(e)?"array":typeof e}function re(e,t){return Rr(e)===t}function In({source:e,whitespace:t,errorHandler:r}){try{return JSON.stringify(e,void 0,t)}catch(n){if(r)return r(n);throw n}}const jn="Failed to compare objects using JSON.stringify";function Fn(e,t,r){return In({source:e,errorHandler(n){if(r)return"";throw n}})===In({source:t,errorHandler(n){if(r)return"";throw n}})}function et(e,t,r={}){try{return e===t?!0:me(e)&&me(t)?Fn(Object.keys(e).sort(),Object.keys(t).sort(),!!(r!=null&&r.ignoreNonSerializableProperties))?Object.keys(e).every(o=>et(e[o],t[o])):!1:Fn(e,t,!!(r!=null&&r.ignoreNonSerializableProperties))}catch(n){const o=an(n);throw o.message.startsWith(jn)||(o.message=`${jn}: ${o.message}`),o}}function Si(e,t,r){const n=t;if(e.has(n))return e.get(n);{const o=r();return e.set(n,o),o}}function Ei(e){return B(e).filter(t=>isNaN(Number(t)))}function _i(e){return Ei(e).map(r=>e[r])}function Ti(e,t){return _i(t).includes(e)}function Mi(e,t){return B(e).filter(n=>{const o=e[n];return t(n,o,e)}).reduce((n,o)=>(n[o]=e[o],n),{})}function Ai(e,t){return Mi(e,r=>!t.includes(r))}function fe(e,t){let r=!1;const n=B(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(B(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function Pi(e){const t=sn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function sn(){let e,t,r=!1;const n=new Promise((o,a)=>{e=s=>(r=!0,o(s)),t=s=>{r=!0,a(s)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${sn.name}.`);return{promise:n,resolve:e,reject:t,isSettled(){return r}}}function Un(e,t){try{return ba(e,t),!0}catch{return!1}}function ba(e,t,r){if(e.length<t)throw new Error(r?`'${r}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Ni(e,t){return H(e,"entryType")&&e.entryType===t}var O;(function(e){e.ElementExample="element-example",e.Page="page",e.Root="root"})(O||(O={}));function Re(e,t){return e.controlType===t}var _;(function(e){e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text"})(_||(_={}));const va=Symbol("any-type"),Ri={[_.Checkbox]:!1,[_.Color]:"",[_.Dropdown]:"",[_.Hidden]:va,[_.Number]:0,[_.Text]:""};function Bi(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,o])=>{const a=Ri[o.controlType];a!==va&&(typeof a!=typeof o.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${o.initValue}': expected initValue of type ${typeof a} because the control is of type ${o.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function ln(e,t){const r=Dt(e.title);return e.parent?[...ln(e.parent,!1),Dt(e.parent.title)].concat(t?[r]:[]):t?[r]:[]}function Dt(e){return yi(e).toLowerCase().replaceAll(/\s/g,"-")}function Li({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}function Pe(e){const t={...e,entryType:O.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.elementExamplesCallback&&e.elementExamplesCallback({defineExample(n){const o={...n,entryType:O.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(pt)};r.add(n.title),t.elementExamples[Dt(o.title)]=o}}),t}var ue;(function(e){e.Footer="book-footer",e.NavHeader="book-nav-header"})(ue||(ue={}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ne=e=>(...t)=>({_$litDirective$:e,values:t});let we=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mr;const Vt=window,Ie=Vt.trustedTypes,Wn=Ie?Ie.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ht="$lit$",le=`lit$${(Math.random()+"").slice(9)}$`,cn="?"+le,Oi=`<${cn}>`,Me=document,at=()=>Me.createComment(""),st=e=>e===null||typeof e!="object"&&typeof e!="function",ya=Array.isArray,$a=e=>ya(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",gr=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yn=/-->/g,Zn=/>/g,ke=RegExp(`>|${gr}(?:([^\\s"'>=/]+)(${gr}*=${gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qn=/'/g,Gn=/"/g,wa=/^(?:script|style|textarea|title)$/i,zi=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),xa=zi(1),Y=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Xn=new WeakMap,Ee=Me.createTreeWalker(Me,129,null,!1);function ka(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wn!==void 0?Wn.createHTML(t):t}const Ca=(e,t)=>{const r=e.length-1,n=[];let o,a=t===2?"<svg>":"",s=qe;for(let i=0;i<r;i++){const l=e[i];let c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===qe?u[1]==="!--"?s=Yn:u[1]!==void 0?s=Zn:u[2]!==void 0?(wa.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=ke):u[3]!==void 0&&(s=ke):s===ke?u[0]===">"?(s=o??qe,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?ke:u[3]==='"'?Gn:qn):s===Gn||s===qn?s=ke:s===Yn||s===Zn?s=qe:(s=ke,o=void 0);const h=s===ke&&e[i+1].startsWith("/>")?" ":"";a+=s===qe?l+Oi:d>=0?(n.push(c),l.slice(0,d)+Ht+l.slice(d)+le+h):l+le+(d===-2?(n.push(void 0),i):h)}return[ka(e,a+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class it{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let a=0,s=0;const i=t.length-1,l=this.parts,[c,u]=Ca(t,r);if(this.el=it.createElement(c,n),Ee.currentNode=this.el.content,r===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(o=Ee.nextNode())!==null&&l.length<i;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const f of o.getAttributeNames())if(f.endsWith(Ht)||f.startsWith(le)){const h=u[s++];if(d.push(f),h!==void 0){const p=o.getAttribute(h.toLowerCase()+Ht).split(le),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:a,name:m[2],strings:p,ctor:m[1]==="."?Ea:m[1]==="?"?_a:m[1]==="@"?Ta:gt})}else l.push({type:6,index:a})}for(const f of d)o.removeAttribute(f)}if(wa.test(o.tagName)){const d=o.textContent.split(le),f=d.length-1;if(f>0){o.textContent=Ie?Ie.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],at()),Ee.nextNode(),l.push({type:2,index:++a});o.append(d[f],at())}}}else if(o.nodeType===8)if(o.data===cn)l.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(le,d+1))!==-1;)l.push({type:7,index:a}),d+=le.length-1}a++}}static createElement(t,r){const n=Me.createElement("template");return n.innerHTML=t,n}}function Ae(e,t,r=e,n){var o,a,s,i;if(t===Y)return t;let l=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const c=st(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,n)),n!==void 0?((s=(i=r)._$Co)!==null&&s!==void 0?s:i._$Co=[])[n]=l:r._$Cl=l),l!==void 0&&(t=Ae(e,l._$AS(e,t.values),l,n)),t}class Sa{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;const{el:{content:n},parts:o}=this._$AD,a=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Me).importNode(n,!0);Ee.currentNode=a;let s=Ee.nextNode(),i=0,l=0,c=o[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new Fe(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new Ma(s,this,t)),this._$AV.push(u),c=o[++l]}i!==(c==null?void 0:c.index)&&(s=Ee.nextNode(),i++)}return Ee.currentNode=Me,a}v(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Fe{constructor(t,r,n,o){var a;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Ae(this,t,r),st(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==Y&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):$a(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&st(this._$AH)?this._$AA.nextSibling.data=t:this.$(Me.createTextNode(t)),this._$AH=t}g(t){var r;const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=it.createElement(ka(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===a)this._$AH.v(n);else{const s=new Sa(a,this),i=s.u(this.options);s.v(n),this.$(i),this._$AH=s}}_$AC(t){let r=Xn.get(t.strings);return r===void 0&&Xn.set(t.strings,r=new it(t)),r}T(t){ya(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const a of t)o===r.length?r.push(n=new Fe(this.k(at()),this.k(at()),this,this.options)):n=r[o],n._$AI(a),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class gt{constructor(t,r,n,o,a){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const a=this.strings;let s=!1;if(a===void 0)t=Ae(this,t,r,0),s=!st(t)||t!==this._$AH&&t!==Y,s&&(this._$AH=t);else{const i=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=Ae(this,i[n+l],r,l),c===Y&&(c=this._$AH[l]),s||(s=!st(c)||c!==this._$AH[l]),c===A?t=A:t!==A&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ea extends gt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const Di=Ie?Ie.emptyScript:"";class _a extends gt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,Di):this.element.removeAttribute(this.name)}}class Ta extends gt{constructor(t,r,n,o,a){super(t,r,n,o,a),this.type=5}_$AI(t,r=this){var n;if((t=(n=Ae(this,t,r,0))!==null&&n!==void 0?n:A)===Y)return;const o=this._$AH,a=t===A&&o!==A||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==A&&(o===A||a);a&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class Ma{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ae(this,t)}}const Vi={O:Ht,P:le,A:cn,C:1,M:Ca,L:Sa,D:$a,R:Ae,I:Fe,V:gt,H:_a,N:Ta,U:Ea,F:Ma},Jn=Vt.litHtmlPolyfillSupport;Jn==null||Jn(it,Fe),((mr=Vt.litHtmlVersions)!==null&&mr!==void 0?mr:Vt.litHtmlVersions=[]).push("2.7.5");const Hi=(e,t,r)=>{var n,o;const a=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=a._$litPart$;if(s===void 0){const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=s=new Fe(t.insertBefore(at(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ii}=Vi,Kn=()=>document.createComment(""),Ge=(e,t,r)=>{var n;const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=o.insertBefore(Kn(),a),i=o.insertBefore(Kn(),a);r=new Ii(s,i,e,e.options)}else{const s=r._$AB.nextSibling,i=r._$AM,l=i!==e;if(l){let c;(n=r._$AQ)===null||n===void 0||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==i._$AU&&r._$AP(c)}if(s!==a||l){let c=r._$AA;for(;c!==s;){const u=c.nextSibling;o.insertBefore(c,a),c=u}}}return r},Ce=(e,t,r=e)=>(e._$AI(t,r),e),ji={},Fi=(e,t=ji)=>e._$AH=t,Ui=e=>e._$AH,br=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA;const n=e._$AB.nextSibling;for(;r!==n;){const o=r.nextSibling;r.remove(),r=o}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const un=Ne(class extends we{constructor(e){var t;if(super(e),e.type!==mt.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in t)t[a]&&!(!((r=this.nt)===null||r===void 0)&&r.has(a))&&this.it.add(a);return this.render(t)}const o=e.element.classList;this.it.forEach(a=>{a in t||(o.remove(a),this.it.delete(a))});for(const a in t){const s=!!t[a];s===this.it.has(a)||!((n=this.nt)===null||n===void 0)&&n.has(a)||(s?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return Y}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=(e,t,r)=>{const n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},Wi=Ne(class extends we{constructor(e){if(super(e),e.type!==mt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const o=[],a=[];let s=0;for(const i of e)o[s]=n?n(i,s):s,a[s]=r(i,s),s++;return{values:a,keys:o}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){var o;const a=Ui(e),{values:s,keys:i}=this.dt(t,r,n);if(!Array.isArray(a))return this.ht=i,s;const l=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],c=[];let u,d,f=0,h=a.length-1,p=0,m=s.length-1;for(;f<=h&&p<=m;)if(a[f]===null)f++;else if(a[h]===null)h--;else if(l[f]===i[p])c[p]=Ce(a[f],s[p]),f++,p++;else if(l[h]===i[m])c[m]=Ce(a[h],s[m]),h--,m--;else if(l[f]===i[m])c[m]=Ce(a[f],s[m]),Ge(e,c[m+1],a[f]),f++,m--;else if(l[h]===i[p])c[p]=Ce(a[h],s[p]),Ge(e,a[f],a[h]),h--,p++;else if(u===void 0&&(u=Qn(i,p,m),d=Qn(l,f,h)),u.has(l[f]))if(u.has(l[h])){const g=d.get(i[p]),x=g!==void 0?a[g]:null;if(x===null){const S=Ge(e,a[f]);Ce(S,s[p]),c[p]=S}else c[p]=Ce(x,s[p]),Ge(e,a[f],x),a[g]=null;p++}else br(a[h]),h--;else br(a[f]),f++;for(;p<=m;){const g=Ge(e,c[m+1]);Ce(g,s[p]),c[p++]=g}for(;f<=h;){const g=a[f++];g!==null&&br(g)}return this.ht=i,Fi(e,c),Y}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Br=class extends we{constructor(t){if(super(t),this.et=A,t.type!==mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===A||t==null)return this.ft=void 0,this.et=t;if(t===Y)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Br.directiveName="unsafeHTML",Br.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eo=class extends Br{};eo.directiveName="unsafeSVG",eo.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Aa(e,t,r){return e?t():r==null?void 0:r()}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=window,dn=Bt.ShadowRoot&&(Bt.ShadyCSS===void 0||Bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fn=Symbol(),to=new WeakMap;let Pa=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==fn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(dn&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=to.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&to.set(r,t))}return t}toString(){return this.cssText}};const M=e=>new Pa(typeof e=="string"?e:e+"",void 0,fn),_e=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new Pa(r,e,fn)},Yi=(e,t)=>{dn?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=Bt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},ro=dn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return M(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vr;const It=window,no=It.trustedTypes,Zi=no?no.emptyScript:"",oo=It.reactiveElementPolyfillSupport,Lr={toAttribute(e,t){switch(t){case Boolean:e=e?Zi:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Na=(e,t)=>t!==e&&(t==t||e==e),yr={attribute:!0,type:String,converter:Lr,reflect:!1,hasChanged:Na},Or="finalized";class Oe extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=yr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const a=this[t];this[r]=o,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||yr}static finalize(){if(this.hasOwnProperty(Or))return!1;this[Or]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(ro(o))}else t!==void 0&&r.push(ro(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Yi(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=yr){var o;const a=this.constructor._$Ep(t,n);if(a!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Lr).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,a=o._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=o.getPropertyOptions(a),i=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Lr;this._$El=a,this[a]=i.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Na)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Oe[Or]=!0,Oe.elementProperties=new Map,Oe.elementStyles=[],Oe.shadowRootOptions={mode:"open"},oo==null||oo({ReactiveElement:Oe}),((vr=It.reactiveElementVersions)!==null&&vr!==void 0?vr:It.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $r,wr;class Ve extends Oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Hi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Y}}Ve.finalized=!0,Ve._$litElement$=!0,($r=globalThis.litElementHydrateSupport)===null||$r===void 0||$r.call(globalThis,{LitElement:Ve});const ao=globalThis.litElementPolyfillSupport;ao==null||ao({LitElement:Ve});((wr=globalThis.litElementVersions)!==null&&wr!==void 0?wr:globalThis.litElementVersions=[]).push("3.3.2");var qi=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var m in n)p[m]=m==="access"?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function(x){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(x||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=s(g.get))&&(u.get=d),(d=s(g.set))&&(u.set=d),(d=s(g.init))&&o.unshift(d)}else(d=s(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Gi=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Xi=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Ji(){function e(t,r){return t}return e}let Ra=(()=>{let e=[Ji()],t,r=[],n;return n=class extends Ve{},Xi(n,"DeclarativeElement"),qi(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Gi(n,r),n})();function so(e){return e!==e.toUpperCase()}function Ki(e){return e.split("").reduce((r,n,o,a)=>{const s=o>0?a[o-1]:"",i=o<a.length-1?a[o+1]:"",l=so(s)||so(i);return n===n.toLowerCase()||o===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}const Qi=["january","february","march","april","may","june","july","august","september","october","november","december"];Qi.map(e=>e.slice(0,3));function el(e){return!!e&&typeof e=="object"}function io(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function tl(e){return Array.isArray(e)?"array":typeof e}function rl(e,t){return tl(e)===t}function nl(e,t){let r=!1;const n=io(e).reduce((o,a)=>{const s=t(a,e[a],e);return s instanceof Promise&&(r=!0),{...o,[a]:s}},{});return r?new Promise(async(o,a)=>{try{await Promise.all(io(n).map(async s=>{const i=await n[s];n[s]=i})),o(n)}catch(s){a(s)}}):n}function j(e){if(el(e))return nl(e,(r,n)=>{if(!rl(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(Ki(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?M(r):r.startsWith("-")?_e`-${M(r)}`:_e`--${M(r)}`;return{name:s,value:_e`var(${s}, ${M(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${j.name}' function.`)}function ol({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const al=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},sl=(e,t,r)=>{t.constructor.createProperty(r,e)};function nr(e){return(t,r)=>r!==void 0?sl(e,t,r):al(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xr;((xr=window.HTMLSlotElement)===null||xr===void 0?void 0:xr.prototype.assignedElements)!=null;const hn=Symbol("key for ignoring inputs not having been set yet"),il={[hn]:!0,allowPolymorphicState:!1};function Ba(e,t){const r=e.instanceState;B(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&B(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),La(e)}function La(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Oa(e,t){return cl(e,t),e.element}function ll(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function cl(e,t){const r=ll(e),n=r?`: in ${r}`:"";if(e.type!==mt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function pn(e,t){return t?lo(e,t):lo(void 0,e)}const lo=Ne(class extends we{constructor(e){super(e),this.element=Oa(e,"assign")}render(e,t){return Ba(this.element,t),Y}});function za(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Ra?!0:za(r)}function co(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}let ul=class extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}};function mn(){return e=>{var t;return t=class extends ul{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function Da(){return mn()}function dl(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=mn()(r);return t[r]=n,t},{}):{}}const uo="_is_element_vir_observable_property_handler_instance",fo="_is_element_vir_observable_property_handler_creator";function fl(e){return H(e,fo)&&e[fo]===!0}function hl(e){return H(e,uo)&&e[uo]===!0}function pl(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function ho(e,t,r){const n=e;function o(i){t?pl(i,e,e.tagName):nr()(e,i)}function a(i,l){return o(l),n[l]}return new Proxy({},{get:a,set:(i,l,c)=>{o(l);const u=e.observablePropertyHandlerMap[l];function d(f){i[l]=f,n[l]=f}return r&&fl(c)&&(c=c.init()),r&&hl(c)?(u&&c!==u?(c.addMultipleListeners(u.getAllListeners()),u.removeAllListeners()):c.addListener(!0,f=>{d(f)}),e.observablePropertyHandlerMap[l]=c):r&&u?u.setValue(c):d(c),!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,l){if(l in i)return{get value(){return a(i,l)},configurable:!0,enumerable:!0}},has:(i,l)=>Reflect.has(i,l)})}function ml(e){return e?fe(e,t=>t):{}}function gl({hostClassNames:e,cssVars:t}){return{hostClasses:fe(e,(r,n)=>({name:M(n),selector:M(`:host(.${n})`)})),cssVars:t}}function bl({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&B(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function vl(e,t){function r(o){B(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var yl=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function gn(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...il,...e.options},n=dl(e.events),o=ml(e.hostClasses);e.hostClasses&&co(e.tagName,e.hostClasses),e.cssVars&&co(e.tagName,e.cssVars);const a=e.cssVars?j(e.cssVars):{},s=typeof e.styles=="function"?e.styles(gl({hostClassNames:o,cssVars:a})):e.styles||_e``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends Ra{createRenderParams(){return vl(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){La(this)}render(){try{za(this)&&!this.haveInputsBeenSet&&!r[hn]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${pn.name}" directive on it. If no inputs are intended, use "${gn.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return bl({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=an(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){Ba(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyHandlerMap={},this.instanceInputs=ho(this,!1,!1),this.instanceState=ho(this,!((d=e.options)!=null&&d.allowPolymorphicState),!0);const u=e.stateInitStatic||{};B(u).forEach(f=>{nr()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},yl(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:pa(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function Va(){return e=>gn({...e,options:{[hn]:!1,...e.options}})}function ce(e,t){return $l(e,t)}const $l=Ne(class extends we{constructor(e){super(e),this.element=Oa(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Y}});function or(e,t,r){return Aa(e,()=>t,()=>r)}function wl(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),Va()(r(n))),defineElementNoInputs:n=>(t(n),gn(r(n)))}}function xl(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function zr(e){return H(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function bn(e){return H(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function Ha(e){return e.map(t=>zr(t)?t.definition:t).filter(t=>bn(t))}const Ia=new WeakMap;function kl(e,t){var o;const r=Ha(t);return(o=ja(Ia,[e,...r]).value)==null?void 0:o.template}function Cl(e,t,r){const n=Ha(t);return Ua(Ia,[e,...n],r)}function ja(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Fa(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?ja(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Fa(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ua(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Fa(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Ua(l,t,r,n+1)}const Sl=new WeakMap;function Wa(e,t,r){const n=kl(e,t),o=n??r();if(!n){const i=Cl(e,t,o);if(i.result)Sl.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=xl(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function Ya(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let m,g=[];if(typeof f=="string"&&(m=r(f,c,p),m)){o[d]=f+m.replacement,s.push(h);const S=m.getExtraValues;g=S?S(p):[],g.length&&S?(o[d]+=" ",g.forEach((k,T)=>{T&&o.push(" ")}),i.push(k=>{const T=k[h],R=S(T);return{index:h,values:R}}),o.push(c)):o[d]+=c}m||o.push(c);const x=e.raw[u];m?(a[d]=a[d]+m.replacement+x,g.length&&g.forEach(()=>{a.push("")})):a.push(x)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function El(...[e,t,r]){if(bn(r))return{replacement:r.tagName,getExtraValues:void 0}}function _l(e,t){return Ya(e,t,El)}function Z(e,...t){const r=Wa(e,t,()=>_l(e,t));return _e(r.strings,...r.values)}function Tl(...[e,t,r]){const n=zr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=bn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=zr(c)?c.inputs:void 0;return[o&&u&&Object.values(u).length?pn(u):void 0].filter(pt)}}}function Ml(e){}function Al(e){return Ya(e.strings,e.values,Tl,Ml)}function y(e,...t){const r=xa(e,...t),n=Wa(e,t,()=>Al(r));return{...r,strings:n.strings,values:n.values}}const Pl={[O.ElementExample]:()=>[],[O.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Bi(e.controls,e.title)].filter(pt),[O.Root]:()=>[]},jt="_isBookTreeNode",Za=new Map;function Nl(e){return Za.get(e)}function Rl(e,t){Si(Za,e,()=>t)}function He(e,t){return!!(qa(e)&&e.entry.entryType===t)}function qa(e){return!!(ga(e,[jt,"entry"])&&e[jt])}function Bl(e,t){return{[jt]:!0,entry:{entryType:O.Root,title:e||"Everything",parent:void 0,errors:[],descriptionParagraphs:t},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Ll({entries:e,everythingTitle:t,everythingDescriptionParagraphs:r,debug:n}){const o=Nl(e);if(o)return o;const a=Bl(t,r);e.forEach(l=>vn({tree:a,newEntry:l,debug:n,manuallyAdded:!0}));const s=Ga(a),i={tree:a,flattenedNodes:s};return Rl(e,i),n&&console.info("element-book tree:",a),i}function Ol(e,t,r){if(!t.parent)return e;const n=Dr(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),vn({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const o=Dr(t,e);if(!o)throw new Error(`Failed to find node despite having just added it: ${ln(t,!1)}`);return o}function vn({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const o=Pl[t.entryType](t);t.errors.push(...o);const a=Ol(e,t,r),s=Dt(t.title),i=a.children[s];if(i){if(n){if(i.manuallyAdded){i.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}i.manuallyAdded=!0}return}const l={[jt]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:t,manuallyAdded:n};a.children[s]=l,Ni(t,O.Page)&&Object.values(t.elementExamples??{}).length&&Object.values(t.elementExamples??{}).forEach(c=>vn({tree:e,newEntry:c,debug:r,manuallyAdded:n}))}function Dr(e,t){const r=qa(e)?e.fullUrlBreadcrumbs.slice(0,-1):ln(e,!1);return r.length?r.reduce((o,a)=>{if(o)return o.children[a]},t):void 0}function Ga(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(o=>Ga(o));return[e,...r].flat()}function zl(e,t,r){const n=e[t];if(n)return n;if(r){const o={children:{},controls:{}};return e[t]=o,o}}function yn(e,t){return $n(e,t,void 0)}function $n(e,t,r){const n=t[0];if(!n)return{};const o=zl(e,n,r);if(!o)return{};const a=t.slice(1);return!a.length&&r&&(o.controls=r),{...o.controls,...$n(o.children,a,r)}}function Dl(e,t,r){const n=ki(e);return $n(n,t,r),n}function Xa(e,t){return fe(e.children,(n,o)=>He(o,O.Page)?{children:Xa(o,{}),controls:{...t,...fe(o.entry.controls,(a,s)=>s.initValue)}}:{children:{},controls:{}})}async function Vl(e=1){const t=sn();function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}const Hl=globalThis.crypto;function Il(e=16){const t=Math.ceil(e/2),r=new Uint8Array(t);return Hl.getRandomValues(r),Array.from(r).map(n=>n.toString(16).padStart(2,"0")).join("").substring(0,e)}async function jl(e){return new Promise(t=>{new IntersectionObserver((n,o)=>{ba(n,1),o.disconnect(),t(n[0].intersectionRatio===1)}).observe(e)})}function Xe(e,t){const r=e.currentTarget;if(!(r instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${r==null?void 0:r.constructor.name}'.`);return r}function Fl({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const o=t.toLowerCase(),a=e.toLowerCase();e:for(let s=0,i=0;s<n;s++){const l=a.charCodeAt(s);for(;i<r;)if(o.charCodeAt(i++)===l)continue e;return!1}return!0}const Ul=Il(32);function Vr(e){return e.join(Ul)}function Ja(e){if(!e.length)return[];const t=Vr(e),r=Ja(e.slice(0,-1));return[t,...r]}const Wl=["error","errors"];function Yl(e){return Wl.includes(e)}function Zl({flattenedNodes:e,searchQuery:t}){const r={};return e.forEach(n=>{const o=n.entry.errors.length&&Yl(t);if(Fl({searchIn:[n.entry.title,...n.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||o)Ja(n.fullUrlBreadcrumbs).forEach(i=>r[i]=!0);else{const s=Vr(n.fullUrlBreadcrumbs);r[s]=!1}}),e.filter(n=>{const o=Vr(n.fullUrlBreadcrumbs),a=r[o];if(!re(a,"boolean"))throw new Error(`Failed to find '${n.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}var D;(function(e){e.Search="search",e.Book="book"})(D||(D={}));function Ka(e){return e[0]===D.Book?"":e[1]?decodeURIComponent(e[1]):""}const lt={hash:void 0,paths:[D.Book],search:void 0},ql=0;function wn(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==ql)}class ar extends Error{constructor(t){super(t),this.name="SpaRouterError"}}class po extends ar{constructor(t){super(t),this.name="WindowEventConsolidationError"}}const ct="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Gl=globalThis.history.pushState;function mo(...e){const t=Gl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ct)),t}const Xl=globalThis.history.replaceState;function go(...e){const t=Xl.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(ct)),t}function Jl(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===mo)throw new po("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===go)throw new po("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=mo,globalThis.history.replaceState=go,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(ct))})}}function Kl(e){return Array.from(e.entries()).reduce((t,r)=>(t[r[0]]=r[1],t),{})}function Ql(e){const t=Object.entries(e).reduce((r,n)=>{const o=`${n[0]}=${n[1]}`;return`${r}&${o}`},"");return new URLSearchParams(t)}function ec(e){const t=`/${e}`,n=(e&&globalThis.location.pathname.startsWith(t)?globalThis.location.pathname.replace(t,""):globalThis.location.pathname).split("/").filter(i=>!!i),a=globalThis.location.search?Kl(new URLSearchParams(globalThis.location.search)):void 0,s=globalThis.location.hash||void 0;return{paths:n,search:a,hash:s}}function Qa(e){return e.replace(/(?:^\/|\/+$)/g,"")}function es({routeBase:e,windowPath:t}){if(!e)return"";const r=Qa(e);if(ts({routeBase:r,windowPath:t}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?es({routeBase:n,windowPath:t}):""}function ts({routeBase:e,windowPath:t}){const r=Qa(e);return r?t.startsWith(`/${r}`):!1}class tc extends ar{constructor(t){super(t),this.name="SanitizationDepthMaxed"}}function rs(e,t){if(e.paths.join(" ")!==t.paths.join(" "))return!1;if(typeof e.search=="object"&&typeof t.search=="object"){const r=Object.entries(e.search).join(" "),n=Object.entries(t.search).join(" ");if(r!==n)return!1}else if(e.search!==t.search)return!1;return e.hash===t.hash}const bo=6;function vo(e,t){const r=e.getCurrentRawRoutes();if(e.sanitizationDepth>bo)throw new tc(`Route sanitization depth has exceed the max of ${bo} with ${JSON.stringify(r)}`);const n=e.sanitizeFullRoute(r);if(rs(n,r))e.sanitizationDepth=0,t?t(n):e.listeners.forEach(o=>{o(n)});else return e.sanitizationDepth++,e.setRoutes(n,!0)}class kr extends ar{constructor(t){super(t),this.name="InvalidRouterInitParamsError"}}function rc(e){if("routeBase"in e&&typeof e.routeBase!="string"&&e.routeBase!=null)throw new kr(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${e.routeBase}" with type "${typeof e.routeBase}".`);if("routeSanitizer"in e&&typeof e.routeSanitizer!="function"&&e.routeSanitizer!=null)throw new kr(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${e.routeSanitizer}" with type "${typeof e.routeSanitizer}".`);if("maxListenerCount"in e&&(typeof e.maxListenerCount!="number"||isNaN(e.maxListenerCount))&&e.maxListenerCount!=null)throw new kr(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${e.maxListenerCount}" with type "${typeof e.maxListenerCount}".`)}function nc(e,t,r=!1){const n=ns(e,t);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function ns(e,t){var l;const r=ts({routeBase:t,windowPath:globalThis.location.pathname})?t:"",n=e.search?Ql(e.search).toString():"",o=n?`?${n}`:"",a=(l=e.hash)!=null&&l.startsWith("#")?"":"#",s=e.hash?`${a}${e.hash}`:"";return`/${[r,...e.paths].filter(pt).join("/")}${o}${s}`}function oc(e={}){rc(e),Jl();const t=e.routeBase?es({routeBase:e.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>vo(o),o={listeners:new Set,initParams:e,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return e.routeSanitizer?e.routeSanitizer(s):s},setRoutes(a,s=!1,i=!1){const l=o.getCurrentRawRoutes(),c={...l,...a},u=o.sanitizeFullRoute(c);if(!(!i&&rs(l,u)))return nc(u,t,s)},createRoutesUrl(a){return ns(a,t)},getCurrentRawRoutes(){return ec(t)},removeAllRouteListeners(){o.listeners.forEach(a=>o.removeRouteListener(a))},addRouteListener(a,s){if(e.maxListenerCount&&o.listeners.size>=e.maxListenerCount)throw new ar(`Tried to exceed route listener max of '${e.maxListenerCount}'.`);return o.listeners.add(s),r||(globalThis.addEventListener(ct,n),r=!0),a&&vo(o,s),s},hasRouteListener(a){return o.listeners.has(a)},removeRouteListener(a){const s=o.listeners.delete(a);return o.listeners.size||(globalThis.removeEventListener(ct,n),r=!1),s},sanitizationDepth:0};return o}function ac(e){return oc({routeBase:e,routeSanitizer(t){return{paths:sc(t.paths),hash:void 0,search:void 0}}})}function sc(e){const t=e[0];if(Ti(t,D)){if(t===D.Book)return[D.Book,...e.slice(1)];if(t===D.Search)return e[1]?[t,e[1]]:[D.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return lt.paths}const C=j({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),ic={nav:{hover:{background:C["element-book-nav-hover-background-color"],foreground:C["element-book-nav-hover-foreground-color"]},active:{background:C["element-book-nav-active-background-color"],foreground:C["element-book-nav-active-foreground-color"]},selected:{background:C["element-book-nav-selected-background-color"],foreground:C["element-book-nav-selected-foreground-color"]}},accent:{icon:C["element-book-accent-icon-color"]},page:{background:C["element-book-page-background-color"],backgroundFaint1:C["element-book-page-background-faint-level-1-color"],backgroundFaint2:C["element-book-page-background-faint-level-2-color"],foreground:C["element-book-page-foreground-color"],foregroundFaint1:C["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:C["element-book-page-foreground-faint-level-2-color"]}};function lc(e,t){os(e,t,ic)}function Hr(e){return H(e,"_$cssResult$")}function yo(e){return ga(e,["name","value","default"])&&re(e.default,"string")&&Hr(e.name)&&Hr(e.value)}function os(e,t,r){Object.entries(t).forEach(([n,o])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Hr(o)){if(!yo(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);ol({forCssVar:a,onElement:e,toValue:String(o)})}else{if(yo(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);os(e,o,a)}})}function P(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let n=t[0].length,o=t[0].map((s,i)=>t.map(l=>l[i])),a=e.map(s=>o.map(i=>{let l=0;if(!Array.isArray(s)){for(let c of i)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(i[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function bt(e){return pe(e)==="string"}function pe(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ft(e,t){e=+e,t=+t;let r=(Math.floor(e)+"").length;if(t>r)return+e.toFixed(t-r);{let n=10**(r-t);return Math.round(e/n)*n}}function as(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/;let n=e.match(t);if(n){let o=[];return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(a,s)=>{/%$/.test(s)?(s=new Number(s.slice(0,-1)/100),s.type="<percentage>"):/deg$/.test(s)?(s=new Number(+s.slice(0,-3)),s.type="<angle>",s.unit="deg"):r.test(s)&&(s=new Number(s),s.type="<number>"),a.startsWith("/")&&(s=s instanceof Number?s:new Number(s),s.alpha=!0),o.push(s)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:o}}}function ss(e){return e[e.length-1]}function Ut(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function is(e,t,r){return(r-e)/(t-e)}function xn(e,t,r){return Ut(t[0],t[1],is(e[0],e[1],r))}function ls(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let o=new String(n[1]);return o.range=[+n[2],+n[3]],o}return r}))}var cc=Object.freeze({__proto__:null,interpolate:Ut,interpolateInv:is,isString:bt,last:ss,mapRange:xn,multiplyMatrices:P,parseCoordGrammar:ls,parseFunction:as,toPrecision:Ft,type:pe});class uc{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(o){this[o]=this[o]||[],r&&this[o][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ge=new uc;var oe={gamut_mapping:"lch.c",precision:5,deltaE:"76"};const ee={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ir(e){return Array.isArray(e)?e:ee[e]}function Wt(e,t,r,n={}){if(e=Ir(e),t=Ir(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let o={W1:e,W2:t,XYZ:r,options:n};if(ge.run("chromatic-adaptation-start",o),o.M||(o.W1===ee.D65&&o.W2===ee.D50?o.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:o.W1===ee.D50&&o.W2===ee.D65&&(o.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),ge.run("chromatic-adaptation-end",o),o.M)return P(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const dc=75e-6,U=class U{constructor(t){var o,a,s;this.id=t.id,this.name=t.name,this.base=t.base?U.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Ir(n),this.formats=t.formats??{};for(let i in this.formats){let l=this.formats[i];l.type||(l.type="function"),l.name||(l.name=i)}t.cssId&&!((o=this.formats.functions)!=null&&o.color)?(this.formats.color={id:t.cssId},Object.defineProperty(this,"cssId",{value:t.cssId})):(a=this.formats)!=null&&a.color&&!((s=this.formats)!=null&&s.color.id)&&(this.formats.color.id=this.id),this.referred=t.referred,Object.defineProperty(this,"path",{value:fc(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ge.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=dc}={}){if(this.isPolar)return t=this.toBase(t),this.base.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((o,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(o))return!0;let[i,l]=s.range;return(i===void 0||o>=i-r)&&(l===void 0||o<=l+r)}return!0})}get cssId(){var t,r;return((r=(t=this.formats.functions)==null?void 0:t.color)==null?void 0:r.id)||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=$o(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=$o(r,this),r):null}equals(t){return t?this===t||this.id===t.id:!1}to(t,r){if(arguments.length===1&&([t,r]=[t.space,t.coords]),t=U.get(t),this.equals(t))return r;r=r.map(i=>Number.isNaN(i)?0:i);let n=this.path,o=t.path,a,s;for(let i=0;i<n.length&&n[i].equals(o[i]);i++)a=n[i],s=i;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let i=n.length-1;i>s;i--)r=n[i].toBase(r);for(let i=s+1;i<o.length;i++)r=o[i].fromBase(r);return r}from(t,r){return arguments.length===1&&([t,r]=[t.space,t.coords]),t=U.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],o=n.range||n.refRange;t.push((o==null?void 0:o.min)??0)}return t}static get all(){return[...new Set(Object.values(U.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof U)return t;if(pe(t)==="string"){let o=U.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return U.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){var l;let n=pe(t),o,a;if(n==="string"?t.includes(".")?[o,a]=t.split("."):[o,a]=[,t]:Array.isArray(t)?[o,a]=t:(o=t.space,a=t.coordId),o=U.get(o),o||(o=r),!o)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=pe(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(o.coords)[a];if(c)return{space:o,id:c[0],index:a,...c[1]}}o=U.get(o);let s=a.toLowerCase(),i=0;for(let c in o.coords){let u=o.coords[c];if(c.toLowerCase()===s||((l=u.name)==null?void 0:l.toLowerCase())===s)return{space:o,id:c,index:i,...u};i++}throw new TypeError(`No "${a}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`)}};pr(U,"registry",{}),pr(U,"DEFAULT_FORMAT",{type:"functions",name:"color"});let b=U;function fc(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function $o(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=ls(e.coords);let r=Object.entries(t).map(([n,o],a)=>{let s=e.coordGrammar[a][0],i=o.range||o.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:i,toRange:l,suffix:c}});e.serializeCoords=(n,o)=>n.map((a,s)=>{let{fromRange:i,toRange:l,suffix:c}=r[s];return i&&l&&(a=xn(i,l,a)),a=Ft(a,o),c&&(a+=c),a})}return e}var X=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class F extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=X),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??(t.toBase=r=>{let n=P(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Wt(this.white,this.base.white,n)),n}),t.fromBase??(t.fromBase=r=>(r=Wt(this.base.white,this.white,r),P(t.fromXYZ_M,r)))),t.referred??(t.referred="display"),super(t)}}function cs(e,{meta:t}={}){var n,o,a,s,i;let r={str:(n=String(e))==null?void 0:n.trim()};if(ge.run("parse-start",r),r.color)return r.color;if(r.parsed=as(r.str),r.parsed){let l=r.parsed.name;if(l==="color"){let c=r.parsed.args.shift(),u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let f of b.all){let h=f.getFormat("color");if(h&&(c===h.id||(o=h.ids)!=null&&o.includes(c))){const p=Object.keys(f.coords).map((m,g)=>r.parsed.args[g]||0);return t&&(t.formatId="color"),{spaceId:f.id,coords:p,alpha:u}}}let d="";if(c in b.registry){let f=(i=(s=(a=b.registry[c].formats)==null?void 0:a.functions)==null?void 0:s.color)==null?void 0:i.id;f&&(d=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${c}). `+(d||"Missing a plugin?"))}else for(let c of b.all){let u=c.getFormat(l);if(u&&u.type==="function"){let d=1;(u.lastAlpha||ss(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let f=r.parsed.args,h;return u.coordGrammar&&(h=Object.entries(c.coords).map(([p,m],g)=>{var xe;let x=u.coordGrammar[g],S=(xe=f[g])==null?void 0:xe.type,k=x.find(he=>he==S);if(!k){let he=m.name||p;throw new TypeError(`${S} not allowed for ${he} in ${l}()`)}let T=k.range;S==="<percentage>"&&(T||(T=[0,1]));let R=m.range||m.refRange;return T&&R&&(f[g]=xn(T,R,f[g])),k})),t&&Object.assign(t,{formatId:u.name,types:h}),{spaceId:c.id,coords:f,alpha:d}}}}else for(let l of b.all)for(let c in l.formats){let u=l.formats[c];if(u.type!=="custom"||u.test&&!u.test(r.str))continue;let d=u.parse(r.str);if(d)return d.alpha??(d.alpha=1),t&&(t.formatId=c),d}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function E(e){if(!e)throw new TypeError("Empty color reference");bt(e)&&(e=cs(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}function vt(e,t){return t=b.get(t),t.from(e)}function J(e,t){let{space:r,index:n}=b.resolveCoord(t,e.space);return vt(e,r)[n]}function us(e,t,r){return t=b.get(t),e.coords=t.to(e.space,r),e}function be(e,t,r){if(e=E(e),arguments.length===2&&pe(arguments[1])==="object"){let n=arguments[1];for(let o in n)be(e,o,n[o])}else{typeof r=="function"&&(r=r(J(e,t)));let{space:n,index:o}=b.resolveCoord(t,e.space),a=vt(e,n);a[o]=r,us(e,n,a)}return e}var kn=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:X,fromBase:e=>Wt(X.white,"D50",e),toBase:e=>Wt("D50",X.white,e),formats:{color:{}}});const hc=216/24389,wo=24/116,Ct=24389/27;let Cr=ee.D50;var W=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Cr,base:kn,fromBase(e){let r=e.map((n,o)=>n/Cr[o]).map(n=>n>hc?Math.cbrt(n):(Ct*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>wo?Math.pow(t[0],3):(116*t[0]-16)/Ct,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Ct,t[2]>wo?Math.pow(t[2],3):(116*t[2]-16)/Ct].map((n,o)=>n*Cr[o])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function sr(e){return(e%360+360)%360}function pc(e,t){if(e==="raw")return t;let[r,n]=t.map(sr),o=n-r;return e==="increasing"?o<0&&(n+=360):e==="decreasing"?o>0&&(r+=360):e==="longer"?-180<o&&o<180&&(o>0?r+=360:n+=360):e==="shorter"&&(o>180?r+=360:o<-180&&(n+=360)),[r,n]}var ut=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:W,fromBase(e){let[t,r,n]=e,o;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),sr(o)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const xo=25**7,Yt=Math.PI,ko=180/Yt,Be=Yt/180;function jr(e,t,{kL:r=1,kC:n=1,kH:o=1}={}){let[a,s,i]=W.from(e),l=ut.from(W,[a,s,i])[1],[c,u,d]=W.from(t),f=ut.from(W,[c,u,d])[1];l<0&&(l=0),f<0&&(f=0);let p=((l+f)/2)**7,m=.5*(1-Math.sqrt(p/(p+xo))),g=(1+m)*s,x=(1+m)*u,S=Math.sqrt(g**2+i**2),k=Math.sqrt(x**2+d**2),T=g===0&&i===0?0:Math.atan2(i,g),R=x===0&&d===0?0:Math.atan2(d,x);T<0&&(T+=2*Yt),R<0&&(R+=2*Yt),T*=ko,R*=ko;let xe=c-a,he=k-S,te=R-T,We=T+R,Ln=Math.abs(te),Ye;S*k===0?Ye=0:Ln<=180?Ye=te:te>180?Ye=te-360:te<-180?Ye=te+360:console.log("the unthinkable has happened");let On=2*Math.sqrt(k*S)*Math.sin(Ye*Be/2),di=(a+c)/2,hr=(S+k)/2,zn=Math.pow(hr,7),ae;S*k===0?ae=We:Ln<=180?ae=We/2:We<360?ae=(We+360)/2:ae=(We-360)/2;let Dn=(di-50)**2,fi=1+.015*Dn/Math.sqrt(20+Dn),Vn=1+.045*hr,Ze=1;Ze-=.17*Math.cos((ae-30)*Be),Ze+=.24*Math.cos(2*ae*Be),Ze+=.32*Math.cos((3*ae+6)*Be),Ze-=.2*Math.cos((4*ae-63)*Be);let Hn=1+.015*hr*Ze,hi=30*Math.exp(-1*((ae-275)/25)**2),pi=2*Math.sqrt(zn/(zn+xo)),mi=-1*Math.sin(2*hi*Be)*pi,kt=(xe/(r*fi))**2;return kt+=(he/(n*Vn))**2,kt+=(On/(o*Hn))**2,kt+=mi*(he/(n*Vn))*(On/(o*Hn)),Math.sqrt(kt)}const mc=75e-6;function tt(e,t=e.space,{epsilon:r=mc}={}){e=E(e),t=b.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function dt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function ve(e,{method:t=oe.gamut_mapping,space:r=e.space}={}){if(bt(arguments[1])&&(r=arguments[1]),r=b.get(r),tt(e,r,{epsilon:0}))return E(e);let n=q(e,r);if(t!=="clip"&&!tt(e,r)){let o=ve(dt(n),{method:"clip",space:r});if(jr(e,o)>2){let a=b.resolveCoord(t),s=a.space,i=a.id,l=q(n,s),u=(a.range||a.refRange)[0],d=.01,f=u,h=J(l,i);for(;h-f>d;){let p=dt(l);p=ve(p,{space:r,method:"clip"}),jr(l,p)-2<d?f=J(l,i):h=J(l,i),be(l,i,(f+h)/2)}n=q(l,r)}else n=o}if(t==="clip"||!tt(n,r,{epsilon:0})){let o=Object.values(r.coords).map(a=>a.range||[]);n.coords=n.coords.map((a,s)=>{let[i,l]=o[s];return i!==void 0&&(a=Math.max(i,a)),l!==void 0&&(a=Math.min(a,l)),a})}return r!==e.space&&(n=q(n,e.space)),e.coords=n.coords,e}ve.returns="color";function q(e,t,{inGamut:r}={}){e=E(e),t=b.get(t);let n=t.from(e),o={space:t,coords:n,alpha:e.alpha};return r&&(o=ve(o)),o}q.returns="color";function Zt(e,{precision:t=oe.precision,format:r="default",inGamut:n=!0,...o}={}){var l;let a;e=E(e);let s=r;r=e.space.getFormat(r)??e.space.getFormat("default")??b.DEFAULT_FORMAT,n||(n=r.toGamut);let i=e.coords;if(i=i.map(c=>c||0),n&&!tt(e)&&(i=ve(dt(e),n===!0?void 0:n).coords),r.type==="custom")if(o.precision=t,r.serialize)a=r.serialize(i,e.alpha,o);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?i=r.serializeCoords(i,t):t!==null&&(i=i.map(h=>Ft(h,t)));let u=[...i];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||e.space.id;u.unshift(h)}let d=e.alpha;t!==null&&(d=Ft(d,t));let f=e.alpha<1&&!r.noAlpha?`${r.commas?",":" /"} ${d}`:"";a=`${c}(${u.join(r.commas?", ":" ")}${f})`}return a}const gc=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],bc=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ir=new F({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:gc,fromXYZ_M:bc,formats:{color:{}}});const St=1.09929682680944,Co=.018053968510807;var ds=new F({id:"rec2020",name:"REC.2020",base:ir,toBase(e){return e.map(function(t){return t<Co*4.5?t/4.5:Math.pow((t+St-1)/St,1/.45)})},fromBase(e){return e.map(function(t){return t>=Co?St*Math.pow(t,.45)-(St-1):4.5*t})},formats:{color:{}}});const vc=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],yc=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var fs=new F({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:vc,fromXYZ_M:yc});const $c=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],wc=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var hs=new F({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:$c,fromXYZ_M:wc,formats:{color:{}}}),So={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Eo=Array(3).fill("<percentage> | <number>[0, 255]"),_o=Array(3).fill("<number>[0, 255]");var ft=new F({id:"srgb",name:"sRGB",base:hs,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Eo},rgb_number:{name:"rgb",commas:!0,coords:_o,noAlpha:!0},color:{},rgba:{coords:Eo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:_o},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(a=>Math.round(a*255));let n=r&&e.every(a=>a%17===0);return"#"+e.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=So.black,t.alpha=0):t.coords=So[e],t.coords)return t}}}}),ps=new F({id:"p3",name:"P3",base:fs,fromBase:ft.fromBase,toBase:ft.toBase,formats:{color:{id:"display-p3"}}});oe.display_space=ft;if(typeof CSS<"u"&&CSS.supports)for(let e of[W,ds,ps]){let t=e.getMinCoords(),n=Zt({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){oe.display_space=e;break}}function xc(e,{space:t=oe.display_space,...r}={}){let n=Zt(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!oe.display_space)n=new String(n),n.color=e;else{let o=q(e,t);n=new String(Zt(o,r)),n.color=o}return n}function ms(e,t,r="lab"){r=b.get(r);let n=r.from(e),o=r.from(t);return Math.sqrt(n.reduce((a,s,i)=>{let l=o[i];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function kc(e,t){return e=E(e),t=E(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function ye(e){return J(e,[X,"y"])}function gs(e,t){be(e,[X,"y"],t)}function Cc(e){Object.defineProperty(e.prototype,"luminance",{get(){return ye(this)},set(t){gs(this,t)}})}var Sc=Object.freeze({__proto__:null,getLuminance:ye,register:Cc,setLuminance:gs});function Ec(e,t){e=E(e),t=E(t);let r=Math.max(ye(e),0),n=Math.max(ye(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const _c=.56,Tc=.57,Mc=.62,Ac=.65,To=.022,Pc=1.414,Nc=.1,Rc=5e-4,Bc=1.14,Mo=.027,Lc=1.14;function Ao(e){return e>=To?e:e+(To-e)**Pc}function Le(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function Oc(e,t){t=E(t),e=E(e);let r,n,o,a,s,i;t=q(t,"srgb"),[a,s,i]=t.coords;let l=Le(a)*.2126729+Le(s)*.7151522+Le(i)*.072175;e=q(e,"srgb"),[a,s,i]=e.coords;let c=Le(a)*.2126729+Le(s)*.7151522+Le(i)*.072175,u=Ao(l),d=Ao(c),f=d>u;return Math.abs(d-u)<Rc?n=0:f?(r=d**_c-u**Tc,n=r*Bc):(r=d**Ac-u**Mc,n=r*Lc),Math.abs(n)<Nc?o=0:n>0?o=n-Mo:o=n+Mo,o*100}function zc(e,t){e=E(e),t=E(t);let r=Math.max(ye(e),0),n=Math.max(ye(t),0);n>r&&([r,n]=[n,r]);let o=r+n;return o===0?0:(r-n)/o}const Dc=5e4;function Vc(e,t){e=E(e),t=E(t);let r=Math.max(ye(e),0),n=Math.max(ye(t),0);return n>r&&([r,n]=[n,r]),n===0?Dc:(r-n)/n}function Hc(e,t){e=E(e),t=E(t);let r=J(e,[W,"l"]),n=J(t,[W,"l"]);return Math.abs(r-n)}const Ic=216/24389,Po=24/116,Et=24389/27;let Sr=ee.D65;var Fr=new b({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Sr,base:X,fromBase(e){let r=e.map((n,o)=>n/Sr[o]).map(n=>n>Ic?Math.cbrt(n):(Et*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Po?Math.pow(t[0],3):(116*t[0]-16)/Et,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Et,t[2]>Po?Math.pow(t[2],3):(116*t[2]-16)/Et].map((n,o)=>n*Sr[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Er=Math.pow(5,.5)*.5+.5;function jc(e,t){e=E(e),t=E(t);let r=J(e,[Fr,"l"]),n=J(t,[Fr,"l"]),o=Math.abs(Math.pow(r,Er)-Math.pow(n,Er)),a=Math.pow(o,1/Er)*Math.SQRT2-40;return a<7.5?0:a}var Lt=Object.freeze({__proto__:null,contrastAPCA:Oc,contrastDeltaPhi:jc,contrastLstar:Hc,contrastMichelson:zc,contrastWCAG21:Ec,contrastWeber:Vc});function Fc(e,t,r={}){bt(r)&&(r={algorithm:r});let{algorithm:n,...o}=r;if(!n){let a=Object.keys(Lt).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}e=E(e),t=E(t);for(let a in Lt)if("contrast"+n.toLowerCase()===a.toLowerCase())return Lt[a](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function bs(e){let[t,r,n]=vt(e,X),o=t+15*r+3*n;return[4*t/o,9*r/o]}function vs(e){let[t,r,n]=vt(e,X),o=t+r+n;return[t/o,r/o]}function Uc(e){Object.defineProperty(e.prototype,"uv",{get(){return bs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return vs(this)}})}var Wc=Object.freeze({__proto__:null,register:Uc,uv:bs,xy:vs});function Yc(e,t){return ms(e,t,"lab")}const Zc=Math.PI,No=Zc/180;function qc(e,t,{l:r=2,c:n=1}={}){let[o,a,s]=W.from(e),[,i,l]=ut.from(W,[o,a,s]),[c,u,d]=W.from(t),f=ut.from(W,[c,u,d])[1];i<0&&(i=0),f<0&&(f=0);let h=o-c,p=i-f,m=a-u,g=s-d,x=m**2+g**2-p**2,S=.511;o>=16&&(S=.040975*o/(1+.01765*o));let k=.0638*i/(1+.0131*i)+.638,T;Number.isNaN(l)&&(l=0),l>=164&&l<=345?T=.56+Math.abs(.2*Math.cos((l+168)*No)):T=.36+Math.abs(.4*Math.cos((l+35)*No));let R=Math.pow(i,4),xe=Math.sqrt(R/(R+1900)),he=k*(xe*T+1-xe),te=(h/(r*S))**2;return te+=(p/(n*k))**2,te+=x/he**2,Math.sqrt(te)}const Ro=203;var Cn=new b({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:X,fromBase(e){return e.map(t=>Math.max(t*Ro,0))},toBase(e){return e.map(t=>Math.max(t/Ro,0))}});const _t=1.15,Tt=.66,Bo=2610/2**14,Gc=2**14/2610,Lo=3424/2**12,Oo=2413/2**7,zo=2392/2**7,Xc=1.7*2523/2**5,Do=2**5/(1.7*2523),Mt=-.56,_r=16295499532821565e-27,Jc=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Kc=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Qc=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],eu=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ys=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Cn,fromBase(e){let[t,r,n]=e,o=_t*t-(_t-1)*n,a=Tt*r-(Tt-1)*t,i=P(Jc,[o,a,n]).map(function(f){let h=Lo+Oo*(f/1e4)**Bo,p=1+zo*(f/1e4)**Bo;return(h/p)**Xc}),[l,c,u]=P(Qc,i);return[(1+Mt)*l/(1+Mt*l)-_r,c,u]},toBase(e){let[t,r,n]=e,o=(t+_r)/(1+Mt-Mt*(t+_r)),s=P(eu,[o,r,n]).map(function(f){let h=Lo-f**Do,p=zo*f**Do-Oo;return 1e4*(h/p)**Gc}),[i,l,c]=P(Kc,s),u=(i+(_t-1)*c)/_t,d=(l+(Tt-1)*u)/Tt;return[u,d,c]},formats:{color:{}}}),Ur=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ys,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),sr(o)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}});function tu(e,t){let[r,n,o]=Ur.from(e),[a,s,i]=Ur.from(t),l=r-a,c=n-s;Number.isNaN(o)&&Number.isNaN(i)?(o=0,i=0):Number.isNaN(o)?o=i:Number.isNaN(i)&&(i=o);let u=o-i,d=2*Math.sqrt(n*s)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+c**2+d**2)}const $s=3424/4096,ws=2413/128,xs=2392/128,Vo=2610/16384,ru=2523/32,nu=16384/2610,Ho=32/2523,ou=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],au=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],su=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],iu=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]];var Wr=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Cn,fromBase(e){let t=P(ou,e);return lu(t)},toBase(e){let t=cu(e);return P(iu,t)},formats:{color:{}}});function lu(e){let t=e.map(function(r){let n=$s+ws*(r/1e4)**Vo,o=1+xs*(r/1e4)**Vo;return(n/o)**ru});return P(au,t)}function cu(e){return P(su,e).map(function(n){let o=Math.max(n**Ho-$s,0),a=ws-xs*n**Ho;return 1e4*(o/a)**nu})}function uu(e,t){let[r,n,o]=Wr.from(e),[a,s,i]=Wr.from(t);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(o-i)**2)}const du=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],fu=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],hu=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],pu=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]];var qt=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:X,fromBase(e){let r=P(du,e).map(n=>Math.cbrt(n));return P(hu,r)},toBase(e){let r=P(pu,e).map(n=>n**3);return P(fu,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function mu(e,t){let[r,n,o]=qt.from(e),[a,s,i]=qt.from(t),l=r-a,c=n-s,u=o-i;return Math.sqrt(l**2+c**2+u**2)}var Gt={deltaE76:Yc,deltaECMC:qc,deltaE2000:jr,deltaEJz:tu,deltaEITP:uu,deltaEOK:mu};function Qe(e,t,r={}){bt(r)&&(r={method:r});let{method:n=oe.deltaE,...o}=r;e=E(e),t=E(t);for(let a in Gt)if("deltae"+n.toLowerCase()===a.toLowerCase())return Gt[a](e,t,o);throw new TypeError(`Unknown deltaE method: ${n}`)}function gu(e,t=.25){let n=[b.get("oklch","lch"),"l"];return be(e,n,o=>o*(1+t))}function bu(e,t=.25){let n=[b.get("oklch","lch"),"l"];return be(e,n,o=>o*(1-t))}var vu=Object.freeze({__proto__:null,darken:bu,lighten:gu});function ks(e,t,r=.5,n={}){[e,t]=[E(e),E(t)],pe(r)==="object"&&([r,n]=[.5,r]);let{space:o,outputSpace:a,premultiplied:s}=n;return yt(e,t,{space:o,outputSpace:a,premultiplied:s})(r)}function Cs(e,t,r={}){let n;Sn(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:o,deltaEMethod:a,steps:s=2,maxSteps:i=1e3,...l}=r;n||([e,t]=[E(e),E(t)],n=yt(e,t,l));let c=Qe(e,t),u=o>0?Math.max(s,Math.ceil(c/o)+1):s,d=[];if(i!==void 0&&(u=Math.min(u,i)),u===1)d=[{p:.5,color:n(.5)}];else{let f=1/(u-1);d=Array.from({length:u},(h,p)=>{let m=p*f;return{p:m,color:n(m)}})}if(o>0){let f=d.reduce((h,p,m)=>{if(m===0)return 0;let g=Qe(p.color,d[m-1].color,a);return Math.max(h,g)},0);for(;f>o;){f=0;for(let h=1;h<d.length&&d.length<i;h++){let p=d[h-1],m=d[h],g=(m.p+p.p)/2,x=n(g);f=Math.max(f,Qe(x,p.color),Qe(x,m.color)),d.splice(h,0,{p:g,color:n(g)}),h++}}}return d=d.map(f=>f.color),d}function yt(e,t,r={}){if(Sn(e)){let[l,c]=[e,t];return yt(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:o,progression:a,premultiplied:s}=r;e=E(e),t=E(t),e=dt(e),t=dt(t);let i={colors:[e,t],options:r};if(n?n=b.get(n):n=b.registry[oe.interpolationSpace]||e.space,o=o?b.get(o):n,e=q(e,n),t=q(t,n),e=ve(e),t=ve(t),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[u,d]=[J(e,c),J(t,c)];[u,d]=pc(l,[u,d]),be(e,c,u),be(t,c,d)}return s&&(e.coords=e.coords.map(l=>l*e.alpha),t.coords=t.coords.map(l=>l*t.alpha)),Object.assign(l=>{l=a?a(l):l;let c=e.coords.map((f,h)=>{let p=t.coords[h];return Ut(f,p,l)}),u=Ut(e.alpha,t.alpha,l),d={space:n,coords:c,alpha:u};return s&&(d.coords=d.coords.map(f=>f/u)),o!==n&&(d=q(d,o)),d},{rangeArgs:i})}function Sn(e){return pe(e)==="function"&&!!e.rangeArgs}oe.interpolationSpace="lab";function yu(e){e.defineFunction("mix",ks,{returns:"color"}),e.defineFunction("range",yt,{returns:"function<color>"}),e.defineFunction("steps",Cs,{returns:"array<color>"})}var $u=Object.freeze({__proto__:null,isRange:Sn,mix:ks,range:yt,register:yu,steps:Cs}),Ss=new b({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ft,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,o,a]=e,[s,i,l]=[NaN,0,(r+t)/2],c=t-r;if(c!==0){switch(i=l===0||l===1?0:(t-l)/Math.min(l,1-l),t){case n:s=(o-a)/c+(o<a?6:0);break;case o:s=(a-n)/c+2;break;case a:s=(n-o)/c+4}s=s*60}return[s,i*100,l*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function o(a){let s=(a+t/30)%12,i=r*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Es=new b({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Ss,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n+r*Math.min(n,1-n);return[t,o===0?0:200*(1-n/o),100*o]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=n*(1-r/2);return[t,o===0||o===1?0:(n-o)/Math.min(o,1-o)*100,o*100]},formats:{color:{toGamut:!0}}}),wu=new b({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Es,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let o=r+n;if(o>=1){let i=r/o;return[t,0,i*100]}let a=1-n,s=a===0?0:1-r/a;return[t,s*100,a*100]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}});const xu=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],ku=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var _s=new F({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:xu,fromXYZ_M:ku}),Cu=new F({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:_s,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t)),formats:{color:{id:"a98-rgb"}}});const Su=[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],Eu=[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]];var Ts=new F({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:kn,toXYZ_M:Su,fromXYZ_M:Eu});const _u=1/512,Tu=16/512;var Mu=new F({id:"prophoto",name:"ProPhoto",base:Ts,toBase(e){return e.map(t=>t<Tu?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=_u?t**(1/1.8):16*t)},formats:{color:{id:"prophoto-rgb"}}}),Au=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:qt,fromBase(e){let[t,r,n]=e,o;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?o=NaN:o=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),sr(o)]},toBase(e){let[t,r,n]=e,o,a;return isNaN(n)?(o=0,a=0):(o=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[t,o,a]},formats:{oklch:{coords:["<number> | <percentage>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});const Io=203,jo=2610/2**14,Pu=2**14/2610,Nu=2523/2**5,Fo=2**5/2523,Uo=3424/2**12,Wo=2413/2**7,Yo=2392/2**7;var Ru=new F({id:"rec2100pq",name:"REC.2100-PQ",base:ir,toBase(e){return e.map(function(t){return(Math.max(t**Fo-Uo,0)/(Wo-Yo*t**Fo))**Pu*1e4/Io})},fromBase(e){return e.map(function(t){let r=Math.max(t*Io/1e4,0),n=Uo+Wo*r**jo,o=1+Yo*r**jo;return(n/o)**Nu})},formats:{color:{id:"rec2100-pq"}}});const Zo=.17883277,qo=.28466892,Go=.55991073,Tr=3.7743;var Bu=new F({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ir,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Tr:(Math.exp((t-Go)/Zo)+qo)/12*Tr})},fromBase(e){return e.map(function(t){return t/=Tr,t<=1/12?Math.sqrt(3*t):Zo*Math.log(12*t-qo)+Go})},formats:{color:{id:"rec2100-hlg"}}});const Ms={};ge.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=As(e.W1,e.W2,e.options.method))});ge.add("chromatic-adaptation-end",e=>{e.M||(e.M=As(e.W1,e.W2,e.options.method))});function lr({id:e,toCone_M:t,fromCone_M:r}){Ms[e]=arguments[0]}function As(e,t,r="Bradford"){let n=Ms[r],[o,a,s]=P(n.toCone_M,e),[i,l,c]=P(n.toCone_M,t),u=[[i/o,0,0],[0,l/a,0],[0,0,c/s]],d=P(u,n.toCone_M);return P(n.fromCone_M,d)}lr({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]});lr({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]});lr({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]});lr({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]});Object.assign(ee,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});ee.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const Lu=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],Ou=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ps=new F({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:ee.ACES,toXYZ_M:Lu,fromXYZ_M:Ou,formats:{color:{}}});const At=2**-16,Mr=-.35828683,Pt=(Math.log2(65504)+9.72)/17.52;var zu=new F({id:"acescc",name:"ACEScc",coords:{r:{range:[Mr,Pt],name:"Red"},g:{range:[Mr,Pt],name:"Green"},b:{range:[Mr,Pt],name:"Blue"}},referred:"scene",base:Ps,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-At)*2:r<Pt?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(At)+9.72)/17.52:t<At?(Math.log2(At+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})},formats:{color:{}}}),Xo=Object.freeze({__proto__:null,A98RGB:Cu,A98RGB_Linear:_s,ACEScc:zu,ACEScg:Ps,HSL:Ss,HSV:Es,HWB:wu,ICTCP:Wr,JzCzHz:Ur,Jzazbz:ys,LCH:ut,Lab:W,Lab_D65:Fr,OKLCH:Au,OKLab:qt,P3:ps,P3_Linear:fs,ProPhoto:Mu,ProPhoto_Linear:Ts,REC_2020:ds,REC_2020_Linear:ir,REC_2100_HLG:Bu,REC_2100_PQ:Ru,XYZ_ABS_D65:Cn,XYZ_D50:kn,XYZ_D65:X,sRGB:ft,sRGB_Linear:hs});class ${constructor(...t){let r;t.length===1&&(r=E(t[0]));let n,o,a;r?(n=r.space||r.spaceId,o=r.coords,a=r.alpha):[n,o,a]=t,Object.defineProperty(this,"space",{value:b.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=o?o.slice():[0,0,0],this.alpha=a<1?a:1;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:i=>this.set(s,i)})}get spaceId(){return this.space.id}clone(){return new $(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=xc(this,...t);return r.color=new $(r.color),r}static get(t,...r){return t instanceof $?t:new $(t,...r)}static defineFunction(t,r,n=r){let{instance:o=!0,returns:a}=n,s=function(...i){let l=r(...i);if(a==="color")l=$.get(l);else if(a==="function<color>"){let c=l;l=function(...u){let d=c(...u);return $.get(d)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>$.get(c)));return l};t in $||($[t]=s),o&&($.prototype[t]=function(...i){return s(this,...i)})}static defineFunctions(t){for(let r in t)$.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register($);else for(let r in t)$.defineFunction(r,t[r])}}$.defineFunctions({get:J,getAll:vt,set:be,setAll:us,to:q,equals:kc,inGamut:tt,toGamut:ve,distance:ms,toString:Zt});Object.assign($,{util:cc,hooks:ge,WHITES:ee,Space:b,spaces:b.registry,parse:cs,defaults:oe});for(let e of Object.keys(Xo))b.register(Xo[e]);for(let e in b.registry)Yr(e,b.registry[e]);ge.add("colorspace-init-end",e=>{var t;Yr(e.id,e),(t=e.aliases)==null||t.forEach(r=>{Yr(r,e)})});function Yr(e,t){Object.keys(t.coords),Object.values(t.coords).map(n=>n.name);let r=e.replace(/-/g,"_");Object.defineProperty($.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(o,a)=>{try{return b.resolveCoord([t,a]),!0}catch{}return Reflect.has(o,a)},get:(o,a,s)=>{if(a&&typeof a!="symbol"&&!(a in o)){let{index:i}=b.resolveCoord([t,a]);if(i>=0)return o[i]}return Reflect.get(o,a,s)},set:(o,a,s,i)=>{if(a&&typeof a!="symbol"&&!(a in o)||a>=0){let{index:l}=b.resolveCoord([t,a]);if(l>=0)return o[l]=s,this.setAll(e,o),!0}return Reflect.set(o,a,s,i)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}$.extend(Gt);$.extend({deltaE:Qe});Object.assign($,{deltaEMethods:Gt});$.extend(vu);$.extend({contrast:Fc});$.extend(Wc);$.extend(Sc);$.extend($u);$.extend(Lt);function Ns(e){return fe(e,(t,r)=>r instanceof $?M(r.toString({format:"hex"})):Ns(r))}const Du="dodgerblue";function Zr(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function Ar({background:e,foreground:t}){return{background:e??new $(Zr(t)),foreground:t??new $(Zr(e))}}var Xt;(function(e){e.Dark="dark",e.Light="light"})(Xt||(Xt={}));function Vu(e){return e==="black"?"white":"black"}const Hu={black:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")},white:{foregroundFaint1:new $("#ccc"),foregroundFaint2:new $("#eee")}},Iu={black:{backgroundFaint1:new $("#666"),backgroundFaint2:new $("#444")},white:{backgroundFaint1:new $("#ccc"),backgroundFaint2:new $("#fafafa")}};function Jo({themeColor:e=Du,themeStyle:t=Xt.Light}={}){const r=new $(e),n=new $(t===Xt.Dark?"black":"white"),o=Zr(n),a=new $(o),s={nav:{hover:Ar({background:r.clone().set({"hsl.l":93})}),active:Ar({background:r.clone().set({"hsl.l":90})}),selected:Ar({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Iu[Vu(o)],foreground:a,...Hu[o]}};return Ns(s)}const Jt=mn()("element-book-change-route");var ju=globalThis&&globalThis.__esDecorate||function(e,t,r,n,o,a){function s(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var i=n.kind,l=i==="getter"?"get":i==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,u=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,h=r.length-1;h>=0;h--){var p={};for(var m in n)p[m]=m==="access"?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function(x){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(x||null))};var g=(0,r[h])(i==="accessor"?{get:u.get,set:u.set}:u[l],p);if(i==="accessor"){if(g===void 0)continue;if(g===null||typeof g!="object")throw new TypeError("Object expected");(d=s(g.get))&&(u.get=d),(d=s(g.set))&&(u.set=d),(d=s(g.init))&&o.unshift(d)}else(d=s(g))&&(i==="field"?o.unshift(d):u[l]=d)}c&&Object.defineProperty(c,n.name,u),f=!0},Fu=globalThis&&globalThis.__runInitializers||function(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0},Uu=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function Wu(){function e(t,r){return t}return e}let Rs=(()=>{let e=[Wu()],t,r=[],n;return n=class extends Ve{},Uu(n,"DeclarativeElement"),ju(null,t={value:n},e,{kind:"class",name:n.name},null,r),n=t.value,Fu(n,r),n})();const En=Symbol("key for ignoring inputs not having been set yet"),Yu={[En]:!0,allowPolymorphicState:!1};function Bs(e,t){const r=e.instanceState;B(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&B(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)}),Ls(e)}function Ls(e){e.haveInputsBeenSet||(e.haveInputsBeenSet=!0)}function Os(e,t){return qr(e,t),e.element}function Zu(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function qr(e,t){const r=Zu(e),n=r?`: in ${r}`:"";if(e.type!==mt.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function I(e,t){return t?Ko(e,t):Ko(void 0,e)}const Ko=Ne(class extends we{constructor(e){super(e),this.element=Os(e,"assign")}render(e,t){return Bs(this.element,t),Y}});function zs(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const r=t.host;return r instanceof Rs?!0:zs(r)}function Qo(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class qu extends CustomEvent{get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0}),this._type=""}}function Ds(){return e=>{var t;return t=class extends qu{constructor(r){super(e,r),this._type=e}},t.type=e,t}}function $e(){return Ds()}function Gu(e){return e?Object.keys(e).filter(t=>{if(typeof t!="string")throw new Error(`Expected event key of type string but got type "${typeof t}" for key ${String(t)}`);if(t==="")throw new Error("Got empty string for events key.");return!0}).reduce((t,r)=>{const n=Ds()(r);return t[r]=n,t},{}):{}}const Xu="_elementVirStateSetup";function Ju(e){return me(e)?Xu in e:!1}function Ku(e,t){const r=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return Rr(e)===Rr(t)&&r}const Vs=Symbol("and"),Hs=Symbol("or"),Is=Symbol("exact"),js=Symbol("enum"),_n=Symbol("unknown"),Fs="__vir__shape__definition__key__do__not__use__in__actual__objects";function Us(e){return H(e,Fs)}const Ws="__vir__shape__specifier__key__do__not__use__in__actual__objects",Qu=[Vs,Hs,Is,js,_n];function ed(){return td([],_n)}function cr(e){return $t(e,Hs)}function Tn(e){return $t(e,Vs)}function Mn(e){return $t(e,Is)}function An(e){return $t(e,js)}function Pn(e){return $t(e,_n)}function $t(e,t){const r=ur(e);return!!r&&r.specifierType===t}function td(e,t){return{[Ws]:!0,specifierType:t,parts:e}}function Ot(e,t){const r=ur(t);if(r){if(Tn(r))return r.parts.every(n=>Ot(e,n));if(cr(r))return r.parts.some(n=>Ot(e,n));if(Mn(r))return me(e)?Ot(e,r.parts[0]):e===r.parts[0];if(An(r))return Object.values(r.parts[0]).some(n=>n===e);if(Pn(r))return!0}return Ku(e,t)}function ur(e){if(me(e)&&H(e,Ws)){if(!H(e,"parts")||!re(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!H(e,"specifierType")||!vi(Qu,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}function Gr(e){return Xr(e)}function Xr(e){const t=ur(e);if(t){if(cr(t)||Mn(t))return Xr(t.parts[0]);if(Tn(t))return t.parts.reduce((r,n)=>Object.assign(r,Xr(n)),{});if(An(t))return Object.values(t.parts[0])[0];if(Pn(t))return"unknown";throw new Error(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return Us(e)?Gr(e.shape):e instanceof RegExp||re(e,"array")?e:me(e)?fe(e,(r,n)=>Gr(n)):e}function rd(e){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},defaultValue:Gr(e),[Fs]:!0}}class Q extends Error{constructor(){super(...arguments),this.name="ShapeMismatchError"}}function nd(e,t,r={}){try{return od(e,t,r),!0}catch{return!1}}function od(e,t,r={}){Se(e,t.shape,["top level"],{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys})}function Ys(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Se(e,t,r,n){if(Pn(t))return!0;if(Us(t))return Se(e,t.shape,r,n);const o=Ys(r);if(ur(e))throw new Q(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!Ot(e,t))throw new Q(`Subject does not match shape definition at key ${o}`);if(re(t,"function"))return re(e,"function");if(me(e)){const s=e,i=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(c=>[c,!1]));let l=!1;if(cr(t))l=t.parts.some(c=>{try{const u=Se(e,c,r,{...n,ignoreExtraKeys:!1});return Object.assign(i,u),!0}catch(u){if(u instanceof Q)return!1;throw u}});else if(Tn(t))l=t.parts.every(c=>{try{const u=Se(e,c,r,{...n,ignoreExtraKeys:!0});return Object.assign(i,u),!0}catch(u){if(u instanceof Q)return!1;throw u}});else if(Mn(t)){const c=Se(e,t.parts[0],r,{...n,exactValues:!0});Object.assign(i,c),l=!0}else{if(An(t))throw new Q(`Cannot compare an enum specifier to an object at ${o}`);if(re(t,"array")&&re(s,"array"))l=s.every((c,u)=>{const d=t.some(f=>{try{return Se(c,f,[...r,u],n),!0}catch(h){if(h instanceof Q)return!1;throw h}});return i[u]=d,d});else{const c=ad({keys:r,options:n,shape:t,subject:e});Object.assign(i,c),l=!0}}if(!l)throw new Q("no error message");return n.ignoreExtraKeys||Object.entries(i).forEach(([c,u])=>{if(!u)throw new Q(`subject as extra key '${c}' in ${o}.`)}),i}else if(n.exactValues)return e===t;return!0}function ad({keys:e,options:t,shape:r,subject:n}){const o=Ys(e),a={};if(me(r)){const s=new Set(B(n)),i=new Set(B(r));t.ignoreExtraKeys||s.forEach(l=>{if(!i.has(l))throw new Q(`Subject has extra key '${String(l)}' in ${o}`)}),i.forEach(l=>{var f;const c=r[l],u=cr(c)?c.parts.includes(void 0):!1,d=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!s.has(l)&&!u&&!d)throw new Q(`Subject missing key '${String(l)}' in ${o}`)}),s.forEach(l=>{const c=n[l];if(t.ignoreExtraKeys&&!i.has(l))return;const u=r[l];Se(c,u,[...e,l],t),a[l]=!0})}else throw new Q(`shape definition at ${o} was not an object.`);return a}const sd=rd({addListener(){return!1},removeListener(){return!1},value:ed()});function Pr(e){return nd(e,sd,{allowExtraKeys:!0})}function id(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function ea(e,t){const r=e;function n(s){t?id(s,e,e.tagName):nr()(e,s)}function o(s,i){return n(i),r[i]}return new Proxy({},{get:o,set:(s,i,l)=>{const c=Ju(l)?l._elementVirStateSetup():l;n(i);const u=r[i];function d(p){s[i]=p,r[i]=p}const f=e.observablePropertyListenerMap[i];if(u!==c&&Pr(u)&&(f!=null&&f.length)&&u.removeListener(f),Pr(c))if(f)c.addListener(f);else{let p=function(){e.requestUpdate()};var h=p;e.observablePropertyListenerMap[i]=p,c.addListener(p)}else Pr(u)&&(e.observablePropertyListenerMap[i]=void 0);return d(c),!0},ownKeys:s=>Reflect.ownKeys(s),getOwnPropertyDescriptor(s,i){if(i in s)return{get value(){return o(s,i)},configurable:!0,enumerable:!0}},has:(s,i)=>Reflect.has(s,i)})}function ld(e){return e?fe(e,t=>t):{}}function cd({hostClassNames:e,cssVars:t}){return{hostClasses:fe(e,(r,n)=>({name:M(n),selector:M(`:host(.${n})`)})),cssVars:t}}function ud({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:o}){t&&B(t).forEach(a=>{const s=t[a],i=r[a];typeof s=="function"&&(s({state:n,inputs:o})?e.classList.add(i):e.classList.remove(i))})}function dd(e,t){function r(o){B(o).forEach(a=>{const s=o[a];e.instanceState[a]=s})}return{dispatch:o=>e.dispatchEvent(o),updateState:r,inputs:e.instanceInputs,host:e,state:e.instanceState,events:t}}var fd=globalThis&&globalThis.__setFunctionName||function(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})};function dr(e){var t;if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...Yu,...e.options},n=Gu(e.events),o=ld(e.hostClasses);e.hostClasses&&Qo(e.tagName,e.hostClasses),e.cssVars&&Qo(e.tagName,e.cssVars);const a=e.cssVars?j(e.cssVars):{},s=typeof e.styles=="function"?e.styles(cd({hostClassNames:o,cssVars:a})):e.styles||_e``,i=e.renderCallback;function l(...[u]){return{_elementVirIsWrappedDefinition:!0,definition:c,inputs:u}}const c=(t=class extends Rs{createRenderParams(){return dd(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){Ls(this)}render(){try{zs(this)&&!this.haveInputsBeenSet&&!r[En]&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${I.name}" directive on it. If no inputs are intended, use "${dr.name}" to define ${e.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();if(!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(u)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const d=i(u);if(d instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return ud({host:u.host,hostClassesInit:e.hostClasses,hostClassNames:o,state:u.state,inputs:u.inputs}),this.lastRenderedProps={inputs:{...u.inputs},state:{...u.state}},d}catch(u){const d=an(u);throw d.message=`Failed to render '${e.tagName}': ${d.message}`,d}}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&e.initCallback){this.initCalled=!0;const u=this.createRenderParams();if(e.initCallback(u)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const u=this.createRenderParams();if(e.cleanupCallback(u)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.initCalled=!1}assignInputs(u){Bs(this,u)}constructor(){var d;super(),this.initCalled=!1,this.hasRendered=!1,this.lastRenderedProps=void 0,this.haveInputsBeenSet=!1,this.definition={},this.observablePropertyListenerMap={},this.instanceInputs=ea(this,!1),this.instanceState=ea(this,!((d=e.options)!=null&&d.allowPolymorphicState));const u=e.stateInitStatic||{};B(u).forEach(f=>{nr()(this,f),this.instanceState[f]=u[f]}),this.definition=c}},fd(t,"anonymousClass"),t.tagName=e.tagName,t.styles=s,t.assign=l,t.isStrictInstance=()=>!1,t.events=n,t.renderCallback=i,t.hostClasses=o,t.cssVars=a,t.stateInitStatic=e.stateInitStatic,t);return Object.defineProperties(c,{name:{value:pa(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof c,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,c),c}function hd(){return e=>dr({...e,options:{[En]:!1,...e.options}})}function G(e,t){return pd(e,t)}const pd=Ne(class extends we{constructor(e){super(e),this.element=Os(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Y}}),Nr="onResize",fr=Ne(class extends we{constructor(e){super(e),this.resizeObserver=new ResizeObserver(t=>this.fireCallback(t)),qr(e,Nr)}fireCallback(e){var r;const t=e[0];if(!t)throw console.error(e),new Error(`${Nr} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:t.target,contentRect:t.contentRect})}update(e,[t]){qr(e,Nr),this.callback=t;const r=e.element;return r!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(r),this.element=r),this.render(t)}render(e){}});function je(e,t,r){return Aa(e,()=>t,()=>r)}function Zs(e){const{assertInputs:t,transformInputs:r}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(n=>n)};return{defineElement:()=>n=>(t(n),hd()(r(n))),defineElementNoInputs:n=>(t(n),dr(r(n)))}}function md(e,t,r){const n=!t.length&&!r.length,o=e.length?!1:!t.filter(i=>!!i.index).length;if(n||o)return[...e];const a=e.map(i=>[i]);return a.length||(a[0]=[]),r.forEach(i=>{i>=0&&i<e.length&&(a[i]=[])}),t.forEach(i=>{const l=a[i.index];l&&l.splice(0,0,...i.values)}),a.flat()}function Jr(e){return H(e,"_elementVirIsWrappedDefinition")&&!!e._elementVirIsWrappedDefinition}function Nn(e){return H(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function qs(e){return e.map(t=>Jr(t)?t.definition:t).filter(t=>Nn(t))}const Gs=new WeakMap;function gd(e,t){var o;const r=qs(t);return(o=Xs(Gs,[e,...r]).value)==null?void 0:o.template}function bd(e,t,r){const n=qs(t);return Ks(Gs,[e,...n],r)}function Xs(e,t,r=0){const{currentTemplateAndNested:n,reason:o}=Js(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Xs(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:o}}function Js(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const o=e.get(n);return o==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:o,reason:"key and value exists"}}function Ks(e,t,r,n=0){const{currentTemplateAndNested:o,currentKey:a,reason:s}=Js(e,t,n);if(!a)return{result:!1,reason:s};const i=o??{nested:void 0,template:void 0};if(o||e.set(a,i),n===t.length-1)return i.template=r,{result:!0,reason:"set value at end of keys array"};const l=i.nested??new WeakMap;return i.nested||(i.nested=l),Ks(l,t,r,n+1)}const vd=new WeakMap;function Qs(e,t,r){const n=gd(e,t),o=n??r();if(!n){const i=bd(e,t,o);if(i.result)vd.set(e,o);else throw new Error(`Failed to set template transform: ${i.reason}`)}const a=o.valuesTransform(t),s=md(t,a.valueInsertions,a.valueIndexDeletions);return{strings:o.templateStrings,values:s}}function ei(e,t,r,n){const o=[],a=[],s=[],i=[];return e.forEach((c,u)=>{const d=o.length-1,f=o[d],h=u-1,p=t[h];n&&n(c);let m,g=[];if(typeof f=="string"&&(m=r(f,c,p),m)){o[d]=f+m.replacement,s.push(h);const S=m.getExtraValues;g=S?S(p):[],g.length&&S?(o[d]+=" ",g.forEach((k,T)=>{T&&o.push(" ")}),i.push(k=>{const T=k[h],R=S(T);return{index:h,values:R}}),o.push(c)):o[d]+=c}m||o.push(c);const x=e.raw[u];m?(a[d]=a[d]+m.replacement+x,g.length&&g.forEach(()=>{a.push("")})):a.push(x)}),{templateStrings:Object.assign([],o,{raw:a}),valuesTransform(c){const u=i.map(d=>d(c)).flat();return{valueIndexDeletions:s,valueInsertions:u}}}}function yd(...[e,t,r]){if(Nn(r))return{replacement:r.tagName,getExtraValues:void 0}}function $d(e,t){return ei(e,t,yd)}function v(e,...t){const r=Qs(e,t,()=>$d(e,t));return _e(r.strings,...r.values)}function wd(...[e,t,r]){const n=Jr(r)?r.definition:r,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),a=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),s=o||a,i=Nn(n);if(s&&!i)throw console.error({lastNewString:e,currentLitString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n.prototype.constructor.name}'`);return!s||!i?void 0:{replacement:n.tagName,getExtraValues(c){const u=Jr(c)?c.inputs:void 0;return[o&&u&&Object.values(u).length?I(u):void 0].filter(pt)}}}function xd(e){}function kd(e){return ei(e.strings,e.values,wd,xd)}function w(e,...t){const r=xa(e,...t),n=Qs(e,t,()=>kd(r));return{...r,strings:n.strings,values:n.values}}const ta="vira-",{defineElement:wt,defineElementNoInputs:Jd}=Zs({assertInputs:e=>{if(!e.tagName.startsWith(ta))throw new Error(`Tag name should start with '${ta}' but got '${e.tagName}'`)}}),ti=v`
    pointer-events: none;
    opacity: 0.3;
`,rt=j({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Cd(e){return`${e}px`}const Kt=j({"vira-form-input-border-radius":"8px"}),Qt=j({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${Kt["vira-form-input-border-radius"].value} + 4px)`});function ri({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=M(Cd(n+r+t));return v`
        ${M(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Qt["vira-focus-outline-color"].value};
            border-radius: ${Qt["vira-focus-outline-border-radius"].value};
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
`,ni=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,Kr=j({"vira-icon-color":"currentColor"}),Sd=j({"vira-icon-stroke-color":Kr["vira-icon-color"].value,"vira-icon-fill-color":Kr["vira-icon-color"].value}),zt={...Kr,...Sd},V=wt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            color: ${zt["vira-icon-color"].value};
            fill: ${zt["vira-icon-fill-color"].value};
            stroke: ${zt["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var Qr;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(Qr||(Qr={}));wt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===Qr.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${ni};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Qt["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${ti};
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
            border-radius: ${Kt["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${rt["vira-interaction-animation-duration"].value},
                background-color
                    ${rt["vira-interaction-animation-duration"].value},
                border-color ${rt["vira-interaction-animation-duration"].value};
        }

        ${ri({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${V} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?w`
                  <${V}
                      ${I(V,{icon:e.icon})}
                  ></${V}>
              `:"",r=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:"";return w`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}});var en;(function(e){e.Header="header"})(en||(en={}));wt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
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
    `,events:{expandChange:$e()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${G("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${en.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${fr(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});function tn({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>tn({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function oi({value:e,allowed:t,blocked:r}){const n=t?tn({input:e,matcher:t}):!0,o=r?tn({input:e,matcher:r}):!1;return n&&!o}function ra(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(oi({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}wt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:$e(),inputBlocked:$e()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Qt["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${ti};
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
                ${ni};
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
                border-radius: ${Kt["vira-form-input-border-radius"].value};
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
                border-radius: ${Kt["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${ri({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${V} {
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=ra({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?w`
                  <${V} ${I(V,{icon:e.icon})}></${V}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return w`
            <label>
                ${s}
                ${je(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${fr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${un({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${G("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)oi({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:h,blocked:p}=ra({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=h,t(new o.inputBlocked(p))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${je(!!e.suffix,w`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});wt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:$e()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&wn(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return w`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return w`
                <a href=${s} rel="noopener noreferrer" ${G("click",n)}>
                    <slot></slot>
                </a>
            `}}});function Rn({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Ed=Rn({name:"Element16Icon",svgTemplate:w`
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
    `});Rn({name:"Element24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `});const _d=Rn({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${zt["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),Td=v`
    padding: 0;
    margin: 0;
`;v`
    ${Td}
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;const{defineElement:K,defineElementNoInputs:Kd}=wl(),ne=K()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>Z`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:e,dispatch:t})=>{var n,o;const r=((o=e.router)==null?void 0:o.createRoutesUrl({...(n=e.router)==null?void 0:n.getCurrentRawRoutes(),...e.route}))??"#";return y`
            <a
                href=${r}
                ${ce("click",a=>{(!e.router||wn(a))&&(a.preventDefault(),window.scrollTo(0,0),t(new Jt(e.route)))})}
            >
                <slot></slot>
            </a>
        `}}),ie=K()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>Z`
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
            ${ne.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
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

        ${V} {
            display: inline-flex;
            color: ${C["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){const t=e.flattenedNodes.map(r=>{const n=Z`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length};
            `;return y`
                <li style=${n}>
                    <${ne.assign({router:e.router,route:{paths:[D.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${un({"title-row":!0,selected:e.selectedPath?et(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${or(He(r,O.ElementExample),y`
                                    <${V.assign({icon:Ed})}></${V}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${ne}>
                </li>
            `});return y`
            <slot name=${ue.NavHeader}></slot>
            <ul>
                ${t}
            </ul>
        `}});async function Md(e){await Vl(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await jl(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const de=K()({tagName:"book-error",styles:Z`
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
    `,renderCallback({inputs:e}){return(re(e.message,"array")?e.message:[e.message]).map(r=>y`
                    <p>${r}</p>
                `)}}),na=K()({tagName:"book-breadcrumbs",styles:Z`
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
                <${ne.assign({route:{hash:void 0,search:void 0,paths:[D.Book,...s]},router:e.router})}>
                    ${r}
                </${ne}>
                ${i}
            `}):y`
                &nbsp;
            `}}),oa=K()({tagName:"book-breadcrumbs-bar",styles:Z`
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
    `,renderCallback({inputs:e,dispatch:t}){return y`
            ${or(!!e.currentSearch,y`
                    &nbsp;
                `,y`
                    <${na.assign({currentRoute:e.currentRoute,router:e.router})}></${na}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${ce("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const o=n.value;await Pi(200),n.value===o&&(n.value?t(new Jt({paths:[D.Search,encodeURIComponent(n.value)]})):t(new Jt(lt)))})}
            />
        `}}),ht=K()({tagName:"book-page-controls",events:{controlValueChange:Da()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>Z`
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

        ${V}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,o],a)=>{if(o.controlType===_.Hidden)return"";const s=Ad(e.currentValues[n],o,i=>{const l=re(e.fullUrlBreadcrumbs,"array")?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...e.currentValues,[n]:i}}))});return y`
                    <div class="control-wrapper">
                        ${or(a===0,y`
                                <${V.assign({icon:_d})}
                                    class="options-icon"
                                ></${V}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function Ad(e,t,r){return Re(t,_.Hidden)?"":Re(t,_.Checkbox)?y`
            <input
                type="checkbox"
                .value=${e}
                ${ce("input",n=>{const o=Xe(n,HTMLInputElement);r(o.checked)})}
            />
        `:Re(t,_.Color)?y`
            <input
                type="color"
                .value=${e}
                ${ce("input",n=>{const o=Xe(n,HTMLInputElement);r(o.value)})}
            />
        `:Re(t,_.Text)?y`
            <input
                type="text"
                .value=${e}
                ${ce("input",n=>{const o=Xe(n,HTMLInputElement);r(o.value)})}
            />
        `:Re(t,_.Number)?y`
            <input
                type="number"
                .value=${e}
                ${ce("input",n=>{const o=Xe(n,HTMLInputElement);r(o.value)})}
            />
        `:Re(t,_.Dropdown)?y`
            <select
                .value=${e}
                ${ce("input",n=>{const o=Xe(n,HTMLSelectElement);r(o.value)})}
            >
                ${t.options.map(n=>y`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:y`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const aa=K()({tagName:"book-entry-description",styles:Z`
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
    `,renderCallback({inputs:e}){return e.descriptionParagraphs.map(t=>y`
                <p>${t}</p>
            `)}}),sa=K()({tagName:"book-page-wrapper",styles:Z`
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

        ${ne} {
            display: inline-block;
        }
    `,renderCallback({inputs:e}){const t=e.isTopLevel?y`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:y`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[D.Book,...e.pageNode.fullUrlBreadcrumbs],n=ma(e.pageNode.entry.errors);return n&&console.error(n),y`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${ne.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${ne}>
                    ${n?y`
                              <${de.assign({message:n.message})}></${de}>
                          `:y`
                              <${aa.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs??[]})}></${aa}>
                              <${ht.assign({config:e.pageNode.entry.controls,currentValues:yn(e.currentControls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${ht}>
                          `}
                </div>
            </div>
        `}}),Nt=K()({tagName:"book-element-example-controls",styles:Z`
        :host {
            display: flex;
            color: ${C["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:e}){const t=[D.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return y`
            <${ne.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${ne}>
        `}}),ia=Symbol("unset-internal-state"),la=K()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:ia},renderCallback({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw ma(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.renderCallback||typeof t.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': renderCallback is not a function`);e.isUnset===ia&&r({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const n=t.elementExampleNode.entry.renderCallback({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return y`
                ${or(!!t.elementExampleNode.entry.styles,y`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),y`
                <${de.assign({message:`${t.elementExampleNode.entry.title} failed: ${rr(n)}`})}></${de}>
            `}},options:{allowPolymorphicState:!0}}),ca=K()({tagName:"book-element-example-wrapper",styles:Z`
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

        ${Nt} {
            color: ${C["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Nt} {
            color: ${C["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:e}){return y`
            <div class="individual-example-wrapper">
                <${Nt.assign(Ai(e,["currentPageControls"]))}></${Nt}>
                <${la.assign(e)}></${la}>
            </div>
        `}}),Je=K()({tagName:"book-entry-display",styles:Z`
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
    `,renderCallback:({inputs:e})=>{const t=Ka(e.currentRoute.paths),r=Pd({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!t,currentControls:e.currentControls,originalTree:e.originalTree});return y`
            <${oa.assign({currentSearch:t,currentRoute:e.currentRoute,router:e.router})}></${oa}>
            <div class="all-book-entries-wrapper">${r}</div>
            <slot name=${ue.Footer}></slot>
        `}});function ai(e,t,r,n){const o=Dr(r,n),a=[];if(o){const s=ai(e,t,o,n);s&&a.push(s)}if(He(r,O.Page)&&!e.includes(r)){const s=yn(t,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:fe(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,i)=>({config:{...s.config,...i.config},current:{...s.current,...i.current},breadcrumbs:{...s.breadcrumbs,...i.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function Pd({currentNodes:e,isTopLevel:t,router:r,isSearching:n,currentControls:o,originalTree:a}){if(!e.length&&n)return[y`
                No results
            `];const s=Un(e,1)?ai(e,o,e[0],a):void 0,i=s&&Un(e,1)?y`
                  <${ht.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${ht}>
              `:"",l=Wi(e,c=>c.fullUrlBreadcrumbs.join(">"),(c,u)=>{if(He(c,O.Page))return y`
                    <${sa.assign({isTopLevel:t,pageNode:c,currentControls:o,router:r})}
                        class="block-entry"
                    ></${sa}>
                `;if(He(c,O.ElementExample)){const d=yn(o,c.fullUrlBreadcrumbs.slice(0,-1));return y`
                    <${ca.assign({elementExampleNode:c,currentPageControls:d,router:r})}
                        class="inline-entry"
                    ></${ca}>
                `}else return He(c,O.Root)?y`
                    <h1>${c.entry.title}</h1>
                `:y`
                    <${de}
                        class="block-entry"
                        ${pn(de,{message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                    ></${de}>
                `});return[i,l]}function Nd(e,t,r){const n=ua(e,t);if(n.length)return n;r(lt);const o=ua(e,lt.paths);if(!o)throw new Error(`Tried to self-correct for invalid path ${t.join("/")}
                        but failed to do so.`);return o}function ua(e,t){return e.filter(r=>Li({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Rt=Va()({tagName:"element-book-app",events:{pathUpdate:Da()},stateInitStatic:{currentRoute:lt,router:void 0,colors:{config:void 0,theme:Jo(void 0)},treeBasedCurrentControls:void 0},styles:Z`
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

        ${Je} {
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
        }
    `,initCallback({host:e}){setTimeout(()=>{da(e)},1e3)},cleanupCallback({state:e,updateState:t}){e.router&&(e.router.removeAllRouteListeners(),t({router:void 0}))},renderCallback:({state:e,inputs:t,host:r,updateState:n,dispatch:o,events:a})=>{var i,l,c,u;try{let d=function(k){e.router?e.router.setRoutes(k):n({currentRoute:{...e.currentRoute,...k}}),t.elementBookRoutePaths&&!et(t.elementBookRoutePaths,e.currentRoute.paths)&&o(new a.pathUpdate(k.paths??[]))};var s=d;if(t.elementBookRoutePaths&&!et(t.elementBookRoutePaths,e.currentRoute.paths)&&d({paths:t.elementBookRoutePaths}),(i=t.internalRouterConfig)!=null&&i.useInternalRouter&&!e.router){const k=ac(t.internalRouterConfig.basePath);n({router:k}),k.addRouteListener(!0,T=>{n({currentRoute:T})})}else!((l=t.internalRouterConfig)!=null&&l.useInternalRouter)&&e.router&&e.router.removeAllRouteListeners();const f={themeColor:t.themeColor};if(!et(f,(c=e.colors)==null?void 0:c.config)){const k=Jo(f);n({colors:{config:f,theme:k}}),lc(r,k)}const h=t.debug??!1,p=Ll({entries:t.entries,everythingTitle:t.everythingTitle,everythingDescriptionParagraphs:t.everythingDescriptionParagraphs??[],debug:h});(!e.treeBasedCurrentControls||e.treeBasedCurrentControls.entries!==t.entries||e.treeBasedCurrentControls.globalValues!==t.globalValues)&&n({treeBasedCurrentControls:{entries:t.entries,globalValues:t.globalValues??{},currentControls:Xa(p.tree,t.globalValues??{})}});const m=Ka(e.currentRoute.paths),x=(m?Zl({flattenedNodes:p.flattenedNodes,searchQuery:m}):void 0)??Nd(p.flattenedNodes,e.currentRoute.paths,d),S=(u=e.treeBasedCurrentControls)==null?void 0:u.currentControls;return S?(t.debug&&console.info({currentControls:S}),y`
                <div
                    class="root"
                    ${ce(Jt,k=>{const T=r.shadowRoot.querySelector(Je.tagName);if(T?T.scroll({top:0,behavior:"smooth"}):console.error(`Failed to find '${Je.tagName}' for scrolling.`),d(k.detail),!(r.shadowRoot.querySelector(ie.tagName)instanceof ie))throw new Error(`Failed to find child '${ie.tagName}'`);da(r)})}
                    ${ce(ht.events.controlValueChange,k=>{if(!e.treeBasedCurrentControls)return;const T=Dl(S,k.detail.fullUrlBreadcrumbs,k.detail.newValues);n({treeBasedCurrentControls:{...e.treeBasedCurrentControls,currentControls:T}})})}
                >
                    <${ie.assign({flattenedNodes:p.flattenedNodes,router:e.router,selectedPath:m?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${ue.NavHeader}
                            slot=${ue.NavHeader}
                        ></slot>
                    </${ie}>
                    <${Je.assign({currentRoute:e.currentRoute,currentNodes:x,router:e.router,debug:h,currentControls:S,originalTree:p.tree})}>
                        <slot
                            name=${ue.Footer}
                            slot=${ue.Footer}
                        ></slot>
                    </${Je}>
                </div>
            `):y`
                    <${de.assign({message:"Failed to generate page controls."})}></${de}>
                `}catch(d){return console.error(d),y`
                <p class="error">${rr(d)}</p>
            `}}});async function da(e){const t=e.shadowRoot.querySelector(ie.tagName);if(!(t instanceof ie))throw new Error(`Failed to find child '${ie.tagName}'`);await Md(t)}const Ue=Pe({title:"Elements",parent:void 0}),si=v`
    pointer-events: none;
    opacity: 0.3;
`,nt=j({"vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"});function Rd(e){return`${e}px`}const er=j({"vira-form-input-border-radius":"8px"}),tr=j({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${er["vira-form-input-border-radius"].value} + 4px)`});function ii({mainSelector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=3}){const o=M(Rd(n+r+t));return v`
        ${M(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${tr["vira-focus-outline-color"].value};
            border-radius: ${tr["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const De=v`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,li=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,fa="vira-",{defineElement:xt,defineElementNoInputs:Qd}=Zs({assertInputs:e=>{if(!e.tagName.startsWith(fa))throw new Error(`Tag name should start with '${fa}' but got '${e.tagName}'`)}}),rn=j({"vira-icon-color":"currentColor"}),Bd=j({"vira-icon-stroke-color":rn["vira-icon-color"].value,"vira-icon-fill-color":rn["vira-icon-color"].value}),Te={...rn,...Bd},L=xt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            color: ${Te["vira-icon-color"].value};
            fill: ${Te["vira-icon-fill-color"].value};
            stroke: ${Te["vira-icon-stroke-color"].value};
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
    `,renderCallback:({inputs:e})=>e.icon?e.icon.svgTemplate:""});var ci=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(ci||{});const N=xt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0A89FF","vira-button-primary-hover-color":"#59B1FF","vira-button-primary-active-color":"#007FF6","vira-button-secondary-color":"white","vira-button-internal-foreground-color":"","vira-button-internal-background-color":"","vira-button-padding":"5px 10px"},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${li};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${tr["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${si};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            cursor: pointer;
            ${De};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${er["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition: color ${nt["vira-interaction-animation-duration"].value},
                background-color
                    ${nt["vira-interaction-animation-duration"].value},
                border-color ${nt["vira-interaction-animation-duration"].value};
        }

        ${ii({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${L} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?w`
                  <${L}
                      ${I(L,{icon:e.icon})}
                  ></${L}>
              `:"",r=e.text?w`
                  <span class="text-template">${e.text}</span>
              `:"";return w`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),Ld=Pe({parent:Ue,title:N.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:_.Text,initValue:""},"Secondary color":{controlType:_.Text,initValue:""},"Hover color":{controlType:_.Text,initValue:""},"Active color":{controlType:_.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,styles:n,inputs:o}){const a=n??v``;e({title:r,styles:a,renderCallback({controls:s}){const i=v`
                        ${N.cssVars["vira-button-primary-color"].name}: ${M(s["Primary color"]||"inherit")};
                        ${N.cssVars["vira-button-secondary-color"].name}: ${M(s["Secondary color"]||"inherit")};
                        ${N.cssVars["vira-button-primary-hover-color"].name}: ${M(s["Hover color"]||"inherit")};
                        ${N.cssVars["vira-button-primary-active-color"].name}: ${M(s["Active color"]||"inherit")};
                    `;return w`
                        <${N}
                            style=${i}
                            ${I(N,{text:"hello",...o})}
                        ></${N}>
                    `}})}t({title:"basic"}),t({title:"outline",inputs:{buttonStyle:ci.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:v`
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
                `}})}});var nn=(e=>(e.Header="header",e))(nn||{});const se=xt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${De};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${nt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:$e()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:r,events:n,inputs:o}){const a=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return w`
            <button
                class="header-wrapper"
                ${G("click",()=>{r(new n.expandChange(!o.expanded))})}
            >
                <slot name=${"header"}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${fr(({contentRect:s})=>{t({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Od=Pe({title:se.tagName,parent:Ue,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:e}){e({title:"stacked examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>w`
                            <${se}
                                ${I(se,{expanded:!!r.expandedStates[o]})}
                                ${G(se.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${nn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${G("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${je(!!r.showMoreStates[o],w`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${se}>
                        `)}}),e({title:"wider examples",styles:v`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:t,state:r}){return Array(3).fill(0).map((n,o)=>w`
                            <${se}
                                ${I(se,{expanded:!!r.expandedStates[o]})}
                                ${G(se.events.expandChange,a=>{const s=[...r.expandedStates];s[o]=a.detail,t({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${nn.Header}
                                >
                                    Section ${o}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${G("click",()=>{const a=[...r.showMoreStates];a[o]=!a[o],t({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${je(!!r.showMoreStates[o],w`
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
                            </${se}>
                        `)}})}});function Bn({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const zd=Bn({name:"Element16Icon",svgTemplate:w`
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
    `}),ot=Bn({name:"Element24Icon",svgTemplate:w`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
        >
            <path stroke-width="1px" d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `}),Dd=Bn({name:"Options24Icon",svgTemplate:w`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <g fill="none" stroke-width="1px">
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                stroke="none"
                fill="${Te["vira-icon-stroke-color"].value}"
                d="M6 18a3 3 0 0 0 0 1H3v-1h3Zm5 1a3 3 0 0 0 0-1h10v1H11Zm3-7a3 3 0 0 0 0 1H3v-1h11Zm5 1a3 3 0 0 0 0-1h2v1h-2ZM7 5a3 3 0 0 0 0 1H3V5h4Zm5 1a3 3 0 0 0 0-1h9v1h-9Z"
            />
        </svg>
    `}),Vd={Element16Icon:zd,Element24Icon:ot,Options24Icon:Dd},Hd=Pe({title:L.tagName,parent:Ue,descriptionParagraphs:["See the 'All Icons' section for a list of all included icons."],elementExamplesCallback({defineExample:e}){e({title:"basic",renderCallback(){return w`
                    <${L} ${I(L,{icon:ot})}></${L}>
                `}})}});function on({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>on({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function ui({value:e,allowed:t,blocked:r}){const n=t?on({input:e,matcher:t}):!0,o=r?on({input:e,matcher:r}):!1;return n&&!o}function ha(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,o)=>(ui({...e,value:o})?n.filtered.push(o):n.blocked.push(o),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const z=xt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-has-value":({inputs:e})=>!!e.value,"vira-input-fit-text":({inputs:e})=>!!e.fitText},cssVars:{"vira-input-placeholder-color":"#ccc","vira-input-text-color":"black","vira-input-border-color":"#ccc","vira-input-focus-border-color":"#59B1FF","vira-input-text-selection-color":"#CFE9FF","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:$e(),inputBlocked:$e()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${tr["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${si};
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
                ${De};
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
                ${li};
                vertical-align: middle;
                max-height: 100%;
            }

            pre {
                ${De};
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
                border-radius: ${er["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${nt["vira-interaction-animation-duration"].value};
            }

            label {
                ${De};
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${er["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
            }

            ${ii({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            ${L} {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${De};
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
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:r,updateState:n,events:o})=>{const{filtered:a}=ha({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),s=e.icon?w`
                  <${L} ${I(L,{icon:e.icon})}></${L}>
              `:"",i=e.fitText?v`
                  width: ${r.forcedInputWidth}px;
              `:"";return w`
            <label>
                ${s}
                ${je(!!e.fitText,w`
                        <span
                            class="size-span"
                            ${fr(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    class=${un({"have-value":!!a})}
                    style=${i}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${a}
                    ${G("input",l=>{if(!(l instanceof InputEvent))throw new Error(`Input event type mismatch: "${l.constructor.name}"`);const c=l.target;if(!(c instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const u=l.data,d=a;let f=c.value??"";if(u)if(u.length===1)ui({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs})||(f=d,t(new o.inputBlocked(u)));else{const{filtered:h,blocked:p}=ha({value:u,allowed:e.allowedInputs,blocked:e.blockedInputs});f=h,t(new o.inputBlocked(p))}c.value!==f&&(c.value=f),d!==f&&t(new o.valueChange(f))})}
                    placeholder=${e.placeholder}
                />
                ${je(!!e.suffix,w`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}}),Id=Pe({title:z.tagName,parent:Ue,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:_.Text,initValue:""},"Placeholder color":{controlType:_.Text,initValue:""},"Border color":{controlType:_.Text,initValue:""},"Focus color":{controlType:_.Text,initValue:""},"Selection color":{controlType:_.Text,initValue:""}},elementExamplesCallback({defineExample:e}){function t({styles:r,title:n,inputs:o}){e({title:n,styles:v`
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
                            ${G(z.events.valueChange,c=>{s({value:c.detail})})}
                        ></${z}>
                    `}})}t({title:"basic",inputs:{value:"default value"}}),t({title:"with icon",inputs:{value:"",icon:ot}}),t({title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}}),t({title:"with suffix",inputs:{value:"42",suffix:"px"}}),t({title:"disabled",inputs:{value:"disabled",disabled:!0}}),t({title:"numbers only",inputs:{value:"",allowedInputs:/\d/}}),t({title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}}),t({title:"custom width",styles:v`
                ${z} {
                    width: 120px;
                }
            `,inputs:{value:"",placeholder:"width",icon:ot}}),t({title:"custom height",styles:v`
                ${z} {
                    height: 48px;
                }
            `,inputs:{value:"",placeholder:"height",icon:ot}}),t({title:"max width",styles:v`
                ${z} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42"}}),t({title:"fit text",styles:v`
                ${z} {
                    max-width: 150px;
                }
            `,inputs:{value:"",placeholder:"42",fitText:!0}})}}),Ke=xt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:$e()},renderCallback({inputs:e,dispatch:t,events:r}){var o,a;function n(s){e.route&&wn(s)&&(s.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new r.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return w`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=e.link?e.link.url:(a=e.route)==null?void 0:a.router.createRoutesUrl(e.route.route);return w`
                <a href=${s} rel="noopener noreferrer" ${G("click",n)}>
                    <slot></slot>
                </a>
            `}}}),jd=Pe({title:Ke.tagName,parent:Ue,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:_.Color,initValue:""},"Hover color":{controlType:_.Color,initValue:""}},elementExamplesCallback({defineExample:e}){function t({title:r,inputs:n}){e({title:r,renderCallback({controls:o}){const a=v`
                        ${Ke.cssVars["vira-link-hover-color"].name}: ${M(o["Hover color"]||"inherit")};
                        color: ${M(o["CSS Color"]||"inherit")};
                    `;return w`
                        <${Ke.assign(n)}
                            style=${a}
                            ${G(Ke.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${Ke}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),Fd=Pe({title:"Icons",parent:void 0,controls:{"Icon Color":{controlType:_.Text,initValue:""},"Stroke Color":{controlType:_.Text,initValue:""},"Fill Color":{controlType:_.Text,initValue:""}},elementExamplesCallback({defineExample:e}){Object.values(Vd).forEach(t=>{e({title:t.name,renderCallback({controls:r}){const n=v`
                        ${Te["vira-icon-color"].name}: ${M(r["Icon Color"]||"inherit")};
                        ${Te["vira-icon-fill-color"].name}: ${M(r["Fill Color"]||"inherit")};
                        ${Te["vira-icon-stroke-color"].name}: ${M(r["Stroke Color"]||"inherit")};
                    `;return w`
                        <${L} style=${n} ${I(L,{icon:t})}></${L}>
                    `}})})}}),Ud=[Ue,Fd,Ld,Od,Hd,Id,jd];dr({tagName:"vira-book-app",styles:v`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Rt} {
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
            <${Rt}
                ${I(Rt,{internalRouterConfig:{basePath:"vira",useInternalRouter:!0},entries:Ud,themeColor:"#33ccff"})}
            >
                <h1 slot=${ue.NavHeader}>Vira</h1>
            </${Rt}>
        `}});
