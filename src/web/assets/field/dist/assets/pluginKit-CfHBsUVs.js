import{n as e,t}from"./tablemakerPkComponents-DiX5y9Zv.js";var n=Object.defineProperty,r=(e,t)=>{let r={};for(var i in e)n(r,i,{get:e[i],enumerable:!0});return t||n(r,Symbol.toStringTag,{value:`Module`}),r},i=customElements;if(!i.__pkSafeDefine){let e=i.define.bind(i);i.define=((t,n,r)=>{i.get(t)||e(t,n,r)}),i.__pkSafeDefine=!0}var a=globalThis,o=a.ShadowRoot&&(a.ShadyCSS===void 0||a.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,s=Symbol(),c=new WeakMap,l=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(o&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=c.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&c.set(t,e))}return e}toString(){return this.cssText}},u=e=>new l(typeof e==`string`?e:e+``,void 0,s),d=(e,...t)=>new l(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,s),f=(e,t)=>{if(o)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=a.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},p=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return u(t)})(e):e,{is:m,defineProperty:h,getOwnPropertyDescriptor:g,getOwnPropertyNames:_,getOwnPropertySymbols:ee,getPrototypeOf:v}=Object,y=globalThis,b=y.trustedTypes,te=b?b.emptyScript:``,x=y.reactiveElementPolyfillSupport,S=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?te:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ne=(e,t)=>!m(e,t),re={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??=Symbol(`metadata`),y.litPropertyMetadata??=new WeakMap;var ie=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&h(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=g(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??re}static _$Ei(){if(this.hasOwnProperty(S(`elementProperties`)))return;let e=v(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S(`properties`))){let e=this.properties,t=[..._(e),...ee(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(p(e))}else e!==void 0&&t.push(p(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return f(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?C:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?C:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ne)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ie.elementStyles=[],ie.shadowRootOptions={mode:`open`},ie[S(`elementProperties`)]=new Map,ie[S(`finalized`)]=new Map,x?.({ReactiveElement:ie}),(y.reactiveElementVersions??=[]).push(`2.1.2`);var ae=globalThis,oe=e=>e,se=ae.trustedTypes,ce=se?se.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,le=`$lit$`,ue=`lit$${Math.random().toFixed(9).slice(2)}$`,de=`?`+ue,fe=`<${de}>`,pe=document,me=()=>pe.createComment(``),he=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ge=Array.isArray,_e=e=>ge(e)||typeof e?.[Symbol.iterator]==`function`,ve=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,xe=/>/g,Se=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ce=/'/g,we=/"/g,Te=/^(?:script|style|textarea|title)$/i,w=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),T=Symbol.for(`lit-noChange`),E=Symbol.for(`lit-nothing`),Ee=new WeakMap,De=pe.createTreeWalker(pe,129);function Oe(e,t){if(!ge(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ce===void 0?t:ce.createHTML(t)}var ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ye;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ye?c[1]===`!--`?o=be:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Se):(Te.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Se):o=xe:o===Se?c[0]===`>`?(o=i??ye,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Se:c[3]===`"`?we:Ce):o===we||o===Ce?o=Se:o===be||o===xe?o=ye:(o=Se,i=void 0);let d=o===Se&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ye?n+fe:l>=0?(r.push(s),n.slice(0,l)+le+n.slice(l)+ue+d):n+ue+(l===-2?t:d)}return[Oe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Ae=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ke(t,n);if(this.el=e.createElement(l,r),De.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=De.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(le)){let t=u[o++],n=i.getAttribute(e).split(ue),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Fe:r[1]===`?`?Ie:r[1]===`@`?Le:Pe}),i.removeAttribute(e)}else e.startsWith(ue)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Te.test(i.tagName)){let e=i.textContent.split(ue),t=e.length-1;if(t>0){i.textContent=se?se.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],me()),De.nextNode(),c.push({type:2,index:++a});i.append(e[t],me())}}}else if(i.nodeType===8)if(i.data===de)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ue,e+1))!==-1;)c.push({type:7,index:a}),e+=ue.length-1}a++}}static createElement(e,t){let n=pe.createElement(`template`);return n.innerHTML=e,n}};function je(e,t,n=e,r){if(t===T)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=he(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=je(e,i._$AS(e,t.values),i,r)),t}var Me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??pe).importNode(t,!0);De.currentNode=r;let i=De.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ne(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Re(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=De.nextNode(),a++)}return De.currentNode=pe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ne=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=je(this,e,t),he(e)?e===E||e==null||e===``?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==T&&this._(e):e._$litType$===void 0?e.nodeType===void 0?_e(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&he(this._$AH)?this._$AA.nextSibling.data=e:this.T(pe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ae.createElement(Oe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ee.get(e.strings);return t===void 0&&Ee.set(e.strings,t=new Ae(e)),t}k(t){ge(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(me()),this.O(me()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=oe(e).nextSibling;oe(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=je(this,e,t,0),a=!he(e)||e!==this._$AH&&e!==T,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=je(this,r[n+o],t,o),s===T&&(s=this._$AH[o]),a||=!he(s)||s!==this._$AH[o],s===E?e=E:e!==E&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Fe=class extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},Ie=class extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}},Le=class extends Pe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=je(this,e,t,0)??E)===T)return;let n=this._$AH,r=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==E&&(n===E||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Re=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}},ze={M:le,P:ue,A:de,C:1,L:ke,R:Me,D:_e,V:je,I:Ne,H:Pe,N:Ie,U:Le,B:Fe,F:Re},Be=ae.litHtmlPolyfillSupport;Be?.(Ae,Ne),(ae.litHtmlVersions??=[]).push(`3.3.3`);var Ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ne(t.insertBefore(me(),e),e,void 0,n??{})}return i._$AI(e),i},He=globalThis,Ue=class extends ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};Ue._$litElement$=!0,Ue.finalized=!0,He.litElementHydrateSupport?.({LitElement:Ue});var We=He.litElementPolyfillSupport;We?.({LitElement:Ue}),(He.litElementVersions??=[]).push(`4.2.2`);var Ge=new Map;function Ke(e,t,n){let r=t.flatMap(e=>Array.isArray(e)?e:[e]).map(e=>`cssText`in e&&typeof e.cssText==`string`?e.cssText:u(e).cssText).join(`
`);if(!(`adoptedStyleSheets`in Document.prototype)||typeof CSSStyleSheet>`u`){let i=n??String(t.length);if(!e.querySelector(`style[data-pk-adopted-styles="${i}"]`)){let t=document.createElement(`style`);t.dataset.pkAdoptedStyles=i,t.textContent=r,e.prepend(t)}return}let i=n??r,a=Ge.get(i);a||(a=new CSSStyleSheet,a.replaceSync(r),Ge.set(i,a)),e.adoptedStyleSheets=[...e.adoptedStyleSheets,a]}var qe=d`
    @layer pk-component {
        :host {
            display: inline-block;
            vertical-align: middle;
        }
    }
`;d`
    .pk-focus-ring:focus {
        outline: none;
    }

    .pk-focus-ring:focus-visible {
        box-shadow: var(--pk-shadow-focus);
    }
`;var Je=d`
    @layer pk-reset {
        :host {
            box-sizing: border-box;
        }

        :host *,
        :host *::before,
        :host *::after {
            box-sizing: border-box;
        }

        :host(:not([hidden])) {
            /* Prevent UA / CP margin on unstyled custom element hosts in light DOM. */
            margin: 0;
        }
    }
`,Ye=class extends Ue{constructor(...e){super(...e),this.pkRenderFailed=!1}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}connectedCallback(){super.connectedCallback(),this.hasAttribute(`data-pk`)||this.setAttribute(`data-pk`,``)}createRenderRoot(){let e=super.createRenderRoot();return Ke(e,[Je],`pk-shadow-reset`),e}performUpdate(){if(!this.pkRenderFailed)try{let e=super.performUpdate();e instanceof Promise&&e.catch(e=>{this.handleRenderFailure(e)})}catch(e){this.handleRenderFailure(e)}}handleRenderFailure(e){let t=e instanceof Error?e:Error(String(e));this.pkRenderFailed=!0,this.dispatchEvent(new CustomEvent(`pk-error`,{detail:{tagName:this.localName||this.tagName.toLowerCase(),message:t.message,stack:t.stack},bubbles:!0,composed:!0}));try{let e=this.renderRoot;if(e){e.textContent=``;let t=document.createElement(`div`);t.setAttribute(`part`,`error`),t.setAttribute(`role`,`alert`),t.textContent=`This control failed to load.`,e.appendChild(t)}}catch{}}};function D(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function Xe(e=`default`){return e===`xxs`||e===`xs`?`xxs`:e===`lg`||e===`xl`?`sm`:`xs`}function Ze(e=`default`,t){return t||(e===`primary`||e===`secondary`||e===`dashed`||e===`outline`||e===`transparent`?e:`default`)}var O=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Qe={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:ne},$e=(e=Qe,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function k(e){return(t,n)=>typeof n==`object`?$e(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function A(e){return k({...e,state:!0,attribute:!1})}var et=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function j(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return et(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return et(n,r,{get(){return a(this)}})}}var tt=[qe,d`
        @layer pk-component {
            :host {
                display: block;
                box-sizing: border-box;
            }

            :host([centered]) {
                position: absolute;
                top: 50%;
                left: 50%;
                display: block;
                width: fit-content;
                height: fit-content;
                margin: 0;
                transform: translate(-50%, -50%);
            }

            .spinner {
                display: block;
                box-sizing: border-box;
                margin-inline: auto;
                border-style: solid;
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-radius: 50%;
                animation: pk-spinner-spin 0.5s linear infinite;
            }

            /* Sizes */
            :host([size='xxs']) .spinner {
                width: 0.75rem;
                height: 0.75rem;
                border-width: 1px;
            }

            :host([size='xs']) .spinner {
                width: 1rem;
                height: 1rem;
                border-width: 2px;
            }

            :host([size='sm']) .spinner,
            :host(:not([size])) .spinner {
                width: 1.5rem;
                height: 1.5rem;
                border-width: 2px;
            }

            :host([size='md']) .spinner {
                width: 2rem;
                height: 2rem;
                border-width: 2px;
            }

            :host([size='lg']) .spinner {
                width: 3rem;
                height: 3rem;
                border-width: 2px;
            }

            :host([size='xl']) .spinner {
                width: 4rem;
                height: 4rem;
                border-width: 2px;
            }

            /* Variants — matched to button loading contrast */
            :host([variant='default']:not([tone])) .spinner {
                border-top-color: var(--pk-color-red-500);
                border-right-color: var(--pk-color-red-500);
            }

            :host([variant='primary']:not([tone])) .spinner,
            :host([variant='secondary']:not([tone])) .spinner {
                border-top-color: var(--pk-color-white);
                border-right-color: var(--pk-color-white);
            }

            :host([variant='dashed']:not([tone])) .spinner,
            :host([variant='outline']:not([tone])) .spinner,
            :host([variant='transparent']:not([tone])) .spinner {
                border-top-color: var(--pk-color-gray-700);
                border-right-color: var(--pk-color-gray-700);
            }

            /* Standalone tone overrides */
            :host([tone='sky']) .spinner {
                border-top-color: var(--pk-color-sky-600);
                border-right-color: var(--pk-color-sky-600);
            }

            :host([tone='emerald']) .spinner {
                border-top-color: var(--pk-color-emerald-600);
                border-right-color: var(--pk-color-emerald-600);
            }

            :host([tone='violet']) .spinner {
                border-top-color: var(--pk-color-violet-600);
                border-right-color: var(--pk-color-violet-600);
            }

            :host([tone='amber']) .spinner {
                border-top-color: var(--pk-color-amber-500);
                border-right-color: var(--pk-color-amber-500);
            }

            @keyframes pk-spinner-spin {
                to {
                    transform: rotate(360deg);
                }
            }
        }
    `],nt=class extends Ye{constructor(...e){super(...e),this.variant=`default`,this.size=`sm`,this.centered=!1}static{this.styles=tt}render(){return w`
            <div part="base" class="spinner" aria-hidden="true"></div>
        `}};D([k({reflect:!0})],nt.prototype,`variant`,void 0),D([k({reflect:!0})],nt.prototype,`size`,void 0),D([k({reflect:!0})],nt.prototype,`tone`,void 0),D([k({type:Boolean,reflect:!0})],nt.prototype,`centered`,void 0),nt=D([O(`pk-spinner`)],nt);var rt=d`
    @layer pk-component {
        slot[name='start']::slotted(svg),
        slot[name='end']::slotted(svg) {
            display: block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            pointer-events: none;
            vertical-align: middle;
            overflow: visible;
        }
    }
`;function it(e,t=`var(--pk-btn-radius, var(--pk-radius-lg))`){let n=u(e),r=u(t);return d`
        ${n} {
            border-top-left-radius: var(--pk-bg-start-start-radius, ${r});
            border-top-right-radius: var(--pk-bg-start-end-radius, ${r});
            border-bottom-left-radius: var(--pk-bg-end-start-radius, ${r});
            border-bottom-right-radius: var(--pk-bg-end-end-radius, ${r});
        }
    `}function at(){return d`
        :host([data-pk-group-orientation='horizontal']:not([data-pk-group-item-first]):not([data-pk-group-item-last])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-start-end-radius: 0;
            --pk-bg-end-start-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-item-first]:not([data-pk-group-item-last])) {
            --pk-bg-start-end-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-item-last]:not([data-pk-group-item-first])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-end-start-radius: 0;
        }

        :host([data-pk-group-orientation='vertical']:not([data-pk-group-item-first]):not([data-pk-group-item-last])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-start-end-radius: 0;
            --pk-bg-end-start-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-item-first]:not([data-pk-group-item-last])) {
            --pk-bg-end-start-radius: 0;
            --pk-bg-end-end-radius: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-item-last]:not([data-pk-group-item-first])) {
            --pk-bg-start-start-radius: 0;
            --pk-bg-start-end-radius: 0;
        }
    `}function ot(){return d`
        :host([data-pk-group-orientation='horizontal'][data-pk-group-join][variant='outline']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-join][variant='dashed']) {
            margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
            margin-block-start: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join][variant='outline']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-join][variant='dashed']) {
            margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
            margin-inline-start: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([variant='outline']):not([variant='dashed']):not([variant='link']):not([variant='none'])) {
            margin-inline-start: var(--pk-bg-horizontal-indent, 0);
            margin-block-start: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([variant='outline']):not([variant='dashed']):not([variant='link']):not([variant='none'])) {
            margin-block-start: var(--pk-bg-vertical-indent, 0);
            margin-inline-start: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join][variant='primary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join][variant='secondary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join][variant='default']) {
            margin-inline-start: 0;
            margin-block-start: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join][variant='primary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join][variant='secondary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join][variant='default']) {
            margin-block-start: 0;
            margin-inline-start: 0;
        }

        /* Filled variants — Craft margin gap; parent background shows through.
         * !important: outer preflight/utilities beat non-important :host margin
         * (revert-layer cannot restore shadow host values — it still specifies outer 0).
         */
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='primary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='secondary']),
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='default']) {
            margin-inline-end: var(--pk-btn-group-gap, 1px) !important;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='primary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='secondary']),
        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='default']) {
            margin-block-end: var(--pk-btn-group-gap, 1px) !important;
        }
    `}function st(e){let t=u(e);return d`
        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])) ${t} {
            border-left-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])) ${t} {
            border-top-width: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider]:not([variant='outline']):not([variant='dashed'])) ${t} {
            border-left-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]:not([variant='outline']):not([variant='dashed'])) ${t} {
            border-top-width: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='outline']) ${t},
        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='dashed']) ${t} {
            border-right-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='outline']) ${t},
        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='dashed']) ${t} {
            border-bottom-width: 0;
        }
    `}var ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},lt=e=>(...t)=>({_$litDirective$:e,values:t}),ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},M=lt(class extends ut{constructor(e){if(super(e),e.type!==ct.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return T}}),dt=class extends ut{constructor(e){if(super(e),this.it=E,e.type!==ct.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===E||e==null)return this._t=void 0,this.it=e;if(e===T)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};dt.directiveName=`unsafeHTML`,dt.resultType=1;var ft=lt(dt),pt=class extends dt{};pt.directiveName=`unsafeSVG`,pt.resultType=2;var N=lt(pt),mt={width:448,height:512,path:`M352 64c0-17.7-14.3-32-32-32L128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32z`},ht={width:448,height:512,path:`M448 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32L32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z`},gt={width:448,height:512,path:`M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`},_t={width:448,height:512,path:`M448 64c0 17.7-14.3 32-32 32L192 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`},vt={width:384,height:512,path:`M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`},yt={width:512,height:512,path:`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z`},bt={width:512,height:512,path:`M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z`},xt={width:512,height:512,path:`M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z`},St={width:512,height:512,path:`M436.7 74.7L448 85.4 448 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l47.9 0-7.6-7.2c-.2-.2-.4-.4-.6-.6-75-75-196.5-75-271.5 0s-75 196.5 0 271.5 196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c99.9-99.9 261.7-100 361.7-.3z`},Ct={width:384,height:512,path:`M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z`},wt={width:512,height:512,path:`M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z`},Tt={width:448,height:512,path:`M224 0c17.7 0 32 14.3 32 32l0 168.6 144-83.1c15.3-8.8 34.9-3.6 43.7 11.7s3.6 34.9-11.7 43.7L288 256 432 339.1c15.3 8.8 20.6 28.4 11.7 43.7s-28.4 20.6-43.7 11.7L256 311.4 256 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-168.6-144 83.1c-15.3 8.8-34.9 3.6-43.7-11.7S.7 348 16 339.1L160 256 16 172.9C.7 164-4.5 144.5 4.3 129.1S32.7 108.6 48 117.4L192 200.6 192 32c0-17.7 14.3-32 32-32z`},Et={width:384,height:512,path:`M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l32 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0c70.7 0 128-57.3 128-128 0-46.5-24.8-87.3-62-109.7 18.7-22.3 30-51 30-82.3 0-70.7-57.3-128-128-128L32 32zM288 160c0 35.3-28.7 64-64 64l-96 0 0-128 96 0c35.3 0 64 28.7 64 64zM128 416l0-128 128 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-128 0z`},Dt={width:576,height:512,path:`M416 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32 14.3 32 32l0 37.5c0 25.5 10.1 49.9 28.1 67.9l22.6 22.6-22.6 22.6c-18 18-28.1 42.4-28.1 67.9l0 37.5c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c53 0 96-43 96-96l0-37.5c0-8.5 3.4-16.6 9.4-22.6l45.3-45.3c12.5-12.5 12.5-32.8 0-45.3l-45.3-45.3c-6-6-9.4-14.1-9.4-22.6l0-37.5c0-53-43-96-96-96zM160 32c-53 0-96 43-96 96l0 37.5c0 8.5-3.4 16.6-9.4 22.6L9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l45.3 45.3c6 6 9.4 14.1 9.4 22.6L64 384c0 53 43 96 96 96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32-14.3-32-32l0-37.5c0-25.5-10.1-49.9-28.1-67.9L77.3 256 99.9 233.4c18-18 28.1-42.4 28.1-67.9l0-37.5c0-17.7 14.3-32 32-32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z`},Ot={width:448,height:512,path:`M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z`},kt={width:320,height:512,path:`M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z`},At={width:320,height:512,path:`M140.3 135.2c12.6-10.3 31.1-9.5 42.8 2.2l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301.4 320 288.5 320l-256 0c-12.9 0-24.6-7.8-29.6-19.8S.7 274.5 9.9 265.4l128-128 2.4-2.2z`},jt={width:448,height:512,path:`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`},Mt={width:448,height:512,path:`M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z`},Nt={width:320,height:512,path:`M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`},Pt={width:320,height:512,path:`M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`},Ft={width:448,height:512,path:`M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z`},It={width:512,height:512,path:`M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z`},Lt={width:512,height:512,path:`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z`},Rt={width:512,height:512,path:`M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`},zt={width:512,height:512,path:`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`},Bt={width:384,height:512,path:`M320 32l-8.6 0C300.4 12.9 279.7 0 256 0L128 0C104.3 0 83.6 12.9 72.6 32L64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64zM136 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0z`},Vt={width:512,height:512,path:`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`},Ht={width:512,height:512,path:`M288 448l-224 0 0-224 48 0 0-64-48 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-48-64 0 0 48zm-64-96l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64z`},Ut={width:576,height:512,path:`M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z`},Wt={width:448,height:512,path:`M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z`},Gt={width:448,height:512,path:`M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z`},Kt={width:448,height:512,path:`M0 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm168 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z`},qt={width:576,height:512,path:`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`},Jt={width:576,height:512,path:`M272 48L160 48c-8.8 0-16 7.2-16 16l0 176-48 0 0-176c0-35.3 28.7-64 64-64L293.5 0c17 0 33.3 6.7 45.3 18.7L461.3 141.3c12 12 18.7 28.3 18.7 45.3l0 53.5-48 0 0-32-88 0c-39.8 0-72-32.2-72-72l0-88zM96 384l48 0 0 64c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-64 48 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64zM412.1 160L320 67.9 320 136c0 13.3 10.7 24 24 24l68.1 0zM24 288l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24zm208 0l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm208 0l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z`},Yt={width:448,height:512,path:`M32 0C49.7 0 64 14.3 64 32l0 16 69-17.2c38.1-9.5 78.3-5.1 113.5 12.5 46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1l0 279.7c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4-37.9-19-81.4-23.7-122.5-13.4L64 384 64 480c0 17.7-14.3 32-32 32S0 497.7 0 480L0 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9 0 65.5-64 13.9 0 65.5 48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3l0-63.9 38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9 0 66.7-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8l0 71.4c21.8 1.9 43.3 6.7 64 14.4l0-69.8 22.7 6.7c13.5 4 27.3 6.4 41.3 7.4l0-64.2c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12 0-62c-13-3.8-25.8-8.8-38.2-15-8.2-4.1-16.9-7-25.8-8.8l0 72.4c-13-.4-26 .8-38.7 3.6l-25.3 5.5 0-75.2-64 16 0 73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2 0-71.7-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5l0 77.4zm64-149.4l0-70.8c-20.9 6.1-42.4 9.1-64 9.1l0 69.4c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z`},Xt={width:448,height:512,path:`M71.3 295.6c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0 21.9 57.3 0 79.2s-57.4 21.9-79.2 0zM184.4 182.5c-21.9-21.9-21.9-57.3 0-79.2s57.3-21.9 79.2 0 21.9 57.3 0 79.2-57.3 21.8-79.2 0zm0 147c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2s-57.3 21.9-79.2 0c-21.9-21.8-21.9-57.3 0-79.2zM297.5 216.4c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2s-57.3 21.9-79.2 0c-21.8-21.9-21.8-57.3 0-79.2z`},Zt={width:512,height:512,path:`M64 224a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM256 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm192 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM256 416a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM64 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z`},Qt={width:320,height:512,path:`M128 64A64 64 0 1 0 0 64 64 64 0 1 0 128 64zm0 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM0 448c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64-64 28.7-64 64zM320 64a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zM320 448c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z`},$t={width:512,height:512,path:`M448 96c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-64 32c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l17.7-8.8 0 236.2-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-288zM64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 128 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-128 0 0-128z`},en={width:576,height:512,path:`M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM368 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l81.1 0c21.5 0 38.9 17.4 38.9 38.9 0 13.9-7.5 26.8-19.6 33.8l-76.3 43.6C347.5 269.7 320 317.1 320 368.5l0 47.5c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0 0-15.5c0-28.4 15.2-54.6 39.9-68.7l76.3-43.6C532.2 237.9 552 203.8 552 166.9 552 110.1 505.9 64 449.1 64L368 64z`},tn={width:576,height:512,path:`M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM352 256c0 17.7 14.3 32 32 32l56 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-88 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c61.9 0 112-50.1 112-112 0-31.3-12.9-59.7-33.6-80 20.7-20.3 33.6-48.7 33.6-80 0-61.9-50.1-112-112-112l-88 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-56 0c-17.7 0-32 14.3-32 32z`},nn={width:512,height:512,path:`M64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zm288 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 44.2 35.8 80 80 80l80 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-80 0c-8.8 0-16-7.2-16-16l0-112z`},rn={width:576,height:512,path:`M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 96 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128-96 0 0-128zM352 64c-17.7 0-32 14.3-32 32l0 144c0 17.7 14.3 32 32 32l80 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-80 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0c66.3 0 120-53.7 120-120S498.3 208 432 208l-48 0 0-80 120 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L352 64z`},an={width:512,height:512,path:`M32 64c17.7 0 32 14.3 32 32l0 128 96 0 0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-96 0 0 128c0 17.7-14.3 32-32 32S0 433.7 0 416L0 96C0 78.3 14.3 64 32 64zm352 64c-17.7 0-32 14.3-32 32l0 53.5c10-3.5 20.8-5.5 32-5.5l32 0c53 0 96 43 96 96l0 48c0 53-43 96-96 96l-32 0c-53 0-96-43-96-96l0-192c0-53 43-96 96-96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0zM352 304l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32z`},on={width:576,height:512,path:`M315 315L473.4 99.9 444.1 70.6 229 229 315 315zm-187 5l0 0 0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0 457.6 0 468.5 4.5 476.6 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5 0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5l-71.7 0-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l51.7-51.7 70.6 70.6-19.7 19.7c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z`},sn={width:512,height:512,path:`M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z`},cn={width:384,height:512,path:`M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0-133.3 320 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0 133.3-320-64 0c-17.7 0-32-14.3-32-32z`},ln={width:384,height:512,path:`M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z`},un={width:576,height:512,path:`M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z`},dn={width:384,height:512,path:`M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z`},fn={width:512,height:512,path:`M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z`},pn={width:512,height:512,path:`M0 72C0 58.8 10.7 48 24 48l48 0c13.3 0 24 10.7 24 24l0 104 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-80-24 0C10.7 96 0 85.3 0 72zM30.4 301.2C41.8 292.6 55.7 288 70 288l4.9 0c33.7 0 61.1 27.4 61.1 61.1 0 19.6-9.4 37.9-25.2 49.4l-24 17.5 33.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-90.7 0C13.1 464 0 450.9 0 434.7 0 425.3 4.5 416.5 12.1 411l70.5-51.3c3.4-2.5 5.4-6.4 5.4-10.6 0-7.2-5.9-13.1-13.1-13.1L70 336c-3.9 0-7.7 1.3-10.8 3.6L38.4 355.2c-10.6 8-25.6 5.8-33.6-4.8S-1 324.8 9.6 316.8l20.8-15.6zM224 64l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z`},mn={width:512,height:512,path:`M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z`},hn={width:448,height:512,path:`M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z`},gn={width:448,height:512,path:`M0 64C0 46.3 14.3 32 32 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 320 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-320-16 0C14.3 96 0 81.7 0 64z`},_n={width:448,height:512,path:`M160 0L416 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 416c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-416-48 0 0 416c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160-48 0C71.6 320 0 248.4 0 160S71.6 0 160 0z`},vn={width:512,height:512,path:`M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z`},yn={width:448,height:512,path:`M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z`},bn={width:512,height:512,path:`M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z`},xn={width:448,height:512,path:`M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136z`},Sn={width:512,height:512,path:`M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z`},Cn={width:512,height:512,path:`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`},wn={width:512,height:512,path:`M307.8 18.4c-12 5-19.8 16.6-19.8 29.6l0 80-112 0c-97.2 0-176 78.8-176 176 0 113.3 81.5 163.9 100.2 174.1 2.5 1.4 5.3 1.9 8.1 1.9 10.9 0 19.7-8.9 19.7-19.7 0-7.5-4.3-14.4-9.8-19.5-9.4-8.8-22.2-26.4-22.2-56.7 0-53 43-96 96-96l96 0 0 80c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9z`},Tn={width:512,height:512,path:`M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 224zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384z`},En={width:512,height:512,path:`M96 157.5C96 88.2 152.2 32 221.5 32L368 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L221.5 96c-34 0-61.5 27.5-61.5 61.5 0 31 23.1 57.2 53.9 61l44.1 5.5 222 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l83.1 0C103 204.6 96 181.8 96 157.5zM349.2 336l65.5 0c.9 6.1 1.4 12.2 1.4 18.5 0 69.3-56.2 125.5-125.5 125.5L144 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l146.5 0c34 0 61.5-27.5 61.5-61.5 0-6.4-1-12.7-2.8-18.5z`},Dn={width:576,height:512,path:`M96 64C78.3 64 64 78.3 64 96s14.3 32 32 32l15.3 0 89.6 128-89.6 128-15.3 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c10.4 0 20.2-5.1 26.2-13.6L240 311.8 325.8 434.4c6 8.6 15.8 13.6 26.2 13.6l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-15.3 0-89.6-128 89.6-128 15.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-10.4 0-20.2 5.1-26.2 13.6L240 200.2 154.2 77.6C148.2 69.1 138.4 64 128 64L96 64zM544 320c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16c-15.8 7.9-22.2 27.1-14.3 42.9 5.6 11.2 16.9 17.7 28.6 17.7l0 80c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-128z`},On={width:576,height:512,path:`M544 32c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4l-32 16C449.9 27.3 443.5 46.5 451.4 62.3 457 73.5 468.3 80 480 80l0 80c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-128zM96 64C78.3 64 64 78.3 64 96s14.3 32 32 32l15.3 0 89.6 128-89.6 128-15.3 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c10.4 0 20.2-5.1 26.2-13.6L240 311.8 325.8 434.4c6 8.6 15.8 13.6 26.2 13.6l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-15.3 0-89.6-128 89.6-128 15.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-10.4 0-20.2 5.1-26.2 13.6L240 200.2 154.2 77.6C148.2 69.1 138.4 64 128 64L96 64z`},kn={width:448,height:512,path:`M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-320 0-6.5-.3C25.2 476.4 0 449.1 0 416L0 96C0 60.7 28.7 32 64 32l320 0zM64 320l0 96 128 0 0-96-128 0zm192 0l0 96 128 0 0-96-128 0zM64 256l128 0 0-96-128 0 0 96zm192 0l128 0 0-96-128 0 0 96z`},An={width:576,height:512,path:`M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L322.7 256.9 368.2 96 471 96 465 120.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1C545.6 61.3 522.7 32 491.5 32l-319 0c-19.8 0-37.3 12.1-44.5 30.1l-87-87zM180.4 114.5l4.6-18.5 116.7 0-30.8 109-90.5-90.5zM241 310.8L211.3 416 160 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-42.2 0 15.1-53.3-51.9-51.9z`},jn={width:512,height:512,path:`M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z`},Mn={width:384,height:512,path:`M0 32C0 14.3 14.3 0 32 0L96 0c17.7 0 32 14.3 32 32S113.7 64 96 64l0 160c0 53 43 96 96 96s96-43 96-96l0-160c-17.7 0-32-14.3-32-32S270.3 0 288 0l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 160c0 88.4-71.6 160-160 160S32 312.4 32 224L32 64C14.3 64 0 49.7 0 32zM0 480c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32z`},Nn={width:384,height:512,path:`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`},Pn={width:128,height:512,path:`M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z`},Fn={width:512,height:512,path:`M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z`},In={width:512,height:512,path:`M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z`},Ln={width:448,height:512,path:`M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z`},Rn={alignCenter:mt,alignJustify:ht,alignLeft:gt,alignRight:_t,arrowDown:vt,arrowLeft:yt,arrowRight:bt,arrowRotateLeft:xt,arrowRotateRight:St,arrowUp:Ct,arrowUpRightFromSquare:wt,asterisk:Tt,bold:Et,bracketsCurly:Dt,calendar:Ot,caretDown:kt,caretUp:At,check:jt,chevronDown:Mt,chevronLeft:Nt,chevronRight:Pt,chevronUp:Ft,circle:It,circleCheck:Lt,circleExclamation:Rt,circleInfo:zt,clipboard:Bt,clock:Vt,clone:Ht,code:Ut,copy:Wt,download:Gt,ellipsis:Kt,ellipsisVertical:Pn,eye:qt,fileDashedLine:Jt,flagCheckered:Yt,gear:Fn,gripDots:Zt,gripDotsVertical:Qt,gripMove:Xt,h1:$t,h2:en,h3:tn,h4:nn,h5:rn,h6:an,heading:gn,highlighter:on,house:sn,italic:cn,lightbulb:ln,link:un,lock:dn,list:fn,listOl:pn,listUl:mn,minus:hn,paragraph:_n,pen:vn,penToSquare:In,plus:yn,circlePlus:bn,quoteRight:xn,arrowsRotate:Sn,magnifyingGlass:Cn,share:wn,sliders:Tn,strikethrough:En,subscript:Dn,superscript:On,table:kn,textSlash:An,trash:Ln,triangleExclamation:jn,underline:Mn,xmark:Nn},zn=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Bn=e=>{let t=e.trim();return t&&(/[A-Z]/.test(t)?zn(t):t.toLowerCase())},Vn=`__PK_ICON_REGISTRY__`,Hn=`__PK_ICON_REGISTRY_LISTENERS__`,Un=()=>{let e=globalThis;return e[Vn]||(e[Vn]={}),e[Vn]},Wn=()=>{let e=globalThis;return e[Hn]||(e[Hn]=new Set),e[Hn]},Gn=()=>{for(let e of Wn())try{e()}catch{}},Kn=e=>{let t=Wn();return t.add(e),()=>{t.delete(e)}},qn=()=>Object.keys(Un()).sort(),Jn=e=>{if(!e)return;let t=Un();return t[Bn(e)]??t[e]},Yn=(e,t)=>{let n=Bn(e);if(!n)throw Error(`registerIcon: name must be a non-empty string`);if(!t?.path||!t.width||!t.height)throw Error(`registerIcon: icon "${n}" must include width, height, and path`);Un()[n]=t,Gn()},Xn=e=>{let t=!1;for(let[n,r]of Object.entries(e)){let e=Bn(n);if(!e)throw Error(`registerIcon: name must be a non-empty string`);if(!r?.path||!r.width||!r.height)throw Error(`registerIcon: icon "${e}" must include width, height, and path`);Un()[e]=r,t=!0}t&&Gn()},Zn=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),Qn=e=>{let{width:t,height:n}=e;if(t===n)return`0 0 ${t} ${n}`;let r=Math.max(t,n);return`${(t-r)/2} ${(n-r)/2} ${r} ${r}`},$n=(e,t={})=>{let{title:n,className:r,attributes:i={}}=t,a={xmlns:`http://www.w3.org/2000/svg`,viewBox:Qn(e),overflow:`visible`,...i};return r&&(a.class=r),n?a.role=`img`:(a[`aria-hidden`]=`true`,a.focusable=`false`),`<svg ${Object.entries(a).map(([e,t])=>`${e}="${Zn(t)}"`).join(` `)}>${n?`<title>${Zn(n)}</title>`:``}<path fill="currentColor" d="${Zn(e.path)}"/></svg>`},er=r({alignCenter:()=>mt,alignJustify:()=>ht,alignLeft:()=>gt,alignRight:()=>_t,arrowDown:()=>vt,arrowLeft:()=>yt,arrowRight:()=>bt,arrowRotateLeft:()=>xt,arrowRotateRight:()=>St,arrowUp:()=>Ct,arrowUpRightFromSquare:()=>wt,arrowsRotate:()=>Sn,asterisk:()=>Tt,bold:()=>Et,bracketsCurly:()=>Dt,calendar:()=>Ot,caretDown:()=>kt,caretUp:()=>At,check:()=>jt,chevronDown:()=>Mt,chevronLeft:()=>Nt,chevronRight:()=>Pt,chevronUp:()=>Ft,circle:()=>It,circleCheck:()=>Lt,circleExclamation:()=>Rt,circleInfo:()=>zt,circlePlus:()=>bn,clipboard:()=>Bt,clock:()=>Vt,clone:()=>Ht,code:()=>Ut,copy:()=>Wt,download:()=>Gt,ellipsis:()=>Kt,ellipsisVertical:()=>Pn,eye:()=>qt,fileDashedLine:()=>Jt,flagCheckered:()=>Yt,gear:()=>Fn,getIcon:()=>Jn,getIconNames:()=>qn,gripDots:()=>Zt,gripDotsVertical:()=>Qt,gripMove:()=>Xt,h1:()=>$t,h2:()=>en,h3:()=>tn,h4:()=>nn,h5:()=>rn,h6:()=>an,heading:()=>gn,highlighter:()=>on,house:()=>sn,iconToSvg:()=>$n,iconViewBox:()=>Qn,icons:()=>Rn,italic:()=>cn,lightbulb:()=>ln,link:()=>un,list:()=>fn,listOl:()=>pn,listUl:()=>mn,lock:()=>dn,magnifyingGlass:()=>Cn,minus:()=>hn,normalizeIconName:()=>Bn,paragraph:()=>_n,pen:()=>vn,penToSquare:()=>In,plus:()=>yn,quoteRight:()=>xn,registerIcon:()=>Yn,registerIcons:()=>Xn,share:()=>wn,sliders:()=>Tn,strikethrough:()=>En,subscribeIconRegistry:()=>Kn,subscript:()=>Dn,superscript:()=>On,table:()=>kn,textSlash:()=>An,trash:()=>Ln,triangleExclamation:()=>jn,underline:()=>Mn,xmark:()=>Nn}),tr=[qe,rt,at(),it(`.button`),ot(),st(`.button`),d`
        @layer pk-component {
            :host {
                font-family: var(--pk-font-family);
                cursor: pointer;
                --pk-btn-height: var(--pk-btn-height-default);
                --pk-btn-font: var(--pk-btn-font-default);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-default);
                --pk-btn-icon-size: var(--pk-btn-icon-size-default);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-default);
                --pk-btn-caret-size: var(--pk-btn-caret-size-default);
                --pk-btn-radius: var(--pk-btn-radius-default);
                /*
                 * Slotted labels inherit from the host — pin the size-token font
                 * (and button line-height) so Craft CP / Tailwind hosts match.
                 */
                font-size: var(--pk-btn-font);
                line-height: 1.2;
            }

            :host([disabled]) {
                cursor: not-allowed;
                pointer-events: none;
            }

            :host([loading]):not([disabled]) {
                pointer-events: none;
            }

            .button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: var(--pk-btn-icon-gap);
                box-sizing: border-box;
                width: auto;
                margin: 0;
                /* Every button carries a 1px border (transparent for fill/plain variants) so the box
                 * model is identical across variants and states. Prevents width shift when swapping a
                 * button between filled and outline/dashed, or toggling states. Matches Bootstrap
                 * (transparent baseline) and  (border always present, only color changes).
                 */
                border: 1px solid transparent;
                border-radius: var(--pk-btn-radius);
                font: inherit;
                font-size: var(--pk-btn-font);
                font-weight: 400;
                line-height: 1.2;
                text-decoration: none;
                white-space: nowrap;
                /* Inherit host cursor so className/style (e.g. cursor-move) pierce shadow. */
                cursor: inherit;
                user-select: none;
                vertical-align: middle;
                appearance: none;
                background: var(--pk-btn-fill, var(--pk-action-fill));
                color: var(--pk-btn-on, var(--pk-action-on));
                height: var(--pk-btn-height);
                min-height: var(--pk-btn-height);
                /* Block padding defaults to 0 (height tokens center content). Override for nav rows. */
                padding-block: var(--pk-btn-padding-block, 0);
                padding-inline: var(--pk-btn-padding-inline);
                transition: background-color 0.12s ease, box-shadow 0.12s ease, color 0.12s ease;
            }

            .button:disabled {
                opacity: 0.5;
            }

            .icon-slot {
                display: none;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                line-height: 0;
            }

            .icon-slot--has-content {
                display: inline-flex;
            }

            /* Fixed token sizes for all icons (labeled or icon-only) — matches plugin-kit-react Button. */
            .icon-slot slot::slotted(svg),
            slot[name='start']::slotted(svg),
            slot[name='end']::slotted(svg) {
                display: block;
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                flex-shrink: 0;
                pointer-events: none;
            }

            .icon-slot slot::slotted(img),
            slot[name='start']::slotted(img),
            slot[name='end']::slotted(img) {
                display: block;
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                object-fit: contain;
                flex-shrink: 0;
                pointer-events: none;
            }

            /* pk-icon sizes itself from font-size (1em), so scale it to the
             * icon token. This keeps the idiomatic slotted pk-icon usage in
             * sync with raw slotted svg. Set width/height explicitly — %/size-full
             * collapses when the icon-slot has no definite box.
             */
            .icon-slot slot::slotted(pk-icon),
            slot[name='start']::slotted(pk-icon),
            slot[name='end']::slotted(pk-icon) {
                font-size: var(--pk-btn-icon-size);
                width: var(--pk-btn-icon-size);
                height: var(--pk-btn-icon-size);
                /* Kill pk-icon's text-baseline nudge (-0.125em) — flex slots center optically. */
                vertical-align: 0;
                flex-shrink: 0;
                pointer-events: none;
            }

            .label {
                display: inline-flex;
                align-items: center;
                min-width: 0;
                line-height: 1.2;
            }

            /* Trailing slot (status): grow + clip the label so end sits at the far edge
             * and long titles truncate instead of colliding with the indicator.
             */
            .button:has(.icon-slot--end.icon-slot--has-content) .label:not(.is-empty) {
                flex: 1 1 auto;
                overflow: hidden;
            }

            .label.is-empty {
                display: none;
            }

            /* Icon-only (no label): square hit box = size height. Button owns the target;
             * glyph size comes from --pk-btn-icon-size. Do not Tailwind-size the Icon.
             * Opt out with icon (compact), size=none, or group-trigger (narrow disclosure cap).
             */
            :host(:not([icon]):not([size='none']):not([group-trigger])) .button:not(.has-label) {
                width: var(--pk-btn-height);
                min-width: var(--pk-btn-height);
                padding-inline: 0;
            }

            /* Compact density (icon attr): padless box that hugs the glyph.
             * size still drives --pk-btn-icon-size; height/width tiers do not apply.
             * Use for dense x / ellipsis in cells — not for table action rows (prefer square above).
             * line-height: 0 collapses whitespace flex-struts so the glyph sits dead-center.
             */
            :host([icon]) {
                display: inline-flex;
                line-height: 0;
                vertical-align: middle;
            }

            :host([icon]) .button {
                display: flex;
                width: auto;
                min-width: 0;
                height: auto;
                min-height: 0;
                padding-inline: 0.25rem;
                padding-block: 0;
                line-height: 0;
                align-items: center;
                justify-content: center;
            }

            /* Keep label space while loading even before slotchange runs. */
            .button.loading .label.is-empty {
                display: inline-flex;
                visibility: hidden;
            }

            /* Sizes — token-driven scale (see tokens.css) */
            :host([size='xxs']) {
                --pk-btn-height: var(--pk-btn-height-xxs);
                --pk-btn-font: var(--pk-btn-font-xxs);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xxs);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xxs);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xxs);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xxs);
                --pk-btn-radius: var(--pk-btn-radius-xxs);
            }

            :host([size='xs']) {
                --pk-btn-height: var(--pk-btn-height-xs);
                --pk-btn-font: var(--pk-btn-font-xs);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xs);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xs);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xs);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xs);
                --pk-btn-radius: var(--pk-btn-radius-xs);
            }

            :host([size='sm']) {
                --pk-btn-height: var(--pk-btn-height-sm);
                --pk-btn-font: var(--pk-btn-font-sm);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-sm);
                --pk-btn-icon-size: var(--pk-btn-icon-size-sm);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-sm);
                --pk-btn-caret-size: var(--pk-btn-caret-size-sm);
                --pk-btn-radius: var(--pk-btn-radius-sm);
            }

            :host([size='default']) {
                --pk-btn-height: var(--pk-btn-height-default);
                --pk-btn-font: var(--pk-btn-font-default);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-default);
                --pk-btn-icon-size: var(--pk-btn-icon-size-default);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-default);
                --pk-btn-caret-size: var(--pk-btn-caret-size-default);
                --pk-btn-radius: var(--pk-btn-radius-default);
            }

            :host([size='lg']) {
                --pk-btn-height: var(--pk-btn-height-lg);
                --pk-btn-font: var(--pk-btn-font-lg);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-lg);
                --pk-btn-icon-size: var(--pk-btn-icon-size-lg);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-lg);
                --pk-btn-caret-size: var(--pk-btn-caret-size-lg);
                --pk-btn-radius: var(--pk-btn-radius-lg);
            }

            :host([size='xl']) {
                --pk-btn-height: var(--pk-btn-height-xl);
                --pk-btn-font: var(--pk-btn-font-xl);
                --pk-btn-padding-inline: var(--pk-btn-padding-inline-xl);
                --pk-btn-icon-size: var(--pk-btn-icon-size-xl);
                --pk-btn-icon-gap: var(--pk-btn-icon-gap-xl);
                --pk-btn-caret-size: var(--pk-btn-caret-size-xl);
                --pk-btn-radius: var(--pk-btn-radius-xl);
            }

            /* No preset scale — size to content or set --pk-btn-* on the host for one-off dimensions
             * (height, padding, font, icon, radius) without fighting a named size tier.
             * Pair with icon for a padless glyph host, or set --pk-btn-padding-inline / --pk-btn-height yourself.
             */
            :host([size='none']) {
                --pk-btn-height: auto;
                --pk-btn-font: inherit;
                --pk-btn-padding-inline: 0px;
                --pk-btn-padding-block: 0px;
                --pk-btn-icon-size: 1em;
                --pk-btn-icon-gap: 0px;
                --pk-btn-caret-size: 1em;
                --pk-btn-radius: 0px;
            }

            :host([size='none']) .button {
                height: auto;
                min-height: auto;
                width: 100%;
            }

            /* Variants */
            :host([variant='default']) {
                --pk-btn-fill: var(--pk-action-fill);
                --pk-btn-fill-hover: var(--pk-action-fill-hover);
                --pk-btn-fill-active: var(--pk-action-fill-active);
                --pk-btn-on: var(--pk-action-on);
            }

            :host([variant='primary']) {
                --pk-btn-fill: var(--pk-action-primary-fill);
                --pk-btn-fill-hover: var(--pk-action-primary-fill-hover);
                --pk-btn-fill-active: var(--pk-action-primary-fill-active);
                --pk-btn-on: var(--pk-action-primary-on);
            }

            :host([variant='primary']) .button,
            :host([variant='secondary']) .button {
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
            }

            :host([variant='secondary']) {
                --pk-btn-fill: var(--pk-color-gray-500);
                --pk-btn-fill-hover: var(--pk-color-gray-550);
                --pk-btn-fill-active: var(--pk-color-gray-600);
                --pk-btn-on: var(--pk-color-white);
            }

            :host([variant='outline']) .button {
                background: transparent;
                border-color: var(--pk-color-slate-400);
                color: var(--pk-color-gray-700);
            }

            :host([variant='transparent']) .button {
                background: transparent;
                color: var(--pk-color-gray-700);
            }

            /* link/none opt out of the shared transparent 1px border: they never render a border, so
             * carrying one only pads the box by 2px inline (and 2px block at size='none', where height
             * is auto). These are the "inline text" / "no chrome" variants — content-sized is the point,
             * and neither participates in button-group border joins. Other variants keep the stable box.
             */
            /*
             * Craft CP sets --link-color on :root (inherits into shadow). Prefer that,
             * then kit --pk-color-link — not sky-700 (reads as a different “CP blue”).
             * Color on :host so consumer utilities (e.g. text-[var(--link-color)]) can override.
             * Height must be content-sized — default --pk-btn-height (34px) bloated table rows.
             */
            :host([variant='link']) {
                color: var(--link-color, var(--pk-color-link));
                --pk-btn-height: auto;
                --pk-btn-padding-inline: 0;
                --pk-btn-padding-block: 0;
            }

            :host([variant='link']) .button {
                background: transparent;
                border-width: 0;
                border-radius: 0;
                color: inherit;
                width: auto;
                height: auto;
                min-height: 0;
                padding: 0;
                text-underline-offset: 2px;
            }

            :host([variant='dashed']) .button {
                background: transparent;
                border-style: dashed;
                border-color: var(--pk-color-slate-500);
                color: var(--pk-color-gray-700);
            }

            :host([variant='none']) .button {
                border-width: 0;
                border-radius: 0;
                background: transparent;
                color: inherit;
            }

            /* Interaction — pseudo-classes only; playground matrices use dev/pk-button-demo-states.css */
            .button:hover:not(:disabled) {
                background: var(--pk-btn-fill-hover, var(--pk-btn-fill));
            }

            :host([variant='outline']) .button:hover:not(:disabled),
            :host([variant='transparent']) .button:hover:not(:disabled),
            :host([variant='dashed']) .button:hover:not(:disabled) {
                background: var(--pk-color-slate-150);
            }

            :host([variant='link']) .button:hover:not(:disabled) {
                background: transparent;
                text-decoration: underline;
            }

            :host([variant='none']) .button:hover:not(:disabled) {
                background: transparent;
            }

            .button:active:not(:disabled) {
                background: var(--pk-btn-fill-active, var(--pk-btn-fill-hover, var(--pk-btn-fill)));
            }

            :host([variant='outline']) .button:active:not(:disabled),
            :host([variant='transparent']) .button:active:not(:disabled),
            :host([variant='dashed']) .button:active:not(:disabled) {
                background: var(--pk-color-slate-200);
            }

            :host([variant='link']) .button:active:not(:disabled),
            :host([variant='none']) .button:active:not(:disabled) {
                background: transparent;
            }

            .button:focus {
                outline: none;
            }

            .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            /* Bordered variants: fold the button's own border into the focus ring by recoloring it to
             * the accent (and solidifying dashed) so focus reads as one cohesive ring instead of a
             * doubled border. The ring is thinned to 1px here because the recolored 1px border already
             * supplies the other half — total 2px, matching the filled variants' ring weight.
             */
            :host([variant='outline']) .button:focus-visible,
            :host([variant='dashed']) .button:focus-visible {
                border-color: var(--pk-color-sky-600);
                box-shadow: 0 0 0 1px var(--pk-color-sky-600), 0 0 5px 1px hsl(from var(--pk-color-sky-600) h s l / 0.7);
            }

            :host([variant='dashed']) .button:focus-visible {
                border-style: solid;
            }

            :host(.pk-dialog__close) .button:focus-visible {
                box-shadow: 0 0 0 2px var(--pk-color-gray-600);
            }

            :host-context(pk-button-group) {
                position: relative;
            }

            :host-context(pk-button-group[orientation='vertical']) {
                display: block;
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;
            }

            :host-context(pk-button-group[orientation='vertical']) .button {
                width: 100%;
                box-sizing: border-box;
            }

            :host-context(pk-button-group:focus-visible) {
                z-index: 2;
            }

            /* Bordered variants — matching border divider (filled uses margin gap via buttonGroupIndentStyles) */

            :host([variant='primary']) .button:focus-visible,
            :host([variant='secondary']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus-inset);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button {
                background: var(--pk-color-gray-500);
                color: var(--pk-color-white);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:hover:not(:disabled) {
                background: var(--pk-color-gray-550);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:active:not(:disabled) {
                background: var(--pk-color-gray-600);
            }

            :host-context(pk-button-group[exclusive]):host([aria-pressed='true']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([variant='link']) .button:focus-visible {
                box-shadow: none;
                text-decoration: underline;
            }

            .button.loading {
                position: relative;
                cursor: default;
                pointer-events: none;
            }

            .label.loading {
                visibility: hidden;
            }

            .button.loading .icon-slot,
            .button.loading slot[name='start']::slotted(*),
            .button.loading slot[name='end']::slotted(*) {
                visibility: hidden;
            }

            .button.caret .icon-slot--end.icon-slot--has-content {
                display: none;
            }

            /* Scope to the caret span — the button host also gets class caret when
               with-caret is set; an unscoped .caret rule was adding 2px margin
               to the whole button and shifting dropdown anchors left. */
            .button > .caret {
                display: inline-flex;
                align-self: center;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                line-height: 0;
                /* Sits slightly further from the label than the flex gap alone. */
                margin-inline-start: 2px;
            }

            /* Caret has its own per-size token (--pk-btn-caret-size), kept deliberately smaller than
             * --pk-btn-icon-size so it reads as a subordinate dropdown affordance next to real icons.
             */
            .button > .caret svg {
                display: block;
                width: var(--pk-btn-caret-size);
                height: var(--pk-btn-caret-size);
            }

            :host([group-trigger]) .button {
                padding-inline: 6px;
            }

            /* Compact disclosure cap — hide content, keep only the shared SVG caret (centered). */
            :host([group-trigger]) .label,
            :host([group-trigger]) .icon-slot {
                display: none;
            }

            :host([group-trigger]) .button > .caret {
                margin-inline-start: 0;
            }

            :host([size='sm'][group-trigger]) .button,
            :host([size='xs'][group-trigger]) .button,
            :host([size='xxs'][group-trigger]) .button {
                padding-inline: 6px;
            }

            :host([size='lg'][group-trigger]) .button {
                padding-inline: 10px;
            }

            :host([size='xl'][group-trigger]) .button {
                padding-inline: 12px;
            }

            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host-context(pk-button-group[orientation='horizontal']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-left-width: 0;
            }

            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host-context(pk-button-group[orientation='vertical']):host([data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-top-width: 0;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-left-width: 0;
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='outline']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='dashed']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])[variant='transparent']) .button {
                border-top-width: 0;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='outline']) .button {
                box-shadow: none;
                border-left-width: 1px;
                border-left-style: solid;
                border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-color-slate-400));
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='outline']) .button {
                box-shadow: none;
                border-top-width: 1px;
                border-top-style: solid;
                border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-color-slate-400));
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='dashed']) .button {
                box-shadow: none;
                border-left-width: 1px;
                border-left-style: dashed;
                border-left-color: var(--pk-btn-group-divider-color-dashed, var(--pk-color-slate-500));
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='dashed']) .button {
                box-shadow: none;
                border-top-width: 1px;
                border-top-style: dashed;
                border-top-color: var(--pk-btn-group-divider-color-dashed, var(--pk-color-slate-500));
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='outline']) .button:focus-visible,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][variant='dashed']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='outline']) .button:focus-visible,
            :host([data-pk-group-orientation='vertical'][data-pk-group-divider][variant='dashed']) .button:focus-visible {
                box-shadow: var(--pk-shadow-focus);
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='outline']) .button,
            :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail][variant='dashed']) .button {
                border-right-width: 0;
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='outline']) .button,
            :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail][variant='dashed']) .button {
                border-bottom-width: 0;
            }
        }
    `],nr=$n(Mt),P=class extends Ye{constructor(...e){super(...e),this.variant=`default`,this.size=`default`,this.disabled=!1,this.loading=!1,this.withCaret=!1,this.groupTrigger=!1,this.icon=!1,this.title=``,this.type=`button`,this.hasDefaultSlotContent=!1,this.hasStartSlotContent=!1,this.hasEndSlotContent=!1,this.startSlotChanged=e=>{this.iconSlotChanged(e,`start`)},this.endSlotChanged=e=>{this.iconSlotChanged(e,`end`)},this.handleHostClick=e=>{if(this.disabled||this.loading||this.href||this.type!==`submit`&&this.type!==`reset`)return;let t=this.resolveAssociatedForm();if(t){if(e.preventDefault(),e.stopPropagation(),this.type===`reset`){t.reset();return}if(typeof t.requestSubmit==`function`){t.requestSubmit();return}t.dispatchEvent(new Event(`submit`,{bubbles:!0,cancelable:!0}))}}}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=tr}defaultSlotChanged(e){let t=e.target;this.hasDefaultSlotContent=t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE)}iconSlotChanged(e,t){let n=e.target.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE);t===`start`?this.hasStartSlotContent=n:this.hasEndSlotContent=n}buttonClasses(){return M({button:!0,"has-label":this.hasDefaultSlotContent,loading:this.loading,caret:this.withCaret,"group-trigger":this.groupTrigger})}connectedCallback(){super.connectedCallback(),this.setAttribute(`data-slot`,`button`),this.addEventListener(`click`,this.handleHostClick)}disconnectedCallback(){this.removeEventListener(`click`,this.handleHostClick),super.disconnectedCallback()}resolveAssociatedForm(){let e=(this.form||this.getAttribute(`form`)||``).trim();if(e){let t=this.ownerDocument?.getElementById(e);if(t instanceof HTMLFormElement&&t.id!==`main`)return t}let t=this.closest(`form`);return t&&t.id!==`main`?t:null}render(){let e=this.spinnerSize||Xe(this.size),t=Ze(this.variant,this.spinnerVariant);return w`
            ${this.href?w`
                    <a
                        part="base"
                        class=${this.buttonClasses()}
                        href=${this.href}
                        target=${this.target??E}
                        rel=${this.rel??E}
                        title=${this.title||E}
                    >
                        ${this.renderInner(e,t)}
                    </a>
                `:w`
                    <button
                        part="base"
                        class=${this.buttonClasses()}
                        type=${this.type}
                        ?disabled=${this.disabled}
                        aria-disabled=${this.disabled?`true`:E}
                        aria-busy=${this.loading?`true`:E}
                        name=${this.name??E}
                        value=${this.value??E}
                        title=${this.title||E}
                    >
                        ${this.renderInner(e,t)}
                    </button>
                `}
        `}renderInner(e,t){return w`
            <span
                class=${M({"icon-slot":!0,"icon-slot--start":!0,"icon-slot--has-content":this.hasStartSlotContent})}
            >
                <slot name="start" @slotchange=${this.startSlotChanged}></slot>
            </span>
            ${this.loading?w`
                    <pk-spinner
                        variant=${t}
                        size=${e}
                        tone=${this.spinnerTone??E}
                        centered
                    ></pk-spinner>
                `:E}
            <span
                class=${M({label:!0,"is-empty":!this.hasDefaultSlotContent,loading:this.loading})}
            >
                <slot @slotchange=${this.defaultSlotChanged}></slot>
            </span>
            <span
                class=${M({"icon-slot":!0,"icon-slot--end":!0,"icon-slot--has-content":this.hasEndSlotContent})}
            >
                <slot name="end" @slotchange=${this.endSlotChanged}></slot>
            </span>
            ${this.withCaret||this.groupTrigger?w`<span part="caret" class="caret">${N(nr)}</span>`:E}
        `}};D([k({reflect:!0})],P.prototype,`variant`,void 0),D([k({reflect:!0})],P.prototype,`size`,void 0),D([k({type:Boolean,reflect:!0})],P.prototype,`disabled`,void 0),D([k({type:Boolean,reflect:!0})],P.prototype,`loading`,void 0),D([k({reflect:!0,attribute:`spinner-size`})],P.prototype,`spinnerSize`,void 0),D([k({reflect:!0,attribute:`spinner-variant`})],P.prototype,`spinnerVariant`,void 0),D([k({reflect:!0,attribute:`spinner-tone`})],P.prototype,`spinnerTone`,void 0),D([k({type:Boolean,reflect:!0,attribute:`with-caret`})],P.prototype,`withCaret`,void 0),D([k({type:Boolean,reflect:!0,attribute:`group-trigger`})],P.prototype,`groupTrigger`,void 0),D([k({type:Boolean,reflect:!0})],P.prototype,`icon`,void 0),D([k()],P.prototype,`href`,void 0),D([k()],P.prototype,`target`,void 0),D([k()],P.prototype,`rel`,void 0),D([k()],P.prototype,`name`,void 0),D([k()],P.prototype,`value`,void 0),D([k()],P.prototype,`title`,void 0),D([k()],P.prototype,`type`,void 0),D([k({reflect:!0})],P.prototype,`form`,void 0),D([A()],P.prototype,`hasDefaultSlotContent`,void 0),D([A()],P.prototype,`hasStartSlotContent`,void 0),D([A()],P.prototype,`hasEndSlotContent`,void 0),P=D([O(`pk-button`)],P);var F=(e,t={})=>$n(e,{title:t.title}),rr=(e,t={})=>{let n=document.createElement(`template`);n.innerHTML=F(e,t);let r=n.content.firstElementChild;if(!(r instanceof SVGSVGElement))throw Error(`Icon render did not produce an SVG element.`);return r},ir=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,or=Object.getOwnPropertyNames,sr=Object.prototype.hasOwnProperty,cr=(e,t)=>{let n={};for(var r in e)ir(n,r,{get:e[r],enumerable:!0});return t||ir(n,Symbol.toStringTag,{value:`Module`}),n},lr=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=or(t),a=0,o=i.length,s;a<o;a++)s=i[a],!sr.call(e,s)&&s!==n&&ir(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=ar(t,s))||r.enumerable});return e},ur=(e,t,n)=>(lr(e,t,`default`),n&&lr(n,t,`default`)),dr=`M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l208 0 32 0 16 0 256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L320 64l-16 0-32 0L64 64zm512 48c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16l-256 0 0-288 256 0zM178.3 175.9l64 144c4.5 10.1-.1 21.9-10.2 26.4s-21.9-.1-26.4-10.2L196.8 316l-73.6 0-8.9 20.1c-4.5 10.1-16.3 14.6-26.4 10.2s-14.6-16.3-10.2-26.4l64-144c3.2-7.2 10.4-11.9 18.3-11.9s15.1 4.7 18.3 11.9zM179 276l-19-42.8L141 276l38 0zM456 164c-11 0-20 9-20 20l0 4-52 0c-11 0-20 9-20 20s9 20 20 20l72 0 35.1 0c-7.3 16.7-17.4 31.9-29.8 45l-.5-.5-14.6-14.6c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L430 298.3c-5.9 3.6-12.1 6.9-18.5 9.8l-3.6 1.6c-10.1 4.5-14.6 16.3-10.2 26.4s16.3 14.6 26.4 10.2l3.6-1.6c12-5.3 23.4-11.8 34-19.4c4.3 3 8.6 5.8 13.1 8.5l18.9 11.3c9.5 5.7 21.8 2.6 27.4-6.9s2.6-21.8-6.9-27.4l-18.9-11.3c-.9-.5-1.8-1.1-2.7-1.6c17.2-18.8 30.7-40.9 39.6-65.4L534 228l2 0c11 0 20-9 20-20s-9-20-20-20l-16 0-44 0 0-4c0-11-9-20-20-20z`,fr=()=>{let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),e.setAttribute(`viewBox`,`0 0 640 512`);let t=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return t.setAttribute(`d`,dr),e.append(t),e},I=cr({createIconElement:()=>rr,createTranslationIconElement:()=>fr,renderIconHtml:()=>F});ur(I,er);var pr=[];function mr(e){pr.push(e)}function hr(e){for(let t=pr.length-1;t>=0;--t)if(pr[t]===e){pr.splice(t,1);break}}function gr(e){return pr.length>0&&pr[pr.length-1]===e}function _r(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var vr=new Set,yr=null,br=new Set([` `,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`]);function xr(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&vr.has(t))return!0;return!1}function Sr(e){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let t=e.tagName;return t===`INPUT`||t===`TEXTAREA`||t===`SELECT`}function Cr(){let e=document.body,t=e.style.overflow;e.style.setProperty(`overflow`,`hidden`,`important`);let n=e=>{xr(e)||e.preventDefault()},r=e=>{xr(e)||e.preventDefault()},i=e=>{br.has(e.key)&&(xr(e)||Sr(e.target)||e.preventDefault())};return window.addEventListener(`wheel`,n,{passive:!1,capture:!0}),window.addEventListener(`touchmove`,r,{passive:!1,capture:!0}),window.addEventListener(`keydown`,i,{capture:!0}),()=>{window.removeEventListener(`wheel`,n,{capture:!0}),window.removeEventListener(`touchmove`,r,{capture:!0}),window.removeEventListener(`keydown`,i,{capture:!0}),e.style.removeProperty(`overflow`),t&&(e.style.overflow=t)}}function wr(e){vr.add(e),vr.size===1&&(document.documentElement.classList.add(`pk-scroll-lock`),document.documentElement.style.setProperty(`--pk-scroll-lock-size`,`0px`),yr=Cr())}function Tr(e){vr.delete(e),vr.size===0&&(yr?.(),yr=null,document.documentElement.classList.remove(`pk-scroll-lock`),document.documentElement.style.removeProperty(`--pk-scroll-lock-size`),document.documentElement.style.removeProperty(`--pk-scroll-lock-gutter`))}function Er(e,t,n=`vertical`,r=`smooth`){let i=_r(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var Dr=class extends Event{constructor(){super(`pk-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Or=class extends Event{constructor(){super(`pk-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},kr=class extends Event{constructor(e=`unknown`){super(`pk-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail={source:e}}},Ar=class extends Event{constructor(){super(`pk-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}};function jr(e,t,n=500){return new Promise(r=>{let i=new AbortController,{signal:a}=i;if(e.classList.contains(t)){r();return}e.classList.add(t);let o=!1,s=()=>{o||(o=!0,e.classList.remove(t),window.clearTimeout(c),r(),i.abort())};e.addEventListener(`animationend`,s,{once:!0,signal:a}),e.addEventListener(`animationcancel`,s,{once:!0,signal:a});let c=window.setTimeout(s,n);requestAnimationFrame(()=>{!o&&e.getAnimations().length===0&&s()})})}var Mr=`.modal-shade, .modal`,Nr=e=>{let t=getComputedStyle(e);return t.display!==`none`&&t.visibility!==`hidden`&&Number.parseFloat(t.opacity||`1`)>0};function Pr(e=document){let t=e.querySelectorAll(Mr);for(let e of t)if(e instanceof HTMLElement&&!e.closest(`pk-dialog`)&&Nr(e))return!0;return!1}function Fr(e,t={}){let n=t.getDocument?.()??document,r=t.root??n.body,i=Pr(n),a=()=>{let t=Pr(n);t!==i&&(i=t,e(t))},o=new MutationObserver(()=>{a()});o.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`class`,`style`,`hidden`]});let s=window.setInterval(a,250);return{disconnect:()=>{o.disconnect(),window.clearInterval(s)}}}var Ir=d`
    @layer pk-component {
        :host {
            /* Not display:contents — that flattens the trigger slot into flex parents
               (e.g. playground cards) and stretches pk-button full width, same class of
               bug as the dropdown host. Dialog host is display none/block, not contents. */
            display: inline-block;
            width: fit-content;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            vertical-align: middle;
        }

        /*
         * Controlled dialogs (no slot="trigger") — panel is top-layer / fixed while
         * yielding. An inline-block host still sizes to the open <dialog> box in some
         * engines and expands parents (Formie nested field cards grow a blank gap).
         *
         * Zero box ≠ gone from the tree: Tailwind space-y-* uses :not(:last-child) on
         * DOM siblings, so an in-tree host still steals last-child and margins the
         * previous sibling. Prefer flex/grid gap-* (skips out-of-flow children), or
         * mount overlays outside the spaced stack. True light-DOM portal would also fix it.
         */
        :host(:not([data-has-trigger])) {
            position: absolute;
            width: 0;
            height: 0;
            max-width: none;
            margin: 0;
            padding: 0;
            overflow: visible;
            vertical-align: unset;
        }

        .dialog {
            display: flex;
            flex-direction: column;
            width: min(100%, var(--pk-dialog-width, var(--pk-dialog-max-width, 32rem)));
            min-width: var(--pk-dialog-min-width, 0);
            /* Keep UA :modal inset (0) — that + margin:auto centers the panel. Do not
             * unset inset; it breaks centering (field edit landed top-left). */
            height: var(--pk-dialog-height, fit-content);
            min-height: var(--pk-dialog-min-height, 0);
            max-height: var(--pk-dialog-max-height, calc(100vh - 2rem));
            margin: auto;
            padding: 0;
            /* v1 DialogContent: no CSS border — edge is the 1px ring inside --pk-shadow-modal. */
            border: 0;
            border-radius: var(--pk-radius-lg);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-modal);
            color: var(--pk-color-gray-900);
            overflow: hidden;
            opacity: 1;
            transform: scale(1);
        }

        .dialog:focus,
        .dialog:focus-visible {
            outline: none;
        }

        .dialog:not([open]) {
            display: none;
        }

        .dialog--wide {
            --pk-dialog-max-width: 42rem;
        }

        /* motion only via animateWithClass — never auto-animate on [open] alone. */
        .dialog.show {
            animation: pk-dialog-in 0.15s ease;
        }

        .dialog.hide {
            animation: pk-dialog-out 0.15s ease forwards;
        }

        .dialog.pulse {
            animation: pk-dialog-pulse 0.25s ease;
        }

        @keyframes pk-dialog-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pk-dialog-out {
            from {
                opacity: 1;
                transform: scale(1);
            }

            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        @keyframes pk-dialog-pulse {
            0%, 100% {
                transform: scale(1);
            }

            50% {
                transform: scale(0.98);
            }
        }

        .dialog.show::backdrop {
            animation: pk-dialog-backdrop-in 0.15s ease;
        }

        .dialog.hide::backdrop {
            animation: pk-dialog-backdrop-in 0.15s ease reverse;
        }

        .dialog::backdrop {
            background: hsl(from var(--pk-color-gray-900) h s l / 0.2);
            opacity: 1;
        }

        @keyframes pk-dialog-backdrop-in {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .header {
            position: relative;
            display: flex;
            flex-shrink: 0;
            flex-direction: column;
            gap: 0.2rem;
            padding: 1rem;
            border-bottom: 1px solid var(--pk-color-gray-150);
            border-radius: var(--pk-radius-lg) var(--pk-radius-lg) 0 0;
            background: #f3f7fb;
            text-align: left;
        }

        .title {
            margin: 0;
            padding-inline-end: 2rem;
            font-size: 0.9375rem;
            font-weight: 600;
            line-height: 1.2;
            color: var(--pk-color-gray-900);
        }

        .description {
            margin: 0;
            padding-inline-end: 2rem;
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 1.4;
            color: var(--pk-color-gray-500);
        }

        .close {
            --pk-dialog-close-focus-padding: 0.25rem;
            position: absolute;
            top: calc(1rem - var(--pk-dialog-close-focus-padding));
            right: calc(1rem - var(--pk-dialog-close-focus-padding));
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: calc(1.125rem + 2 * var(--pk-dialog-close-focus-padding));
            height: calc(1.125rem + 2 * var(--pk-dialog-close-focus-padding));
            margin: 0;
            padding: var(--pk-dialog-close-focus-padding);
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            line-height: 0;
            opacity: 0.7;
            transition: opacity 0.12s ease;
            box-sizing: border-box;
        }

        .close-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
        }

        .close-icon svg {
            display: block;
            width: 1.125rem;
            height: 1.125rem;
        }

        .close:hover {
            opacity: 1;
            background: transparent;
        }

        .close:focus-visible {
            opacity: 1;
            box-shadow: 0 0 0 2px var(--pk-color-gray-600);
        }

        .body {
            flex: 1 1 auto;
            min-height: 0;
            overflow: auto;
            padding: 0;
            /* v1 DialogContent inherited CP text defaults (14px / gray-700) — do not
             * downshift body copy to sm/gray-600 or slotted content reads smaller than v1. */
            font-size: var(--pk-font-size-base);
            line-height: 1.5;
            color: var(--pk-color-gray-700);
        }

        .body--padded {
            padding: 1rem;
        }

        .footer {
            display: flex;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: flex-end;
            gap: 0.5rem;
            padding: 0.625rem 1rem;
            border-top: 1px solid var(--pk-color-gray-150);
            border-radius: 0 0 var(--pk-radius-lg) var(--pk-radius-lg);
            background: #e4edf6;
        }
    }
`,Lr=F(I.xmark),L=class extends Ye{constructor(...e){super(...e),this.open=!1,this.label=``,this.description=``,this.disablePointerDismissal=!1,this.withoutHeader=!1,this.withoutBodyPadding=!1,this.disableScrollLock=!1,this.size=`default`,this.triggerElement=null,this.previouslyFocused=null,this.yieldingToHostModal=!1,this.hostModalObserver=null,this.yieldBox=null,this.handleDocumentKeyDown=e=>{this.yieldingToHostModal||e.key===`Escape`&&this.open&&gr(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(`escape`))},this.onHostModalPresenceChange=e=>{e?this.yieldToHostModal():this.restoreFromHostModal()},this.showing=!1,this.handleDialogCancel=e=>{e.preventDefault(),!this.dialogElement.classList.contains(`hide`)&&gr(this)&&this.requestClose(`escape`)},this.handleDialogClick=e=>{e.composedPath().some(e=>e instanceof Element&&e.matches(`[data-dialog="close"], [data-dialog-close]`))&&(e.stopPropagation(),this.requestClose(`close-button`))},this.handleDialogPointerDown=async e=>{if(e.target===this.dialogElement&&gr(this)){if(!this.disablePointerDismissal){this.requestClose(`pointer-dismiss`);return}await jr(this.dialogElement,`pulse`)}},this.onTriggerClick=e=>{e.preventDefault(),this.open=!0},this.onFooterSlotChange=()=>{this.requestUpdate()}}static{this.styles=Ir}hasCustomHeaderSlot(){return this.querySelector(`:scope > [slot="header"]`)!==null}applyYieldPosition(e){let t=this.dialogElement;t.style.position=`fixed`,t.style.top=`${e.top}px`,t.style.left=`${e.left}px`,t.style.width=`${e.width}px`,t.style.height=`${e.height}px`,t.style.margin=`0`,t.style.maxHeight=`none`,t.style.zIndex=`99`,t.toggleAttribute(`data-yielding`,!0)}clearYieldPosition(){let e=this.dialogElement;e&&(e.style.position=``,e.style.top=``,e.style.left=``,e.style.width=``,e.style.height=``,e.style.margin=``,e.style.maxHeight=``,e.style.zIndex=``,e.removeAttribute(`data-yielding`),this.yieldBox=null)}yieldToHostModal(){if(this.yieldingToHostModal||!this.open||!this.dialogElement?.open)return;let e=this.dialogElement.getBoundingClientRect();this.yieldBox={top:e.top,left:e.left,width:e.width,height:e.height},this.yieldingToHostModal=!0;try{this.dialogElement.close(),this.dialogElement.show(),this.applyYieldPosition(this.yieldBox)}catch{this.yieldingToHostModal=!1,this.clearYieldPosition()}}restoreFromHostModal(){if(this.yieldingToHostModal&&(this.yieldingToHostModal=!1,this.clearYieldPosition(),!(!this.open||!this.dialogElement)))try{this.dialogElement.open&&this.dialogElement.close(),this.dialogElement.showModal()}catch{}}firstUpdated(){this.open&&this.show()}disconnectedCallback(){this.disableScrollLock||Tr(this),this.removeOpenListeners(),super.disconnectedCallback()}updated(e){super.updated(e),!(!e.has(`open`)||!this.hasUpdated)&&this.handleOpenChange()}handleOpenChange(){this.open&&!this.dialogElement.open?this.show():!this.open&&this.dialogElement.open&&(this.open=!0,this.requestClose(`api`))}async show(e=`api`){if(!(this.showing||this.dialogElement?.open)){this.showing=!0;try{let e=new Dr;if(!this.dispatchEvent(e)){this.open=!1;return}this.addOpenListeners(),this.previouslyFocused=document.activeElement,this.open=!0,this.dialogElement.showModal(),this.disableScrollLock||wr(this),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);if(e){(e.shadowRoot?.querySelector(`input, textarea, select, button`)??e).focus({preventScroll:!0});return}this.dialogElement.focus({preventScroll:!0})}),await jr(this.dialogElement,`show`),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0})),this.dispatchEvent(new Or)}finally{this.showing=!1}}}async hide(e=`unknown`){await this.requestClose(e)}closeDialog(){this.requestClose(`close-button`)}async requestClose(e=`unknown`){let t=new kr(typeof e==`string`?e:`close-button`);if(!this.dispatchEvent(t)){this.open=!0,await jr(this.dialogElement,`pulse`);return}this.removeOpenListeners(),await jr(this.dialogElement,`hide`),this.open=!1,this.dialogElement.close(),this.disableScrollLock||Tr(this);let n=this.previouslyFocused;this.previouslyFocused=null,n?.isConnected&&window.setTimeout(()=>{n.focus({preventScroll:!0})},0),this.dispatchEvent(new Ar),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))}forceOverlayReset(){if(this.open=!1,this.yieldingToHostModal=!1,this.clearYieldPosition(),this.removeOpenListeners(),this.dialogElement?.open)try{this.dialogElement.close()}catch{}this.dialogElement?.classList.remove(`hide`,`show`,`pulse`),this.disableScrollLock||Tr(this)}addOpenListeners(){document.addEventListener(`keydown`,this.handleDocumentKeyDown),mr(this),this.hostModalObserver?.disconnect(),this.hostModalObserver=Fr(this.onHostModalPresenceChange),this.onHostModalPresenceChange(Pr())}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),hr(this),this.hostModalObserver?.disconnect(),this.hostModalObserver=null,this.yieldingToHostModal=!1,this.clearYieldPosition()}syncHasTriggerAttribute(){this.toggleAttribute(`data-has-trigger`,!!this.triggerElement)}onTriggerSlotChange(e){let[t]=e.target.assignedElements({flatten:!0});this.triggerElement&&this.triggerElement.removeEventListener(`click`,this.onTriggerClick),this.triggerElement=t??null,this.syncHasTriggerAttribute(),this.triggerElement&&this.triggerElement.addEventListener(`click`,this.onTriggerClick)}render(){let e=!this.hasCustomHeaderSlot()&&!this.withoutHeader&&!!this.label,t=e&&!this.withoutBodyPadding,n=this.querySelector(`:scope > [slot="footer"]`)!==null;return w`
            <slot name="trigger" @slotchange=${this.onTriggerSlotChange}></slot>
            <dialog
                part="panel"
                class=${M({dialog:!0,open:this.open,"dialog--wide":this.size===`wide`})}
                tabindex="-1"
                @cancel=${this.handleDialogCancel}
                @click=${this.handleDialogClick}
                @pointerdown=${this.handleDialogPointerDown}
            >
                <slot name="header">
                    ${e?w`
                            <header part="header" class="header">
                                <h2 part="title" class="title">
                                    <slot name="label">${this.label}</slot>
                                </h2>
                                ${this.description?w`
                                        <p part="description" class="description">
                                            <slot name="description">${this.description}</slot>
                                        </p>
                                    `:w`<slot name="description" hidden></slot>`}
                                <button type="button" class="close" data-dialog="close" aria-label="Close">
                                    <span class="close-icon" aria-hidden="true">${N(Lr)}</span>
                                </button>
                            </header>
                        `:E}
                </slot>
                <div
                    part="body"
                    class=${M({body:!0,"body--padded":t})}
                >
                    <slot></slot>
                </div>
                ${n?w`
                        <footer part="footer" class="footer">
                            <slot name="footer" @slotchange=${this.onFooterSlotChange}></slot>
                        </footer>
                    `:w`<slot name="footer" @slotchange=${this.onFooterSlotChange} hidden></slot>`}
            </dialog>
        `}};D([k({type:Boolean,reflect:!0})],L.prototype,`open`,void 0),D([k()],L.prototype,`label`,void 0),D([k()],L.prototype,`description`,void 0),D([k({attribute:`disable-pointer-dismissal`,type:Boolean,reflect:!0})],L.prototype,`disablePointerDismissal`,void 0),D([k({attribute:`without-header`,type:Boolean,reflect:!0})],L.prototype,`withoutHeader`,void 0),D([k({attribute:`without-body-padding`,type:Boolean,reflect:!0})],L.prototype,`withoutBodyPadding`,void 0),D([k({attribute:`disable-scroll-lock`,type:Boolean,reflect:!0})],L.prototype,`disableScrollLock`,void 0),D([k({reflect:!0})],L.prototype,`size`,void 0),D([j(`dialog`)],L.prototype,`dialogElement`,void 0),D([A()],L.prototype,`triggerElement`,void 0),L=D([O(`pk-dialog`)],L);var Rr=[`aria-labelledby`,`aria-describedby`,`aria-invalid`,`aria-errormessage`,`aria-required`,`aria-label`];function zr(e){return e.hasAttribute(`aria-labelledby`)||e.hasAttribute(`aria-describedby`)||e.hasAttribute(`aria-errormessage`)}function Br(e,t){for(let n of Rr){let r=e.getAttribute(n);r===null?t.removeAttribute(n):t.setAttribute(n,r)}}function Vr({control:e,labelId:t,instructionsId:n,hasLabel:r,hasInstructions:i,required:a=!1,invalid:o=!1}){r&&t?e.setAttribute(`aria-labelledby`,t):e.removeAttribute(`aria-labelledby`),i&&n?e.setAttribute(`aria-describedby`,n):e.removeAttribute(`aria-describedby`),a?e.setAttribute(`aria-required`,`true`):e.removeAttribute(`aria-required`),o?e.setAttribute(`aria-invalid`,`true`):e.removeAttribute(`aria-invalid`),e.removeAttribute(`aria-errormessage`)}var Hr=class{constructor(e,t,n){this.host=e,this.getTarget=t,this.onSync=n}connect(){this.sync(),this.observer=new MutationObserver(()=>{this.sync()}),this.observer.observe(this.host,{attributes:!0,attributeFilter:[...Rr]})}disconnect(){this.observer?.disconnect(),this.observer=void 0}sync(){if(!zr(this.host)){this.onSync?.();return}let e=this.getTarget();e&&Br(this.host,e)}},Ur=class extends Event{constructor(){super(`pk-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}};function Wr(){return{observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys.push(`customError`)),t}}}var R=class extends Ye{static{this.formAssociated=!0}static get validators(){return[Wr()]}static get observedAttributes(){let e=new Set(super.observedAttributes??[]);for(let t of this.validators)for(let n of t.observedAttributes??[])e.add(n);return[...e]}constructor(){super(),this.internals=this.attachInternals(),this.assumeInteractionOn=[`input`],this.validators=[],this.name=null,this.disabled=!1,this.required=!1,this.customError=null,this.valueHasChanged=!1,this.hasInteracted=!1,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ur))},this.handleInteraction=e=>{this.emittedEvents.includes(e.type)||this.emittedEvents.push(e.type),this.emittedEvents.length>=this.assumeInteractionOn.length&&(this.hasInteracted=!0,this.updateValidity())},this.addEventListener(`invalid`,this.emitInvalid)}connectedCallback(){super.connectedCallback();for(let e of this.assumeInteractionOn)this.addEventListener(e,this.handleInteraction);this.updateValidity()}disconnectedCallback(){this.hostAriaMirror?.disconnect(),this.hostAriaMirror=void 0;for(let e of this.assumeInteractionOn)this.removeEventListener(e,this.handleInteraction);this.removeEventListener(`invalid`,this.emitInvalid),super.disconnectedCallback()}updated(e){e.has(`customError`)&&this.setCustomValidity(this.customError??``),e.has(`disabled`)&&this.setState(`disabled`,!!this.disabled),(e.has(`value`)||e.has(`disabled`)||e.has(`required`)||e.has(`name`))&&this.syncFormValue(),this.updateValidity(),super.updated(e),this.syncHostAriaMirror()}firstUpdated(e){super.firstUpdated(e),this.connectHostAriaMirror()}getAriaMirrorTarget(){return this.input??null}syncStandaloneAria(){}connectHostAriaMirror(){this.hostAriaMirror?.disconnect(),this.hostAriaMirror=new Hr(this,()=>this.getAriaMirrorTarget(),()=>this.syncStandaloneAria()),this.hostAriaMirror.connect()}syncHostAriaMirror(){this.hostAriaMirror?.sync()}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.resetToDefaultValue(),this.syncFormValue(),this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.restoreFormState(e),this.syncFormValue(),this.updateValidity()}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}getForm(){return this.internals.form}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}resetValidity(){this.setCustomValidity(``),this.internals.setValidity({}),this.syncCustomStates()}setCustomValidity(e){if(!e){this.customError=null,this.internals.setValidity({}),this.syncCustomStates();return}this.customError=e;let t=this.validationTarget;t instanceof HTMLElement?this.internals.setValidity({customError:!0},e,t):this.internals.setValidity({customError:!0},e),this.syncCustomStates()}get validationTarget(){return this.input}get allValidators(){return[...this.constructor.validators??[],...this.validators??[]]}setFormValue(e,t){this.internals.setFormValue(e,t??e)}setValue(e,t){this.setFormValue(e,t??e)}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.internals.setValidity({}),this.syncCustomStates();return}let e=this.allValidators;if(!e.length)return;let t={customError:!!this.customError},n=``,r=this.validationTarget;for(let r of e){let{isValid:e,message:i,invalidKeys:a}=r.checkValidity(this);if(!e){n||=i;for(let e of a)t[e]=!0}}n||=this.validationMessage,r instanceof HTMLElement?this.internals.setValidity(t,n,r):this.internals.setValidity(t,n),this.syncCustomStates()}syncCustomStates(){let e=this.internals.validity.valid;this.setState(`required`,this.required),this.setState(`optional`,!this.required),this.setState(`invalid`,!e),this.setState(`valid`,e),this.setState(`user-invalid`,!e&&this.hasInteracted),this.setState(`user-valid`,e&&this.hasInteracted)}setState(e,t){let n=this.internals.states;n&&(t?n.add(e):n.delete(e))}syncFormValue(){}resetToDefaultValue(){}restoreFormState(e){}};D([k({reflect:!0})],R.prototype,`name`,void 0),D([k({type:Boolean,reflect:!0})],R.prototype,`disabled`,void 0),D([k({type:Boolean,reflect:!0})],R.prototype,`required`,void 0),D([k({attribute:`custom-error`,reflect:!0})],R.prototype,`customError`,void 0),D([k({attribute:!1,state:!0})],R.prototype,`valueHasChanged`,void 0),D([k({attribute:!1,state:!0})],R.prototype,`hasInteracted`,void 0);function Gr(e={}){let{validationElement:t,validationProperty:n}=e;!t&&typeof document<`u`&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage??`Please fill out this field.`,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};if(!e.required)return t;let i=e[n];return i==null||i===!1||i===``?(t.isValid=!1,t.message=typeof r.message==`function`?r.message(e):r.message??``,t.invalidKeys.push(`valueMissing`),t):t}};return r}var Kr=class{constructor(e,...t){this.host=e,this.boundSlots=new Set,this.lastHasContent=new Map,this.handleSlotChange=()=>{let e=!1;for(let t of this.slotNames){let n=this.test(t);this.lastHasContent.get(t)!==n&&(this.lastHasContent.set(t,n),e=!0)}e&&this.host.requestUpdate()},this.slotNames=t,e.addController(this)}hostConnected(){this.bindSlotListeners()}hostUpdated(){this.bindSlotListeners()}hostDisconnected(){for(let e of this.boundSlots)e.removeEventListener(`slotchange`,this.handleSlotChange);this.boundSlots.clear()}bindSlotListeners(){for(let e of this.slotNames){let t=this.findSlot(e);!t||this.boundSlots.has(t)||(this.boundSlots.add(t),t.addEventListener(`slotchange`,this.handleSlotChange),this.lastHasContent.has(e)||this.lastHasContent.set(e,this.test(e)))}}findSlot(e){return this.host.shadowRoot?e?this.host.shadowRoot.querySelector(`slot[name="${e}"]`):this.host.shadowRoot.querySelector(`slot:not([name])`):null}test(e,t=!1){if(t||this.hasLightDomSlotContent(e))return!0;let n=this.findSlot(e);return n?n.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE):!1}hasLightDomSlotContent(e){return[...this.host.children].some(t=>t.getAttribute(`slot`)===e)}};function qr(){return w`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path
                fill="currentColor"
                d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z"
            />
        </svg>
    `}function Jr(){return w`
        <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" viewBox="0 0 640 640">
            <path fill="currentColor" d="M96 352V288H544V352H96z" />
        </svg>
    `}var Yr=[d`
    @layer pk-component {
        .control {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
            width: var(--pk-checkbox-size);
            height: var(--pk-checkbox-size);
            border: 1px solid var(--pk-checkbox-border-color, #c0cbd9);
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-white);
            cursor: pointer;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        :host([disabled]) .control {
            cursor: not-allowed;
        }

        .input:focus-visible + .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: 0 0 0 1px var(--pk-color-sky-600), 0 0 4px 0 hsl(from var(--pk-color-sky-600) h s l / 0.7);
        }

        :host([invalid]) .control,
        .input[aria-invalid='true'] + .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .input:focus-visible + .control,
        .input[aria-invalid='true']:focus-visible + .control {
            border-color: var(--pk-color-rose-600);
            box-shadow: 0 0 0 1px var(--pk-color-rose-600), 0 0 4px 0 hsl(from var(--pk-color-rose-600) h s l / 0.7);
        }

        .indicator {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--pk-color-gray-900);
        }

        .icon-check,
        .icon-indeterminate {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
        }

        .icon-check svg {
            width: 14px;
            height: 14px;
            transform: translateY(1px) scale(1.2);
        }

        .icon-indeterminate svg {
            width: 12px;
            height: 12px;
        }

        :host([checked]) .icon-check,
        .input:checked + .control .icon-check {
            opacity: 1;
        }

        :host([indeterminate]) .icon-check,
        .input:indeterminate + .control .icon-check {
            opacity: 0;
        }

        :host([indeterminate]) .icon-indeterminate,
        .input:indeterminate + .control .icon-indeterminate {
            opacity: 1;
        }
    }
`,d`
    @layer pk-component {
        :host {
            display: inline-flex;
            vertical-align: middle;
            /* Hit target is the content-sized .root label (Craft checkbox-select), not the host. */
            cursor: default;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        :host([disabled]) {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .root {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: flex-start;
            gap: var(--pk-control-label-gap);
            /* Content-sized like Craft's <label> beside the checkbox — not full-row. */
            width: fit-content;
            max-width: 100%;
            margin: 0;
            min-height: 0;
            cursor: pointer;
            user-select: none;
            position: relative;
        }

        :host([disabled]) .root {
            cursor: not-allowed;
        }

        .root--with-hint {
            align-items: flex-start;
        }

        .input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
            opacity: 0;
            appearance: none;
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            min-width: 0;
        }

        .label {
            line-height: max(1rem, var(--pk-checkbox-size));
            /* Match form-control / Craft body labels (gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            cursor: pointer;
        }

        :host([disabled]) .label {
            cursor: not-allowed;
        }

        :host(.all-option) .label {
            font-weight: 700;
        }

        .hint {
            margin: 0;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-font-size-sm);
            line-height: var(--pk-line-height);
        }

        .hint:empty {
            display: none;
        }
    }
`],z=class extends R{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new Kr(this,`hint`),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.invalid=!1,this.checkboxValue=`on`,this.defaultChecked=!1,this.ariaLabel=null,this.hint=``,this.withHint=!1,this.hasDefaultSlotContent=!1}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=Yr}static get validators(){return[...super.validators,Gr({validationProperty:`checked`})]}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.checkboxValue:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked,this.indeterminate=!1}restoreFormState(e){e===`on`||e===this.checkboxValue?this.checked=!0:this.checked=!1}updated(e){if(!this.input){super.updated(e);return}(e.has(`indeterminate`)||e.has(`checked`))&&(this.input.indeterminate=this.indeterminate,this.input.checked=this.checked),super.updated(e)}defaultSlotChanged(e){let t=e.target;this.hasDefaultSlotContent=t.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE)}handleChange(e){let t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=this.hasDefaultSlotContent,t=!!this.hint||this.hasSlotController.test(`hint`,this.withHint);return w`
            <label
                part="base"
                class=${M({root:!0,"root--with-hint":t})}
            >
                <input
                    part="input"
                    class="input"
                    type="checkbox"
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    name=${this.name??E}
                    value=${this.checkboxValue}
                    aria-labelledby=${e?`label`:E}
                    aria-describedby=${t?`hint`:E}
                    aria-label=${e?E:this.ariaLabel??E}
                    aria-invalid=${this.invalid?`true`:E}
                    @change=${this.handleChange}
                />
                <span part="control" class="control">
                    <span part="checked-icon" class="icon-check">${qr()}</span>
                    <span part="indeterminate-icon" class="icon-indeterminate">${Jr()}</span>
                </span>
                ${e||t?w`
                        <span class="text">
                            ${e?w`
                                    <span part="label" class="label" id="label">
                                        <slot @slotchange=${this.defaultSlotChanged}></slot>
                                    </span>
                                `:w`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
                            ${t?w`
                                    <span part="hint" class="hint" id="hint">
                                        <slot name="hint">${this.hint}</slot>
                                    </span>
                                `:E}
                        </span>
                    `:w`<slot @slotchange=${this.defaultSlotChanged} hidden></slot>`}
            </label>
        `}};D([k({type:Boolean,reflect:!0})],z.prototype,`checked`,void 0),D([k({type:Boolean,reflect:!0})],z.prototype,`indeterminate`,void 0),D([k({type:Boolean,reflect:!0})],z.prototype,`disabled`,void 0),D([k({type:Boolean,reflect:!0})],z.prototype,`invalid`,void 0),D([k()],z.prototype,`checkboxValue`,void 0),D([k({attribute:`default-checked`,type:Boolean})],z.prototype,`defaultChecked`,void 0),D([k({attribute:`aria-label`})],z.prototype,`ariaLabel`,void 0),D([k()],z.prototype,`hint`,void 0),D([k({type:Boolean,attribute:`with-hint`})],z.prototype,`withHint`,void 0),D([j(`.input`)],z.prototype,`input`,void 0),D([A()],z.prototype,`hasDefaultSlotContent`,void 0),z=D([O(`pk-checkbox`)],z);function Xr(){return{checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&typeof t.checkValidity==`function`&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&typeof t.validationMessage==`string`&&(n.message=t.validationMessage),!(`validity`in t)||!t.validity)return n.invalidKeys.push(`customError`),n;for(let e of Object.keys(t.validity)){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}}function*Zr(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Zr(e.shadowRoot.activeElement)))}var Qr=0;function $r(e=`pk`){return Qr+=1,`${e}-${Qr}`}[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`,`),[`a[href]`,`button`,`input`,`select`,`textarea`,`[tabindex]:not([tabindex="-1"])`].join(`,`);var ei=class{constructor(e=`polite`){this.element=document.createElement(`div`),this.element.setAttribute(`aria-live`,e),this.element.setAttribute(`aria-atomic`,`true`),this.element.className=`pk-visually-hidden`,this.element.style.cssText=`position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;`,document.body.append(this.element)}announce(e){this.element.textContent=``,requestAnimationFrame(()=>{this.element.textContent=e})}destroy(){this.element.remove()}},ti=class extends Event{constructor(){super(`pk-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};function ni(e){let t=e.split(`-`)[0];return t===`inline-start`?`left`:t===`inline-end`?`right`:t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`}function ri(e,t,n,r,i){let a=ni(e),o=t.x+t.width/2-n.x,s=t.y+t.height/2-n.y;return Math.abs(i?.y??0)>r&&(a===`top`||a===`bottom`)?`${o}px ${t.y+t.height/2-n.y}px`:{top:`${o}px calc(100% + ${r}px)`,bottom:`${o}px ${-r}px`,left:`calc(100% + ${r}px) ${s}px`,right:`${-r}px ${s}px`}[a]}function ii(e,t){if(!t){e.removeAttribute(`data-side`);return}e.setAttribute(`data-side`,ni(t))}function ai(e,t,n=100,r){let i=()=>e.getAttribute(`data-current-placement`)??t;return!r?.requireEvent&&e.hasAttribute(`data-current-placement`)?Promise.resolve(i()):new Promise(t=>{let a=!1,o=()=>{a||(a=!0,t(i()))};e.addEventListener(`pk-reposition`,o,{once:!0}),r?.requireEvent||requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.hasAttribute(`data-current-placement`)&&o()})}),window.setTimeout(o,n)})}var oi=Math.min,si=Math.max,ci=Math.round,li=Math.floor,ui=e=>({x:e,y:e}),di={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function fi(e,t,n){return si(e,oi(t,n))}function pi(e,t){return typeof e==`function`?e(t):e}function mi(e){return e.split(`-`)[0]}function hi(e){return e.split(`-`)[1]}function gi(e){return e===`x`?`y`:`x`}function _i(e){return e===`y`?`height`:`width`}function vi(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function yi(e){return gi(vi(e))}function bi(e,t,n){n===void 0&&(n=!1);let r=hi(e),i=yi(e),a=_i(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=ki(o)),[o,ki(o)]}function xi(e){let t=ki(e);return[Si(e),t,Si(t)]}function Si(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Ci=[`left`,`right`],wi=[`right`,`left`],Ti=[`top`,`bottom`],Ei=[`bottom`,`top`];function Di(e,t,n){switch(e){case`top`:case`bottom`:return n?t?wi:Ci:t?Ci:wi;case`left`:case`right`:return t?Ti:Ei;default:return[]}}function Oi(e,t,n,r){let i=hi(e),a=Di(mi(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Si)))),a}function ki(e){let t=mi(e);return di[t]+e.slice(t.length)}function Ai(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function ji(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Ai(e)}function Mi(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Ni(e,t,n){let{reference:r,floating:i}=e,a=vi(t),o=yi(t),s=_i(o),c=mi(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=hi(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Pi(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=pi(t,e),p=ji(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Mi(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),ee=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},v=Mi(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-v.top+p.top)/ee.y,bottom:(v.bottom-h.bottom+p.bottom)/ee.y,left:(h.left-v.left+p.left)/ee.x,right:(v.right-h.right+p.right)/ee.x}}var Fi=50,Ii=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Pi},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Ni(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:ee,y:v,data:y,reset:b}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=ee??u,d=v??d,m[g]={...m[g],...y},b&&p<Fi&&(p++,typeof b==`object`&&(b.placement&&(f=b.placement),b.rects&&(l=b.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):b.rects),{x:u,y:d}=Ni(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Li=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=pi(e,t)||{};if(l==null)return{};let d=ji(u),f={x:n,y:r},p=yi(i),m=_i(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,ee=g?`bottom`:`right`,v=g?`clientHeight`:`clientWidth`,y=a.reference[m]+a.reference[p]-f[p]-a.floating[m],b=f[p]-a.reference[p],te=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),x=te?te[v]:0;(!x||!await(o.isElement==null?void 0:o.isElement(te)))&&(x=s.floating[v]||a.floating[m]);let S=y/2-b/2,C=x/2-h[m]/2-1,ne=oi(d[_],C),re=oi(d[ee],C),ie=x-h[m]-re,ae=x/2-h[m]/2+S,oe=fi(ne,ae,ie),se=!c.arrow&&hi(i)!=null&&ae!==oe&&a.reference[m]/2-(ae<ne?ne:re)-h[m]/2<0,ce=se?ae<ne?ae-ne:ae-ie:0;return{[p]:f[p]+ce,data:{[p]:oe,centerOffset:ae-oe-ce,...se&&{alignmentOffset:ce}},reset:se}}}),Ri=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=pi(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=mi(r),_=vi(o),ee=mi(o)===o,v=await(s.isRTL==null?void 0:s.isRTL(c.floating)),y=d||(ee||!m?[ki(o)]:xi(o)),b=p!==`none`;!d&&b&&y.push(...Oi(o,m,p,v));let te=[o,...y],x=await s.detectOverflow(t,h),S=[],C=i.flip?.overflows||[];if(l&&S.push(x[g]),u){let e=bi(r,a,v);S.push(x[e[0]],x[e[1]])}if(C=[...C,{placement:r,overflows:S}],!S.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(!(u===`alignment`&&_!==vi(t))||C.every(e=>vi(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(b){let t=vi(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},zi=new Set([`left`,`top`]);async function Bi(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=mi(n),s=hi(n),c=vi(n)===`y`,l=zi.has(o)?-1:1,u=a&&c?-1:1,d=pi(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Vi=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Bi(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Hi=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=pi(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=vi(i),p=gi(f),m=u[p],h=u[f],g=(e,t)=>fi(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Ui=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=pi(e,t),c=await i.detectOverflow(t,s),l=mi(n),u=hi(n),d=vi(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,ee=oi(p-c[m],g),v=oi(f-c[h],_),y=t.middlewareData.shift,b=!y,te=ee,x=v;y!=null&&y.enabled.x&&(x=_),y!=null&&y.enabled.y&&(te=g),b&&!u&&(d?x=f-2*si(c.left,c.right):te=p-2*si(c.top,c.bottom)),await o({...t,availableWidth:x,availableHeight:te});let S=await i.getDimensions(a.floating);return f!==S.width||p!==S.height?{reset:{rects:!0}}:{}}}};function Wi(){return typeof window<`u`}function Gi(e){return qi(e)?(e.nodeName||``).toLowerCase():`#document`}function B(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ki(e){return((qi(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function qi(e){return Wi()?e instanceof Node||e instanceof B(e).Node:!1}function Ji(e){return Wi()?e instanceof Element||e instanceof B(e).Element:!1}function Yi(e){return Wi()?e instanceof HTMLElement||e instanceof B(e).HTMLElement:!1}function Xi(e){return!Wi()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof B(e).ShadowRoot}function Zi(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=ca(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Qi(e){return/^(table|td|th)$/.test(Gi(e))}function $i(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var ea=/transform|translate|scale|rotate|perspective|filter/,ta=/paint|layout|strict|content/,na=e=>!!e&&e!==`none`,ra;function ia(e){let t=Ji(e)?ca(e):e;return na(t.transform)||na(t.translate)||na(t.scale)||na(t.rotate)||na(t.perspective)||!oa()&&(na(t.backdropFilter)||na(t.filter))||ea.test(t.willChange||``)||ta.test(t.contain||``)}function aa(e){let t=ua(e);for(;Yi(t)&&!sa(t);){if(ia(t))return t;if($i(t))return null;t=ua(t)}return null}function oa(){return ra??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),ra}function sa(e){return/^(html|body|#document)$/.test(Gi(e))}function ca(e){return B(e).getComputedStyle(e)}function la(e){return Ji(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ua(e){if(Gi(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Xi(e)&&e.host||Ki(e);return Xi(t)?t.host:t}function da(e){let t=ua(e);return sa(t)?(e.ownerDocument||e).body:Yi(t)&&Zi(t)?t:da(t)}function fa(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=da(e),i=r===e.ownerDocument?.body,a=B(r);if(i){let e=pa(a);return t.concat(a,a.visualViewport||[],Zi(r)?r:[],e&&n?fa(e):[])}else return t.concat(r,fa(r,[],n))}function pa(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ma(e){let t=ca(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Yi(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=ci(n)!==a||ci(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ha(e){return Ji(e)?e:e.contextElement}function ga(e){let t=ha(e);if(!Yi(t))return ui(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ma(t),o=(a?ci(n.width):n.width)/r,s=(a?ci(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var _a=ui(0);function va(e){let t=B(e);return!oa()||!t.visualViewport?_a:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ya(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===B(e)}function ba(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ha(e),o=ui(1);t&&(r?Ji(r)&&(o=ga(r)):o=ga(e));let s=ya(a,n,r)?va(a):ui(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=B(a),t=Ji(r)?B(r):r,n=e,i=pa(n);for(;i&&t!==n;){let e=ga(i),t=i.getBoundingClientRect(),r=ca(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=B(i),i=pa(n)}}return Mi({width:u,height:d,x:c,y:l})}function xa(e,t){let n=la(e).scrollLeft;return t?t.left+n:ba(Ki(e)).left+n}function Sa(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-xa(e,n),y:n.top+t.scrollTop}}function Ca(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Ki(r),s=t?$i(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=ui(1),u=ui(0),d=Yi(r);if((d||!a)&&((Gi(r)!==`body`||Zi(o))&&(c=la(r)),d)){let e=ba(r);l=ga(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Sa(o,c):ui(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function wa(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Ta(e){let t=la(e),n=e.ownerDocument.body,r=si(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=si(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+xa(e),o=-t.scrollTop;return ca(n).direction===`rtl`&&(a+=si(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var Ea=25;function Da(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=B(e),a=Ki(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!oa()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(xa(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=Ea&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Oa(e,t){let n=ba(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=ga(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ka(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Da(e,n,t);else if(t===`document`)r=Ta(Ki(e));else if(Ji(t))r=Oa(t,n);else{let n=va(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Mi(r)}function Aa(e,t){let n=t.get(e);if(n)return n;let r=fa(e,[],!1).filter(e=>Ji(e)&&Gi(e)!==`body`),i=null,a=ca(e).position===`fixed`,o=a?ua(e):e;for(;Ji(o)&&!sa(o);){let e=ca(o),t=ia(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=ua(o)}return t.set(e,r),r}function ja(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?$i(t)?[]:Aa(t,this._c):[].concat(n),r],o=ka(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ka(t,a[e],i);s=si(n.top,s),c=oi(n.right,c),l=oi(n.bottom,l),u=si(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Ma(e){let{width:t,height:n}=ma(e);return{width:t,height:n}}function Na(e,t,n){let r=Yi(t),i=Ki(t),a=n===`fixed`,o=ba(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=ui(0);if((r||!a)&&((Gi(t)!==`body`||Zi(i))&&(s=la(t)),r)){let e=ba(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=xa(i));let l=i&&!r&&!a?Sa(i,s):ui(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function Pa(e){return ca(e).position===`static`}function Fa(e,t){if(!Yi(e)||ca(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Ki(e)===n&&(n=n.ownerDocument.body),n}function Ia(e,t){let n=B(e);if($i(e))return n;if(!Yi(e)){let t=ua(e);for(;t&&!sa(t);){if(Ji(t)&&!Pa(t))return t;t=ua(t)}return n}let r=Fa(e,t);for(;r&&Qi(r)&&Pa(r);)r=Fa(r,t);return r&&sa(r)&&Pa(r)&&!ia(r)?n:r||aa(e)||n}var La=async function(e){let t=this.getOffsetParent||Ia,n=this.getDimensions,r=await n(e.floating);return{reference:Na(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ra(e){return ca(e).direction===`rtl`}var za={convertOffsetParentRelativeRectToViewportRelativeRect:Ca,getDocumentElement:Ki,getClippingRect:ja,getOffsetParent:Ia,getElementRects:La,getClientRects:wa,getDimensions:Ma,getScale:ga,isElement:Ji,isRTL:Ra};function Ba(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Va(e,t,n){let r=null,i,a=Ki(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=li(d),h=li(a.clientWidth-(u+f)),g=li(a.clientHeight-(d+p)),_=li(u),ee={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:si(0,oi(1,c))||1},v=!0;function y(t){let n=t[0].intersectionRatio;if(!Ba(l,e.getBoundingClientRect()))return s();if(n!==c){if(!v)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}v=!1}try{r=new IntersectionObserver(y,{...ee,root:a.ownerDocument})}catch{r=new IntersectionObserver(y,ee)}r.observe(e)}let c=B(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function Ha(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ha(e),u=i||a?[...l?fa(l):[],...t?fa(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?Va(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?ba(e):null;c&&g();function g(){let t=ba(e);h&&!Ba(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Ua=Vi,Wa=Hi,Ga=Ri,Ka=Ui,qa=Li,Ja=(e,t,n)=>{let r=new Map,i=n??{},a={...za,...i.platform,_c:r};return Ii(e,t,{...i,platform:a})};function Ya(e){return Za(e)}function Xa(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Za(e){for(let t=e;t;t=Xa(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Xa(e);t;t=Xa(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||ia(e)||t.tagName===`BODY`))return t}return null}function Qa(e,t){if(!t)return null;let n=e.getRootNode();if(n instanceof Document||n instanceof ShadowRoot){let e=n.getElementById(t);if(e)return e}return e.ownerDocument.getElementById(t)}var $a=class extends Event{constructor(){super(`pk-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},eo=d`
    @layer pk-component {
        :host {
            display: contents;
        }

        .popup {
            position: absolute;
            isolation: isolate;
            width: max-content;
            z-index: var(--pk-popup-z-index, 1000);
            /* Never transition coordinates — flip would animate the jump. */
            transition: none;

            /* Reset UA styles for [popover] — see  pk-popup. */
            inset: unset;
            padding: unset;
            margin: unset;
            height: unset;
            color: unset;
            background: unset;
            border: unset;
            overflow: unset;
        }

        .popup-fixed {
            position: fixed;
        }

        .popup:not(.active) {
            display: none;
        }

        /* Prefer visibility over opacity so enter animations are not fighting a
         * 0→1 fade. Matches base-ui isPositioned / hide-until-placed.
         */
        .popup.active:not(.positioned) {
            visibility: hidden;
            pointer-events: none;
        }

        .popup.show {
            animation: pk-popup-surface-in 100ms ease-out;
        }

        .popup.hide {
            animation: pk-popup-surface-out 100ms ease-in forwards;
        }

        @keyframes pk-popup-surface-in {
            from {
                opacity: 0;
                transform: scale(0.95);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes pk-popup-surface-out {
            from {
                opacity: 1;
                transform: scale(1);
            }

            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }

        .arrow {
            position: absolute;
            width: var(--pk-popup-arrow-size, 6px);
            height: var(--pk-popup-arrow-size, 6px);
            rotate: 45deg;
            background: var(--pk-popup-arrow-color, var(--pk-color-white));
            z-index: 1;
        }

        .hover-bridge {
            position: fixed;
            z-index: calc(var(--pk-popup-z-index, 1000) - 1);
            inset: 0;
            clip-path: polygon(
                var(--pk-hover-bridge-top-left-x, 0) var(--pk-hover-bridge-top-left-y, 0),
                var(--pk-hover-bridge-top-right-x, 0) var(--pk-hover-bridge-top-right-y, 0),
                var(--pk-hover-bridge-bottom-right-x, 0) var(--pk-hover-bridge-bottom-right-y, 0),
                var(--pk-hover-bridge-bottom-left-x, 0) var(--pk-hover-bridge-bottom-left-y, 0)
            );
            pointer-events: auto;
        }

        .hover-bridge:not(.hover-bridge-visible) {
            display: none;
        }
    }
`;function to(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e}function no(t){return t||(e?`absolute`:`fixed`)}function ro(t,n){if(!(!e||to(t)||n!==`scroll`))return fa(t).filter(e=>e instanceof Element)}var V=class extends Ye{constructor(...e){super(...e),this.anchor=``,this.active=!1,this.boundary=`viewport`,this.placement=`bottom-start`,this.distance=4,this.skidding=0,this.flip=!0,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=8,this.shift=!0,this.shiftPadding=8,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.anchorTracking=!0,this.hoverBridge=!1,this.anchorElement=null,this.settlingInitialPosition=!1,this.settleGeneration=0}static{this.styles=eo}disconnectedCallback(){this.stop(),super.disconnectedCallback()}updated(e){super.updated(e),e.has(`active`)&&(this.active?(this.resolveAnchor(),this.start()):this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&!e.has(`active`)&&this.reposition()}reposition(){this.settlingInitialPosition||this.repositionAsync()}async repositionAsync(t=!0){let n=this.popupElement,r=this.arrow?this.arrowElement:null;if(!this.active||!this.anchorElement||!n)return!1;let i=ro(this.anchorElement,this.boundary),a=[Ua({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?a.push(Ka({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,r=this.sync===`height`||this.sync===`both`;n.style.width=t?`${e.reference.width}px`:``,n.style.height=r?`${e.reference.height}px`:``}})):(n.style.width=``,n.style.height=``),this.flip&&a.push(Ga({boundary:i,fallbackPlacements:this.flipFallbackPlacements?this.flipFallbackPlacements.split(` `).map(e=>e.trim()).filter(Boolean):void 0,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&a.push(Wa({boundary:i,padding:this.shiftPadding})),this.arrow&&r&&a.push(qa({element:r,padding:this.arrowPadding}));let o=no(this.positionMethod),s=o===`fixed`;n.classList.toggle(`popup-fixed`,s);let c=e?e=>za.getOffsetParent(e,Ya):za.getOffsetParent,{x:l,y:u,middlewareData:d,placement:f}=await Ja(this.anchorElement,n,{placement:this.placement,middleware:a,strategy:o,platform:{...za,getOffsetParent:c}});if(!this.active||!n.isConnected)return!1;let p={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[f.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,f),Object.assign(n.style,{left:`${l}px`,top:`${u}px`,...s?{position:`fixed`}:{position:``}}),this.anchorElement){let e=this.anchorElement.getBoundingClientRect(),t=n.getBoundingClientRect();n.style.setProperty(`--pk-anchor-width`,`${e.width}px`),n.style.setProperty(`--pk-anchor-height`,`${e.height}px`);let r=ri(f,e,t,this.distance,d.shift);n.style.setProperty(`--pk-transform-origin`,r)}if(this.arrow&&r){let e=d.arrow?.x,t=d.arrow?.y,n=``,i=``,a=``,o=``;if(this.arrowPlacement===`start`){let r=typeof e==`number`?`${this.arrowPadding}px`:``;n=typeof t==`number`?`${this.arrowPadding}px`:``,o=r}else this.arrowPlacement===`end`?(i=typeof e==`number`?`${this.arrowPadding}px`:``,a=typeof t==`number`?`${this.arrowPadding}px`:``):this.arrowPlacement===`center`?(o=typeof e==`number`?`50%`:``,n=typeof t==`number`?`50%`:``):(o=typeof e==`number`?`${e}px`:``,n=typeof t==`number`?`${t}px`:``);Object.assign(r.style,{top:n,right:i,bottom:a,left:o,transform:``,[p]:`calc(-1 * var(--pk-popup-arrow-size, 6px) / 2)`})}return requestAnimationFrame(()=>this.updateHoverBridge()),t&&this.dispatchEvent(new $a),!0}frames(e){return new Promise(t=>{let n=e=>{if(e<=0){t();return}requestAnimationFrame(()=>n(e-1))};n(e)})}async settleInitialPosition(){let e=++this.settleGeneration,t=this.popupElement;if(!t){this.settlingInitialPosition=!1;return}await this.frames(2),!(!this.active||e!==this.settleGeneration)&&(await this.repositionAsync(!1),t.offsetHeight,await this.frames(1),!(!this.active||e!==this.settleGeneration)&&(await this.repositionAsync(!1),!(!this.active||e!==this.settleGeneration)&&(t.classList.add(`positioned`),this.settlingInitialPosition=!1,requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new $a))))}resolveAnchor(){if(typeof this.anchor==`string`&&this.anchor){this.anchorElement=Qa(this,this.anchor);return}if(this.anchor instanceof Element||to(this.anchor)){this.anchorElement=this.anchor;return}let e=this.querySelector(`[slot="anchor"]`);e instanceof HTMLSlotElement&&(e=e.assignedElements({flatten:!0})[0]??null),this.anchorElement=e}async handleAnchorChange(){await this.stop(),this.resolveAnchor(),this.anchorElement&&this.active&&this.start()}usesPopoverTopLayer(){return e&&this.positionMethod!==`fixed`}stop(){return new Promise(e=>{let t=this.popupElement;this.settleGeneration+=1,this.settlingInitialPosition=!1,t?.classList.remove(`positioned`),this.usesPopoverTopLayer()&&t?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,t?.style.removeProperty(`--pk-transform-origin`),requestAnimationFrame(()=>e())):e(),this.removeAttribute(`data-current-placement`)})}releasePositioning(){this.cleanup&&=(this.cleanup(),void 0)}async awaitHidden(){await this.stop()}start(){!this.anchorElement||!this.active||!this.isConnected||!this.popupElement||(this.popupElement.classList.remove(`positioned`),this.settlingInitialPosition=!0,this.usesPopoverTopLayer()&&this.popupElement.showPopover?.(),this.anchorTracking&&(this.cleanup=Ha(this.anchorElement,this.popupElement,()=>{this.settlingInitialPosition||this.reposition()})),this.settleInitialPosition())}getContentElement(){let e=((this.shadowRoot?.querySelector(`slot:not([name])`))?.assignedElements({flatten:!0})??[]).find(e=>e instanceof HTMLElement);if(e)return e;for(let e of this.childNodes)if(e instanceof HTMLElement&&e.getAttribute(`slot`)!==`anchor`)return e;return null}updateHoverBridge(){let e=this.popupElement;if(!this.hoverBridge||!this.anchorElement||!e)return;let t=this.anchorElement.getBoundingClientRect(),n=e.getBoundingClientRect(),r=this.placement.includes(`top`)||this.placement.includes(`bottom`),i=0,a=0,o=0,s=0,c=0,l=0,u=0,d=0;r?t.top<n.top?(i=t.left,a=t.bottom,o=t.right,s=t.bottom,c=n.left,l=n.top,u=n.right,d=n.top):(i=n.left,a=n.bottom,o=n.right,s=n.bottom,c=t.left,l=t.top,u=t.right,d=t.top):t.left<n.left?(i=t.right,a=t.top,o=n.left,s=n.top,c=t.right,l=t.bottom,u=n.left,d=n.bottom):(i=n.right,a=n.top,o=t.left,s=t.top,c=n.right,l=n.bottom,u=t.left,d=t.bottom),this.style.setProperty(`--pk-hover-bridge-top-left-x`,`${i}px`),this.style.setProperty(`--pk-hover-bridge-top-left-y`,`${a}px`),this.style.setProperty(`--pk-hover-bridge-top-right-x`,`${o}px`),this.style.setProperty(`--pk-hover-bridge-top-right-y`,`${s}px`),this.style.setProperty(`--pk-hover-bridge-bottom-left-x`,`${c}px`),this.style.setProperty(`--pk-hover-bridge-bottom-left-y`,`${l}px`),this.style.setProperty(`--pk-hover-bridge-bottom-right-x`,`${u}px`),this.style.setProperty(`--pk-hover-bridge-bottom-right-y`,`${d}px`)}render(){let t=!e||this.positionMethod===`fixed`,n=this.usesPopoverTopLayer();return w`
            <slot name="anchor" @slotchange=${()=>{this.handleAnchorChange()}}></slot>
            ${this.hoverBridge?w`
                <div
                    part="hover-bridge"
                    class=${M({"hover-bridge":!0,"hover-bridge-visible":this.active})}
                    aria-hidden="true"
                ></div>
            `:E}
            <div
                popover=${n?`manual`:E}
                part="popup"
                class=${M({popup:!0,active:this.active,"popup-fixed":t})}
            >
                ${this.arrow?w`<div part="arrow" class="arrow"></div>`:E}
                <slot></slot>
            </div>
        `}};D([k()],V.prototype,`anchor`,void 0),D([k({type:Boolean,reflect:!0})],V.prototype,`active`,void 0),D([k({attribute:`position-method`})],V.prototype,`positionMethod`,void 0),D([k({reflect:!0})],V.prototype,`boundary`,void 0),D([k({reflect:!0})],V.prototype,`placement`,void 0),D([k({type:Number})],V.prototype,`distance`,void 0),D([k({type:Number})],V.prototype,`skidding`,void 0),D([k({type:Boolean})],V.prototype,`flip`,void 0),D([k({attribute:`flip-fallback-placements`})],V.prototype,`flipFallbackPlacements`,void 0),D([k({attribute:`flip-fallback-strategy`})],V.prototype,`flipFallbackStrategy`,void 0),D([k({attribute:`flip-padding`,type:Number})],V.prototype,`flipPadding`,void 0),D([k({type:Boolean})],V.prototype,`shift`,void 0),D([k({attribute:`shift-padding`,type:Number})],V.prototype,`shiftPadding`,void 0),D([k({type:Boolean})],V.prototype,`arrow`,void 0),D([k({attribute:`arrow-placement`})],V.prototype,`arrowPlacement`,void 0),D([k({attribute:`arrow-padding`,type:Number})],V.prototype,`arrowPadding`,void 0),D([k()],V.prototype,`sync`,void 0),D([k({attribute:`anchor-tracking`,type:Boolean})],V.prototype,`anchorTracking`,void 0),D([k({attribute:`hover-bridge`,type:Boolean})],V.prototype,`hoverBridge`,void 0),D([j(`.popup`)],V.prototype,`popupElement`,void 0),D([j(`.arrow`)],V.prototype,`arrowElement`,void 0),V=D([O(`pk-popup`)],V);var io=new Set([`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`,`Home`,`End`,`Enter`,` `,`Escape`]);function ao(e){return e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function oo(e){return e.filter(e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&e.getAttribute(`aria-disabled`)!==`true`&&e.getAttribute(`aria-hidden`)!==`true`)}function so(e,t,n){if(n){n(t);return}let r=e[t];if(r instanceof HTMLElement&&`focusControl`in r&&typeof r.focusControl==`function`){r.focusControl();return}r?.focus()}function co(e){if(!e)return;let t=e.shadowRoot?.querySelector(`.option`);if(t instanceof HTMLButtonElement){t.click();return}e.click()}function lo(e,t){let n=oo(t.items),r=t.loop===!0;if(n.length===0)return t.currentIndex;let i=Math.max(0,t.currentIndex),a=n[i]??n[0];switch(i=n.indexOf(a),i<0&&(i=0),e.key){case`ArrowDown`:case`ArrowRight`:return e.preventDefault(),i=r&&i>=n.length-1?0:Math.min(i+1,n.length-1),so(n,i,t.focusItem),t.onSelect(i),i;case`ArrowUp`:case`ArrowLeft`:return e.preventDefault(),i=r&&i<=0?n.length-1:Math.max(i-1,0),so(n,i,t.focusItem),t.onSelect(i),i;case`Home`:return e.preventDefault(),i=0,so(n,i,t.focusItem),t.onSelect(i),i;case`End`:return e.preventDefault(),i=n.length-1,so(n,i,t.focusItem),t.onSelect(i),i;case`Enter`:case` `:return t.multiselect||(e.preventDefault(),co(n[i])),i;case`Escape`:return e.preventDefault(),t.onClose?.(),i;default:return i}}function uo(e,t){let n=``,r=0,i=()=>{n=``,window.clearTimeout(r)};return{handleKey:a=>{if(a.key.length!==1||a.ctrlKey||a.metaKey||a.altKey)return;n+=a.key.toLowerCase(),window.clearTimeout(r),r=window.setTimeout(i,750);let o=oo(e);for(let e=0;e<o.length;e+=1)if((o[e]?.textContent??``).trim().toLowerCase().startsWith(n)){t(e),a.preventDefault();return}},reset:i}}var fo=e=>e.hidden||e.hasAttribute(`data-pk-filter-empty`),po=e=>{let t=[...e.querySelectorAll(`:scope > pk-option, :scope > pk-option-group, :scope > pk-separator`)],n=(e,n)=>{for(let r=e+n;n<0?r>=0:r<t.length;r+=n){let e=t[r];if(!(!e||e.localName===`pk-separator`))return e}return null};for(let e=0;e<t.length;e+=1){let r=t[e];if(!r||r.localName!==`pk-separator`)continue;let i=n(e,-1),a=n(e,1);r.hidden=!i||!a||fo(i)||fo(a)}};function mo(e){if(e.panel instanceof Element){let t=e.panel.closest(`pk-popup`);if(t)return t;let n=e.panel.getRootNode();if(n instanceof ShadowRoot&&n.host.localName===`pk-popup`)return n.host}return e.host instanceof HTMLElement?e.host.shadowRoot?.querySelector(`pk-popup`)??e.host.querySelector(`:scope > pk-popup`)??e.host.querySelector(`pk-popup`):null}function ho(e,t={}){let n=e.composedPath();if(t.host&&n.includes(t.host)||t.anchor&&n.includes(t.anchor)||t.panel&&n.includes(t.panel))return!0;let r=mo(t);return r&&n.includes(r)?!0:n.some(e=>e instanceof HTMLElement?r&&e.classList.contains(`popup`)&&(e===r||r.contains(e))?!0:t.extraMatches?.(e)??!1:!1)}function go(e,t={}){return ho(e,t)}var _o=d`
    @layer pk-component {
        .pk-popup-content {
            transform-origin: var(--pk-transform-origin, top);
        }

        .pk-popup-content[data-open] {
            animation: pk-popup-content-in 100ms ease-out;
        }

        .pk-popup-content[data-open][data-side='bottom'] {
            animation-name: pk-popup-content-in-bottom;
        }

        .pk-popup-content[data-open][data-side='top'] {
            animation-name: pk-popup-content-in-top;
        }

        .pk-popup-content[data-open][data-side='left'] {
            animation-name: pk-popup-content-in-left;
        }

        .pk-popup-content[data-open][data-side='right'] {
            animation-name: pk-popup-content-in-right;
        }

        /* Exit: fade + zoom only — matches tw-animate animate-out / tooltip motion. */
        .pk-popup-content.closing {
            animation: pk-popup-content-out 100ms ease-in forwards;
        }
    }

    @keyframes pk-popup-content-in {
        from {
            opacity: 0;
            transform: scale(0.95);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes pk-popup-content-out {
        from {
            opacity: 1;
            transform: scale(1);
        }

        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }

    @keyframes pk-popup-content-in-bottom {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(-0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @keyframes pk-popup-content-in-top {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @keyframes pk-popup-content-in-left {
        from {
            opacity: 0;
            transform: scale(0.95) translateX(0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateX(0);
        }
    }

    @keyframes pk-popup-content-in-right {
        from {
            opacity: 0;
            transform: scale(0.95) translateX(-0.5rem);
        }

        to {
            opacity: 1;
            transform: scale(1) translateX(0);
        }
    }
`,vo=class extends Event{constructor(e){super(`pk-create`,{bubbles:!0,cancelable:!0,composed:!0}),this.inputValue=e}},yo=[_o,d`
    ${rt}
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            width: fit-content;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-btn-height-default);
            --pk-combobox-padding-block: 6px;
            --pk-combobox-padding-inline: 10px;
            --pk-combobox-font-size: var(--pk-font-size-base);
            --pk-combobox-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-combobox-decoration-size: 0.875rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 2rem;
            --pk-select-item-font-size: 14px;
            --pk-select-item-line-height: 1.4;
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 ComboboxLabel default: text-xs → 12px (was 11px). */
            --pk-select-group-label-font-size: 12px;
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        .control {
            display: inline-flex;
            align-items: center;
            --pk-combobox-control-gap: 0.5rem;
            gap: var(--pk-combobox-control-gap);
            /* Fill the host — consumers set min-width/width on :host; fit-content here
               left a dead hit strip beside the painted field (same class of bug as dropdown). */
            width: 100%;
            max-width: 100%;
            min-width: 0;
            min-height: var(--pk-combobox-min-height);
            margin: 0;
            padding: var(--pk-combobox-padding-block) var(--pk-combobox-padding-inline);
            border: 1px solid transparent;
            border-radius: var(--pk-radius-lg);
            --pk-combobox-fill: var(--pk-color-slate-250);
            --pk-combobox-fill-hover: var(--pk-color-slate-300);
            background: var(--pk-combobox-fill);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-combobox-font-size);
            line-height: var(--pk-input-control-line-height, 1.25rem);
            white-space: nowrap;
            cursor: text;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        .control[data-popup-open] {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host(:not([disabled])) .control:hover:not(.is-disabled) {
            background: var(--pk-combobox-fill-hover);
        }

        :host(:not([disabled])) .control[data-popup-open]:hover:not(.is-disabled),
        :host(:not([disabled])) .control[data-popup-open]:focus-within:not(.is-disabled) {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host(:not([invalid]):not(:state(user-invalid))) .control:focus-within,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .control-start,
        .control-end {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
            line-height: 0;
            color: var(--pk-color-gray-600);
        }

        slot[name='start']::slotted(svg),
        slot[name='end']::slotted(svg) {
            width: var(--pk-combobox-decoration-size);
            height: var(--pk-combobox-decoration-size);
        }

        .combobox-input {
            flex: 1 1 auto;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            line-height: var(--pk-input-control-line-height, 1.25rem);
            outline: none;
        }

        .combobox-input::placeholder {
            color: currentColor;
        }

        :host([data-has-value]) .combobox-input::placeholder,
        .control[data-popup-open] .combobox-input::placeholder,
        .control:focus-within .combobox-input::placeholder {
            color: var(--pk-color-gray-400);
        }

        /* Expand/clear: the button box IS the hit target. Negative margins cancel the
           control padding / half-gap in layout, while matching extra width/height keeps
           the painted (and clickable) box flush to the field edge — so flex centering
           places the glyph in the middle of the real hit area. */
        .icon-button,
        .clear-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            align-self: stretch;
            box-sizing: border-box;
            width: calc(var(--pk-combobox-decoration-size) + var(--pk-combobox-control-gap));
            height: auto;
            min-height: var(--pk-combobox-decoration-size);
            margin-block: calc(-1 * var(--pk-combobox-padding-block));
            margin-inline: calc(-0.5 * var(--pk-combobox-control-gap));
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            outline: none;
        }

        /* Trailing control absorbs the control's inline-end padding into its hit box. */
        .control > .expand-button,
        .control > .clear-button:last-child {
            width: calc(
                var(--pk-combobox-decoration-size) + (0.5 * var(--pk-combobox-control-gap)) +
                    var(--pk-combobox-padding-inline)
            );
            margin-inline-start: calc(-0.5 * var(--pk-combobox-control-gap));
            margin-inline-end: calc(-1 * var(--pk-combobox-padding-inline));
        }

        .icon-button:disabled,
        .clear-button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            line-height: 0;
            pointer-events: none;
            color: var(--pk-color-gray-600);
        }

        .icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .clear-button-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            pointer-events: none;
        }

        .clear-button-icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .control--multiple {
            --pk-combobox-control-gap: 0.25rem;
            flex-wrap: wrap;
            align-items: center;
            align-content: center;
            width: 100%;
            max-width: 100%;
            height: auto;
            min-height: 0;
            padding: var(--pk-combobox-padding-block) var(--pk-combobox-padding-inline);
            gap: var(--pk-combobox-control-gap);
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius);
            background: var(--pk-input-bg);
            cursor: text;
        }

        :host([multiple][width='full']) .control--multiple {
            width: 100%;
        }

        :host([multiple]) .control:hover:not(.is-disabled) {
            background: var(--pk-input-bg);
        }

        :host([multiple]:not([invalid]):not(:state(user-invalid))) .control[data-popup-open],
        :host([multiple]:not([invalid]):not(:state(user-invalid))) .control:focus-within,
        :host([multiple]:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-input-bg);
        }

        .chips {
            display: flex;
            flex: 0 1 auto;
            flex-wrap: wrap;
            gap: 0.25rem;
            align-items: center;
            min-width: 0;
        }

        .tag {
            /* v1 ComboboxChip: text-xs + py-[2px] → 20px; face color gray-700. */
            --pk-combobox-tag-height: 20px;
            --pk-combobox-tag-padding-inline-start: 6px;
            --pk-combobox-tag-remove-width: 1.25rem;
            display: inline-flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            gap: 0.125rem;
            max-width: 100%;
            height: var(--pk-combobox-tag-height);
            padding-block: 0;
            padding-inline: var(--pk-combobox-tag-padding-inline-start) 0;
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-slate-200);
            color: var(--pk-color-gray-700);
            font-size: 12px;
            font-weight: 500;
            line-height: 1rem;
            white-space: nowrap;
        }

        .tag-label {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* Chip remove: fill the chip end so the glyph centers in the real target. */
        .tag-remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            align-self: stretch;
            box-sizing: border-box;
            width: var(--pk-combobox-tag-remove-width);
            height: auto;
            min-height: 0;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: inherit;
            cursor: pointer;
            opacity: 0.5;
            outline: none;
        }

        .tag-remove:hover {
            opacity: 1;
        }

        .tag-remove-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            pointer-events: none;
        }

        .tag-remove-icon svg {
            display: block;
            width: 0.625rem;
            height: 0.625rem;
        }

        .combobox-input--inline {
            flex: 1 1 4rem;
            width: auto;
            min-width: 4rem;
            padding: 0;
        }

        :host([multiple]) .control:not([data-popup-open]):not(:focus-within) {
            background: var(--pk-input-bg);
        }

        :host([multiple]) .combobox-input::placeholder {
            color: var(--pk-color-gray-400);
        }

        .create-option {
            display: flex;
            align-items: center;
            width: 100%;
            margin: 0;
            min-height: var(--pk-select-item-min-height);
            padding-block: var(--pk-select-item-padding-block);
            padding-inline: var(--pk-select-item-padding-inline);
            border: 0;
            background: transparent;
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-select-item-line-height);
            text-align: left;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
        }

        .create-option:hover,
        .create-option.is-highlighted {
            background: var(--pk-color-slate-100);
        }

        .value-input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .panel ::slotted(pk-separator) {
            margin: 4px 0;
        }

        .panel {
            width: max-content;
            min-width: var(--pk-combobox-anchor-width, 8rem);
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            color: var(--pk-color-gray-700);
            outline: none;
        }

        .panel-body {
            max-height: 16rem;
            overflow: auto;
        }

        .panel--popup {
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .panel--popup .panel-body {
            flex: 1 1 auto;
            min-height: 0;
        }

        :host([popup-mode]) .control--popup {
            display: inline-flex;
            width: 100%;
            max-width: 100%;
            min-height: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            gap: 0;
            cursor: default;
        }

        :host([popup-mode]) .control--popup:hover:not(.is-disabled) {
            background: transparent;
        }

        /* Popup mode paints chrome on the trigger / panel input — do not keep the
           shared .control[data-popup-open] focus ring around the closed-state button. */
        :host([popup-mode]) .control--popup[data-popup-open],
        :host([popup-mode]) .control--popup[data-popup-open]:hover:not(.is-disabled),
        :host([popup-mode]) .control--popup[data-popup-open]:focus-within:not(.is-disabled),
        :host([popup-mode]:not([invalid]):not(:state(user-invalid))) .control--popup:focus-within,
        :host([popup-mode]:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control--popup {
            border: 0;
            box-shadow: none;
            background: transparent;
        }

        .popup-trigger {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            width: 100%;
            min-width: 12rem;
            max-width: 100%;
            min-height: var(--pk-combobox-trigger-min-height);
            margin: 0;
            padding: var(--pk-combobox-padding-block) var(--pk-combobox-padding-inline);
            border: 1px solid transparent;
            border-radius: var(--pk-input-border-radius);
            /* Match input-mode fill / v1 default Button — not a white outlined field. */
            background: var(--pk-combobox-fill, var(--pk-color-slate-250));
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-combobox-font-size);
            font-weight: 400;
            line-height: var(--pk-combobox-line-height);
            text-align: left;
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        .popup-trigger:hover:not(:disabled) {
            background: var(--pk-combobox-fill-hover, var(--pk-color-slate-300));
        }

        .popup-trigger:active:not(:disabled),
        .control--popup[data-popup-open] .popup-trigger:not(:disabled) {
            background: var(--pk-combobox-fill-hover, var(--pk-color-slate-300));
        }

        .control--popup[data-popup-open] .popup-trigger:not(:disabled) {
            border-color: transparent;
            box-shadow: none;
        }

        .control--popup:not([data-popup-open]) .popup-trigger:focus-visible,
        :host([data-state='focus-visible']) .control--popup:not([data-popup-open]) .popup-trigger {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        .popup-trigger:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .popup-trigger-value {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .popup-trigger-value.is-placeholder {
            /* Trigger label is button text, not an input placeholder — keep it readable. */
            color: var(--pk-color-gray-700);
        }

        .popup-trigger-icon {
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            line-height: 0;
        }

        .popup-trigger-icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .panel-search {
            flex: none;
            padding: 0.25rem;
        }

        .panel-input {
            display: block;
            width: 100%;
            min-width: 0;
            margin: 0;
            padding: 6px 8px;
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius);
            background: color-mix(in srgb, var(--pk-input-bg) 30%, transparent);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-combobox-font-size);
            line-height: 1.4;
            outline: none;
            box-sizing: border-box;
        }

        .panel-input::placeholder {
            color: var(--pk-color-gray-400);
        }

        .panel-input:focus {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
            background: var(--pk-color-white);
        }

        :host([popup-mode][size='xs']) .popup-trigger-icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        :host([popup-mode][size='xs']) .panel-input {
            padding: 4px 8px;
            font-size: 11px;
        }

        :host([popup-mode][size='sm']) .panel-input {
            font-size: 12px;
        }

        :host([popup-mode][size='lg']) .panel-input {
            padding-block: 8px;
            padding-inline: 12px;
        }

        :host([popup-mode][width='full']) .popup-trigger {
            width: 100%;
        }

        .panel:not([data-open]):not(.closing) {
            opacity: 0;
            pointer-events: none;
        }

        .panel[data-open]:not(.closing) {
            opacity: 1;
            pointer-events: auto;
        }

        .panel[hidden] {
            display: none !important;
        }

        .empty {
            display: flex;
            align-items: center;
            margin: 0;
            min-height: var(--pk-select-item-min-height, var(--pk-input-height));
            padding-block: var(--pk-select-item-padding-block);
            padding-inline: var(--pk-select-item-padding-inline);
            border: var(--pk-select-trigger-border-width, 1px) solid transparent;
            box-sizing: border-box;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-select-item-line-height);
        }

        .async-status {
            display: flex;
            align-items: center;
            margin: 0;
            min-height: var(--pk-select-item-min-height, var(--pk-input-height));
            padding-block: var(--pk-select-item-padding-block);
            padding-inline: var(--pk-select-item-padding-inline);
            border: var(--pk-select-trigger-border-width, 1px) solid transparent;
            box-sizing: border-box;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-select-item-line-height);
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([multiple][invalid]) .control,
        :host([multiple]:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .control:focus-within,
        :host([invalid][data-state='focus-visible']) .control,
        :host(:state(user-invalid)) .control:focus-within,
        :host(:state(user-invalid)[data-state='focus-visible']) .control {
            border-color: var(--pk-color-rose-600);
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([size='xs']) {
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-btn-height-xs);
            --pk-combobox-padding-block: 4px;
            --pk-combobox-padding-inline: 8px;
            --pk-combobox-font-size: 11px;
            --pk-combobox-decoration-size: 0.625rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 4px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 ComboboxLabel xs: text-[11px] */
            --pk-select-group-label-font-size: 11px;
        }

        :host([size='xs']) .control {
            border-radius: var(--pk-radius-sm);
        }

        :host([size='xs']) .icon svg,
        :host([size='xs']) .clear-button-icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        :host([size='sm']) {
            --pk-combobox-min-height: 0;
            --pk-combobox-trigger-min-height: var(--pk-btn-height-sm);
            --pk-combobox-padding-block: 6px;
            --pk-combobox-padding-inline: 10px;
            --pk-combobox-font-size: 12px;
            --pk-combobox-decoration-size: 0.6875rem;
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 12px;
            --pk-select-item-indicator-inset: 0.625rem;
            /* v1 ComboboxLabel sm: text-[12px] — empty dropzone field picker uses sm. */
            --pk-select-group-label-font-size: 12px;
        }

        :host([size='sm']) .control {
            border-radius: var(--pk-radius-md);
        }

        :host([size='sm']) .popup-trigger {
            border-radius: var(--pk-radius-md);
        }

        :host([size='sm']) .icon svg,
        :host([size='sm']) .clear-button-icon svg {
            width: 0.6875rem;
            height: 0.6875rem;
        }

        :host([size='lg']) {
            --pk-combobox-trigger-min-height: var(--pk-btn-height-lg);
            --pk-combobox-padding-block: 8px;
            --pk-combobox-padding-inline: 12px;
            --pk-combobox-font-size: var(--pk-font-size-base);
            --pk-combobox-decoration-size: 1rem;
            --pk-select-item-padding-block: 8px;
            --pk-select-item-padding-inline: 12px;
            --pk-select-item-font-size: 14px;
            --pk-select-item-indicator-inset: 0.75rem;
            /* v1 ComboboxLabel lg: text-sm → 14px */
            --pk-select-group-label-font-size: 14px;
        }

        :host([size='xl']) {
            --pk-combobox-trigger-min-height: var(--pk-btn-height-xl);
            --pk-combobox-padding-block: 10px;
            --pk-combobox-padding-inline: 14px;
            --pk-combobox-font-size: var(--pk-font-size-base);
            --pk-combobox-decoration-size: 1.125rem;
            --pk-select-item-padding-block: 10px;
            --pk-select-item-padding-inline: 14px;
            --pk-select-item-padding-inline-end: 2.25rem;
            --pk-select-item-font-size: 14px;
            --pk-select-item-indicator-inset: 0.875rem;
            /* v1 ComboboxLabel xl: text-base → 16px */
            --pk-select-group-label-font-size: 16px;
        }

        :host([size='xl']) .icon svg,
        :host([size='xl']) .clear-button-icon svg {
            width: 0.875rem;
            height: 0.875rem;
        }
    }
`],bo=F(I.chevronDown),xo=F(I.xmark),H=class extends R{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.open=!1,this.multiple=!1,this.placement=`bottom-start`,this.sideOffset=6,this.clearable=!1,this.withClear=!1,this.allowCreate=!1,this.allowCustomValue=!1,this.autoHighlight=!1,this.popupMode=!1,this.searchPlaceholder=`Search`,this.invalid=!1,this.size=`default`,this.placeholder=``,this.emptyMessage=`No options found.`,this.value=``,this.defaultValue=``,this.values=[],this.defaultValues=[],this.label=``,this.instructions=``,this.ariaLabel=null,this.loopFocus=!0,this.filter=null,this.async=!1,this.loadingMessage=`Searching…`,this.startTypingMessage=`Start typing to search…`,this.fetchOptions=null,this.hasSlotController=new Kr(this,`start`,`end`),this.listboxId=$r(`pk-combobox-listbox`),this.inputId=$r(`pk-combobox-input`),this.createOptionId=$r(`pk-combobox-create`),this.options=[],this.inputValue=``,this.hasInputSinceOpening=!1,this.highlightedIndex=-1,this.createOptionHighlighted=!1,this.closing=!1,this.panelAnimated=!1,this.dismissRegistered=!1,this.panelEventTarget=null,this.asyncFetchRequestId=0,this.selectedOptionMeta=null,this.asyncLoading=!1,this.asyncError=null,this.handleOptionsMutation=(e={})=>{let t=this.getOptionElements(),n=t.length!==this.options.length||t.some((e,t)=>e!==this.options[t]);this.options=t,this.applySelection(),e.render!==!1&&n&&this.requestUpdate()},this.syncOptions=()=>{this.handleOptionsMutation({render:!0})},this.togglePanel=e=>{e?.preventDefault(),e?.stopPropagation(),!this.disabled&&(this.open||this.closing?this.closePanel(`api`):this.openPanel())},this.onDocumentPointerDown=e=>{this.isPointerInside(e)||this.closePanel(`light-dismiss`)},this.onDocumentKeyDown=e=>{if(!this.open)return;if(e.key===`Escape`){if(!gr(this))return;e.preventDefault(),e.stopPropagation(),this.closePanel(`escape`);return}let t=this.panelInput;if(t&&e.composedPath().includes(t)||!(io.has(e.key)||ao(e)))return;let n=this.panelElement,r=e.composedPath();n&&r.includes(n)&&ho(e,{anchor:this.controlElement,panel:n})&&(e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e))},this.handleOptionSelect=e=>{let{value:t}=e.detail;if(this.multiple){this.values=this.values.includes(t)?this.values.filter(e=>e!==t):[...this.values,t],this.inputValue=``,this.applySelection(),this.emitValueChange(),this.activeInput?.focus({preventScroll:!0});return}this.value=t,this.syncSelectedOptionMeta(),this.applySelection(),this.closePanel(`api`),this.emitValueChange()},this.handleOptionHighlight=e=>{if(!this.open)return;let t=this.getEnabledVisibleOptions().findIndex(t=>t.value===e.detail.value);t===-1||t===this.highlightedIndex||(this.highlightedIndex=t,this.syncHighlight())},this.handleControlMouseDown=e=>{if(this.disabled||this.usesPopupMode||e.composedPath().some(e=>e instanceof HTMLElement?e.classList.contains(`icon-button`)||e.classList.contains(`clear-button`)||e.classList.contains(`tag-remove`):!1))return;let t=e.target===this.activeInput;if(!this.open&&!this.closing){t||e.preventDefault(),this.activeInput?.focus({preventScroll:!0}),this.openPanel();return}t||(e.preventDefault(),this.activeInput?.focus({preventScroll:!0}))},this.handleTriggerKeyDown=e=>{if(!this.disabled){if(e.key===`Enter`||e.key===` `){e.preventDefault(),this.togglePanel(e);return}e.key===`ArrowDown`&&!this.open&&(e.preventDefault(),this.openPanel())}},this.handleListboxKeyDownEvent=e=>{this.open&&this.onListboxKeyDown(e.detail.keyboardEvent)},this.handleCreateMouseEnter=()=>{if(!this.open)return;let e=this.getEnabledVisibleOptions();this.highlightedIndex=e.length,this.syncHighlight()},this.handleCreateKeyDown=e=>{e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e)}}static{this.styles=yo}static get validators(){return[...super.validators,Xr(),{observedAttributes:[`required`],checkValidity:e=>{let t=e,n={message:`Please select an item in the list.`,isValid:!0,invalidKeys:[]};return!t.required||!(t.multiple?t.values.length===0:!t.value)?n:(n.isValid=!1,n.invalidKeys.push(`valueMissing`),n)}}]}get panelElement(){return this.popupElement?.getContentElement()??null}get panelInput(){return this.panelElement?.querySelector(`.panel-input`)}get panelBodyElement(){return this.panelElement?.querySelector(`.panel-body`)}get usesPopupMode(){return this.popupMode&&!this.multiple}get activeInput(){return this.usesPopupMode?this.panelInput:this.controlInput}keepsFocusOnInput(){return!!this.activeInput}maintainInputFocus(){this.activeInput?.focus({preventScroll:!0})}get listScrollContainer(){return this.panelBodyElement??this.panelElement??this}connectedCallback(){this.instructions=this.getAttribute(`hint`)??this.instructions,this.refreshOptions(),super.connectedCallback(),this.syncHasValueAttribute(),this.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.optionsObserver=new MutationObserver(()=>{this.handleOptionsMutation({render:!0})}),this.optionsObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this.unbindPanelEvents(),this.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.optionsObserver?.disconnect(),this.liveRegion?.destroy(),this.liveRegion=void 0,window.clearTimeout(this.asyncFetchTimer),this.fetchAbortController?.abort(),this.closePanel(`api`),super.disconnectedCallback()}updated(e){(e.has(`value`)||e.has(`values`)||e.has(`multiple`))&&(this.syncHasValueAttribute(),this.syncSelectedOptionMeta(),this.applySelection()),super.updated(e)}get validationTarget(){return this.activeInput??this.popupTrigger??this.controlElement}getAriaMirrorTarget(){return this.activeInput??this.popupTrigger??this.controlElement??null}syncFormValue(){if(!this.name){this.setFormValue(null);return}if(this.multiple){let e=new FormData;for(let t of this.values)e.append(this.name,t);this.setFormValue(e);return}this.setFormValue(this.value||``)}resetToDefaultValue(){this.multiple?this.values=[...this.defaultValues]:this.value=this.defaultValue,this.inputValue=``,this.applySelection()}restoreFormState(e){if(e instanceof FormData&&this.name){this.values=e.getAll(this.name).map(String);return}typeof e==`string`&&(this.value=e)}syncHasValueAttribute(){this.toggleAttribute(`data-has-value`,this.hasSelection())}getOptionElements(){let e=this.popupElement?.getContentElement()?.querySelectorAll(`pk-option`);return e&&e.length>0?[...e]:[...this.querySelectorAll(`pk-option`)]}refreshOptions(){this.handleOptionsMutation({render:!1})}bindPanelEvents(){let e=this.panelElement;!e||e===this.panelEventTarget||(this.unbindPanelEvents(),this.panelEventTarget=e,e.addEventListener(`pk-option-select`,this.handleOptionSelect),e.addEventListener(`pk-option-highlight`,this.handleOptionHighlight),e.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent))}unbindPanelEvents(){this.panelEventTarget&&=(this.panelEventTarget.removeEventListener(`pk-option-select`,this.handleOptionSelect),this.panelEventTarget.removeEventListener(`pk-option-highlight`,this.handleOptionHighlight),this.panelEventTarget.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),null)}isOptionInHiddenGroup(e){return!!e.closest(`pk-option-group`)?.hidden}defaultFilter(e,t){let n=e.getLabel().toLowerCase(),r=e.value.toLowerCase(),i=(e.getSearchText?.()??n).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)}matchesFilter(e,t){return this.filter?this.filter(e,t):this.defaultFilter(e,t)}getFilterQuery(){return!this.open||!this.multiple&&!this.hasInputSinceOpening&&!this.usesPopupMode?``:this.inputValue.trim().toLowerCase()}getVisibleOptions(){if(this.usesAsyncSearch)return this.options.filter(e=>!this.isOptionInHiddenGroup(e));let e=this.getFilterQuery();return this.options.filter(t=>this.isOptionInHiddenGroup(t)?!1:!e||this.matchesFilter(t,e))}getEnabledVisibleOptions(){return this.getVisibleOptions().filter(e=>!e.disabled)}getSelectedOptions(){if(this.multiple){let e=new Map(this.options.map(e=>[e.value,e]));return this.values.map(t=>e.get(t)).filter(e=>e!==void 0)}let e=this.options.find(e=>e.value===this.value);return e?[e]:[]}getSelectedOption(){return this.options.find(e=>e.value===this.value)}get usesAsyncSearch(){return this.async&&!!this.fetchOptions&&!this.multiple&&!this.usesPopupMode}getSelectedLabel(){return this.getSelectedOption()?.getLabel()??this.selectedOptionMeta?.label??this.value}clearAsyncOptionNodes(){this.querySelectorAll(`:scope > pk-option, :scope > pk-option-group, :scope > pk-separator`).forEach(e=>e.remove())}renderAsyncOptionNodes(e){let t=this.mergeAsyncItems(e);this.clearAsyncOptionNodes();for(let e of t){let t=document.createElement(`pk-option`);t.value=e.value,t.textContent=e.label,this.append(t)}this.handleOptionsMutation({render:!0})}mergeAsyncItems(e){if(!this.value)return e;let t=this.selectedOptionMeta??{value:this.value,label:this.getSelectedOption()?.getLabel()??this.value};return e.some(e=>e.value===t.value)?e:[...e,t]}syncSelectedOptionMeta(){if(!this.value){this.selectedOptionMeta=null;return}let e=this.getSelectedOption();e&&(this.selectedOptionMeta={value:e.value,label:e.getLabel()})}scheduleAsyncFetch(e){window.clearTimeout(this.asyncFetchTimer),this.asyncFetchTimer=window.setTimeout(()=>{this.runAsyncFetch(e)},200)}async runAsyncFetch(e){if(!this.fetchOptions)return;let t=++this.asyncFetchRequestId;if(this.fetchAbortController?.abort(),this.fetchAbortController=new AbortController,!e){this.asyncLoading=!1,this.asyncError=null,this.renderAsyncOptionNodes(this.value&&this.selectedOptionMeta?[this.selectedOptionMeta]:[]);return}this.asyncLoading=!0,this.asyncError=null;try{let n=await this.fetchOptions(e,this.fetchAbortController.signal);if(t!==this.asyncFetchRequestId)return;this.renderAsyncOptionNodes(n)}catch(e){if(this.fetchAbortController?.signal.aborted||t!==this.asyncFetchRequestId||e instanceof DOMException&&e.name===`AbortError`)return;console.error(`Failed to load combobox options:`,e),this.asyncError=`Failed to load options. Please try again.`,this.renderAsyncOptionNodes([])}finally{t===this.asyncFetchRequestId&&(this.asyncLoading=!1)}}getAsyncStatusMessage(){if(!this.usesAsyncSearch||!this.open)return null;if(this.asyncLoading)return this.loadingMessage;if(this.asyncError)return this.asyncError;let e=this.inputValue.trim();return e?this.getEnabledVisibleOptions().length===0&&!this.shouldShowCreateOption()?`No matches for "${e}".`:null:this.value?null:this.startTypingMessage}shouldShowAsyncEmpty(){return!this.usesAsyncSearch||!this.open||!this.inputValue.trim()||this.asyncLoading||this.asyncError?!1:this.getEnabledVisibleOptions().length===0&&!this.shouldShowCreateOption()}isSelected(e){return this.multiple?this.values.includes(e):this.value===e}getDisplayInputValue(){return this.usesPopupMode||this.multiple||this.open?this.inputValue:this.hasSelection()?this.getSelectedLabel():``}getTriggerDisplayValue(){return this.hasSelection()?this.getSelectedLabel():this.placeholder}isTriggerPlaceholder(){return!this.hasSelection()}hasSelection(){return this.multiple?this.values.length>0:!!(this.getSelectedOption()||this.selectedOptionMeta||this.value)}shouldShowCreateOption(){if(!this.allowCreate||!this.open||!this.multiple&&!this.hasInputSinceOpening)return!1;let e=this.inputValue.trim();if(!e)return!1;let t=e.toLowerCase();return!this.options.some(e=>e.getLabel().toLowerCase()===t||e.value.toLowerCase()===t)}getListboxNavItems(){let e=this.getEnabledVisibleOptions();return this.shouldShowCreateOption()&&this.createOptionElement?[...e,this.createOptionElement]:e}applySelection(){let e=this.getVisibleOptions(),t=this.open?this.getFilterQuery():``;for(let n of this.options)n.selected=this.isSelected(n.value),n.hidden=!e.includes(n),n.optionId=`${this.listboxId}-option-${n.value}`,n.matchQuery=t;for(let e of this.querySelectorAll(`pk-option-group`)){let t=[...e.querySelectorAll(`pk-option`)],n=t.length>0&&t.every(e=>e.hidden);e.toggleAttribute(`data-pk-filter-empty`,n)}po(this),this.syncValueInput(),this.open&&(this.syncHighlight(),this.announceFilterResults())}syncValueInput(){this.input&&(this.input.value=this.multiple?this.values.join(`,`):this.value,this.input.required=this.required)}syncHighlightedIndexToSelection(){if(this.multiple)return;let e=this.getEnabledVisibleOptions();if(!this.value||e.length===0)return;let t=e.findIndex(e=>e.value===this.value);t>=0&&(this.highlightedIndex=t)}resetHighlightedIndexOnOpen(){if(this.autoHighlight){if(this.value){this.syncHighlightedIndexToSelection();return}this.highlightedIndex=0;return}this.highlightedIndex=-1}syncHighlight(){let e=this.getEnabledVisibleOptions(),t=this.shouldShowCreateOption(),n=e.length+ +!!t;for(let e of this.options)e.highlighted=!1,e.focusIndex=-1;if(this.createOptionHighlighted=!1,n===0||this.highlightedIndex<0)return;if(this.highlightedIndex>=n&&(this.highlightedIndex=n-1),t&&this.highlightedIndex===e.length){this.createOptionHighlighted=!0,this.keepsFocusOnInput()||this.createOptionElement?.focus({preventScroll:!0}),Er(this.createOptionElement,this.listScrollContainer,`vertical`,`auto`),this.keepsFocusOnInput()&&this.maintainInputFocus();return}let r=e[this.highlightedIndex];r&&(r.highlighted=!0,r.focusIndex=this.keepsFocusOnInput()?-1:0,Er(r,this.listScrollContainer,`vertical`,`auto`),this.keepsFocusOnInput()&&this.maintainInputFocus())}getActiveDescendantId(){let e=this.getEnabledVisibleOptions();return this.shouldShowCreateOption()&&this.highlightedIndex===e.length?this.createOptionId:e[this.highlightedIndex]?.optionId||null}announceFilterResults(){this.liveRegion||=new ei(`polite`);let e=this.getEnabledVisibleOptions().length,t=this.getFilterQuery();if(t){if(this.shouldShowCreateOption()){this.liveRegion.announce(`Create ${t}`);return}this.liveRegion.announce(e===0?`${this.emptyMessage}`:`${e} ${e===1?`result`:`results`} available`)}}async show(){this.open||this.closing||this.disabled||await this.openPanel()}async hide(e=`api`){!this.open||this.closing||await this.closePanel(e)}openPanel(){let e=this.controlElement;if(!e)return Promise.resolve();if(this.open)return this.activeInput?.focus({preventScroll:!0}),Promise.resolve();if(this.closing)return Promise.resolve();this.dispatchEvent(new Dr),this.closing=!1,this.panelAnimated=!1,this.open=!0,this.hasInputSinceOpening=!1,this.inputValue=this.usesPopupMode?``:!this.multiple&&this.hasSelection()?this.getSelectedLabel():``,this.applySelection(),this.resetHighlightedIndexOnOpen(),this.usesAsyncSearch&&(this.syncSelectedOptionMeta(),this.asyncError=null,this.asyncLoading=!1,this.renderAsyncOptionNodes(this.selectedOptionMeta?[this.selectedOptionMeta]:[]));let t=e.getBoundingClientRect().width;return this.style.setProperty(`--pk-combobox-anchor-width`,`${t}px`),this.popupElement.active=!0,this.panelElement&&(this.panelElement.hidden=!1,ii(this.panelElement,this.placement)),this.registerDismissHandlers(),this.syncHighlight(),this.usesPopupMode?this.popupTrigger?.blur():this.activeInput?.focus({preventScroll:!0}),this.updateComplete.then(async()=>{let e=await ai(this.popupElement,this.placement,300,{requireEvent:!0});if(this.panelElement&&ii(this.panelElement,e),this.panelAnimated=!0,this.bindPanelEvents(),this.refreshOptions(),this.activeInput?.focus({preventScroll:!0}),this.highlightedIndex>=0&&!this.keepsFocusOnInput()){let e=this.getEnabledVisibleOptions(),t=this.highlightedIndex;this.shouldShowCreateOption()&&t===e.length?this.createOptionElement?.focus({preventScroll:!0}):e[t]?.focusControl()}this.dispatchEvent(new Or),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))})}commitCustomValueIfAllowed(){if(this.multiple||!this.allowCustomValue)return!1;let e=this.inputValue.trim();if(!e)return!1;let t=this.options.find(t=>t.getLabel().toLowerCase()===e.toLowerCase()||t.value.toLowerCase()===e.toLowerCase())?.value??e;return this.value===t?!1:(this.value=t,!0)}commitInputOnClose(e){return this.multiple||this.usesPopupMode?!1:this.hasInputSinceOpening?this.inputValue.trim()?this.shouldCommitCustomValueOnClose(e)?this.commitCustomValueIfAllowed():!1:this.value?(this.value=``,!0):!1:this.shouldCommitCustomValueOnClose(e)?this.commitCustomValueIfAllowed():!1}shouldCommitCustomValueOnClose(e){return e===`light-dismiss`||e===`pointer-dismiss`}async closePanel(e=`unknown`){if(!this.open||this.closing)return;let t=new kr(e);if(!this.dispatchEvent(t))return;let n=this.commitInputOnClose(e);this.unbindPanelEvents(),this.closing=!0,this.panelAnimated=!1,await this.waitForExitAnimation(),this.open=!1,this.closing=!1,this.panelAnimated=!1,this.hasInputSinceOpening=!1,this.inputValue=``,this.panelElement&&(this.panelElement.hidden=!0,this.panelElement.removeAttribute(`data-side`)),this.popupElement.active=!1,this.unregisterDismissHandlers(),this.applySelection(),this.usesAsyncSearch&&(window.clearTimeout(this.asyncFetchTimer),this.fetchAbortController?.abort(),this.asyncLoading=!1,this.asyncError=null,this.renderAsyncOptionNodes(this.selectedOptionMeta?[this.selectedOptionMeta]:[])),n&&(this.syncHasValueAttribute(),this.emitValueChange()),this.shouldReturnFocusToInput(e)?this.usesPopupMode?this.popupTrigger?.focus({preventScroll:!0}):this.activeInput?.focus({preventScroll:!0}):(this.activeInput?.blur(),this.popupTrigger?.blur()),this.dispatchEvent(new Ar),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))}waitForExitAnimation(){let e=this.panelElement;return e?new Promise(t=>{let n=!1,r=()=>{n||(n=!0,e.removeEventListener(`animationend`,i),window.clearTimeout(a),e.classList.remove(`closing`),t())},i=t=>{t.target===e&&t.animationName.startsWith(`pk-popup-content-out`)&&r()};e.classList.add(`closing`),e.addEventListener(`animationend`,i);let a=window.setTimeout(r,150)}):Promise.resolve()}shouldReturnFocusToInput(e){return e!==`light-dismiss`&&e!==`pointer-dismiss`}registerDismissHandlers(){mr(this),this.dismissRegistered=!0,document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onDocumentKeyDown,!0)}unregisterDismissHandlers(){this.dismissRegistered&&=(hr(this),!1),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onDocumentKeyDown,!0)}isPointerInside(e){return go(e,{anchor:this.controlElement,panel:this.panelElement})}handleCreateOption(){let e=this.inputValue.trim();if(!e)return;let t=new vo(e);if(!this.dispatchEvent(t))return;let n=document.createElement(`pk-option`);if(n.value=e,n.textContent=e,this.append(n),this.multiple){this.values.includes(e)||(this.values=[...this.values,e]),this.inputValue=``,this.applySelection(),this.emitValueChange(),this.activeInput?.focus({preventScroll:!0});return}this.value=e,this.applySelection(),this.closePanel(`api`),this.emitValueChange()}removeTag(e,t){t.preventDefault(),t.stopPropagation(),this.values=this.values.filter(t=>t!==e),this.applySelection(),this.emitValueChange(),this.activeInput?.focus({preventScroll:!0})}handleClear(e){e.preventDefault(),e.stopPropagation(),this.multiple?this.values=[]:this.value=``,this.inputValue=``,this.selectedOptionMeta=null,this.usesAsyncSearch&&this.renderAsyncOptionNodes([]),this.applySelection(),this.dispatchEvent(new ti),this.emitValueChange(),this.activeInput?.focus()}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.multiple?[...this.values]:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleInput(e){this.hasInputSinceOpening=!0,this.inputValue=e.target.value,this.highlightedIndex=this.autoHighlight?0:-1,this.applySelection(),this.usesAsyncSearch&&(this.asyncError=null,this.scheduleAsyncFetch(this.inputValue.trim())),this.open||this.openPanel()}handleInputKeyDown(e){if(e.key===`Backspace`&&this.multiple&&!this.inputValue&&this.values.length>0){e.preventDefault(),this.values=this.values.slice(0,-1),this.applySelection(),this.emitValueChange();return}if(e.key===`Escape`&&this.open){if(e.preventDefault(),this.hasInputSinceOpening&&this.inputValue){this.hasInputSinceOpening=!1,this.inputValue=this.usesPopupMode?``:!this.multiple&&this.hasSelection()?this.getSelectedLabel():``,this.highlightedIndex=this.autoHighlight?0:-1,this.applySelection();return}this.closePanel(`escape`);return}if(e.key===`ArrowDown`&&!this.open){e.preventDefault(),this.openPanel();return}if(e.key===`Tab`&&this.open){let e=!1;this.multiple||(e=this.commitCustomValueIfAllowed()),this.closePanel(`api`),e&&(this.syncHasValueAttribute(),this.emitValueChange());return}if(this.open&&e.key===`Enter`&&!this.multiple&&this.getEnabledVisibleOptions().length===0&&this.allowCustomValue&&this.inputValue.trim()&&!this.shouldShowCreateOption()){e.preventDefault();let t=this.commitCustomValueIfAllowed();this.closePanel(`api`),t&&(this.syncHasValueAttribute(),this.emitValueChange());return}this.open&&this.onListboxKeyDown(e)}onListboxKeyDown(e){let t=this.getListboxNavItems(),n=this.getEnabledVisibleOptions();if(this.highlightedIndex<0){if(e.key===`ArrowDown`||e.key===`ArrowRight`){(n.length>0||this.shouldShowCreateOption())&&(e.preventDefault(),this.highlightedIndex=0,this.syncHighlight());return}if(e.key===`ArrowUp`||e.key===`ArrowLeft`){(n.length>0||this.shouldShowCreateOption())&&(e.preventDefault(),this.highlightedIndex=this.shouldShowCreateOption()?n.length:Math.max(n.length-1,0),this.syncHighlight());return}if(e.key===`Enter`||e.key===` `)return}if(e.key===`Enter`&&this.shouldShowCreateOption()&&this.highlightedIndex===n.length){e.preventDefault(),this.handleCreateOption();return}if(this.multiple&&(e.key===`Enter`||e.key===` `)){let t=n[this.highlightedIndex];t&&(e.preventDefault(),t.dispatchEvent(new CustomEvent(`pk-option-select`,{detail:{value:t.value},bubbles:!0,composed:!0})));return}this.highlightedIndex=lo(e,{items:t,currentIndex:this.highlightedIndex,multiselect:this.multiple,loop:this.loopFocus,onSelect:e=>{this.highlightedIndex=e,this.syncHighlight()},focusItem:e=>{if(!this.keepsFocusOnInput()){if(this.shouldShowCreateOption()&&e===n.length){this.createOptionElement?.focus({preventScroll:!0});return}n[e]?.focusControl()}},onClose:()=>{this.closePanel(`escape`)}})}renderHostDecorationSlot(e){return this.hasSlotController.test(e)?w`
            <span part=${e} class=${e===`start`?`control-start`:`control-end`}>
                <slot name=${e}></slot>
            </span>
        `:w`<slot name=${e} hidden></slot>`}renderChevronButton(){return w`
            <button
                type="button"
                class="icon-button expand-button"
                part="expand-button"
                aria-label="Toggle options"
                ?disabled=${this.disabled}
                @click=${this.togglePanel}
            >
                <span class="icon" aria-hidden="true">${N(bo)}</span>
            </button>
        `}renderTags(){return this.getSelectedOptions().map(e=>w`
            <span class="tag" part="tag">
                <span class="tag-label">${e.getLabel()}</span>
                <button
                    type="button"
                    class="tag-remove"
                    part="tag-remove"
                    aria-label=${`Remove ${e.getLabel()}`}
                    ?disabled=${this.disabled}
                    @click=${t=>this.removeTag(e.value,t)}
                >
                    <span class="tag-remove-icon" aria-hidden="true">${N(xo)}</span>
                </button>
            </span>
        `)}shouldShowPlaceholder(){return!this.inputValue.trim()&&!this.hasSelection()}renderInput(){let e=this.open?this.getActiveDescendantId():null,t=this.shouldShowPlaceholder();return w`
            <input
                part="input"
                class=${M({"combobox-input":!0,"control-input":!0,"combobox-input--inline":this.multiple})}
                type="text"
                role="combobox"
                id=${this.inputId}
                .value=${this.getDisplayInputValue()}
                placeholder=${t?this.placeholder:E}
                ?disabled=${this.disabled}
                aria-label=${this.ariaLabel??E}
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.listboxId}
                aria-autocomplete="list"
                aria-activedescendant=${e??E}
                @input=${this.handleInput}
                @keydown=${this.handleInputKeyDown}
            />
        `}renderPanelInput(){let e=this.open?this.getActiveDescendantId():null;return w`
            <div part="panel-search" class="panel-search">
                <input
                    part="panel-input"
                    class="combobox-input panel-input"
                    type="text"
                    role="combobox"
                    id=${this.inputId}
                    .value=${this.inputValue}
                    placeholder=${this.searchPlaceholder}
                    ?disabled=${this.disabled}
                    aria-label=${this.ariaLabel??this.searchPlaceholder}
                    aria-expanded="true"
                    aria-controls=${this.listboxId}
                    aria-autocomplete="list"
                    aria-activedescendant=${e??E}
                    @input=${this.handleInput}
                    @keydown=${this.handleInputKeyDown}
                />
            </div>
        `}renderPopupTrigger(){return w`
            <button
                type="button"
                part="trigger"
                class="popup-trigger"
                ?disabled=${this.disabled}
                aria-label=${this.ariaLabel??E}
                aria-haspopup="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.listboxId}
                @click=${this.togglePanel}
                @keydown=${this.handleTriggerKeyDown}
            >
                <span
                    class=${M({"popup-trigger-value":!0,"is-placeholder":this.isTriggerPlaceholder()})}
                >
                    ${this.getTriggerDisplayValue()}
                </span>
                <span class="icon popup-trigger-icon" aria-hidden="true">${N(bo)}</span>
            </button>
        `}renderControlContent(){if(this.usesPopupMode)return this.renderPopupTrigger();let e=(this.clearable||this.withClear)&&this.hasSelection()&&!this.disabled;return this.multiple?w`
                ${this.renderHostDecorationSlot(`start`)}
                <div class="chips" part="tags">
                    ${this.renderTags()}
                    ${this.renderInput()}
                </div>
                ${this.renderHostDecorationSlot(`end`)}
                ${e?w`
                        <button
                            type="button"
                            class="clear-button"
                            part="clear-button"
                            aria-label="Clear selection"
                            ?disabled=${this.disabled}
                            @click=${this.handleClear}
                        >
                            <span class="clear-button-icon" aria-hidden="true">${N(xo)}</span>
                        </button>
                    `:E}
            `:w`
            ${this.renderHostDecorationSlot(`start`)}
            ${this.renderInput()}
            ${this.renderHostDecorationSlot(`end`)}
            ${e?w`
                    <button
                        type="button"
                        class="clear-button"
                        part="clear-button"
                        aria-label="Clear selection"
                        ?disabled=${this.disabled}
                        @click=${this.handleClear}
                    >
                        <span class="clear-button-icon" aria-hidden="true">${N(xo)}</span>
                    </button>
                `:E}
            ${this.renderChevronButton()}
        `}render(){let e=this.getEnabledVisibleOptions(),t=this.shouldShowCreateOption(),n=this.open&&(this.usesAsyncSearch?this.shouldShowAsyncEmpty():e.length===0&&!t),r=this.getAsyncStatusMessage(),i=this.inputValue.trim();return w`
            <input
                class="value-input"
                part="value-input"
                tabindex="-1"
                aria-hidden="true"
                .value=${this.multiple?this.values.join(`,`):this.value}
                ?required=${this.required}
                @input=${()=>this.updateValidity()}
            />
            <div
                part="control"
                class=${M({control:!0,"is-disabled":this.disabled,"control--multiple":this.multiple,"control--popup":this.usesPopupMode})}
                data-popup-open=${this.open?``:E}
                @mousedown=${this.handleControlMouseDown}
            >
                ${this.renderControlContent()}
            </div>
            <pk-popup
                .active=${this.open||this.closing}
                .anchor=${this.controlElement??``}
                .placement=${this.placement}
                .distance=${this.sideOffset}
                .sync=${`width`}
                flip
                shift
            >
                <div
                    part="panel"
                    class=${M({panel:!0,"pk-popup-content":!0,closing:this.closing,"panel--popup":this.usesPopupMode})}
                    tabindex="-1"
                    ?hidden=${!this.open&&!this.closing}
                    data-open=${this.panelAnimated&&!this.closing?``:E}
                >
                    ${this.usesPopupMode?this.renderPanelInput():E}
                    <div
                        part="panel-body"
                        class="panel-body"
                        id=${this.listboxId}
                        role="listbox"
                        aria-multiselectable=${this.multiple?`true`:`false`}
                        aria-busy=${this.usesAsyncSearch&&this.asyncLoading?`true`:E}
                        @slotchange=${this.syncOptions}
                    >
                        <slot></slot>
                        ${r?w`
                                <div part="async-status" class="async-status" role="status">${r}</div>
                            `:E}
                        ${t?w`
                                <button
                                    type="button"
                                    part="create-option"
                                    class=${M({"create-option":!0,"is-highlighted":this.createOptionHighlighted})}
                                    id=${this.createOptionId}
                                    role="option"
                                    aria-selected="false"
                                    tabindex="-1"
                                    @click=${this.handleCreateOption}
                                    @mouseenter=${this.handleCreateMouseEnter}
                                    @keydown=${this.handleCreateKeyDown}
                                >
                                    Create "${i}"
                                </button>
                            `:E}
                        ${n?w`
                                <div part="empty" class="empty">${this.emptyMessage}</div>
                            `:E}
                    </div>
                </div>
            </pk-popup>
        `}};D([k({type:Boolean,reflect:!0})],H.prototype,`open`,void 0),D([k({type:Boolean,reflect:!0})],H.prototype,`multiple`,void 0),D([k({reflect:!0})],H.prototype,`placement`,void 0),D([k({attribute:`side-offset`,type:Number})],H.prototype,`sideOffset`,void 0),D([k({type:Boolean,reflect:!0})],H.prototype,`clearable`,void 0),D([k({attribute:`with-clear`,type:Boolean})],H.prototype,`withClear`,void 0),D([k({attribute:`allow-create`,type:Boolean})],H.prototype,`allowCreate`,void 0),D([k({attribute:`allow-custom-value`,type:Boolean})],H.prototype,`allowCustomValue`,void 0),D([k({attribute:`auto-highlight`,type:Boolean})],H.prototype,`autoHighlight`,void 0),D([k({attribute:`popup-mode`,type:Boolean,reflect:!0})],H.prototype,`popupMode`,void 0),D([k({attribute:`search-placeholder`})],H.prototype,`searchPlaceholder`,void 0),D([k({type:Boolean,reflect:!0})],H.prototype,`invalid`,void 0),D([k({reflect:!0})],H.prototype,`size`,void 0),D([k({reflect:!0})],H.prototype,`width`,void 0),D([k()],H.prototype,`placeholder`,void 0),D([k({attribute:`empty-message`})],H.prototype,`emptyMessage`,void 0),D([k()],H.prototype,`value`,void 0),D([k({attribute:`default-value`})],H.prototype,`defaultValue`,void 0),D([k({type:Array,attribute:!1})],H.prototype,`values`,void 0),D([k({attribute:!1})],H.prototype,`defaultValues`,void 0),D([k()],H.prototype,`label`,void 0),D([k()],H.prototype,`instructions`,void 0),D([k({attribute:`aria-label`})],H.prototype,`ariaLabel`,void 0),D([k({attribute:`loop-focus`,type:Boolean})],H.prototype,`loopFocus`,void 0),D([k({attribute:!1})],H.prototype,`filter`,void 0),D([k({type:Boolean,reflect:!0})],H.prototype,`async`,void 0),D([k({attribute:`loading-message`})],H.prototype,`loadingMessage`,void 0),D([k({attribute:`start-typing-message`})],H.prototype,`startTypingMessage`,void 0),D([k({attribute:!1})],H.prototype,`fetchOptions`,void 0),D([j(`pk-popup`)],H.prototype,`popupElement`,void 0),D([j(`.control`)],H.prototype,`controlElement`,void 0),D([j(`.control-input`)],H.prototype,`controlInput`,void 0),D([j(`.popup-trigger`)],H.prototype,`popupTrigger`,void 0),D([j(`.create-option`)],H.prototype,`createOptionElement`,void 0),D([j(`.value-input`)],H.prototype,`input`,void 0),D([A()],H.prototype,`inputValue`,void 0),D([A()],H.prototype,`highlightedIndex`,void 0),D([A()],H.prototype,`createOptionHighlighted`,void 0),D([A()],H.prototype,`closing`,void 0),D([A()],H.prototype,`panelAnimated`,void 0),D([A()],H.prototype,`asyncLoading`,void 0),D([A()],H.prototype,`asyncError`,void 0),H=D([O(`pk-combobox`)],H);var So=d`
    @layer pk-component {
        .form-control {
            display: flex;
            flex-direction: column;
            gap: 0.375rem;
            width: 100%;
        }

        .form-control__header {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
            min-width: 0;
        }

        .form-control__label {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            margin: 0;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            font-weight: 700;
            line-height: var(--pk-line-height);
        }

        .form-control__instructions,
        .form-control__hint {
            margin: 0;
            color: var(--pk-color-gray-500);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .form-control__instructions:empty,
        .form-control__hint:empty {
            display: none;
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .form-control__input {
            display: flex;
            align-items: stretch;
            position: relative;
            width: 100%;
        }

        .form-control__start,
        .form-control__end {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
        }

        .form-control__start {
            margin-inline-end: 6px;
        }

        .form-control__end {
            margin-inline-start: 6px;
        }

        .icon-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: var(--pk-color-gray-500);
            cursor: pointer;
            line-height: 0;
        }

        .icon-button:focus-visible {
            outline: none;
            box-shadow: var(--pk-shadow-focus);
            border-radius: var(--pk-radius-sm);
        }

        .icon-button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;function Co(e,t){return t||(e.getAttribute(`hint`)??``)}function wo(e,t,n=!1){return!!t||e(`instructions`,n)||e(`hint`)}var To=e=>e??E,{I:Eo}=ze,Do=e=>e,Oo=e=>e.strings===void 0,ko=()=>document.createComment(``),Ao=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Eo(r.insertBefore(ko(),i),r.insertBefore(ko(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Do(e).nextSibling;Do(r).insertBefore(e,i),e=t}}}return n},jo=(e,t,n=e)=>(e._$AI(t,n),e),Mo={},No=(e,t=Mo)=>e._$AH=t,Po=e=>e._$AH,Fo=e=>{e._$AR(),e._$AA.remove()},Io=lt(class extends ut{constructor(e){if(super(e),e.type!==ct.PROPERTY&&e.type!==ct.ATTRIBUTE&&e.type!==ct.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Oo(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===T||t===E)return t;let n=e.element,r=e.name;if(e.type===ct.PROPERTY){if(t===n[r])return T}else if(e.type===ct.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return T}else if(e.type===ct.ATTRIBUTE&&n.getAttribute(r)===t+``)return T;return No(e),t}}),Lo=new Set([`button`,`submit`,`reset`,`checkbox`,`radio`,`file`,`image`,`hidden`]),Ro=`pk-implicit-submit`,zo=(e,t)=>{if(e.key!==`Enter`||e.defaultPrevented||e.isComposing||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return!1;let n=(t||`text`).toLowerCase();return!Lo.has(n)},Bo=e=>{let t=e.closest?.(`pk-dialog`);if(t){let e=t.querySelector(`form`);if(e)return e}let n=e.form;return n&&n.id===`main`?e.closest?.(`form`)===n?null:e.closest(`form`):n},Vo=(e,t,n)=>{if(e.disabled||e.readonly||!zo(t,n))return!1;let r=Bo(e);return!r||r.id===`main`?!1:(t.preventDefault(),t.stopPropagation(),r.dispatchEvent(new CustomEvent(Ro,{bubbles:!1,cancelable:!0})),!0)},Ho=d`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        :host([data-pk-group-orientation]) {
            display: flex;
            flex-direction: column;
            width: auto;
            flex: 0 1 auto;
            align-self: stretch;
        }

        :host([data-pk-group-orientation]) .form-control {
            gap: 0;
            height: 100%;
        }

        :host([data-pk-group-orientation]) .form-control__input {
            min-height: var(--pk-btn-height-default);
            height: 100%;
        }

        :host([data-pk-group-orientation]) .form-control__start,
        :host([data-pk-group-orientation]) .form-control__end {
            display: none;
        }

        :host([data-pk-group-orientation]) .form-control__input {
            width: 100%;
        }

        :host([data-pk-group-orientation]) .input {
            width: 100%;
        }

        :host([data-pk-group-orientation]) .input {
            min-height: var(--pk-btn-height-default);
            height: 100%;
        }

        :host([data-pk-group-orientation='vertical']) {
            width: 100%;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])) {
            margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])) {
            margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider][data-pk-group-join]) {
            margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-pk-group-join]) {
            margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider]) .form-control__input {
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
            box-shadow: none;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]) .form-control__input {
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
            box-shadow: none;
        }

        :host([data-pk-group-divider]) .form-control__input:focus-within,
        :host([data-pk-group-divider][data-state='focus-visible']) .form-control__input {
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]) .form-control__input:focus-within,
        :host([data-pk-group-orientation='vertical'][data-pk-group-divider][data-state='focus-visible']) .form-control__input {
            box-shadow: var(--pk-input-focus-shadow);
        }

        /* Chrome lives on the flex shell (part=base) so slot=start/end adornments sit
         * inside the border — same visual contract as pk-input-group / v1 InputGroup.
         * Height is content-sized (v1): padding-block + --pk-input-control-line-height + border.
         */
        .form-control__input {
            align-items: center;
            gap: 6px;
            padding-inline: 8px;
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius, var(--pk-radius-sm));
            background: var(--pk-input-bg);
            background-clip: padding-box;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .form-control__start,
        .form-control__end {
            margin: 0;
            color: var(--pk-color-gray-400);
            line-height: 0;
        }

        .form-control__start ::slotted(*),
        .form-control__end ::slotted(*) {
            display: block;
            max-width: 1.25rem;
            max-height: 1.25rem;
        }

        .input {
            display: block;
            width: 100%;
            margin: 0;
            /* v1 Input default: py-1.5 + text-sm (14px / 1.25rem lh) → 34px with border. */
            padding-block: 6px;
            padding-inline: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            /* Craft CP body / field value text. */
            color: var(--pk-color-gray-700);
            font: inherit;
            line-height: var(--pk-input-control-line-height, 1.25rem);
            appearance: none;
            box-sizing: border-box;
            outline: none;
        }

        .form-control__input .input {
            flex: 1 1 auto;
            min-width: 0;
        }

        .input::placeholder {
            color: var(--pk-input-placeholder-color, var(--pk-color-gray-400));
        }

        /*
         * Craft text:focus-visible only sets box-shadow (--focus-ring); resting border stays.
         * Do not also set border-color — --pk-input-focus-shadow already includes 0 0 0 1px,
         * so border-color + that ring reads as a double focus treatment.
         */
        :host(:not([invalid]):not(:state(user-invalid))) .form-control__input:focus-within,
        :host([data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .form-control__input {
            box-shadow: var(--pk-input-focus-shadow);
        }

        .form-control__input:has(.input:disabled) {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .input:disabled {
            cursor: not-allowed;
        }

        :host([invalid]) .form-control__input,
        :host(:state(user-invalid)) .form-control__input {
            border-color: var(--pk-color-rose-600);
        }

        /* Invalid + focus: rose ring (same token as select/combobox), not sky over rose border. */
        :host([invalid]) .form-control__input:focus-within,
        :host([invalid][data-state='focus-visible']) .form-control__input,
        :host(:state(user-invalid)) .form-control__input:focus-within {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([size='xs']) .form-control__input {
            gap: 4px;
            padding-inline: 6px;
        }

        :host([size='xs']) .input {
            padding-block: 4px;
            font-size: 11px;
        }

        :host([size='sm']) .form-control__input {
            gap: 4px;
            padding-inline: 8px;
        }

        :host([size='sm']) .input {
            padding-block: 4px;
            font-size: 12px;
        }

        :host([size='lg']) .form-control__input {
            gap: 8px;
            padding-inline: 12px;
        }

        :host([size='lg']) .input {
            padding-block: 8px;
            font-size: var(--pk-font-size-base);
        }

        :host([size='xl']) .form-control__input {
            gap: 8px;
            padding-inline: 16px;
        }

        :host([size='xl']) .input {
            padding-block: 10px;
            font-size: 16px;
        }

        /*
         * Mono face + 0.9× optical size + line-height 1.5. The taller line-height
         * offsets the smaller face so padding + content height stays aligned with
         * stock inputs (1.25rem ≈ 1.5 × 12.6px). Scale the size's face, not
         * the parent em, so xs/sm/xl mono stay proportional.
         */
        :host([mono]) .input {
            font-family: var(--pk-input-mono-font-family);
            font-size: calc(var(--pk-font-size-base) * 0.9);
            line-height: var(--pk-input-mono-line-height, 1.5);
        }

        :host([mono][size='xs']) .input {
            font-size: calc(11px * 0.9);
        }

        :host([mono][size='sm']) .input {
            font-size: calc(12px * 0.9);
        }

        :host([mono][size='lg']) .input {
            font-size: calc(var(--pk-font-size-base) * 0.9);
        }

        :host([mono][size='xl']) .input {
            font-size: calc(16px * 0.9);
        }

        /* Editable-table cells (v1): flush into the row — no chrome border/radius.
         * Prefer reflected fit-cell (Lit property); data-editable-table-input is a legacy alias.
         * Fill host → form-control → input so the control spans the full td.
         */
        :host([fit-cell]),
        :host([data-editable-table-input]) {
            display: block;
            height: 100%;
            min-height: 100%;
            box-sizing: border-box;
        }

        :host([fit-cell]) .form-control,
        :host([data-editable-table-input]) .form-control {
            height: 100%;
            min-height: 100%;
            gap: 0;
        }

        :host([fit-cell]) .form-control__input,
        :host([data-editable-table-input]) .form-control__input {
            height: 100%;
            min-height: 100%;
            flex: 1 1 auto;
            padding-inline: 0;
            border: none;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
        }

        :host([fit-cell]) .input,
        :host([data-editable-table-input]) .input {
            height: 100%;
            min-height: 100%;
        }

        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .form-control__input:focus-within,
        :host([fit-cell][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .form-control__input,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .form-control__input:focus-within,
        :host([data-editable-table-input][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .form-control__input {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .form-control__input,
        :host([fit-cell]:state(user-invalid)) .form-control__input,
        :host([data-editable-table-input][invalid]) .form-control__input,
        :host([data-editable-table-input]:state(user-invalid)) .form-control__input {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }

        :host([fit-cell][invalid]) .form-control__input:focus-within,
        :host([fit-cell][invalid][data-state='focus-visible']) .form-control__input,
        :host([fit-cell]:state(user-invalid)) .form-control__input:focus-within,
        :host([data-editable-table-input][invalid]) .form-control__input:focus-within,
        :host([data-editable-table-input][invalid][data-state='focus-visible']) .form-control__input,
        :host([data-editable-table-input]:state(user-invalid)) .form-control__input:focus-within {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:not([data-pk-group-divider])) .form-control__input {
            border-left-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-join]:not([data-pk-group-divider])) .form-control__input {
            border-top-width: 0;
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-divider]) .form-control__input {
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-divider]) .form-control__input {
            border-top-width: 1px;
            border-top-style: solid;
            border-top-color: var(--pk-btn-group-divider-color-outline, var(--pk-input-border-color));
        }

        :host([data-pk-group-orientation='horizontal'][data-pk-group-internal-trail]) .form-control__input {
            border-right-width: 0;
        }

        :host([data-pk-group-orientation='vertical'][data-pk-group-internal-trail]) .form-control__input {
            border-bottom-width: 0;
        }

        .clear-button {
            position: absolute;
            inset-inline-end: 6px;
            inset-block-start: 50%;
            translate: 0 -50%;
        }

        .form-control__input:has(.clear-button) .input {
            padding-inline-end: 20px;
        }
    }
`,U=class extends R{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new Kr(this,`instructions`,`hint`,`label`,`start`,`end`),this.inputId=$r(`pk-input`),this.type=`text`,this._value=null,this.defaultValue=null,this.size=`default`,this.label=``,this.instructions=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.invalid=!1,this.fitCell=!1,this.mono=!1,this.autofocus=!1,this.withLabel=!1,this.withInstructions=!1}static{this.styles=[So,at(),it(`.input`,`var(--pk-input-border-radius, var(--pk-radius-sm))`),st(`.input`),Ho]}static get validators(){return[...super.validators,Xr(),Gr()]}get value(){return this.valueHasChanged?this._value??``:this._value??this.defaultValue??``}set value(e){let t=e??``;this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){this.instructions=Co(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback()}syncFormValue(){this.setValue(this.value||``)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null}restoreFormState(e){typeof e==`string`&&(this.value=e)}formResetCallback(){this.valueHasChanged=!1,this._value=null,this.input&&(this.input.value=this.defaultValue??``),super.formResetCallback()}updated(e){(e.has(`value`)||e.has(`defaultValue`))&&this.setState(`blank`,!this.value),super.updated(e)}syncStandaloneAria(){if(!this.input)return;let e=!!this.label||this.hasSlotController.test(`label`,this.withLabel),t=wo((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions);Vr({control:this.input,labelId:`${this.inputId}-label`,instructionsId:`${this.inputId}-instructions`,hasLabel:e,hasInstructions:t,required:this.required,invalid:this.invalid||!this.internals.validity.valid})}hasLabelContent(){return!!this.label||this.hasSlotController.test(`label`,this.withLabel)}hasInstructionsContent(){return wo((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}select(){this.input?.select()}handleInput(){this.value=this.input.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}handleChange(e){this.value=this.input.value,e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleKeyDown(e){Vo(this,e,this.type)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.dispatchEvent(new ti),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.input.focus())}render(){let e=this.hasLabelContent(),t=this.hasInstructionsContent(),n=this.withClear&&!this.disabled&&!this.readonly&&this.value.length>0,r=this.hasSlotController.test(`start`),i=this.hasSlotController.test(`end`);return w`
            <div part="form-control" class="form-control">
                ${e||t?w`
                        <div part="header" class="form-control__header">
                            ${e?w`
                                    <label
                                        part="label"
                                        class="form-control__label"
                                        id=${`${this.inputId}-label`}
                                        for=${`${this.inputId}-control`}
                                    >
                                        <slot name="label">${this.label}</slot>
                                    </label>
                                `:E}

                            ${t?w`
                                    <p
                                        part="instructions"
                                        class="form-control__instructions"
                                        id=${`${this.inputId}-instructions`}
                                    >
                                        <slot name="instructions">${this.instructions}</slot>
                                        <slot name="hint"></slot>
                                    </p>
                                `:E}
                        </div>
                    `:E}

                <div part="base" class="form-control__input">
                    ${r?w`
                            <span part="start" class="form-control__start">
                                <slot name="start"></slot>
                            </span>
                        `:w`<slot name="start" hidden></slot>`}

                    <input
                        part="input"
                        class="input"
                        id=${e?`${this.inputId}-control`:E}
                        type=${this.type}
                        .value=${Io(this.value)}
                        placeholder=${this.placeholder||E}
                        pattern=${To(this.pattern)}
                        minlength=${To(this.minlength)}
                        maxlength=${To(this.maxlength)}
                        min=${To(this.min)}
                        max=${To(this.max)}
                        step=${To(this.step)}
                        autocomplete=${To(this.autocomplete)}
                        ?disabled=${this.disabled}
                        ?readonly=${this.readonly}
                        ?required=${this.required}
                        ?autofocus=${this.autofocus}
                        @input=${this.handleInput}
                        @change=${this.handleChange}
                        @keydown=${this.handleKeyDown}
                        @focus=${()=>this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}
                        @blur=${()=>this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}
                    />

                    ${n?w`
                            <button
                                part="clear-button"
                                class="icon-button clear-button"
                                type="button"
                                tabindex="-1"
                                aria-label="Clear"
                                @click=${this.handleClearClick}
                            >
                                <slot name="clear-icon">×</slot>
                            </button>
                        `:E}

                    ${i?w`
                            <span part="end" class="form-control__end">
                                <slot name="end"></slot>
                            </span>
                        `:w`<slot name="end" hidden></slot>`}
                </div>
            </div>
        `}};D([j(`input`)],U.prototype,`input`,void 0),D([k({reflect:!0})],U.prototype,`type`,void 0),D([A()],U.prototype,`value`,null),D([k({attribute:`value`,reflect:!0})],U.prototype,`defaultValue`,void 0),D([k({reflect:!0})],U.prototype,`size`,void 0),D([k()],U.prototype,`label`,void 0),D([k()],U.prototype,`instructions`,void 0),D([k({attribute:`with-clear`,type:Boolean})],U.prototype,`withClear`,void 0),D([k()],U.prototype,`placeholder`,void 0),D([k({type:Boolean,reflect:!0})],U.prototype,`readonly`,void 0),D([k({type:Boolean,reflect:!0})],U.prototype,`invalid`,void 0),D([k({type:Boolean,reflect:!0,attribute:`fit-cell`})],U.prototype,`fitCell`,void 0),D([k({type:Boolean,reflect:!0})],U.prototype,`mono`,void 0),D([k()],U.prototype,`pattern`,void 0),D([k({type:Number})],U.prototype,`minlength`,void 0),D([k({type:Number})],U.prototype,`maxlength`,void 0),D([k()],U.prototype,`min`,void 0),D([k()],U.prototype,`max`,void 0),D([k()],U.prototype,`step`,void 0),D([k()],U.prototype,`autocomplete`,void 0),D([k({type:Boolean,reflect:!0})],U.prototype,`autofocus`,void 0),D([k({attribute:`with-label`,type:Boolean})],U.prototype,`withLabel`,void 0),D([k({attribute:`with-instructions`,type:Boolean})],U.prototype,`withInstructions`,void 0),U=D([O(`pk-input`)],U);var Uo=d`
    @layer pk-component {
        :host {
            display: block;
            width: 100%;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
        }

        .textarea {
            display: block;
            width: 100%;
            min-height: 5rem;
            margin: 0;
            padding: 7px 10px;
            border: var(--pk-input-border);
            border-radius: var(--pk-textarea-border-radius, var(--pk-radius-md));
            background: var(--pk-input-bg);
            background-clip: padding-box;
            /* Craft CP body / field value text. */
            color: var(--pk-color-gray-700);
            font: inherit;
            line-height: 1.4;
            resize: vertical;
            appearance: none;
            box-sizing: border-box;
            outline: none;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .textarea::placeholder {
            color: var(--pk-input-placeholder-color, var(--pk-color-gray-400));
        }

        /* Craft: focus is box-shadow only — do not also flip border-color (double ring). */
        :host(:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host(:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea {
            box-shadow: var(--pk-input-focus-shadow);
        }

        .textarea:disabled {
            cursor: not-allowed;
            opacity: 0.5;
            background: var(--pk-color-gray-50);
        }

        :host([invalid]) .textarea,
        :host(:state(user-invalid)) .textarea {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .textarea:focus,
        :host([invalid]) .textarea:focus-visible,
        :host([invalid][data-state='focus-visible']) .textarea,
        :host(:state(user-invalid)) .textarea:focus,
        :host(:state(user-invalid)) .textarea:focus-visible {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        /* Editable-table cells (v1): flush into the row and fill cell height.
         * Chain height through form-control — percentage on .textarea alone
         * doesn't resolve when the wrapper sizes to content (rows / min-height). */
        :host([fit-cell]),
        :host([data-editable-table-input]) {
            display: block;
            height: 100%;
            min-height: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        :host([fit-cell]) .form-control,
        :host([data-editable-table-input]) .form-control {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 100%;
        }

        :host([fit-cell]) .textarea,
        :host([data-editable-table-input]) .textarea {
            flex: 1 1 auto;
            border: none;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            height: 100%;
            min-height: 0;
            max-height: 100%;
            /* Match text-cell inset (v1 py-1.5 / px-2). 0.5rem block padding +
             * line-height 1.4 overflows the 34px et cell and shows a scrollbar
             * even for empty / single-line notes. */
            padding: 0.375rem 0.5rem;
            line-height: 1.25;
            overflow-x: hidden;
            overflow-y: auto;
            resize: none;
        }

        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host([fit-cell]:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([fit-cell][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .textarea:focus,
        :host([data-editable-table-input]:not([invalid]):not(:state(user-invalid))) .textarea:focus-visible,
        :host([data-editable-table-input][data-state='focus-visible']:not([invalid]):not(:state(user-invalid))) .textarea {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .textarea,
        :host([fit-cell]:state(user-invalid)) .textarea,
        :host([fit-cell][invalid]) .textarea:focus,
        :host([fit-cell][invalid]) .textarea:focus-visible,
        :host([fit-cell]:state(user-invalid)) .textarea:focus,
        :host([fit-cell]:state(user-invalid)) .textarea:focus-visible,
        :host([data-editable-table-input][invalid]) .textarea,
        :host([data-editable-table-input]:state(user-invalid)) .textarea,
        :host([data-editable-table-input][invalid]) .textarea:focus,
        :host([data-editable-table-input][invalid]) .textarea:focus-visible,
        :host([data-editable-table-input]:state(user-invalid)) .textarea:focus,
        :host([data-editable-table-input]:state(user-invalid)) .textarea:focus-visible {
            border: none;
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }
    }
`,W=class extends R{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new Kr(this,`instructions`,`hint`,`label`),this.controlId=$r(`pk-textarea`),this.placeholder=``,this._value=null,this.defaultValue=null,this.size=`default`,this.label=``,this.instructions=``,this.readonly=!1,this.invalid=!1,this.fitCell=!1,this.withLabel=!1,this.withInstructions=!1}static{this.styles=[So,Uo]}static get validators(){return[...super.validators,Xr(),Gr()]}get value(){return this.valueHasChanged?this._value??``:this._value??this.defaultValue??``}set value(e){let t=e??``;this._value!==t&&(this.valueHasChanged=!0,this._value=t)}connectedCallback(){this.instructions=Co(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback()}syncFormValue(){this.setValue(this.value||``)}resetToDefaultValue(){this.valueHasChanged=!1,this._value=null}restoreFormState(e){typeof e==`string`&&(this.value=e)}formResetCallback(){this.valueHasChanged=!1,this._value=null,this.input&&(this.input.value=this.defaultValue??``),super.formResetCallback()}updated(e){(e.has(`value`)||e.has(`defaultValue`))&&this.setState(`blank`,!this.value),super.updated(e)}syncStandaloneAria(){if(!this.input)return;let e=this.hasLabelContent(),t=this.hasInstructionsContent();Vr({control:this.input,labelId:`${this.controlId}-label`,instructionsId:`${this.controlId}-instructions`,hasLabel:e,hasInstructions:t,required:this.required,invalid:this.invalid||!this.internals.validity.valid})}hasLabelContent(){return!!this.label||this.hasSlotController.test(`label`,this.withLabel)}hasInstructionsContent(){return wo((e,t)=>this.hasSlotController.test(e,t),this.instructions,this.withInstructions)}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}handleInput(){this.value=this.input.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}handleChange(e){this.value=this.input.value,e.stopPropagation(),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}render(){let e=this.hasLabelContent(),t=this.hasInstructionsContent();return w`
            <div part="form-control" class="form-control">
                ${e?w`
                        <label
                            part="label"
                            class="form-control__label"
                            id=${`${this.controlId}-label`}
                            for=${`${this.controlId}-control`}
                        >
                            <slot name="label">${this.label}</slot>
                        </label>
                    `:E}

                ${t?w`
                        <p
                            part="instructions"
                            class="form-control__instructions"
                            id=${`${this.controlId}-instructions`}
                        >
                            <slot name="instructions">${this.instructions}</slot>
                            <slot name="hint"></slot>
                        </p>
                    `:E}

                <textarea
                    part="textarea"
                    class="textarea"
                    id=${e?`${this.controlId}-control`:E}
                    rows=${To(this.fitCell?this.rows??1:this.rows)}
                    .value=${Io(this.value)}
                    placeholder=${this.placeholder||E}
                    maxlength=${To(this.maxlength)}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    @focus=${()=>this.dispatchEvent(new Event(`focus`,{bubbles:!0,composed:!0}))}
                    @blur=${()=>this.dispatchEvent(new Event(`blur`,{bubbles:!0,composed:!0}))}
                ></textarea>
            </div>
        `}};D([j(`textarea`)],W.prototype,`input`,void 0),D([k()],W.prototype,`placeholder`,void 0),D([A()],W.prototype,`value`,null),D([k({attribute:`value`,reflect:!0})],W.prototype,`defaultValue`,void 0),D([k({reflect:!0})],W.prototype,`size`,void 0),D([k()],W.prototype,`label`,void 0),D([k()],W.prototype,`instructions`,void 0),D([k({type:Boolean,reflect:!0})],W.prototype,`readonly`,void 0),D([k({type:Boolean,reflect:!0})],W.prototype,`invalid`,void 0),D([k({type:Boolean,reflect:!0,attribute:`fit-cell`})],W.prototype,`fitCell`,void 0),D([k({type:Number})],W.prototype,`rows`,void 0),D([k({type:Number,attribute:`max-length`})],W.prototype,`maxlength`,void 0),D([k({attribute:`with-label`,type:Boolean})],W.prototype,`withLabel`,void 0),D([k({attribute:`with-instructions`,type:Boolean})],W.prototype,`withInstructions`,void 0),W=D([O(`pk-textarea`)],W);var Wo=d`
    @layer pk-component {
        :host {
            display: inline-flex;
            vertical-align: middle;
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-sm);
            line-height: var(--pk-line-height);
            --pk-lightswitch-border-color: var(--pk-color-slate-800);
            --pk-lightswitch-track-off: var(--pk-color-gray-200);
            --pk-lightswitch-track-on: var(--pk-color-teal-550);
            --pk-lightswitch-track-on-border: var(--pk-color-teal-550-border);
            --pk-lightswitch-focus-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--pk-color-sky-600),
                0 0 6px 1px hsl(from var(--pk-color-sky-600) h s l / 0.8);
            --pk-lightswitch-invalid-shadow: 0 0 0 1px #fff, 0 0 0 2.5px var(--pk-color-rose-600);
            --pk-lightswitch-invalid-focus-shadow: 0 0 0 1px #fff, 0 0 0 3px var(--pk-color-rose-600),
                0 0 6px 1px hsl(from var(--pk-color-rose-600) h s l / 0.8);
        }

        :host([disabled]) {
            cursor: not-allowed;
        }

        .base {
            display: inline-flex;
            align-items: flex-start;
            gap: 0.5rem;
        }

        :host([disabled]) .base {
            opacity: 0.5;
        }

        .content {
            min-width: 0;
            cursor: pointer;
            user-select: none;
        }

        :host([disabled]) .content {
            cursor: not-allowed;
        }

        .label {
            display: block;
            /* Match checkbox / radio option labels (gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            line-height: 1rem;
        }

        .label:empty {
            display: none;
        }

        .instructions:empty,
        .hint:empty {
            display: none;
        }

        .switch {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 11px;
            background: var(--pk-lightswitch-track-off, #d8dee7);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-border-color, #667c92);
            cursor: pointer;
            user-select: none;
            appearance: none;
            transition: background-color 0.15s ease, box-shadow 0.15s ease;
        }

        .switch:focus {
            outline: none;
        }

        .switch:focus-visible {
            box-shadow: var(--pk-lightswitch-focus-shadow);
        }

        .switch[aria-checked='true'] {
            background: var(--pk-lightswitch-track-on, #0f9d8a);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border, #007d6f);
        }

        .switch[aria-checked='true']:focus-visible {
            box-shadow: var(--pk-lightswitch-focus-shadow);
        }

        :host([invalid]) .switch,
        :host(:state(user-invalid)) .switch,
        .switch[aria-invalid='true'] {
            box-shadow: var(--pk-lightswitch-invalid-shadow);
        }

        :host([invalid]) .switch[aria-checked='true'],
        :host(:state(user-invalid)) .switch[aria-checked='true'],
        .switch[aria-invalid='true'][aria-checked='true'] {
            background: var(--pk-lightswitch-track-on);
        }

        :host([invalid]) .switch:focus-visible,
        :host(:state(user-invalid)) .switch:focus-visible,
        .switch[aria-invalid='true']:focus-visible {
            box-shadow: var(--pk-lightswitch-invalid-focus-shadow);
        }

        .switch:disabled {
            cursor: not-allowed;
        }

        :host([size='default']) .switch {
            width: 34px;
            height: 22px;
        }

        :host([size='sm']) .switch {
            width: 28px;
            height: 18px;
            border-radius: 9px;
        }

        :host([size='xs']) .switch {
            width: 24px;
            height: 16px;
            border-radius: 8px;
        }

        :host([size='xxs']) .switch {
            width: 24px;
            height: 14px;
            border-radius: 7px;
        }

        .thumb {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--pk-color-white, #fff);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-border-color, #667c92);
            pointer-events: none;
            transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        :host([size='default']) .thumb {
            width: 18px;
            height: 18px;
            transform: translateX(2px);
        }

        :host([size='default']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 4px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='sm']) .thumb {
            width: 14px;
            height: 14px;
            transform: translateX(2px);
        }

        :host([size='sm']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 2px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='xs']) .thumb {
            width: 12px;
            height: 12px;
            transform: translateX(2px);
        }

        :host([size='xs']) .switch[aria-checked='true'] .thumb {
            transform: translateX(calc(100% - 2px));
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border);
        }

        :host([size='xxs']) .thumb {
            width: 10px;
            height: 10px;
            transform: translateX(2px);
        }

        :host([size='xxs']) .switch[aria-checked='true'] .thumb {
            transform: translateX(12px);
            box-shadow: inset 0 0 0 1px var(--pk-lightswitch-track-on-border, #007d6f);
        }

        .thumb svg {
            width: 14px;
            height: 14px;
            color: var(--pk-lightswitch-track-on);
            opacity: 0;
            transform: translateY(1px);
            transition: opacity 0.15s ease;
        }

        .switch[aria-checked='true'] .thumb svg {
            opacity: 1;
        }

        :host([size='sm']) .thumb svg {
            width: 10px;
            height: 10px;
        }

        :host([size='xs']) .thumb svg,
        :host([size='xxs']) .thumb svg {
            display: none;
        }

        .input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
            opacity: 0;
        }
    }
`,Go=w`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true">
        <path fill="currentColor" d="M557.5 192L534.9 214.6L278.9 470.6C266.4 483.1 246.1 483.1 233.6 470.6L105.6 342.6L83 320L128.3 274.7C129.6 276 172.3 318.7 256.3 402.7L489.7 169.3L512.3 146.7L557.6 192z" />
    </svg>
`,G=class extends R{constructor(...e){super(...e),this.assumeInteractionOn=[`change`],this.hasSlotController=new Kr(this,`instructions`,`hint`),this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.size=`default`,this.value=`on`,this.label=``,this.instructions=``}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=[So,Wo]}static get validators(){return[...super.validators,Xr(),Gr({validationProperty:`checked`})]}connectedCallback(){this.instructions=Co(this,this.instructions),super.connectedCallback()}get validationTarget(){return this.input}syncFormValue(){this.setFormValue(this.checked?this.value:null,this.checked?`on`:`off`)}resetToDefaultValue(){this.checked=this.defaultChecked}restoreFormState(e){e===`on`||e===this.value?this.checked=!0:this.checked=!1}updated(e){this.input&&e.has(`checked`)&&(this.input.checked=this.checked),super.updated(e)}click(){this.switchElement?.click()}focus(e){this.switchElement?.focus(e)}blur(){this.switchElement?.blur()}toggle(){this.disabled||(this.checked=!this.checked,this.emitCheckedChange())}handleKeyDown(e){let t=this.matches(`:dir(rtl)`);if(e.key===` `||e.key===`Enter`){e.preventDefault(),this.toggle();return}if(e.key===`ArrowLeft`){e.preventDefault(),this.checked=t,this.emitCheckedChange();return}e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!t,this.emitCheckedChange())}emitCheckedChange(){this.hasInteracted=!0,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleLabelClick(e){this.disabled||e.target===this.switchElement||this.toggle()}hasLabelContent(){if(this.label)return!0;let e=this.shadowRoot?.querySelector(`slot:not([name])`);return e?e.assignedNodes({flatten:!0}).some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e.nodeType===Node.ELEMENT_NODE):!1}render(){let e=wo((e,t)=>this.hasSlotController.test(e,t),this.instructions),t=this.hasLabelContent();return w`
            <div part="base" class="base">
                <button
                    part="switch"
                    class="switch"
                    type="button"
                    role="switch"
                    ?disabled=${this.disabled}
                    aria-checked=${this.checked?`true`:`false`}
                    aria-invalid=${this.invalid?`true`:E}
                    aria-describedby=${e?`instructions`:E}
                    aria-labelledby=${t?`label`:E}
                    @click=${this.toggle}
                    @keydown=${this.handleKeyDown}
                >
                    <span part="thumb" class="thumb">${Go}</span>
                </button>
                <input
                    part="input"
                    class="input"
                    type="checkbox"
                    tabindex="-1"
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?required=${this.required}
                    value=${this.value}
                    aria-invalid=${this.invalid?`true`:E}
                    @change=${e=>e.stopPropagation()}
                />
                ${t||e?w`
                        <div class="content" @click=${this.handleLabelClick}>
                            ${t?w`
                                    <span part="label" class="label" id="label">
                                        <slot></slot>${this.label}
                                    </span>
                                `:E}
                            ${e?w`
                                    <span part="instructions" class="instructions form-control__instructions" id="instructions">
                                        <slot name="instructions">${this.instructions}</slot>
                                        <slot name="hint"></slot>
                                    </span>
                                `:E}
                        </div>
                    `:E}
            </div>
        `}};D([k({type:Boolean,reflect:!0})],G.prototype,`checked`,void 0),D([k({attribute:`default-checked`,type:Boolean})],G.prototype,`defaultChecked`,void 0),D([k({type:Boolean,reflect:!0})],G.prototype,`invalid`,void 0),D([k({reflect:!0})],G.prototype,`size`,void 0),D([k()],G.prototype,`value`,void 0),D([k()],G.prototype,`label`,void 0),D([k()],G.prototype,`instructions`,void 0),D([j(`.input`)],G.prototype,`input`,void 0),D([j(`[part="switch"]`)],G.prototype,`switchElement`,void 0),G=D([O(`pk-lightswitch`)],G);var Ko={default:d`
        --pk-dropdown-item-padding-block: 8px;
        --pk-dropdown-item-padding-inline: 12px;
        --pk-dropdown-item-gap: 0.625rem;
        --pk-dropdown-item-font-size: var(--pk-font-size-base);
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 12px;
        --pk-dropdown-label-font-size: 13px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xs:d`
        --pk-dropdown-item-padding-block: 3px;
        --pk-dropdown-item-padding-inline: 8px;
        --pk-dropdown-item-gap: 0.375rem;
        --pk-dropdown-item-font-size: 12px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 10px;
        --pk-dropdown-label-padding-inline: 8px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 11px;
    `,sm:d`
        --pk-dropdown-item-padding-block: 4px;
        --pk-dropdown-item-padding-inline: 10px;
        --pk-dropdown-item-gap: 0.4375rem;
        --pk-dropdown-item-font-size: 13px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 12px;
        --pk-dropdown-label-padding-inline: 10px;
        --pk-dropdown-label-font-size: 11px;
        --pk-dropdown-details-font-size: 12px;
    `,lg:d`
        --pk-dropdown-item-padding-block: 10px;
        --pk-dropdown-item-padding-inline: 14px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 16px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 14px;
        --pk-dropdown-label-padding-inline: 14px;
        --pk-dropdown-label-font-size: 14px;
        --pk-dropdown-details-font-size: var(--pk-font-size-sm);
    `,xl:d`
        --pk-dropdown-item-padding-block: 12px;
        --pk-dropdown-item-padding-inline: 16px;
        --pk-dropdown-item-gap: 0.75rem;
        --pk-dropdown-item-font-size: 18px;
        --pk-dropdown-item-line-height: 1.5;
        --pk-dropdown-item-icon-size: 16px;
        --pk-dropdown-label-padding-inline: 16px;
        --pk-dropdown-label-font-size: 15px;
        --pk-dropdown-details-font-size: var(--pk-font-size-base);
    `},qo=d`
    @layer pk-component {
        :host {
            ${Ko.default}
        }

        :host([size='xs']) {
            ${Ko.xs}
        }

        :host([size='sm']) {
            ${Ko.sm}
        }

        :host([size='lg']) {
            ${Ko.lg}
        }

        :host([size='xl']) {
            ${Ko.xl}
        }
    }
`,Jo=d`
    @layer pk-component {
        .panel[data-size='default'],
        .submenu-panel[data-size='default'] {
            ${Ko.default}
        }

        .panel[data-size='xs'],
        .submenu-panel[data-size='xs'] {
            ${Ko.xs}
        }

        .panel[data-size='sm'],
        .submenu-panel[data-size='sm'] {
            ${Ko.sm}
        }

        .panel[data-size='lg'],
        .submenu-panel[data-size='lg'] {
            ${Ko.lg}
        }

        .panel[data-size='xl'],
        .submenu-panel[data-size='xl'] {
            ${Ko.xl}
        }
    }
`;d`
    ${qo}
    ${Jo}
`;var Yo=[_o,Jo,d`
    @layer pk-component {
        :host {
            display: block;
            position: relative;
            /*
             * Slotted label text inherits from this host (light DOM), not from
             * shadow .item — pin size-token metrics so Craft CP / Tailwind /
             * bare hosts all get the same item rhythm.
             */
            font-size: var(--pk-dropdown-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-dropdown-item-line-height, 1.5);
            color: var(--text-color, var(--pk-color-gray-700));
        }

        .item {
            display: flex;
            align-items: center;
            gap: var(--pk-dropdown-item-gap, 0.625rem);
            width: 100%;
            margin: 0;
            padding: var(--pk-dropdown-item-padding-block, 8px) var(--pk-dropdown-item-padding-inline, 12px);
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            font-size: var(--pk-dropdown-item-font-size, var(--pk-font-size-base));
            /* Explicit — do not let font:inherit re-leak page line-height. */
            line-height: var(--pk-dropdown-item-line-height, 1.5);
            font-weight: normal;
            text-align: left;
            white-space: nowrap;
            cursor: default;
            user-select: none;
            outline: none;
            box-sizing: border-box;
        }

        .item:hover:not([disabled]):not([aria-disabled='true']),
        :host([data-highlighted]) .item,
        :host([submenu-open]) .item {
            background: var(--pk-color-slate-100);
        }

        .item:focus-visible {
            background: var(--pk-color-slate-100);
        }

        .item[aria-disabled='true'] {
            pointer-events: none;
            opacity: 0.5;
        }

        .label {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .prefix {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-dropdown-item-icon-size, 12px);
            height: var(--pk-dropdown-item-icon-size, 12px);
            line-height: 0;
        }

        .prefix--empty {
            display: none;
        }

        .prefix ::slotted(*) {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: var(--pk-dropdown-item-icon-size, 12px);
            height: var(--pk-dropdown-item-icon-size, 12px);
            /* Kill pk-icon text-baseline nudge inside the padded flex row. */
            vertical-align: 0;
        }

        .prefix ::slotted(svg),
        .prefix ::slotted(*) svg,
        .prefix ::slotted(.pk-dropdown-item__prefix-icon) {
            display: block;
            width: var(--pk-dropdown-item-icon-size, 12px) !important;
            height: var(--pk-dropdown-item-icon-size, 12px) !important;
            max-width: var(--pk-dropdown-item-icon-size, 12px);
            max-height: var(--pk-dropdown-item-icon-size, 12px);
            flex-shrink: 0;
            pointer-events: none;
        }

        .details {
            margin-left: auto;
            color: var(--pk-color-gray-500);
            font-size: var(--pk-dropdown-details-font-size, var(--pk-font-size-sm));
            letter-spacing: 0.04em;
        }

        .details:empty {
            display: none;
        }

        .check {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: 12px;
            height: 12px;
            color: var(--pk-color-gray-700);
        }

        .check svg {
            display: block;
            width: 12px;
            height: 12px;
            flex-shrink: 0;
            pointer-events: none;
        }

        .submenu-icon {
            display: inline-flex;
            flex: 0 0 auto;
            align-items: center;
            justify-content: center;
            width: 1rem;
            color: var(--pk-color-gray-700);
        }

        .submenu-icon svg {
            display: block;
            width: 1em;
            height: 1em;
            flex-shrink: 0;
            pointer-events: none;
        }

        .check {
            opacity: 0;
        }

        :host([checked]) .check {
            opacity: 1;
        }

        :host([type='checkbox']) .check,
        :host([type='radio']) .check {
            margin-left: auto;
        }

        :host([type='checkbox'][checked]) .check,
        :host([type='radio'][checked]) .check {
            opacity: 1;
        }

        .submenu-icon:empty {
            display: none;
        }

        :host([destructive]) .item {
            color: var(--pk-color-error);
        }

        :host([destructive]) .item:hover:not([disabled]):not([aria-disabled='true']),
        :host([destructive]) .item:focus-visible {
            color: var(--pk-color-error);
        }

        .submenu-panel {
            width: max-content;
            min-width: 8rem;
            overflow: hidden;
            padding: 4px 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            /* Match root menu panel — Craft body text, not gray-900. */
            color: var(--text-color, var(--pk-color-gray-700));
        }

        .submenu-panel ::slotted(pk-dropdown-item),
        .submenu-panel ::slotted(pk-dropdown-separator),
        .submenu-panel ::slotted(pk-dropdown-label) {
            display: block;
        }

        .submenu-panel[hidden] {
            display: none !important;
        }
    }
`],Xo,Zo=F(jt),Qo=F(Pt),K=class extends Ye{static{Xo=this}constructor(...e){super(...e),this.value=``,this.type=`normal`,this.radioGroup=``,this.disabled=!1,this.destructive=!1,this.checked=!1,this.submenuOpen=!1,this.active=!1,this.submenuAnimated=!1,this.hasSlotController=new Kr(this,`submenu`,`details`,`start`,`prefix`),this.handleMouseEnter=()=>{!this.hasSubmenu()||this.disabled||(this.notifyParentOfOpening(),this.submenuOpen=!0)},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}}static{this.styles=Yo}connectedCallback(){super.connectedCallback(),this.syncRole(),this.syncSubmenuAria(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseenter`,this.handleMouseEnter)}disconnectedCallback(){this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseenter`,this.handleMouseEnter),this.closeSubmenu(),super.disconnectedCallback()}updated(e){(e.has(`type`)||e.has(`checked`))&&this.syncRole(),(e.has(`submenuOpen`)||e.size===0)&&this.syncSubmenuAria(),e.has(`submenuOpen`)&&(this.submenuOpen?this.ensureSubmenuSurface():this.submenuAnimated=!1)}hasSubmenu(){return this.hasSlotController.test(`submenu`)}syncSubmenuAria(){let e=this.hasSubmenu();e?this.setAttribute(`aria-haspopup`,`menu`):this.removeAttribute(`aria-haspopup`),this.setAttribute(`aria-expanded`,e&&this.submenuOpen?`true`:`false`)}focusControl(){this.shadowRoot?.querySelector(`.item`)?.focus({preventScroll:!0})}focus(e){let t=this.shadowRoot?.querySelector(`.item`);if(t){t.focus(e);return}super.focus(e)}get submenuElement(){return this.submenuPanelElement??null}closeSubmenu(){this.submenuAnimated=!1,this.submenuOpen=!1}openSubmenu(){!this.hasSubmenu()||this.disabled||!this.isConnected||(this.notifyParentOfOpening(),this.submenuOpen=!0)}notifyParentOfOpening(){this.dispatchEvent(new CustomEvent(`pk-submenu-open`,{bubbles:!0,composed:!0,detail:{item:this}}));let e=this.parentElement;if(e)for(let t of e.children)t!==this&&t instanceof Xo&&t.getAttribute(`slot`)===this.getAttribute(`slot`)&&t.submenuOpen&&(t.submenuOpen=!1)}ensureSubmenuSurface(){!this.hasSubmenu()||this.disabled||(this.submenuAnimated=!0,this.updateComplete.then(()=>{!this.submenuOpen||!this.submenuPanelElement||(this.submenuPanelElement.hidden=!1,ii(this.submenuPanelElement,`right-start`),ai(this.submenuPopupElement,`right-start`).then(e=>{ii(this.submenuPanelElement,e)}))}))}syncRole(){if(this.type===`checkbox`){this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`);return}if(this.type===`radio`){this.setAttribute(`role`,`menuitemradio`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`);return}this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopImmediatePropagation();return}this.hasSubmenu()&&(e.preventDefault(),this.openSubmenu())}render(){let e=this.hasSubmenu(),t=this.type===`checkbox`||this.type===`radio`,n=this.hasSlotController.test(`start`)||this.hasSlotController.test(`prefix`);return w`
            <button
                part="item"
                type="button"
                class="item"
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:E}
                @click=${this.handleClick}
            >
                <span
                    part="prefix"
                    class=${n?`prefix`:`prefix prefix--empty`}
                >
                    <slot name="start"></slot>
                    <slot name="prefix"></slot>
                </span>
                <span class="label"><slot></slot></span>
                <span class="details"><slot name="details"></slot></span>
                ${t?w`<span class="check" aria-hidden="true">${N(Zo)}</span>`:E}
                ${e?w`<span class="submenu-icon" aria-hidden="true">${N(Qo)}</span>`:E}
            </button>
            ${e?w`
                <pk-popup
                    .active=${this.submenuOpen}
                    .anchor=${this}
                    placement="right-start"
                    .distance=${0}
                    .skidding=${-4}
                    flip
                    shift
                    hover-bridge
                    style="--pk-popup-z-index: 1001"
                >
                    <div
                        part="submenu"
                        class="submenu-panel pk-popup-content"
                        role="menu"
                        data-size=${$o(this)}
                        ?hidden=${!this.submenuOpen}
                        data-open=${this.submenuAnimated?``:E}
                        aria-orientation="vertical"
                    >
                        <slot name="submenu"></slot>
                    </div>
                </pk-popup>
            `:E}
        `}};D([k()],K.prototype,`value`,void 0),D([k({reflect:!0})],K.prototype,`type`,void 0),D([k({attribute:`radio-group`})],K.prototype,`radioGroup`,void 0),D([k({type:Boolean,reflect:!0})],K.prototype,`disabled`,void 0),D([k({type:Boolean,reflect:!0})],K.prototype,`destructive`,void 0),D([k({type:Boolean,reflect:!0})],K.prototype,`checked`,void 0),D([k({attribute:`submenu-open`,type:Boolean,reflect:!0})],K.prototype,`submenuOpen`,void 0),D([k({type:Boolean})],K.prototype,`active`,void 0),D([A()],K.prototype,`submenuAnimated`,void 0),D([j(`.submenu-panel`)],K.prototype,`submenuPanelElement`,void 0),D([j(`pk-popup`)],K.prototype,`submenuPopupElement`,void 0),K=Xo=D([O(`pk-dropdown-item`)],K);function $o(e){let t=e.parentElement?.getAttribute(`data-size`);if(t===`xs`||t===`sm`||t==="default"||t===`lg`||t===`xl`)return t;let n=e.closest(`pk-dropdown-menu`)?.getAttribute(`size`);return n===`xs`||n===`sm`||n===`lg`||n===`xl`?n:`default`}var es=[at(),qo,Jo,d`
        @layer pk-component {
            /* Standalone: keep a real box so the trigger is not a flex-stretched
               child of the page (display:contents flattened pk-button to full card width).
               Button groups override below — same as legacy + React MenuButton inline-flex wrap. */
            :host {
                display: inline-block;
                position: relative;
                width: fit-content;
                max-width: 100%;
                align-self: flex-start;
                vertical-align: middle;
            }

            :host([data-pk-group-orientation]) {
                display: inline-flex;
                vertical-align: middle;
                flex: 0 0 auto;
                width: auto;
                max-width: none;
                align-self: auto;
            }

            /* Belt-and-suspenders if a parent still flattens layout onto the trigger. */
            ::slotted([slot='trigger']) {
                width: fit-content;
                max-width: 100%;
                flex: 0 0 auto;
                align-self: flex-start;
            }

            :host([data-pk-group-orientation]) ::slotted([slot='trigger']) {
                --pk-bg-start-start-radius: inherit;
                --pk-bg-start-end-radius: inherit;
                --pk-bg-end-start-radius: inherit;
                --pk-bg-end-end-radius: inherit;
                align-self: auto;
                max-width: none;
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]) {
                margin-inline-start: var(--pk-bg-horizontal-indent, 0);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]) {
                margin-block-start: var(--pk-bg-vertical-indent, 0);
            }

            :host([data-pk-group-orientation='horizontal'][data-pk-group-join]:has([slot='trigger'][variant='outline'], [slot='trigger'][variant='dashed'])) {
                margin-inline-start: var(--pk-bg-horizontal-indent-outlined, 0);
            }

            :host([data-pk-group-orientation='vertical'][data-pk-group-join]:has([slot='trigger'][variant='outline'], [slot='trigger'][variant='dashed'])) {
                margin-block-start: var(--pk-bg-vertical-indent-outlined, 0);
            }

            /* Menu panel — hug content; do not stretch to trigger/anchor width. */
            .panel {
                display: flex;
                flex-direction: column;
                width: max-content;
                min-width: 8rem;
                margin: 0;
                overflow: auto;
                padding: 4px 0;
                border: 0;
                border-radius: var(--pk-radius-md);
                background: var(--pk-color-white);
                box-shadow: var(--pk-shadow-popup);
                /* v1 DropdownMenuItem had no face color — inherited Craft body
                 * (--text-color ≈ gray-700). Do not force gray-900 (too dark). */
                color: var(--text-color, var(--pk-color-gray-700));
                outline: none;
                text-align: start;
                user-select: none;
                /* Match v1 Base UI: popup writes --pk-transform-origin from the
                 * anchor center on the connecting edge (e.g. top-right for
                 * bottom-end). Keyword edge centers made end-aligned menus
                 * scale from the middle of the panel. */
                transform-origin: var(--pk-transform-origin, top);
            }

            .panel.show {
                animation: pk-dropdown-menu-show 100ms ease;
            }

            .panel.hide {
                animation: pk-dropdown-menu-show 100ms ease reverse;
            }

            .panel[hidden] {
                display: none !important;
            }

            ::slotted(pk-dropdown-item),
            ::slotted(pk-dropdown-separator),
            ::slotted(pk-dropdown-label),
            .panel > pk-dropdown-item,
            .panel > pk-dropdown-separator,
            .panel > pk-dropdown-label {
                display: block;
            }

            ::slotted([data-menu-item]) {
                display: flex;
                align-items: center;
                gap: 0.625rem;
                width: 100%;
                margin: 0;
                padding: 8px 12px;
                border: 0;
                background: transparent;
                color: inherit;
                font: inherit;
                font-size: var(--pk-font-size-base);
                text-align: left;
                white-space: nowrap;
                cursor: default;
                user-select: none;
                outline: none;
                box-sizing: border-box;
            }

            ::slotted([data-menu-item]:hover:not([disabled])) {
                background: var(--pk-color-slate-100);
            }

            ::slotted([data-menu-item]:focus-visible) {
                background: var(--pk-color-slate-100);
            }

            ::slotted([data-menu-item][disabled]) {
                pointer-events: none;
                opacity: 0.5;
            }

            ::slotted(pk-dropdown-item[destructive]),
            ::slotted([data-destructive]) {
                color: var(--pk-color-error);
            }

            ::slotted([data-menu-separator]) {
                display: block;
                height: 1px;
                margin: 4px 0;
                background: var(--pk-color-slate-200);
                border: 0;
                padding: 0;
            }
        }

        /* Outside @layer so constructed stylesheets resolve the name reliably. */
        @keyframes pk-dropdown-menu-show {
            from {
                scale: 0.9;
                opacity: 0;
            }

            to {
                scale: 1;
                opacity: 1;
            }
        }
    `],ts=new Set,q=class extends Ye{constructor(...e){super(...e),this.open=!1,this.size=`default`,this.placement=`bottom-start`,this.sideOffset=4,this.distance=4,this.skidding=0,this.for=``,this.userTypedQuery=``,this.userTypedTimeout=0,this.openSubmenuStack=[],this.openedByKeyboard=!1,this.triggerElement=null,this.handleMenuClick=e=>{let t=this.resolveMenuItem(e);if(!(!t||t.disabled)){if(t.hasSubmenu()){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.openSubmenu()),e.stopPropagation();return}this.makeSelection(t)}},this.handleSubmenuOpening=e=>{let t=e.detail?.item;t instanceof K&&(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t))},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement,r=e.composedPath(),i=t.matches(`:hover`),a=!!n.matches(`:hover`),o=i||r.some(e=>e===t),s=a||r.some(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===n);!o&&!s&&window.setTimeout(()=>{!i&&!a&&(t.submenuOpen=!1)},100)},this.handleTriggerClick=e=>{let t=this.getTrigger();!t||!e.composedPath().includes(t)||(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open)},this.handleExternalTriggerClick=e=>{e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!1,this.open=!this.open},this.handleTriggerKeyDown=e=>{let t=this.getTrigger();!t||!e.composedPath().includes(t)||this.open||(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),e.stopPropagation(),this.openedByKeyboard=!0,this.open=!0)},this.handleDocumentKeyDown=e=>{let t=this.isRtl();if(e.key===`Escape`&&this.open&&gr(this)){e.preventDefault(),e.stopPropagation(),this.open=!1,this.getTrigger()?.focus({preventScroll:!0});return}if(!this.open)return;let n=[...Zr()].find(e=>e.localName===`pk-dropdown-item`),r=n?.localName===`pk-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a&&i?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu()){e.preventDefault(),e.stopPropagation(),this.closeSiblingSubmenus(s),s.openSubmenu(),this.addToSubmenuStack(s),window.setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&this.setActiveItem(e,e[0])},0);return}if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,window.setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`&&t.parentElement instanceof K?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0));return}if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`){this.open=!1;return}if(e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===` `&&this.userTypedQuery===``)){window.clearTimeout(this.userTypedTimeout),this.userTypedTimeout=window.setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key;let t=this.userTypedQuery.trim().toLowerCase();l=o.find(e=>(e.textContent||``).trim().toLowerCase().startsWith(t))}if(l){e.preventDefault(),e.stopPropagation(),this.setActiveItem(o,l);return}(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu()?(this.closeSiblingSubmenus(s),s.openSubmenu(),this.addToSubmenuStack(s),window.setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&this.setActiveItem(e,e[0])},0)):this.makeSelection(s))},this.handleDocumentPointerDown=e=>{let t=e.composedPath(),n=this.getTrigger();t.some(e=>e===this||e===n)||(this.open=!1)}}static{this.styles=es}get panelElement(){return this.menuElement??null}get popup(){return this.popupElement??null}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleTriggerClick,!0),this.addEventListener(`keydown`,this.handleTriggerKeyDown)}firstUpdated(){let e=()=>{if(this.for){this.resolveExternalTrigger();return}this.syncSlottedTrigger()};queueMicrotask(e),requestAnimationFrame(e)}disconnectedCallback(){window.clearTimeout(this.userTypedTimeout),this.removeEventListener(`click`,this.handleTriggerClick,!0),this.removeEventListener(`keydown`,this.handleTriggerKeyDown),this.unbindTrigger(this.triggerElement),this.triggerElement=null,this.closeAllSubmenus(),this.popupElement&&(this.popupElement.active=!1),this.menuElement?.classList.remove(`show`,`hide`),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),hr(this),ts.delete(this),super.disconnectedCallback()}async updated(e){if(super.updated(e),e.has(`for`)&&this.resolveExternalTrigger(),e.has(`open`)&&this.syncTriggerExpanded(),!e.has(`open`))return;let t=e.get(`open`);t!==this.open&&(t===void 0&&this.open===!1||(this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu(`unknown`))))}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`pk-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=((e.shadowRoot?.querySelector(`slot[name="submenu"]`))?.assignedElements({flatten:!0})??[...e.children].filter(e=>e.getAttribute(`slot`)===`submenu`)).filter(e=>e.localName===`pk-dropdown-item`);return t?n:n.filter(e=>!e.disabled)}getTrigger(){return this.for?Qa(this,this.for)??this.triggerElement:this.querySelector(`[slot="trigger"]`)??this.triggerElement}getAnchor(){return this.getTrigger()??``}resolveExternalTrigger(){this.unbindTrigger(this.triggerElement),this.triggerElement=this.for?Qa(this,this.for):null,this.bindTrigger(this.triggerElement),this.requestUpdate()}onTriggerSlotChange(e){if(this.for)return;let[t]=e.target.assignedElements({flatten:!0});this.unbindTrigger(this.triggerElement),this.triggerElement=t??null,this.bindTrigger(this.triggerElement),this.requestUpdate()}syncSlottedTrigger(){let e=this.renderRoot.querySelector(`slot[name="trigger"]`);e&&this.onTriggerSlotChange({target:e})}bindTrigger(e){e&&(e.setAttribute(`aria-haspopup`,`menu`),this.for&&(e.addEventListener(`click`,this.handleExternalTriggerClick),e.addEventListener(`keydown`,this.handleTriggerKeyDown)),this.syncTriggerExpanded())}unbindTrigger(e){e?.removeEventListener(`click`,this.handleExternalTriggerClick),e?.removeEventListener(`keydown`,this.handleTriggerKeyDown)}syncTriggerExpanded(){this.getTrigger()?.setAttribute(`aria-expanded`,this.open?`true`:`false`)}closeAfterSelect(e=`api`){this.open=!1}makeSelection(e){let t=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked),e.type===`radio`&&!e.checked&&(e.checked=!0);let n={value:e.value,type:e.type,checked:e.checked,radioGroup:e.radioGroup};e.dispatchEvent(new CustomEvent(`pk-select`,{detail:n,bubbles:!1,composed:!1,cancelable:!0}));let r=new CustomEvent(`pk-select`,{detail:n,bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(r),r.defaultPrevented||(this.open=!1,t?.focus({preventScroll:!0}))}resolveMenuItem(e){let t=e.target;if(t instanceof K)return t;if(t instanceof Element){let e=t.closest(`pk-dropdown-item`);if(e instanceof K)return e}return e.composedPath().find(e=>e instanceof K)??null}whenClosed(){return this.open?new Promise(e=>{this.addEventListener(`pk-after-hide`,()=>{this.popupElement.stop().then(()=>e())},{once:!0})}):this.popupElement?.active?this.popupElement.stop():Promise.resolve()}forceDismissCleanup(){this.open=!1,this.popupElement.active=!1,this.menuElement?.classList.remove(`show`,`hide`),this.closeAllSubmenus(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),hr(this),ts.delete(this)}isRtl(){return getComputedStyle(this).direction===`rtl`}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1,e.active=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`pk-dropdown-item:not([slot="submenu"])`);(t instanceof K?this.getSubmenuItems(t,!0):this.getItems(!0)).forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}setActiveItem(e,t){e.forEach(e=>{e.active=e===t,e===t?e.setAttribute(`data-highlighted`,``):e.removeAttribute(`data-highlighted`)}),t.focus({preventScroll:!0}),t.scrollIntoView({block:`nearest`})}async showMenu(){if(!this.popupElement||!this.menuElement)return;this.for&&!this.triggerElement?.isConnected&&this.resolveExternalTrigger();let e=new Dr;if(!this.dispatchEvent(e)){this.open=!1;return}if(this.popupElement.active&&(this.popupElement.active=!1,this.menuElement.classList.remove(`show`,`hide`),await this.updateComplete),ts.forEach(e=>{e!==this&&(e.open=!1)}),this.popupElement.active=!0,this.open=!0,ts.add(this),mr(this),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),await this.updateComplete,await ai(this.popupElement,this.placement,100,{requireEvent:!0}),!this.open){this.popupElement.active=!1,ts.delete(this),hr(this),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove);return}this.menuElement.classList.remove(`hide`),await jr(this.menuElement,`show`);let t=this.getItems();t.length>0&&(this.openedByKeyboard?this.setActiveItem(t,t[0]):(t.forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),this.menuElement.focus({preventScroll:!0}))),this.openedByKeyboard=!1,this.dispatchEvent(new Or),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))}async hideMenu(e){if(!this.popupElement||!this.menuElement)return;let t=new kr(e);if(!this.dispatchEvent(t)){this.open=!0;return}this.open=!1,ts.delete(this),hr(this),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.userTypedQuery=``,window.clearTimeout(this.userTypedTimeout),this.getItems(!0).forEach(e=>{e.active=!1,e.removeAttribute(`data-highlighted`)}),this.menuElement.classList.remove(`show`),await jr(this.menuElement,`hide`),this.popupElement.active=!1,this.dispatchEvent(new Ar),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0}))}render(){let e=this.hasUpdated?this.popupElement?.active:this.open;return w`
            <pk-popup
                .anchor=${this.for?this.getAnchor():``}
                placement=${this.placement}
                .distance=${this.distance||this.sideOffset}
                .skidding=${this.skidding}
                ?active=${e}
                flip
                shift
                .shiftPadding=${10}
                auto-size="vertical"
                .autoSizePadding=${10}
            >
                <slot
                    name="trigger"
                    slot="anchor"
                    @slotchange=${this.onTriggerSlotChange}
                ></slot>

                <div
                    id="menu"
                    part="panel"
                    class="panel"
                    role="menu"
                    tabindex="-1"
                    aria-orientation="vertical"
                    data-size=${this.size}
                    @click=${this.handleMenuClick}
                    @pk-submenu-open=${this.handleSubmenuOpening}
                >
                    <slot></slot>
                </div>
            </pk-popup>
        `}};D([k({type:Boolean,reflect:!0})],q.prototype,`open`,void 0),D([k({reflect:!0})],q.prototype,`size`,void 0),D([k({reflect:!0})],q.prototype,`placement`,void 0),D([k({attribute:`side-offset`,type:Number})],q.prototype,`sideOffset`,void 0),D([k({type:Number})],q.prototype,`distance`,void 0),D([k({type:Number})],q.prototype,`skidding`,void 0),D([k({reflect:!0})],q.prototype,`for`,void 0),D([j(`slot:not([name])`)],q.prototype,`defaultSlot`,void 0),D([j(`#menu`)],q.prototype,`menuElement`,void 0),D([j(`pk-popup`)],q.prototype,`popupElement`,void 0),q=D([O(`pk-dropdown-menu`)],q);var ns=d`
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            /* Former lg min-width — default now matches input default chrome. */
            min-width: 6.75rem;
            font-family: var(--pk-font-family);
            vertical-align: middle;
        }

        :host([size='xs']) {
            min-width: 5.5rem;
        }

        :host([size='sm']) {
            min-width: 6.125rem;
        }

        :host([size='lg']),
        :host([size='xl']) {
            min-width: 7.375rem;
        }

        :host([fit-cell]) {
            display: block;
            width: 100%;
            min-width: 0;
            max-width: 100%;
            height: 100%;
        }

        :host([fit-cell]) .root {
            display: block;
            width: 100%;
            height: 100%;
        }

        .root {
            position: relative;
            display: inline-block;
            width: 100%;
        }

        .swatch {
            position: absolute;
            top: 50%;
            left: 0.5rem;
            z-index: 2;
            width: 1.25rem;
            height: 1.25rem;
            transform: translateY(-50%);
            border-radius: var(--pk-radius-sm);
        }

        :host([size='xs']) .swatch {
            left: 0.375rem;
            width: 1rem;
            height: 1rem;
        }

        :host([size='sm']) .swatch {
            left: 0.375rem;
            width: 1.25rem;
            height: 1.25rem;
        }

        :host([size='lg']) .swatch,
        :host([size='xl']) .swatch {
            left: 0.5rem;
            width: 1.5rem;
            height: 1.5rem;
        }

        :host([fit-cell]) .swatch {
            left: 0.5rem;
            width: 1rem;
            height: 1rem;
        }

        .swatch-preview {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.15);
        }

        .swatch-preview.is-transparent {
            background-color: #fff;
            background-image:
                linear-gradient(45deg, #d1d5db 25%, transparent 25%),
                linear-gradient(-45deg, #d1d5db 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #d1d5db 75%),
                linear-gradient(-45deg, transparent 75%, #d1d5db 75%);
            background-size: 8px 8px;
            background-position: 0 0, 0 4px, 4px -4px, -4px 0;
        }

        .swatch-picker {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: 0;
            opacity: 0;
            cursor: pointer;
            appearance: none;
        }

        .swatch-picker:disabled {
            cursor: not-allowed;
        }

        .hash {
            position: absolute;
            top: 50%;
            left: 2.125rem;
            z-index: 1;
            transform: translateY(-50%);
            color: var(--pk-color-gray-300);
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-font-size-mono, 0.9em);
            line-height: var(--pk-line-height-mono, 1.5);
            pointer-events: none;
            user-select: none;
        }

        :host([size='xs']) .hash {
            left: 1.625rem;
        }

        :host([size='sm']) .hash {
            left: 2rem;
        }

        :host([size='lg']) .hash,
        :host([size='xl']) .hash {
            left: 2.5rem;
        }

        :host([fit-cell]) .hash {
            left: 1.75rem;
        }

        .hex-input {
            display: block;
            width: 100%;
            /* Former lg — matches pk-input default chrome (~34px). */
            height: 2.125rem;
            margin: 0;
            padding-inline: 3rem 0.75rem;
            border: var(--pk-input-border);
            border-radius: var(--pk-input-border-radius);
            background: var(--pk-input-bg);
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-font-size-mono, 0.9em);
            line-height: var(--pk-line-height-mono, 1.5);
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease;
        }

        :host([size='xs']) .hex-input {
            height: 1.625rem;
            padding-inline: 2.25rem 0.625rem;
        }

        :host([size='sm']) .hex-input {
            height: 1.875rem;
            padding-inline: 2.75rem 0.75rem;
        }

        :host([size='lg']) .hex-input,
        :host([size='xl']) .hex-input {
            height: 2.375rem;
            padding-inline: 3.25rem 0.875rem;
        }

        :host([fit-cell]) .hex-input {
            width: 100%;
            max-width: 100%;
            height: 100%;
            padding-inline: 2.25rem 0.5rem;
            border: 0;
            border-radius: 0;
            background: transparent;
        }

        .hex-input:focus,
        .hex-input:focus-visible {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host([invalid]) .hex-input:focus,
        :host([invalid]) .hex-input:focus-visible {
            border-color: var(--pk-color-rose-600);
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([fit-cell]:not([invalid])) .hex-input:focus,
        :host([fit-cell]:not([invalid])) .hex-input:focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200);
        }

        :host([fit-cell][invalid]) .hex-input,
        :host([fit-cell][invalid]) .hex-input:focus,
        :host([fit-cell][invalid]) .hex-input:focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600);
        }

        .hex-input:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        :host([invalid]) .hex-input {
            border-color: var(--pk-color-rose-600);
        }

        :host([disabled]) .swatch {
            opacity: 0.5;
        }
    }
`,rs=`#000000`;function is(e){return String(e||``).replace(/^#/,``).replace(/[^0-9a-fA-F]/g,``).slice(0,6).toLowerCase()}function as(e){return e.length===3||e.length===6}function os(e){return e.length===3?e.split(``).map(e=>`${e}${e}`).join(``):e}function ss(e){return e.length===6?`#${e}`:e.length===3?`#${os(e)}`:rs}var cs=class extends R{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.size=`default`,this.fitCell=!1,this.readonly=!1,this.invalid=!1,this.value=``,this.defaultValue=``,this.ariaLabel=null,this.hexValue=``}static{this.styles=ns}static get validators(){return[...super.validators,Xr(),Gr()]}connectedCallback(){super.connectedCallback(),this.syncHexFromValue()}willUpdate(e){e.has(`value`)&&this.syncHexFromValue(),super.willUpdate(e)}syncHexFromValue(){this.hexValue=is(this.value)}get validationTarget(){return this.input}syncFormValue(){let e=this.hexValue?`#${this.hexValue}`:``;this.setFormValue(e,e)}resetToDefaultValue(){this.value=this.defaultValue,this.hexValue=is(this.defaultValue)}restoreFormState(e){typeof e==`string`&&(this.value=e,this.hexValue=is(e))}emitChange(){let e=this.hexValue?`#${this.hexValue}`:``;this.value=e,this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}handleHexInput(e){if(this.disabled||this.readonly)return;let t=is(e.target.value);this.hexValue=t,this.emitChange()}handlePickerChange(e){if(this.disabled||this.readonly)return;let t=is(e.target.value);this.hexValue=t,this.emitChange()}render(){let e=ss(this.hexValue),t=!as(this.hexValue);return w`
            <div class="root">
                <div part="swatch" class="swatch">
                    <div
                        class=${M({"swatch-preview":!0,"is-transparent":t})}
                        style=${t?E:`background-color: ${e}`}
                    ></div>
                    <input
                        part="picker"
                        class="swatch-picker"
                        type="color"
                        .value=${e}
                        ?disabled=${this.disabled||this.readonly}
                        aria-label="Color picker"
                        @input=${this.handlePickerChange}
                    />
                </div>
                <span class="hash" aria-hidden="true">#</span>
                <input
                    part="input"
                    class="hex-input"
                    type="text"
                    inputmode="text"
                    autocomplete="off"
                    maxlength="6"
                    .value=${this.hexValue}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    aria-label=${this.ariaLabel??E}
                    aria-invalid=${this.invalid?`true`:E}
                    @input=${this.handleHexInput}
                />
            </div>
        `}};D([k({reflect:!0})],cs.prototype,`size`,void 0),D([k({type:Boolean,reflect:!0,attribute:`fit-cell`})],cs.prototype,`fitCell`,void 0),D([k({type:Boolean,reflect:!0})],cs.prototype,`readonly`,void 0),D([k({type:Boolean,reflect:!0})],cs.prototype,`invalid`,void 0),D([k()],cs.prototype,`value`,void 0),D([k({attribute:`default-value`})],cs.prototype,`defaultValue`,void 0),D([k({attribute:`aria-label`})],cs.prototype,`ariaLabel`,void 0),D([j(`.hex-input`)],cs.prototype,`input`,void 0),D([A()],cs.prototype,`hexValue`,void 0),cs=D([O(`pk-color-input`)],cs);var ls=/^(\d{4})-(\d{2})-(\d{2})$/;function J(e){if(e==null||e===``)return null;if(e instanceof Date)return us(e);if(typeof e!=`string`)return null;let t=ls.exec(e.trim());if(!t)return null;let n=Number(t[1]),r=Number(t[2]),i=Number(t[3]);if(r<1||r>12||i<1||i>31)return null;let a=new Date(n,r-1,i);return a.getFullYear()!==n||a.getMonth()!==r-1||a.getDate()!==i?null:a}function Y(e){return!e||Number.isNaN(e.getTime())?``:`${String(e.getFullYear()).padStart(4,`0`)}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function us(e){return e==null?null:e instanceof Date?Number.isNaN(e.getTime())?null:new Date(e.getFullYear(),e.getMonth(),e.getDate()):J(String(e))}function ds(e){if(!e)return{from:null,to:null};let t=e.split(`/`);if(t.length===1)return{from:J(t[0]),to:null};let n=J(t[0]),r=J(t[1]);return!n||!r||n.getTime()<=r.getTime()?{from:n,to:r}:{from:r,to:n}}function fs(e){if(!e)return``;let{from:t,to:n}=e;return!t&&!n?``:t&&!n?Y(t):!t&&n?Y(n):`${Y(t)}/${Y(n)}`}function ps(e){if(!e)return[];let t=new Set,n=[];for(let r of e.split(`,`)){let e=J(r.trim());if(!e)continue;let i=Y(e);t.has(i)||(t.add(i),n.push(e))}return n.sort((e,t)=>e.getTime()-t.getTime()),n}function ms(e){let t=new Set;for(let n of e){let e=Y(n??null);e&&t.add(e)}return[...t].sort().join(`,`)}function hs(e,t){if(!Y(t))return e??``;let n=ps(e);return ms(n.some(e=>gs(e,t))?n.filter(e=>!gs(e,t)):[...n,t])}function gs(e,t){return!e||!t?!1:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function _s(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function vs(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function ys(e,t){let n=new Date(e.getFullYear(),e.getMonth()+t,1),r=xs(n.getFullYear(),n.getMonth());return new Date(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))}function bs(e,t){return ys(e,t*12)}function xs(e,t){return new Date(e,t+1,0).getDate()}function Ss(e){return new Date(e.getFullYear(),e.getMonth(),1)}function Cs(){let e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function ws(e,t){let n=e.getTime()-t.getTime();return Math.round(n/864e5)}function Ts(e){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=(t.getDay()+6)%7;t.setDate(t.getDate()-n+3);let r=new Date(t.getFullYear(),0,4),i=(r.getDay()+6)%7;return r.setDate(r.getDate()-i+3),1+Math.round((t.getTime()-r.getTime())/(7*864e5))}function Es(e,t){return new Intl.DateTimeFormat(t||void 0,{year:`numeric`,month:`short`,day:`numeric`}).format(e)}function Ds(e){let{min:t,max:n,disabledDates:r=[],disabledDaysOfWeek:i=[],disablePast:a=!1,disableFuture:o=!1,today:s,isDateDisabled:c}=e,l=t?.getTime()??-1/0,u=n?.getTime()??1/0,d=s.getTime(),f=new Set(i),p=new Set(r.map(e=>e.getTime()));return function(e){let t=e.getTime();return!!(t<l||t>u||a&&t<d||o&&t>d||f.size&&f.has(e.getDay())||p.size&&p.has(t)||c?.(e))}}function Os(e){if(e==null||e===``)return[];let t=Array.isArray(e)?e:e.split(/\s+/),n=[];for(let e of t){if(e instanceof Date){Number.isNaN(e.getTime())||n.push(new Date(e.getFullYear(),e.getMonth(),e.getDate()));continue}let t=J(String(e).trim());t&&n.push(t)}return n}var ks={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};function As(e){if(e==null||e===``)return[];let t=String(e).toLowerCase().split(/\s+/).filter(Boolean),n=new Set;for(let e of t)e in ks&&n.add(ks[e]);return[...n]}function js(e,t,n){let r=e.getTime()<=t.getTime()?e:t,i=e.getTime()<=t.getTime()?t:e,a=new Date(r.getFullYear(),r.getMonth(),r.getDate());for(;a.getTime()<=i.getTime();){if(!n(a))return!1;a.setDate(a.getDate()+1)}return!0}var Ms=new Set(`US.CA.MX.BR.JP.PH.IL.AU.NZ.ZA.CO.VE.PE.EC.GT.HN.NI.SV.CR.PA.DO.PR.JM.TT.BS.BB.BZ.BO.BM.TW.HK.MO.SG.TH.ET.KE`.split(`.`)),Ns=new Set([`SA`,`AE`,`QA`,`KW`,`BH`,`OM`,`YE`,`JO`,`SY`,`IQ`,`EG`,`SD`,`DZ`,`LY`]),Ps=new Set([`SA`,`AE`,`QA`,`KW`,`BH`,`OM`,`YE`,`JO`,`EG`,`SD`,`DZ`,`LY`,`SY`,`IQ`,`IL`]);function Fs(e){try{return new Intl.Locale(e).maximize().region??null}catch{return null}}function Is(e){let t=Fs(e),n=1;t&&Ms.has(t)?n=7:t&&Ns.has(t)&&(n=6);let r=t&&Ps.has(t)?[5,6]:[6,7];return{firstDay:n,weekend:r}}function Ls(e){try{let t=new Intl.Locale(e),n=typeof t.getWeekInfo==`function`?t.getWeekInfo():t.weekInfo;if(n&&typeof n.firstDay==`number`&&Array.isArray(n.weekend))return{firstDay:n.firstDay,weekend:n.weekend}}catch{}return Is(e)}function Rs(e){return e===7?0:e}function zs(e){return e.map(Rs)}function Bs(e,t){return e===`auto`?Rs(Ls(t).firstDay):{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}[e]}var Vs=d`
    ${rt}
    @layer pk-component {
        :host {
            display: inline-block;
            width: fit-content;
            max-width: 100%;
            color: var(--pk-color-gray-900);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: 1;
            --pk-date-cell-size: 1.75rem;
            --pk-date-cell-radius: 100%;
            --pk-date-gap: 0.25rem;
            --pk-date-column-min: var(--pk-date-cell-size);
            --pk-date-column-gap: 0;
        }

        :host([weekday-format='short']) {
            --pk-date-column-min: 2.125rem;
            --pk-date-column-gap: 0.125rem;
        }

        :host([weekday-format='long']) {
            --pk-date-column-min: 3.375rem;
            --pk-date-column-gap: 0.125rem;
        }

        :host([weekday-format='long']) .weekday {
            font-size: 0.7rem;
        }

        :host([size='xs']) {
            --pk-date-cell-size: 1.5rem;
            font-size: 11px;
        }

        :host([size='sm']) {
            --pk-date-cell-size: 1.625rem;
            font-size: 12px;
        }

        :host([size='lg']) {
            --pk-date-cell-size: 2rem;
            font-size: 14px;
        }

        :host([size='xl']) {
            --pk-date-cell-size: 2.25rem;
            font-size: 15px;
        }

        :host([disabled]) {
            opacity: 0.5;
            pointer-events: none;
        }

        .base {
            display: flex;
            flex-direction: column;
            gap: var(--pk-date-gap);
            width: fit-content;
            padding: 0.5rem;
            border: var(--pk-calendar-border, var(--pk-input-border));
            border-radius: var(--pk-radius-md);
            background: var(--pk-calendar-background, var(--pk-color-white));
        }

        :host(:not([bordered])) {
            --pk-calendar-border: 0;
            --pk-calendar-background: transparent;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.25rem;
            min-height: var(--pk-date-cell-size);
            padding-inline: 0.125rem;
        }

        .title {
            flex: 1;
            margin: 0;
            padding: 0.25rem 0.5rem;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-900);
            font: inherit;
            font-size: 13px;
            font-weight: 500;
            line-height: 1.2;
            text-align: center;
            cursor: pointer;
            user-select: none;
        }

        .title:hover:not(:disabled) {
            background: var(--pk-color-slate-100);
        }

        .nav-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: var(--pk-date-cell-size);
            height: var(--pk-date-cell-size);
            margin: 0;
            padding: 0.25rem;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
        }

        .nav-button:hover:not(:disabled) {
            background: var(--pk-color-slate-100);
            color: var(--pk-color-gray-900);
        }

        .nav-button:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }

        .nav-button .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 12px;
            height: 12px;
            flex-shrink: 0;
        }

        .nav-button .icon svg {
            display: block;
            width: 12px;
            height: 12px;
        }

        .months {
            display: flex;
            gap: 1rem;
        }

        .month {
            display: flex;
            flex-direction: column;
            width: fit-content;
            min-width: calc(var(--pk-date-column-min) * 7 + var(--pk-date-column-gap) * 6);
        }

        :host([data-week-numbers]) .month {
            min-width: calc(
                var(--pk-date-cell-size) + var(--pk-date-column-gap) + var(--pk-date-column-min) * 7 + var(--pk-date-column-gap) * 6
            );
        }

        .month-label {
            margin-bottom: 0.5rem;
            font-size: 12px;
            font-weight: 500;
            text-align: center;
            color: var(--pk-color-gray-700);
        }

        .weekdays,
        .week {
            display: grid;
            grid-template-columns: repeat(7, minmax(var(--pk-date-column-min), 1fr));
            column-gap: var(--pk-date-column-gap);
            align-items: center;
            width: 100%;
        }

        :host([data-week-numbers]) .weekdays,
        :host([data-week-numbers]) .week {
            grid-template-columns: var(--pk-date-cell-size) repeat(7, minmax(var(--pk-date-column-min), 1fr));
        }

        .grid {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            margin-top: 0.2rem;
        }

        .weeknumber-header,
        .weeknumber {
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--pk-date-cell-size);
            color: var(--pk-color-gray-500);
            font-size: 0.8rem;
            font-weight: 400;
            user-select: none;
        }

        .weekday {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: var(--pk-date-column-min);
            height: var(--pk-date-cell-size);
            padding-inline: 0.125rem;
            color: var(--pk-color-gray-500);
            font-size: 0.8rem;
            font-weight: 400;
            line-height: 1.1;
            text-align: center;
            white-space: nowrap;
            user-select: none;
        }

        .day,
        .day.is-placeholder {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-self: center;
            width: var(--pk-date-cell-size);
            min-width: var(--pk-date-cell-size);
            max-width: var(--pk-date-cell-size);
            height: var(--pk-date-cell-size);
            margin: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: var(--pk-color-gray-900);
            font: inherit;
            font-size: 13px;
            font-weight: 400;
            line-height: 1;
            cursor: pointer;
        }

        .day.is-range-start,
        .day.is-range-end,
        .day.is-range-inner,
        .day.is-range-preview {
            justify-self: stretch;
            width: 100%;
            min-width: 0;
            max-width: none;
        }

        .day.is-range-start.is-range-end {
            justify-self: center;
            width: var(--pk-date-cell-size);
            min-width: var(--pk-date-cell-size);
            max-width: var(--pk-date-cell-size);
        }

        .day:focus-visible {
            outline: 2px solid var(--pk-color-blue-500);
            outline-offset: 1px;
            z-index: 1;
        }

        .day.is-outside {
            opacity: 0.6;
        }

        .day.is-disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        /* Day grid — circular today ring (fixed cell size, not column width) */
        .day.is-today:not(.is-range-start):not(.is-range-end):not(.is-range-inner)::after {
            content: '';
            position: absolute;
            inset: 0;
            border: 1px solid var(--pk-color-blue-500);
            border-radius: var(--pk-date-cell-radius);
            pointer-events: none;
        }

        .day.is-selected:not(.is-range-start):not(.is-range-end):not(.is-range-inner) {
            background: var(--pk-color-gray-200);
            border-radius: var(--pk-date-cell-radius);
            color: var(--pk-color-gray-900);
            font-weight: 400;
        }

        .day.is-range-start,
        .day.is-range-end {
            background: var(--pk-color-gray-200);
            color: var(--pk-color-gray-900);
            font-weight: 400;
        }

        .day.is-range-start.is-range-end {
            border-radius: var(--pk-date-cell-radius);
        }

        .day.is-range-start:not(.is-range-end) {
            border-radius: var(--pk-date-cell-radius) 0 0 var(--pk-date-cell-radius);
        }

        .day.is-range-end:not(.is-range-start) {
            border-radius: 0 var(--pk-date-cell-radius) var(--pk-date-cell-radius) 0;
        }

        .day.is-range-inner {
            background: var(--pk-color-gray-200);
            border-radius: 0;
        }

        .day.is-range-preview:not(.is-range-start):not(.is-range-end) {
            background: var(--pk-color-gray-200);
            opacity: 0.7;
        }

        .day.is-placeholder {
            visibility: hidden;
            pointer-events: none;
        }

        .live-region {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        slot[name='footer']::slotted(*) {
            display: block;
            padding-top: 0.25rem;
        }

        .view-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(var(--pk-date-cell-size), 1fr));
            gap: 0.25rem;
            width: 100%;
            min-width: calc(var(--pk-date-column-min) * 7 + var(--pk-date-column-gap) * 6);
        }

        .view-row {
            display: contents;
        }

        .view-cell {
            display: contents;
        }

        .view-item {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: var(--pk-date-cell-size);
            margin: 0;
            padding: 0.375rem 0.5rem;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-900);
            font: inherit;
            font-size: 13px;
            cursor: pointer;
        }

        .view-item.is-selected {
            background: var(--pk-color-gray-200);
            font-weight: 500;
        }

        /* Month/year grid — rectangular today outline */
        .view-item.is-today:not(.is-selected) {
            box-shadow: inset 0 0 0 1px var(--pk-color-blue-500);
            border-radius: var(--pk-radius-sm);
        }

        .view-item.is-disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        .view-item:focus-visible {
            outline: 2px solid var(--pk-color-blue-500);
            outline-offset: 1px;
        }
    }
`,Hs=F(I.chevronLeft),Us=F(I.chevronRight),X=class extends Ye{constructor(...e){super(...e),this.hasSlotController=new Kr(this,`footer`,`previous-icon`,`next-icon`),this.mode=`single`,this.size=`default`,this.value=``,this.min=``,this.max=``,this.today=``,this.view=`days`,this.months=1,this.pageBy=`months`,this.focusedDate=``,this.firstDayOfWeek=`auto`,this.withOutsideDays=!0,this.withWeekNumbers=!1,this.weekdayFormat=`narrow`,this.disabled=!1,this.readonly=!1,this.bordered=!0,this.disabledDatesRaw=``,this.disabledDaysOfWeek=``,this.disablePast=!1,this.disableFuture=!1,this.minRange=0,this.maxRange=0,this.locale=``,this.viewAnchor=Ss(Cs()),this.rangeAnchor=null,this.hoverDate=null,this.liveAnnouncement=``,this.focusedMonth=null,this.focusedYear=null,this.daySlotNames=[],this.handlePrevious=()=>{if(this.view===`days`){this.viewAnchor=ys(this.viewAnchor,-this.pageStep);return}if(this.view===`months`){this.viewAnchor=bs(this.viewAnchor,-1);return}this.viewAnchor=bs(this.viewAnchor,-12)},this.handleNext=()=>{if(this.view===`days`){this.viewAnchor=ys(this.viewAnchor,this.pageStep);return}if(this.view===`months`){this.viewAnchor=bs(this.viewAnchor,1);return}this.viewAnchor=bs(this.viewAnchor,12)},this.handleTitleClick=()=>{if(!this.disabled){if(this.view===`days`){this.setView(`months`),this.focusedMonth=this.resolvedFocusedDate.getMonth();return}this.view===`months`&&(this.setView(`years`),this.focusedYear=this.resolvedFocusedDate.getFullYear())}},this.handleGridMouseLeave=()=>{this.hoverDate=null}}static{this.styles=Vs}connectedCallback(){super.connectedCallback(),this.syncViewAnchor(),this.syncCustomStates(),this.updateDaySlots(),this.childrenObserver=new MutationObserver(()=>this.updateDaySlots()),this.childrenObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){this.childrenObserver?.disconnect(),super.disconnectedCallback()}willUpdate(e){(e.has(`value`)||e.has(`focusedDate`)||e.has(`mode`))&&this.syncViewAnchor(),(e.has(`disabled`)||e.has(`readonly`)||e.has(`mode`)||e.has(`withWeekNumbers`))&&this.syncCustomStates(),e.has(`view`)&&this.emitViewChange(),super.willUpdate(e)}updateDaySlots(){let e=[...this.children].map(e=>e.getAttribute(`slot`)).filter(e=>!!e?.startsWith(`day-`));e.join(`,`)!==this.daySlotNames.join(`,`)&&(this.daySlotNames=e)}syncCustomStates(){this.toggleAttribute(`data-range`,this.mode===`range`),this.toggleAttribute(`data-multiple`,this.mode===`multiple`),this.toggleAttribute(`data-week-numbers`,this.withWeekNumbers)}get resolvedLocale(){return this.locale||this.lang||document.documentElement.lang||`en`}get resolvedToday(){return J(this.today)??Cs()}get primarySelectedDate(){return this.mode===`single`?J(this.value):this.mode===`multiple`?ps(this.value)[0]??null:ds(this.value).from}get resolvedFocusedDate(){return J(this.focusedDate)??us(this.primarySelectedDate)??this.resolvedToday}get isDisabledMatcher(){return Ds({min:J(this.min),max:J(this.max),disabledDates:Os(this.disabledDatesRaw),disabledDaysOfWeek:As(this.disabledDaysOfWeek),disablePast:this.disablePast,disableFuture:this.disableFuture,today:this.resolvedToday,isDateDisabled:this.isDateDisabled})}get weekendDays(){return new Set(zs(Ls(this.resolvedLocale).weekend))}get pageStep(){return this.pageBy===`single`?1:this.months}get visibleMonthAnchors(){let e=[this.viewAnchor];return this.months===2&&e.push(Ss(ys(this.viewAnchor,1))),e}syncViewAnchor(){let e=this.resolvedFocusedDate;this.visibleMonthAnchors.some(t=>_s(e,t))||(this.viewAnchor=Ss(e))}get valueAsDate(){return this.mode===`single`?J(this.value):null}get valueAsRange(){return ds(this.value)}get valueAsDates(){return this.mode===`multiple`?ps(this.value):[]}focus(e){let t=this.view===`days`?`.day.is-roving`:(this.view,`.view-item.is-roving`);this.renderRoot.querySelector(t)?.focus(e)}goToDate(e){let t=us(e);t&&(this.viewAnchor=Ss(t),this.focusedDate=Y(t),this.view=`days`)}goToToday(){this.goToDate(this.resolvedToday)}clear(){this.disabled||this.readonly||(this.value=``,this.rangeAnchor=null,this.hoverDate=null,this.emitInput(),this.emitChange())}emitInput(){this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}emitChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}emitFocusDay(e){this.dispatchEvent(new CustomEvent(`pk-focus-day`,{detail:{date:e},bubbles:!0,composed:!0}))}emitViewChange(){this.dispatchEvent(new CustomEvent(`pk-view-change`,{detail:{view:this.view,date:this.resolvedFocusedDate},bubbles:!0,composed:!0}))}announce(e){this.liveAnnouncement=`${e}\u200B`}setView(e){this.view!==e&&(this.view=e)}handleDayClick(e,t){if(this.disabled||this.readonly||t)return;if(this.mode===`single`){this.value=Y(e),this.focusedDate=Y(e),this.emitInput(),this.emitChange(),this.announce(Es(e,this.resolvedLocale));return}if(this.mode===`multiple`){let t=ps(this.value).some(t=>gs(t,e));this.value=hs(this.value,e),this.focusedDate=Y(e),this.emitInput(),this.emitChange(),this.announce(`${t?`Removed`:`Added`} ${Es(e,this.resolvedLocale)}`);return}if(!this.rangeAnchor){this.rangeAnchor=e,this.value=Y(e),this.focusedDate=Y(e),this.emitInput();return}let n=this.rangeAnchor,r=e,i=n.getTime()<=r.getTime()?{from:n,to:r}:{from:r,to:n};if(this.minRange>0&&ws(i.to,i.from)+1<this.minRange){this.announce(`Range must be at least ${this.minRange} days`);return}if(this.maxRange>0&&ws(i.to,i.from)+1>this.maxRange){this.announce(`Range must be at most ${this.maxRange} days`);return}this.value=fs(i),this.focusedDate=Y(e),this.rangeAnchor=null,this.hoverDate=null,this.emitInput(),this.emitChange(),this.announce(`${Es(i.from,this.resolvedLocale)} – ${Es(i.to,this.resolvedLocale)}`)}handleDayHover(e){this.mode!==`range`||!this.rangeAnchor||(this.hoverDate=e,this.emitFocusDay(e))}handleMonthPick(e){if(this.disabled||this.readonly)return;let t=new Date(this.viewAnchor.getFullYear(),e,1);this.isMonthFullyDisabled(t)||(this.viewAnchor=t,this.focusedDate=Y(t),this.setView(`days`))}handleYearPick(e){if(this.disabled||this.readonly)return;let t=new Date(e,this.viewAnchor.getMonth(),1);this.isYearFullyDisabled(e)||(this.viewAnchor=t,this.focusedDate=Y(t),this.setView(`months`),this.focusedMonth=t.getMonth())}handleDayKeyDown(e,t,n){if(n)return;let r=null;switch(e.key){case`ArrowLeft`:r=vs(t,-1);break;case`ArrowRight`:r=vs(t,1);break;case`ArrowUp`:r=vs(t,-7);break;case`ArrowDown`:r=vs(t,7);break;case`PageUp`:r=ys(t,-1);break;case`PageDown`:r=ys(t,1);break;case`Home`:r=Ss(t);break;case`End`:r=new Date(t.getFullYear(),t.getMonth()+1,0);break;case`Enter`:case` `:e.preventDefault(),this.handleDayClick(t,n);return;case`Escape`:this.rangeAnchor&&(e.preventDefault(),this.rangeAnchor=null,this.hoverDate=null,this.requestUpdate());return;default:return}e.preventDefault(),r&&(this.focusedDate=Y(r),this.visibleMonthAnchors.some(e=>_s(r,e))||(this.viewAnchor=Ss(r)),this.emitFocusDay(r),this.requestUpdate(),queueMicrotask(()=>this.focus()))}isMonthFullyDisabled(e){return js(e,new Date(e.getFullYear(),e.getMonth()+1,0),this.isDisabledMatcher)}isYearFullyDisabled(e){return js(new Date(e,0,1),new Date(e,11,31),this.isDisabledMatcher)}formatWeekdayLabel(e){return this.weekdayFormat===`narrow`?new Intl.DateTimeFormat(this.resolvedLocale,{weekday:`short`}).format(e).slice(0,2):new Intl.DateTimeFormat(this.resolvedLocale,{weekday:this.weekdayFormat}).format(e)}buildWeekdayLabels(){let e=Bs(this.firstDayOfWeek,this.resolvedLocale),t=[];for(let n=0;n<7;n+=1){let r=(e+n)%7,i=new Date(2024,0,r===0?7:r);t.push(this.formatWeekdayLabel(i))}return t}buildMonthDays(e){let t=Bs(this.firstDayOfWeek,this.resolvedLocale),n=Ss(e),r=vs(n,-((n.getDay()-t+7)%7)),i=[];for(let e=0;e<42;e+=1)i.push(vs(r,e));return i}computeDayState(e,t){let n=this.isDisabledMatcher(e),r=ds(this.value),i=this.mode===`single`&&gs(J(this.value),e),a=this.mode===`multiple`&&ps(this.value).some(t=>gs(t,e)),o=this.mode===`range`&&gs(r.from,e),s=this.mode===`range`&&gs(r.to,e),c=this.mode===`range`&&r.from&&r.to&&e.getTime()>r.from.getTime()&&e.getTime()<r.to.getTime(),l=!1;if(this.mode===`range`&&this.rangeAnchor&&this.hoverDate){let t=this.rangeAnchor,n=this.hoverDate,r=t.getTime()<=n.getTime()?t:n,i=t.getTime()<=n.getTime()?n:t;l=e.getTime()>=r.getTime()&&e.getTime()<=i.getTime()}return{date:e,monthAnchor:t,outside:!_s(e,t),today:gs(e,this.resolvedToday),weekend:this.weekendDays.has(e.getDay()),disabled:n,selected:i||a||o||s,rangeStart:o,rangeEnd:s,rangeInner:!!c,rangePreview:l,roving:gs(e,this.resolvedFocusedDate)}}renderDayContent(e){let t=`day-${Y(e.date)}`;if(this.daySlotNames.includes(t))return w`<slot name=${t}></slot>`;let n=this.dayContent?.(e.date);return n?ft(n):w`<span part="day-label">${e.date.getDate()}</span>`}renderDay(e){if(!this.withOutsideDays&&e.outside)return w`<span part="day-placeholder" class="day is-placeholder" aria-hidden="true"></span>`;let t=Es(e.date,this.resolvedLocale);return w`
            <button
                type="button"
                part="day"
                class=${M({day:!0,"is-outside":e.outside,"is-today":e.today,"is-weekend":e.weekend,"is-disabled":e.disabled,"is-selected":e.selected,"is-range-start":e.rangeStart,"is-range-end":e.rangeEnd,"is-range-inner":e.rangeInner,"is-range-preview":e.rangePreview,"is-roving":e.roving})}
                tabindex=${e.roving?`0`:`-1`}
                ?disabled=${e.disabled}
                aria-label=${t}
                aria-selected=${e.selected?`true`:`false`}
                aria-current=${e.today?`date`:E}
                @click=${()=>this.handleDayClick(e.date,e.disabled)}
                @mouseenter=${()=>this.handleDayHover(e.date)}
                @keydown=${t=>this.handleDayKeyDown(t,e.date,e.disabled)}
            >
                ${this.renderDayContent(e)}
            </button>
        `}getMonthWeeks(e){let t=this.buildMonthDays(e),n=[];for(let e=0;e<t.length;e+=7)n.push(t.slice(e,e+7));return this.withOutsideDays?n:n.filter(t=>t.some(t=>_s(t,e)))}renderMonth(e,t=!1){let n=this.buildWeekdayLabels(),r=new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(e),i=this.getMonthWeeks(e);return w`
            <div part="month" class="month">
                ${t?w`<div part="month-label" class="month-label">${r}</div>`:E}
                <div part="weekdays" class="weekdays" role="row">
                    ${this.withWeekNumbers?w`<span part="weeknumbers" class="weeknumber-header" role="columnheader">#</span>`:E}
                    ${n.map(e=>w`
                        <span part="weekday" class="weekday" role="columnheader">${e}</span>
                    `)}
                </div>
                <div
                    part="grid"
                    class="grid"
                    role="grid"
                    aria-label=${r}
                    @mouseleave=${this.handleGridMouseLeave}
                >
                    ${i.map(t=>w`
                        <div part="week" class="week" role="row">
                            ${this.withWeekNumbers?w`<span part="weeknumber" class="weeknumber" role="gridcell">${Ts(t[0])}</span>`:E}
                            ${t.map(t=>this.renderDay(this.computeDayState(t,e)))}
                        </div>
                    `)}
                </div>
            </div>
        `}renderViewRows(e){let t=[];for(let n=0;n<e.length;n+=3)t.push(w`
                <div part="view-row" class="view-row" role="row">
                    ${e.slice(n,n+3)}
                </div>
            `);return t}renderMonthsView(){let e=this.viewAnchor.getFullYear(),t=new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`}),n=this.primarySelectedDate?.getMonth(),r=this.focusedMonth??this.resolvedFocusedDate.getMonth(),i=[];for(let a=0;a<12;a+=1){let o=new Date(e,a,1),s=this.isMonthFullyDisabled(o),c=n===a,l=this.resolvedToday.getFullYear()===e&&this.resolvedToday.getMonth()===a,u=r===a;i.push(w`
                <div part="view-cell" class="view-cell" role="gridcell">
                    <button
                        type="button"
                        part="view-item ${l?`view-item-today`:``} ${c?`view-item-selected`:``} ${s?`view-item-disabled`:``}"
                        class=${M({"view-item":!0,"is-today":l,"is-selected":c,"is-disabled":s,"is-roving":u})}
                        tabindex=${u?`0`:`-1`}
                        ?disabled=${s}
                        @click=${()=>this.handleMonthPick(a)}
                    >
                        ${t.format(o)}
                    </button>
                </div>
            `)}return w`
            <div part="view-grid" class="view-grid" role="grid">
                ${this.renderViewRows(i)}
            </div>
        `}renderYearsView(){let e=this.viewAnchor.getFullYear(),t=Math.floor(e/12)*12,n=this.primarySelectedDate?.getFullYear(),r=this.focusedYear??this.resolvedFocusedDate.getFullYear(),i=[];for(let e=0;e<12;e+=1){let a=t+e,o=this.isYearFullyDisabled(a),s=n===a,c=this.resolvedToday.getFullYear()===a,l=r===a;i.push(w`
                <div part="view-cell" class="view-cell" role="gridcell">
                    <button
                        type="button"
                        part="view-item ${c?`view-item-today`:``} ${s?`view-item-selected`:``} ${o?`view-item-disabled`:``}"
                        class=${M({"view-item":!0,"is-today":c,"is-selected":s,"is-disabled":o,"is-roving":l})}
                        tabindex=${l?`0`:`-1`}
                        ?disabled=${o}
                        @click=${()=>this.handleYearPick(a)}
                    >
                        ${a}
                    </button>
                </div>
            `)}return w`
            <div part="view-grid" class="view-grid" role="grid">
                ${this.renderViewRows(i)}
            </div>
        `}renderHeaderTitle(){if(this.view===`months`)return String(this.viewAnchor.getFullYear());if(this.view===`years`){let e=this.viewAnchor.getFullYear(),t=Math.floor(e/12)*12;return`${t} – ${t+11}`}return this.months===2?`${new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(this.viewAnchor)} – ${new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(ys(this.viewAnchor,1))}`:new Intl.DateTimeFormat(this.resolvedLocale,{month:`long`,year:`numeric`}).format(this.viewAnchor)}render(){let e=this.view===`days`&&this.months===2;return w`
            <div part="base" class="base">
                <div part="header" class="header">
                    <button
                        type="button"
                        part="previous"
                        class="nav-button"
                        aria-label="Previous"
                        ?disabled=${this.disabled}
                        @click=${this.handlePrevious}
                    >
                        <slot name="previous-icon">
                            <span class="icon" aria-hidden="true">${N(Hs)}</span>
                        </slot>
                    </button>
                    <button
                        type="button"
                        part="title"
                        class="title"
                        ?disabled=${this.disabled}
                        @click=${this.view===`years`?void 0:this.handleTitleClick}
                    >
                        ${this.renderHeaderTitle()}
                    </button>
                    <button
                        type="button"
                        part="next"
                        class="nav-button"
                        aria-label="Next"
                        ?disabled=${this.disabled}
                        @click=${this.handleNext}
                    >
                        <slot name="next-icon">
                            <span class="icon" aria-hidden="true">${N(Us)}</span>
                        </slot>
                    </button>
                </div>

                <div part="months" class="months">
                    ${this.view===`days`?this.visibleMonthAnchors.map(t=>this.renderMonth(t,e)):this.view===`months`?this.renderMonthsView():this.renderYearsView()}
                </div>

                ${this.hasSlotController.test(`footer`)?w`<div part="footer"><slot name="footer"></slot></div>`:E}

                <div class="live-region" aria-live="polite" aria-atomic="true">
                    ${this.liveAnnouncement}
                </div>
            </div>
        `}};D([k({reflect:!0})],X.prototype,`mode`,void 0),D([k({reflect:!0})],X.prototype,`size`,void 0),D([k({reflect:!0})],X.prototype,`value`,void 0),D([k({reflect:!0})],X.prototype,`min`,void 0),D([k({reflect:!0})],X.prototype,`max`,void 0),D([k({reflect:!0})],X.prototype,`today`,void 0),D([k({reflect:!0})],X.prototype,`view`,void 0),D([k({type:Number,reflect:!0})],X.prototype,`months`,void 0),D([k({attribute:`page-by`,reflect:!0})],X.prototype,`pageBy`,void 0),D([k({attribute:`focused-date`,reflect:!0})],X.prototype,`focusedDate`,void 0),D([k({attribute:`first-day-of-week`,reflect:!0})],X.prototype,`firstDayOfWeek`,void 0),D([k({attribute:`with-outside-days`,type:Boolean,reflect:!0})],X.prototype,`withOutsideDays`,void 0),D([k({attribute:`with-week-numbers`,type:Boolean,reflect:!0})],X.prototype,`withWeekNumbers`,void 0),D([k({attribute:`weekday-format`,reflect:!0})],X.prototype,`weekdayFormat`,void 0),D([k({type:Boolean,reflect:!0})],X.prototype,`disabled`,void 0),D([k({type:Boolean,reflect:!0})],X.prototype,`readonly`,void 0),D([k({type:Boolean,reflect:!0})],X.prototype,`bordered`,void 0),D([k({attribute:`disabled-dates`})],X.prototype,`disabledDatesRaw`,void 0),D([k({attribute:`disabled-days-of-week`,reflect:!0})],X.prototype,`disabledDaysOfWeek`,void 0),D([k({attribute:`disable-past`,type:Boolean,reflect:!0})],X.prototype,`disablePast`,void 0),D([k({attribute:`disable-future`,type:Boolean,reflect:!0})],X.prototype,`disableFuture`,void 0),D([k({attribute:`min-range`,type:Number})],X.prototype,`minRange`,void 0),D([k({attribute:`max-range`,type:Number})],X.prototype,`maxRange`,void 0),D([k({reflect:!0})],X.prototype,`locale`,void 0),D([k({attribute:!1})],X.prototype,`isDateDisabled`,void 0),D([k({attribute:!1})],X.prototype,`dayContent`,void 0),D([A()],X.prototype,`viewAnchor`,void 0),D([A()],X.prototype,`rangeAnchor`,void 0),D([A()],X.prototype,`hoverDate`,void 0),D([A()],X.prototype,`liveAnnouncement`,void 0),D([A()],X.prototype,`focusedMonth`,void 0),D([A()],X.prototype,`focusedYear`,void 0),D([A()],X.prototype,`daySlotNames`,void 0),X=D([O(`pk-calendar`)],X);function Ws(){return globalThis.Craft}function Gs(){return Ws()?.locale||document.documentElement.lang||`en-US`}function Ks(e,t){let n=Ws()?.formatDate;if(typeof n==`function`)try{return n(e)}catch{}let r=t||Gs();return new Intl.DateTimeFormat(r,{year:`numeric`,month:`numeric`,day:`numeric`}).format(e)}var qs=d`
    ${rt}
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            width: fit-content;
            max-width: 100%;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            --pk-date-picker-height: 2.125rem;
            --pk-date-picker-min-width: 8.125rem;
            --pk-date-picker-padding-inline: 10px;
            --pk-date-picker-font-size: var(--pk-font-size-base);
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        .control {
            display: inline-flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
            width: fit-content;
            min-width: var(--pk-date-picker-min-width);
            max-width: 100%;
            height: var(--pk-date-picker-height);
            min-height: var(--pk-date-picker-height);
            margin: 0;
            padding: 0 var(--pk-date-picker-padding-inline);
            border: 1px solid var(--pk-color-slate-400);
            border-radius: var(--pk-radius-lg);
            background: transparent;
            color: inherit;
            font: inherit;
            font-size: var(--pk-date-picker-font-size);
            font-weight: 400;
            line-height: 1.2;
            cursor: default;
            outline: none;
            box-sizing: border-box;
            transition: background-color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
        }

        .control[data-popup-open] {
            background: var(--pk-color-slate-150);
            border-color: var(--pk-color-slate-400);
            box-shadow: none;
        }

        :host(:not([disabled])) .control:hover:not(.is-disabled) {
            background: var(--pk-color-slate-50);
        }

        :host(:not([disabled])) .control[data-popup-open]:hover:not(.is-disabled),
        :host(:not([disabled])) .control:active:not(.is-disabled) {
            background: var(--pk-color-slate-150);
        }

        /* Outline-button focus — lighter than --pk-shadow-focus (see React DatePicker trigger). */
        :host(:not([invalid]):not(:state(user-invalid))) .control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host(:not([invalid]):not(:state(user-invalid))) .control[data-popup-open]:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control[data-popup-open] {
            border-color: var(--pk-color-slate-400);
            box-shadow: none;
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) .control:focus-visible,
        :host([invalid][data-state='focus-visible']) .control,
        :host(:state(user-invalid)) .control:focus-visible,
        :host(:state(user-invalid)[data-state='focus-visible']) .control {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .display-value {
            display: inline-flex;
            align-items: center;
            flex: 1;
            min-width: 0;
            line-height: 1.2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
            color: inherit;
        }

        .display-value.is-placeholder {
            color: var(--pk-color-gray-400);
        }

        .calendar-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            line-height: 0;
            color: var(--pk-color-gray-400);
            pointer-events: none;
        }

        .calendar-icon .icon,
        .calendar-icon svg {
            display: block;
            width: 14px;
            height: 14px;
        }

        .icon-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-inline-start: auto;
            width: 1.25rem;
            height: 1.25rem;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-500);
            cursor: pointer;
        }

        .icon-button:hover:not(:disabled) {
            color: var(--pk-color-gray-800);
            background: var(--pk-color-slate-100);
        }

        .icon-button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .icon-button .icon {
            width: 0.875rem;
            height: 0.875rem;
        }

        .panel {
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
        }

        .panel pk-calendar {
            display: block;
        }

        :host([size='xs']) {
            --pk-date-picker-height: 1.5rem;
            --pk-date-picker-padding-inline: 8px;
            --pk-date-picker-font-size: 11px;
        }

        :host([size='sm']) {
            --pk-date-picker-height: 1.625rem;
            --pk-date-picker-padding-inline: 9px;
            --pk-date-picker-font-size: 12px;
        }

        :host([size='lg']) {
            --pk-date-picker-height: 2.125rem;
            --pk-date-picker-padding-inline: 11px;
            --pk-date-picker-font-size: 14px;
        }

        :host([size='xl']) {
            --pk-date-picker-height: 2.375rem;
            --pk-date-picker-padding-inline: 12px;
            --pk-date-picker-font-size: 15px;
        }
    }
`,Js=F(I.calendar),Ys=F(I.xmark),Z=class extends R{constructor(...e){super(...e),this.assumeInteractionOn=[`input`],this.hasSlotController=new Kr(this,`label`,`instructions`,`hint`,`start`,`end`,`footer`),this.controlId=$r(`pk-date-picker`),this.open=!1,this.placement=`bottom`,this.sideOffset=4,this.size=`default`,this.mode=`single`,this.value=``,this.defaultValue=``,this.label=``,this.instructions=``,this.placeholder=``,this.withClear=!1,this.readonly=!1,this.invalid=!1,this.min=``,this.max=``,this.locale=``,this.disablePast=!1,this.disableFuture=!1,this.disabledDates=``,this.disabledDaysOfWeek=``,this.firstDayOfWeek=`auto`,this.withOutsideDays=!0,this.withWeekNumbers=!1,this.months=1,this.pageBy=`months`,this.minRange=0,this.maxRange=0,this.withLabel=!1,this.withInstructions=!1,this.ariaLabel=null,this.dismissRegistered=!1,this.daySlotNames=[],this.handleDocumentPointerDown=e=>{!this.open||!gr(this)||this.isPointerInside(e)||this.closePanel(`light-dismiss`)},this.handleDocumentKeyDown=e=>{!this.open||e.key!==`Escape`||(e.preventDefault(),this.closePanel(`escape`))},this.handleControlClick=()=>{if(!this.disabled){if(this.open){this.closePanel(`api`);return}this.openPanel()}},this.handleControlKeyDown=e=>{if(!this.disabled){if(e.key===`ArrowDown`&&e.altKey){e.preventDefault(),this.openPanel(),queueMicrotask(()=>this.calendarElement?.focus());return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.handleControlClick())}},this.handleClearClick=e=>{e.preventDefault(),e.stopPropagation(),this.clear()},this.handleCalendarChange=e=>{let t=e.target;this.value=t.value,this.emitValueChange(),this.mode===`single`&&t.value&&this.closePanel(`api`),this.mode===`range`&&ds(t.value).from&&ds(t.value).to&&this.closePanel(`api`)},this.handleCalendarInput=e=>{let t=e.target;this.value=t.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))}}static{this.styles=[So,qs]}static get validators(){return[...super.validators,Xr(),Gr()]}connectedCallback(){this.instructions=Co(this,this.instructions),this.hasAttribute(`with-hint`)&&(this.withInstructions=!0),super.connectedCallback(),this.toggleAttribute(`data-has-value`,!!this.value),this.setState(`blank`,!this.value),this.updateDaySlots(),this.childrenObserver=new MutationObserver(()=>this.updateDaySlots()),this.childrenObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){this.childrenObserver?.disconnect(),this.closePanel(`api`),super.disconnectedCallback()}willUpdate(e){e.has(`value`)&&(this.value instanceof Date&&(this.value=Y(us(this.value))),this.toggleAttribute(`data-has-value`,!!this.value),this.setState(`blank`,!this.value)),e.has(`open`)&&(this.setState(`open`,this.open),this.controlElement?.toggleAttribute(`data-popup-open`,this.open)),e.has(`mode`)&&(this.setState(`range`,this.mode===`range`),this.setState(`multiple`,this.mode===`multiple`)),super.willUpdate(e)}updateDaySlots(){let e=[...this.children].map(e=>e.getAttribute(`slot`)).filter(e=>!!e?.startsWith(`day-`));e.join(`,`)!==this.daySlotNames.join(`,`)&&(this.daySlotNames=e)}get valueString(){return this.value instanceof Date?Y(us(this.value)):this.value}syncFormValue(){this.setValue(this.valueString||``)}resetToDefaultValue(){this.value=this.defaultValue}restoreFormState(e){typeof e==`string`&&(this.value=e)}get resolvedLocale(){return this.locale||this.lang||Gs()}get displayText(){if(!this.value)return this.placeholder;if(this.mode===`multiple`){let e=ps(this.valueString).length;return e===0?this.placeholder:`${e} date${e===1?``:`s`} selected`}if(this.mode===`range`){let e=ds(this.valueString);return e.from&&e.to?`${Ks(e.from,this.resolvedLocale)} – ${Ks(e.to,this.resolvedLocale)}`:e.from?Ks(e.from,this.resolvedLocale):this.placeholder}let e=J(this.value);return e?Ks(e,this.resolvedLocale):this.placeholder}get valueAsDate(){return this.mode===`single`?J(this.value):null}get valueAsRange(){return ds(this.valueString)}get valueAsDates(){return this.mode===`multiple`?ps(this.valueString):[]}async show(){await this.openPanel()}async hide(){await this.closePanel(`api`)}clear(){this.disabled||this.readonly||!this.value||(this.value=``,this.dispatchEvent(new ti),this.emitValueChange(),this.controlElement?.focus())}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}async openPanel(){this.disabled||this.open||this.dispatchEvent(new Dr)&&(this.open=!0,this.registerDismissHandlers(),await this.updateComplete,await ai(this.popupElement,this.placement),this.dispatchEvent(new Or))}async closePanel(e=`unknown`){if(!this.open)return;let t=new kr(e);this.dispatchEvent(t)&&(this.open=!1,this.unregisterDismissHandlers(),this.dispatchEvent(new Ar))}registerDismissHandlers(){this.dismissRegistered||=(mr(this),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.addEventListener(`keydown`,this.handleDocumentKeyDown,!0),!0)}unregisterDismissHandlers(){this.dismissRegistered&&=(hr(this),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.handleDocumentKeyDown,!0),!1)}isPointerInside(e){return go(e,{host:this,panel:this.popupElement?.querySelector(`.panel`)??void 0})}renderClearButton(){return!this.withClear||!this.value||this.disabled?E:w`
            <button
                type="button"
                class="icon-button clear-button"
                part="clear-button"
                aria-label="Clear date"
                ?disabled=${this.disabled}
                @click=${this.handleClearClick}
            >
                <slot name="clear-icon">
                    <span class="icon" aria-hidden="true">${N(Ys)}</span>
                </slot>
            </button>
        `}renderCalendarIcon(){return w`
            <span class="calendar-icon" part="expand-icon" aria-hidden="true">
                <slot name="expand-icon">
                    <span class="icon">${N(Js)}</span>
                </slot>
            </span>
        `}render(){let e=!!this.value,t=this.displayText,n=!e;return w`
            <div part="form-control" class="form-control">
                ${this.label||this.hasSlotController.test(`label`)?w`
                        <label part="label" class="label" for=${this.controlId}>
                            <slot name="label">${this.label}</slot>
                        </label>
                    `:E}

                <div part="form-control-input" class="form-control-input">
                    <input
                        class="value-input"
                        type="hidden"
                        .value=${this.value}
                        ?required=${this.required}
                    />

                    <div
                        part="base"
                        id=${this.controlId}
                        class=${M({control:!0,"is-disabled":this.disabled})}
                        role="combobox"
                        aria-expanded=${this.open?`true`:`false`}
                        aria-haspopup="dialog"
                        aria-label=${this.ariaLabel??E}
                        tabindex=${this.disabled?`-1`:`0`}
                        @click=${this.handleControlClick}
                        @keydown=${this.handleControlKeyDown}
                    >
                        ${this.hasSlotController.test(`start`)?w`<span part="start" class="control-start"><slot name="start"></slot></span>`:E}

                        ${this.renderCalendarIcon()}

                        <span
                            part="input"
                            class=${M({"display-value":!0,"is-placeholder":n})}
                        >
                            ${t}
                        </span>

                        ${this.renderClearButton()}

                        ${this.hasSlotController.test(`end`)?w`<span part="end" class="control-end"><slot name="end"></slot></span>`:E}
                    </div>

                    <pk-popup
                        .active=${this.open}
                        .anchor=${this.controlElement??``}
                        .placement=${this.placement}
                        .distance=${this.sideOffset}
                    >
                        <div part="popup" class="panel" role="dialog" aria-label="Choose date">
                            <pk-calendar
                                part="calendar"
                                .bordered=${!1}
                                .mode=${this.mode}
                                .value=${this.value}
                                .min=${this.min}
                                .max=${this.max}
                                .locale=${this.resolvedLocale}
                                .months=${this.months}
                                .pageBy=${this.pageBy}
                                .firstDayOfWeek=${this.firstDayOfWeek}
                                .withOutsideDays=${this.withOutsideDays}
                                .withWeekNumbers=${this.withWeekNumbers}
                                .weekdayFormat=${this.weekdayFormat??E}
                                .minRange=${this.minRange}
                                .maxRange=${this.maxRange}
                                .disablePast=${this.disablePast}
                                .disableFuture=${this.disableFuture}
                                .disabledDatesRaw=${this.disabledDates}
                                .disabledDaysOfWeek=${this.disabledDaysOfWeek}
                                .isDateDisabled=${this.isDateDisabled}
                                .dayContent=${this.dayContent}
                                .disabled=${this.disabled}
                                .readonly=${this.readonly}
                                @change=${this.handleCalendarChange}
                                @input=${this.handleCalendarInput}
                            >
                                ${this.daySlotNames.map(e=>w`
                                    <slot name=${e} slot=${e}></slot>
                                `)}
                                <slot name="footer" slot="footer"></slot>
                            </pk-calendar>
                        </div>
                    </pk-popup>
                </div>

                ${this.instructions||this.hasSlotController.test(`instructions`)||this.hasSlotController.test(`hint`)?w`
                        <div part="instructions" class="instructions">
                            <slot name="instructions">
                                <slot name="hint">${this.instructions}</slot>
                            </slot>
                        </div>
                    `:E}
            </div>
        `}};D([k({type:Boolean,reflect:!0})],Z.prototype,`open`,void 0),D([k({reflect:!0})],Z.prototype,`placement`,void 0),D([k({attribute:`side-offset`,type:Number})],Z.prototype,`sideOffset`,void 0),D([k({reflect:!0})],Z.prototype,`size`,void 0),D([k({reflect:!0})],Z.prototype,`mode`,void 0),D([k()],Z.prototype,`value`,void 0),D([k({attribute:`default-value`})],Z.prototype,`defaultValue`,void 0),D([k()],Z.prototype,`label`,void 0),D([k()],Z.prototype,`instructions`,void 0),D([k()],Z.prototype,`placeholder`,void 0),D([k({attribute:`with-clear`,type:Boolean})],Z.prototype,`withClear`,void 0),D([k({type:Boolean,reflect:!0})],Z.prototype,`readonly`,void 0),D([k({type:Boolean,reflect:!0})],Z.prototype,`invalid`,void 0),D([k({reflect:!0})],Z.prototype,`min`,void 0),D([k({reflect:!0})],Z.prototype,`max`,void 0),D([k({reflect:!0})],Z.prototype,`locale`,void 0),D([k({attribute:`disable-past`,type:Boolean,reflect:!0})],Z.prototype,`disablePast`,void 0),D([k({attribute:`disable-future`,type:Boolean,reflect:!0})],Z.prototype,`disableFuture`,void 0),D([k({attribute:`disabled-dates`})],Z.prototype,`disabledDates`,void 0),D([k({attribute:`disabled-days-of-week`,reflect:!0})],Z.prototype,`disabledDaysOfWeek`,void 0),D([k({attribute:`first-day-of-week`,reflect:!0})],Z.prototype,`firstDayOfWeek`,void 0),D([k({attribute:`with-outside-days`,type:Boolean,reflect:!0})],Z.prototype,`withOutsideDays`,void 0),D([k({attribute:`with-week-numbers`,type:Boolean,reflect:!0})],Z.prototype,`withWeekNumbers`,void 0),D([k({attribute:`weekday-format`,reflect:!0})],Z.prototype,`weekdayFormat`,void 0),D([k({type:Number,reflect:!0})],Z.prototype,`months`,void 0),D([k({attribute:`page-by`,reflect:!0})],Z.prototype,`pageBy`,void 0),D([k({attribute:`min-range`,type:Number})],Z.prototype,`minRange`,void 0),D([k({attribute:`max-range`,type:Number})],Z.prototype,`maxRange`,void 0),D([k({attribute:!1})],Z.prototype,`isDateDisabled`,void 0),D([k({attribute:!1})],Z.prototype,`dayContent`,void 0),D([k({attribute:`with-label`,type:Boolean})],Z.prototype,`withLabel`,void 0),D([k({attribute:`with-instructions`,type:Boolean})],Z.prototype,`withInstructions`,void 0),D([k({attribute:`aria-label`})],Z.prototype,`ariaLabel`,void 0),D([k({reflect:!0})],Z.prototype,`width`,void 0),D([j(`.value-input`)],Z.prototype,`input`,void 0),D([j(`pk-popup`)],Z.prototype,`popupElement`,void 0),D([j(`pk-calendar`)],Z.prototype,`calendarElement`,void 0),D([j(`.control`)],Z.prototype,`controlElement`,void 0),D([A()],Z.prototype,`daySlotNames`,void 0),Z=D([O(`pk-date-picker`)],Z);function Xs(e,t){let n=String(e??``),r=String(t??``).trim();if(!r)return[{text:n,match:!1}];let i=n.toLowerCase(),a=r.toLowerCase(),o=[],s=0,c=i.indexOf(a);for(;c!==-1;)c>s&&o.push({text:n.slice(s,c),match:!1}),o.push({text:n.slice(c,c+r.length),match:!0}),s=c+r.length,c=i.indexOf(a,s);return s<n.length&&o.push({text:n.slice(s),match:!1}),o.length>0?o:[{text:n,match:!1}]}var Zs=d`
    @layer pk-component {
        :host {
            display: block;
            /*
             * Slotted option labels inherit type metrics from this host (same
             * Craft-vs-Tailwind trap as pk-dropdown-item). Size tokens arrive via
             * pk-select ::slotted(pk-option) custom properties.
             */
            font-family: var(--pk-font-family);
            font-size: var(--pk-select-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-select-item-line-height, 1.4);
            color: var(--pk-color-gray-700);
        }

        .option {
            position: relative;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
            margin: 0;
            min-height: var(--pk-select-item-min-height, var(--pk-input-height));
            padding-block: var(--pk-select-item-padding-block, 6px);
            padding-inline-start: var(--pk-select-item-padding-inline, 10px);
            padding-inline-end: var(--pk-select-item-padding-inline-end, 2rem);
            border: var(--pk-select-trigger-border-width, 1px) solid transparent;
            background: transparent;
            color: inherit;
            font: inherit;
            font-family: var(--pk-font-family);
            font-size: var(--pk-select-item-font-size, var(--pk-font-size-base));
            line-height: var(--pk-select-item-line-height, 1.4);
            text-align: left;
            white-space: nowrap;
            cursor: default;
            user-select: none;
            outline: none;
            box-sizing: border-box;
        }

        .start {
            display: none;
            flex: 0 0 auto;
            align-items: center;
        }

        :host([data-has-start]) .start {
            display: inline-flex;
        }

        :host([hidden]) {
            display: none !important;
        }

        .option:focus-visible,
        :host([highlighted]) .option {
            background: var(--pk-color-slate-100);
        }

        :host([disabled]) .option,
        .option[aria-disabled='true'] {
            pointer-events: none;
            opacity: 0.5;
        }

        .check {
            position: absolute;
            inset-inline-end: var(--pk-select-item-indicator-inset, 0.5rem);
            top: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            width: var(--pk-select-item-indicator-size, 0.75rem);
            height: var(--pk-select-item-indicator-size, 0.75rem);
            color: var(--pk-color-gray-700);
            pointer-events: none;
            transform: translateY(-50%);
            line-height: 0;
        }

        :host([selected]) .check {
            display: inline-flex;
        }

        .check svg {
            display: block;
            width: var(--pk-select-item-indicator-size, 0.75rem);
            height: var(--pk-select-item-indicator-size, 0.75rem);
            flex-shrink: 0;
            pointer-events: none;
        }

        .label {
            flex: 1;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            /* Allow custom multi-line option layouts (title + subtitle) to stack. */
            white-space: normal;
        }

        .match {
            padding: 0;
            border-radius: 2px;
            background: var(--pk-color-blue-100);
            color: inherit;
        }
    }
`,Qs=F(I.check),$s=class extends Ye{constructor(...e){super(...e),this.value=``,this.label=``,this.disabled=!1,this.selected=!1,this.highlighted=!1,this.hidden=!1,this.focusIndex=-1,this.optionId=``,this.matchQuery=``}static{this.styles=Zs}focusControl(e=!0){this.shadowRoot?.querySelector(`.option`)?.focus({preventScroll:e})}getLabel(){if(this.label.trim())return this.label.trim();let e=this.shadowRoot?.querySelector(`slot:not([name])`);return e?e.assignedNodes().map(e=>(e.textContent??``).trim()).filter(Boolean).join(` `).trim():this.textContent?.trim()??this.value}getSearchText(){let e=this.shadowRoot?.querySelector(`slot:not([name])`);return e&&e.assignedNodes().map(e=>(e.textContent??``).trim()).filter(Boolean).join(` `).trim()||this.getLabel()}hasRichLabelContent(){return[...this.children].some(e=>e instanceof HTMLElement?!e.slot||e.slot===``:!1)}getStartElements(){return[...this.querySelectorAll(`:scope > [slot="start"]`)].filter(e=>e instanceof HTMLElement)}firstUpdated(){(this.shadowRoot?.querySelector(`slot[name="start"]`))?.addEventListener(`slotchange`,()=>this.syncStartDecoration()),this.syncStartDecoration()}syncStartDecoration(){this.toggleAttribute(`data-has-start`,this.getStartElements().length>0)}handleClick(){this.disabled||this.dispatchEvent(new CustomEvent(`pk-option-select`,{detail:{value:this.value},bubbles:!0,composed:!0}))}handleMouseEnter(){this.disabled||this.hidden||this.dispatchEvent(new CustomEvent(`pk-option-highlight`,{detail:{value:this.value},bubbles:!0,composed:!0}))}handleKeyDown(e){if(!new Set([`ArrowDown`,`ArrowUp`,`ArrowLeft`,`ArrowRight`,`Home`,`End`,`Enter`,` `,`Escape`]).has(e.key))return;let t=this.closest(`pk-select, pk-combobox`),n=t?null:this.closest(`[role="listbox"]`);if(!t&&!n)return;e.preventDefault(),e.stopPropagation();let r=new CustomEvent(`pk-listbox-keydown`,{detail:{keyboardEvent:e},bubbles:!0});if(t){t.dispatchEvent(r);return}n.dispatchEvent(r)}renderLabel(){let e=this.matchQuery.trim();return!e||this.hasRichLabelContent()?w`
                <span part="label" class="label">
                    <slot></slot>
                </span>
            `:w`
            <span part="label" class="label">
                ${Xs(this.getLabel(),e).map(e=>e.match?w`<mark class="match">${e.text}</mark>`:w`<span>${e.text}</span>`)}
            </span>
        `}render(){return w`
            <button
                part="option"
                type="button"
                class="option"
                role="option"
                id=${this.optionId||E}
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:E}
                aria-selected=${this.selected?`true`:`false`}
                tabindex=${this.focusIndex}
                @click=${this.handleClick}
                @mouseenter=${this.handleMouseEnter}
                @keydown=${this.handleKeyDown}
            >
                <span part="start" class="start">
                    <slot name="start"></slot>
                </span>
                ${this.renderLabel()}
                <span part="check" class="check" aria-hidden="true">${N(Qs)}</span>
            </button>
        `}};D([k()],$s.prototype,`value`,void 0),D([k()],$s.prototype,`label`,void 0),D([k({type:Boolean,reflect:!0})],$s.prototype,`disabled`,void 0),D([k({type:Boolean,reflect:!0})],$s.prototype,`selected`,void 0),D([k({type:Boolean,reflect:!0})],$s.prototype,`highlighted`,void 0),D([k({type:Boolean,reflect:!0})],$s.prototype,`hidden`,void 0),D([k({type:Number,attribute:`focus-index`})],$s.prototype,`focusIndex`,void 0),D([k()],$s.prototype,`optionId`,void 0),D([k({attribute:!1})],$s.prototype,`matchQuery`,void 0),$s=D([O(`pk-option`)],$s);var ec=[_o,d`
    ${rt}
    @layer pk-component {
        :host {
            display: inline-block;
            position: relative;
            width: fit-content;
            max-width: 100%;
            align-self: flex-start;
            flex: none;
            color: var(--pk-color-gray-700);
            font-family: var(--pk-font-family);
            font-size: var(--pk-font-size-base);
            line-height: var(--pk-line-height);
            --pk-select-trigger-border-width: 1px;
            --pk-select-item-min-height: var(--pk-input-height);
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 2rem;
            --pk-select-item-font-size: var(--pk-font-size-base);
            --pk-select-item-line-height: var(--pk-input-control-line-height, 1.25rem);
            --pk-select-item-indicator-size: 0.75rem;
            --pk-select-item-indicator-inset: 0.5rem;
            /* v1 SelectLabel default: text-xs → 12px */
            --pk-select-group-label-font-size: 12px;
            --pk-select-decoration-size: 0.875rem;
        }

        :host([width='full']) {
            display: block;
            width: 100%;
        }

        :host([width='full']) .control {
            width: 100%;
        }

        :host([width='full']) button.control .icon {
            margin-inline-start: auto;
        }

        .control {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            /* Fill the host when consumers set min-width/width on :host. */
            width: 100%;
            max-width: 100%;
            min-width: 0;
            margin: 0;
            padding: var(--pk-select-item-padding-block) var(--pk-select-item-padding-inline);
            border: var(--pk-select-trigger-border-width) solid transparent;
            border-radius: var(--pk-radius-lg);
            --pk-select-fill: var(--pk-color-slate-250);
            --pk-select-fill-hover: var(--pk-color-slate-300);
            background: var(--pk-select-fill);
            color: var(--pk-color-gray-700);
            font: inherit;
            font-size: var(--pk-select-item-font-size);
            line-height: var(--pk-input-control-line-height, 1.25rem);
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
        }

        button.control {
            appearance: none;
            -webkit-appearance: none;
            text-align: left;
            background-color: var(--pk-select-fill);
            border: var(--pk-select-trigger-border-width) solid transparent;
        }

        :host(:not([disabled])) .control:hover:not(.is-disabled):not(:disabled),
        :host(:not([disabled])) button.control:hover:not(.is-disabled):not(:disabled) {
            background: var(--pk-select-fill-hover);
        }

        :host(:not([disabled])) button.control:hover:not(.is-disabled):not(:disabled) {
            background-color: var(--pk-select-fill-hover);
        }

        :host(:not([invalid]):not(:state(user-invalid))) button.control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) button.control {
            border-color: var(--pk-color-sky-600);
            box-shadow: var(--pk-input-focus-shadow);
        }

        .control.is-disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }

        .trigger {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;
            min-width: 0;
            padding: 0;
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            cursor: inherit;
            outline: none;
        }

        .control > .trigger:not(.trigger--icon) {
            flex: 0 1 auto;
            justify-content: flex-start;
        }

        .trigger--icon {
            width: 1.25rem;
        }

        .trigger-start {
            display: none;
            flex: 0 0 auto;
            align-items: center;
        }

        .trigger-start.has-decoration {
            display: inline-flex;
        }

        .control-start,
        .control-end {
            display: inline-flex;
            align-items: center;
            flex-shrink: 0;
            line-height: 0;
            color: var(--pk-color-gray-600);
        }

        slot[name='start']::slotted(svg),
        slot[name='end']::slotted(svg) {
            width: var(--pk-select-decoration-size);
            height: var(--pk-select-decoration-size);
        }

        .value {
            flex: 1 1 auto;
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: left;
        }

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            line-height: 0;
            pointer-events: none;
            color: var(--pk-color-gray-600);
        }

        /* Extra space before the expand chevron (control gap stays for start icon ↔ label). */
        .control > .icon,
        .control > .trigger--icon {
            margin-inline-start: 0.25rem;
        }

        .icon svg {
            display: block;
            width: 0.75rem;
            height: 0.75rem;
        }

        .tags {
            display: flex;
            flex: 0 1 auto;
            flex-wrap: wrap;
            gap: 0.25rem;
            min-width: 0;
        }

        .tag {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            max-width: 10ch;
            padding: 0.125rem 0.375rem;
            border-radius: var(--pk-radius-sm);
            background: var(--pk-color-gray-200);
            color: var(--pk-color-gray-800);
            font-size: 12px;
            line-height: 1.3;
        }

        .tag-label {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .tag-remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 0.875rem;
            height: 0.875rem;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
        }

        .tag-remove:hover {
            background: rgb(0 0 0 / 8%);
        }

        .clear-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 1.25rem;
            height: 1.25rem;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-sm);
            background: transparent;
            color: var(--pk-color-gray-600);
            cursor: pointer;
            flex-shrink: 0;
        }

        .clear-button:hover {
            background: rgb(0 0 0 / 6%);
            color: var(--pk-color-gray-800);
        }

        .value-input {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        .panel ::slotted(pk-separator) {
            margin: 4px 0;
        }

        .panel {
            width: max-content;
            min-width: var(--pk-select-anchor-width, 8rem);
            max-height: 16rem;
            overflow: auto;
            padding: 0;
            border: 0;
            border-radius: var(--pk-radius-md);
            background: var(--pk-color-white);
            box-shadow: var(--pk-shadow-popup);
            color: var(--pk-color-gray-700);
            outline: none;
        }

        .panel[hidden] {
            display: none !important;
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600);
        }

        :host([invalid]) button.control:focus-visible,
        :host([invalid][data-state='focus-visible']) button.control,
        :host(:state(user-invalid)) button.control:focus-visible,
        :host(:state(user-invalid)[data-state='focus-visible']) button.control {
            border-color: var(--pk-color-rose-600);
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        :host([size='xs']) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 4px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.25;
            /* v1 SelectLabel xs: text-[11px] */
            --pk-select-group-label-font-size: 11px;
            --pk-select-decoration-size: 0.625rem;
        }

        :host([size='xs']) .control {
            border-radius: var(--pk-radius-sm);
            /* Match trigger line-height to the compact item token (default is 1.25rem). */
            line-height: var(--pk-select-item-line-height, 1.25);
        }

        :host([size='xs']) .icon svg {
            width: 0.625rem;
            height: 0.625rem;
        }

        /* Options live in light DOM; ::slotted pushes size tokens onto each pk-option
         * host so the open listbox matches the trigger (inheritance alone is flaky when
         * the panel is promoted to the popover top layer). */
        :host([size='xs']) ::slotted(pk-option) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 4px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.25;
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host([size='xs']) .panel {
            max-height: 12rem;
        }

        /* Editable-table cells only (class set by pk-editable-table) — compact chip + menu. */
        :host(.cell-pk-control) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 5px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.5rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.2;
            /* Compact table chip — match xs label size. */
            --pk-select-group-label-font-size: 11px;
            --pk-select-decoration-size: 0.625rem;
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host(.cell-pk-control) .control {
            border-radius: var(--pk-radius-sm);
            line-height: var(--pk-select-item-line-height, 1.2);
        }

        :host(.cell-pk-control) ::slotted(pk-option) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 5px;
            --pk-select-item-padding-inline: 8px;
            --pk-select-item-padding-inline-end: 1.5rem;
            --pk-select-item-font-size: 11px;
            --pk-select-item-line-height: 1.2;
            --pk-select-item-indicator-size: 0.625rem;
        }

        :host(.cell-pk-control) .panel {
            max-height: 11rem;
        }

        :host([size='sm']) {
            --pk-select-item-min-height: 0;
            --pk-select-item-padding-block: 6px;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-padding-inline-end: 1.75rem;
            --pk-select-item-font-size: 12px;
            --pk-select-item-indicator-inset: 0.625rem;
            /* v1 SelectLabel sm: text-[12px] */
            --pk-select-group-label-font-size: 12px;
            --pk-select-decoration-size: 0.6875rem;
        }

        :host([size='sm']) .control {
            border-radius: var(--pk-radius-md);
        }

        :host([size='sm']) .icon svg {
            width: 0.6875rem;
            height: 0.6875rem;
        }

        :host([size='lg']) {
            --pk-select-item-padding-block: 8px;
            --pk-select-item-padding-inline: 12px;
            --pk-select-item-font-size: var(--pk-font-size-base);
            --pk-select-item-indicator-inset: 0.75rem;
            /* v1 SelectLabel lg: text-sm → 14px */
            --pk-select-group-label-font-size: 14px;
            --pk-select-decoration-size: 1rem;
        }

        :host([size='xl']) {
            --pk-select-item-padding-block: 10px;
            --pk-select-item-padding-inline: 14px;
            --pk-select-item-padding-inline-end: 2.25rem;
            --pk-select-item-font-size: var(--pk-font-size-base);
            --pk-select-item-indicator-inset: 0.875rem;
            /* v1 SelectLabel xl: text-base → 16px */
            --pk-select-group-label-font-size: 16px;
            --pk-select-decoration-size: 1.125rem;
        }

        :host([size='xl']) .icon svg {
            width: 0.875rem;
            height: 0.875rem;
        }
    }
`],tc=F(I.chevronDown),Q=class extends R{constructor(...e){super(...e),this.assumeInteractionOn=[`blur`,`input`],this.open=!1,this.multiple=!1,this.placement=`bottom-start`,this.sideOffset=4,this.clearable=!1,this.withClear=!1,this.invalid=!1,this.size=`default`,this.placeholder=``,this.value=``,this.defaultValue=``,this.values=[],this.defaultValues=[],this.ariaLabel=null,this.loopFocus=!1,this.hasSlotController=new Kr(this,`start`,`end`),this.listboxId=$r(`pk-select-listbox`),this.triggerId=$r(`pk-select-trigger`),this.options=[],this.highlightedIndex=0,this.dismissRegistered=!1,this.panelEventTarget=null,this.typeToSelect=uo([],()=>{}),this.closing=!1,this.panelAnimated=!1,this.handleOptionsMutation=(e={})=>{let t=this.getOptionElements(),n=t.length!==this.options.length||t.some((e,t)=>e!==this.options[t]);this.options=t,this.applySelection(),this.updateTypeToSelect(),e.render!==!1&&n&&this.requestUpdate()},this.syncOptions=()=>{this.handleOptionsMutation({render:!0})},this.togglePanel=e=>{e?.preventDefault(),e?.stopPropagation(),!(this.disabled||this.closing)&&(this.open?this.closePanel(`api`):this.openPanel())},this.onDocumentPointerDown=e=>{this.isPointerInside(e)||this.closePanel(`light-dismiss`)},this.onDocumentKeyDown=e=>{if(this.open){if(e.key===`Escape`){if(!gr(this))return;e.preventDefault(),e.stopPropagation(),this.closePanel(`escape`);return}(io.has(e.key)||ao(e))&&ho(e,{anchor:this.getPopupAnchor(),panel:this.panelElement})&&(e.preventDefault(),e.stopPropagation(),this.onListboxKeyDown(e))}},this.handleOptionSelect=e=>{let{value:t}=e.detail;this.multiple?this.values=this.values.includes(t)?this.values.filter(e=>e!==t):[...this.values,t]:(this.value=t,this.closePanel(`api`)),this.applySelection(),this.emitValueChange()},this.handleOptionHighlight=e=>{if(!this.open)return;let t=this.getEnabledVisibleOptions().findIndex(t=>t.value===e.detail.value);t===-1||t===this.highlightedIndex||(this.highlightedIndex=t,this.syncHighlight())},this.onKeyDown=e=>{if(!this.open){(e.key===`ArrowDown`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.openPanel());return}this.onListboxKeyDown(e)},this.handleListboxKeyDownEvent=e=>{this.open&&this.onListboxKeyDown(e.detail.keyboardEvent)}}static{this.styles=ec}static get validators(){return[...super.validators,Xr(),{observedAttributes:[`required`],checkValidity:e=>{let t=e,n={message:`Please select an item in the list.`,isValid:!0,invalidKeys:[]};return!t.required||!(t.multiple?t.values.length===0:!t.value)?n:(n.isValid=!1,n.invalidKeys.push(`valueMissing`),n)}}]}get panelElement(){return this.popupElement?.getContentElement()??null}connectedCallback(){this.refreshOptions(),super.connectedCallback(),this.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.addEventListener(`keydown`,this.onKeyDown),this.optionsObserver=new MutationObserver(()=>{this.handleOptionsMutation({render:!0})}),this.optionsObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this.unbindPanelEvents(),this.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),this.removeEventListener(`keydown`,this.onKeyDown),this.optionsObserver?.disconnect(),this.closePanel(`api`),super.disconnectedCallback()}updated(e){(e.has(`value`)||e.has(`values`)||e.has(`multiple`))&&this.applySelection(),super.updated(e)}getOptionElements(){let e=this.popupElement?.getContentElement()?.querySelectorAll(`pk-option`);return e&&e.length>0?[...e]:[...this.querySelectorAll(`pk-option`)]}refreshOptions(){this.handleOptionsMutation({render:!1})}bindPanelEvents(){let e=this.panelElement;!e||e===this.panelEventTarget||(this.unbindPanelEvents(),this.panelEventTarget=e,e.addEventListener(`pk-option-select`,this.handleOptionSelect),e.addEventListener(`pk-option-highlight`,this.handleOptionHighlight),e.addEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent))}unbindPanelEvents(){this.panelEventTarget&&=(this.panelEventTarget.removeEventListener(`pk-option-select`,this.handleOptionSelect),this.panelEventTarget.removeEventListener(`pk-option-highlight`,this.handleOptionHighlight),this.panelEventTarget.removeEventListener(`pk-listbox-keydown`,this.handleListboxKeyDownEvent),null)}get validationTarget(){return this.input??this.triggerButton??this.controlElement}getAriaMirrorTarget(){return this.triggerButton??this.controlElement??null}syncFormValue(){if(!this.name){this.setFormValue(null);return}if(this.multiple){let e=new FormData;for(let t of this.values)e.append(this.name,t);this.setFormValue(e);return}this.setFormValue(this.value||``)}resetToDefaultValue(){this.multiple?this.values=[...this.defaultValues]:this.value=this.defaultValue,this.applySelection()}restoreFormState(e){if(e instanceof FormData&&this.name){this.values=e.getAll(this.name).map(String);return}typeof e==`string`&&(this.value=e)}isOptionInHiddenGroup(e){return!!e.closest(`pk-option-group`)?.hidden}getVisibleOptions(){return this.options.filter(e=>!this.isOptionInHiddenGroup(e))}getEnabledVisibleOptions(){return this.getVisibleOptions().filter(e=>!e.disabled)}isSelected(e){return this.multiple?this.values.includes(e):this.value===e}applySelection(){let e=this.getVisibleOptions();for(let t of this.options)t.selected=this.isSelected(t.value),t.hidden=!e.includes(t),t.optionId=`${this.listboxId}-option-${t.value}`;for(let e of this.querySelectorAll(`pk-option-group`)){let t=[...e.querySelectorAll(`pk-option`)];e.hidden=t.length>0&&t.every(e=>e.hidden)}po(this),this.syncValueInput(),this.syncTriggerDecorations(),this.open&&this.syncHighlight()}syncValueInput(){if(this.input){if(this.multiple){this.input.value=this.values.join(`,`),this.input.required=this.required;return}this.input.value=this.value,this.input.required=this.required}}getDisplayValue(){if(this.multiple){let e=this.getSelectedOptions().map(e=>e.getLabel());return e.length>0?e.join(`, `):this.placeholder}return this.options.find(e=>e.value===this.value)?.getLabel()||this.placeholder}getSelectedOptions(){return this.options.filter(e=>this.isSelected(e.value))}syncTriggerDecorations(){let e=this.triggerStartElement;if(!e||this.multiple)return;e.replaceChildren(),e.classList.remove(`has-decoration`);let t=this.options.find(e=>e.value===this.value);if(t){for(let n of t.getStartElements())e.append(n.cloneNode(!0));e.classList.toggle(`has-decoration`,e.childElementCount>0)}}hasSelection(){return this.multiple?this.values.length>0:this.options.some(e=>e.value===this.value)||!!this.value}syncHighlightedIndexToSelection(){if(this.multiple)return;let e=this.getEnabledVisibleOptions();if(e.length===0)return;let t=e.findIndex(e=>e.value===this.value);t>=0&&(this.highlightedIndex=t)}syncHighlight(){let e=this.getEnabledVisibleOptions();for(let e of this.options)e.highlighted=!1,e.focusIndex=-1;if(e.length===0){this.highlightedIndex=0;return}this.highlightedIndex>=e.length&&(this.highlightedIndex=0);let t=e[this.highlightedIndex];t&&this.panelElement&&(t.highlighted=!0,t.focusIndex=0,Er(t,this.panelElement,`vertical`,`auto`))}updateTypeToSelect(){this.typeToSelect=uo(this.getEnabledVisibleOptions(),e=>{this.highlightedIndex=e,this.syncHighlight(),this.getEnabledVisibleOptions()[e]?.focusControl()})}getPopupAnchor(){return this.controlElement??null}getActiveDescendantId(){return this.getEnabledVisibleOptions()[this.highlightedIndex]?.optionId||null}async show(){this.open||this.closing||this.disabled||await this.openPanel()}async hide(e=`api`){!this.open||this.closing||await this.closePanel(e)}openPanel(){let e=this.getPopupAnchor();if(!e||this.closing)return Promise.resolve();this.dispatchEvent(new Dr),this.closing=!1,this.panelAnimated=!1,this.open=!0,this.popupElement.active=!0,this.applySelection(),this.syncHighlightedIndexToSelection(),this.panelElement&&(this.panelElement.hidden=!1,ii(this.panelElement,this.placement));let t=e.getBoundingClientRect().width;return this.style.setProperty(`--pk-select-anchor-width`,`${t}px`),this.registerDismissHandlers(),this.syncHighlight(),this.updateTypeToSelect(),this.updateComplete.then(async()=>{let e=await ai(this.popupElement,this.placement,300,{requireEvent:!0});this.panelElement&&ii(this.panelElement,e),this.panelAnimated=!0,this.bindPanelEvents(),this.refreshOptions(),this.getEnabledVisibleOptions()[this.highlightedIndex]?.focusControl(),this.dispatchEvent(new Or),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!0},bubbles:!0,composed:!0}))})}async closePanel(e=`unknown`){if(!this.open||this.closing)return;let t=new kr(e);this.dispatchEvent(t)&&(this.typeToSelect.reset(),this.unbindPanelEvents(),this.unregisterDismissHandlers(),this.closing=!0,this.panelAnimated=!1,await this.waitForExitAnimation(),this.open=!1,this.closing=!1,this.panelAnimated=!1,this.panelElement&&(this.panelElement.hidden=!0,this.panelElement.removeAttribute(`data-side`)),this.popupElement.active=!1,this.dispatchEvent(new Ar),this.dispatchEvent(new CustomEvent(`pk-open-change`,{detail:{open:!1},bubbles:!0,composed:!0})),this.shouldReturnFocusToTrigger(e)?this.triggerButton?.focus({preventScroll:!0}):this.triggerButton?.blur())}waitForExitAnimation(){let e=this.panelElement;return e?new Promise(t=>{let n=!1,r=()=>{n||(n=!0,e.removeEventListener(`animationend`,i),window.clearTimeout(a),e.classList.remove(`closing`),t())},i=t=>{t.target===e&&t.animationName.startsWith(`pk-popup-content-out`)&&r()};e.classList.add(`closing`),e.addEventListener(`animationend`,i);let a=window.setTimeout(r,150)}):Promise.resolve()}shouldReturnFocusToTrigger(e){return e!==`light-dismiss`&&e!==`pointer-dismiss`}registerDismissHandlers(){mr(this),this.dismissRegistered=!0,document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onDocumentKeyDown,!0)}unregisterDismissHandlers(){this.dismissRegistered&&=(hr(this),!1),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onDocumentKeyDown,!0)}isPointerInside(e){return go(e,{anchor:this.getPopupAnchor(),panel:this.panelElement})}removeTag(e,t){t.preventDefault(),t.stopPropagation(),this.values=this.values.filter(t=>t!==e),this.applySelection(),this.emitValueChange()}handleClear(e){e.preventDefault(),e.stopPropagation(),this.multiple?this.values=[]:this.value=``,this.applySelection(),this.dispatchEvent(new ti),this.emitValueChange(),this.triggerButton?.focus()}emitValueChange(){this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{value:this.multiple?[...this.values]:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}onListboxKeyDown(e){let t=this.getEnabledVisibleOptions();this.highlightedIndex=lo(e,{items:t,currentIndex:this.highlightedIndex,multiselect:this.multiple,loop:this.loopFocus,onSelect:e=>{this.highlightedIndex=e,this.syncHighlight()},focusItem:e=>{t[e]?.focusControl()},onClose:()=>{this.closePanel(`escape`)}}),e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&this.typeToSelect.handleKey(e)}renderTags(){return this.getSelectedOptions().map(e=>w`
            <span class="tag" part="tag">
                <span class="tag-label">${e.getLabel()}</span>
                <button
                    type="button"
                    class="tag-remove"
                    part="tag-remove"
                    aria-label=${`Remove ${e.getLabel()}`}
                    @click=${t=>this.removeTag(e.value,t)}
                >
                    ×
                </button>
            </span>
        `)}renderChevronIcon(){return w`
            <span class="icon" aria-hidden="true">${N(tc)}</span>
        `}renderHostDecorationSlot(e){return this.hasSlotController.test(e)?w`
            <span part=${e} class=${e===`start`?`control-start`:`control-end`}>
                <slot name=${e}></slot>
            </span>
        `:w`<slot name=${e} hidden></slot>`}render(){let e=this.getDisplayValue(),t=!this.hasSelection(),n=(this.clearable||this.withClear)&&this.hasSelection()&&!this.disabled;return w`
            <input
                class="value-input"
                part="value-input"
                tabindex="-1"
                aria-hidden="true"
                .value=${this.multiple?this.values.join(`,`):this.value}
                ?required=${this.required}
                @input=${()=>this.updateValidity()}
            />
            ${this.multiple?w`
                    <div
                        part="control"
                        class=${M({control:!0,"is-disabled":this.disabled})}
                    >
                        ${this.renderHostDecorationSlot(`start`)}
                        ${this.hasSelection()?w`
                                <div class="tags" part="tags">${this.renderTags()}</div>
                                ${n?w`
                                        <button
                                            type="button"
                                            class="clear-button"
                                            part="clear-button"
                                            aria-label="Clear selection"
                                            @click=${this.handleClear}
                                        >
                                            ×
                                        </button>
                                    `:E}
                            `:w`
                                <button
                                    part="trigger"
                                    type="button"
                                    class="trigger"
                                    id=${this.triggerId}
                                    ?disabled=${this.disabled}
                                    aria-label=${this.ariaLabel??E}
                                    aria-haspopup="listbox"
                                    aria-expanded=${this.open?`true`:`false`}
                                    aria-controls=${this.listboxId}
                                    @click=${this.togglePanel}
                                >
                                    <span class="value is-placeholder">${this.placeholder}</span>
                                </button>
                            `}
                        ${this.renderHostDecorationSlot(`end`)}
                        <button
                            type="button"
                            class="trigger trigger--icon"
                            part="trigger expand-button"
                            aria-label="Toggle options"
                            ?disabled=${this.disabled}
                            @click=${this.togglePanel}
                        >
                            ${this.renderChevronIcon()}
                        </button>
                    </div>
                `:w`
                    <button
                        part="control"
                        type="button"
                        class=${M({control:!0,"is-disabled":this.disabled})}
                        id=${this.triggerId}
                        ?disabled=${this.disabled}
                        aria-label=${this.ariaLabel??E}
                        aria-haspopup="listbox"
                        aria-expanded=${this.open?`true`:`false`}
                        aria-controls=${this.listboxId}
                        @click=${this.togglePanel}
                    >
                        ${this.renderHostDecorationSlot(`start`)}
                        <span part="trigger-start" class="trigger-start"></span>
                        <span
                            class=${M({value:!0,"is-placeholder":t})}
                        >${e}</span>
                        ${n?w`
                                <span
                                    class="clear-button"
                                    part="clear-button"
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Clear selection"
                                    @click=${this.handleClear}
                                >
                                    ×
                                </span>
                            `:E}
                        ${this.renderHostDecorationSlot(`end`)}
                        ${this.renderChevronIcon()}
                    </button>
                `}
            <pk-popup
                .anchor=${this.getPopupAnchor()??``}
                .placement=${this.placement}
                .distance=${this.sideOffset}
                .sync=${`width`}
                flip
                shift
            >
                <div
                    part="panel"
                    class=${M({panel:!0,"pk-popup-content":!0,closing:this.closing})}
                    id=${this.listboxId}
                    role="listbox"
                    aria-multiselectable=${this.multiple?`true`:`false`}
                    tabindex="-1"
                    ?hidden=${!this.open&&!this.closing}
                    data-open=${this.panelAnimated&&!this.closing?``:E}
                    @slotchange=${this.syncOptions}
                >
                    <slot></slot>
                </div>
            </pk-popup>
        `}};D([k({type:Boolean,reflect:!0})],Q.prototype,`open`,void 0),D([k({type:Boolean,reflect:!0})],Q.prototype,`multiple`,void 0),D([k({reflect:!0})],Q.prototype,`placement`,void 0),D([k({attribute:`side-offset`,type:Number})],Q.prototype,`sideOffset`,void 0),D([k({type:Boolean,reflect:!0})],Q.prototype,`clearable`,void 0),D([k({attribute:`with-clear`,type:Boolean})],Q.prototype,`withClear`,void 0),D([k({type:Boolean,reflect:!0})],Q.prototype,`invalid`,void 0),D([k({reflect:!0})],Q.prototype,`size`,void 0),D([k({reflect:!0})],Q.prototype,`width`,void 0),D([k()],Q.prototype,`placeholder`,void 0),D([k()],Q.prototype,`value`,void 0),D([k({attribute:`default-value`})],Q.prototype,`defaultValue`,void 0),D([k({type:Array,attribute:!1})],Q.prototype,`values`,void 0),D([k({attribute:!1})],Q.prototype,`defaultValues`,void 0),D([k({attribute:`aria-label`})],Q.prototype,`ariaLabel`,void 0),D([k({attribute:`loop-focus`,type:Boolean})],Q.prototype,`loopFocus`,void 0),D([j(`.trigger-start`)],Q.prototype,`triggerStartElement`,void 0),D([j(`pk-popup`)],Q.prototype,`popupElement`,void 0),D([j(`.control`)],Q.prototype,`controlElement`,void 0),D([j(`button.control, .control > button.trigger`)],Q.prototype,`triggerButton`,void 0),D([j(`.value-input`)],Q.prototype,`input`,void 0),D([A()],Q.prototype,`highlightedIndex`,void 0),D([A()],Q.prototype,`closing`,void 0),D([A()],Q.prototype,`panelAnimated`,void 0),Q=D([O(`pk-select`)],Q);var nc=null;function rc(){let e=globalThis.Craft?.timepicker;return{timeFormat:e?.timeFormat||`g:i A`,lang:{AM:e?.lang?.AM||`AM`,PM:e?.lang?.PM||`PM`},locale:e?.locale||document.documentElement.lang||`en-US`}}function ic(){if(nc)return nc;let e=[],{timeFormat:t,lang:n,locale:r}=rc();for(let i=0;i<24;i+=1)for(let a=0;a<60;a+=30){let o=`${i.toString().padStart(2,`0`)}:${a.toString().padStart(2,`0`)}`,s;if(t===`g:i A`){let e=i;i===0?e=12:i>12&&(e=i-12);let t=i>=12?n.PM:n.AM;s=`${e}:${a.toString().padStart(2,`0`)} ${t}`}else s=t===`G:i`?o:new Date(`2000-01-01T${o}:00`).toLocaleTimeString(r,{hour:`numeric`,minute:`2-digit`,hour12:t.includes(`A`)});e.push({value:o,label:s})}return nc=e,e}var ac=d`
    @layer pk-component {
        :host {
            display: inline-block;
            width: 8.125rem;
            min-width: 8.125rem;
            color: var(--pk-color-gray-700);
            --pk-select-trigger-border-width: 1px;
            --pk-select-item-min-height: 2.125rem;
            --pk-select-item-padding-block: 0;
            --pk-select-item-padding-inline: 10px;
            --pk-select-item-font-size: var(--pk-font-size-base);
        }

        .control {
            justify-content: flex-start;
            gap: 0.5rem;
            width: 100%;
            height: 2.125rem;
            min-height: 2.125rem;
            border-color: var(--pk-color-slate-400) !important;
            border-radius: var(--pk-radius-lg) !important;
            background: transparent !important;
            background-color: transparent !important;
            text-align: left;
            font-weight: 400;
            line-height: 1.2;
            cursor: default;
        }

        :host([open]) .control {
            background: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
            background-color: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
            border-color: var(--pk-color-slate-400) !important;
            box-shadow: none;
        }

        :host(:not([disabled])) .control:hover:not(:disabled) {
            background: var(--pk-color-slate-50) !important;
            background-color: var(--pk-color-slate-50) !important;
        }

        :host(:not([disabled])[open]) .control:hover:not(:disabled),
        :host(:not([disabled])) .control:active:not(:disabled) {
            background: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
            background-color: var(--pk-color-slate-150, var(--pk-color-slate-100)) !important;
        }

        :host(:not([invalid]):not(:state(user-invalid))) .control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border-color: var(--pk-color-sky-600) !important;
            box-shadow: var(--pk-input-focus-shadow);
        }

        :host(:not([invalid]):not(:state(user-invalid))[open]) .control:focus-visible,
        :host(:not([invalid]):not(:state(user-invalid))[open][data-state='focus-visible']) .control {
            border-color: var(--pk-color-slate-400) !important;
            box-shadow: none;
        }

        :host([invalid]) .control,
        :host(:state(user-invalid)) .control {
            border-color: var(--pk-color-rose-600) !important;
        }

        :host([invalid]) .control:focus-visible,
        :host([invalid][data-state='focus-visible']) .control,
        :host(:state(user-invalid)) .control:focus-visible,
        :host(:state(user-invalid)[data-state='focus-visible']) .control {
            box-shadow: var(--pk-input-invalid-focus-shadow);
        }

        .control-start {
            color: var(--pk-color-gray-400);
            pointer-events: none;
        }

        .control-start svg {
            display: block;
            width: 14px;
            height: 14px;
        }

        .value {
            flex: 1;
            line-height: 1.2;
            color: inherit;
        }

        .value.is-placeholder {
            color: var(--pk-color-gray-400);
        }

        .icon {
            margin-inline-start: auto;
            color: var(--pk-color-gray-600);
        }

        .panel {
            min-width: 8rem;
            max-height: 15rem;
        }

        /* Editable-table cells: flush fill — must live here so !important beats the
         * standalone trigger chrome (external ::part cannot override it). */
        :host(.cell-pk-control) {
            display: block;
            width: 100%;
            min-width: 0;
            height: 100%;
            --pk-select-trigger-border-width: 0;
            --pk-select-item-min-height: 100%;
            --pk-select-item-padding-block: 0;
        }

        :host(.cell-pk-control) .control {
            width: 100%;
            height: 100% !important;
            min-height: 100% !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            background-color: transparent !important;
        }

        :host(.cell-pk-control:not([disabled])) .control:hover:not(:disabled),
        :host(.cell-pk-control[open]) .control,
        :host(.cell-pk-control:not([disabled])[open]) .control:hover:not(:disabled),
        :host(.cell-pk-control:not([disabled])) .control:active:not(:disabled) {
            border-radius: 0 !important;
        }

        :host(.cell-pk-control:not([invalid]):not(:state(user-invalid))) .control:focus-visible,
        :host(.cell-pk-control:not([invalid]):not(:state(user-invalid))[data-state='focus-visible']) .control {
            border: 0 !important;
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200, #e5e7eb);
        }
    }
`,oc=class extends Q{constructor(...e){super(...e),this.optionsSeeded=!1}static{this.styles=[...ec,ac]}connectedCallback(){this.ensureTimeOptions(),this.ensureClockIcon(),super.connectedCallback()}ensureTimeOptions(){if(this.optionsSeeded||this.querySelector(`pk-option`)){this.optionsSeeded=!0;return}for(let e of ic()){let t=document.createElement(`pk-option`);t.value=e.value,t.textContent=e.label,this.append(t)}this.optionsSeeded=!0}ensureClockIcon(){if(this.querySelector(`[slot="start"]`))return;let e=rr(I.clock);e.setAttribute(`slot`,`start`),this.prepend(e)}};oc=D([O(`pk-time-picker`)],oc);var sc=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},cc=lt(class extends ut{constructor(e){if(super(e),e.type!==ct.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Po(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=jo(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=jo(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=jo(i[d],a[m]),Ao(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=jo(i[f],a[p]),Ao(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=sc(o,p,m),u=sc(s,d,f)),l.has(s[d]))if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=Ao(e,i[d]);jo(t,a[p]),c[p]=t}else c[p]=jo(n,a[p]),Ao(e,i[d],n),i[t]=null;p++}else Fo(i[f]),f--;else Fo(i[d]),d++;for(;p<=m;){let t=Ao(e,c[m+1]);jo(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Fo(e)}return this.ut=o,No(e,c),T}}),lc=class e{static{this.SWAP_INSET=.3}constructor(e){this.callbacks=e,this.rows=[],this.disabled=!1,this.handleCleanups=[],this.dragSession=null}get isActive(){return this.handleCleanups.length>0}get isSessionActive(){return this.dragSession!==null}sync(e,t){if(!this.dragSession){this.destroyHandles(),this.rows=e,this.disabled=t;for(let t of e){if(!t.handle)continue;let e=e=>{this.handlePointerDown(e,t)};t.handle.addEventListener(`pointerdown`,e),this.handleCleanups.push(()=>{t.handle?.removeEventListener(`pointerdown`,e)})}}}destroy(){this.cancelDrag(),this.destroyHandles(),this.rows=[]}handlePointerDown(e,t){if(this.disabled||this.dragSession||e.button!==0||!e.isPrimary)return;let n=this.rows.findIndex(e=>e.id===t.id),r=t.element.parentElement,i=t.element.closest(`table`);if(n<0||!(r instanceof HTMLTableSectionElement)||!(i instanceof HTMLTableElement))return;e.preventDefault();let a=[...t.element.cells].map(e=>e.getBoundingClientRect().width),o=this.freezeTableColumns(i,a),s=t.element.getBoundingClientRect(),c=r.getBoundingClientRect(),l={x:e.clientX-s.left,y:e.clientY-s.top},u=this.createPlaceholder(t.element,a,s.height);t.element.insertAdjacentElement(`afterend`,u);let d=this.liftRow(t.element,s,a),f={row:t,fromIndex:n,table:i,tbody:r,placeholder:u,pointerId:e.pointerId,pointerOffset:l,startLeft:s.left,rowHeight:s.height,tbodyTop:c.top,tbodyBottom:c.bottom,fixedOrigin:d,unfreezeColumns:o,cleanup:[],committed:!1},p=t.element.ownerDocument,m=e=>{if(e.pointerId!==f.pointerId||f.committed)return;e.preventDefault();let t=f.tbody.getBoundingClientRect();f.tbodyTop=t.top,f.tbodyBottom=t.bottom,this.updateOverlay(f,e.clientY),this.updateGap(f,e.clientY-f.pointerOffset.y+f.rowHeight/2)},h=e=>{e.pointerId!==f.pointerId||f.committed||(e.preventDefault(),this.commitDrag(f))},g=e=>{e.pointerId!==f.pointerId||f.committed||this.cancelDrag()};p.addEventListener(`pointermove`,m,{passive:!1}),p.addEventListener(`pointerup`,h,{passive:!1}),p.addEventListener(`pointercancel`,g),f.cleanup.push(()=>{p.removeEventListener(`pointermove`,m)},()=>{p.removeEventListener(`pointerup`,h)},()=>{p.removeEventListener(`pointercancel`,g)}),this.dragSession=f,this.updateOverlay(f,e.clientY)}updateOverlay(e,t){let n=t-e.pointerOffset.y,r=e.tbodyTop,i=Math.max(r,e.tbodyBottom-e.rowHeight),a=Math.min(i,Math.max(r,n)),o=e.row.element;o.style.top=`${a-e.fixedOrigin.y}px`,o.style.left=`${e.startLeft-e.fixedOrigin.x}px`}updateGap(t,n){let r=t.placeholder,i=t.row.element,a=[...t.tbody.querySelectorAll(`tr[data-row-id]`)].filter(e=>e!==i&&!e.hasAttribute(`data-pk-dnd-placeholder`)),o=r.getBoundingClientRect(),s=n<o.top+o.height/2,c=e.SWAP_INSET,l=null;for(let e of a){let t=e.getBoundingClientRect();if(!(t.height<=0)&&n<(s?t.top+t.height*(1-c):t.top+t.height*c)){l=e;break}}if(l){r.nextElementSibling!==l&&t.tbody.insertBefore(r,l);return}t.tbody.lastElementChild!==r&&t.tbody.append(r)}commitDrag(e){if(e.committed||this.dragSession!==e)return;e.committed=!0,this.cleanupDrag(e),this.dragSession=null;let t=[...e.tbody.querySelectorAll(`tr[data-row-id]`)].map(e=>e.dataset.rowId??``).filter(e=>e!==``);this.callbacks.onReorderTo(t)}cancelDrag(){let e=this.dragSession;!e||e.committed||(e.committed=!0,this.restorePlaceholderToOrigin(e),this.cleanupDrag(e),this.dragSession=null)}restorePlaceholderToOrigin(e){let t=[...e.tbody.querySelectorAll(`tr[data-row-id]`)].filter(t=>t!==e.row.element&&!t.hasAttribute(`data-pk-dnd-placeholder`));if(e.fromIndex>=t.length){e.tbody.lastElementChild!==e.placeholder&&e.tbody.append(e.placeholder);return}let n=t[e.fromIndex];n&&e.placeholder.nextElementSibling!==n&&e.tbody.insertBefore(e.placeholder,n)}cleanupDrag(e){for(let t of e.cleanup)t();let t=e.row.element;e.placeholder.replaceWith(t),this.unliftRow(t),e.unfreezeColumns()}freezeTableColumns(e,t){e.querySelector(`:scope > colgroup[data-pk-dnd-cols]`)?.remove();let n=e.ownerDocument.createElement(`colgroup`);n.setAttribute(`data-pk-dnd-cols`,`true`);for(let r of t){let t=e.ownerDocument.createElement(`col`);t.style.width=`${r}px`,n.append(t)}let r=e.style.tableLayout;return e.prepend(n),e.style.tableLayout=`fixed`,()=>{n.remove(),e.style.tableLayout=r}}createPlaceholder(e,t,n){let r=e.cloneNode(!0);return r.setAttribute(`data-pk-dnd-placeholder`,`true`),r.setAttribute(`aria-hidden`,`true`),r.removeAttribute(`data-row-id`),r.style.visibility=`hidden`,r.style.pointerEvents=`none`,r.style.height=`${n}px`,[...r.cells].forEach((e,n)=>{let r=t[n];typeof r==`number`&&(e.style.width=`${r}px`,e.style.minWidth=`${r}px`,e.style.maxWidth=`${r}px`,e.style.boxSizing=`border-box`),e.replaceChildren()}),r}liftRow(e,t,n){e.classList.add(`is-dragging`),[...e.cells].forEach((e,t)=>{let r=n[t];typeof r==`number`&&(e.style.width=`${r}px`,e.style.minWidth=`${r}px`,e.style.maxWidth=`${r}px`,e.style.boxSizing=`border-box`)}),e.style.position=`fixed`,e.style.top=`0px`,e.style.left=`0px`,e.style.width=`${t.width}px`,e.style.height=`${t.height}px`,e.style.margin=`0`,e.style.zIndex=`2147483647`,e.style.pointerEvents=`none`,e.style.boxShadow=`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`,e.style.background=`var(--pk-color-white, #fff)`,e.style.opacity=`0.96`;let r=e.getBoundingClientRect(),i={x:r.left,y:r.top};return e.style.top=`${t.top-i.y}px`,e.style.left=`${t.left-i.x}px`,i}unliftRow(e){e.classList.remove(`is-dragging`),e.style.position=``,e.style.top=``,e.style.left=``,e.style.width=``,e.style.height=``,e.style.margin=``,e.style.zIndex=``,e.style.pointerEvents=``,e.style.boxShadow=``,e.style.background=``,e.style.opacity=``;for(let t of e.cells)t.style.width=``,t.style.minWidth=``,t.style.maxWidth=``,t.style.boxSizing=``}destroyHandles(){for(let e of this.handleCleanups)e();this.handleCleanups=[]}},uc=d`
    @layer pk-component {
        :host {
            display: block;
            font-family: var(--pk-font-family);
            /* Craft CP body text (~gray-700), not gray-900. */
            color: var(--pk-color-gray-700);
            /* Shell matches v1 Table: border-gray-200 + rounded-md (token md = 4px). */
            --pk-et-border: 1px solid var(--pk-color-gray-200, #e5e7eb);
            --pk-et-radius: var(--pk-radius-md, 4px);
            --pk-et-gridline: var(--pk-color-gray-100, #f3f4f6);
            /* Static row height — matches v1 TableCell h-[34px] (border-box). */
            --pk-et-cell-height: 34px;
            --pk-et-action-size: 24px;
            --pk-et-action-icon: 12px;
            /* Grip reads smaller than ellipsis/x at the same token — nudge up slightly. */
            --pk-et-action-grip-icon: 14px;
        }

        /* v1 Table: shell scrolls horizontally; Add row sits outside so it stays full-width. */
        .et-scroll {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
            border: var(--pk-et-border);
            border-radius: var(--pk-et-radius) var(--pk-et-radius) 0 0;
            background: var(--pk-color-white, #fff);
        }

        .et {
            /* v1 Table uses w-full: fill the shell, squish toward column width hints /
             * content minima, then overflow-x on .et-scroll takes over. */
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            background: var(--pk-color-white, #fff);
        }

        thead {
            background: var(--pk-color-gray-50, #f8fafc);
        }

        thead th {
            padding: 0.375rem 0.5rem;
            text-align: left;
            font-size: 12px;
            font-weight: 500;
            color: var(--pk-color-gray-700, #374151);
            background: var(--pk-color-gray-50, #f8fafc);
            /* v1 TableHead has no cell borders — body cells own the gridlines. */
            border: 0;
            white-space: nowrap;
        }

        tbody td + td {
            border-inline-start: 1px solid var(--pk-et-gridline);
        }

        thead th.thin,
        tbody td.thin {
            width: 0.01%;
            white-space: nowrap;
        }

        thead th.actions,
        tbody td.actions {
            width: 0.01%;
            white-space: nowrap;
        }

        tbody td.actions {
            padding-inline: 0.25rem;
            /* v1 TableRow actions cell — soft cool wash so controls read as chrome, not data. */
            background: #fbfcfe;
        }

        .required {
            margin-left: 0.125rem;
            color: var(--pk-color-rose-600, #e11d48);
        }

        tbody td {
            box-sizing: border-box;
            padding: 0;
            height: var(--pk-et-cell-height);
            background: var(--pk-color-white, #fff);
            /* v1 TableCell: border-t gray-100 — also separates header once th borders are gone. */
            border-top: 1px solid var(--pk-et-gridline);
            vertical-align: middle;
            /* Match v1 TableCell whitespace-nowrap — drives intrinsic mins before scroll. */
            white-space: nowrap;
            /* Let auto table layout compress past control preferred sizes. */
            min-width: 0;
        }

        tbody tr.is-dragging {
            opacity: 0.4;
        }

        /* Semantic row tones from modifyRow — host Tailwind cannot style shadow <tr>. */
        tbody tr[data-tone='warning'] > td {
            background: color-mix(in srgb, var(--pk-color-amber-50, #fffbeb) 80%, transparent);
        }

        tbody tr[data-tone='muted'] > td {
            background: color-mix(in srgb, var(--pk-color-slate-100, #f1f5f9) 90%, transparent);
        }

        .cell-pk-control {
            display: block;
            width: 100%;
            min-width: 0;
            height: var(--pk-et-cell-height);
            min-height: var(--pk-et-cell-height);
            --pk-input-border-radius: 0;
            --pk-select-border-radius: 0;
            --pk-date-picker-border-radius: 0;
            --pk-input-bg: var(--pk-color-white, #fff);
            --pk-combobox-fill: var(--pk-color-white, #fff);
            --pk-input-height: var(--pk-et-cell-height);
        }

        pk-input.cell-pk-control::part(base) {
            padding-inline: 0.5rem;
            background: var(--pk-color-white, #fff);
        }

        /* v1 EditableTable Input is text-sm (14px); size=xs would be 11px. */
        pk-input.cell-pk-control:not([mono])::part(input) {
            font-size: var(--pk-font-size-base, 14px);
        }

        /* v1 handle/value: font-mono text-[0.9em] — do not let the 14px cell
         * override wipe pk-input[mono]'s optical scale. */
        pk-input.cell-pk-control[mono]::part(input) {
            font-size: calc(var(--pk-font-size-base, 14px) * 0.9);
            line-height: var(--pk-line-height-mono, 1.5);
        }

        /* Select/combobox sit inset horizontally only (v1 TableCell px-2).
         * No block padding — vertical inset comes from the size=xs chip itself. */
        tbody td:has(> pk-select.cell-pk-control),
        tbody td:has(> pk-combobox.cell-pk-control) {
            padding: 0 0.5rem;
        }

        pk-select.cell-pk-control,
        pk-combobox.cell-pk-control {
            display: block;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            /* Override shared .cell-pk-control height so the chip centers in the row. */
            height: auto;
            min-height: 0;
            /* Don't inherit the 34px cell --pk-input-height into the trigger. */
            --pk-input-height: auto;
            --pk-select-item-min-height: 0;
        }

        pk-input.cell-pk-control {
            /* Text-like cells fill the td. Inner input text keeps padding via ::part(base);
             * invalid chrome should hit the gridlines, not sit inside an inset chip. */
            height: var(--pk-et-cell-height);
            min-height: var(--pk-et-cell-height);
        }

        /* Date/time fill the cell flush — no trigger chrome (v1 border-none + h/w-full).
         * display:block so the inline-block host doesn't baseline-shift off center. */
        pk-date-picker.cell-pk-control,
        pk-time-picker.cell-pk-control {
            display: block;
            width: 100%;
            min-width: 0;
            height: var(--pk-et-cell-height);
            --pk-date-picker-height: var(--pk-et-cell-height);
            --pk-date-picker-min-width: 0;
            --pk-select-item-min-height: var(--pk-et-cell-height);
            --pk-select-trigger-border-width: 0;
        }

        /* The base trigger sizes to 100% of the host, but the shared form-control
         * wrappers default to auto height, collapsing that chain and top-aligning
         * the date. Stretch the wrappers so 100% resolves and align-items centers. */
        pk-date-picker.cell-pk-control::part(form-control),
        pk-date-picker.cell-pk-control::part(form-control-input) {
            height: 100%;
        }

        pk-date-picker.cell-pk-control::part(base) {
            width: 100%;
            min-width: 0;
            height: 100%;
            min-height: 100%;
            border: 0;
            border-radius: 0;
            background: transparent;
        }

        pk-date-picker.cell-pk-control::part(base):focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200, #e5e7eb);
        }

        pk-time-picker.cell-pk-control::part(control) {
            width: 100%;
            min-width: 0;
            height: 100% !important;
            min-height: 100% !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            background-color: transparent !important;
        }

        pk-time-picker.cell-pk-control::part(control):focus-visible {
            box-shadow: inset 0 0 0 1px var(--pk-color-gray-200, #e5e7eb);
        }

        td.has-error .cell-pk-control {
            --pk-input-border-color: var(--pk-color-rose-600, #e11d48);
        }

        /* Flush/borderless date/time only — select/combobox/color paint their own
         * invalid chrome via ?invalid, so a host ring would double up. */
        td.has-error pk-date-picker.cell-pk-control,
        td.has-error pk-time-picker.cell-pk-control {
            box-shadow: inset 0 0 0 1px var(--pk-color-rose-600, #e11d48);
        }

        .cell-static {
            padding: 0.5rem;
            font-size: var(--pk-font-size-base, 14px);
            line-height: 1.4;
            color: inherit;
        }

        /* Custom / slotted cells — fill the td; light-DOM content keeps host styles. */
        .cell-slot {
            display: block;
            width: 100%;
            min-width: 0;
            min-height: var(--pk-et-cell-height);
            height: 100%;
        }

        .cell-slot ::slotted(*) {
            display: block;
            width: 100%;
            min-width: 0;
            min-height: var(--pk-et-cell-height);
            box-sizing: border-box;
        }

        .cell-heading {
            font-weight: 600;
            color: var(--pk-color-gray-800, #1f2937);
        }

        .cell-mono {
            font-family: var(--pk-font-family-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace);
            font-size: var(--pk-font-size-mono, 0.9em);
            line-height: var(--pk-line-height-mono, 1.5);
        }

        .cell-check {
            display: flex;
            align-items: center;
            justify-content: center;
            height: var(--pk-et-cell-height);
            min-width: 2.125rem;
        }

        .cell-check--switch {
            min-width: 3rem;
        }

        pk-checkbox,
        pk-radio,
        pk-lightswitch {
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .row-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            /* v1 packs 24px action buttons flush — no gap between hitboxes. */
            gap: 0;
        }

        .row-actions pk-dropdown-menu {
            display: inline-flex;
        }

        /* Action row buttons: fixed 24px hitbox (v1), variant=none, icon-only color hover. */
        .row-actions pk-button.action-btn {
            --pk-btn-height: var(--pk-et-action-size);
            --pk-btn-icon-size: var(--pk-et-action-icon);
            --pk-btn-padding-inline: 0;
            color: var(--pk-color-gray-500, #6b7280);
            width: var(--pk-et-action-size);
            flex: 0 0 var(--pk-et-action-size);
        }

        .row-actions pk-button.action-btn::part(base) {
            width: var(--pk-et-action-size);
            height: var(--pk-et-action-size);
            min-height: var(--pk-et-action-size);
            padding: 0;
            background: transparent;
        }

        .row-actions pk-button.action-btn::part(base):hover:not(:disabled) {
            /* No hover fill — only the glyph color shifts (v1 hover:bg-transparent). */
            background: transparent;
            color: var(--pk-color-sky-600, #0284c7);
        }

        .row-actions pk-button.action-btn.action-delete::part(base):hover:not(:disabled) {
            background: transparent;
            color: var(--pk-color-rose-500, #f43f5e);
        }

        .row-actions pk-button.action-btn:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }

        /* Light-DOM handle wrapper (v1) — pointer drag binds here so shadow clicks don't interfere.
           pk-button :host { cursor: pointer } wins over inherited span cursor — set it on the host. */
        .row-actions .action-handle {
            display: inline-flex;
            cursor: move;
        }

        .row-actions .action-handle pk-button.action-btn {
            cursor: move;
            --pk-btn-icon-size: var(--pk-et-action-grip-icon);
        }

        .row-actions .action-handle:has(pk-button:disabled),
        .row-actions .action-handle pk-button.action-btn[disabled] {
            cursor: default;
        }

        /* Before deferred drag binding — grip visible but inactive (v1 faded controls). */
        .row-actions .action-handle.is-pending {
            opacity: 0.45;
        }

        /* Live row is floated as the overlay; placeholder clone holds the gap. */
        tr.is-dragging {
            display: table-row;
        }

        tr[data-pk-dnd-placeholder] {
            visibility: hidden;
            pointer-events: none;
        }

        /* Attach dashed add-row under the table shell (v1 Button variant=dashed). */
        pk-button.add-row {
            display: block;
            width: 100%;
            margin-top: -1px;
            --pk-btn-radius: 0;
        }

        pk-button.add-row::part(base) {
            width: 100%;
            border-top: 0;
            border-radius: 0 0 var(--pk-et-radius) var(--pk-et-radius);
        }

        :host([disabled]) pk-button.add-row {
            opacity: 0.5;
            pointer-events: none;
        }

        .empty {
            padding: 0.75rem 0.625rem;
            color: var(--pk-color-gray-500, #6b7280);
            font-size: 13px;
        }
    }
`,dc={EMPTY:`empty`,AUTO:`auto`,MANUAL:`manual`,SEEDED:`seeded`},fc=e=>(e.type===`handle`||e.type===`value`)&&!!e.name&&!!e.source,pc=e=>!!(e.thin||e.type===`checkbox`||e.type===`lightswitch`||e.type===`radio`),mc=e=>e==null||e===``,hc=(e,t)=>`${e}:${t}`,gc=e=>Array.isArray(e)?e.map(e=>typeof e==`string`?{label:e,value:e}:{label:String(e.label??e.value??``),value:String(e.value??``)}):[],_c=e=>e.type===`checkbox`||e.type===`lightswitch`||e.type===`radio`?!1:``,vc=e=>{let t=e.normalize(`NFKD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/['"'""[\](){}:]/g,``).split(/[^a-z0-9]+/).filter(Boolean);return t.length===0?``:t.map((e,t)=>t===0?e:e.charAt(0).toUpperCase()+e.slice(1)).join(``)},yc=0,bc=()=>(yc+=1,`etr_${Date.now().toString(36)}_${yc}`),xc=(e,t)=>`cell:${e}:${t}`,Sc=new Set([`text`,`textarea`,`number`,`email`,`url`,`select`,`combobox`,`checkbox`,`radio`,`lightswitch`,`color`,`date`,`time`,`heading`,`label`,`handle`,`value`,`custom`]),Cc=e=>{let t=e.type;return t===`custom`||typeof t==`string`&&!Sc.has(t)},wc=F(Xt).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Tc=F(Kt).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Ec=F(Ct).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Dc=F(vt).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Oc=F(Nn).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),kc=F(yn).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),Ac=F(Fn).replace(`<svg`,`<svg slot="start" aria-hidden="true"`),jc=e=>{if(!e)return``;if(e===`gear`)return Ac;let t=Jn(e);return t?F(t).replace(`<svg`,`<svg slot="start" aria-hidden="true"`):``},$=class extends R{constructor(...e){super(...e),this.columns=[],this.rows=[],this.allowAdd=!0,this.allowDelete=!0,this.allowReorder=!0,this.addRowLabel=``,this.fieldName=``,this.cellErrors={},this.newRowDefaults={},this.modifyColumn=null,this.modifyRow=null,this.getRowMenuItems=null,this.internalRows=[],this.dndReady=!1,this.generatedCellModes=new Map,this.dndController=new lc({onReorderTo:e=>{this.commitReorderByIds(e)}}),this.dndIdleId=null,this.dndTimeoutId=null,this.dndRowSignature=``}static{this.styles=uc}static get validators(){return[...super.validators,Gr()]}willUpdate(e){if(e.has(`rows`)){let e=Array.isArray(this.rows)?this.rows:[],t=this.internalRows;this.internalRows=e.map((e,n)=>{let r=typeof e._id==`string`?e._id:typeof t[n]?._id==`string`?String(t[n]._id):bc();return{...e,_id:r}}),this.syncGeneratedModesFromRows(),this.syncFormValue()}(e.has(`allowReorder`)||e.has(`disabled`))&&this.scheduleDndHydration(),super.willUpdate(e)}firstUpdated(e){super.firstUpdated(e),this.scheduleDndHydration()}shouldUpdate(e){return!this.dndController.isSessionActive&&super.shouldUpdate(e)}updated(e){super.updated(e),this.dndReady&&this.allowReorder&&!this.disabled?this.dndController.isSessionActive||this.syncDndSortables():this.dndController.isActive&&(!this.allowReorder||this.disabled||!this.dndReady)&&(this.dndController.destroy(),this.dndRowSignature=``)}disconnectedCallback(){this.cancelDndHydration(),this.dndController.destroy(),this.dndReady=!1,super.disconnectedCallback()}get value(){return this.internalRows.length?JSON.stringify(this.cleanRows()):``}get validColumns(){return(Array.isArray(this.columns)?this.columns:[]).filter(e=>typeof e?.name==`string`&&e.name.trim()!==``)}get generatedColumns(){return this.validColumns.filter(fc)}get showActionsColumn(){return this.allowReorder||this.allowDelete||!!this.getRowMenuItems}cleanRows(){return this.internalRows.map(e=>{let{_id:t,...n}=e;return n})}setCellValue(e,t,n){let r=this.internalRows[e];if(!r)return;let i=this.validColumns.find(e=>e.name===t);i&&this.updateCell(e,this.resolveColumn(r,i,e),n)}resolveColumn(e,t,n){let r=this.modifyColumn?.(e,t.name,t,n);return!r||typeof r!=`object`?t:{...t,...r,name:t.name}}resolveRowModifier(e,t){let n=this.modifyRow?.(e,t);return!n||typeof n!=`object`?{}:n}resolveRowMenuItems(e,t){let n=this.getRowMenuItems?.(e,t);return Array.isArray(n)?n.filter(e=>e&&typeof e.label==`string`):[]}syncGeneratedModesFromRows(){let e=this.generatedColumns;if(this.internalRows.length===0||e.length===0){this.generatedCellModes.clear();return}let t=new Set;for(let n of this.internalRows){let r=String(n._id);for(let i of e){let e=hc(r,i.name);t.add(e),!this.generatedCellModes.has(e)&&this.generatedCellModes.set(e,mc(n[i.name])?dc.EMPTY:dc.SEEDED)}}for(let e of[...this.generatedCellModes.keys()])t.has(e)||this.generatedCellModes.delete(e)}syncFormValue(){let e=JSON.stringify(this.cleanRows());this.setFormValue(e,e)}restoreFormState(e){if(typeof e==`string`)try{let t=JSON.parse(e);Array.isArray(t)&&(this.rows=t)}catch{}}stopInnerControlEvent(e){e.target!==this&&e.stopPropagation()}emitChange(){let e=this.internalRows.map(e=>({...e}));this.rows=e,this.syncFormValue(),this.dispatchEvent(new CustomEvent(`pk-change`,{detail:{rows:e},bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}emitCellChange(e,t,n,r){this.dispatchEvent(new CustomEvent(`pk-cell-change`,{detail:{rowIndex:e,columnName:t,value:n,row:r},bubbles:!0,composed:!0}))}commitRows(e,t=[]){this.internalRows=e,this.emitChange();for(let e of t)this.emitCellChange(e.rowIndex,e.columnName,e.value,e.row)}updateCell(e,t,n){let r=this.internalRows[e];if(!r)return;if(t.type===`radio`){let i=!!n,a=!!t.allowUnselect,o=this.internalRows.map(e=>({...e})),s=[];if(i)o.forEach((n,r)=>{let i=r===e;!!n[t.name]!==i&&(o[r]={...n,[t.name]:i},s.push({rowIndex:r,columnName:t.name,value:i,row:this.internalRows[r]}))});else if(a&&r[t.name])o[e]={...r,[t.name]:!1},s.push({rowIndex:e,columnName:t.name,value:!1,row:r});else return;if(s.length===0)return;this.commitRows(o,s);return}fc(t)&&this.generatedCellModes.set(hc(String(r._id),t.name),mc(n)?dc.EMPTY:dc.MANUAL);let i={[t.name]:n},a={};for(let e of this.generatedColumns){if(e.source!==t.name)continue;let i=hc(String(r._id),e.name),o=r[e.name],s=this.generatedCellModes.get(i)??(mc(o)?dc.EMPTY:dc.SEEDED);s===dc.MANUAL||s===dc.SEEDED||(e.type===`handle`?(a[e.name]=vc(String(n??``)),this.generatedCellModes.set(i,dc.AUTO)):e.type===`value`&&(a[e.name]=n,this.generatedCellModes.set(i,dc.AUTO)))}let o={...i,...a};if(!Object.entries(o).some(([e,t])=>r[e]!==t))return;let s=this.internalRows.slice();s[e]={...r,...o};let c=Object.entries(o).map(([t,n])=>({rowIndex:e,columnName:t,value:n,row:r}));this.commitRows(s,c)}addRow(){if(this.disabled||!this.allowAdd)return;let e={_id:bc(),...this.newRowDefaults&&typeof this.newRowDefaults==`object`?this.newRowDefaults:{}};for(let t of this.validColumns)t.name in e||(e[t.name]=_c(t));this.internalRows=[...this.internalRows,e],this.syncGeneratedModesFromRows(),this.emitChange()}removeRow(e){this.disabled||!this.allowDelete||(this.internalRows=this.internalRows.filter((t,n)=>n!==e),this.syncGeneratedModesFromRows(),this.emitChange())}moveRow(e,t){let n=e+t;this.disabled||n<0||n>=this.internalRows.length||this.commitReorder(e,n)}commitReorder(e,t){if(this.disabled||e===t||e<0||t<0||e>=this.internalRows.length||t>=this.internalRows.length)return;let n=this.internalRows.slice(),[r]=n.splice(e,1);n.splice(t,0,r),this.internalRows=n,this.emitChange()}commitReorderByIds(e){if(this.disabled||e.length===0)return;let t=new Map(this.internalRows.map(e=>[String(e._id),e]));if(e.length!==t.size)return;let n=[];for(let r of e){let e=t.get(r);if(!e)return;n.push(e)}n.every((e,t)=>e===this.internalRows[t])||(this.internalRows=n,this.emitChange())}scheduleDndHydration(){if(this.cancelDndHydration(),!this.allowReorder||this.disabled){this.dndReady=!1,this.dndController.destroy();return}if(this.dndReady)return;let e=()=>{this.dndIdleId=null,this.dndTimeoutId=null,this.dndReady=!0};typeof window<`u`&&typeof window.requestIdleCallback==`function`?this.dndIdleId=window.requestIdleCallback(e,{timeout:1200}):this.dndTimeoutId=setTimeout(e,250)}cancelDndHydration(){this.dndIdleId!==null&&typeof window<`u`&&typeof window.cancelIdleCallback==`function`&&(window.cancelIdleCallback(this.dndIdleId),this.dndIdleId=null),this.dndTimeoutId!==null&&(clearTimeout(this.dndTimeoutId),this.dndTimeoutId=null)}syncDndSortables(){if(this.dndController.isSessionActive)return;let e=`${this.internalRows.map(e=>String(e._id)).join(`\0`)}|${this.disabled?`1`:`0`}`;if(e===this.dndRowSignature&&this.dndController.isActive)return;let t=[...this.renderRoot.querySelectorAll(`tr[data-row-id]:not([data-pk-dnd-placeholder])`)];this.dndController.sync(t.map(e=>({id:e.dataset.rowId??``,element:e,handle:e.querySelector(`.action-handle`)??void 0})).filter(e=>e.id!==``),this.disabled),this.dndRowSignature=e}getCellErrors(e,t){let n=(this.fieldName?this.cellErrors?.[`${this.fieldName}.${e}.${t}`]:void 0)??this.cellErrors?.[`${e}.${t}`];return n?Array.isArray(n)?n.map(String):[String(n)]:[]}readValueFromEvent(e){let t=e.detail;return t&&`value`in t?String(t.value??``):String(e.target.value??``)}readCheckedFromEvent(e){let t=e.detail;return t&&`checked`in t?!!t.checked:!!e.target.checked}renderOptionElements(e){return gc(e.options).map(e=>w`<pk-option value=${e.value}>${e.label}</pk-option>`)}renderSelectLike(e,t,n,r,{combobox:i=!1}={}){let a=String(t??``);return i?w`<pk-combobox
                class="cell-pk-control"
                size="sm"
                width="full"
                allow-custom-value
                .value=${a}
                placeholder=${e.placeholder??``}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            >
                ${this.renderOptionElements(e)}
            </pk-combobox>`:w`<pk-select
            class="cell-pk-control"
            size="xs"
            width="full"
            .value=${a}
            placeholder=${e.placeholder??``}
            ?disabled=${this.disabled}
            ?invalid=${r}
            aria-label=${e.label??e.name}
            @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
        >
            ${this.renderOptionElements(e)}
        </pk-select>`}renderCell(e,t,n,r){let i=t[e.name],a=e.type??`text`,o=t=>{this.updateCell(n,e,this.readValueFromEvent(t))};return Cc(e)?w`<div class="cell-slot">
                <slot name=${xc(String(t._id),e.name)}></slot>
            </div>`:a===`heading`?w`<div class="cell-static cell-heading">${String(i??``)}</div>`:a===`label`?w`<div class="cell-static">${String(i??``)}</div>`:a===`textarea`?w`<pk-textarea
                class="cell-pk-control"
                fit-cell
                size="sm"
                rows="1"
                .value=${String(i??``)}
                placeholder=${e.placeholder??E}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @input=${o}
            ></pk-textarea>`:a===`date`?w`<pk-date-picker
                class="cell-pk-control"
                size="sm"
                width="full"
                .value=${String(i??``)}
                placeholder=${e.placeholder??``}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-date-picker>`:a===`time`?w`<pk-time-picker
                class="cell-pk-control"
                size="sm"
                width="full"
                .value=${String(i??``)}
                placeholder=${e.placeholder??``}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-time-picker>`:a===`number`||a===`email`||a===`url`?w`<pk-input
                class="cell-pk-control"
                fit-cell
                size="xs"
                type=${a}
                .value=${String(i??``)}
                placeholder=${e.placeholder??E}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @input=${o}
            ></pk-input>`:a===`select`?this.renderSelectLike(e,i,n,r):a===`combobox`?this.renderSelectLike(e,i,n,r,{combobox:!0}):a===`checkbox`||a===`radio`?w`<div class="cell-check">
                <pk-checkbox
                    aria-label=${e.label??e.name}
                    .checked=${!!i}
                    ?disabled=${this.disabled}
                    ?invalid=${r}
                    @pk-change=${t=>{this.updateCell(n,e,this.readCheckedFromEvent(t))}}
                ></pk-checkbox>
            </div>`:a===`lightswitch`?w`<div class="cell-check cell-check--switch">
                <pk-lightswitch
                    size="sm"
                    aria-label=${e.label??e.name}
                    .checked=${!!i}
                    ?disabled=${this.disabled}
                    ?invalid=${r}
                    @pk-change=${t=>{this.updateCell(n,e,this.readCheckedFromEvent(t))}}
                ></pk-lightswitch>
            </div>`:a===`color`?w`<pk-color-input
                class="cell-pk-control"
                fit-cell
                size="xs"
                .value=${String(i??``)}
                ?disabled=${this.disabled}
                ?invalid=${r}
                aria-label=${e.label??e.name}
                @pk-change=${t=>{this.updateCell(n,e,this.readValueFromEvent(t))}}
            ></pk-color-input>`:w`<pk-input
            class="cell-pk-control"
            fit-cell
            size="xs"
            type="text"
            ?mono=${a===`handle`||a===`value`}
            .value=${String(i??``)}
            placeholder=${e.placeholder??E}
            ?disabled=${this.disabled}
            ?invalid=${r}
            aria-label=${e.label??e.name}
            @input=${o}
        ></pk-input>`}renderExtraMenuItems(e,t){let n=this.resolveRowMenuItems(e,t);return n.length===0?E:w`${n.map(n=>{let r=jc(n.icon);return w`<pk-dropdown-item
                type=${n.type??`normal`}
                value=${n.value??n.action??``}
                radio-group=${n.radioGroup??E}
                ?checked=${!!n.checked}
                ?disabled=${this.disabled||!!n.disabled}
                @click=${()=>{this.disabled||n.disabled||this.dispatchEvent(new CustomEvent(`pk-row-menu-select`,{detail:{rowIndex:t,row:e,item:n,action:String(n.action??n.value??``),value:String(n.value??``)},bubbles:!0,composed:!0}))}}
            >
                ${r?ft(r):E}
                ${n.label}
            </pk-dropdown-item>`})}`}renderRow(e,t){let n=this.validColumns,r=this.internalRows.length,i=String(e._id),a=this.resolveRowModifier(e,t),o=this.resolveRowMenuItems(e,t),s=this.allowReorder||o.length>0;return w`<tr
            data-row-id=${i}
            data-tone=${a.tone||E}
            class=${a.class?M(Object.fromEntries(a.class.split(/\s+/).filter(Boolean).map(e=>[e,!0]))):E}
            title=${a.title||E}
        >
            ${n.map(n=>{let r=this.resolveColumn(e,n,t),i=this.getCellErrors(t,n.name),a=r.class||n.class||``;return w`<td
                    class=${M({thin:pc(r),"has-error":i.length>0,...a?Object.fromEntries(a.split(/\s+/).filter(Boolean).map(e=>[e,!0])):{}})}
                    style=${r.width||n.width?`width: ${r.width||n.width}`:E}
                    title=${i.length?i.join(`
`):E}
                >
                    ${this.renderCell(r,e,t,i.length>0)}
                </td>`})}
            ${this.showActionsColumn?w`<td class="actions">
                    <div class="row-actions">
                        ${this.allowReorder?w`
                                <span
                                    class=${M({"action-handle":!0,"is-pending":!this.dndReady})}
                                >
                                    <pk-button
                                        type="button"
                                        class="action-btn"
                                        variant="none"
                                        size="xs"
                                        aria-label="Reorder row"
                                        ?disabled=${this.disabled||!this.dndReady}
                                        title=${!this.dndReady&&!this.disabled?`Preparing drag…`:E}
                                    >${ft(wc)}</pk-button>
                                </span>`:E}
                        ${s?w`<pk-dropdown-menu size="sm" placement="bottom-end" side-offset="2">
                                    <pk-button
                                        slot="trigger"
                                        type="button"
                                        class="action-btn"
                                        variant="none"
                                        size="xs"
                                        aria-label="Row actions"
                                        ?disabled=${this.disabled}
                                    >${ft(Tc)}</pk-button>
                                    ${this.renderExtraMenuItems(e,t)}
                                    ${this.allowReorder?w`
                                            <pk-dropdown-item
                                                ?disabled=${this.disabled||t===0}
                                                @click=${()=>{this.moveRow(t,-1)}}
                                            >
                                                ${ft(Ec)}
                                                Move up
                                            </pk-dropdown-item>
                                            <pk-dropdown-item
                                                ?disabled=${this.disabled||t===r-1}
                                                @click=${()=>{this.moveRow(t,1)}}
                                            >
                                                ${ft(Dc)}
                                                Move down
                                            </pk-dropdown-item>`:E}
                                </pk-dropdown-menu>`:E}
                        ${this.allowDelete?w`<pk-button
                                type="button"
                                class="action-btn action-delete"
                                variant="none"
                                size="xs"
                                aria-label="Delete row"
                                ?disabled=${this.disabled}
                                @click=${()=>{this.removeRow(t)}}
                            >${ft(Oc)}</pk-button>`:E}
                    </div>
                </td>`:E}
        </tr>`}render(){let e=this.validColumns;return w`
            <div
                class="et-scroll"
                @pk-change=${this.stopInnerControlEvent}
                @input=${this.stopInnerControlEvent}
                @change=${this.stopInnerControlEvent}
            >
                <table class="et">
                    <thead>
                        <tr>
                            ${e.map(e=>{let t=e.class||``;return w`<th
                                    class=${M({thin:pc(e),...t?Object.fromEntries(t.split(/\s+/).filter(Boolean).map(e=>[e,!0])):{}})}
                                    style=${e.width?`width: ${e.width}`:E}
                                >
                                    ${e.label??e.name}
                                    ${e.required?w`<span class="required">*</span>`:E}
                                </th>`})}
                            ${this.showActionsColumn?w`<th class="actions"></th>`:E}
                        </tr>
                    </thead>
                    <tbody>
                        ${cc(this.internalRows,e=>String(e._id),(e,t)=>this.renderRow(e,t))}
                    </tbody>
                </table>
            </div>
            ${this.allowAdd?w`<pk-button
                    type="button"
                    class="add-row"
                    variant="dashed"
                    ?disabled=${this.disabled}
                    @click=${()=>{this.addRow()}}
                >
                    ${ft(kc)}
                    ${this.addRowLabel||`Add row`}
                </pk-button>`:E}
        `}};D([k({attribute:!1})],$.prototype,`columns`,void 0),D([k({attribute:!1})],$.prototype,`rows`,void 0),D([k({type:Boolean,reflect:!0,attribute:`allow-add`})],$.prototype,`allowAdd`,void 0),D([k({type:Boolean,reflect:!0,attribute:`allow-delete`})],$.prototype,`allowDelete`,void 0),D([k({type:Boolean,reflect:!0,attribute:`allow-reorder`})],$.prototype,`allowReorder`,void 0),D([k({attribute:`add-row-label`})],$.prototype,`addRowLabel`,void 0),D([k({attribute:`field-name`})],$.prototype,`fieldName`,void 0),D([k({attribute:!1})],$.prototype,`cellErrors`,void 0),D([k({attribute:!1})],$.prototype,`newRowDefaults`,void 0),D([k({attribute:!1})],$.prototype,`modifyColumn`,void 0),D([k({attribute:!1})],$.prototype,`modifyRow`,void 0),D([k({attribute:!1})],$.prototype,`getRowMenuItems`,void 0),D([A()],$.prototype,`internalRows`,void 0),D([A()],$.prototype,`dndReady`,void 0),$=D([O(`pk-editable-table`)],$);var Mc=class extends Ye{constructor(...e){super(...e),this.icon=``,this.name=``,this.unsubscribeRegistry=null}static{this.styles=d`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: none;
            /* Square em box + slight baseline nudge for inline text. Flex
             * parents (e.g. button slots) should zero vertical-align. */
            width: 1em;
            height: 1em;
            line-height: 1;
            vertical-align: -0.125em;
        }

        svg {
            display: block;
            width: 100%;
            height: 100%;
            fill: currentColor;
            /* Allow intentional path overhang past the icon canvas. */
            overflow: visible;
        }
    `}connectedCallback(){super.connectedCallback(),this.unsubscribeRegistry=Kn(()=>{this.requestUpdate()})}disconnectedCallback(){this.unsubscribeRegistry?.(),this.unsubscribeRegistry=null,super.disconnectedCallback()}render(){let e=Jn(this.icon||this.name);return e?w`${N($n(e,{title:this.label}))}`:E}};D([k()],Mc.prototype,`icon`,void 0),D([k()],Mc.prototype,`name`,void 0),D([k()],Mc.prototype,`label`,void 0),Mc=D([O(`pk-icon`)],Mc),Xn({check:jt,ellipsis:Kt,gear:Fn,plus:yn,trash:Ln,xmark:Nn});var Nc=[P,L,$,Mc],Pc=!1;async function Fc(){if(!Pc){for(let e of Nc)if(typeof e!=`function`)throw Error(`Table Maker Plugin Kit constructor missing from bundle`);await Promise.all(t.map(e=>customElements.whenDefined(e))),Pc=!0}}await Fc();
//# sourceMappingURL=pluginKit-CfHBsUVs.js.map