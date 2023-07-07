(()=>{"use strict";var e={78496:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>ji,Button:()=>Rs,Checkbox:()=>Fs,DataGrid:()=>lo,DataGridCell:()=>po,DataGridCellTypes:()=>Zs,DataGridRow:()=>ho,DataGridRowTypes:()=>eo,Divider:()=>mo,DividerRole:()=>go,Dropdown:()=>Fo,DropdownPosition:()=>Do,GenerateHeaderOptions:()=>Js,Link:()=>Mo,Option:()=>zo,PanelTab:()=>Qo,PanelView:()=>Yo,Panels:()=>Ko,ProgressRing:()=>en,Radio:()=>cn,RadioGroup:()=>nn,RadioGroupOrientation:()=>bo,Tag:()=>un,TextArea:()=>wn,TextAreaResize:()=>Cn,TextField:()=>Tn,TextFieldType:()=>gn,allComponents:()=>Sn,provideVSCodeDesignSystem:()=>nt,vsCodeBadge:()=>_i,vsCodeButton:()=>Ds,vsCodeCheckbox:()=>Ls,vsCodeDataGrid:()=>co,vsCodeDataGridCell:()=>fo,vsCodeDataGridRow:()=>uo,vsCodeDivider:()=>yo,vsCodeDropdown:()=>Lo,vsCodeLink:()=>No,vsCodeOption:()=>jo,vsCodePanelTab:()=>Xo,vsCodePanelView:()=>Jo,vsCodePanels:()=>Wo,vsCodeProgressRing:()=>tn,vsCodeRadio:()=>hn,vsCodeRadioGroup:()=>rn,vsCodeTag:()=>pn,vsCodeTextArea:()=>kn,vsCodeTextField:()=>On});const s=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===s.trustedTypes&&(s.trustedTypes={createPolicy:(e,t)=>t});const o={configurable:!1,enumerable:!1,writable:!1};void 0===s.FAST&&Reflect.defineProperty(s,"FAST",Object.assign({value:Object.create(null)},o));const n=s.FAST;if(void 0===n.getById){const e=Object.create(null);Reflect.defineProperty(n,"getById",Object.assign({value(t,i){let s=e[t];return void 0===s&&(s=i?e[t]=i():null),s}},o))}const r=Object.freeze([]);function a(){const e=new WeakMap;return function(t){let i=e.get(t);if(void 0===i){let s=Reflect.getPrototypeOf(t);for(;void 0===i&&null!==s;)i=e.get(s),s=Reflect.getPrototypeOf(s);i=void 0===i?[]:i.slice(0),e.set(t,i)}return i}}const l=s.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function n(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let i=0,s=e.length-t;i<s;i++)e[i]=e[i+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&s.requestAnimationFrame(n),e.push(t)},process:n})})),d=s.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let c=d;const h=`fast-${Math.random().toString(36).substring(2,8)}`,u=`${h}{`,p=`}${h}`,f=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(c!==d)throw new Error("The HTML policy can only be set once.");c=e},createHTML:e=>c.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${h}:`,"")),createInterpolationPlaceholder:e=>`${u}${e}${p}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate:l.enqueue,processUpdates:l.process,nextUpdate:()=>new Promise(l.enqueue),setAttribute(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class b{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);-1!==i&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(void 0===t){const t=this.sub1,s=this.sub2;void 0!==t&&t.handleChange(i,e),void 0!==s&&s.handleChange(i,e)}else for(let s=0,o=t.length;s<o;++s)t[s].handleChange(i,e)}}class g{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];void 0!==i&&i.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var i;if(t){let i=this.subscribers[t];void 0===i&&(this.subscribers[t]=i=new b(this.source)),i.subscribe(e)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new b(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const i=this.subscribers[t];void 0!==i&&i.unsubscribe(e)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(e)}}const v=n.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=f.queueUpdate;let s,o=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(e){let i=e.$fastController||t.get(e);return void 0===i&&(Array.isArray(e)?i=o(e):t.set(e,i=new g(e))),i}const r=a();class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==s&&s.watch(e,this.name),e[this.field]}setValue(e,t){const i=this.field,s=e[i];if(s!==t){e[i]=t;const o=e[this.callback];"function"==typeof o&&o.call(e,s,t),n(e).notify(this.name)}}}class d extends b{constructor(e,t,i=!1){super(e,t),this.binding=e,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const i=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return s=i,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const i=this.last,o=n(e),r=null===i?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=o,o.subscribe(this,t),null!==i){if(!this.needsRefresh){let t;s=void 0,t=i.propertySource[i.propertyName],s=this,e===t&&(this.needsRefresh=!0)}i.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){o=e},getNotifier:n,track(e,t){void 0!==s&&s.watch(e,t)},trackVolatile(){void 0!==s&&(s.needsRefresh=!0)},notify(e,t){n(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),r(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:r,binding(e,t,i=this.isVolatileBinding(e)){return new d(e,t,i)},isVolatileBinding:t=>e.test(t.toString())})}));function m(e,t){v.defineProperty(e,t)}const y=n.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class x{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return y.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){y.set(e)}}v.defineProperty(x.prototype,"index"),v.defineProperty(x.prototype,"length");const C=Object.seal(new x);class ${constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function w(e){return e.map((e=>e instanceof $?w(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function k(e){return e.map((e=>e instanceof $?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}$.create=(()=>{if(f.supportsAdoptedStyleSheets){const e=new Map;return t=>new I(t,e)}return e=>new O(e)})();class I extends ${constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=k(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=w(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let i=t.get(e);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(e),t.set(e,i)),i}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let T=0;class O extends ${constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=k(e),this.styleSheets=w(e),this.styleClass="fast-style-class-"+ ++T}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){const o=document.createElement("style");o.innerHTML=t[s],o.className=i,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let i=0,s=t.length;i<s;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const S=Object.freeze({locate:a()}),A={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},R={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class D{constructor(e,t,i=t.toLowerCase(),s="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=s,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===s&&void 0===o&&(this.converter=A)}setValue(e,t){const i=e[this.fieldName],s=this.converter;void 0!==s&&(t=s.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return v.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||"fromView"===t||f.queueUpdate((()=>{i.add(e);const s=e[this.fieldName];switch(t){case"reflect":const t=this.converter;f.setAttribute(e,this.attribute,void 0!==t?t.toView(s):s);break;case"boolean":f.setBooleanAttribute(e,this.attribute,s)}i.delete(e)}))}static collect(e,...t){const i=[];t.push(S.locate(e));for(let s=0,o=t.length;s<o;++s){const o=t[s];if(void 0!==o)for(let t=0,s=o.length;t<s;++t){const s=o[t];"string"==typeof s?i.push(new D(e,s)):i.push(new D(e,s.property,s.attribute,s.mode,s.converter))}}return i}}function E(e,t){let i;function s(e,t){arguments.length>1&&(i.property=t),S.locate(e.constructor).push(i)}return arguments.length>1?(i={},void s(e,t)):(i=void 0===e?{}:e,s)}const P={mode:"open"},B={},F=n.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class L{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=D.collect(e,t.attributes),s=new Array(i.length),o={},n={};for(let e=0,t=i.length;e<t;++e){const t=i[e];s[e]=t.attribute,o[t.name]=t,n[t.attribute]=t}this.attributes=i,this.observedAttributes=s,this.propertyLookup=o,this.attributeLookup=n,this.shadowOptions=void 0===t.shadowOptions?P:null===t.shadowOptions?void 0:Object.assign(Object.assign({},P),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?B:Object.assign(Object.assign({},B),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?$.create(t.styles):t.styles instanceof $?t.styles:$.create([t.styles])}get isDefined(){return!!F.getByType(this.type)}define(e=customElements){const t=this.type;if(F.register(this)){const e=this.attributes,i=t.prototype;for(let t=0,s=e.length;t<s;++t)v.defineProperty(i,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}function H(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}L.forType=F.getByType;const V=new WeakMap,M={bubbles:!0,composed:!0,cancelable:!0};function N(e){return e.shadowRoot||V.get(e)||null}class z extends g{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(void 0!==i){const t=e.attachShadow(i);"closed"===i.mode&&V.set(e,t)}const s=v.getAccessors(e);if(s.length>0){const t=this.boundObservables=Object.create(null);for(let i=0,o=s.length;i<o;++i){const o=s[i].name,n=e[o];void 0!==n&&(delete e[o],t[o]=n)}}}get isConnected(){return v.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,v.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=N(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),null!==i&&this.addBehaviors(i)}}removeStyles(e){const t=N(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),null!==i&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,s=[];for(let o=0;o<i;++o){const i=e[o];t.has(i)?t.set(i,t.get(i)+1):(t.set(i,1),s.push(i))}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].bind(e,C)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(null===i)return;const s=e.length,o=[];for(let n=0;n<s;++n){const s=e[n];if(i.has(s)){const e=i.get(s)-1;0===e||t?i.delete(s)&&o.push(s):i.set(s,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,C);const t=this.behaviors;if(null!==t)for(const[i]of t)i.bind(e,C);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[i]of t)i.unbind(e)}}onAttributeChangedCallback(e,t,i){const s=this.definition.attributeLookup[e];void 0!==s&&s.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},M),i)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const i=Object.keys(t);for(let s=0,o=i.length;s<o;++s){const o=i[s];e[o]=t[o]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=N(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||f.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const i=L.forType(e.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return e.$fastController=new z(e,i)}}function j(e){return class extends e{constructor(){super(),z.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const _=Object.assign(j(HTMLElement),{from:e=>j(e),define:(e,t)=>new L(e,t).define().type}),q=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let s=q.get(i);void 0===s&&q.set(i,s=new Map),s.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=q.get(t);if(void 0!==i)return i.get(e)});class U{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,ge(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:s}=this;return this.container=this.key=void 0,i.registerResolver(s,new oe(s,e,t))}}function G(e){const t=e.slice(),i=Object.keys(e),s=i.length;let o;for(let n=0;n<s;++n)o=i[n],ke(o)||(t[o]=e[o]);return t}const K=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new oe(e,1,e),transient:e=>new oe(e,2,e)}),W=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:K.singleton})}),Q=new Map;function X(e){return t=>Reflect.getOwnMetadata(e,t)}let Y=null;const J=Object.freeze({createContainer:e=>new fe(null,Object.assign({},W.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:J.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(ue,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||J.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new fe(e,Object.assign({},W.default,t,{parentLocator:J.findParentContainer})):Y||(Y=new fe(null,Object.assign({},W.default,t,{parentLocator:()=>null}))),getDesignParamtypes:X("design:paramtypes"),getAnnotationParamtypes:X("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Q.get(e);if(void 0===t){const i=e.inject;if(void 0===i){const i=J.getDesignParamtypes(e),s=J.getAnnotationParamtypes(e);if(void 0===i)if(void 0===s){const i=Object.getPrototypeOf(e);t="function"==typeof i&&i!==Function.prototype?G(J.getDependencies(i)):[]}else t=G(s);else if(void 0===s)t=G(i);else{t=G(i);let e,o=s.length;for(let i=0;i<o;++i)e=s[i],void 0!==e&&(t[i]=e);const n=Object.keys(s);let r;o=n.length;for(let e=0;e<o;++e)r=n[e],ke(r)||(t[r]=s[r])}}else t=G(i);Q.set(e,t)}return t},defineProperty(e,t,i,s=!1){const o=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[o];if(void 0===e){const n=this instanceof HTMLElement?J.findResponsibleContainer(this):J.getOrCreateDOMContainer();if(e=n.get(i),this[o]=e,s&&this instanceof _){const s=this.$fastController,n=()=>{J.findResponsibleContainer(this).get(i)!==this[o]&&(this[o]=e,s.notify(t))};s.subscribe({handleChange:n},"isConnected")}}return e}})},createInterface(e,t){const i="function"==typeof e?e:t,s="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||xe,o="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),n=function(e,t,i){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${n.friendlyName}'`);t?J.defineProperty(e,t,n,o):J.getOrCreateAnnotationParamTypes(e)[i]=n};return n.$isInterface=!0,n.friendlyName=null==s?"(anonymous)":s,null!=i&&(n.register=function(e,t){return i(new U(e,null!=t?t:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject:(...e)=>function(t,i,s){if("number"==typeof s){const i=J.getOrCreateAnnotationParamTypes(t),o=e[0];void 0!==o&&(i[s]=o)}else if(i)J.defineProperty(t,i,e[0]);else{const i=s?J.getOrCreateAnnotationParamTypes(s.value):J.getOrCreateAnnotationParamTypes(t);let o;for(let t=0;t<e.length;++t)o=e[t],void 0!==o&&(i[t]=o)}},transient:e=>(e.register=function(t){return ve.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=te)=>(e.register=function(t){return ve.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),Z=J.createInterface("Container");function ee(e){return function(t){const i=function(e,t,s){J.inject(i)(e,t,s)};return i.$isResolver=!0,i.resolve=function(i,s){return e(t,i,s)},i}}J.inject;const te={scoped:!1};function ie(e,t,i){J.inject(ie)(e,t,i)}function se(e,t){return t.getFactory(e).construct(t)}ee(((e,t,i)=>()=>i.get(e))),ee(((e,t,i)=>i.has(e,!0)?i.get(e):void 0)),ie.$isResolver=!0,ie.resolve=()=>{},ee(((e,t,i)=>{const s=se(e,t),o=new oe(e,0,s);return i.registerResolver(e,o),s})),ee(((e,t,i)=>se(e,t)));class oe{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=e.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(s=null===(i=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===i?void 0:i.call(t,e))&&void 0!==s?s:null;default:return null}}}function ne(e){return this.get(e)}function re(e,t){return t(e)}class ae{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return i=void 0===t?new this.Type(...this.dependencies.map(ne,e)):new this.Type(...this.dependencies.map(ne,e),...t),null==this.transformers?i:this.transformers.reduce(re,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const le={$isResolver:!0,resolve:(e,t)=>t};function de(e){return"function"==typeof e.register}function ce(e){return function(e){return de(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const he=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ue="__DI_LOCATE_PARENT__",pe=new Map;class fe{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Z,le),e instanceof Node&&e.addEventListener(ue,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,i,s,o,n;const r=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Ce(t))if(de(t))t.register(this,r);else if(void 0!==t.prototype)ve.singleton(t,t).register(this);else for(i=Object.keys(t),o=0,n=i.length;o<n;++o)s=t[i[o]],Ce(s)&&(de(s)?s.register(this,r):this.register(s));return--this.registerDepth,this}registerResolver(e,t){me(e);const i=this.resolvers,s=i.get(e);return null==s?i.set(e,t):s instanceof oe&&4===s.strategy?s.state.push(t):i.set(e,new oe(e,4,[s,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(null==i)return!1;if(i.getFactory){const e=i.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(me(e),void 0!==e.resolve)return e;let i,s=this;for(;null!=s;){if(i=s.resolvers.get(e),null!=i)return i;if(null==s.parent){const i=ce(e)?this:s;return t?this.jitRegister(e,i):null}s=s.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(me(e),e.$isResolver)return e.resolve(this,this);let t,i=this;for(;null!=i;){if(t=i.resolvers.get(e),null!=t)return t.resolve(i,this);if(null==i.parent){const s=ce(e)?this:i;return t=this.jitRegister(e,s),t.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){me(e);const i=this;let s,o=i;if(t){let t=r;for(;null!=o;)s=o.resolvers.get(e),null!=s&&(t=t.concat(ye(s,o,i))),o=o.parent;return t}for(;null!=o;){if(s=o.resolvers.get(e),null!=s)return ye(s,o,i);if(o=o.parent,null==o)return r}return r}getFactory(e){let t=pe.get(e);if(void 0===t){if($e(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);pe.set(e,t=new ae(e,J.getDependencies(e)))}return t}registerFactory(e,t){pe.set(e,t)}createChild(e){return new fe(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(he.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(de(e)){const i=e.register(t);if(!(i instanceof Object)||null==i.resolve){const i=t.resolvers.get(e);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}const be=new WeakMap;function ge(e){return function(t,i,s){if(be.has(s))return be.get(s);const o=e(t,i,s);return be.set(s,o),o}}const ve=Object.freeze({instance:(e,t)=>new oe(e,0,t),singleton:(e,t)=>new oe(e,1,t),transient:(e,t)=>new oe(e,2,t),callback:(e,t)=>new oe(e,3,t),cachedCallback:(e,t)=>new oe(e,3,ge(t)),aliasTo:(e,t)=>new oe(t,5,e)});function me(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function ye(e,t,i){if(e instanceof oe&&4===e.strategy){const s=e.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,i);return n}return[e.resolve(t,i)]}const xe="(anonymous)";function Ce(e){return"object"==typeof e&&null!==e||"function"==typeof e}const $e=function(){const e=new WeakMap;let t=!1,i="",s=0;return function(o){return t=e.get(o),void 0===t&&(i=o.toString(),s=i.length,t=s>=29&&s<=100&&125===i.charCodeAt(s-1)&&i.charCodeAt(s-2)<=32&&93===i.charCodeAt(s-3)&&101===i.charCodeAt(s-4)&&100===i.charCodeAt(s-5)&&111===i.charCodeAt(s-6)&&99===i.charCodeAt(s-7)&&32===i.charCodeAt(s-8)&&101===i.charCodeAt(s-9)&&118===i.charCodeAt(s-10)&&105===i.charCodeAt(s-11)&&116===i.charCodeAt(s-12)&&97===i.charCodeAt(s-13)&&110===i.charCodeAt(s-14)&&88===i.charCodeAt(s-15),e.set(o,t)),t}}(),we={};function ke(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=we[e];if(void 0!==t)return t;const i=e.length;if(0===i)return we[e]=!1;let s=0;for(let t=0;t<i;++t)if(s=e.charCodeAt(t),0===t&&48===s&&i>1||s<48||s>57)return we[e]=!1;return we[e]=!0}default:return!1}}function Ie(e){return`${e.toLowerCase()}:presentation`}const Te=new Map,Oe=Object.freeze({define(e,t,i){const s=Ie(e);void 0===Te.get(s)?Te.set(s,t):Te.set(s,!1),i.register(ve.instance(s,t))},forTag(e,t){const i=Ie(e),s=Te.get(i);return!1===s?J.findResponsibleContainer(t).get(i):s||null}});class Se{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?$.create(t):t instanceof $?t:$.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Ae extends _{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Oe.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new De(this===Ae?class extends Ae{}:this,e,t)}}function Re(e,t,i){return"function"==typeof e?e(t,i):e}H([m],Ae.prototype,"template",void 0),H([m],Ae.prototype,"styles",void 0);class De{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,s=this.overrideDefinition,o=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Se(Re(i.template,e,i),Re(i.styles,e,i));e.definePresentation(t);let o=Re(i.shadowOptions,e,i);e.shadowRootMode&&(o?s.shadowOptions||(o.mode=e.shadowRootMode):null!==o&&(o={mode:e.shadowRootMode})),e.defineElement({elementOptions:Re(i.elementOptions,e,i),shadowOptions:o,attributes:Re(i.attributes,e,i)})}})}}class Ee{createCSS(){return""}createBehavior(){}}function Pe(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Be=document.createElement("div");class Fe{setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class Le extends Fe{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class He extends Fe{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Ve{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),v.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),f.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),f.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:i}=this.style;if(i){const e=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[e].style}else this.target=null}}H([m],Ve.prototype,"target",void 0);class Me{constructor(e){this.target=e.style}setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class Ne{setProperty(e,t){Ne.properties[e]=t;for(const i of Ne.roots.values())_e.getOrCreate(Ne.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete Ne.properties[e];for(const t of Ne.roots.values())_e.getOrCreate(Ne.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Ne;if(!t.has(e)){t.add(e);const i=_e.getOrCreate(this.normalizeRoot(e));for(const e in Ne.properties)i.setProperty(e,Ne.properties[e])}}static unregisterRoot(e){const{roots:t}=Ne;if(t.has(e)){t.delete(e);const i=_e.getOrCreate(Ne.normalizeRoot(e));for(const e in Ne.properties)i.removeProperty(e)}}static normalizeRoot(e){return e===Be?document:e}}Ne.roots=new Set,Ne.properties={};const ze=new WeakMap,je=f.supportsAdoptedStyleSheets?class extends Fe{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles($.create([t]))}}:Ve,_e=Object.freeze({getOrCreate(e){if(ze.has(e))return ze.get(e);let t;return t=e===Be?new Ne:e instanceof Document?f.supportsAdoptedStyleSheets?new Le:new He:e instanceof _?new je(e):new Me(e),ze.set(e,t),t}});class qe extends Ee{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=qe.uniqueId(),qe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new qe({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return qe.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=Qe.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof qe&&(t=this.alias(t)),Qe.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),Qe.existsFor(e)&&Qe.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Be,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!Qe.existsFor(t)&&Qe.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}qe.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),qe.tokensById=new Map;class Ue{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=v.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,C))}}class Ge{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),v.getNotifier(this).notify(e.id))}get(e){return v.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Ke=new WeakMap,We=new WeakMap;class Qe{constructor(e){this.target=e,this.store=new Ge,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const i=qe.getTokenById(t);if(i&&(i.notify(this.target),qe.isCSSDesignToken(i))){const t=this.parent,s=this.isReflecting(i);if(t){const o=t.get(i),n=e.get(i);o===n||s?o===n&&s&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else s||this.reflectToCSS(i)}}},Ke.set(e,this),v.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof _?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ke.get(e)||new Qe(e)}static existsFor(e){return Ke.has(e)}static findParent(e){if(Be!==e.target){let t=Pe(e.target);for(;null!==t;){if(Ke.has(t))return Ke.get(t);t=Pe(t)}return Qe.getOrCreate(Be)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Be?Qe.getOrCreate(Be):null}while(null!==i);return null}get parent(){return We.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const i=this.getRaw(e);return void 0!==i?(this.hydrate(e,i),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=Qe.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){qe.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),qe.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=Qe.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&We.get(this).removeChild(this)}appendChild(e){e.parent&&We.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));We.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),v.getNotifier(this.store).subscribe(e);for(const[t,i]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):i)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),v.getNotifier(this.store).unsubscribe(e),e.parent===this&&We.delete(e)}contains(e){return function(e,t){let i=t;for(;null!==i;){if(i===e)return!0;i=Pe(i)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Qe.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Qe.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=qe.getTokenById(t);i&&this.hydrate(i,this.getRaw(i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);qe.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new Ue(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}Qe.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){_e.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(Qe.getOrCreate(t).get(e)))}remove(e,t){_e.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},H([m],Qe.prototype,"children",void 0);const Xe=Object.freeze({create:function(e){return qe.from(e)},notifyConnection:e=>!(!e.isConnected||!Qe.existsFor(e)||(Qe.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!Qe.existsFor(e)||(Qe.getOrCreate(e).unbind(),0)),registerRoot(e=Be){Ne.registerRoot(e)},unregisterRoot(e=Be){Ne.unregisterRoot(e)}}),Ye=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Je=new Map,Ze=new Map;let et=null;const tt=J.createInterface((e=>e.cachedCallback((e=>(null===et&&(et=new st(null,e)),et))))),it=Object.freeze({tagFor:e=>Ze.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||J.findResponsibleContainer(e).get(tt)},getOrCreate(e){if(!e)return null===et&&(et=J.getOrCreateDOMContainer().get(tt)),et;const t=e.$$designSystem$$;if(t)return t;const i=J.getOrCreateDOMContainer(e);if(i.has(tt,!1))return i.get(tt);{const t=new st(e,i);return i.register(ve.instance(tt,t)),t}}});class st{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ye.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],s=this.disambiguate,o=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(e,n,r){const a=function(e,t,i){return"string"==typeof e?{name:e,type:t,callback:i}:e}(e,n,r),{name:l,callback:d,baseClass:c}=a;let{type:h}=a,u=l,p=Je.get(u),f=!0;for(;p;){const e=s(u,h,p);switch(e){case Ye.ignoreDuplicate:return;case Ye.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=Je.get(u)}}f&&((Ze.has(h)||h===Ae)&&(h=class extends h{}),Je.set(u,h),Ze.set(h,u),c&&Ze.set(c,u)),i.push(new ot(t,u,h,o,d,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Xe.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(const e of i)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ot{constructor(e,t,i,s,o,n){this.container=e,this.name=t,this.type=i,this.shadowRootMode=s,this.callback=o,this.willDefine=n,this.definition=null}definePresentation(e){Oe.define(this.name,e,this.container)}defineElement(e){this.definition=new L(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return it.tagFor(e)}}function nt(e){return it.getOrCreate(e).withPrefix("vscode")}class rt extends Ae{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}H([E({attribute:"fill"})],rt.prototype,"fill",void 0),H([E({attribute:"color"})],rt.prototype,"color",void 0),H([E({mode:"boolean"})],rt.prototype,"circular",void 0);class at{constructor(){this.targetIndex=0}}class lt extends at{constructor(){super(...arguments),this.createPlaceholder=f.createInterpolationPlaceholder}}class dt extends at{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return f.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function ct(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=v.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function ht(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function ut(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function pt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function ft(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function bt(e){f.setAttribute(this.target,this.targetName,e)}function gt(e){f.setBooleanAttribute(this.target,this.targetName,e)}function vt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function mt(e){this.target[this.targetName]=e}function yt(e){const t=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(null!=e&&e.length){const o=e.split(/\s+/);for(let e=0,n=o.length;e<n;++e){const n=o[e];""!==n&&(t[n]=s,i.classList.add(n))}}if(this.classVersions=t,this.version=s+1,0!==s){s-=1;for(const e in t)t[e]===s&&i.classList.remove(e)}}class xt extends lt{constructor(e){super(),this.binding=e,this.bind=ct,this.unbind=ut,this.updateTarget=bt,this.isBindingVolatile=v.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=mt,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,i)=>f.createHTML(e(t,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=gt;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=ht,this.unbind=ft;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=yt)}}targetAtContent(){this.updateTarget=vt,this.unbind=pt}createBehavior(e){return new Ct(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ct{constructor(e,t,i,s,o,n,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=s,this.unbind=o,this.updateTarget=n,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){x.setEvent(e);const t=this.binding(this.source,this.context);x.setEvent(null),!0!==t&&e.preventDefault()}}let $t=null;class wt{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){$t=this}static borrow(e){const t=$t||new wt;return t.directives=e,t.reset(),$t=null,t}}function kt(e){if(1===e.length)return e[0];let t;const i=e.length,s=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),o=new xt(((e,t)=>{let o="";for(let n=0;n<i;++n)o+=s[n](e,t);return o}));return o.targetName=t,o}const It=p.length;function Tt(e,t){const i=t.split(u);if(1===i.length)return null;const s=[];for(let t=0,o=i.length;t<o;++t){const o=i[t],n=o.indexOf(p);let r;if(-1===n)r=o;else{const t=parseInt(o.substring(0,n));s.push(e.directives[t]),r=o.substring(n+It)}""!==r&&s.push(r)}return s}function Ot(e,t,i=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=Tt(e,a);let d=null;null===l?i&&(d=new xt((()=>a)),d.targetName=r.name):d=kt(l),null!==d&&(t.removeAttributeNode(r),o--,n--,e.addFactory(d))}}function St(e,t,i){const s=Tt(e,t.textContent);if(null!==s){let o=t;for(let n=0,r=s.length;n<r;++n){const r=s[n],a=0===n?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),o=a,e.targetIndex++,a!==t&&i.nextNode()}e.targetIndex--}}const At=document.createRange();class Rt{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let s,o=this.firstChild;for(;o!==t;)s=o.nextSibling,i.insertBefore(o,e),o=s;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.appendChild(s),s=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.removeChild(s),s=i;e.removeChild(t);const o=this.behaviors,n=this.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(n)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(null!==this.source){const s=this.source;this.source=e,this.context=t;for(let o=0,n=i.length;o<n;++o){const n=i[o];n.unbind(s),n.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,o=i.length;s<o;++s)i[s].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let i=0,s=e.length;i<s;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){At.setStartBefore(e[0].firstChild),At.setEndAfter(e[e.length-1].lastChild),At.deleteContents();for(let t=0,i=e.length;t<i;++t){const i=e[t],s=i.behaviors,o=i.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(o)}}}}class Dt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=f.createHTML(t);const i=e.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(e=i)}else e=t;const i=function(e,t){const i=e.content;document.adoptNode(i);const s=wt.borrow(t);Ot(s,e,!0);const o=s.behaviorFactories;s.reset();const n=f.createTemplateWalker(i);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:Ot(s,r);break;case 3:St(s,r,n);break;case 8:f.isMarker(r)&&s.addFactory(t[f.extractDirectiveIndexFromMarker(r)])}let a=0;(f.isMarker(i.firstChild)||1===i.childNodes.length&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}(e,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),o=f.createTemplateWalker(t);let n=0,r=this.targetOffset,a=o.nextNode();for(let e=i.length;n<e;++n){const e=i[n],t=e.targetIndex;for(;null!==a;){if(r===t){s[n]=e.createBehavior(a);break}a=o.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let i=0,o=t.length;i<o;++i,++n)s[n]=t[i].createBehavior(e)}return new Rt(t,s)}render(e,t,i){"string"==typeof t&&(t=document.getElementById(t)),void 0===i&&(i=t);const s=this.create(i);return s.bind(e,C),s.appendTo(t),s}}const Et=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Pt(e,...t){const i=[];let s="";for(let o=0,n=e.length-1;o<n;++o){const n=e[o];let r=t[o];if(s+=n,r instanceof Dt){const e=r;r=()=>e}if("function"==typeof r&&(r=new xt(r)),r instanceof lt){const e=Et.exec(n);null!==e&&(r.targetName=e[2])}r instanceof at?(s+=r.createPlaceholder(i.length),i.push(r)):s+=r}return s+=e[e.length-1],new Dt(s,i)}const Bt=(e,t)=>Pt`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;function Ft(e,...t){const{styles:i,behaviors:s}=function(e,t){const i=[];let s="";const o=[];for(let n=0,r=e.length-1;n<r;++n){s+=e[n];let r=t[n];if(r instanceof Ee){const e=r.createBehavior();r=r.createCSS(),e&&o.push(e)}r instanceof $||r instanceof CSSStyleSheet?(""!==s.trim()&&(i.push(s),s=""),i.push(r)):s+=r}return s+=e[e.length-1],""!==s.trim()&&i.push(s),{styles:i,behaviors:o}}(e,t),o=$.create(i);return s.length&&o.withBehaviors(...s),o}function Lt(e){return`:host([hidden]){display:none}:host{display:${e}}`}function Ht(e){const t=getComputedStyle(document.body),i=document.querySelector("body");if(i){const s=i.getAttribute("data-vscode-theme-kind");for(const[o,n]of e){let e=t.getPropertyValue(o).toString();if("vscode-high-contrast"===s)0===e.length&&n.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===n.name&&(e="transparent");else if("vscode-high-contrast-light"===s){if(0===e.length&&n.name.includes("background"))switch(n.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===n.name&&(e="transparent");n.setValueFor(i,e)}}}const Vt=new Map;let Mt=!1;function Nt(e,t){const i=Xe.create(e);return t&&(t.includes("--fake-vscode-token")&&(t=`${t}-${"id"+Math.random().toString(16).slice(2)}`),Vt.set(t,i)),Mt||(function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{Ht(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Ht(e)}))}(Vt),Mt=!0),i}const zt=Nt("background","--vscode-editor-background").withDefault("#1e1e1e"),jt=Nt("border-width").withDefault(1),_t=Nt("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),qt=(Nt("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),Nt("corner-radius").withDefault(0)),Ut=Nt("design-unit").withDefault(4),Gt=Nt("disabled-opacity").withDefault(.4),Kt=Nt("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Wt=Nt("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),Qt=(Nt("font-weight","--vscode-font-weight").withDefault("400"),Nt("foreground","--vscode-foreground").withDefault("#cccccc")),Xt=Nt("input-height").withDefault("26"),Yt=Nt("input-min-width").withDefault("100px"),Jt=Nt("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Zt=Nt("type-ramp-base-line-height").withDefault("normal"),ei=Nt("type-ramp-minus1-font-size").withDefault("11px"),ti=Nt("type-ramp-minus1-line-height").withDefault("16px"),ii=(Nt("type-ramp-minus2-font-size").withDefault("9px"),Nt("type-ramp-minus2-line-height").withDefault("16px"),Nt("type-ramp-plus1-font-size").withDefault("16px"),Nt("type-ramp-plus1-line-height").withDefault("24px"),Nt("scrollbarWidth").withDefault("10px")),si=Nt("scrollbarHeight").withDefault("10px"),oi=Nt("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),ni=Nt("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),ri=Nt("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),ai=Nt("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),li=Nt("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),di=Nt("button-border","--vscode-button-border").withDefault("transparent"),ci=Nt("button-icon-background").withDefault("transparent"),hi=Nt("button-icon-corner-radius").withDefault("5px"),ui=Nt("button-icon-outline-offset").withDefault(0),pi=Nt("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),fi=Nt("button-icon-padding").withDefault("3px"),bi=Nt("button-primary-background","--vscode-button-background").withDefault("#0e639c"),gi=Nt("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),vi=Nt("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),mi=Nt("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),yi=Nt("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),xi=Nt("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Ci=Nt("button-padding-horizontal").withDefault("11px"),$i=Nt("button-padding-vertical").withDefault("4px"),wi=Nt("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),ki=Nt("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Ii=Nt("checkbox-corner-radius").withDefault(3),Ti=(Nt("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),Nt("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),Oi=Nt("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Si=Nt("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Ai=Nt("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Ri=Nt("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Di=Nt("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),Ei=(Nt("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),Nt("dropdown-list-max-height").withDefault("200px")),Pi=Nt("input-background","--vscode-input-background").withDefault("#3c3c3c"),Bi=Nt("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),Fi=(Nt("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Nt("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff")),Li=Nt("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Hi=Nt("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Vi=Nt("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Mi=Nt("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Ni=Nt("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),zi=(Nt("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),Nt("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Nt("tag-corner-radius").withDefault("2px"));class ji extends rt{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const _i=ji.compose({baseName:"badge",template:Bt,styles:(e,t)=>Ft`
	${Lt("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Wt};
		font-size: ${ei};
		line-height: ${ti};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${ai};
		border: calc(${jt} * 1px) solid ${di};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${li};
		display: flex;
		height: calc(${Ut} * 4px);
		justify-content: center;
		min-width: calc(${Ut} * 4px + 2px);
		min-height: calc(${Ut} * 4px + 2px);
		padding: 3px 6px;
	}
`});class qi{}H([E({attribute:"aria-atomic"})],qi.prototype,"ariaAtomic",void 0),H([E({attribute:"aria-busy"})],qi.prototype,"ariaBusy",void 0),H([E({attribute:"aria-controls"})],qi.prototype,"ariaControls",void 0),H([E({attribute:"aria-current"})],qi.prototype,"ariaCurrent",void 0),H([E({attribute:"aria-describedby"})],qi.prototype,"ariaDescribedby",void 0),H([E({attribute:"aria-details"})],qi.prototype,"ariaDetails",void 0),H([E({attribute:"aria-disabled"})],qi.prototype,"ariaDisabled",void 0),H([E({attribute:"aria-errormessage"})],qi.prototype,"ariaErrormessage",void 0),H([E({attribute:"aria-flowto"})],qi.prototype,"ariaFlowto",void 0),H([E({attribute:"aria-haspopup"})],qi.prototype,"ariaHaspopup",void 0),H([E({attribute:"aria-hidden"})],qi.prototype,"ariaHidden",void 0),H([E({attribute:"aria-invalid"})],qi.prototype,"ariaInvalid",void 0),H([E({attribute:"aria-keyshortcuts"})],qi.prototype,"ariaKeyshortcuts",void 0),H([E({attribute:"aria-label"})],qi.prototype,"ariaLabel",void 0),H([E({attribute:"aria-labelledby"})],qi.prototype,"ariaLabelledby",void 0),H([E({attribute:"aria-live"})],qi.prototype,"ariaLive",void 0),H([E({attribute:"aria-owns"})],qi.prototype,"ariaOwns",void 0),H([E({attribute:"aria-relevant"})],qi.prototype,"ariaRelevant",void 0),H([E({attribute:"aria-roledescription"})],qi.prototype,"ariaRoledescription",void 0);class Ui{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Gi(e){return new dt("fast-ref",Ui,e)}class Ki{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Wi=(e,t)=>Pt`
    <span
        part="end"
        ${Gi("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Gi("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Qi=(e,t)=>Pt`
    <span
        part="start"
        ${Gi("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Gi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;function Xi(e,...t){const i=S.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))})),S.locate(t).forEach((e=>i.push(e)))}))}var Yi;Pt`
    <span part="end" ${Gi("endContainer")}>
        <slot
            name="end"
            ${Gi("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Pt`
    <span part="start" ${Gi("startContainer")}>
        <slot
            name="start"
            ${Gi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Yi||(Yi={}));const Ji="ArrowDown",Zi="ArrowLeft",es="ArrowRight",ts="ArrowUp",is="Enter",ss="Escape",os="Home",ns="End",rs=" ",as="Tab",ls={ArrowDown:Ji,ArrowLeft:Zi,ArrowRight:es,ArrowUp:ts},ds="form-associated-proxy",cs="ElementInternals",hs=cs in window&&"setFormValue"in window[cs].prototype,us=new WeakMap;function ps(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return hs}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=e?t.concat(Array.from(e)):t;return Object.freeze(i)}return r}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),f.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),f.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!hs)return null;let e=us.get(this);return e||(e=this.attachInternals(),us.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,i){this.elementInternals?this.elementInternals.setValidity(e,t,i):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",ds),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",ds)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===is&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return E({mode:"boolean"})(t.prototype,"disabled"),E({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),E({attribute:"current-value"})(t.prototype,"currentValue"),E(t.prototype,"name"),E({mode:"boolean"})(t.prototype,"required"),m(t.prototype,"value"),t}function fs(e){class t extends(ps(e)){}class i extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return E({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),E({attribute:"current-checked",converter:A})(i.prototype,"currentChecked"),m(i.prototype,"defaultChecked"),m(i.prototype,"checked"),i}class bs extends Ae{}class gs extends(ps(bs)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class vs extends gs{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}H([E({mode:"boolean"})],vs.prototype,"autofocus",void 0),H([E({attribute:"form"})],vs.prototype,"formId",void 0),H([E],vs.prototype,"formaction",void 0),H([E],vs.prototype,"formenctype",void 0),H([E],vs.prototype,"formmethod",void 0),H([E({mode:"boolean"})],vs.prototype,"formnovalidate",void 0),H([E],vs.prototype,"formtarget",void 0),H([E],vs.prototype,"type",void 0),H([m],vs.prototype,"defaultSlottedContent",void 0);class ms{}function ys(e){return e?function(t,i,s){return 1===t.nodeType&&t.matches(e)}:function(e,t,i){return 1===e.nodeType}}H([E({attribute:"aria-expanded"})],ms.prototype,"ariaExpanded",void 0),H([E({attribute:"aria-pressed"})],ms.prototype,"ariaPressed",void 0),Xi(ms,qi),Xi(vs,Ki,ms);class xs{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=v.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(r),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Cs extends xs{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function $s(e){return"string"==typeof e&&(e={property:e}),new dt("fast-slotted",Cs,e)}let ws;const ks=function(){if("boolean"==typeof ws)return ws;if("undefined"==typeof window||!window.document||!window.document.createElement)return ws=!1,ws;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),ws=!0}catch(e){ws=!1}finally{document.head.removeChild(e)}return ws}()?"focus-visible":"focus",Is="not-allowed",Ts=Ft`
	${Lt("inline-flex")} :host {
		outline: none;
		font-family: ${Wt};
		font-size: ${Jt};
		line-height: ${Zt};
		color: ${gi};
		background: ${bi};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${$i} ${Ci};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${jt} * 1px) solid ${di};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${vi};
	}
	:host(:active) {
		background: ${bi};
	}
	.control:${ks} {
		outline: calc(${jt} * 1px) solid ${Kt};
		outline-offset: calc(${jt} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Gt};
		background: ${bi};
		cursor: ${Is};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Ut} * 4px);
		height: calc(${Ut} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Os=Ft`
	:host([appearance='primary']) {
		background: ${bi};
		color: ${gi};
	}
	:host([appearance='primary']:hover) {
		background: ${vi};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${bi};
	}
	:host([appearance='primary']) .control:${ks} {
		outline: calc(${jt} * 1px) solid ${Kt};
		outline-offset: calc(${jt} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${bi};
	}
`,Ss=Ft`
	:host([appearance='secondary']) {
		background: ${mi};
		color: ${yi};
	}
	:host([appearance='secondary']:hover) {
		background: ${xi};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${mi};
	}
	:host([appearance='secondary']) .control:${ks} {
		outline: calc(${jt} * 1px) solid ${Kt};
		outline-offset: calc(${jt} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${mi};
	}
`,As=Ft`
	:host([appearance='icon']) {
		background: ${ci};
		border-radius: ${hi};
		color: ${Qt};
	}
	:host([appearance='icon']:hover) {
		background: ${pi};
		outline: 1px dotted ${_t};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${fi};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${pi};
	}
	:host([appearance='icon']) .control:${ks} {
		outline: calc(${jt} * 1px) solid ${Kt};
		outline-offset: ${ui};
	}
	:host([appearance='icon'][disabled]) {
		background: ${ci};
	}
`;class Rs extends vs{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,i){"appearance"===e&&"icon"===i&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),"aria-label"===e&&(this.ariaLabel=i),"disabled"===e&&(this.disabled=null!==i)}}H([E],Rs.prototype,"appearance",void 0);const Ds=Rs.compose({baseName:"button",template:(e,t)=>Pt`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Gi("control")}
    >
        ${Qi(0,t)}
        <span class="content" part="content">
            <slot ${$s("defaultSlottedContent")}></slot>
        </span>
        ${Wi(0,t)}
    </button>
`,styles:(e,t)=>Ft`
	${Ts}
	${Os}
	${Ss}
	${As}
`,shadowOptions:{delegatesFocus:!0}});class Es extends Ae{}class Ps extends(fs(Es)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Bs extends Ps{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{this.readOnly||e.key!==rs||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}H([E({attribute:"readonly",mode:"boolean"})],Bs.prototype,"readOnly",void 0),H([m],Bs.prototype,"defaultSlottedNodes",void 0),H([m],Bs.prototype,"indeterminate",void 0);class Fs extends Bs{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const Ls=Fs.compose({baseName:"checkbox",template:(e,t)=>Pt`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${$s("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Ft`
	${Lt("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${Ut} * 1px) 0;
		user-select: none;
		font-size: ${Jt};
		line-height: ${Zt};
	}
	.control {
		position: relative;
		width: calc(${Ut} * 4px + 2px);
		height: calc(${Ut} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Ii} * 1px);
		border: calc(${jt} * 1px) solid ${ki};
		background: ${wi};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Wt};
		color: ${Qt};
		padding-inline-start: calc(${Ut} * 2px + 2px);
		margin-inline-end: calc(${Ut} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${Qt};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${Qt};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${wi};
		border-color: ${ki};
	}
	:host(:enabled) .control:active {
		background: ${wi};
		border-color: ${Kt};
	}
	:host(:${ks}) .control {
		border: calc(${jt} * 1px) solid ${Kt};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Is};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Gt};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});function Hs(e,t,i){return{index:e,removed:t,addedCount:i}}function Vs(e,t,i,s,o,n){let a=0,l=0;const d=Math.min(i-t,n-o);if(0===t&&0===o&&(a=function(e,t,i){for(let s=0;s<i;++s)if(e[s]!==t[s])return s;return i}(e,s,d)),i===e.length&&n===s.length&&(l=function(e,t,i){let s=e.length,o=t.length,n=0;for(;n<i&&e[--s]===t[--o];)n++;return n}(e,s,d-a)),o+=a,n-=l,(i-=l)-(t+=a)==0&&n-o==0)return r;if(t===i){const e=Hs(t,[],0);for(;o<n;)e.removed.push(s[o++]);return[e]}if(o===n)return[Hs(t,[],i-t)];const c=function(e){let t=e.length-1,i=e[0].length-1,s=e[t][i];const o=[];for(;t>0||i>0;){if(0===t){o.push(2),i--;continue}if(0===i){o.push(3),t--;continue}const n=e[t-1][i-1],r=e[t-1][i],a=e[t][i-1];let l;l=r<a?r<n?r:n:a<n?a:n,l===n?(n===s?o.push(0):(o.push(1),s=n),t--,i--):l===r?(o.push(3),t--,s=r):(o.push(2),i--,s=a)}return o.reverse(),o}(function(e,t,i,s,o,n){const r=n-o+1,a=i-t+1,l=new Array(r);let d,c;for(let e=0;e<r;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let i=1;i<r;++i)for(let n=1;n<a;++n)e[t+n-1]===s[o+i-1]?l[i][n]=l[i-1][n-1]:(d=l[i-1][n]+1,c=l[i][n-1]+1,l[i][n]=d<c?d:c);return l}(e,t,i,s,o,n)),h=[];let u,p=t,f=o;for(let e=0;e<c.length;++e)switch(c[e]){case 0:void 0!==u&&(h.push(u),u=void 0),p++,f++;break;case 1:void 0===u&&(u=Hs(p,[],0)),u.addedCount++,p++,u.removed.push(s[f]),f++;break;case 2:void 0===u&&(u=Hs(p,[],0)),u.addedCount++,p++;break;case 3:void 0===u&&(u=Hs(p,[],0)),u.removed.push(s[f]),f++}return void 0!==u&&h.push(u),h}const Ms=Array.prototype.push;function Ns(e,t,i,s){const o=Hs(t,i,s);let n=!1,r=0;for(let t=0;t<e.length;t++){const i=e[t];if(i.index+=r,n)continue;const s=(a=o.index,l=o.index+o.removed.length,d=i.index,c=i.index+i.addedCount,l<d||c<a?-1:l===d||c===a?0:a<d?l<c?l-d:c-d:c<l?c-a:l-a);if(s>=0){e.splice(t,1),t--,r-=i.addedCount-i.removed.length,o.addedCount+=i.addedCount-s;const a=o.removed.length+i.removed.length-s;if(o.addedCount||a){let e=i.removed;if(o.index<i.index){const t=o.removed.slice(0,i.index-o.index);Ms.apply(t,e),e=t}if(o.index+o.removed.length>i.index+i.addedCount){const t=o.removed.slice(i.index+i.addedCount-o.index);Ms.apply(e,t)}o.removed=e,i.index<o.index&&(o.index=i.index)}else n=!0}else if(o.index<i.index){n=!0,e.splice(t,0,o),t++;const s=o.addedCount-o.removed.length;i.index+=s,r+=s}}var a,l,d,c;n||e.push(o)}let zs=!1;function js(e,t){let i=e.index;const s=t.length;return i>s?i=s-e.addedCount:i<0&&(i=s+e.removed.length+i-e.addedCount),i<0&&(i=0),e.index=i,e}class _s extends b{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,f.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,f.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=void 0===t?function(e,t){let i=[];const s=function(e){const t=[];for(let i=0,s=e.length;i<s;i++){const s=e[i];Ns(t,s.index,s.removed,s.addedCount)}return t}(t);for(let t=0,o=s.length;t<o;++t){const o=s[t];1!==o.addedCount||1!==o.removed.length?i=i.concat(Vs(e,o.index,o.index+o.addedCount,o.removed,0,o.removed.length)):o.removed[0]!==e[o.index]&&i.push(o)}return i}(this.source,e):Vs(this.source,0,this.source.length,t,0,t.length);this.notify(i)}}function qs(e,t,i,s){e.bind(t[i],s)}function Us(e,t,i,s){const o=Object.create(s);o.index=i,o.length=t.length,e.bind(t[i],o)}Object.freeze({positioning:!1,recycle:!0});class Gs{constructor(e,t,i,s,o,n){this.location=e,this.itemsBinding=t,this.templateBinding=s,this.options=n,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=qs,this.itemsBindingObserver=v.binding(t,this,i),this.templateBindingObserver=v.binding(s,this,o),n.positioning&&(this.bindView=Us)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=r);const t=this.itemsObserver,i=this.itemsObserver=v.getNotifier(this.items),s=t!==i;s&&null!==t&&t.unsubscribe(this),(s||e)&&i.subscribe(this)}updateViews(e){const t=this.childContext,i=this.views,s=this.bindView,o=this.items,n=this.template,r=this.options.recycle,a=[];let l=0,d=0;for(let c=0,h=e.length;c<h;++c){const h=e[c],u=h.removed;let p=0,f=h.index;const b=f+h.addedCount,g=i.splice(h.index,u.length),v=d=a.length+g.length;for(;f<b;++f){const e=i[f],c=e?e.firstChild:this.location;let h;r&&d>0?(p<=v&&g.length>0?(h=g[p],p++):(h=a[l],l++),d--):h=n.create(),i.splice(f,0,h),s(h,o,f,t),h.insertBefore(c)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=i.length;e<t;++e){const s=i[e].context;s.length=t,s.index=e}}refreshAllViews(e=!1){const t=this.items,i=this.childContext,s=this.template,o=this.location,n=this.bindView;let r=t.length,a=this.views,l=a.length;if(0!==r&&!e&&this.options.recycle||(Rt.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(r);for(let e=0;e<r;++e){const r=s.create();n(r,t,e,i),a[e]=r,r.insertBefore(o)}}else{let e=0;for(;e<r;++e)if(e<l)n(a[e],t,e,i);else{const r=s.create();n(r,t,e,i),a.push(r),r.insertBefore(o)}const d=a.splice(e,l-e);for(e=0,r=d.length;e<r;++e)d[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}}class Ks extends at{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=f.createBlockPlaceholder,function(){if(zs)return;zs=!0,v.setArrayObserverFactory((e=>new _s(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,i=e.push,s=e.reverse,o=e.shift,n=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,i=t.apply(this,arguments),s=this.$fastController;return void 0!==s&&e&&s.addSplice(Hs(this.length,[i],0)),i},e.push=function(){const e=i.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(js(Hs(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=s.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.shift=function(){const e=this.length>0,t=o.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(Hs(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=n.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.splice=function(){const e=r.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(js(Hs(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(js(Hs(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=v.isVolatileBinding(e),this.isTemplateBindingVolatile=v.isVolatileBinding(t)}createBehavior(e){return new Gs(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const Ws="focus",Qs="focusin",Xs="focusout",Ys="keydown",Js={none:"none",default:"default",sticky:"sticky"},Zs={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},eo={default:"default",header:"header",stickyHeader:"sticky-header"};class to extends Ae{constructor(){super(),this.noTabbing=!1,this.generateHeader=Js.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const s=Math.max(0,Math.min(this.rowElements.length-1,e)),o=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),n=o[Math.max(0,Math.min(o.length-1,t))];i&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&n.scrollIntoView({block:"center",inline:"center"}),n.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,f.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,i)=>{const s=t;s.rowIndex=i,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=to.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=to.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Ks((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Ws,this.handleFocus),this.addEventListener(Ys,this.handleKeydown),this.addEventListener(Xs,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),f.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Ws,this.handleFocus),this.removeEventListener(Ys,this.handleKeydown),this.removeEventListener(Xs,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const i=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,o=this.rowElements[i];switch(e.key){case ts:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Ji:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||o.offsetTop+o.offsetHeight<=s)return void this.focusOnCell(i,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=i;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>s){let t=0;this.generateHeader===Js.sticky&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case os:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case ns:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,f.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Js.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Js.sticky?eo.stickyHeader:eo.header,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}to.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),H([E({attribute:"no-tabbing",mode:"boolean"})],to.prototype,"noTabbing",void 0),H([E({attribute:"generate-header"})],to.prototype,"generateHeader",void 0),H([E({attribute:"grid-template-columns"})],to.prototype,"gridTemplateColumns",void 0),H([m],to.prototype,"rowsData",void 0),H([m],to.prototype,"columnDefinitions",void 0),H([m],to.prototype,"rowItemTemplate",void 0),H([m],to.prototype,"cellItemTemplate",void 0),H([m],to.prototype,"headerCellItemTemplate",void 0),H([m],to.prototype,"focusRowIndex",void 0),H([m],to.prototype,"focusColumnIndex",void 0),H([m],to.prototype,"defaultRowItemTemplate",void 0),H([m],to.prototype,"rowElementTag",void 0),H([m],to.prototype,"rowElements",void 0);class io extends xs{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function so(e){return"string"==typeof e&&(e={property:e}),new dt("fast-children",io,e)}class oo extends Ae{constructor(){super(...arguments),this.rowType=eo.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Ks((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Xs,this.handleFocusout),this.addEventListener(Ys,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Xs,this.handleFocusout),this.removeEventListener(Ys,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Zi:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case es:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case os:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case ns:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===eo.default&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===eo.default&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}H([E({attribute:"grid-template-columns"})],oo.prototype,"gridTemplateColumns",void 0),H([E({attribute:"row-type"})],oo.prototype,"rowType",void 0),H([m],oo.prototype,"rowData",void 0),H([m],oo.prototype,"columnDefinitions",void 0),H([m],oo.prototype,"cellItemTemplate",void 0),H([m],oo.prototype,"headerCellItemTemplate",void 0),H([m],oo.prototype,"rowIndex",void 0),H([m],oo.prototype,"isActiveRow",void 0),H([m],oo.prototype,"activeCellItemTemplate",void 0),H([m],oo.prototype,"defaultCellItemTemplate",void 0),H([m],oo.prototype,"defaultHeaderCellItemTemplate",void 0),H([m],oo.prototype,"cellElements",void 0);const no=Pt`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,ro=Pt`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class ao extends Ae{constructor(){super(...arguments),this.cellType=Zs.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Qs,this.handleFocusin),this.addEventListener(Xs,this.handleFocusout),this.addEventListener(Ys,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Qs,this.handleFocusin),this.removeEventListener(Xs,this.handleFocusout),this.removeEventListener(Ys,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===Zs.columnHeader){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===Zs.default&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===Zs.columnHeader&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case is:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===Zs.columnHeader){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case ss:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case Zs.columnHeader:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=ro.render(this,this);break;case void 0:case Zs.rowHeader:case Zs.default:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=no.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}H([E({attribute:"cell-type"})],ao.prototype,"cellType",void 0),H([E({attribute:"grid-column"})],ao.prototype,"gridColumn",void 0),H([m],ao.prototype,"rowData",void 0),H([m],ao.prototype,"columnDefinition",void 0);class lo extends to{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const co=lo.compose({baseName:"data-grid",baseClass:to,template:(e,t)=>{const i=function(e){const t=e.tagFor(oo);return Pt`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),s=e.tagFor(oo);return Pt`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${so({property:"rowElements",filter:ys("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>Ft`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});class ho extends oo{}const uo=ho.compose({baseName:"data-grid-row",baseClass:oo,template:(e,t)=>{const i=function(e){const t=e.tagFor(ao);return Pt`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),s=function(e){const t=e.tagFor(ao);return Pt`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return Pt`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${so({property:"cellElements",filter:ys('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${$s("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>Ft`
	:host {
		display: grid;
		padding: calc((${Ut} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${zt};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Si};
		outline: 1px dotted ${_t};
		outline-offset: -1px;
	}
`});class po extends ao{}const fo=po.compose({baseName:"data-grid-cell",baseClass:ao,template:(e,t)=>Pt`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>Ft`
	:host {
		padding: calc(${Ut} * 1px) calc(${Ut} * 3px);
		color: ${Qt};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Wt};
		font-size: ${Jt};
		line-height: ${Zt};
		font-weight: 400;
		border: solid calc(${jt} * 1px) transparent;
		border-radius: calc(${qt} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${ks}),
	:host(:focus),
	:host(:active) {
		background: ${Ti};
		border: solid calc(${jt} * 1px) ${Kt};
		color: ${Oi};
		outline: none;
	}
	:host(:${ks}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Oi} !important;
	}
`}),bo={horizontal:"horizontal",vertical:"vertical"},go={separator:"separator",presentation:"presentation"};class vo extends Ae{constructor(){super(...arguments),this.role=go.separator,this.orientation=bo.horizontal}}H([E],vo.prototype,"role",void 0),H([E],vo.prototype,"orientation",void 0);class mo extends vo{}const yo=mo.compose({baseName:"divider",template:(e,t)=>Pt`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>Ft`
	${Lt("block")} :host {
		border: none;
		border-top: calc(${jt} * 1px) solid ${Ai};
		box-sizing: content-box;
		height: 0;
		margin: calc(${Ut} * 1px) 0;
		width: 100%;
	}
`});let xo=0;function Co(e=""){return`${e}${xo++}`}function $o(e){return function(...e){return e.every((e=>e instanceof HTMLElement))}(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class wo extends Ae{constructor(e,t,i,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),v.notify(this,"value")}get value(){var e;return v.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}H([m],wo.prototype,"checked",void 0),H([m],wo.prototype,"content",void 0),H([m],wo.prototype,"defaultSelected",void 0),H([E({mode:"boolean"})],wo.prototype,"disabled",void 0),H([E({attribute:"selected",mode:"boolean"})],wo.prototype,"selectedAttribute",void 0),H([m],wo.prototype,"selected",void 0),H([E({attribute:"value",mode:"fromView"})],wo.prototype,"initialValue",void 0);class ko{}H([m],ko.prototype,"ariaChecked",void 0),H([m],ko.prototype,"ariaPosInSet",void 0),H([m],ko.prototype,"ariaSelected",void 0),H([m],ko.prototype,"ariaSetSize",void 0),Xi(ko,qi),Xi(wo,Ki,ko);class Io extends Ae{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return v.track(this,"options"),this._options}set options(e){this._options=e,v.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,s=e+i;let o=null;switch(i){case-1:o=this.options.reduceRight(((e,t,i)=>!e&&!t.disabled&&i<s?t:e),o);break;case 1:o=this.options.reduce(((e,t,i)=>!e&&!t.disabled&&i>s?t:e),o)}return this.options.indexOf(o)}handleChange(e,t){"selected"===t&&(Io.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Io.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case os:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Ji:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case ts:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case ns:e.preventDefault(),this.selectLastOption();break;case as:return this.focusAndScrollOptionIntoView(),!0;case is:case ss:return!0;case rs:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof e){const i=this.getSelectableIndex(e,t),s=i>-1?i:e;return this.selectedIndex=s,void(t===s&&this.selectedIndexChanged(t,s))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var i;const s=t.filter(Io.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((e=>{const t=v.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=s.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let i=e.length;for(;i--;)if(!e[i].disabled)return i;return-1}(this.options))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,i;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>($o(t)&&e.push(t),e)),[]);const i=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=Co("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Io.slottedOptionFilter=e=>$o(e)&&!e.hidden,Io.TYPE_AHEAD_TIMEOUT_MS=1e3,H([E({mode:"boolean"})],Io.prototype,"disabled",void 0),H([m],Io.prototype,"selectedIndex",void 0),H([m],Io.prototype,"selectedOptions",void 0),H([m],Io.prototype,"slottedOptions",void 0),H([m],Io.prototype,"typeaheadBuffer",void 0);class To{}function Oo(e,t,i=0){return[t,i]=[t,i].sort(((e,t)=>e-t)),t<=e&&e<i}H([m],To.prototype,"ariaActiveDescendant",void 0),H([m],To.prototype,"ariaDisabled",void 0),H([m],To.prototype,"ariaExpanded",void 0),H([m],To.prototype,"ariaMultiSelectable",void 0),Xi(To,qi),Xi(Io,To);class So extends Io{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,s;this.ariaActiveDescendant=null!==(s=null===(i=this.options[t])||void 0===i?void 0:i.id)&&void 0!==s?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=Oo(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Oo(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Oo(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=Oo(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case os:return void this.checkFirstOption(i);case Ji:return void this.checkNextOption(i);case ts:return void this.checkPreviousOption(i);case ns:return void this.checkLastOption(i);case as:return this.focusAndScrollOptionIntoView(),!0;case ss:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case rs:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,null===(i=this.options)||void 0===i||i.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var i;const s=Math.max(0,parseInt(null!==(i=null==t?void 0:t.toFixed())&&void 0!==i?i:"",10));s!==t&&f.queueUpdate((()=>{this.size=s}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}H([m],So.prototype,"activeIndex",void 0),H([E({mode:"boolean"})],So.prototype,"multiple",void 0),H([E({converter:R})],So.prototype,"size",void 0);class Ao extends So{}class Ro extends(ps(Ao)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const Do={above:"above",below:"below"};class Eo extends Ro{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Co("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void f.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return v.track(this,"value"),this._value}set value(e){var t,i,s,o,n,r,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(s=null===(i=this._options[this.selectedIndex])||void 0===i?void 0:i.value)&&void 0!==s?s:null,d=null!==(n=null===(o=this._options[t])||void 0===o?void 0:o.value)&&void 0!==n?n:null;-1!==t&&l===d||(e="",this.selectedIndex=t),e=null!==(a=null===(r=this.firstSelectedOption)||void 0===r?void 0:r.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),v.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==i?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Do.above:Do.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Do.above?~~e.top:~~t}get displayValue(){var e,t;return v.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;this.isSameNode(i)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(i))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{v.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{v.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),null===(i=this.options)||void 0===i||i.forEach(((e,t)=>{var i;const s=null===(i=this.proxy)||void 0===i?void 0:i.options.item(t);s&&(s.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Io.slottedOptionFilter),i=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===i?0:i}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case rs:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case os:case ns:e.preventDefault();break;case is:e.preventDefault(),this.open=!this.open;break;case ss:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case as:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Ji||t===ts)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&v.notify(this,"displayValue")}}H([E({attribute:"open",mode:"boolean"})],Eo.prototype,"open",void 0),H([function(e,t,i){return Object.assign({},i,{get:function(){return v.trackVolatile(),i.get.apply(this)}})}],Eo.prototype,"collapsible",null),H([m],Eo.prototype,"control",void 0),H([E({attribute:"position"})],Eo.prototype,"positionAttribute",void 0),H([m],Eo.prototype,"position",void 0),H([m],Eo.prototype,"maxHeight",void 0);class Po{}function Bo(e,t){const i="function"==typeof t?t:()=>t;return(t,s)=>e(t,s)?i(t,s):null}H([m],Po.prototype,"ariaControls",void 0),Xi(Po,To),Xi(Eo,Ki,Po);class Fo extends Eo{}const Lo=Fo.compose({baseName:"dropdown",template:(e,t)=>Pt`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${Bo((e=>e.collapsible),Pt`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Gi("control")}
                >
                    ${Qi(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Wi(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Gi("listbox")}
        >
            <slot
                ${$s({filter:Io.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Ft`
	${Lt("inline-flex")} :host {
		background: ${Ri};
		box-sizing: border-box;
		color: ${Qt};
		contain: contents;
		font-family: ${Wt};
		height: calc(${Xt} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Yt};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${jt} * 1px) solid ${Di};
		border-radius: calc(${qt} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Jt};
		line-height: ${Zt};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Ri};
		border: calc(${jt} * 1px) solid ${Kt};
		border-radius: calc(${qt} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Ei};
		padding: 0 0 calc(${Ut} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${ks}) .control {
		border-color: ${Kt};
	}
	:host(:not([disabled]):hover) {
		background: ${Ri};
		border-color: ${Di};
	}
	:host(:${ks}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Ti};
		border: calc(${jt} * 1px) solid ${Kt};
		color: ${Oi};
	}
	:host([disabled]) {
		cursor: ${Is};
		opacity: ${Gt};
	}
	:host([disabled]) .control {
		cursor: ${Is};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Ri};
		color: ${Qt};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Kt};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Kt};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Xt} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Xt} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${Ut} * 4px);
		min-width: calc(${Ut} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});class Ho extends Ae{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}H([E],Ho.prototype,"download",void 0),H([E],Ho.prototype,"href",void 0),H([E],Ho.prototype,"hreflang",void 0),H([E],Ho.prototype,"ping",void 0),H([E],Ho.prototype,"referrerpolicy",void 0),H([E],Ho.prototype,"rel",void 0),H([E],Ho.prototype,"target",void 0),H([E],Ho.prototype,"type",void 0),H([m],Ho.prototype,"defaultSlottedContent",void 0);class Vo{}H([E({attribute:"aria-expanded"})],Vo.prototype,"ariaExpanded",void 0),Xi(Vo,qi),Xi(Ho,Ki,Vo);class Mo extends Ho{}const No=Mo.compose({baseName:"link",template:(e,t)=>Pt`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Gi("control")}
    >
        ${Qi(0,t)}
        <span class="content" part="content">
            <slot ${$s("defaultSlottedContent")}></slot>
        </span>
        ${Wi(0,t)}
    </a>
`,styles:(e,t)=>Ft`
	${Lt("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Li};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Wt};
		font-size: ${Jt};
		line-height: ${Zt};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${jt} * 1px) solid transparent;
		border-radius: calc(${qt} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Fi};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Fi};
	}
	:host(:${ks}) .control,
	:host(:focus) .control {
		border: calc(${jt} * 1px) solid ${Kt};
	}
`,shadowOptions:{delegatesFocus:!0}});class zo extends wo{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}const jo=zo.compose({baseName:"option",template:(e,t)=>Pt`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Qi(0,t)}
        <span class="content" part="content">
            <slot ${$s("content")}></slot>
        </span>
        ${Wi(0,t)}
    </template>
`,styles:(e,t)=>Ft`
	${Lt("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${qt};
		border: calc(${jt} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${Qt};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Jt};
		line-height: ${Zt};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Ut} / 2) * 1px)
			calc((${Ut} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${ks}) {
		border-color: ${Kt};
		background: ${Ti};
		color: ${Qt};
	}
	:host([aria-selected='true']) {
		background: ${Ti};
		border: calc(${jt} * 1px) solid ${Kt};
		color: ${Oi};
	}
	:host(:active) {
		background: ${Ti};
		color: ${Oi};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Ti};
		border: calc(${jt} * 1px) solid ${Kt};
		color: ${Oi};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Ti};
		color: ${Qt};
	}
	:host([disabled]) {
		cursor: ${Is};
		opacity: ${Gt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),_o="horizontal";class qo extends Ae{constructor(){super(...arguments),this.orientation=_o,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((s,o)=>{if("tab"===s.slot){const e=this.activeTabIndex===o&&this.isFocusableElement(s);this.activeindicator&&this.isFocusableElement(s)&&(this.showActiveIndicator=!0);const t=this.tabIds[o],i=this.tabpanelIds[o];s.setAttribute("id",t),s.setAttribute("aria-selected",e?"true":"false"),s.setAttribute("aria-controls",i),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=s)}s.style[e]="",s.style[t]="",s.style[i]=`${o+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const i=this.tabIds[t],s=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Zi:e.preventDefault(),this.adjustBackward(e);break;case es:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case ts:e.preventDefault(),this.adjustBackward(e);break;case Ji:e.preventDefault(),this.adjustForward(e)}switch(e.key){case os:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case ns:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}i-1<0?i=t.length-1:i-=1}},this.moveToTabByIndex=(e,t)=>{const i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${Co()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${Co()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===_o}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const n=o-s;this.activeIndicatorRef.style.transform=`${t}(${n}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){var t,i;this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(0,t=this.tabs.length-1,(i=this.activeTabIndex+e)<0?t:i>t?0:i),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}H([E],qo.prototype,"orientation",void 0),H([E],qo.prototype,"activeid",void 0),H([m],qo.prototype,"tabs",void 0),H([m],qo.prototype,"tabpanels",void 0),H([E({mode:"boolean"})],qo.prototype,"activeindicator",void 0),H([m],qo.prototype,"activeIndicatorRef",void 0),H([m],qo.prototype,"showActiveIndicator",void 0),Xi(qo,Ki);class Uo extends Ae{}H([E({mode:"boolean"})],Uo.prototype,"disabled",void 0);class Go extends Ae{}class Ko extends qo{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=_o),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const Wo=Ko.compose({baseName:"panels",template:(e,t)=>Pt`
    <template class="${e=>e.orientation}">
        ${Qi(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${$s("tabs")}></slot>

            ${Bo((e=>e.showActiveIndicator),Pt`
                    <div
                        ${Gi("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Wi(0,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${$s("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>Ft`
	${Lt("grid")} :host {
		box-sizing: border-box;
		font-family: ${Wt};
		font-size: ${Jt};
		line-height: ${Zt};
		color: ${Qt};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${Ut} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${Ut} * 1px) calc(${Ut} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${Ut} / 4) * 1px);
		justify-self: center;
		background: ${Mi};
		margin: 0;
		border-radius: calc(${qt} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`});class Qo extends Uo{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const Xo=Qo.compose({baseName:"panel-tab",template:(e,t)=>Pt`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>Ft`
	${Lt("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Wt};
		font-size: ${Jt};
		line-height: ${Zt};
		height: calc(${Ut} * 7px);
		padding: calc(${Ut} * 1px) 0;
		color: ${Ni};
		fill: currentcolor;
		border-radius: calc(${qt} * 1px);
		border: solid calc(${jt} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Mi};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Mi};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Mi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Mi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Mi};
		fill: currentcolor;
	}
	:host(:${ks}) {
		outline: none;
		border: solid calc(${jt} * 1px) ${Vi};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${Ut} * 2px);
	}
`});class Yo extends Go{}const Jo=Yo.compose({baseName:"panel-view",template:(e,t)=>Pt`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>Ft`
	${Lt("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${jt} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Jt};
		line-height: ${Zt};
		padding: 10px calc((${Ut} + 2) * 1px);
	}
`});class Zo extends Ae{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,s=t-e;this.percentComplete=0===s?0:Math.fround((i-e)/s*100)}}H([E({converter:R})],Zo.prototype,"value",void 0),H([E({converter:R})],Zo.prototype,"min",void 0),H([E({converter:R})],Zo.prototype,"max",void 0),H([E({mode:"boolean"})],Zo.prototype,"paused",void 0),H([m],Zo.prototype,"percentComplete",void 0);class en extends Zo{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,i){"value"===e&&this.removeAttribute("value")}}const tn=en.compose({baseName:"progress-ring",template:(e,t)=>Pt`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Bo((e=>"number"==typeof e.value),Pt`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${Bo((e=>"number"!=typeof e.value),Pt`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>Ft`
	${Lt("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${Ut} * 7px);
		width: calc(${Ut} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${Ut} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${Hi};
		stroke-width: calc(${Ut} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});var sn;!function(e){e.ltr="ltr",e.rtl="rtl"}(sn||(sn={}));class on extends Ae{constructor(){super(...arguments),this.orientation=bo.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((e=>{e!==i&&e.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,i=e.target,s=null!==i?t.indexOf(i):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===o&&s===o||o===t.length-1&&o===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===es,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Zi,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key))this.moveRightOffGroup();else for(i===t.length&&(i=0);i<t.length&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;i>=0&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}},this.keydownHandler=e=>{const t=e.key;if(t in ls&&this.isInsideFoundationToolbar)return!0;switch(t){case is:this.checkFocusedRadio();break;case es:case Ji:this.direction===sn.ltr?this.moveRight(e):this.moveLeft(e);break;case Zi:case ts:this.direction===sn.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=this.closest("[dir]");return null!==t&&"rtl"===t.dir?sn.rtl:sn.ltr})(),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;t>1&&(e[t-1].checked=!0);let i=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!i){const i=e[t-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}H([E({attribute:"readonly",mode:"boolean"})],on.prototype,"readOnly",void 0),H([E({attribute:"disabled",mode:"boolean"})],on.prototype,"disabled",void 0),H([E],on.prototype,"name",void 0),H([E],on.prototype,"value",void 0),H([E],on.prototype,"orientation",void 0),H([m],on.prototype,"childItems",void 0),H([m],on.prototype,"slottedRadioButtons",void 0);class nn extends on{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}const rn=nn.compose({baseName:"radio-group",template:(e,t)=>Pt`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===bo.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${$s({property:"slottedRadioButtons",filter:ys("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Ft`
	${Lt("flex")} :host {
		align-items: flex-start;
		margin: calc(${Ut} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${Qt};
		font-size: ${Jt};
		margin: calc(${Ut} * 1px) 0;
	}
`});class an extends Ae{}class ln extends(fs(an)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class dn extends ln{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==rs)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}H([E({attribute:"readonly",mode:"boolean"})],dn.prototype,"readOnly",void 0),H([m],dn.prototype,"name",void 0),H([m],dn.prototype,"defaultSlottedNodes",void 0);class cn extends dn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const hn=cn.compose({baseName:"radio",template:(e,t)=>Pt`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${$s("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Ft`
	${Lt("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Jt};
		line-height: ${Zt};
		margin: calc(${Ut} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${wi};
		border-radius: 999px;
		border: calc(${jt} * 1px) solid ${ki};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${Ut} * 4px);
		position: relative;
		outline: none;
		width: calc(${Ut} * 4px);
	}
	.label {
		color: ${Qt};
		cursor: pointer;
		font-family: ${Wt};
		margin-inline-end: calc(${Ut} * 2px + 2px);
		padding-inline-start: calc(${Ut} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${Qt};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${Ut} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${wi};
		border-color: ${ki};
	}
	:host(:not([disabled])) .control:active {
		background: ${wi};
		border-color: ${Kt};
	}
	:host(:${ks}) .control {
		border: calc(${jt} * 1px) solid ${Kt};
	}
	:host([aria-checked='true']) .control {
		background: ${wi};
		border: calc(${jt} * 1px) solid ${ki};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${wi};
		border: calc(${jt} * 1px) solid ${ki};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${wi};
		border: calc(${jt} * 1px) solid ${Kt};
	}
	:host([aria-checked="true"]:${ks}:not([disabled])) .control {
		border: calc(${jt} * 1px) solid ${Kt};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Is};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Gt};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});class un extends rt{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const pn=un.compose({baseName:"tag",template:Bt,styles:(e,t)=>Ft`
	${Lt("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Wt};
		font-size: ${ei};
		line-height: ${ti};
	}
	.control {
		background-color: ${ai};
		border: calc(${jt} * 1px) solid ${di};
		border-radius: ${zi};
		color: ${li};
		padding: calc(${Ut} * 0.5px) calc(${Ut} * 1px);
		text-transform: uppercase;
	}
`});class fn extends Ae{}class bn extends(ps(fn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const gn={email:"email",password:"password",tel:"tel",text:"text",url:"url"};class vn extends bn{constructor(){super(...arguments),this.type=gn.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&f.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}H([E({attribute:"readonly",mode:"boolean"})],vn.prototype,"readOnly",void 0),H([E({mode:"boolean"})],vn.prototype,"autofocus",void 0),H([E],vn.prototype,"placeholder",void 0),H([E],vn.prototype,"type",void 0),H([E],vn.prototype,"list",void 0),H([E({converter:R})],vn.prototype,"maxlength",void 0),H([E({converter:R})],vn.prototype,"minlength",void 0),H([E],vn.prototype,"pattern",void 0),H([E({converter:R})],vn.prototype,"size",void 0),H([E({mode:"boolean"})],vn.prototype,"spellcheck",void 0),H([m],vn.prototype,"defaultSlottedNodes",void 0);class mn{}Xi(mn,qi),Xi(vn,Ki,mn);class yn extends Ae{}class xn extends(ps(yn)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Cn={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};class $n extends xn{constructor(){super(...arguments),this.resize=Cn.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}H([E({mode:"boolean"})],$n.prototype,"readOnly",void 0),H([E],$n.prototype,"resize",void 0),H([E({mode:"boolean"})],$n.prototype,"autofocus",void 0),H([E({attribute:"form"})],$n.prototype,"formId",void 0),H([E],$n.prototype,"list",void 0),H([E({converter:R})],$n.prototype,"maxlength",void 0),H([E({converter:R})],$n.prototype,"minlength",void 0),H([E],$n.prototype,"name",void 0),H([E],$n.prototype,"placeholder",void 0),H([E({converter:R,mode:"fromView"})],$n.prototype,"cols",void 0),H([E({converter:R,mode:"fromView"})],$n.prototype,"rows",void 0),H([E({mode:"boolean"})],$n.prototype,"spellcheck",void 0),H([m],$n.prototype,"defaultSlottedNodes",void 0),Xi($n,mn);class wn extends $n{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const kn=wn.compose({baseName:"text-area",template:(e,t)=>Pt`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==Cn.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${$s("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${Gi("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>Ft`
	${Lt("inline-block")} :host {
		font-family: ${Wt};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Bi};
		background: ${Pi};
		border-radius: calc(${qt} * 1px);
		border: calc(${jt} * 1px) solid ${Di};
		font: inherit;
		font-size: ${Jt};
		line-height: ${Zt};
		padding: calc(${Ut} * 2px + 1px);
		width: 100%;
		min-width: ${Yt};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Pi};
		border-color: ${Di};
	}
	.control:active:enabled {
		background: ${Pi};
		border-color: ${Kt};
	}
	.control:hover,
	.control:${ks},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${ii};
		height: ${si};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Pi};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${oi};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${ni};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${ri};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${Kt};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${Qt};
		cursor: pointer;
		font-size: ${Jt};
		line-height: ${Zt};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Is};
	}
	:host([disabled]) {
		opacity: ${Gt};
	}
	:host([disabled]) .control {
		border-color: ${Di};
	}
`,shadowOptions:{delegatesFocus:!0}});function In(e,t,i){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}class Tn extends vn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const On=Tn.compose({baseName:"text-field",template:(e,t)=>Pt`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${$s({property:"defaultSlottedNodes",filter:In})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Qi(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Gi("control")}
            />
            ${Wi(0,t)}
        </div>
    </template>
`,styles:(e,t)=>Ft`
	${Lt("inline-block")} :host {
		font-family: ${Wt};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Bi};
		background: ${Pi};
		border-radius: calc(${qt} * 1px);
		border: calc(${jt} * 1px) solid ${Di};
		height: calc(${Xt} * 1px);
		min-width: ${Yt};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${Ut} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${Ut} * 2px + 1px);
		font-size: ${Jt};
		line-height: ${Zt};
	}
	.control:hover,
	.control:${ks},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${Qt};
		cursor: pointer;
		font-size: ${Jt};
		line-height: ${Zt};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Ut} * 4px);
		height: calc(${Ut} * 4px);
	}
	.start {
		margin-inline-start: calc(${Ut} * 2px);
	}
	.end {
		margin-inline-end: calc(${Ut} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Pi};
		border-color: ${Di};
	}
	:host(:active:not([disabled])) .root {
		background: ${Pi};
		border-color: ${Kt};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${Kt};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Is};
	}
	:host([disabled]) {
		opacity: ${Gt};
	}
	:host([disabled]) .control {
		border-color: ${Di};
	}
`,shadowOptions:{delegatesFocus:!0}}),Sn={vsCodeBadge:_i,vsCodeButton:Ds,vsCodeCheckbox:Ls,vsCodeDataGrid:co,vsCodeDataGridCell:fo,vsCodeDataGridRow:uo,vsCodeDivider:yo,vsCodeDropdown:Lo,vsCodeLink:No,vsCodeOption:jo,vsCodePanels:Wo,vsCodePanelTab:Xo,vsCodePanelView:Jo,vsCodeProgressRing:tn,vsCodeRadioGroup:rn,vsCodeRadio:hn,vsCodeTag:pn,vsCodeTextArea:kn,vsCodeTextField:On,register(e,...t){if(e)for(const i in this)"register"!==i&&this[i]().register(e,...t)}}}},t={};function i(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0});var t=i(78496);(0,t.provideVSCodeDesignSystem)().register((0,t.vsCodeDropdown)(),(0,t.vsCodeOption)(),(0,t.vsCodeLink)(),(0,t.vsCodeDivider)())})(),module.exports=s})();