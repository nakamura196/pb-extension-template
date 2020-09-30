import{d as e,P as t,h as n,t as i,i as r,I as o,a,b as s,D as l,c,e as d,G as p,f as u,g as h,r as g}from"./paper-inky-focus-behavior-b4765f0e.js";import{P as f,I as m,a as b,b as v,c as y,d as w,N as _,e as x,f as k}from"./paper-checkbox-a097ce7e.js";import{u as A,p as S,P as E,E as T,T as C}from"./pb-code-editor-c156f3e4.js";import{L,h as R,c as O,_ as z,p as P}from"./pb-mixin-ad783a5d.js";import{r as I}from"./utils-e7325746.js";import"./paper-icon-button-ca3015ec.js";import"./iron-form-a9bf1418.js";
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const B={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,n){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),n)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[t]:e(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var n;"object"==typeof e?(n=e.left,t=e.top):n=e,n=n||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(n,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=n,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var n=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),n.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(n.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}},$={},M=function(e,t){if(null!=$[e])throw new Error("effect `"+e+"` is already registered.");$[e]=t},F=[B,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(e){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(e,t){var n=$[e];if(!n)throw new ReferenceError(this._getUndefinedMsg(e));var i=this._boundEffect(n,t||{});return i.setUp(),i},_effectsChanged:function(e,t,n){this._tearDownEffects(),e&&n&&(e.split(" ").forEach((function(e){var n;""!==e&&((n=$[e])?this._effects.push(this._boundEffect(n,t[e])):console.warn(this._getUndefinedMsg(e)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(e,t){t=t||{};var n=parseFloat(t.startsAt||0),i=parseFloat(t.endsAt||1),r=i-n,o=function(){},a=0===n&&1===i?e.run:function(t,i){e.run.call(this,Math.max(0,(t-n)/r),i)};return{setUp:e.setUp?e.setUp.bind(this,t):o,run:e.run?a.bind(this):o,tearDown:e.tearDown?e.tearDown.bind(this):o}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(e){!1!==e.setUp()&&this._effectsRunFn.push(e.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(e){e.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(e,t){this._effectsRunFn&&this._effectsRunFn.forEach((function(n){n(e,t)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var e=this._clampedScrollTop;this._updateScrollState(e),this.threshold>0&&this._setThresholdTriggered(e>=this.threshold)}},_getDOMRef:function(e){console.warn("_getDOMRef","`"+e+"` is undefined")},_getUndefinedMsg:function(e){return"Scroll effect `"+e+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+e+".html ?"}}];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
function D(e,t,n,i){n.apply(i,t.map((function(t){return t[0]+(t[1]-t[0])*e})))}
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
M("blend-background",{setUp:function(){var e={};e.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),e.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),e.backgroundFrontLayer.style.willChange="opacity",e.backgroundFrontLayer.style.transform="translateZ(0)",e.backgroundRearLayer.style.willChange="opacity",e.backgroundRearLayer.style.transform="translateZ(0)",e.backgroundRearLayer.style.opacity=0,this._fxBlendBackground=e},run:function(e,t){var n=this._fxBlendBackground;n.backgroundFrontLayer.style.opacity=1-e,n.backgroundRearLayer.style.opacity=e},tearDown:function(){delete this._fxBlendBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
M("fade-background",{setUp:function(e){var t={},n=e.duration||"0.5s";t.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),t.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),t.backgroundFrontLayer.style.willChange="opacity",t.backgroundFrontLayer.style.webkitTransform="translateZ(0)",t.backgroundFrontLayer.style.transitionProperty="opacity",t.backgroundFrontLayer.style.transitionDuration=n,t.backgroundRearLayer.style.willChange="opacity",t.backgroundRearLayer.style.webkitTransform="translateZ(0)",t.backgroundRearLayer.style.transitionProperty="opacity",t.backgroundRearLayer.style.transitionDuration=n,this._fxFadeBackground=t},run:function(e,t){var n=this._fxFadeBackground;e>=1?(n.backgroundFrontLayer.style.opacity=0,n.backgroundRearLayer.style.opacity=1):(n.backgroundFrontLayer.style.opacity=1,n.backgroundRearLayer.style.opacity=0)},tearDown:function(){delete this._fxFadeBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
M("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}}),M("resize-title",{setUp:function(){var e=this._getDOMRef("mainTitle"),t=this._getDOMRef("condensedTitle");if(!t)return console.warn("Scroll effect `resize-title`: undefined `condensed-title`"),!1;if(!e)return console.warn("Scroll effect `resize-title`: undefined `main-title`"),!1;t.style.willChange="opacity",t.style.webkitTransform="translateZ(0)",t.style.transform="translateZ(0)",t.style.webkitTransformOrigin="left top",t.style.transformOrigin="left top",e.style.willChange="opacity",e.style.webkitTransformOrigin="left top",e.style.transformOrigin="left top",e.style.webkitTransform="translateZ(0)",e.style.transform="translateZ(0)";var n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),r={};r.scale=parseInt(window.getComputedStyle(t)["font-size"],10)/parseInt(window.getComputedStyle(e)["font-size"],10),r.titleDX=n.left-i.left,r.titleDY=n.top-i.top,r.condensedTitle=t,r.title=e,this._fxResizeTitle=r},run:function(e,t){var n=this._fxResizeTitle;this.condenses||(t=0),e>=1?(n.title.style.opacity=0,n.condensedTitle.style.opacity=1):(n.title.style.opacity=1,n.condensedTitle.style.opacity=0),D(Math.min(1,e),[[1,n.scale],[0,-n.titleDX],[t,t-n.titleDY]],(function(e,t,i){this.transform("translate("+t+"px, "+i+"px) scale3d("+e+", "+e+", 1)",n.title)}),this)},tearDown:function(){delete this._fxResizeTitle}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
M("parallax-background",{setUp:function(e){var t={},n=parseFloat(e.scalar);t.background=this._getDOMRef("background"),t.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),t.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),t.deltaBg=t.backgroundFrontLayer.offsetHeight-t.background.offsetHeight,0===t.deltaBg?(isNaN(n)&&(n=.8),t.deltaBg=(this._dHeight||0)*n):(isNaN(n)&&(n=1),t.deltaBg=t.deltaBg*n),this._fxParallaxBackground=t},run:function(e,t){var n=this._fxParallaxBackground;this.transform("translate3d(0px, "+n.deltaBg*Math.min(1,e)+"px, 0px)",n.backgroundFrontLayer),n.backgroundRearLayer&&this.transform("translate3d(0px, "+n.deltaBg*Math.min(1,e)+"px, 0px)",n.backgroundRearLayer)},tearDown:function(){delete this._fxParallaxBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
M("material",{setUp:function(){return this.effects="waterfall resize-title blend-background parallax-background",!1}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
M("resize-snapped-title",{setUp:function(e){var t=this._getDOMRef("mainTitle"),n=this._getDOMRef("condensedTitle"),i=e.duration||"0.2s",r={};return n?t?(t.style.transitionProperty="opacity",t.style.transitionDuration=i,n.style.transitionProperty="opacity",n.style.transitionDuration=i,r.condensedTitle=n,r.title=t,void(this._fxResizeSnappedTitle=r)):(console.warn("Scroll effect `resize-snapped-title`: undefined `main-title`"),!1):(console.warn("Scroll effect `resize-snapped-title`: undefined `condensed-title`"),!1)},run:function(e,t){var n=this._fxResizeSnappedTitle;e>0?(n.title.style.opacity=0,n.condensedTitle.style.opacity=1):(n.title.style.opacity=1,n.condensedTitle.style.opacity=0)},tearDown:function(){var e=this._fxResizeSnappedTitle;e.title.style.transition="",e.condensedTitle.style.transition="",delete this._fxResizeSnappedTitle}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var t=e(this).parentNode,n=e(this).getOwnerRoot();return this.for?e(n).querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?n.host:t},attached:function(){this._findTarget()},detached:function(){this.manualMode||this._removeListeners()},playAnimation:function(e){"entry"===e?this.show():"exit"===e&&this.hide()},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(!this._showing){if(""===e(this).textContent.trim()){for(var t=!0,n=e(this).getEffectiveChildNodes(),i=0;i<n.length;i++)if(""!==n[i].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.$.tooltip.classList.remove("hidden"),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.$.tooltip.classList.add(this._getAnimationType("entry"))}},hide:function(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0}},updatePosition:function(){if(this._target&&this.offsetParent){var e=this.offset;14!=this.marginTop&&14==this.offset&&(e=this.marginTop);var t,n,i=this.offsetParent.getBoundingClientRect(),r=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),a=(r.width-o.width)/2,s=(r.height-o.height)/2,l=r.left-i.left,c=r.top-i.top;switch(this.position){case"top":t=l+a,n=c-o.height-e;break;case"bottom":t=l+a,n=c+r.height+e;break;case"left":t=l-o.width-e,n=c+s;break;case"right":t=l+r.width+e,n=c+s}this.fitToVisibleBounds?(i.left+t+o.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,t)+"px",this.style.right="auto"),i.top+n+o.height>window.innerHeight?(this.style.bottom=i.height-c+e+"px",this.style.top="auto"):(this.style.top=Math.max(-i.top,n)+"px",this.style.bottom="auto")):(this.style.left=t+"px",this.style.top=n+"px")}},_addListeners:function(){this._target&&(this.listen(this._target,"mouseenter","show"),this.listen(this._target,"focus","show"),this.listen(this._target,"mouseleave","hide"),this.listen(this._target,"blur","hide"),this.listen(this._target,"tap","hide")),this.listen(this.$.tooltip,"animationend","_onAnimationEnd"),this.listen(this,"mouseenter","hide")},_findTarget:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()},_delayChange:function(e){500!==e&&this.updateStyles({"--paper-tooltip-delay-in":e+"ms"})},_manualModeChanged:function(){this.manualMode?this._removeListeners():this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){this._showing&&(this.$.tooltip.classList.remove(this._getAnimationType("entry")),this.$.tooltip.classList.remove("cancel-animation"),this.$.tooltip.classList.add(this._getAnimationType("exit")))},_onAnimationEnd:function(){this._animationPlaying=!1,this._showing||(this.$.tooltip.classList.remove(this._getAnimationType("exit")),this.$.tooltip.classList.add("hidden"))},_getAnimationType:function(e){if("entry"===e&&""!==this.animationEntry)return this.animationEntry;if("exit"===e&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[e]&&"string"==typeof this.animationConfig[e][0].name){if(this.animationConfig[e][0].timing&&this.animationConfig[e][0].timing.delay&&0!==this.animationConfig[e][0].timing.delay){var t=this.animationConfig[e][0].timing.delay;"entry"===e?this.updateStyles({"--paper-tooltip-delay-in":t+"ms"}):"exit"===e&&this.updateStyles({"--paper-tooltip-delay-out":t+"ms"})}return this.animationConfig[e][0].name}},_removeListeners:function(){this._target&&(this.unlisten(this._target,"mouseenter","show"),this.unlisten(this._target,"focus","show"),this.unlisten(this._target,"mouseleave","hide"),this.unlisten(this._target,"blur","hide"),this.unlisten(this._target,"tap","hide")),this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd"),this.unlisten(this,"mouseenter","hide")}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const N=n`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;N.setAttribute("strip-whitespace",""),t({_template:N,is:"paper-fab",behaviors:[f],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(e,t){return e.length>0||t.length>0}});var H=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,o;switch(n=n||{},i.util.type(t)){case"Object":if(o=i.util.objId(t),n[o])return n[o];for(var a in r={},n[o]=r,t)t.hasOwnProperty(a)&&(r[a]=e(t[a],n));return r;case"Array":return o=i.util.objId(t),n[o]?n[o]:(r=[],n[o]=r,t.forEach((function(t,i){r[i]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(i.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var i="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(i))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var o=(r=r||i.languages)[e],a={};for(var s in o)if(o.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(a[l]=n[l]);n.hasOwnProperty(s)||(a[s]=o[s])}var c=r[e];return r[e]=a,i.languages.DFS(i.languages,(function(t,n){n===c&&t!=e&&(this[t]=a)})),a},DFS:function e(t,n,r,o){o=o||{};var a=i.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var l=t[s],c=i.util.type(l);"Object"!==c||o[a(l)]?"Array"!==c||o[a(l)]||(o[a(l)]=!0,e(l,n,s,o)):(o[a(l)]=!0,e(l,n,null,o))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run("before-all-elements-highlight",r);for(var o,a=0;o=r.elements[a++];)i.highlightElement(o,!0===t,r.callback)},highlightElement:function(n,r,o){var a=i.util.getLanguage(n),s=i.languages[a];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+a;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+a);var c={element:n,language:a,grammar:s,code:n.textContent};function d(e){c.highlightedCode=e,i.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i.hooks.run("after-highlight",c),i.hooks.run("complete",c),o&&o.call(c.element)}if(i.hooks.run("before-sanity-check",c),!c.code)return i.hooks.run("complete",c),void(o&&o.call(c.element));if(i.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var p=new Worker(i.filename);p.onmessage=function(e){d(e.data)},p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else d(i.highlight(c.code,c.grammar,c.language));else d(i.util.encode(c.code))},highlight:function(e,t,n){var o={code:e,grammar:t,language:n};return i.hooks.run("before-tokenize",o),o.tokens=i.tokenize(o.code,o.grammar),i.hooks.run("after-tokenize",o),r.stringify(i.util.encode(o.tokens),o.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var i in n)t[i]=n[i];delete t.rest}var r=new a;return s(r,r.head,e),o(e,r,t,r.head,0),c(r)},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var r,o=0;r=n[o++];)r(t)}},Token:r};function r(e,t,n,i){this.type=e,this.content=t,this.alias=n,this.length=0|(i||"").length}function o(e,t,n,a,c,d){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var u=n[p];u=Array.isArray(u)?u:[u];for(var h=0;h<u.length;++h){if(d&&d.cause==p+","+h)return;var g=u[h],f=g.inside,m=!!g.lookbehind,b=!!g.greedy,v=0,y=g.alias;if(b&&!g.pattern.global){var w=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,w+"g")}for(var _=g.pattern||g,x=a.next,k=c;x!==t.tail&&!(d&&k>=d.reach);k+=x.value.length,x=x.next){var A=x.value;if(t.length>e.length)return;if(!(A instanceof r)){var S=1;if(b&&x!=t.tail.prev){if(_.lastIndex=k,!(R=_.exec(e)))break;var E=R.index+(m&&R[1]?R[1].length:0),T=R.index+R[0].length,C=k;for(C+=x.value.length;E>=C;)C+=(x=x.next).value.length;if(k=C-=x.value.length,x.value instanceof r)continue;for(var L=x;L!==t.tail&&(C<T||"string"==typeof L.value);L=L.next)S++,C+=L.value.length;S--,A=e.slice(k,C),R.index-=k}else{_.lastIndex=0;var R=_.exec(A)}if(R){m&&(v=R[1]?R[1].length:0);E=R.index+v;var O=R[0].slice(v),z=(T=E+O.length,A.slice(0,E)),P=A.slice(T),I=k+A.length;d&&I>d.reach&&(d.reach=I);var B=x.prev;z&&(B=s(t,B,z),k+=z.length),l(t,B,S),x=s(t,B,new r(p,f?i.tokenize(O,f):O,y,O)),P&&s(t,x,P),S>1&&o(e,t,n,x.prev,k,{cause:p+","+h,reach:I})}}}}}}function a(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function s(e,t,n){var i=t.next,r={value:n,prev:t,next:i};return t.next=r,i.prev=r,e.length++,r}function l(e,t,n){for(var i=t.next,r=0;r<n&&i!==e.tail;r++)i=i.next;t.next=i,i.prev=t,e.length-=r}function c(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}if(e.Prism=i,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var o={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},a=t.alias;a&&(Array.isArray(a)?Array.prototype.push.apply(o.classes,a):o.classes.push(a)),i.hooks.run("wrap",o);var s="";for(var l in o.attributes)s+=" "+l+'="'+(o.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+s+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(i.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,o=n.code,a=n.immediateClose;e.postMessage(i.highlight(o,i.languages[r],r)),a&&e.close()}),!1),i):i;var d=i.util.currentScript();function p(){i.manual||i.highlightAll()}if(d&&(i.filename=d.src,d.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var u=document.readyState;"loading"===u||"interactive"===u&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */"undefined"!=typeof module&&module.exports&&(module.exports=H),"undefined"!=typeof global&&(global.Prism=H),H.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},H.languages.markup.tag.inside["attr-value"].inside.entity=H.languages.markup.entity,H.languages.markup.doctype.inside["internal-subset"].inside=H.languages.markup,H.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(H.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:H.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+t]={pattern:/[\s\S]+/,inside:H.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:i},H.languages.insertBefore("markup","cdata",r)}}),H.languages.html=H.languages.markup,H.languages.mathml=H.languages.markup,H.languages.svg=H.languages.markup,H.languages.xml=H.languages.extend("markup",{}),H.languages.ssml=H.languages.xml,H.languages.atom=H.languages.xml,H.languages.rss=H.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(H),H.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},H.languages.javascript=H.languages.extend("clike",{"class-name":[H.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),H.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,H.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:H.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:H.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:H.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:H.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),H.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:H.languages.javascript}},string:/[\s\S]+/}}}),H.languages.markup&&H.languages.markup.tag.addInlined("script","javascript"),H.languages.js=H.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=window.Prism,t="Loading…",n=function(e,t){return"✖ Error "+e+" while fetching file: "+t},i="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",a="loading",s="loaded",l="failed",c="pre[data-src]:not(["+o+'="'+s+'"]):not(['+o+'="'+a+'"])',d=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+c})),e.hooks.add("before-sanity-check",(function(d){var p=d.element;if(p.matches(c)){d.code="",p.setAttribute(o,a);var h=p.appendChild(document.createElement("CODE"));h.textContent=t;var g=p.getAttribute("data-src"),f=d.language;if("none"===f){var m=(/\.(\w+)$/.exec(g)||[,"none"])[1];f=r[m]||m}u(h,f),u(p,f);var b=e.plugins.autoloader;b&&b.loadLanguages(f);var v=new XMLHttpRequest;v.open("GET",g,!0),v.onreadystatechange=function(){4==v.readyState&&(v.status<400&&v.responseText?(p.setAttribute(o,s),h.textContent=v.responseText,e.highlightElement(h)):(p.setAttribute(o,l),v.status>=400?h.textContent=n(v.status,v.statusText):h.textContent=i))},v.send(null)}})),e.plugins.fileHighlight={highlight:function(t){for(var n,i=(t||document).querySelectorAll(c),r=0;n=i[r++];)e.highlightElement(n)}};var p=!1;e.fileHighlight=function(){p||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),p=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function u(e,t){var n=e.className;n=n.replace(d," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}(),function(e){e.languages.xquery=e.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[\w-:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),e.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^{}]*}|[^{}])*}|[^{}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,e.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^{}]*}|[^{}])*}|[^{}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i,e.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,e.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/{(?!{)(?:{(?:{[^{}]*}|[^{}])*}|[^{}])+}/,inside:e.languages.xquery,alias:"language-xquery"};var t=function(e){return"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(t).join("")},n=function(i){for(var r=[],o=0;o<i.length;o++){var a=i[o],s=!1;if("string"!=typeof a&&("tag"===a.type&&a.content[0]&&"tag"===a.content[0].type?"</"===a.content[0].content[0].content?r.length>0&&r[r.length-1].tagName===t(a.content[0].content[1])&&r.pop():"/>"===a.content[a.content.length-1].content||r.push({tagName:t(a.content[0].content[1]),openedBraces:0}):!(r.length>0&&"punctuation"===a.type&&"{"===a.content)||i[o+1]&&"punctuation"===i[o+1].type&&"{"===i[o+1].content||i[o-1]&&"plain-text"===i[o-1].type&&"{"===i[o-1].content?r.length>0&&r[r.length-1].openedBraces>0&&"punctuation"===a.type&&"}"===a.content?r[r.length-1].openedBraces--:"comment"!==a.type&&(s=!0):r[r.length-1].openedBraces++),(s||"string"==typeof a)&&r.length>0&&0===r[r.length-1].openedBraces){var l=t(a);o<i.length-1&&("string"==typeof i[o+1]||"plain-text"===i[o+1].type)&&(l+=t(i[o+1]),i.splice(o+1,1)),o>0&&("string"==typeof i[o-1]||"plain-text"===i[o-1].type)&&(l=t(i[o-1])+l,i.splice(o-1,1),o--),/^\s+$/.test(l)?i[o]=l:i[o]=new e.Token("plain-text",l,null,l)}a.content&&"string"!=typeof a.content&&n(a.content)}};e.hooks.add("after-tokenize",(function(e){"xquery"===e.language&&n(e.tokens)}))}(Prism),function(){var e=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};function t(t){this.defaults=e({},t)}function n(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))}function i(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}t.prototype={setDefaults:function(t){this.defaults=e(this.defaults,t)},normalize:function(t,i){for(var r in i=e(this.defaults,i)){var o=n(r);"normalize"!==r&&"setDefaults"!==o&&i[r]&&this[o]&&(t=this[o].call(this,t,i[r]))}return t},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort((function(e,t){return e.length-t.length})),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var n=e.split("\n"),r=0;r<n.length;++r)if(!(i(n[r])<=t)){for(var o=n[r].split(/(\s+)/g),a=0,s=0;s<o.length;++s){var l=i(o[s]);(a+=l)>t&&(o[s]="\n"+o[s],a=l)}n[r]=o.join("")}return n.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=t),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",(function(e){var t=Prism.plugins.NormalizeWhitespace;if((!e.settings||!1!==e.settings["whitespace-normalization"])&&Prism.util.isActive(e.element,"whitespace-normalization",!0))if(e.element&&e.element.parentNode||!e.code){var n=e.element.parentNode;if(e.code&&n&&"pre"===n.nodeName.toLowerCase()){for(var i=n.childNodes,r="",o="",a=!1,s=0;s<i.length;++s){var l=i[s];l==e.element?a=!0:"#text"===l.nodeName&&(a?o+=l.nodeValue:r+=l.nodeValue,n.removeChild(l),--s)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var c=r+e.element.innerHTML+o;e.element.innerHTML=t.normalize(c,e.settings),e.code=e.element.textContent}else e.code=r+e.code+o,e.code=t.normalize(e.code,e.settings)}}else e.code=t.normalize(e.code,e.settings)})))}(),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var i=t.querySelector(".line-numbers-rows"),r=parseInt(t.getAttribute("data-start"),10)||1,o=r+(i.children.length-1);n<r&&(n=r),n>o&&(n=o);var a=n-r;return i.children[a]}},resize:function(e){o([e])},assumeViewportIndependence:!0},i=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null},r=void 0;window.addEventListener("resize",(function(){n.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,o(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))})),Prism.hooks.add("complete",(function(n){if(n.code){var i=n.element,r=i.parentNode;if(r&&/pre/i.test(r.nodeName)&&!i.querySelector(".line-numbers-rows")&&Prism.util.isActive(i,e)){i.classList.remove(e),r.classList.add(e);var a,s=n.code.match(t),l=s?s.length+1:1,c=new Array(l+1).join("<span></span>");(a=document.createElement("span")).setAttribute("aria-hidden","true"),a.className="line-numbers-rows",a.innerHTML=c,r.hasAttribute("data-start")&&(r.style.counterReset="linenumber "+(parseInt(r.getAttribute("data-start"),10)-1)),n.element.appendChild(a),o([r]),Prism.hooks.run("line-numbers",n)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function o(e){if(0!=(e=e.filter((function(e){var t=i(e)["white-space"];return"pre-wrap"===t||"pre-line"===t}))).length){var n=e.map((function(e){var n=e.querySelector("code"),i=e.querySelector(".line-numbers-rows");if(n&&i){var r=e.querySelector(".line-numbers-sizer"),o=n.textContent.split(t);r||((r=document.createElement("span")).className="line-numbers-sizer",n.appendChild(r)),r.innerHTML="0",r.style.display="block";var a=r.getBoundingClientRect().height;return r.innerHTML="",{element:e,lines:o,lineHeights:[],oneLinerHeight:a,sizer:r}}})).filter(Boolean);n.forEach((function(e){var t=e.sizer,n=e.lines,i=e.lineHeights,r=e.oneLinerHeight;i[n.length-1]=void 0,n.forEach((function(e,n){if(e&&e.length>1){var o=t.appendChild(document.createElement("span"));o.style.display="block",o.textContent=e}else i[n]=r}))})),n.forEach((function(e){for(var t=e.sizer,n=e.lineHeights,i=0,r=0;r<n.length;r++)void 0===n[r]&&(n[r]=t.children[i++].getBoundingClientRect().height)})),n.forEach((function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach((function(e,t){n.children[t].style.height=e+"px"}))}))}}}();class j extends L{static get properties(){return{language:{type:String},code:{type:String},theme:{type:String},lineNumbers:{type:Boolean,attribute:"line-numbers"},_styles:{type:String}}}constructor(){super(),this.language="xml",this.theme="default",this.lineNumbers=!1}connectedCallback(){super.connectedCallback();null===this.getAttribute("theme")&&this.setAttribute("theme","default")}firstUpdated(){if(super.firstUpdated(),!this.code){const e=this.querySelector("template");this.code=e?Prism.plugins.NormalizeWhitespace.normalize(e.innerHTML):Prism.plugins.NormalizeWhitespace.normalize(this.textContent)}}attributeChangedCallback(e,t,n){switch(super.attributeChangedCallback(e,t,n),e){case"theme":j.loadTheme(n).then(e=>{this._styles=e})}}updated(e){super.updated(e),e.has("code")&&this.highlight()}highlight(){Prism.highlightAllUnder(this.shadowRoot)}render(){return this.code?R`
                ${this._styles}
                <pre class="${this.lineNumbers?"line-numbers":""} language-${this.language}"><code>${this.code}</code></pre>
            `:R`<pre class="line-numbers"><code>Formatting ...<code></pre>`}static async loadTheme(e){const t="default"===e?"prism.css":`prism-${e}.css`,n=I("../css/prismjs/")+t;console.log("<pb-code-highlight> loading theme %s from %s",e,n);const i=await fetch(n).then(async e=>e.text()).catch(e=>"");return R`<style>${i}</style>`}static get styles(){return O`
            :host {
                display: block;
            }
            pre[class*='language-'] {
                margin: 0;
            }
            code[class*='language-'] {
                white-space: var(--pb-code-highlight-white-space, pre);
            }
            pre.line-numbers {
                position: relative;
                padding-left: 3.8em;
                counter-reset: linenumber;
            }

            pre.line-numbers > code {
                position: relative;
                white-space: inherit;
            }

            .line-numbers .line-numbers-rows {
                position: absolute;
                pointer-events: none;
                top: 0;
                font-size: 100%;
                left: -3.8em;
                width: 3em; /* works for line-numbers below 1000 lines */
                letter-spacing: -1px;
                border-right: 1px solid #999;

                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

            }

            .line-numbers-rows > span {
                pointer-events: none;
                display: block;
                counter-increment: linenumber;
                height: auto !important;
            }

            .line-numbers-rows > span:before {
                content: counter(linenumber);
                color: #999;
                display: block;
                padding-right: 0.8em;
                text-align: right;
            }
        `}}customElements.define("pb-code-highlight",j);const V="https://teipublisher.com/exist/apps/tei-publisher";class q extends L{static get properties(){return{title:{type:String},code:{type:String},_editorLoaded:{type:Boolean},_showCodeLabel:{type:String},_editCodeLabel:{type:String}}}constructor(){super(),this.title="TEI Publisher Webcomponents Example",this.code="Loading ...",this._showCodeLabel="demo.showCode.show"}connectedCallback(){super.connectedCallback();const e=this.querySelector("template");this.code=q.removeIndent(e.innerHTML),this.code=this.code.replace(/\s*<style[\s\S]*>[\s\S]*?<\/style>\s*/g,"");const t=document.importNode(e.content,!0);this.appendChild(t)}render(){let e=this.code.replace(/(endpoint="[^"]+")/,`endpoint="${V}"`);e=q.indent(e,2);const t=this.querySelector("style");let n="";t&&(n=t.innerText);const r="\n@import url('https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap');\n\nbody {\n    margin: 10px 20px;\n    font-size: 16px;\n    font-family: 'Roboto', 'Noto', sans - serif;\n    line-height: 1.42857;\n    font-weight: 300;\n    color: #333333;\n\n    --paper-tooltip-delay-in: 200;\n}\n\n"+q.removeIndent(n),o=`\n<html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n\n        <title>${this.title}</title>\n        <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"><\/script>\n        <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-components-bundle.js"><\/script>\n        <script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-leaflet-map.js"><\/script>\n    </head>\n\n    <body>\n    ${e}\n    </body>\n</html>`,a={title:this.title,html:o,html_pre_processor:"none",css:r,css_starter:"normalize",template:!1,editors:110};return R`
            <div class="snippet"><slot></slot></div>
            <pb-code-highlight id="source" theme="coy" language="html" line-numbers .code="${this.code}"></pb-code-highlight>
            <div id="container"></div>
            <div class="buttons">
                <button class="pretty-button" @click="${this._showCode}">${i(this._showCodeLabel)}</button>
                <form action="https://codepen.io/pen/define" method="POST" target="_blank">
                    <input type="hidden" name="data" .value="${JSON.stringify(a)}">
                    <button class="pretty-button" type="submit">${i("demo.editCode.show")}</button>
                </form>
            </div>
        `}_showCode(){const e=this.shadowRoot.getElementById("source");e.classList.contains("open")?(e.classList.remove("open"),this._showCodeLabel="demo.showCode.show"):(e.classList.add("open"),this._showCodeLabel="demo.showCode.hide")}static removeIndent(e){const t=e.match(/^[^\S]*(?=\S)/gm);return t&&t[0].length?(t.sort((e,t)=>e.length-t.length),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e}static indent(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")}static get styles(){return O`
            :host {
                display: block;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                padding: 20px;
            }
            pb-code-highlight {
                display: none;
                margin-top: 30px;
            }
            pb-code-highlight.open {
                display: block;
            }
            #container {
                margin-top: 20px;
            }
            .buttons {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                padding-top: 10px;
                border-top: 1px solid var(--google-grey-400, #999);
            }
            .pretty-button {
                cursor: pointer;
                display: inline-block;
                box-sizing: border-box;
                margin: 12px 0;
                padding: 13px 44px;
                border: 2px solid #2196F3;
                background-color: transparent;
                font-size: 14px;
                font-weight: 500;
                color: #2196F3;
                text-align: center;
                text-decoration: none;
                text-transform: uppercase;
                border-radius: 0;
                -webkit-appearance: none;
                appearance: none;
            }
            .pretty-button:hover,
            .pretty-button:active {
                background-color: #2196F3;
                color: #FFF;
            }
            .pretty-button:disabled {
                background-color: transparent;
                border-color: #999;
                color: #999;
            }
        `}}customElements.define("pb-demo-snippet",q);const U=null;class W extends L{static get properties(){return z({version:{type:String,reflect:!0}},super.properties)}constructor(){super(),this.version=U}connectedCallback(){if(super.connectedCallback(),!this.version){const e=I("../package.json");fetch(e).then(e=>e.json()).then(e=>{this.version=e.version})}}render(){return R`<span>${this.version?this.version:"unknown"}</span>`}createRenderRoot(){return this}}customElements.define("pb-version",W);var G="top",X="bottom",Z="right",Q="left",Y="auto",K=[G,X,Z,Q],J="start",ee="end",te="clippingParents",ne="viewport",ie="popper",re="reference",oe=K.reduce((function(e,t){return e.concat([t+"-"+J,t+"-"+ee])}),[]),ae=[].concat(K,[Y]).reduce((function(e,t){return e.concat([t,t+"-"+J,t+"-"+ee])}),[]),se=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function le(e){return e?(e.nodeName||"").toLowerCase():null}function ce(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){return e instanceof ce(e).Element||e instanceof Element}function pe(e){return e instanceof ce(e).HTMLElement||e instanceof HTMLElement}function ue(e){return e instanceof ce(e).ShadowRoot||e instanceof ShadowRoot}function he(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},r=t.elements[e];pe(r)&&le(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))}function ge(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],r=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});pe(i)&&le(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(e){i.removeAttribute(e)})))}))}}function fe(e){return e.split("-")[0]}function me(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function be(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(ue(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ve(e){return ce(e).getComputedStyle(e)}function ye(e){return["table","td","th"].indexOf(le(e))>=0}function we(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function _e(e){return"html"===le(e)?e:e.assignedSlot||e.parentNode||e.host||we(e)}function xe(e){if(!pe(e)||"fixed"===ve(e).position)return null;var t=e.offsetParent;if(t){var n=we(t);if("body"===le(t)&&"static"===ve(t).position&&"static"!==ve(n).position)return n}return t}function ke(e){for(var t=_e(e);pe(t)&&["html","body"].indexOf(le(t))<0;){var n=ve(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}function Ae(e){for(var t=ce(e),n=xe(e);n&&ye(n)&&"static"===ve(n).position;)n=xe(n);return n&&"body"===le(n)&&"static"===ve(n).position?t:n||ke(e)||t}function Se(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ee(e,t,n){return Math.max(e,Math.min(t,n))}function Te(){return{top:0,right:0,bottom:0,left:0}}function Ce(e){return Object.assign(Object.assign({},Te()),e)}function Le(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Re(e){var t,n=e.state,i=e.name,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=fe(n.placement),s=Se(a),l=[Q,Z].indexOf(a)>=0?"height":"width";if(r&&o){var c=n.modifiersData[i+"#persistent"].padding,d=me(r),p="y"===s?G:Q,u="y"===s?X:Z,h=n.rects.reference[l]+n.rects.reference[s]-o[s]-n.rects.popper[l],g=o[s]-n.rects.reference[s],f=Ae(r),m=f?"y"===s?f.clientHeight||0:f.clientWidth||0:0,b=h/2-g/2,v=c[p],y=m-d[l]-c[u],w=m/2-d[l]/2+b,_=Ee(v,w,y),x=s;n.modifiersData[i]=((t={})[x]=_,t.centerOffset=_-w,t)}}function Oe(e){var t=e.state,n=e.options,i=e.name,r=n.element,o=void 0===r?"[data-popper-arrow]":r,a=n.padding,s=void 0===a?0:a;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&be(t.elements.popper,o)&&(t.elements.arrow=o,t.modifiersData[i+"#persistent"]={padding:Ce("number"!=typeof s?s:Le(s,K))})}var ze={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Pe(e){var t=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:Math.round(t*i)/i||0,y:Math.round(n*i)/i||0}}function Ie(e){var t,n=e.popper,i=e.popperRect,r=e.placement,o=e.offsets,a=e.position,s=e.gpuAcceleration,l=e.adaptive,c=Pe(o),d=c.x,p=c.y,u=o.hasOwnProperty("x"),h=o.hasOwnProperty("y"),g=Q,f=G,m=window;if(l){var b=Ae(n);b===ce(n)&&(b=we(n)),r===G&&(f=X,p-=b.clientHeight-i.height,p*=s?1:-1),r===Q&&(g=Z,d-=b.clientWidth-i.width,d*=s?1:-1)}var v,y=Object.assign({position:a},l&&ze);return s?Object.assign(Object.assign({},y),{},((v={})[f]=h?"0":"",v[g]=u?"0":"",v.transform=(m.devicePixelRatio||1)<2?"translate("+d+"px, "+p+"px)":"translate3d("+d+"px, "+p+"px, 0)",v)):Object.assign(Object.assign({},y),{},((t={})[f]=h?p+"px":"",t[g]=u?d+"px":"",t.transform="",t))}function Be(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=void 0===i||i,o=n.adaptive,a=void 0===o||o,s={placement:fe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),Ie(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),Ie(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})}var $e={passive:!0};function Me(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,o=void 0===r||r,a=i.resize,s=void 0===a||a,l=ce(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach((function(e){e.addEventListener("scroll",n.update,$e)})),s&&l.addEventListener("resize",n.update,$e),function(){o&&c.forEach((function(e){e.removeEventListener("scroll",n.update,$e)})),s&&l.removeEventListener("resize",n.update,$e)}}var Fe={left:"right",right:"left",bottom:"top",top:"bottom"};function De(e){return e.replace(/left|right|bottom|top/g,(function(e){return Fe[e]}))}var Ne={start:"end",end:"start"};function He(e){return e.replace(/start|end/g,(function(e){return Ne[e]}))}function je(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function Ve(e){var t=ce(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function qe(e){return je(we(e)).left+Ve(e).scrollLeft}function Ue(e){var t=ce(e),n=we(e),i=t.visualViewport,r=n.clientWidth,o=n.clientHeight,a=0,s=0;return i&&(r=i.width,o=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=i.offsetLeft,s=i.offsetTop)),{width:r,height:o,x:a+qe(e),y:s}}function We(e){var t=we(e),n=Ve(e),i=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Math.max(t.scrollHeight,t.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+qe(e),s=-n.scrollTop;return"rtl"===ve(i||t).direction&&(a+=Math.max(t.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:s}}function Ge(e){var t=ve(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Xe(e){return["html","body","#document"].indexOf(le(e))>=0?e.ownerDocument.body:pe(e)&&Ge(e)?e:Xe(_e(e))}function Ze(e,t){void 0===t&&(t=[]);var n=Xe(e),i="body"===le(n),r=ce(n),o=i?[r].concat(r.visualViewport||[],Ge(n)?n:[]):n,a=t.concat(o);return i?a:a.concat(Ze(_e(o)))}function Qe(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ye(e){var t=je(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ke(e,t){return t===ne?Qe(Ue(e)):pe(t)?Ye(t):Qe(We(we(e)))}function Je(e){var t=Ze(_e(e)),n=["absolute","fixed"].indexOf(ve(e).position)>=0&&pe(e)?Ae(e):e;return de(n)?t.filter((function(e){return de(e)&&be(e,n)&&"body"!==le(e)})):[]}function et(e,t,n){var i="clippingParents"===t?Je(e):[].concat(t),r=[].concat(i,[n]),o=r[0],a=r.reduce((function(t,n){var i=Ke(e,n);return t.top=Math.max(i.top,t.top),t.right=Math.min(i.right,t.right),t.bottom=Math.min(i.bottom,t.bottom),t.left=Math.max(i.left,t.left),t}),Ke(e,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function tt(e){return e.split("-")[1]}function nt(e){var t,n=e.reference,i=e.element,r=e.placement,o=r?fe(r):null,a=r?tt(r):null,s=n.x+n.width/2-i.width/2,l=n.y+n.height/2-i.height/2;switch(o){case G:t={x:s,y:n.y-i.height};break;case X:t={x:s,y:n.y+n.height};break;case Z:t={x:n.x+n.width,y:l};break;case Q:t={x:n.x-i.width,y:l};break;default:t={x:n.x,y:n.y}}var c=o?Se(o):null;if(null!=c){var d="y"===c?"height":"width";switch(a){case J:t[c]=Math.floor(t[c])-Math.floor(n[d]/2-i[d]/2);break;case ee:t[c]=Math.floor(t[c])+Math.ceil(n[d]/2-i[d]/2)}}return t}function it(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=void 0===i?e.placement:i,o=n.boundary,a=void 0===o?te:o,s=n.rootBoundary,l=void 0===s?ne:s,c=n.elementContext,d=void 0===c?ie:c,p=n.altBoundary,u=void 0!==p&&p,h=n.padding,g=void 0===h?0:h,f=Ce("number"!=typeof g?g:Le(g,K)),m=d===ie?re:ie,b=e.elements.reference,v=e.rects.popper,y=e.elements[u?m:d],w=et(de(y)?y:y.contextElement||we(e.elements.popper),a,l),_=je(b),x=nt({reference:_,element:v,strategy:"absolute",placement:r}),k=Qe(Object.assign(Object.assign({},v),x)),A=d===ie?k:_,S={top:w.top-A.top+f.top,bottom:A.bottom-w.bottom+f.bottom,left:w.left-A.left+f.left,right:A.right-w.right+f.right},E=e.modifiersData.offset;if(d===ie&&E){var T=E[r];Object.keys(S).forEach((function(e){var t=[Z,X].indexOf(e)>=0?1:-1,n=[G,X].indexOf(e)>=0?"y":"x";S[e]+=T[n]*t}))}return S}function rt(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=n.boundary,o=n.rootBoundary,a=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,c=void 0===l?ae:l,d=tt(i),p=d?s?oe:oe.filter((function(e){return tt(e)===d})):K,u=p.filter((function(e){return c.indexOf(e)>=0}));0===u.length&&(u=p);var h=u.reduce((function(t,n){return t[n]=it(e,{placement:n,boundary:r,rootBoundary:o,padding:a})[fe(n)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}function ot(e){if(fe(e)===Y)return[];var t=De(e);return[He(e),t,He(t)]}function at(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var r=n.mainAxis,o=void 0===r||r,a=n.altAxis,s=void 0===a||a,l=n.fallbackPlacements,c=n.padding,d=n.boundary,p=n.rootBoundary,u=n.altBoundary,h=n.flipVariations,g=void 0===h||h,f=n.allowedAutoPlacements,m=t.options.placement,b=fe(m),v=l||(b===m||!g?[De(m)]:ot(m)),y=[m].concat(v).reduce((function(e,n){return e.concat(fe(n)===Y?rt(t,{placement:n,boundary:d,rootBoundary:p,padding:c,flipVariations:g,allowedAutoPlacements:f}):n)}),[]),w=t.rects.reference,_=t.rects.popper,x=new Map,k=!0,A=y[0],S=0;S<y.length;S++){var E=y[S],T=fe(E),C=tt(E)===J,L=[G,X].indexOf(T)>=0,R=L?"width":"height",O=it(t,{placement:E,boundary:d,rootBoundary:p,altBoundary:u,padding:c}),z=L?C?Z:Q:C?X:G;w[R]>_[R]&&(z=De(z));var P=De(z),I=[];if(o&&I.push(O[T]<=0),s&&I.push(O[z]<=0,O[P]<=0),I.every((function(e){return e}))){A=E,k=!1;break}x.set(E,I)}if(k)for(var B=function(e){var t=y.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},$=g?3:1;$>0;$--){if("break"===B($))break}t.placement!==A&&(t.modifiersData[i]._skip=!0,t.placement=A,t.reset=!0)}}function st(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function lt(e){return[G,Z,X,Q].some((function(t){return e[t]>=0}))}function ct(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,o=t.modifiersData.preventOverflow,a=it(t,{elementContext:"reference"}),s=it(t,{altBoundary:!0}),l=st(a,i),c=st(s,r,o),d=lt(l),p=lt(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:p},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":d,"data-popper-escaped":p})}function dt(e,t,n){var i=fe(e),r=[Q,G].indexOf(i)>=0?-1:1,o="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=o[0],s=o[1];return a=a||0,s=(s||0)*r,[Q,Z].indexOf(i)>=0?{x:s,y:a}:{x:a,y:s}}function pt(e){var t=e.state,n=e.options,i=e.name,r=n.offset,o=void 0===r?[0,0]:r,a=ae.reduce((function(e,n){return e[n]=dt(n,t.rects,o),e}),{}),s=a[t.placement],l=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=a}function ut(e){var t=e.state,n=e.name;t.modifiersData[n]=nt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}function ht(e){return"x"===e?"y":"x"}function gt(e){var t=e.state,n=e.options,i=e.name,r=n.mainAxis,o=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,l=n.boundary,c=n.rootBoundary,d=n.altBoundary,p=n.padding,u=n.tether,h=void 0===u||u,g=n.tetherOffset,f=void 0===g?0:g,m=it(t,{boundary:l,rootBoundary:c,padding:p,altBoundary:d}),b=fe(t.placement),v=tt(t.placement),y=!v,w=Se(b),_=ht(w),x=t.modifiersData.popperOffsets,k=t.rects.reference,A=t.rects.popper,S="function"==typeof f?f(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):f,E={x:0,y:0};if(x){if(o){var T="y"===w?G:Q,C="y"===w?X:Z,L="y"===w?"height":"width",R=x[w],O=x[w]+m[T],z=x[w]-m[C],P=h?-A[L]/2:0,I=v===J?k[L]:A[L],B=v===J?-A[L]:-k[L],$=t.elements.arrow,M=h&&$?me($):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Te(),D=F[T],N=F[C],H=Ee(0,k[L],M[L]),j=y?k[L]/2-P-H-D-S:I-H-D-S,V=y?-k[L]/2+P+H+N+S:B+H+N+S,q=t.elements.arrow&&Ae(t.elements.arrow),U=q?"y"===w?q.clientTop||0:q.clientLeft||0:0,W=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,Y=x[w]+j-W-U,K=x[w]+V-W,ee=Ee(h?Math.min(O,Y):O,R,h?Math.max(z,K):z);x[w]=ee,E[w]=ee-R}if(s){var te="x"===w?G:Q,ne="x"===w?X:Z,ie=x[_],re=Ee(ie+m[te],ie,ie-m[ne]);x[_]=re,E[_]=re-ie}t.modifiersData[i]=E}}function ft(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function mt(e){return e!==ce(e)&&pe(e)?ft(e):Ve(e)}function bt(e,t,n){void 0===n&&(n=!1);var i=we(t),r=je(e),o=pe(t),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!n)&&(("body"!==le(t)||Ge(i))&&(a=mt(t)),pe(t)?((s=je(t)).x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=qe(i))),{x:r.left+a.scrollLeft-s.x,y:r.top+a.scrollTop-s.y,width:r.width,height:r.height}}function vt(e){var t=new Map,n=new Set,i=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&r(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),i}function yt(e){var t=vt(e);return se.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function wt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function _t(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var xt={placement:"bottom",modifiers:[],strategy:"absolute"};function kt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function At(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,r=t.defaultOptions,o=void 0===r?xt:r;return function(e,t,n){void 0===n&&(n=o);var r={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},xt),o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,l={state:r,setOptions:function(n){d(),r.options=Object.assign(Object.assign(Object.assign({},o),r.options),n),r.scrollParents={reference:de(e)?Ze(e):e.contextElement?Ze(e.contextElement):[],popper:Ze(t)};var a=yt(_t([].concat(i,r.options.modifiers)));return r.orderedModifiers=a.filter((function(e){return e.enabled})),c(),l.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(kt(t,n)){r.rects={reference:bt(t,Ae(n),"fixed"===r.options.strategy),popper:me(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<r.orderedModifiers.length;i++)if(!0!==r.reset){var o=r.orderedModifiers[i],a=o.fn,c=o.options,d=void 0===c?{}:c,p=o.name;"function"==typeof a&&(r=a({state:r,options:d,name:p,instance:l})||r)}else r.reset=!1,i=-1}}},update:wt((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){d(),s=!0}};if(!kt(e,t))return l;function c(){r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var s=o({state:r,name:t,instance:l,options:i}),c=function(){};a.push(s||c)}}))}function d(){a.forEach((function(e){return e()})),a=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}var St=At({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Me,data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:ut,data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Be,data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:he,effect:ge,requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:pt},{name:"flip",enabled:!0,phase:"main",fn:at,requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:gt,requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:Re,effect:Oe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ct}]}),Et="tippy-box",Tt="tippy-content",Ct="tippy-backdrop",Lt="tippy-arrow",Rt="tippy-svg-arrow",Ot={passive:!0,capture:!0};function zt(e,t,n){if(Array.isArray(e)){var i=e[t];return null==i?Array.isArray(n)?n[t]:n:i}return e}function Pt(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function It(e,t){return"function"==typeof e?e.apply(void 0,t):e}function Bt(e,t){return 0===t?e:function(i){clearTimeout(n),n=setTimeout((function(){e(i)}),t)};var n}function $t(e){return e.split(/\s+/).filter(Boolean)}function Mt(e){return[].concat(e)}function Ft(e,t){-1===e.indexOf(t)&&e.push(t)}function Dt(e){return e.filter((function(t,n){return e.indexOf(t)===n}))}function Nt(e){return e.split("-")[0]}function Ht(e){return[].slice.call(e)}function jt(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function Vt(){return document.createElement("div")}function qt(e){return["Element","Fragment"].some((function(t){return Pt(e,t)}))}function Ut(e){return Pt(e,"NodeList")}function Wt(e){return Pt(e,"MouseEvent")}function Gt(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Xt(e){return qt(e)?[e]:Ut(e)?Ht(e):Array.isArray(e)?e:Ht(document.querySelectorAll(e))}function Zt(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Qt(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Yt(e){var t=Mt(e)[0];return t&&t.ownerDocument||document}function Kt(e,t){var n=t.clientX,i=t.clientY;return e.every((function(e){var t=e.popperRect,r=e.popperState,o=e.props.interactiveBorder,a=Nt(r.placement),s=r.modifiersData.offset;if(!s)return!0;var l="bottom"===a?s.top.y:0,c="top"===a?s.bottom.y:0,d="right"===a?s.left.x:0,p="left"===a?s.right.x:0,u=t.top-i+l>o,h=i-t.bottom-c>o,g=t.left-n+d>o,f=n-t.right-p>o;return u||h||g||f}))}function Jt(e,t,n){var i=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[i](t,n)}))}var en={isTouch:!1},tn=0;function nn(){en.isTouch||(en.isTouch=!0,window.performance&&document.addEventListener("mousemove",rn))}function rn(){var e=performance.now();e-tn<20&&(en.isTouch=!1,document.removeEventListener("mousemove",rn)),tn=e}function on(){var e=document.activeElement;if(Gt(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function an(){document.addEventListener("touchstart",nn,Ot),window.addEventListener("blur",on)}var sn="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",ln=/MSIE |Trident\//.test(sn),cn={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},dn={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},pn=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},cn,{},dn),un=Object.keys(pn),hn=function(e){Object.keys(e).forEach((function(t){pn[t]=e[t]}))};function gn(e){var t=(e.plugins||[]).reduce((function(t,n){var i=n.name,r=n.defaultValue;return i&&(t[i]=void 0!==e[i]?e[i]:r),t}),{});return Object.assign({},e,{},t)}function fn(e,t){return(t?Object.keys(gn(Object.assign({},pn,{plugins:t}))):un).reduce((function(t,n){var i=(e.getAttribute("data-tippy-"+n)||"").trim();if(!i)return t;if("content"===n)t[n]=i;else try{t[n]=JSON.parse(i)}catch(e){t[n]=i}return t}),{})}function mn(e,t){var n=Object.assign({},t,{content:It(t.content,[e])},t.ignoreAttributes?{}:fn(e,t.plugins));return n.aria=Object.assign({},pn.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}var bn=function(){return"innerHTML"};function vn(e,t){e[bn()]=t}function yn(e){var t=Vt();return!0===e?t.className=Lt:(t.className=Rt,qt(e)?t.appendChild(e):vn(t,e)),t}function wn(e,t){qt(t.content)?(vn(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?vn(e,t.content):e.textContent=t.content)}function _n(e){var t=e.firstElementChild,n=Ht(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(Tt)})),arrow:n.find((function(e){return e.classList.contains(Lt)||e.classList.contains(Rt)})),backdrop:n.find((function(e){return e.classList.contains(Ct)}))}}function xn(e){var t=Vt(),n=Vt();n.className=Et,n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var i=Vt();function r(n,i){var r=_n(t),o=r.box,a=r.content,s=r.arrow;i.theme?o.setAttribute("data-theme",i.theme):o.removeAttribute("data-theme"),"string"==typeof i.animation?o.setAttribute("data-animation",i.animation):o.removeAttribute("data-animation"),i.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"==typeof i.maxWidth?i.maxWidth+"px":i.maxWidth,i.role?o.setAttribute("role",i.role):o.removeAttribute("role"),n.content===i.content&&n.allowHTML===i.allowHTML||wn(a,e.props),i.arrow?s?n.arrow!==i.arrow&&(o.removeChild(s),o.appendChild(yn(i.arrow))):o.appendChild(yn(i.arrow)):s&&o.removeChild(s)}return i.className=Tt,i.setAttribute("data-state","hidden"),wn(i,e.props),t.appendChild(n),n.appendChild(i),r(e.props,e.props),{popper:t,onUpdate:r}}xn.$$tippy=!0;var kn=1,An=[],Sn=[];function En(e,t){var n,i,r,o,a,s,l,c=mn(e,Object.assign({},pn,{},gn(jt(t)))),d=!1,p=!1,u=!1,h=!1,g=[],f=Bt(Q,c.interactiveDebounce),m=Yt(c.triggerTarget||e),b=kn++,v=null,y=Dt(c.plugins),w={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},_={id:b,reference:e,popper:Vt(),popperInstance:v,props:c,state:w,plugins:y,clearDelayTimeouts:le,setProps:ce,setContent:de,show:pe,hide:ue,hideWithInteractivity:he,enable:ae,disable:se,unmount:ge,destroy:fe};if(!c.render)return _;var x=c.render(_),k=x.popper,A=x.onUpdate;k.setAttribute("data-tippy-root",""),k.id="tippy-"+_.id,_.popper=k,e._tippy=_,k._tippy=_;var S=y.map((function(e){return e.fn(_)})),E=e.hasAttribute("aria-expanded");return G(),$(),P(),I("onCreate",[_]),c.showOnCreate&&re(),k.addEventListener("mouseenter",(function(){_.props.interactive&&_.state.isVisible&&_.clearDelayTimeouts()})),k.addEventListener("mouseleave",(function(e){_.props.interactive&&_.props.trigger.indexOf("mouseenter")>=0&&(m.addEventListener("mousemove",f),f(e))})),_;function T(){var e=_.props.touch;return Array.isArray(e)?e:[e,0]}function C(){return"hold"===T()[0]}function L(){var e;return!!(null==(e=_.props.render)?void 0:e.$$tippy)}function R(){return l||e}function O(){return _n(k)}function z(e){return _.state.isMounted&&!_.state.isVisible||en.isTouch||o&&"focus"===o.type?0:zt(_.props.delay,e?0:1,pn.delay)}function P(){k.style.pointerEvents=_.props.interactive&&_.state.isVisible?"":"none",k.style.zIndex=""+_.props.zIndex}function I(e,t,n){var i;(void 0===n&&(n=!0),S.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(i=_.props)[e].apply(i,t)}function B(){var t=_.props.aria;if(t.content){var n="aria-"+t.content,i=k.id;Mt(_.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(_.state.isVisible)e.setAttribute(n,t?t+" "+i:i);else{var r=t&&t.replace(i,"").trim();r?e.setAttribute(n,r):e.removeAttribute(n)}}))}}function $(){!E&&_.props.aria.expanded&&Mt(_.props.triggerTarget||e).forEach((function(e){_.props.interactive?e.setAttribute("aria-expanded",_.state.isVisible&&e===R()?"true":"false"):e.removeAttribute("aria-expanded")}))}function M(){m.removeEventListener("mousemove",f),An=An.filter((function(e){return e!==f}))}function F(e){if(!(en.isTouch&&(u||"mousedown"===e.type)||_.props.interactive&&k.contains(e.target))){if(R().contains(e.target)){if(en.isTouch)return;if(_.state.isVisible&&_.props.trigger.indexOf("click")>=0)return}else I("onClickOutside",[_,e]);!0===_.props.hideOnClick&&(_.clearDelayTimeouts(),_.hide(),p=!0,setTimeout((function(){p=!1})),_.state.isMounted||j())}}function D(){u=!0}function N(){u=!1}function H(){m.addEventListener("mousedown",F,!0),m.addEventListener("touchend",F,Ot),m.addEventListener("touchstart",N,Ot),m.addEventListener("touchmove",D,Ot)}function j(){m.removeEventListener("mousedown",F,!0),m.removeEventListener("touchend",F,Ot),m.removeEventListener("touchstart",N,Ot),m.removeEventListener("touchmove",D,Ot)}function V(e,t){U(e,(function(){!_.state.isVisible&&k.parentNode&&k.parentNode.contains(k)&&t()}))}function q(e,t){U(e,t)}function U(e,t){var n=O().box;function i(e){e.target===n&&(Jt(n,"remove",i),t())}if(0===e)return t();Jt(n,"remove",a),Jt(n,"add",i),a=i}function W(t,n,i){void 0===i&&(i=!1),Mt(_.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,i),g.push({node:e,eventType:t,handler:n,options:i})}))}function G(){C()&&(W("touchstart",Z,{passive:!0}),W("touchend",Y,{passive:!0})),$t(_.props.trigger).forEach((function(e){if("manual"!==e)switch(W(e,Z),e){case"mouseenter":W("mouseleave",Y);break;case"focus":W(ln?"focusout":"blur",K);break;case"focusin":W("focusout",K)}}))}function X(){g.forEach((function(e){var t=e.node,n=e.eventType,i=e.handler,r=e.options;t.removeEventListener(n,i,r)})),g=[]}function Z(e){var t,n=!1;if(_.state.isEnabled&&!J(e)&&!p){var i="focus"===(null==(t=o)?void 0:t.type);o=e,l=e.currentTarget,$(),!_.state.isVisible&&Wt(e)&&An.forEach((function(t){return t(e)})),"click"===e.type&&(_.props.trigger.indexOf("mouseenter")<0||d)&&!1!==_.props.hideOnClick&&_.state.isVisible?n=!0:re(e),"click"===e.type&&(d=!n),n&&!i&&oe(e)}}function Q(e){var t=e.target,n=R().contains(t)||k.contains(t);"mousemove"===e.type&&n||Kt(ie().concat(k).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:c}:null})).filter(Boolean),e)&&(M(),oe(e))}function Y(e){J(e)||_.props.trigger.indexOf("click")>=0&&d||(_.props.interactive?_.hideWithInteractivity(e):oe(e))}function K(e){_.props.trigger.indexOf("focusin")<0&&e.target!==R()||_.props.interactive&&e.relatedTarget&&k.contains(e.relatedTarget)||oe(e)}function J(e){return!!en.isTouch&&C()!==e.type.indexOf("touch")>=0}function ee(){te();var t=_.props,n=t.popperOptions,i=t.placement,r=t.offset,o=t.getReferenceClientRect,a=t.moveTransition,l=L()?_n(k).arrow:null,c=o?{getBoundingClientRect:o,contextElement:o.contextElement||R()}:e,d=[{name:"offset",options:{offset:r}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(L()){var n=O().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];L()&&l&&d.push({name:"arrow",options:{element:l,padding:3}}),d.push.apply(d,(null==n?void 0:n.modifiers)||[]),_.popperInstance=St(c,k,Object.assign({},n,{placement:i,onFirstUpdate:s,modifiers:d}))}function te(){_.popperInstance&&(_.popperInstance.destroy(),_.popperInstance=null)}function ne(){var e,t=_.props.appendTo,n=R();(e=_.props.interactive&&t===pn.appendTo||"parent"===t?n.parentNode:It(t,[n])).contains(k)||e.appendChild(k),ee()}function ie(){return Ht(k.querySelectorAll("[data-tippy-root]"))}function re(e){_.clearDelayTimeouts(),e&&I("onTrigger",[_,e]),H();var t=z(!0),i=T(),r=i[0],o=i[1];en.isTouch&&"hold"===r&&o&&(t=o),t?n=setTimeout((function(){_.show()}),t):_.show()}function oe(e){if(_.clearDelayTimeouts(),I("onUntrigger",[_,e]),_.state.isVisible){if(!(_.props.trigger.indexOf("mouseenter")>=0&&_.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=z(!1);t?i=setTimeout((function(){_.state.isVisible&&_.hide()}),t):r=requestAnimationFrame((function(){_.hide()}))}}else j()}function ae(){_.state.isEnabled=!0}function se(){_.hide(),_.state.isEnabled=!1}function le(){clearTimeout(n),clearTimeout(i),cancelAnimationFrame(r)}function ce(t){if(!_.state.isDestroyed){I("onBeforeUpdate",[_,t]),X();var n=_.props,i=mn(e,Object.assign({},_.props,{},t,{ignoreAttributes:!0}));_.props=i,G(),n.interactiveDebounce!==i.interactiveDebounce&&(M(),f=Bt(Q,i.interactiveDebounce)),n.triggerTarget&&!i.triggerTarget?Mt(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):i.triggerTarget&&e.removeAttribute("aria-expanded"),$(),P(),A&&A(n,i),_.popperInstance&&(ee(),ie().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),I("onAfterUpdate",[_,t])}}function de(e){_.setProps({content:e})}function pe(){var e=_.state.isVisible,t=_.state.isDestroyed,n=!_.state.isEnabled,i=en.isTouch&&!_.props.touch,r=zt(_.props.duration,0,pn.duration);if(!(e||t||n||i||R().hasAttribute("disabled")||(I("onShow",[_],!1),!1===_.props.onShow(_)))){if(_.state.isVisible=!0,L()&&(k.style.visibility="visible"),P(),H(),_.state.isMounted||(k.style.transition="none"),L()){var o=O();Zt([o.box,o.content],0)}s=function(){if(_.state.isVisible&&!h){if(h=!0,k.offsetHeight,k.style.transition=_.props.moveTransition,L()&&_.props.animation){var e=O(),t=e.box,n=e.content;Zt([t,n],r),Qt([t,n],"visible")}B(),$(),Ft(Sn,_),_.state.isMounted=!0,I("onMount",[_]),_.props.animation&&L()&&q(r,(function(){_.state.isShown=!0,I("onShown",[_])}))}},ne()}}function ue(){var e=!_.state.isVisible,t=_.state.isDestroyed,n=!_.state.isEnabled,i=zt(_.props.duration,1,pn.duration);if(!(e||t||n)&&(I("onHide",[_],!1),!1!==_.props.onHide(_))){if(_.state.isVisible=!1,_.state.isShown=!1,h=!1,d=!1,L()&&(k.style.visibility="hidden"),M(),j(),P(),L()){var r=O(),o=r.box,a=r.content;_.props.animation&&(Zt([o,a],i),Qt([o,a],"hidden"))}B(),$(),_.props.animation?L()&&V(i,_.unmount):_.unmount()}}function he(e){m.addEventListener("mousemove",f),Ft(An,f),f(e)}function ge(){_.state.isVisible&&_.hide(),_.state.isMounted&&(te(),ie().forEach((function(e){e._tippy.unmount()})),k.parentNode&&k.parentNode.removeChild(k),Sn=Sn.filter((function(e){return e!==_})),_.state.isMounted=!1,I("onHidden",[_]))}function fe(){_.state.isDestroyed||(_.clearDelayTimeouts(),_.unmount(),X(),delete e._tippy,_.state.isDestroyed=!0,I("onDestroy",[_]))}}function Tn(e,t){void 0===t&&(t={});var n=pn.plugins.concat(t.plugins||[]);an();var i=Object.assign({},t,{plugins:n}),r=Xt(e).reduce((function(e,t){var n=t&&En(t,i);return n&&e.push(n),e}),[]);return qt(e)?r[0]:r}function Cn(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,(e,t)=>0==+e?"":0===t?e.toLowerCase():e.toUpperCase()).replace("-","")}Tn.defaultProps=pn,Tn.setDefaultProps=hn,Tn.currentInput=en,Tn.setDefaultProps({render:xn});const Ln='\n    .tippy-box[data-animation=fade][data-state=hidden] {\n        opacity: 0\n    }\n\n    .tippy-iOS {\n        cursor: pointer!important;\n        -webkit-tap-highlight-color: transparent\n    }\n\n    [data-tippy-root] {\n        max-width: calc(100vw - 10px)\n    }\n\n    .tippy-box {\n        position: relative;\n        background-color: #333;\n        color: #fff;\n        border-radius: 4px;\n        font-size: var(--pb-popover-font-size, var(--pb-base-font-size, 14px));\n        line-height: var(--pb-popover-line-height, var(--pb-base-line-height, 1.4));\n        text-align: left;\n        font-style: normal;\n        font-weight: normal;\n        outline: 0;\n        transition-property: transform, visibility, opacity\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow {\n        bottom: 0\n    }\n\n    .tippy-box[data-placement^=top]>.tippy-arrow:before {\n        bottom: -7px;\n        left: 0;\n        border-width: 8px 8px 0;\n        border-top-color: initial;\n        transform-origin: center top\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow {\n        top: 0\n    }\n\n    .tippy-box[data-placement^=bottom]>.tippy-arrow:before {\n        top: -7px;\n        left: 0;\n        border-width: 0 8px 8px;\n        border-bottom-color: initial;\n        transform-origin: center bottom\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow {\n        right: 0\n    }\n\n    .tippy-box[data-placement^=left]>.tippy-arrow:before {\n        border-width: 8px 0 8px 8px;\n        border-left-color: initial;\n        right: -7px;\n        transform-origin: center left\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow {\n        left: 0\n    }\n\n    .tippy-box[data-placement^=right]>.tippy-arrow:before {\n        left: -7px;\n        border-width: 8px 8px 8px 0;\n        border-right-color: initial;\n        transform-origin: center right\n    }\n\n    .tippy-box[data-inertia][data-state=visible] {\n        transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)\n    }\n\n    .tippy-arrow {\n        width: 16px;\n        height: 16px;\n        color: #333\n    }\n\n    .tippy-arrow:before {\n        content: "";\n        position: absolute;\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-content {\n        position: relative;\n        padding: 5px 9px;\n        z-index: 1;\n        overflow: auto;\n        max-height: var(--pb-popover-max-height, calc(100vh - 60px));\n        max-width: var(--pb-popover-max-width, 640px);\n        color: var(--pb-popover-color);\n    }\n',Rn='\n    .tippy-box[data-theme~=light-border] {\n        background-color: #fff;\n        background-clip: padding-box;\n        border: 1px solid rgba(0, 8, 16, .15);\n        color: #333;\n        box-shadow: 0 4px 14px -2px rgba(0, 8, 16, .08)\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after, .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        content: "";\n        position: absolute;\n        z-index: -1\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-arrow:after {\n        border-color: transparent;\n        border-style: solid\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after {\n        border-top-color: rgba(0, 8, 16, .2);\n        border-width: 7px 7px 0;\n        top: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg {\n        top: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after {\n        top: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff;\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after {\n        border-bottom-color: rgba(0, 8, 16, .2);\n        border-width: 0 7px 7px;\n        bottom: 17px;\n        left: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg {\n        bottom: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after {\n        bottom: 17px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after {\n        border-left-color: rgba(0, 8, 16, .2);\n        border-width: 7px 0 7px 7px;\n        left: 17px;\n        top: 1px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg {\n        left: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after {\n        left: 12px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff;\n        right: 16px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after {\n        border-width: 7px 7px 7px 0;\n        right: 17px;\n        top: 1px;\n        border-right-color: rgba(0, 8, 16, .2)\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg {\n        right: 11px\n    }\n\n    .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after {\n        right: 12px\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow {\n        fill: #fff\n    }\n\n    .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);\n        background-size: 16px 6px;\n        width: 16px;\n        height: 6px\n    }\n',On="\n    .tippy-box[data-theme~=light] {\n        color: #26323d;\n        box-shadow: 0 0 20px 4px rgba(154, 161, 177, .15), 0 4px 80px -8px rgba(36, 40, 47, .25), 0 4px 4px -2px rgba(91, 94, 105, .15);\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #fff\n    }\n\n    .tippy-box[data-theme~=light][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-backdrop {\n        background-color: #fff\n    }\n\n    .tippy-box[data-theme~=light]>.tippy-svg-arrow {\n        fill: #fff\n    }",zn="\n    .tippy-box[data-theme~=material] {\n        background-color: #505355;\n        font-weight: 600\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=top]>.tippy-arrow:before {\n        border-top-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=bottom]>.tippy-arrow:before {\n        border-bottom-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=left]>.tippy-arrow:before {\n        border-left-color: #505355\n    }\n\n    .tippy-box[data-theme~=material][data-placement^=right]>.tippy-arrow:before {\n        border-right-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-backdrop {\n        background-color: #505355\n    }\n\n    .tippy-box[data-theme~=material]>.tippy-svg-arrow {\n        fill: #505355\n    }\n",Pn="\n    .tippy-box[data-theme~=translucent] {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-arrow {\n        width: 14px;\n        height: 14px\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=top]>.tippy-arrow:before {\n        border-width: 7px 7px 0;\n        border-top-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=bottom]>.tippy-arrow:before {\n        border-width: 0 7px 7px;\n        border-bottom-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=left]>.tippy-arrow:before {\n        border-width: 7px 0 7px 7px;\n        border-left-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent][data-placement^=right]>.tippy-arrow:before {\n        border-width: 7px 7px 7px 0;\n        border-right-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-backdrop {\n        background-color: rgba(0, 0, 0, .7)\n    }\n\n    .tippy-box[data-theme~=translucent]>.tippy-svg-arrow {\n        fill: rgba(0, 0, 0, .7)\n    }\n";var In=Object.freeze({__proto__:null,camelize:Cn,base:Ln,lightBorder:Rn,light:On,material:zn,translucent:Pn});class Bn extends(P(L)){static get properties(){return z(z({},super.properties),{},{for:{type:String},theme:{type:String},placement:{type:String},fallbackPlacement:{type:String,attribute:"fallback-placement"},persistent:{type:Boolean},popupClass:{type:String,attribute:"popup-class"}})}constructor(){super(),this.persistent=!1,this.for=null,this.theme=null,this.placement=null,this.fallbackPlacement=null,this.popupClass=null,this._tippy=null,this._content=null}render(){return this.disabled?R`<slot name="default"></slot>`:this.for?R`<div class="hidden"><slot></slot></div>`:R`<span id="link" class="${this.persistent?"persistent":""}"><slot name="default"><slot></slot></slot></span><span class="hidden"><slot name="alternate"></slot></span>`}disconnectedCallback(){super.disconnectedCallback(),this._tippy&&this._tippy.destroy()}_checkCSSProperties(){this.theme||"none"===this.theme||(this.theme=this._getCSSProperty("--pb-popover-theme","none")),this.placement||(this.placement=this._getCSSProperty("--pb-popover-placement","auto")),this.fallbackPlacement||(this.fallbackPlacement=this._getCSSProperty("--pb-popover-fallback-placement",null))}_getCSSProperty(e,t){const n=getComputedStyle(this).getPropertyValue(e);if(n)try{return JSON.parse(n)}catch(e){return t}return t}_injectStyles(){if(this._checkCSSProperties(),this._injectStylesheet("base",Ln),this.theme&&"none"!==this.theme){const e=Cn(this.theme),t=In[e];t&&this._injectStylesheet(e,t)}}_injectStylesheet(e,t){const n=this.getRootNode();if(!n.querySelector("#pb-popover-"+e)){const i=n.nodeType===Node.DOCUMENT_NODE?document.head:n,r=document.createElement("style");r.type="text/css",r.id="pb-popover-"+e,r.innerHTML=t,i.appendChild(r)}}_getContent(){const e=this._getSlot();if(e){const t=document.createElement("div");return e.assignedNodes().forEach(e=>{t.appendChild(document.importNode(e.content||e,!0))}),t}return null}_getSlot(){return this.for?this.shadowRoot.querySelector("slot"):this.shadowRoot.querySelector("[name=alternate]")}get alternate(){return this._content}set alternate(e){this._content=e,this._tippy&&this._tippy.setContent(this._content)}firstUpdated(){super.firstUpdated(),this._injectStyles();const e=this.getRootNode();let t;if(this.for?(t=e.getElementById(this.for),t||console.error("<pb-popover> target element %s not found",this.for)):t=this.shadowRoot.getElementById("link"),t){this._content||(this._content=this._getContent());const n={content:this._content,allowHTML:!0,appendTo:e.nodeType===Node.DOCUMENT_NODE?document.body:e,placement:this.placement,interactive:!0,ignoreAttributes:!0,boundary:"viewport",maxWidth:"none",touch:"hold",hideOnClick:!1};if(this.persistent&&(n.trigger="click",n.hideOnClick=!0),this.theme&&"none"!==this.theme&&(n.theme=this.theme),this.fallbackPlacement){const e=this.fallbackPlacement.split(" ");n.popperOptions={modifiers:[{name:"flip",options:{fallbackPlacements:e}}]}}this.popupClass&&(n.onCreate=e=>{e.popper.classList.add(this.popupClass)}),n.onShow=()=>{this.emitTo("pb-popover-show",{source:this})},this._tippy=Tn(t,n)}}static get styles(){return[O`
                :host {
                    display: inline;
                }
                .hidden {
                    display: none;
                }
                div {
                    float: left;
                }
                #link {
                    display: inline;
                    color: inherit;
                    text-decoration: var(--pb-popover-link-decoration, var(--pb-link-text-decoration, inherit));
                    cursor: text;
                }
                #link.persistent {
                    cursor: pointer;
                }
            `]}}customElements.define("pb-popover",Bn);class $n extends(P(L)){static get properties(){return z(z({},super.properties),{},{key:{type:String},duration:{type:Number},scroll:{type:Boolean},highlightSelf:{type:Boolean,attribute:"highlight-self"},_className:{type:String}})}constructor(){super(),this.key=null,this.duration=0,this.scroll=!1,this.highlightSelf=!1,this._className="highlight-off"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-highlight-on",this._highlightOn.bind(this)),this.subscribeTo("pb-highlight-off",this._highlightOff.bind(this))}command(e,t){super.command(e,t),this.disabled&&(this._className="highlight-off")}_mouseOver(){this.emitTo("pb-highlight-off",{source:this}),this.highlightSelf&&this._highlightOn({detail:{id:this.key}}),this.emitTo("pb-highlight-on",{id:this.key,source:this,scroll:this.scroll})}render(){return this.disabled?R`<slot></slot>`:R`<span id="content" class="${this._className}" @mouseover="${this._mouseOver}"><slot></slot></span>`}static get styles(){return O`
            :host {
                display: inline;
            }

            @keyframes keyFrameBackgroundColorIn {
                0% {
                    background-color: inherit;
                }
                100% {
                    background-color: var(--pb-highlight-color, #F9E976);
                }
            }

            #content {
                display: inline;
            }

            .highlight-on {
                background-color: var(--pb-highlight-color, #F9E976);
                animation-name: keyFrameBackgroundColorIn;
                animation-duration: 500ms;
                animation-iteration-count: 1;
                animation-timing-function: ease-in;

            }

            .highlight-off {
                background-color: inherit;
            }
        `}_highlightOn(e){e.detail.source!=this&&e.detail.id===this.key&&(this._className="highlight-on",e.detail.scroll&&this.scrollIntoView({behaviour:"smooth"}),this.duration>0&&setTimeout(function(){this._className="highlight-off"}.bind(this),this.duration))}_highlightOff(e){e.detail.source!=this&&(this._className="highlight-off")}}customElements.define("pb-highlight",$n);class Mn extends(P(L)){static get properties(){return z(z({},super.properties),{},{xmlId:{type:String,attribute:"xml-id"},nodeId:{type:String,attribute:"node-id",reflect:!0},hash:{type:String,reflect:!0},path:{type:String},odd:{type:String},history:{type:Boolean}})}constructor(){super(),this.history=!0}connectedCallback(){super.connectedCallback(),this._id=this.nodeId,this.subscribeTo("pb-visible",e=>{if(this.nodeId){const[t,n]=e.detail.data.split(/\s*,\s*/);this.nodeId!==t||this.hash&&this.hash!==n?this.classList.remove("active"):(this.classList.add("active"),this.scrollIntoView({block:"nearest"}),this.dispatchEvent(new CustomEvent("pb-collapse-open",{composed:!0,bubbles:!0})))}}),this._content=this.innerHTML}render(){return R`<a href="#" @click="${this._onClick}">${A(this._content)}</a>`}createRenderRoot(){return this}_onClick(e){e.preventDefault();const t={position:null};this.xmlId?(t.id=this.xmlId,this.history&&this.setParameter("id",this.xmlId)):this.nodeId&&(t.position=this.nodeId,this.history&&this.setParameter("root",this.nodeId)),this.path&&(t.path=this.path,this.history&&this.setPath(this.path)),this.odd&&(t.odd=this.odd,this.history&&this.setParameter("odd",this.odd)),t.hash=this.hash,this.pushHistory("link click"),this.emitTo("pb-refresh",t)}}customElements.define("pb-link",Mn);class Fn extends(P(L)){static get properties(){return z(z({},super.properties),{},{facs:{type:String},coordinates:{type:Array},emitOnLoad:{type:Boolean}})}constructor(){super()}connectedCallback(){super.connectedCallback()}firstUpdated(){this.emitOnLoad&&this._trigger()}render(){return R`<a href="#" @mouseover="${this._mouseoverListener}" @click="${e=>e.preventDefault()}"><slot></slot></a>`}static get styles(){return O`
            :host {
            }

            a, a:link {
                text-decoration: none;
                color: inherit;
            }
        `}_mouseoverListener(e){e.preventDefault(),this._trigger()}_trigger(){console.log("<facs-link> %s %o",this.facs,this.coordinates),this.emitTo("pb-show-annotation",{file:this.facs,coordinates:this.coordinates})}}customElements.define("pb-facs-link",Fn);class Dn extends(P(L)){static get properties(){return z(z({},super.properties),{},{url:{type:String},src:{type:String},container:{type:String},auto:{type:Boolean},loadOnce:{type:Boolean},fixLinks:{type:Boolean,attribute:"fix-links"},start:{type:Number},history:{type:Boolean},event:{type:String},userParams:{type:Object}})}constructor(){super(),this.auto=!1,this.loadOnce=!1,this.history=!1,this.event="pb-load",this.loaded=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo(this.event,function(e){if(this.history&&e.detail&&e.detail.params){const t=e.detail.params.start;t&&(this.setParameter("start",t),this.pushHistory("pagination",{start:t}))}this.load(e)}.bind(this)),this.history&&window.addEventListener("popstate",function(e){e.preventDefault(),e.state&&e.state.start&&e.state.start!==this.start&&(this.start=e.state.start,this.load())}.bind(this)),this.subscribeTo("pb-toggle",e=>{this.toggleFeature(e)}),this.signalReady()}firstUpdated(){this.auto&&(this.start=this.getParameter("start",this.start),this.wait(()=>this.load()))}render(){return R`
            <slot></slot>
            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                with-credentials
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <paper-dialog id="errorDialog">
                <h2>${i("dialogs.error")}</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${i("dialogs.close")}
                    </paper-button>
                </div>
            </paper-dialog>
        `}static get styles(){return O`
            :host {
                display: block;
            }
        `}toggleFeature(e){this.userParams=e.detail.properties,console.log("<pb-load> toggle feature %o",this.userParams),"refresh"===e.detail.action&&this.load()}getURL(){return this.getEndpoint()+"/"+this.url}load(e){if(this.loadOnce&&this.loaded)return;this.emitTo("pb-start-update");let t={};e&&(e instanceof Event?e.detail&&e.detail.params&&(t=e.detail.params):t=e);const n=this.getDocument();n&&(t.doc=n.path),this.start&&!t.start&&(t.start=this.start),t=this.prepareParameters(t),console.log("<pb-load> Loading %s with parameters %o",this.url,t);const i=this.shadowRoot.getElementById("loadContent");i.params=t,i.url=this.getURL(),i.generateRequest(),this.loadOnce&&(this.loaded=!0)}prepareParameters(e){return this.userParams?Object.assign(e,this.userParams):e}_handleContent(e){this._parseHeaders(e.detail.xhr);const t=this.shadowRoot.getElementById("loadContent").lastResponse;if(this.container)this.style.display="none",document.querySelectorAll(this.container).forEach(e=>{e.innerHTML=t,this._fixLinks(e),this._onLoad(e)});else{this.style.display="",this._clearContent();const e=document.createElement("div");e.innerHTML=t,e.slot="",this.appendChild(e),this._fixLinks(e),this._onLoad(e)}this.emitTo("pb-end-update")}_clearContent(){const e=this.shadowRoot.querySelector("slot:not([name])");e&&e.assignedNodes().forEach(e=>e.parentNode.removeChild(e))}_handleError(){this.emitTo("pb-end-update");const e=this.shadowRoot.getElementById("loadContent").lastError.response,t=(new DOMParser).parseFromString(e,"application/xml").querySelector("message"),n=this.shadowRoot.getElementById("errorDialog");n.querySelector("paper-dialog-scrollable").innerHTML=t.textContent,n.open()}_parseHeaders(e){const t=e.getResponseHeader("pb-total"),n=e.getResponseHeader("pb-start");this.start!==n&&(this.start=parseInt(n)),this.emitTo("pb-results-received",{count:t?parseInt(t,10):0,start:this.start,params:this.shadowRoot.getElementById("loadContent").params})}_fixLinks(e){this.fixLinks&&(e.querySelectorAll("img").forEach(e=>{const t=e.getAttribute("src"),n=new URL(t,this.getURL());e.src=n}),e.querySelectorAll("a").forEach(e=>{const t=e.getAttribute("href"),n=new URL(t,this.getURL());e.href=n}))}_onLoad(e){}}customElements.define("pb-load",Dn);class Nn extends Dn{static get properties(){return z(z({},super.properties),{},{sortBy:{type:String,attribute:"sort-by"},sortOptions:{type:Array,attribute:"sort-options"},sortLabel:{type:String},filter:{type:String},filterBy:{type:String,attribute:"filter-by"},filterOptions:{type:Array,attribute:"filter-options"},filterByLabel:{type:String},collection:{type:String},facets:{type:Object},login:{type:String},group:{type:String},_file:{type:String},_selected:{type:Array},_allowModification:{type:Boolean},_suggestions:{type:Array}})}constructor(){super(),this.sortOptions=[],this.sortLabel="browse.sort",this.sortBy="default",this.filter="",this.filterOptions=[{label:"Title",value:"title"}],this.filterByLabel="browse.filter",this.filterBy="title",this._allowModification=!1,this._suggestions=[]}connectedCallback(){super.connectedCallback();const e=this.getParameter("sort");e&&(this.sortBy=e);const t=this.getParameter("filter");t&&(this.filter=t,this.filterBy=this.getParameter("filterBy",this.filterBy)),this.facets=this.getParametersMatching(/^facet-.*$/),this.collection=this.getParameter("collection"),this.subscribeTo("pb-search-resubmit",this._facets.bind(this)),this.subscribeTo("pb-login",e=>{e.detail.userChanged&&this._facets(e)},[]),document.addEventListener("pb-i18n-update",()=>{const e=this.shadowRoot.getElementById("sort-list");let t=e.selected;e.selected=void 0,e.selected=t;const n=this.shadowRoot.getElementById("filter-list");t=n.selected,n.selected=void 0,n.selected=t})}firstUpdated(){this.shadowRoot.getElementById("autocomplete").addEventListener("autocomplete-change",this._autocomplete.bind(this));const e=document.getElementById(this.login);e?(this.subscribeTo("pb-login",e=>{this._allowModification=this._loggedIn(e.detail.user,e.detail.group)},[]),this._allowModification=e.loggedIn&&this._loggedIn(e.user,e.groups)):console.error("<pb-browse-docs> connected pb-login element not found!"),this.shadowRoot.getElementById("sort-list").addEventListener("selected-item-changed",this._sort.bind(this)),this.shadowRoot.getElementById("delete").addEventListener("click",this._handleDelete.bind(this)),super.firstUpdated()}render(){return R`
            <custom-style>
                <style>
                    :host {
                        --suggestions-item: {
                            color: var(--pb-search-suggestions-color, black);
                        };
                        --suggestions-wrapper: {
                            background: var(--pb-search-suggestions-background, white);
                        }
                    }
                </style>
            </custom-style>
            <div class="toolbar">
                <paper-dropdown-menu id="sort" label="${i(this.sortLabel)}">
                    <paper-listbox id="sort-list" selected="${this.sortBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value">
                    ${this.sortOptions.map(e=>R`<paper-item value="${e.value}">${i(e.label)}</paper-item>`)}
                    </paper-listbox>
                </paper-dropdown-menu>
                <div>
                    <paper-dropdown-menu id="filterSelect" label="${i(this.filterByLabel)}">
                        <paper-listbox id="filter-list" selected="${this.filterBy}" slot="dropdown-content" class="dropdown-content" attr-for-selected="value">
                        ${this.filterOptions.map(e=>R`<paper-item value="${e.value}">${i(e.label)}</paper-item>`)}
                        </paper-listbox>
                    </paper-dropdown-menu>
                    <paper-input id="filterString" type="search" name="filter" label="Filter" value="${this.filter}"
                        @keyup="${this._handleEnter}">
                        <iron-icon icon="search" @click="${this._filter}" slot="prefix"></iron-icon>
                    </paper-input>
                    <paper-autocomplete-suggestions id="autocomplete" for="filterString" source="${this._suggestions}" remote-source></paper-autocomplete-suggestions>
                </div>
            </div>
            <div class="toolbar">
                <slot name="toolbar"></slot>
                <paper-button id="delete" title="${i("browse.delete")}" class="${this._canModify(this._allowModification)}">
                    <iron-icon icon="delete"></iron-icon>
                    <span class="label">${i("browse.delete")}</span>
                </paper-button>
            </div>
            <slot></slot>
            <slot name="footer"></slot>
            
            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                with-credentials
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <iron-ajax
                id="autocompleteLoader"
                url="${this.getEndpoint()}/modules/autocomplete.xql"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._updateSuggestions}"></iron-ajax>

            <paper-dialog id="deleteDialog">
                <h2>${i("browse.delete")}</h2>
                <paper-dialog-scrollable>
                    <p>${i("browse.confirmDeletion",{count:this._selected?this._selected.length:0})}</p>
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus @click="${this._confirmDelete}">${i("dialogs.yes")}</paper-button>
                    <paper-button dialog-confirm="dialog-cancel">${i("dialogs.no")}</paper-button>
                </div>
            </paper-dialog>
            <paper-dialog id="errorDialog">
                <h2>${i("dialogs.error")}</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${i("dialogs.close")}
                    </paper-button>
                </div>
            </paper-dialog>
        `}static get styles(){return O`
            :host {
                display: block;
                --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
                --paper-input-container-input-color: var(--pb-search-input-color, var(--pb-color-primary, #000000));
                --paper-input-container-focus-color: var(--pb-search-focus-color, var(--paper-grey-500, #303030));
            }

            .toolbar {
                display: flex;
                justify-content: var(--pb-browse-toolbar-justify-content);
            }

            [name="toolbar"] {
                flex: 1 0;
            }

            #sort {
                display: block;
            }

            #filterString {
                position: relative;
                display: inline-block;
                vertical-align: bottom;
            }

            .hidden {
                display: none;
            }
        `}getURL(){return this.collection?`${super.getURL()}/${this.collection}`:super.getURL()}prepareParameters(e){return e.sort=this.sortBy,this.filter&&(e.filter=this.filter,e.browse=this.filterBy),this.facets&&(e=Object.assign(e,this.facets)),e}getSelected(){const e=[];return this.container?document.querySelectorAll(this.container).forEach(t=>t.querySelectorAll(".document-select paper-checkbox[checked]").forEach(t=>{e.push(t.value)})):this.querySelectorAll(".document-select paper-checkbox[checked]").forEach(t=>{e.push(t.value)}),e}_filter(){const e=this.shadowRoot.getElementById("filterString").value,t=this.shadowRoot.getElementById("filter-list").selected;void 0!==e&&(console.log("<pb-browse-docs> Filter by %s",e),this.filter=e,this.setParameter("filter",e),this.setParameter("filterBy",t),this.pushHistory("filter docs"),this.load())}_sort(){const e=this.shadowRoot.getElementById("sort-list").selected;e&&e!==this.sortBy&&(console.log("<pb-browse-docs> Sorting by %s",e),this.sortBy=e,this.setParameter("sort",e),this.pushHistory("sort docs"),this.load())}_facets(e){if(e.detail&&e.detail.params){this.clearParametersMatching(/^(all-|facet-).*/);for(let t in e.detail.params)this.setParameter(t,e.detail.params[t]);this.facets=e.detail.params,this.start=1,this.pushHistory("facets")}this.load()}_onLoad(e){const t=e.querySelector("[data-root]"),n=t&&t.getAttribute("data-root"),i=t&&t.classList.contains("writable");this.emitTo("pb-collection",{writable:i,collection:n}),document.querySelectorAll("[can-write]").forEach(e=>{e.disabled=!i}),e.querySelectorAll("[data-collection]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),this.collection=e.getAttribute("data-collection"),this.setParameter("collection",this.collection),this.pushHistory("browse collection"),console.log("<pb-browse-docs> loading collection %s",this.collection),this.load()})})}_handleDelete(e,t){const n=this.shadowRoot.getElementById("deleteDialog"),i=this.getSelected();i.length>0&&(this._selected=i,n.open())}_confirmDelete(){if(!this._file&&!this._selected)return;let e;e=this._selected?this._selected:[this._file],console.log("<pb-browse-docs> Deleting %o",this._file);const t={action:"delete","docs[]":e};this._file=null,this._selected=null,this.load(t)}_loggedIn(e,t){return null!=e&&(!this.group||!!t&&t.indexOf(this.group)>-1)}_canModify(e){return e?"":"hidden"}_autocomplete(e){const t=this.shadowRoot.getElementById("autocompleteLoader");t.params={query:e.detail.option.text,field:this.filterBy},t.generateRequest()}_updateSuggestions(){const e=this.shadowRoot.getElementById("autocomplete"),t=this.shadowRoot.getElementById("autocompleteLoader");e.suggestions(t.lastResponse)}_handleEnter(e){13==e.keyCode&&this._filter()}}customElements.define("pb-browse-docs",Nn);class Hn extends(P(L)){static get properties(){return z(z({},super.properties),{},{path:{type:String,reflect:!0},rootPath:{type:String,attribute:"root-path"},odd:{type:String,reflect:!0},view:{type:String,reflect:!0},sourceView:{type:String,attribute:"source-view"}})}constructor(){super(),this.path="",this.rootPath=""}connectedCallback(){super.connectedCallback()}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),t&&(console.log("<pb-document> Emit update event"),this.emitTo("pb-document",this))}getFileName(){return this.path.replace(/^.*?([^\/]+)$/,"$1")}getFullPath(){return this.rootPath+"/"+this.path}}customElements.define("pb-document",Hn);class jn extends(S(P(L))){static get properties(){return z(z({},super.properties),{},{direction:{type:String},keyboard:{type:String}})}constructor(){super(),this.direction="forward",this.disabled=!0}connectedCallback(){super.connectedCallback(),this.keyboard&&(this.hotkeys={next:this.keyboard}),this.subscribeTo("pb-update",this._update.bind(this)),this.registerHotkey("next",()=>this.emitTo("pb-navigate",{direction:this.direction})),this.signalReady()}_update(e){"forward"===this.direction?e.detail.data.next?this.disabled=!1:this.disabled=!0:e.detail.data.previous?this.disabled=!1:this.disabled=!0}_handleClick(){this.emitTo("pb-navigate",{direction:this.direction})}render(){return R`
            <a id="button" @click="${this._handleClick}"><slot></slot></a>
        `}static get styles(){return O`
            :host {
                display: inline;
            }
            :host([disabled]) {
                display: none;
            }
        `}}function Vn(e){return(Vn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function qn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Un(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){qn(e,t,n[t])}))}return e}function Wn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gn(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Xn(e,t,n){return t&&Gn(e.prototype,t),n&&Gn(e,n),e}function Zn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qn(e,t){return!t||"object"!==Vn(t)&&"function"!=typeof t?Zn(e):t}function Yn(e){return(Yn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Kn(e,t){return(Kn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Jn(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Kn(e,t)}customElements.define("pb-navigation",jn);var ei={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){console&&console[e]&&console[e].apply(console,t)}},ti=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Wn(this,e),this.init(t,n)}return Xn(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||ei,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,i){return i&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,Un({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options))}}]),e}()),ni=function(){function e(){Wn(this,e),this.observers={}}return Xn(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach((function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter((function(e){return e!==t})):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.observers[e]&&[].concat(this.observers[e]).forEach((function(e){e.apply(void 0,n)}));this.observers["*"]&&[].concat(this.observers["*"]).forEach((function(t){t.apply(t,[e].concat(n))}))}}]),e}();function ii(){var e,t,n=new Promise((function(n,i){e=n,t=i}));return n.resolve=e,n.reject=t,n}function ri(e){return null==e?"":""+e}function oi(e,t,n){e.forEach((function(e){t[e]&&(n[e]=t[e])}))}function ai(e,t,n){function i(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function r(){return!e||"string"==typeof e}for(var o="string"!=typeof t?[].concat(t):t.split(".");o.length>1;){if(r())return{};var a=i(o.shift());!e[a]&&n&&(e[a]=new n),e=e[a]}return r()?{}:{obj:e,k:i(o.shift())}}function si(e,t,n){var i=ai(e,t,Object);i.obj[i.k]=n}function li(e,t,n,i){var r=ai(e,t,Object),o=r.obj,a=r.k;o[a]=o[a]||[],i&&(o[a]=o[a].concat(n)),i||o[a].push(n)}function ci(e,t){var n=ai(e,t),i=n.obj,r=n.k;if(i)return i[r]}function di(e,t,n){var i=ci(e,n);return void 0!==i?i:ci(t,n)}function pi(e,t,n){for(var i in t)"__proto__"!==i&&(i in e?"string"==typeof e[i]||e[i]instanceof String||"string"==typeof t[i]||t[i]instanceof String?n&&(e[i]=t[i]):pi(e[i],t[i],n):e[i]=t[i]);return e}function ui(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var hi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function gi(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(function(e){return hi[e]})):e}var fi="undefined"!=typeof window&&window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,mi=function(e){function t(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Wn(this,t),n=Qn(this,Yn(t).call(this)),fi&&ni.call(Zn(n)),n.data=e||{},n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n}return Jn(t,ni),Xn(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,o=[e,t];return n&&"string"!=typeof n&&(o=o.concat(n)),n&&"string"==typeof n&&(o=o.concat(r?n.split(r):n)),e.indexOf(".")>-1&&(o=e.split(".")),ci(this.data,o)}},{key:"addResource",value:function(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},o=this.options.keySeparator;void 0===o&&(o=".");var a=[e,t];n&&(a=a.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(i=t,t=(a=e.split("."))[1]),this.addNamespaces(t),si(this.data,a,i),r.silent||this.emit("added",e,t,n,i)}},{key:"addResources",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var r in n)"string"!=typeof n[r]&&"[object Array]"!==Object.prototype.toString.apply(n[r])||this.addResource(e,t,r,n[r],{silent:!0});i.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},a=[e,t];e.indexOf(".")>-1&&(i=n,n=t,t=(a=e.split("."))[1]),this.addNamespaces(t);var s=ci(this.data,a)||{};i?pi(s,n,r):s=Un({},s,n),si(this.data,a,s),o.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?Un({},{},this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"toJSON",value:function(){return this.data}}]),t}(),bi={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,i,r){var o=this;return e.forEach((function(e){o.processors[e]&&(t=o.processors[e].process(t,n,i,r))})),t}},vi={},yi=function(e){function t(e){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Wn(this,t),n=Qn(this,Yn(t).call(this)),fi&&ni.call(Zn(n)),oi(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,Zn(n)),n.options=i,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n.logger=ti.create("translator"),n}return Jn(t,ni),Xn(t,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");var i=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,r=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var o=e.match(this.interpolator.nestingRegexp);if(o&&o.length>0)return{key:e,namespaces:r};var a=e.split(n);(n!==i||n===i&&this.options.ns.indexOf(a[0])>-1)&&(r=a.shift()),e=a.join(i)}return"string"==typeof r&&(r=[r]),{key:e,namespaces:r}}},{key:"translate",value:function(e,t,n){var i=this;if("object"!==Vn(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,o=this.extractFromKey(e[e.length-1],t),a=o.key,s=o.namespaces,l=s[s.length-1],c=t.lng||this.language,d=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(d){var p=t.nsSeparator||this.options.nsSeparator;return l+p+a}return a}var u=this.resolve(e,t),h=u&&u.res,g=u&&u.usedKey||a,f=u&&u.exactUsedKey||a,m=Object.prototype.toString.apply(h),b=["[object Number]","[object Function]","[object RegExp]"],v=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject;if(y&&h&&("string"!=typeof h&&"boolean"!=typeof h&&"number"!=typeof h)&&b.indexOf(m)<0&&("string"!=typeof v||"[object Array]"!==m)){if(!t.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,h,t):"key '".concat(a," (").concat(this.language,")' returned an object instead of string.");if(r){var w="[object Array]"===m,_=w?[]:{},x=w?f:g;for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k)){var A="".concat(x).concat(r).concat(k);_[k]=this.translate(A,Un({},t,{joinArrays:!1,ns:s})),_[k]===A&&(_[k]=h[k])}h=_}}else if(y&&"string"==typeof v&&"[object Array]"===m)(h=h.join(v))&&(h=this.extendTranslation(h,e,t,n));else{var S=!1,E=!1;if(!this.isValidLookup(h)&&void 0!==t.defaultValue){if(S=!0,void 0!==t.count){var T=this.pluralResolver.getSuffix(c,t.count);h=t["defaultValue".concat(T)]}h||(h=t.defaultValue)}this.isValidLookup(h)||(E=!0,h=a);var C=t.defaultValue&&t.defaultValue!==h&&this.options.updateMissing;if(E||S||C){if(this.logger.log(C?"updateKey":"missingKey",c,l,a,C?t.defaultValue:h),r){var L=this.resolve(a,Un({},t,{keySeparator:!1}));L&&L.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var R=[],O=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&O&&O[0])for(var z=0;z<O.length;z++)R.push(O[z]);else"all"===this.options.saveMissingTo?R=this.languageUtils.toResolveHierarchy(t.lng||this.language):R.push(t.lng||this.language);var P=function(e,n){i.options.missingKeyHandler?i.options.missingKeyHandler(e,l,n,C?t.defaultValue:h,C,t):i.backendConnector&&i.backendConnector.saveMissing&&i.backendConnector.saveMissing(e,l,n,C?t.defaultValue:h,C,t),i.emit("missingKey",e,l,n,h)};if(this.options.saveMissing){var I=void 0!==t.count&&"string"!=typeof t.count;this.options.saveMissingPlurals&&I?R.forEach((function(e){i.pluralResolver.getPluralFormsOfKey(e,a).forEach((function(t){return P([e],t)}))})):P(R,a)}}h=this.extendTranslation(h,e,t,u,n),E&&h===a&&this.options.appendNamespaceToMissingKey&&(h="".concat(l,":").concat(a)),E&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(h))}return h}},{key:"extendTranslation",value:function(e,t,n,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,n,i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(Un({},n,{interpolation:Un({},this.options.interpolation,n.interpolation)}));var a,s=n.interpolation&&n.interpolation.skipOnVariables||this.options.interpolation.skipOnVariables;if(s){var l=e.match(this.interpolator.nestingRegexp);a=l&&l.length}var c=n.replace&&"string"!=typeof n.replace?n.replace:n;if(this.options.interpolation.defaultVariables&&(c=Un({},this.options.interpolation.defaultVariables,c)),e=this.interpolator.interpolate(e,c,n.lng||this.language,n),s){var d=e.match(this.interpolator.nestingRegexp);a<(d&&d.length)&&(n.nest=!1)}!1!==n.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r&&r[0]===n[0]?(o.logger.warn("It seems you are nesting recursively key: ".concat(n[0]," in key: ").concat(t[0])),null):o.translate.apply(o,n.concat([t]))}),n)),n.interpolation&&this.interpolator.reset()}var p=n.postProcess||this.options.postProcess,u="string"==typeof p?[p]:p;return null!=e&&u&&u.length&&!1!==n.applyPostProcessor&&(e=bi.handle(u,e,t,this.options&&this.options.postProcessPassResolved?Un({i18nResolved:i},n):n,this)),e}},{key:"resolve",value:function(e){var t,n,i,r,o,a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((function(e){if(!a.isValidLookup(t)){var l=a.extractFromKey(e,s),c=l.key;n=c;var d=l.namespaces;a.options.fallbackNS&&(d=d.concat(a.options.fallbackNS));var p=void 0!==s.count&&"string"!=typeof s.count,u=void 0!==s.context&&"string"==typeof s.context&&""!==s.context,h=s.lngs?s.lngs:a.languageUtils.toResolveHierarchy(s.lng||a.language,s.fallbackLng);d.forEach((function(e){a.isValidLookup(t)||(o=e,!vi["".concat(h[0],"-").concat(e)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(o)&&(vi["".concat(h[0],"-").concat(e)]=!0,a.logger.warn('key "'.concat(n,'" for languages "').concat(h.join(", "),'" won\'t get resolved as namespace "').concat(o,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),h.forEach((function(n){if(!a.isValidLookup(t)){r=n;var o,l,d=c,h=[d];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(h,c,n,e,s);else p&&(o=a.pluralResolver.getSuffix(n,s.count)),p&&u&&h.push(d+o),u&&h.push(d+="".concat(a.options.contextSeparator).concat(s.context)),p&&h.push(d+=o);for(;l=h.pop();)a.isValidLookup(t)||(i=l,t=a.getResource(n,e,l,s))}})))}))}})),{res:t,usedKey:n,exactUsedKey:i,usedLng:r,usedNS:o}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,i):this.resourceStore.getResource(e,t,n,i)}}]),t}();function wi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var _i=function(){function e(t){Wn(this,e),this.options=t,this.whitelist=this.options.supportedLngs||!1,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ti.create("languageUtils")}return Xn(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map((function(e){return e.toLowerCase()})):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=wi(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=wi(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=wi(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return this.logger.deprecate("languageUtils.isWhitelisted",'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),this.isSupportedCode(e)}},{key:"isSupportedCode",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}},{key:"getBestMatchFromCodes",value:function(e){var t,n=this;return e?(e.forEach((function(e){if(!t){var i=n.formatLanguageCode(e);n.options.supportedLngs&&!n.isSupportedCode(i)||(t=i)}})),!t&&this.options.supportedLngs&&e.forEach((function(e){if(!t){var i=n.getLanguagePartFromCode(e);if(n.isSupportedCode(i))return t=i;t=n.options.supportedLngs.find((function(e){if(0===e.indexOf(i))return e}))}})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],o=function(e){e&&(n.isSupportedCode(e)?r.push(e):n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(e))):"string"==typeof e&&o(this.formatLanguageCode(e)),i.forEach((function(e){r.indexOf(e)<0&&o(n.formatLanguageCode(e))})),r}}]),e}(),xi=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ki={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}};function Ai(){var e={};return xi.forEach((function(t){t.lngs.forEach((function(n){e[n]={numbers:t.nr,plurals:ki[t.fc]}}))})),e}var Si=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Wn(this,e),this.languageUtils=t,this.options=n,this.logger=ti.create("pluralResolver"),this.rules=Ai()}return Xn(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=this,i=[],r=this.getRule(e);return r?(r.numbers.forEach((function(r){var o=n.getSuffix(e,r);i.push("".concat(t).concat(o))})),i):i}},{key:"getSuffix",value:function(e,t){var n=this,i=this.getRule(e);if(i){var r=i.noAbs?i.plurals(t):i.plurals(Math.abs(t)),o=i.numbers[r];this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]&&(2===o?o="plural":1===o&&(o=""));var a=function(){return n.options.prepend&&o.toString()?n.options.prepend+o.toString():o.toString()};return"v1"===this.options.compatibilityJSON?1===o?"":"number"==typeof o?"_plural_".concat(o.toString()):a():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===i.numbers.length&&1===i.numbers[0]?a():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}return this.logger.warn("no plural rule found for: ".concat(e)),""}}]),e}(),Ei=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Wn(this,e),this.logger=ti.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return Xn(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:gi,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?ui(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?ui(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?ui(t.nestingPrefix):t.nestingPrefixEscaped||ui("$t("),this.nestingSuffix=t.nestingSuffix?ui(t.nestingSuffix):t.nestingSuffixEscaped||ui(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,i){var r,o,a,s=this,l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(e){return e.replace(/\$/g,"$$$$")}var d=function(e){if(e.indexOf(s.formatSeparator)<0){var r=di(t,l,e);return s.alwaysFormat?s.format(r,void 0,n):r}var o=e.split(s.formatSeparator),a=o.shift().trim(),c=o.join(s.formatSeparator).trim();return s.format(di(t,l,a),c,n,i)};this.resetRegExp();var p=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,u=i&&i.interpolation&&i.interpolation.skipOnVariables||this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(e){return c(e)}},{regex:this.regexp,safeValue:function(e){return s.escapeValue?c(s.escape(e)):c(e)}}].forEach((function(t){for(a=0;r=t.regex.exec(e);){if(void 0===(o=d(r[1].trim())))if("function"==typeof p){var n=p(e,r,i);o="string"==typeof n?n:""}else{if(u){o=r[0];continue}s.logger.warn("missed to pass in variable ".concat(r[1]," for interpolating ").concat(e)),o=""}else"string"==typeof o||s.useRawValueToEscape||(o=ri(o));if(e=e.replace(r[0],t.safeValue(o)),t.regex.lastIndex=0,++a>=s.maxReplaces)break}})),e}},{key:"nest",value:function(e,t){var n,i,r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Un({},o);function s(e,t){var n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;var i=e.split(new RegExp("".concat(n,"[ ]*{"))),r="{".concat(i[1]);e=i[0],r=(r=this.interpolate(r,a)).replace(/'/g,'"');try{a=JSON.parse(r),t&&(a=Un({},t,a))}catch(t){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),t),"".concat(e).concat(n).concat(r)}return delete a.defaultValue,e}for(a.applyPostProcessor=!1,delete a.defaultValue;n=this.nestingRegexp.exec(e);){var l=[],c=!1;if(n[0].includes(this.formatSeparator)&&!/{.*}/.test(n[1])){var d=n[1].split(this.formatSeparator).map((function(e){return e.trim()}));n[1]=d.shift(),l=d,c=!0}if((i=t(s.call(this,n[1].trim(),a),a))&&n[0]===e&&"string"!=typeof i)return i;"string"!=typeof i&&(i=ri(i)),i||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),i=""),c&&(i=l.reduce((function(e,t){return r.format(e,t,o.lng,o)}),i.trim())),e=e.replace(n[0],i),this.regexp.lastIndex=0}return e}}]),e}();function Ti(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}var Ci=function(e){function t(e,n,i){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Wn(this,t),r=Qn(this,Yn(t).call(this)),fi&&ni.call(Zn(r)),r.backend=e,r.store=n,r.services=i,r.languageUtils=i.languageUtils,r.options=o,r.logger=ti.create("backendConnector"),r.state={},r.queue=[],r.backend&&r.backend.init&&r.backend.init(i,o.backend,o),r}return Jn(t,ni),Xn(t,[{key:"queueLoad",value:function(e,t,n,i){var r=this,o=[],a=[],s=[],l=[];return e.forEach((function(e){var i=!0;t.forEach((function(t){var s="".concat(e,"|").concat(t);!n.reload&&r.store.hasResourceBundle(e,t)?r.state[s]=2:r.state[s]<0||(1===r.state[s]?a.indexOf(s)<0&&a.push(s):(r.state[s]=1,i=!1,a.indexOf(s)<0&&a.push(s),o.indexOf(s)<0&&o.push(s),l.indexOf(t)<0&&l.push(t)))})),i||s.push(e)})),(o.length||a.length)&&this.queue.push({pending:a,loaded:{},errors:[],callback:i}),{toLoad:o,pending:a,toLoadLanguages:s,toLoadNamespaces:l}}},{key:"loaded",value:function(e,t,n){var i=e.split("|"),r=i[0],o=i[1];t&&this.emit("failedLoading",r,o,t),n&&this.store.addResourceBundle(r,o,n),this.state[e]=t?-1:2;var a={};this.queue.forEach((function(n){li(n.loaded,[r],o),Ti(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach((function(e){a[e]||(a[e]=[]),n.loaded[e].length&&n.loaded[e].forEach((function(t){a[e].indexOf(t)<0&&a[e].push(t)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",a),this.queue=this.queue.filter((function(e){return!e.done}))}},{key:"read",value:function(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,a=arguments.length>5?arguments[5]:void 0;return e.length?this.backend[n](e,t,(function(s,l){s&&l&&r<5?setTimeout((function(){i.read.call(i,e,t,n,r+1,2*o,a)}),o):a(s,l)})):a(null,{})}},{key:"prepareLoading",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var o=this.queueLoad(e,t,i,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach((function(e){n.loadOne(e)}))}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=e.split("|"),r=i[0],o=i[1];this.read(r,o,"read",void 0,void 0,(function(i,a){i&&t.logger.warn("".concat(n,"loading namespace ").concat(o," for language ").concat(r," failed"),i),!i&&a&&t.logger.log("".concat(n,"loaded namespace ").concat(o," for language ").concat(r),a),t.loaded(e,i,a)}))}},{key:"saveMissing",value:function(e,t,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)?this.logger.warn('did not save key "'.concat(n,'" as the namespace "').concat(t,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):null!=n&&""!==n&&(this.backend&&this.backend.create&&this.backend.create(e,t,n,i,null,Un({},o,{isUpdate:r})),e&&e[0]&&this.store.addResource(e[0],t,n,i))}}]),t}();function Li(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===Vn(e[1])&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"===Vn(e[2])||"object"===Vn(e[3])){var n=e[3]||e[2];Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:function(e,t,n,i){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!1}}}function Ri(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&(e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e.supportedLngs=e.whitelist),e.nonExplicitWhitelist&&(e.nonExplicitSupportedLngs=e.nonExplicitWhitelist),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Oi(){}var zi=new(function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(Wn(this,t),e=Qn(this,Yn(t).call(this)),fi&&ni.call(Zn(e)),e.options=Ri(n),e.services={},e.logger=ti,e.modules={external:[]},i&&!e.isInitialized&&!n.isClone){if(!e.options.initImmediate)return e.init(n,i),Qn(e,Zn(e));setTimeout((function(){e.init(n,i)}),0)}return e}return Jn(t,ni),Xn(t,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;function i(e){return e?"function"==typeof e?new e:e:null}if("function"==typeof t&&(n=t,t={}),t.whitelist&&!t.supportedLngs&&this.logger.deprecate("whitelist",'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),t.nonExplicitWhitelist&&!t.nonExplicitSupportedLngs&&this.logger.deprecate("whitelist",'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),this.options=Un({},Li(),this.options,Ri(t)),this.format=this.options.interpolation.format,n||(n=Oi),!this.options.isClone){this.modules.logger?ti.init(i(this.modules.logger),this.options):ti.init(null,this.options);var r=new _i(this.options);this.store=new mi(this.options.resources,this.options);var o=this.services;o.logger=ti,o.resourceStore=this.store,o.languageUtils=r,o.pluralResolver=new Si(r,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),o.interpolator=new Ei(this.options),o.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},o.backendConnector=new Ci(i(this.modules.backend),o.resourceStore,o,this.options),o.backendConnector.on("*",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];e.emit.apply(e,[t].concat(i))})),this.modules.languageDetector&&(o.languageDetector=i(this.modules.languageDetector),o.languageDetector.init(o,this.options.detection,this.options)),this.modules.i18nFormat&&(o.i18nFormat=i(this.modules.i18nFormat),o.i18nFormat.init&&o.i18nFormat.init(this)),this.translator=new yi(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];e.emit.apply(e,[t].concat(i))})),this.modules.external.forEach((function(t){t.init&&t.init(e)}))}this.modules.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments),e}}));var a=ii(),s=function(){e.changeLanguage(e.options.lng,(function(t,i){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),a.resolve(i),n(t,i)}))};return this.options.resources||!this.options.initImmediate?s():setTimeout(s,0),a}},{key:"loadResources",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Oi,i="string"==typeof e?e:this.language;if("function"==typeof e&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&"cimode"===i.toLowerCase())return n();var r=[],o=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach((function(e){r.indexOf(e)<0&&r.push(e)}))};if(i)o(i);else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((function(e){return o(e)}));this.options.preload&&this.options.preload.forEach((function(e){return o(e)})),this.services.backendConnector.load(r,this.options.ns,n)}else n(null)}},{key:"reloadResources",value:function(e,t,n){var i=ii();return e||(e=this.languages),t||(t=this.options.ns),n||(n=Oi),this.services.backendConnector.reload(e,t,(function(e){i.resolve(),n(e)})),i}},{key:"use",value:function(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&bi.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"changeLanguage",value:function(e,t){var n=this;this.isLanguageChangingTo=e;var i=ii();this.emit("languageChanging",e);var r=function(e,r){r?(n.language=r,n.languages=n.services.languageUtils.toResolveHierarchy(r),n.translator.changeLanguage(r),n.isLanguageChangingTo=void 0,n.emit("languageChanged",r),n.logger.log("languageChanged",r)):n.isLanguageChangingTo=void 0,i.resolve((function(){return n.t.apply(n,arguments)})),t&&t(e,(function(){return n.t.apply(n,arguments)}))},o=function(e){var t="string"==typeof e?e:n.services.languageUtils.getBestMatchFromCodes(e);t&&(n.language||(n.language=t,n.languages=n.services.languageUtils.toResolveHierarchy(t)),n.translator.language||n.translator.changeLanguage(t),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(t)),n.loadResources(t,(function(e){r(e,t)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),i}},{key:"getFixedT",value:function(e,t){var n=this,i=function e(t,i){var r;if("object"!==Vn(i)){for(var o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];r=n.options.overloadTranslationOptionHandler([t,i].concat(a))}else r=Un({},i);return r.lng=r.lng||e.lng,r.lngs=r.lngs||e.lngs,r.ns=r.ns||e.ns,n.t(t,r)};return"string"==typeof e?i.lng=e:i.lngs=e,i.ns=t,i}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var i=this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;var a=function(e,n){var i=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===i||2===i};if(n.precheck){var s=n.precheck(this,a);if(void 0!==s)return s}return!!this.hasResourceBundle(i,e)||(!this.services.backendConnector.backend||!(!a(i,e)||r&&!a(o,e)))}},{key:"loadNamespaces",value:function(e,t){var n=this,i=ii();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)})),this.loadResources((function(e){i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=ii();"string"==typeof e&&(e=[e]);var i=this.options.preload||[],r=e.filter((function(e){return i.indexOf(e)<0}));return r.length?(this.options.preload=i.concat(r),this.loadResources((function(e){n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){return e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language),e?["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr":"rtl"}},{key:"createInstance",value:function(){return new t(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}},{key:"cloneInstance",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Oi,r=Un({},this.options,n,{isClone:!0}),o=new t(r);return["store","services","language"].forEach((function(t){o[t]=e[t]})),o.services=Un({},this.services),o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o.translator=new yi(o.services,o.options),o.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];o.emit.apply(o,[e].concat(n))})),o.init(r,i),o.translator.options=o.options,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}}]),t}()),Pi=[],Ii=Pi.forEach,Bi=Pi.slice;function $i(e){return Ii.call(Bi.call(arguments,1),(function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])})),e}var Mi,Fi=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Di=function(e,t,n){var i=n||{};i.path=i.path||"/";var r=e+"="+encodeURIComponent(t);if(i.maxAge>0){var o=i.maxAge-0;if(isNaN(o))throw new Error("maxAge should be a Number");r+="; Max-Age="+Math.floor(o)}if(i.domain){if(!Fi.test(i.domain))throw new TypeError("option domain is invalid");r+="; Domain="+i.domain}if(i.path){if(!Fi.test(i.path))throw new TypeError("option path is invalid");r+="; Path="+i.path}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");r+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(r+="; HttpOnly"),i.secure&&(r+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r},Ni={create:function(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+60*n*1e3)),i&&(r.domain=i),document.cookie=Di(e,encodeURIComponent(t),r)},read:function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var r=n[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},remove:function(e){this.create(e,"",-1)}},Hi={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!=typeof document){var n=Ni.read(e.lookupCookie);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!=typeof document&&Ni.create(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},ji={name:"querystring",lookup:function(e){var t;if("undefined"!=typeof window)for(var n=window.location.search.substring(1).split("&"),i=0;i<n.length;i++){var r=n[i].indexOf("=");if(r>0)n[i].substring(0,r)===e.lookupQuerystring&&(t=n[i].substring(r+1))}return t}};try{Mi="undefined"!==window&&null!==window.localStorage;var Vi="i18next.translate.boo";window.localStorage.setItem(Vi,"foo"),window.localStorage.removeItem(Vi)}catch(e){Mi=!1}var qi,Ui={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&Mi){var n=window.localStorage.getItem(e.lookupLocalStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&Mi&&window.localStorage.setItem(t.lookupLocalStorage,e)}};try{qi="undefined"!==window&&null!==window.sessionStorage;var Wi="i18next.translate.boo";window.sessionStorage.setItem(Wi,"foo"),window.sessionStorage.removeItem(Wi)}catch(e){qi=!1}var Gi={name:"sessionStorage",lookup:function(e){var t;if(e.lookupsessionStorage&&qi){var n=window.sessionStorage.getItem(e.lookupsessionStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupsessionStorage&&qi&&window.sessionStorage.setItem(t.lookupsessionStorage,e)}},Xi={name:"navigator",lookup:function(e){var t=[];if("undefined"!=typeof navigator){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)t.push(navigator.languages[n]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},Zi={name:"htmlTag",lookup:function(e){var t,n=e.htmlTag||("undefined"!=typeof document?document.documentElement:null);return n&&"function"==typeof n.getAttribute&&(t=n.getAttribute("lang")),t}},Qi={name:"path",lookup:function(e){var t;if("undefined"!=typeof window){var n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(n instanceof Array)if("number"==typeof e.lookupFromPathIndex){if("string"!=typeof n[e.lookupFromPathIndex])return;t=n[e.lookupFromPathIndex].replace("/","")}else t=n[0].replace("/","")}return t}},Yi={name:"subdomain",lookup:function(e){var t;if("undefined"!=typeof window){var n=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);n instanceof Array&&(t="number"==typeof e.lookupFromSubdomainIndex?n[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):n[0].replace("http://","").replace("https://","").replace(".",""))}return t}};function Ki(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}}var Ji=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Wn(this,e),this.type="languageDetector",this.detectors={},this.init(t,n)}return Xn(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=$i(t,this.options||{},Ki()),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Hi),this.addDetector(ji),this.addDetector(Ui),this.addDetector(Gi),this.addDetector(Xi),this.addDetector(Zi),this.addDetector(Qi),this.addDetector(Yi)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var n=[];return e.forEach((function(e){if(t.detectors[e]){var i=t.detectors[e].lookup(t.options);i&&"string"==typeof i&&(i=[i]),i&&(n=n.concat(i))}})),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var n=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach((function(t){n.detectors[t]&&n.detectors[t].cacheUserLanguage(e,n.options)})))}}]),e}();Ji.type="languageDetector";var er=[],tr=er.forEach,nr=er.slice;function ir(e){return tr.call(nr.call(arguments,1),(function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])})),e}function rr(e,t){if(t&&"object"===Vn(t)){var n="",i=encodeURIComponent;for(var r in t)n+="&"+i(r)+"="+i(t[r]);if(!n)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+n.slice(1)}return e}function or(e,t,n,i,r){i&&"object"===Vn(i)&&(r||(i._t=new Date),i=rr("",i).slice(1)),t.queryStringParams&&(e=rr(e,t.queryStringParams));try{var o;(o=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(i?"POST":"GET",e,1),t.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!t.withCredentials,i&&o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var a=t.customHeaders;if(a="function"==typeof a?a():a)for(var s in a)o.setRequestHeader(s,a[s]);o.onreadystatechange=function(){o.readyState>3&&n&&n(o.responseText,o)},o.send(i)}catch(e){console&&console.log(e)}}function ar(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:JSON.parse,parsePayload:function(e,t,n){return qn({},t,n||"")},crossDomain:!1,ajax:or}}var sr=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Wn(this,e),this.init(t,n),this.type="backend"}return Xn(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.services=e,this.options=ir(t,this.options||{},ar())}},{key:"readMulti",value:function(e,t,n){var i=this.options.loadPath;"function"==typeof this.options.loadPath&&(i=this.options.loadPath(e,t));var r=this.services.interpolator.interpolate(i,{lng:e.join("+"),ns:t.join("+")});this.loadUrl(r,n)}},{key:"read",value:function(e,t,n){var i=this.options.loadPath;"function"==typeof this.options.loadPath&&(i=this.options.loadPath([e],[t]));var r=this.services.interpolator.interpolate(i,{lng:e,ns:t});this.loadUrl(r,n)}},{key:"loadUrl",value:function(e,t){var n=this;this.options.ajax(e,this.options,(function(i,r){if(r.status>=500&&r.status<600)return t("failed loading "+e,!0);if(r.status>=400&&r.status<500)return t("failed loading "+e,!1);var o,a;try{o=n.options.parse(i,e)}catch(t){a="failed parsing "+e+" to json"}if(a)return t(a,!1);t(null,o)}))}},{key:"create",value:function(e,t,n,i){var r=this;"string"==typeof e&&(e=[e]);var o=this.options.parsePayload(t,n,i);e.forEach((function(e){var n=r.services.interpolator.interpolate(r.options.addPath,{lng:e,ns:t});r.options.ajax(n,r.options,(function(e,t){}),o)}))}}]),e}();sr.type="backend";var lr=[],cr=lr.forEach,dr=lr.slice;function pr(e){return cr.call(dr.call(arguments,1),(function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])})),e}function ur(e){return e?"function"==typeof e?new e:e:null}function hr(){return{}}var gr=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Wn(this,e),this.backends=[],this.type="backend",this.init(t,n)}return Xn(e,[{key:"init",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;this.services=e,this.options=pr(n,this.options||{},hr()),this.options.backends&&this.options.backends.forEach((function(n,r){t.backends[r]=t.backends[r]||ur(n),t.backends[r].init(e,t.options.backendOptions[r],i)}))}},{key:"read",value:function(e,t,n){var i=this,r=this.backends.length,o=function o(s){if(s>=r)return n(new Error("non of the backend loaded data;",!0));var l=i.backends[s];l.read?l.read(e,t,(function(e,t){!e&&t&&Object.keys(t).length>-1?(n(null,t,s),a(s-1,t)):o(s+1)})):o(s+1)},a=function n(r,o){if(!(r<0)){var a=i.backends[r];a.save?(a.save(e,t,o),n(r-1,o)):n(r-1,o)}};o(0)}},{key:"create",value:function(e,t,n,i){this.backends.forEach((function(r){r.create&&r.create(e,t,n,i)}))}}]),e}();let fr;gr.type="backend";class mr extends(P(L)){static get properties(){return z(z({},super.properties),{},{appRoot:{type:String,attribute:"app-root"},template:{type:String},endpoint:{type:String,reflect:!0},locales:{type:String},localeFallbackNs:{type:String,attribute:"locale-fallback-ns"},language:{type:String},requireLanguage:{type:Boolean,attribute:"require-language"},unresolved:{type:Boolean,reflect:!0}})}constructor(){super(),this.unresolved=!0,this.endpoint=".",this._localeFallbacks=[],fr?this.disabled=!0:fr=this}set localeFallbackNs(e){e.split(/\s+/).forEach(e=>this._localeFallbacks.push(e))}disconnectedCallback(){super.disconnectedCallback(),fr===this&&(fr=null)}connectedCallback(){if(super.connectedCallback(),this.disabled)return;this.locales&&-1===this._localeFallbacks.indexOf("app")&&this._localeFallbacks.push("app"),this._localeFallbacks.push("common");const e=this.getParameter("_target");e&&(this.endpoint=e),this.requireLanguage||this.signalReady("pb-page-ready",{endpoint:this.endpoint,template:this.template})}firstUpdated(){if(super.firstUpdated(),this.disabled)return;const e=I("../i18n/")+"{{ns}}/{{lng}}.json";console.log("<pb-page> Loading locales. common: %s; additional: %s; namespaces: %o",e,this.locales,this._localeFallbacks);const t=this.locales?[sr,sr]:[sr],n=[{loadPath:e,crossDomain:!0}];this.locales&&n.unshift({loadPath:this.locales,crossDomain:!0});const i={fallbackLng:"en",defaultNS:"common",ns:["common"],debug:!1,load:"languageOnly",detection:{lookupQuerystring:"lang"},backend:{backends:t,backendOptions:n}};if(this.language&&(i.lng=this.language),this._localeFallbacks.length>0){const e=this._localeFallbacks.slice();i.defaultNS=e[0],i.fallbackNS=e.slice(1),i.ns=e}console.log("<pb-page> i18next options: %o",i),zi.use(Ji).use(gr).init(i).then(e=>{r(e),this._updateI18n(e),this.signalReady("pb-i18n-update",{t:e,language:zi.language}),this.requireLanguage&&this.signalReady("pb-page-ready",{endpoint:this.endpoint,template:this.template,language:zi.language})}),this.subscribeTo("pb-i18n-language",e=>{const{language:t}=e.detail;zi.changeLanguage(t).then(e=>{this._updateI18n(e),this.emitTo("pb-i18n-update",{t:e,language:zi.language},[])},[])}),this.unresolved=!1,console.log("<pb-page> endpoint: %s; trigger window resize",this.endpoint),this.querySelectorAll("app-header").forEach(e=>e._notifyLayoutChanged())}_updateI18n(e){this.querySelectorAll("[data-i18n]").forEach(t=>{const n=t.getAttribute("data-i18n"),i=/(?:\[(.*)\])?([^;]+)/g;let r=i.exec(n);for(;r;){const o=e(r[2]);r[1]?t.setAttribute(r[1],o):t.innerHTML=o,r=i.exec(n)}})}render(){return R`<slot></slot>`}static get styles(){return O`
        :host {
            display: block;
        }
        `}}customElements.define("pb-page",mr);class br extends(P(L)){static get properties(){return z(z({},super.properties),{},{total:{type:Number,reflect:!0},start:{type:Number,reflect:!0},perPage:{type:Number,attribute:"per-page"},foundLabel:{type:String,attribute:"found-label"},page:{type:Number},pageCount:{type:Number,attribute:"page-count"},range:{type:Number},pages:{type:Array}})}constructor(){super(),this.total=0,this.start=1,this.perPage=10,this.page=1,this.pageCount=10,this.range=5,this.pages=[],this.foundLabel="browse.items"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-results-received",this._refresh.bind(this))}render(){return R`
            <span @click="${this._handleFirst}"><iron-icon icon="first-page"></iron-icon></span>
            ${this.pages.map((e,t)=>R`<span class="${e.class}" @click="${()=>this._handleClick(e,t)}">${e.label}</span>`)}
            <span @click="${this._handleLast}"><iron-icon icon="last-page"></iron-icon></span>

            <span class="found">${i(this.foundLabel,{count:this.total})}</span>
        `}static get styles(){return O`
            :host([total="0"]) {
                display: none;
            }

            :host {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            span {
                padding: 4px 8px;
                cursor: pointer;
            }

            .active {
                background-color: var(--pb-color-primary);
                color: var(--pb-color-inverse);
                border-radius: 50%;
                min-width: 1em;
                width: 1em;
                line-height: 1em;
                padding: .4em;
                text-align: center;

                box-shadow:  0 3px 4px 0 rgba(0, 0, 0, 0.14),
                             0 1px 8px 0 rgba(0, 0, 0, 0.12),
                             0 3px 3px -2px rgba(0, 0, 0, 0.4);
            }

            .found {
                padding-left: 20px;
            }
        `}_update(e,t){if(!t||!e)return;this.pageCount=Math.ceil(t/this.perPage),this.page=Math.ceil(e/this.perPage);let n=Math.max(this.page-Math.ceil(this.range/2)+1,1),i=Math.min(n+this.range-1,this.pageCount);n=Math.max(i-this.range+1,1),console.log("<pb-paginate> start: %d, total: %d, perPage: %d, pageCount: %s, page: %d, lower: %d, upper: %d",e,t,this.perPage,this.pageCount,this.page,n,i);const r=[];for(let e=n;e<=i;e++)r.push({label:e,class:e===this.page?"active":""});this.pages=r}_refresh(e){this.start=e.detail.start,this.total=e.detail.count,this._update(this.start,this.total)}_handleClick(e,t){this.start=(this.pages[t].label-1)*this.perPage+1,this.emitTo("pb-load",{params:{start:this.start,"per-page":this.perPage,page:t}})}_handleFirst(e){this.start=1,this.emitTo("pb-load",{params:{start:1,"per-page":this.perPage,page:0}})}_handleLast(e){this.start=(this.pageCount-1)*this.perPage+1,this.emitTo("pb-load",{params:{start:this.start,"per-page":this.perPage,page:this.pageCount-1}})}}customElements.define("pb-paginate",br);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[{properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(e){return(this._clampValue(e)-this.min)/(this.max-this.min)},_clampValue:function(e){return Math.min(this.max,Math.max(this.min,this._calcStep(e)))},_calcStep:function(e){if(e=parseFloat(e),!this.step)return e;var t=Math.round((e-this.min)/this.step);return this.step<1?t/(1/this.step)+this.min:t*this.step+this.min},_validateValue:function(){var e=this._clampValue(this.value);return this.value=this.oldValue=isNaN(e)?this.oldValue:e,this.value!==e},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}}],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(e){this.toggleClass("indeterminate",e,this.$.primaryProgress)},_transformProgress:function(e,t){var n="scaleX("+t/100+")";e.style.transform=e.style.webkitTransform=n},_mainRatioChanged:function(e){this._transformProgress(this.$.primaryProgress,e)},_progressChanged:function(e,t,n,i,r){e=this._clampValue(e),t=this._clampValue(t);var o=100*this._calcRatio(e),a=100*this._calcRatio(t);this._setSecondaryRatio(o),this._transformProgress(this.$.secondaryProgress,o),this._transformProgress(this.$.primaryProgress,a),this.secondaryProgress=e,r?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",t),this.setAttribute("aria-valuemin",n),this.setAttribute("aria-valuemax",i)},_disabledChanged:function(e){this.setAttribute("aria-disabled",e?"true":"false")},_hideSecondaryProgress:function(e){return 0===e}});class vr extends(P(L)){static get properties(){return z(z({},super.properties),{},{_disabled:{type:Boolean}})}constructor(){super(),this._disabled=!0}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",this._startUpdate.bind(this)),this.subscribeTo("pb-end-update",this._endUpdate.bind(this))}render(){return this.style.visibility=this._disabled?"hidden":"visible",R`
            <paper-progress id="progress" indeterminate ?disabled="${this._disabled}"></paper-progress>
        `}static get styles(){return O`
            :host {
                display: block;
                visibility: hidden;
            }

            paper-progress {
                width: 100%;
            }
        `}_startUpdate(){this._disabled=!1}_endUpdate(){this._disabled=!0}}customElements.define("pb-progress",vr);class yr extends(P(L)){static get properties(){return z(z({},super.properties),{},{action:{type:String},value:{type:String},placeHolder:{type:String,attribute:"place-holder"},redirect:{type:Boolean},currentDoc:{type:String,attribute:"current-doc"},submitOnLoad:{type:Boolean,attribute:"submit-on-load"}})}constructor(){super(),this.value="",this.redirect=!1,this.submitOnLoad=!1,this.placeHolder="search.placeholder"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-search-resubmit",this._doSearch.bind(this))}firstUpdated(){this.shadowRoot.getElementById("autocomplete").addEventListener("autocomplete-change",this._autocomplete.bind(this));if(this.shadowRoot.getElementById("ironform").addEventListener("iron-form-response",e=>e.detail.completes.then(e=>this.emitTo("pb-search",e.parseResponse()))),this.submitOnLoad){const e=this.getParameters();this.emitTo("pb-load",{url:this.action,params:e})}this.addEventListener("click",e=>{"searchButton"===e.target.slot&&this._doSearch(),"resetButton"===e.target.slot&&this._reset()})}render(){return R`
            <custom-style>
                <style>
                    :host {
                        --suggestions-item: {
                            color: var(--pb-search-suggestions-color, black);
                        };
                        --suggestions-wrapper: {
                            background: var(--pb-search-suggestions-background, white);
                        }
                    }
                </style>
            </custom-style>
            <iron-form id="ironform" allow-redirect="${this.redirect}">
                <form id="searchPageForm" method="get" action="${this.action}" accept="text/html">
                    <slot name="beforeInput"></slot>
                    <paper-input id="search" type="search" name="query" @keyup="${this._handleEnter}" label="${i(this.placeHolder)}"
                        value="${this.value}" always-float-label>
                        <iron-icon icon="search" @click="${this._doSearch}" slot="prefix"></iron-icon>
                    </paper-input>
                    <paper-autocomplete-suggestions id="autocomplete" for="search" source="${this._suggestions}" remote-source></paper-autocomplete-suggestions>
                    <slot></slot>
                    <input type="hidden" name="doc">
                    
                    <slot name="searchButton"></slot>
                    <slot name="resetButton"></slot>
                    
                </form>
            </iron-form>
            <iron-ajax
                id="autocompleteLoader"
                url="${this.getEndpoint()}/modules/autocomplete.xql"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._updateSuggestions}"></iron-ajax>
        `}static get styles(){return O`
            :host {
                --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
                --paper-input-container-input-color: var(--pb-search-input-color, var(--pb-color-primary, #000000));
                --paper-input-container-focus-color: var(--pb-search-focus-color, var(--paper-grey-500, #303030));
            }
            a{
                padding:1rem;
                color:var(--pb-reset-color);
            }
            .buttons{
                margin-top:1rem;
            }
        `}_doSearch(){const e=this.shadowRoot.getElementById("ironform").serializeForm();e.start=1,this.setParameters(e),this.redirect?window.location.href=this.action+TeiPublisher.url.search:(this.pushHistory("search"),this.emitTo("pb-load",{url:this.action,params:this.getParameters()}))}_handleEnter(e){0!=this.shadowRoot.getElementById("search").value.length&&13==e.keyCode&&this._doSearch()}_doSubmit(){this.shadowRoot.getElementById("ironform").submit()}_reset(){this.shadowRoot.getElementById("ironform").reset()}_autocomplete(e){const t=this.shadowRoot.getElementById("ironform").serializeForm(),n=this.shadowRoot.getElementById("autocompleteLoader");n.params=t,n.generateRequest()}_updateSuggestions(){const e=this.shadowRoot.getElementById("autocomplete"),t=this.shadowRoot.getElementById("autocompleteLoader");t.lastResponse&&e.suggestions(t.lastResponse)}}customElements.define("pb-search",yr);class wr extends(P(L)){static get properties(){return z(z({},super.properties),{},{name:{type:String},selector:{type:String},action:{type:String},on:{type:String},off:{type:String},default:{type:String},propertiesOn:{type:Object,attribute:"properties-on"},propertiesOff:{type:Object,attribute:"properties-off"},checked:{type:Boolean},initFromView:{type:Boolean,attribute:"init-from-view"}})}constructor(){super(),this.default="on",this.action="toggle",this.propertiesOn={},this.propertiesOff={},this.initFromView=!1}render(){return R`
            <paper-checkbox id="checkbox" @change="${this._changed}" .checked="${this.checked}"><slot></slot></paper-checkbox>
        `}connectedCallback(){if(super.connectedCallback(),this.initFromView){const e=this.subscribeTo("pb-update",t=>{"infiniteScroll"===this.name?this.checked=t.detail.infiniteScroll===this.propertiesOn[this.name]:"view"!==this.name&&"odd"!==this.name&&"xpath"!==this.name||(this.checked=t.detail.data[this.name]===this.propertiesOn[this.name]),e.forEach(e=>document.removeEventListener("pb-update",e))});this.waitForChannel(()=>{const e={selectors:[{selector:this.selector,command:this.action,state:this.checked}],properties:{},action:"init"};this.emitTo("pb-toggle",e),this.signalReady()})}else{const e=this.getParameter(this.name);this.checked=void 0!==e?"on"===e:"on"===this.default,this.waitForChannel(()=>{const e={selectors:[{selector:this.selector,command:this.action,state:this.checked}],properties:this.checked?this.propertiesOn:this.propertiesOff,action:"init"};this.emitTo("pb-toggle",e),this.signalReady()})}}attributeChangedCallback(e,t,n){switch(super.attributeChangedCallback(e,t,n),e){case"on":this.propertiesOn[this.name]=n;break;case"off":this.propertiesOff[this.name]=n}}_changed(){this.checked=this.shadowRoot.getElementById("checkbox").checked,this.name&&(this.setParameter(this.name,this.checked?"on":"off"),this.pushHistory("toggle feature "+this.name));const e={selectors:[{selector:this.selector,command:this.action,state:this.checked}],properties:this.checked?this.propertiesOn:this.propertiesOff,action:"refresh"};this.emitTo("pb-toggle",e)}}customElements.define("pb-toggle-feature",wr),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[E]});class _r extends(P(L)){static get properties(){return z(z({},super.properties),{},{name:{type:String},label:{type:String},selected:{type:Number},items:{type:Array}})}constructor(){super(),this.initializing=!0,this.items=[],this.label="document.selectFeature"}connectedCallback(){super.connectedCallback();const e=this.getParameter(this.name);void 0!==e?this.selected=parseInt(e,10):this.items.length>0&&(this.selected=0),this.waitForChannel(()=>{this.selected&&this.selected<this.items.length&&this._emit("init",this.selected),this.initializing=!1,this.signalReady()})}firstUpdated(){super.firstUpdated(),this.shadowRoot.getElementById("menu").addEventListener("selected-item-changed",this._selectionChanged.bind(this))}_selectionChanged(){const e=this.shadowRoot.getElementById("list").selected;this.setParameter(this.name,e),this.pushHistory("toggle feature "+this.name),console.log("<pb-select-feature> Setting features: %o",this.items[e]),this._emit("refresh",e)}_emit(e,t){const n=this.items[t],i={properties:n.properties||{},selectors:n.selectors,action:e};this.emitTo("pb-toggle",i)}render(){return R`
            <paper-dropdown-menu id="menu" label="${i(this.label)}">
                <paper-listbox id="list" slot="dropdown-content" selected="${this.selected}">
                    ${this.items.map(e=>R`<paper-item>${e.name}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>
        `}static get styles(){return O`
            :host {
                display: block;
            }
        `}}customElements.define("pb-select-feature",_r);var xr={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},kr={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Ar=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Sr={CSS:{},springs:{}};function Er(e,t,n){return Math.min(Math.max(e,t),n)}function Tr(e,t){return e.indexOf(t)>-1}function Cr(e,t){return e.apply(null,t)}var Lr={arr:function(e){return Array.isArray(e)},obj:function(e){return Tr(Object.prototype.toString.call(e),"Object")},pth:function(e){return Lr.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||Lr.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return Lr.hex(e)||Lr.rgb(e)||Lr.hsl(e)},key:function(e){return!xr.hasOwnProperty(e)&&!kr.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function Rr(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function Or(e,t){var n=Rr(e),i=Er(Lr.und(n[0])?1:n[0],.1,100),r=Er(Lr.und(n[1])?100:n[1],.1,100),o=Er(Lr.und(n[2])?10:n[2],.1,100),a=Er(Lr.und(n[3])?0:n[3],.1,100),s=Math.sqrt(r/i),l=o/(2*Math.sqrt(r*i)),c=l<1?s*Math.sqrt(1-l*l):0,d=1,p=l<1?(l*s-a)/c:-a+s;function u(e){var n=t?t*e/1e3:e;return n=l<1?Math.exp(-n*l*s)*(d*Math.cos(c*n)+p*Math.sin(c*n)):(d+p*n)*Math.exp(-n*s),0===e||1===e?e:1-n}function h(){var t=Sr.springs[e];if(t)return t;for(var n=1/6,i=0,r=0;;)if(1===u(i+=n)){if(++r>=16)break}else r=0;var o=i*n*1e3;return Sr.springs[e]=o,o}return t?u:h}function zr(e){return void 0===e&&(e=10),function(t){return Math.ceil(Er(t,1e-6,1)*e)*(1/e)}}var Pr,Ir,Br=function(){var e=11,t=1/(e-1);function n(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function r(e){return 3*e}function o(e,t,o){return((n(t,o)*e+i(t,o))*e+r(t))*e}function a(e,t,o){return 3*n(t,o)*e*e+2*i(t,o)*e+r(t)}function s(e,t,n,i,r){var a,s,l=0;do{(a=o(s=t+(n-t)/2,i,r)-e)>0?n=s:t=s}while(Math.abs(a)>1e-7&&++l<10);return s}function l(e,t,n,i){for(var r=0;r<4;++r){var s=a(t,n,i);if(0===s)return t;t-=(o(t,n,i)-e)/s}return t}function c(n,i,r,c){if(0<=n&&n<=1&&0<=r&&r<=1){var d=new Float32Array(e);if(n!==i||r!==c)for(var p=0;p<e;++p)d[p]=o(p*t,n,r);return function(e){return n===i&&r===c||0===e||1===e?e:o(u(e),i,c)}}function u(i){for(var o=0,c=1,p=e-1;c!==p&&d[c]<=i;++c)o+=t;--c;var u=o+(i-d[c])/(d[c+1]-d[c])*t,h=a(u,n,r);return h>=.001?l(i,u,n,r):0===h?u:s(i,o,o+t,n,r)}}return c}(),$r=(Pr={linear:function(){return function(e){return e}}},Ir={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=Er(e,1,10),i=Er(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-i/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/i)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){Ir[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(Ir).forEach((function(e){var t=Ir[e];Pr["easeIn"+e]=t,Pr["easeOut"+e]=function(e,n){return function(i){return 1-t(e,n)(1-i)}},Pr["easeInOut"+e]=function(e,n){return function(i){return i<.5?t(e,n)(2*i)/2:1-t(e,n)(-2*i+2)/2}}})),Pr);function Mr(e,t){if(Lr.fnc(e))return e;var n=e.split("(")[0],i=$r[n],r=Rr(e);switch(n){case"spring":return Or(e,t);case"cubicBezier":return Cr(Br,r);case"steps":return Cr(zr,r);default:return Cr(i,r)}}function Fr(e){try{return document.querySelectorAll(e)}catch(e){return}}function Dr(e,t){for(var n=e.length,i=arguments.length>=2?arguments[1]:void 0,r=[],o=0;o<n;o++)if(o in e){var a=e[o];t.call(i,a,o,e)&&r.push(a)}return r}function Nr(e){return e.reduce((function(e,t){return e.concat(Lr.arr(t)?Nr(t):t)}),[])}function Hr(e){return Lr.arr(e)?e:(Lr.str(e)&&(e=Fr(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function jr(e,t){return e.some((function(e){return e===t}))}function Vr(e){var t={};for(var n in e)t[n]=e[n];return t}function qr(e,t){var n=Vr(e);for(var i in e)n[i]=t.hasOwnProperty(i)?t[i]:e[i];return n}function Ur(e,t){var n=Vr(e);for(var i in t)n[i]=Lr.und(e[i])?t[i]:e[i];return n}function Wr(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function Gr(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,(function(e,t,n,i){return t+t+n+n+i+i})),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(i[1],16)+","+parseInt(i[2],16)+","+parseInt(i[3],16)+",1)"}function Xr(e){var t,n,i,r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,s=parseInt(r[3],10)/100,l=r[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==a)t=n=i=s;else{var d=s<.5?s*(1+a):s+a-s*a,p=2*s-d;t=c(p,d,o+1/3),n=c(p,d,o),i=c(p,d,o-1/3)}return"rgba("+255*t+","+255*n+","+255*i+","+l+")"}function Zr(e){return Lr.rgb(e)?Wr(e):Lr.hex(e)?Gr(e):Lr.hsl(e)?Xr(e):void 0}function Qr(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function Yr(e){return Tr(e,"translate")||"perspective"===e?"px":Tr(e,"rotate")||Tr(e,"skew")?"deg":void 0}function Kr(e,t){return Lr.fnc(e)?e(t.target,t.id,t.total):e}function Jr(e,t){return e.getAttribute(t)}function eo(e,t,n){if(jr([n,"deg","rad","turn"],Qr(t)))return t;var i=Sr.CSS[t+n];if(!Lr.und(i))return i;var r=100,o=document.createElement(e.tagName),a=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=r+n;var s=r/o.offsetWidth;a.removeChild(o);var l=s*parseFloat(t);return Sr.CSS[t+n]=l,l}function to(e,t,n){if(t in e.style){var i=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=e.style[t]||getComputedStyle(e).getPropertyValue(i)||"0";return n?eo(e,r,n):r}}function no(e,t){return Lr.dom(e)&&!Lr.inp(e)&&(Jr(e,t)||Lr.svg(e)&&e[t])?"attribute":Lr.dom(e)&&jr(Ar,t)?"transform":Lr.dom(e)&&"transform"!==t&&to(e,t)?"css":null!=e[t]?"object":void 0}function io(e){if(Lr.dom(e)){for(var t,n=e.style.transform||"",i=/(\w+)\(([^)]*)\)/g,r=new Map;t=i.exec(n);)r.set(t[1],t[2]);return r}}function ro(e,t,n,i){var r=Tr(t,"scale")?1:0+Yr(t),o=io(e).get(t)||r;return n&&(n.transforms.list.set(t,o),n.transforms.last=t),i?eo(e,o,i):o}function oo(e,t,n,i){switch(no(e,t)){case"transform":return ro(e,t,i,n);case"css":return to(e,t,n);case"attribute":return Jr(e,t);default:return e[t]||0}}function ao(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var i=Qr(e)||0,r=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return r+o+i;case"-":return r-o+i;case"*":return r*o+i}}function so(e,t){if(Lr.col(e))return Zr(e);if(/\s/g.test(e))return e;var n=Qr(e),i=n?e.substr(0,e.length-n.length):e;return t?i+t:i}function lo(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function co(e){return 2*Math.PI*Jr(e,"r")}function po(e){return 2*Jr(e,"width")+2*Jr(e,"height")}function uo(e){return lo({x:Jr(e,"x1"),y:Jr(e,"y1")},{x:Jr(e,"x2"),y:Jr(e,"y2")})}function ho(e){for(var t,n=e.points,i=0,r=0;r<n.numberOfItems;r++){var o=n.getItem(r);r>0&&(i+=lo(t,o)),t=o}return i}function go(e){var t=e.points;return ho(e)+lo(t.getItem(t.numberOfItems-1),t.getItem(0))}function fo(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return co(e);case"rect":return po(e);case"line":return uo(e);case"polyline":return ho(e);case"polygon":return go(e)}}function mo(e){var t=fo(e);return e.setAttribute("stroke-dasharray",t),t}function bo(e){for(var t=e.parentNode;Lr.svg(t)&&Lr.svg(t.parentNode);)t=t.parentNode;return t}function vo(e,t){var n=t||{},i=n.el||bo(e),r=i.getBoundingClientRect(),o=Jr(i,"viewBox"),a=r.width,s=r.height,l=n.viewBox||(o?o.split(" "):[0,0,a,s]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:a/l[2],h:s/l[3]}}function yo(e,t){var n=Lr.str(e)?Fr(e)[0]:e,i=t||100;return function(e){return{property:e,el:n,svg:vo(n),totalLength:fo(n)*(i/100)}}}function wo(e,t){function n(n){void 0===n&&(n=0);var i=t+n>=1?t+n:0;return e.el.getPointAtLength(i)}var i=vo(e.el,e.svg),r=n(),o=n(-1),a=n(1);switch(e.property){case"x":return(r.x-i.x)*i.w;case"y":return(r.y-i.y)*i.h;case"angle":return 180*Math.atan2(a.y-o.y,a.x-o.x)/Math.PI}}function _o(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=so(Lr.pth(e)?e.totalLength:e,t)+"";return{original:i,numbers:i.match(n)?i.match(n).map(Number):[0],strings:Lr.str(e)||t?i.split(n):[]}}function xo(e){return Dr(e?Nr(Lr.arr(e)?e.map(Hr):Hr(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function ko(e){var t=xo(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:io(e)}}}))}function Ao(e,t){var n=Vr(t);if(/^spring/.test(n.easing)&&(n.duration=Or(n.easing)),Lr.arr(e)){var i=e.length;2===i&&!Lr.obj(e[0])?e={value:e}:Lr.fnc(t.duration)||(n.duration=t.duration/i)}var r=Lr.arr(e)?e:[e];return r.map((function(e,n){var i=Lr.obj(e)&&!Lr.pth(e)?e:{value:e};return Lr.und(i.delay)&&(i.delay=n?0:t.delay),Lr.und(i.endDelay)&&(i.endDelay=n===r.length-1?t.endDelay:0),i})).map((function(e){return Ur(e,n)}))}function So(e){for(var t=Dr(Nr(e.map((function(e){return Object.keys(e)}))),(function(e){return Lr.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},i=function(i){var r=t[i];n[r]=e.map((function(e){var t={};for(var n in e)Lr.key(n)?n==r&&(t.value=e[n]):t[n]=e[n];return t}))},r=0;r<t.length;r++)i(r);return n}function Eo(e,t){var n=[],i=t.keyframes;for(var r in i&&(t=Ur(So(i),t)),t)Lr.key(r)&&n.push({name:r,tweens:Ao(t[r],e)});return n}function To(e,t){var n={};for(var i in e){var r=Kr(e[i],t);Lr.arr(r)&&1===(r=r.map((function(e){return Kr(e,t)}))).length&&(r=r[0]),n[i]=r}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function Co(e,t){var n;return e.tweens.map((function(i){var r=To(i,t),o=r.value,a=Lr.arr(o)?o[1]:o,s=Qr(a),l=oo(t.target,e.name,s,t),c=n?n.to.original:l,d=Lr.arr(o)?o[0]:c,p=Qr(d)||Qr(l),u=s||p;return Lr.und(a)&&(a=c),r.from=_o(d,u),r.to=_o(ao(a,d),u),r.start=n?n.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=Mr(r.easing,r.duration),r.isPath=Lr.pth(o),r.isColor=Lr.col(r.from.original),r.isColor&&(r.round=1),n=r,r}))}var Lo={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,i,r){if(i.list.set(t,n),t===i.last||r){var o="";i.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function Ro(e,t){ko(e).forEach((function(e){for(var n in t){var i=Kr(t[n],e),r=e.target,o=Qr(i),a=oo(r,n,o,e),s=ao(so(i,o||Qr(a)),a),l=no(r,n);Lo[l](r,n,s,e.transforms,!0)}}))}function Oo(e,t){var n=no(e.target,t.name);if(n){var i=Co(t,e),r=i[i.length-1];return{type:n,property:t.name,animatable:e,tweens:i,duration:r.end,delay:i[0].delay,endDelay:r.endDelay}}}function zo(e,t){return Dr(Nr(e.map((function(e){return t.map((function(t){return Oo(e,t)}))}))),(function(e){return!Lr.und(e)}))}function Po(e,t){var n=e.length,i=function(e){return e.timelineOffset?e.timelineOffset:0},r={};return r.duration=n?Math.max.apply(Math,e.map((function(e){return i(e)+e.duration}))):t.duration,r.delay=n?Math.min.apply(Math,e.map((function(e){return i(e)+e.delay}))):t.delay,r.endDelay=n?r.duration-Math.max.apply(Math,e.map((function(e){return i(e)+e.duration-e.endDelay}))):t.endDelay,r}var Io=0;function Bo(e){var t=qr(xr,e),n=qr(kr,e),i=Eo(n,e),r=ko(e.targets),o=zo(r,i),a=Po(o,n),s=Io;return Io++,Ur(t,{id:s,children:[],animatables:r,animations:o,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}var $o,Mo=[],Fo=[],Do=function(){function e(){$o=requestAnimationFrame(t)}function t(t){var n=Mo.length;if(n){for(var i=0;i<n;){var r=Mo[i];if(r.paused){var o=Mo.indexOf(r);o>-1&&(Mo.splice(o,1),n=Mo.length)}else r.tick(t);i++}e()}else $o=cancelAnimationFrame($o)}return e}();function No(){document.hidden?(Mo.forEach((function(e){return e.pause()})),Fo=Mo.slice(0),Ho.running=Mo=[]):Fo.forEach((function(e){return e.play()}))}function Ho(e){void 0===e&&(e={});var t,n=0,i=0,r=0,o=0,a=null;function s(e){var t=window.Promise&&new Promise((function(e){return a=e}));return e.finished=t,t}var l=Bo(e);s(l);function c(){var e=l.direction;"alternate"!==e&&(l.direction="normal"!==e?"normal":"reverse"),l.reversed=!l.reversed,t.forEach((function(e){return e.reversed=l.reversed}))}function d(e){return l.reversed?l.duration-e:e}function p(){n=0,i=d(l.currentTime)*(1/Ho.speed)}function u(e,t){t&&t.seek(e-t.timelineOffset)}function h(e){if(l.reversePlayback)for(var n=o;n--;)u(e,t[n]);else for(var i=0;i<o;i++)u(e,t[i])}function g(e){for(var t=0,n=l.animations,i=n.length;t<i;){var r=n[t],o=r.animatable,a=r.tweens,s=a.length-1,c=a[s];s&&(c=Dr(a,(function(t){return e<t.end}))[0]||c);for(var d=Er(e-c.start-c.delay,0,c.duration)/c.duration,p=isNaN(d)?1:c.easing(d),u=c.to.strings,h=c.round,g=[],f=c.to.numbers.length,m=void 0,b=0;b<f;b++){var v=void 0,y=c.to.numbers[b],w=c.from.numbers[b]||0;v=c.isPath?wo(c.value,p*y):w+p*(y-w),h&&(c.isColor&&b>2||(v=Math.round(v*h)/h)),g.push(v)}var _=u.length;if(_){m=u[0];for(var x=0;x<_;x++){u[x];var k=u[x+1],A=g[x];isNaN(A)||(m+=k?A+k:A+" ")}}else m=g[0];Lo[r.type](o.target,r.property,m,o.transforms),r.currentValue=m,t++}}function f(e){l[e]&&!l.passThrough&&l[e](l)}function m(){l.remaining&&!0!==l.remaining&&l.remaining--}function b(e){var o=l.duration,p=l.delay,u=o-l.endDelay,b=d(e);l.progress=Er(b/o*100,0,100),l.reversePlayback=b<l.currentTime,t&&h(b),!l.began&&l.currentTime>0&&(l.began=!0,f("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,f("loopBegin")),b<=p&&0!==l.currentTime&&g(0),(b>=u&&l.currentTime!==o||!o)&&g(o),b>p&&b<u?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,f("changeBegin")),f("change"),g(b)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,f("changeComplete")),l.currentTime=Er(b,0,o),l.began&&f("update"),e>=o&&(i=0,m(),l.remaining?(n=r,f("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&c()):(l.paused=!0,l.completed||(l.completed=!0,f("loopComplete"),f("complete"),!l.passThrough&&"Promise"in window&&(a(),s(l)))))}return l.reset=function(){var e=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===e,l.remaining=l.loop,t=l.children;for(var n=o=t.length;n--;)l.children[n].reset();(l.reversed&&!0!==l.loop||"alternate"===e&&1===l.loop)&&l.remaining++,g(l.reversed?l.duration:0)},l.set=function(e,t){return Ro(e,t),l},l.tick=function(e){r=e,n||(n=r),b((r+(i-n))*Ho.speed)},l.seek=function(e){b(d(e))},l.pause=function(){l.paused=!0,p()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Mo.push(l),p(),$o||Do())},l.reverse=function(){c(),l.completed=!l.reversed,p()},l.restart=function(){l.reset(),l.play()},l.reset(),l.autoplay&&l.play(),l}function jo(e,t){for(var n=t.length;n--;)jr(e,t[n].animatable.target)&&t.splice(n,1)}function Vo(e){for(var t=xo(e),n=Mo.length;n--;){var i=Mo[n],r=i.animations,o=i.children;jo(t,r);for(var a=o.length;a--;){var s=o[a],l=s.animations;jo(t,l),l.length||s.children.length||o.splice(a,1)}r.length||o.length||i.pause()}}function qo(e,t){void 0===t&&(t={});var n=t.direction||"normal",i=t.easing?Mr(t.easing):null,r=t.grid,o=t.axis,a=t.from||0,s="first"===a,l="center"===a,c="last"===a,d=Lr.arr(e),p=d?parseFloat(e[0]):parseFloat(e),u=d?parseFloat(e[1]):0,h=Qr(d?e[1]:e)||0,g=t.start||0+(d?p:0),f=[],m=0;return function(e,t,b){if(s&&(a=0),l&&(a=(b-1)/2),c&&(a=b-1),!f.length){for(var v=0;v<b;v++){if(r){var y=l?(r[0]-1)/2:a%r[0],w=l?(r[1]-1)/2:Math.floor(a/r[0]),_=y-v%r[0],x=w-Math.floor(v/r[0]),k=Math.sqrt(_*_+x*x);"x"===o&&(k=-_),"y"===o&&(k=-x),f.push(k)}else f.push(Math.abs(a-v));m=Math.max.apply(Math,f)}i&&(f=f.map((function(e){return i(e/m)*m}))),"reverse"===n&&(f=f.map((function(e){return o?e<0?-1*e:-e:Math.abs(m-e)})))}return g+(d?(u-p)/m:p)*(Math.round(100*f[t])/100)+h}}function Uo(e){void 0===e&&(e={});var t=Ho(e);return t.duration=0,t.add=function(n,i){var r=Mo.indexOf(t),o=t.children;function a(e){e.passThrough=!0}r>-1&&Mo.splice(r,1);for(var s=0;s<o.length;s++)a(o[s]);var l=Ur(n,qr(kr,e));l.targets=l.targets||e.targets;var c=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=Lr.und(i)?c:ao(i,c),a(t),t.seek(l.timelineOffset);var d=Ho(l);a(d),o.push(d);var p=Po(o,e);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}"undefined"!=typeof document&&document.addEventListener("visibilitychange",No),Ho.version="3.2.0",Ho.speed=1,Ho.running=Mo,Ho.remove=Vo,Ho.get=oo,Ho.set=Ro,Ho.convertPx=eo,Ho.path=yo,Ho.setDashoffset=mo,Ho.stagger=qo,Ho.timeline=Uo,Ho.easing=Mr,Ho.penner=$r,Ho.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};class Wo extends(P(L)){static get properties(){return z({src:{type:String},odd:{type:String,reflect:!0},view:{type:String,reflect:!0},nodeId:{type:String,reflect:!0,attribute:"node-id"},xmlId:{type:Array,reflect:!0,attribute:"xml-id"},xpath:{type:String,reflect:!0},map:{type:String},onUpdate:{type:Boolean,attribute:"on-update"},notFound:{type:String,attribute:"not-found"},url:{type:String},appendFootnotes:{type:Boolean,attribute:"append-footnotes"},highlight:{type:Boolean,reflect:!0},columnSeparator:{type:String,attribute:"column-separator"},direction:{type:String},loadCss:{type:String,attribute:"load-css"},fixLinks:{type:Boolean,attribute:"fix-links"},useLanguage:{type:Boolean,attribute:"use-language"},animation:{type:Boolean},infiniteScroll:{type:Boolean,attribute:"infinite-scroll"},infiniteScrollMax:{type:Number,attribute:"infinite-scroll-max"},waitFor:{type:String,attribute:"wait-for"},disableHistory:{type:Boolean,attribute:"disable-history"},_features:{type:Object},_content:{type:Node,attribute:!1},_column1:{type:Node,attribute:!1},_column2:{type:Node,attribute:!1},_footnotes:{type:Node,attribute:!1},_style:{type:Node,attribute:!1}},super.properties)}constructor(){super(),this.src=null,this.url="modules/lib/components.xql",this.onUpdate=!1,this.appendFootnotes=!1,this.notFound="the server did not return any content",this.animation=!1,this.direction="ltr",this.highlight=!1,this.infiniteScrollMax=10,this.disableHistory=!1,this._features={},this._selector=new Map,this._chunks=[],this._scrollTarget=null}attributeChangedCallback(e,t,n){switch(super.attributeChangedCallback(e,t,n),e){case"src":this._updateSource(n,t)}}connectedCallback(){if(super.connectedCallback(),this.infiniteScroll&&(this.columnSeparator=null,this.animation=!1,this._content=document.createElement("div"),this._content.className="infinite-content"),!this.disableHistory){const e=this.getParameter("id");e&&!this.xmlId&&(this.xmlId=e);const t=this.getParameter("action");t&&"search"===t&&(this.highlight=!0);const n=this.getParameter("root");"single"===this.view?this.nodeId=null:n&&!this.nodeId&&(this.nodeId=n)}this.waitFor||(this.waitFor="pb-toggle-feature,pb-select-feature,pb-navigation"),this.subscribeTo("pb-navigate",e=>{e.detail.source&&e.detail.source===this||this.navigate(e.detail.direction)}),this.subscribeTo("pb-refresh",this._refresh.bind(this)),this.subscribeTo("pb-toggle",e=>{this.toggleFeature(e)}),this.subscribeTo("pb-zoom",e=>{this.zoom(e.detail.direction)}),this.subscribeTo("pb-i18n-update",e=>{const t=this._features.language&&this._features.language!==e.detail.language;this._features.language=e.detail.language,this.useLanguage&&t&&this._refresh()},[]),this.signalReady(),this.onUpdate&&this.subscribeTo("pb-update",this._refresh.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._scrollObserver&&this._scrollObserver.disconnect()}firstUpdated(){this.infiniteScroll&&(this._topObserver=this.shadowRoot.getElementById("top-observer"),this._bottomObserver=this.shadowRoot.getElementById("bottom-observer"),this._bottomObserver.style.display="none",this._topObserver.style.display="none",this._scrollObserver=new IntersectionObserver(e=>{this._content&&e.forEach(e=>{if(e.isIntersecting)if("bottom-observer"===e.target.id){const e=this._content.lastElementChild;if(e){const t=e.getAttribute("data-next");t&&!this._content.querySelector(`[data-root="${t}"]`)&&(console.log("<pb-view> Loading next page: %s",t),this._checkChunks("forward"),this._load(t,"forward"))}}else{const e=this._content.firstElementChild;if(e){const t=e.getAttribute("data-previous");t&&!this._content.querySelector(`[data-root="${t}"]`)&&(this._checkChunks("backward"),this._load(t,"backward"))}}})})),this.onUpdate||Wo.waitOnce("pb-page-ready",e=>{e&&e.language&&(this._features.language=e.language),this.wait(()=>this._refresh())})}getOdd(){return this.odd||this.getDocument().odd||"teipublisher"}getView(){return this.view||this.getDocument().view||"single"}forceUpdate(){this._load(this.nodeId)}animate(){this.animation&&("forward"===this.lastDirection?Ho({targets:this.shadowRoot.getElementById("view"),opacity:[0,1],translateX:[1e3,0],duration:300,easing:"linear"}):Ho({targets:this.shadowRoot.getElementById("view"),opacity:[0,1],translateX:[-1e3,0],duration:300,easing:"linear"}))}_refresh(e){if(e&&e.detail){if(e.detail.path){this.getDocument().path=e.detail.path}e.detail.id&&(this.xmlId=e.detail.id),this.odd=e.detail.odd||this.odd,void 0!==e.detail.columnSeparator&&(this.columnSeparator=e.detail.columnSeparator),this.view=e.detail.view||this.view,null===e.detail.position?this.nodeId=null:this.nodeId=e.detail.position||this.nodeId,this._scrollTarget=e.detail.hash}this._updateStyles(),this.infiniteScroll&&this._clear(),this._load(this.nodeId)}_load(e,t){if(!this.getDocument().path)return void console.log("No path");if(this._loading)return;this._loading=!0;const n=this.getParameters(e);t&&(n._dir=t),this._doLoad(n)}_doLoad(e){this.emitTo("pb-start-update",e),console.log("<pb-view> Loading view with params %o",e),this.infiniteScroll||this._clear(),this._scrollObserver&&(this._bottomObserver&&this._scrollObserver.unobserve(this._bottomObserver),this._topObserver&&this._scrollObserver.unobserve(this._topObserver));const t=this.shadowRoot.getElementById("loadContent");t.params=e,t.generateRequest()}_clear(){this.infiniteScroll?(this._content=document.createElement("div"),this._content.className="infinite-content"):this._content=null,this._column1=null,this._column2=null,this._footnotes=null,this._chunks=[]}_handleError(){this.emitTo("pb-end-update"),this._clear();const e=this.shadowRoot.getElementById("loadContent");let t;const{response:n}=e.lastError;t=n?n.message:'<pb-i18n key="dialogs.serverError"></pb-i18n>';const i=`\n            <p><pb-i18n key="dialogs.error"></pb-i18n>: ${t}</p>\n        `;this._replaceContent({content:i})}_handleContent(){const e=this.shadowRoot.getElementById("loadContent"),t=e.lastResponse;if(t){if(t.error)return this.notFound&&(this._content=this.notFound),void this.emitTo("pb-end-update",null);this._replaceContent(t,e.params._dir),this.animate(),this._scrollTarget&&this.updateComplete.then(()=>{const e=this.shadowRoot.querySelector(`[node-id="${this._scrollTarget}"]`);e&&e.scrollIntoView(),this._scrollTarget=null}),this.next=t.next,this.previous=t.previous,this.nodeId=t.root,this.switchView=t.switchView,this.disableHistory||!this.xmlId||this.map||(this.setParameter("root",this.nodeId),this.pushHistory("Navigate to xml:id")),this.xmlId=null,this.updateComplete.then(()=>{const n=this.shadowRoot.getElementById("view");this._applyToggles(n),this._fixLinks(n);const i={data:t,root:n,params:e.params,id:this.xmlId,position:this.nodeId};this.emitTo("pb-update",i),this._scroll()}),this.emitTo("pb-end-update",null)}else console.error("<pb-view> No response received")}_replaceContent(e,t){const n=document.createDocumentFragment(),i=document.createElement("div");if(n.appendChild(i),i.innerHTML=e.content,this.columnSeparator)this._replaceColumns(i),this._loading=!1;else if(this.infiniteScroll){let n;switch(i.className="scroll-fragment",i.setAttribute("data-root",e.root),e.next&&i.setAttribute("data-next",e.next),e.previous&&i.setAttribute("data-previous",e.previous),t){case"backward":n=this._content.firstElementChild,this._chunks.unshift(i),this.updateComplete.then(()=>{n.scrollIntoView(!0),this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver)}),this._content.insertBefore(i,n);break;default:this.updateComplete.then(()=>{this._loading=!1,this._checkVisibility(),this._scrollObserver.observe(this._bottomObserver),this._scrollObserver.observe(this._topObserver)}),this._chunks.push(i),this._content.appendChild(i)}}else this._content=i,this._loading=!1;if(this.appendFootnotes){const t=document.createElement("div");e.footnotes&&(t.innerHTML=e.footnotes),this._footnotes=t}return this._initFootnotes(this._footnotes),i}_checkVisibility(){const e=this._chunks[this._chunks.length-1].hasAttribute("data-next");this._bottomObserver.style.display=e?"":"none";const t=this._chunks[0].hasAttribute("data-previous");this._topObserver.style.display=t?"":"none"}_replaceColumns(e){let t;if(this.columnSeparator){const n=e.querySelectorAll(this.columnSeparator);n.length>0&&(t=n[n.length-1])}if(t){const n=this._getFragmentBefore(e,t),i=this._getFragmentAfter(e,t);"ltr"===this.direction?(this._column1=n,this._column2=i):(this._column2=n,this._column1=i)}else this._content=e}_scroll(){const{hash:e}=this.getUrl();if(e){const t=this.shadowRoot.getElementById(e.substring(1));console.log("hash target: %o",t),t&&t.scrollIntoView({block:"center",inline:"nearest"})}}_scrollToElement(e,t){const n=this.shadowRoot.getElementById(t.hash.substring(1));n&&(e.preventDefault(),console.log("<pb-view> Scrolling to element %s",n.id),n.scrollIntoView({block:"center",inline:"nearest"}))}_updateStyles(){const e=[];let t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",`${this.getEndpoint()}/transform/${this.getOdd()}.css`),e.push(t),this.loadCss&&(t=document.createElement("link"),t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",`${this.getEndpoint()}/${this.loadCss}`),e.push(t)),this._style=e}_fixLinks(e){if(this.fixLinks){const t=this.getDocument(),n=new URL(t.path,"."===this.getEndpoint()?window.location.href:this.getEndpoint()+"/");e.querySelectorAll("img").forEach(e=>{const t=e.getAttribute("src"),i=new URL(t,n);e.src=i}),e.querySelectorAll("a").forEach(e=>{const t=e.getAttribute("href");if(t===e.hash)e.addEventListener("click",t=>this._scrollToElement(t,e));else{const i=new URL(t,n);e.href=i}})}else e.querySelectorAll("a").forEach(e=>{e.getAttribute("href")===e.hash&&e.addEventListener("click",t=>this._scrollToElement(t,e))})}_initFootnotes(e){e&&e.querySelectorAll(".note, .fn-back").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=this.shadowRoot.getElementById("content").querySelector(e.hash);n&&n.scrollIntoView()})})}_getParameters(){const e=[];this.querySelectorAll("pb-param").forEach((function(t){e["user."+t.getAttribute("name")]=t.getAttribute("value")}));for(const[t,n]of Object.entries(this._features))e["user."+t]=n;return e}getParameters(e){e=e||this.nodeId;const t=this.getDocument(),n=this._getParameters();return n.doc=t.path,n.odd=this.getOdd()+".odd",n.view=this.getView(),e&&(n.root=e),this.xpath&&(n.xpath=this.xpath),this.xmlId&&(n.id=this.xmlId),this.highlight&&(n.highlight="yes"),this.map&&(n.map=this.map),n}_applyToggles(e){0!==this._selector.size&&this._selector.forEach((t,n)=>{e.querySelectorAll(n).forEach(e=>{const n=t.command||"toggle";e.command&&e.command(n,t.state),t.state?e.classList.add(n):e.classList.remove(n)})})}goto(e){this._load(e)}gotoId(e){this.xmlId=e,this._load()}navigate(e){this.lastDirection=e,"backward"===e?this.previous&&(this.disableHistory||this.map||(this.setParameter("root",this.previous),this.setParameter("id"),this.pushHistory("Navigate backward")),this._load(this.previous,e)):this.next&&(this.disableHistory||this.map||(this.setParameter("root",this.next),this.setParameter("id"),this.pushHistory("Navigate forward")),this._load(this.next,e))}_checkChunks(e){if(this.infiniteScroll&&0!==this.infiniteScrollMax){if(this._chunks.length===this.infiniteScrollMax)switch(e){case"forward":this._content.removeChild(this._chunks.shift());break;default:this._content.removeChild(this._chunks.pop())}this.emitTo("pb-navigate",{direction:e,source:this})}}zoom(e){const t=this.shadowRoot.getElementById("view"),n=window.getComputedStyle(t).getPropertyValue("font-size"),i=parseInt(n.replace(/^(\d+)px/,"$1"));t.style.fontSize="in"===e?i+1+"px":i-1+"px"}toggleFeature(e){const t=()=>{const e=this.shadowRoot.getElementById("view");this._applyToggles(e)},n=e.detail.properties;for(const[e,t]of Object.entries(n))switch(e){case"odd":case"view":case"columnSeparator":case"xpath":case"nodeId":break;default:this._features[e]=t}n&&(n.odd&&(this.odd=n.odd),n.view&&(this.view=n.view,"single"===this.view?this.nodeId=null:this.nodeId=this.switchView),n.xpath&&(this.xpath=n.xpath),n.hasOwnProperty("columnSeparator")&&(this.columnSeparator=n.columnSeparator)),e.detail.selectors&&e.detail.selectors.forEach(e=>{this._selector.set(e.selector,{state:e.state,command:e.command||"toggle"})}),"refresh"===e.detail.action&&(Object.keys(n).length>0?this._load():t())}_getFragmentBefore(e,t){const n=document.createRange();return n.setStartBefore(e),n.setEndBefore(t),n.cloneContents()}_getFragmentAfter(e,t){const n=document.createRange();return n.setStartBefore(t),n.setEndAfter(e),n.cloneContents()}_updateSource(e,t){void 0!==t&&e!==t&&(this.xpath=null,this.odd=null,this.xmlId=null,this.nodeId=null)}static get styles(){return O`
            :host {
                display: block;
                background: transparent;
                scrollbar-width: none; /* Firefox 64 */
                -ms-overflow-style: none;
            }

            :host::-webkit-scrollbar { 
                width: 0 !important;
                display: none; 
            }

            .columns {
                display: grid;
                grid-template-columns: calc(50% - var(--pb-view-column-gap, 10px) / 2) calc(50% - var(--pb-view-column-gap, 10px) / 2);
                grid-column-gap: var(--pb-view-column-gap, 10px);
            }

            .margin-note {
                display: none;
            }

            @media (min-width: 769px) {
                .content.margin-right {
                    margin-right: 200px;
                }

                .margin-note {
                    background: rgba(153, 153, 153, 0.2);
                    display: block;
                    font-size: small;
                    margin-right: -200px;
                    margin-bottom: 5px;
                    padding: 5px 0;
                    float: right;
                    clear: both;
                    width: 180px;
                }

                .margin-note .n {
                  color: #777777;
                }
            }

            a[rel=footnote] {
                font-size: var(--pb-footnote-font-size, var(--pb-content-font-size, 75%));
                font-family: var(--pb-footnote-font-family, --pb-content-font-family);
                vertical-align: super;
                color: var(--pb-footnote-color, var(--pb-color-primary, #333333));
                text-decoration: none;
                padding: var(--pb-footnote-padding, 0 0 0 .25em);
            }

            .list dt {
                float: left;
            }

            .footnote .fn-number {
                float: left;
                font-size: var(--pb-footnote-font-size, var(--pb-content-font-size, 75%));
            }

            .observer {
                display: block;
                width: 100%;
                height: var(--pb-view-loader-height, 16px);
                font-family: var(--pb-view-loader-font, --pb-base-font);
                color: var(--pb-view-loader-color, black);
                background: var(--pb-view-loader-background, #909090);
                background-image: var(--pb-view-loader-background-image, repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px));
                animation-name: loader;
                animation-timing-function: linear;
                animation-duration: 2s;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
            }

            @keyframes loader {
                0% {
                    background-position: 3rem 0;
                }
                
                100% {
                    background-position: 0 0;
                }
            }

            .scroll-fragment {
                animation: fadeIn ease 500ms;
            }

            @keyframes fadeIn {
                0% {opacity:0;}
                100% {opacity:1;}
            }
        `}render(){return R`
            <div id="view" part="content">
                ${this._style}
                ${this.infiniteScroll?R`<div id="top-observer" class="observer"></div>`:null}
                <div class="columns">
                    <div id="column1">${this._column1}</div>
                    <div id="column2">${this._column2}</div>
                </div>
                <div id="content">${this._content}</div>
                ${this.infiniteScroll?R`<div id="bottom-observer" class="observer"></div>`:null}
                <div id="footnotes">${this._footnotes}</div>
            </div>
            <paper-dialog id="errorDialog">
                <h2>${i("dialogs.error")}</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${i("dialogs.close")}
                    </paper-button>
                </div>
            </paper-dialog>
            <iron-ajax
                id="loadContent"
                url="${this.getEndpoint()}/${this.url}"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
      `}}customElements.define("pb-view",Wo);class Go extends(P(L)){static get properties(){return z(z({},super.properties),{},{icon:{type:String},direction:{type:String}})}constructor(){super(),this.icon="icons:zoom-in",this.direction="in"}connectedCallback(){super.connectedCallback()}_handleClick(){this.emitTo("pb-zoom",{direction:this.direction})}render(){return R`
            <paper-icon-button icon="${this.icon}" @click="${this._handleClick}"></paper-icon-button>
        `}}customElements.define("pb-zoom",Go);class Xo extends(P(L)){static get properties(){return z(z({},super.properties),{},{toggle:{type:String},opened:{type:Boolean,reflect:!0},maxWidth:{type:String,attribute:"max-width"}})}constructor(){super(),this.opened=!1}connectedCallback(){super.connectedCallback();const e=document.getElementById(this.toggle);e&&e.addEventListener("click",this._toggle.bind(this)),document.body.addEventListener("click",t=>{t.target!==e&&this.opened&&(this.opened=!1)}),this.addEventListener("click",e=>e.stopPropagation()),this.subscribeTo("pb-refresh",this._close.bind(this))}firstUpdated(){this.maxWidth?(void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()):this.classList.add("overlay")}_handleResize(){const e=document.getElementById(this.toggle),t=`(max-width: ${this.maxWidth})`;window.matchMedia(t).matches?(console.log("<pb-drawer> entering overlay mode"),this.classList.add("overlay"),e&&(e.style.display="")):(console.log("<pb-drawer> leaving overlay mode"),this.classList.remove("overlay"),e&&(e.style.display="none"))}_toggle(e){e.preventDefault(),this.opened?this.opened=!1:(this.opened=!0,this.emitTo("pb-load"))}_close(){this.opened=!1}render(){return R`
            <div><slot></slot></div>
        `}static get styles(){return O`
            :host {
                display: block;
            }

            :host(.overlay) {
                position: fixed;
                width: 0;
                left: -448px;
                bottom: 0;
                height: 100vh;
                z-index: 1000;
                overflow: auto;
                display: block;
                transition: .5s;
            }

            :host([opened]) {
                left: 0;
                width: 448px;
                transition: .5s;
            }

            div {
                padding: 10px 10px;
            }
        `}}customElements.define("pb-drawer",Xo);class Zo extends L{static get properties(){return z(z({},super.properties),{},{query:{type:String},match:{type:Boolean,reflect:!0}})}constructor(){super(),this.query="(max-width:460px)",this.match=!1}firstUpdated(){void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleResize()}):window.addEventListener("resize",()=>{this._handleResize()}),this._handleResize()}_handleResize(){let{query:e}=this;/\(.*\)$/.test(e)||(e=`(${e})`),window.matchMedia(e).matches?!1===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!0},composed:!0,bubbles:!0})),this.match=!0):!0===this.match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!1},composed:!0,bubbles:!0})),this.match=!1)}render(){return R`
            ${this.match?R`<slot></slot>`:null}
        `}static get styles(){return O`
            :host {
                display: inherit;
            }
        `}}customElements.define("pb-media-query",Zo);class Qo extends Dn{firstUpdated(){this.shadowRoot.getElementById("ironform").addEventListener("iron-form-presubmit",e=>{e.preventDefault(),this._submit()})}render(){return R`
            <iron-form id="ironform">
                <form action="" accept="text/html" method="get">
                    <slot></slot>
                </form>
            </iron-form>

            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                with-credentials
                @response="${this._handleContent}"
                @error="${this._handleError}"></iron-ajax>
            <paper-dialog id="errorDialog">
                <h2>Error</h2>
                <paper-dialog-scrollable></paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                        Close
                    </paper-button>
                </div>
            </paper-dialog>
        `}static get styles(){return O`
            :host {
                display: block;
            }
        `}submit(){this.shadowRoot.getElementById("ironform").submit()}_submit(){const e=this.shadowRoot.getElementById("ironform").serializeForm();this.emitTo("pb-search-resubmit",{params:e})}_parseHeaders(e){}_onLoad(e){super._onLoad(e),this.dispatchEvent(new CustomEvent("pb-custom-form-loaded",{detail:e}))}}customElements.define("pb-custom-form",Qo),
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
function(e){var t;if("function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),!t){var n=window.Cookies,i=window.Cookies=e();i.noConflict=function(){return window.Cookies=n,i}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function n(i){function r(){}function o(t,n,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},r.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=i.write?i.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var l in o)o[l]&&(s+="; "+l,!0!==o[l]&&(s+="="+o[l].split(";")[0]));return document.cookie=t+"="+n+s}}function a(e,n){if("undefined"!=typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],a=0;a<o.length;a++){var s=o[a].split("="),l=s.slice(1).join("=");n||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=t(s[0]);if(l=(i.read||i)(l,c)||t(l),n)try{l=JSON.parse(l)}catch(e){}if(r[c]=l,e===c)break}catch(e){}}return e?r[e]:r}}return r.set=o,r.get=function(e){return a(e,!1)},r.getJSON=function(e){return a(e,!0)},r.remove=function(t,n){o(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}return n((function(){}))}));class Yo extends(P(L)){static get properties(){return z(z({},super.properties),{},{src:{type:String},full:{type:Boolean},url:{type:String},type:{type:String},odd:{type:String},dialog:{type:String},title:{type:String},source:{type:Boolean},params:{type:String},_target:{type:String,reflect:!0},_href:{type:String,reflect:!0},_token:{type:String}})}constructor(){super(),this.source=!1,this.full=!1,this._target="_self"}firstUpdated(){this.src&&this.subscribeTo("pb-document",e=>{e.detail.id===this.src&&(this.odd=e.detail.odd)}),this.subscribeTo("pb-refresh",e=>{e.detail.odd&&(this.odd=e.detail.odd,this._href=this._computeURL())}),this._target=this._computeTarget(),this._href=this._computeURL()}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),t)switch(e){case"source":this._target=this._computeTarget();break;case"src":case"type":case"file":case"odd":case"params":case"url":this._href=this._computeURL()}}render(){return R`
            <a id="button" @click="${this._handleClick}" title="${this.title}" target="${this._target}" href="${this._href}"><slot></slot></a>
        `}static get styles(){return O`
            :host {
                display: inline-block;
            }

            a {
                text-decoration: var(--pb-download-text-decoration, none);
                color: var(--pb-download-color);
            }
        `}_computeTarget(){return this.source?"_blank":"_self"}_computeURL(){let e;this._token=797*(new Date).getTime();const t=this.getDocument();if(t){let n;n=this.url?this.url:this.full?`${this.getEndpoint()}/${t.path}`:t.getFileName(),e=`${n}${this.type?"."+this.type:""}?odd=${this.odd?this.odd:t.odd}.odd&cache=no&token=${this._token}`}else e=/^(?:[a-z]+:)?\/\//i.test(this.url)?this.url:`${this.getEndpoint()}/${this.url}`,e=`${e}${this.type?"."+this.type:""}?odd=${this.odd}&cache=no&token='${this._token}`;return this.params&&(e+="&"+this.params),this.source&&(e+="&source=yes"),e}_handleClick(e){if(this.dialog){const e=document.getElementById(this.dialog);e.open();const t=this._token,n=window.setInterval(()=>{Cookies.get("simple.token")===t&&(window.clearInterval(n),Cookies.remove("simple.token"),e.close())})}"_self"===this._target&&(e.preventDefault(),window.location=this._href)}}customElements.define("pb-download",Yo);class Ko extends(P(L)){static get properties(){return z(z({},super.properties),{},{loggedIn:{type:Boolean,attribute:"logged-in",reflect:!0},user:{type:String},password:{type:String},group:{type:String},groups:{type:Array},auto:{type:Boolean},loginLabel:{type:String,reflect:!0,attribute:"login-label"},logoutLabel:{type:String,reflect:!0,attribute:"logout-label"},loginIcon:{type:String,attribute:"login-icon"},logoutIcon:{type:String,attribute:"logout-icon"},_invalid:{type:Boolean},_hasFocus:{type:Boolean}})}constructor(){super(),this.loggedIn=!1,this.loginLabel="login.login",this.logoutLabel="login.as",this.user="",this.groups=[],this.loginIcon="account-circle",this.logoutIcon="supervisor-account",this._hasFocus=!0}firstUpdated(){super.firstUpdated(),this._checkLogin=this.shadowRoot.getElementById("checkLogin"),this._loginDialog=this.shadowRoot.getElementById("loginDialog"),window.addEventListener("blur",()=>{this._hasFocus=!1}),window.addEventListener("focus",()=>{this._hasFocus||(this._hasFocus=!0,this._checkLogin.body=null,this._checkLogin.generateRequest())}),Ko.waitOnce("pb-page-ready",e=>{this._checkLogin.url=e.endpoint+"/login",this._checkLogin.body={user:this.user,password:this.password},this._checkLogin.generateRequest()})}render(){return R`
            <a href="#" @click="${this._show}" title="${this.user}">
                ${this.loggedIn?R`<iron-icon icon="${this.logoutIcon}"></iron-icon> <span class="label">${i(this.logoutLabel,{user:this.user})}</span>`:R`<iron-icon icon="${this.loginIcon}"></iron-icon> <span class="label">${i(this.loginLabel)}</span>`}                
            </a>

            <paper-dialog id="loginDialog">
                <h2>${i("login.login")}</h2>
                <paper-dialog-scrollable>
                    <form action="login">
                        <paper-input id="user" name="user" label="${i("login.user")}" value="${this.user}" autofocus></paper-input>
                        <paper-input id="password" name="password" label="${i("login.password")}" type="password"></paper-input>
                        <input id="logout" type="hidden" name="logout"></input>
                    </form>
                    ${this._invalid?R`
                            <p id="message">${i("login.invalid")}
                            ${this.group?R`(${i("login.requiredGroup",{group:this.group})})`:null}
                            </p>
                        `:null}
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button autofocus @click="${this._confirmLogin}">${i(this.loginLabel)}</paper-button>
                </div>
            </paper-dialog>

            <iron-ajax id="checkLogin" with-credentials
                handle-as="json" @response="${this._handleResponse}"
                content-type="application/x-www-form-urlencoded"
                method="POST"></iron-ajax>
        `}static get styles(){return O`
            :host {
                display: block;
            }

            paper-dialog {
                min-width: 320px;
                max-width: 640px;
                min-height: 128px;
            }

            paper-dialog h2 {
                background-color: #607D8B;
                padding: 16px 8px;
                margin-top: 0;
                color: #F0F0F0;
            }

            a {
                color: var(--pb-login-link-color, --pb-link-color);
                text-decoration: none;
            }

            @media (max-width: 1024px) {
                .label {
                    display: none;
                }
            }

            #message {
                color: var(--paper-red-800);
            }
        `}_show(e){e.preventDefault(),this.loggedIn?(this._checkLogin.body={logout:this.user},this._checkLogin.generateRequest()):this._loginDialog.open()}_confirmLogin(){this.user=this.shadowRoot.getElementById("user").value,this.password=this.shadowRoot.getElementById("password").value,this._checkLogin.body={user:this.user,password:this.password},this._checkLogin.generateRequest()}_handleResponse(){const e=this._checkLogin.lastResponse;e.user&&this._checkGroup(e)?(e.userChanged=!this.loggedIn||this.user!==e.user,this.loggedIn=!0,this.user=e.user,this.groups=e.groups,this._invalid=!1,this._loginDialog.close()):(e.userChanged=this.loggedIn,this.loggedIn=!1,this.password=null,this._loginDialog.opened?this._invalid=!0:this.auto&&this._loginDialog.open()),this.emitTo("pb-login",e)}_checkGroup(e){return!this.group||e.groups&&e.groups.indexOf(this.group)>-1}}customElements.define("pb-login",Ko);class Jo extends(P(L)){static get properties(){return z(z({},super.properties),{},{url:{type:String},title:{type:String},event:{type:String},_message:{type:String}})}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onUpdate.bind(this))}render(){return R`
            <a id="button" @click="${this._handleClick}" title="${this.title}"><slot></slot></a>
            <iron-ajax
                id="loadContent"
                verbose
                handle-as="text"
                method="get"
                with-credentials
                @error="${this._handleError}"
                @response="${this._handleResponse}"></iron-ajax>
            ${this.dialogTemplate}
        `}get dialogTemplate(){return R`
            <paper-dialog id="messageDialog">
                <slot name="title"><h2>Action</h2></slot>
                <paper-dialog-scrollable>${A(this._message)}</paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus="autofocus">
                    ${i("dialogs.close")}
                    </paper-button>
                </div>
            </paper-dialog>
        `}static get styles(){return O`
            :host {
                display: block;
            }
            slot[name="title"] {
                margin: 0;
            }
        `}_handleClick(e){e.preventDefault(),this.trigger()}trigger(){this.shadowRoot.getElementById("loadContent").url=`${this.getEndpoint()}/${this.url}`,this.emitTo("pb-start-update"),this.shadowRoot.getElementById("loadContent").generateRequest()}_handleResponse(){const e=this.shadowRoot.getElementById("loadContent").lastResponse;this._message=e;this.shadowRoot.getElementById("messageDialog").open(),this.emitTo("pb-end-update"),this.event&&this.emitTo(this.event)}_handleError(){const e=this.shadowRoot.getElementById("loadContent").lastError.response,t=(new DOMParser).parseFromString(e,"application/xml").querySelector("message");this._message=t?t.textContent:e;this.shadowRoot.getElementById("messageDialog").open(),this.emitTo("pb-end-update")}_onUpdate(e){this.shadowRoot.getElementById("loadContent").params=e.detail.params}}customElements.define("pb-ajax",Jo);class ea extends(P(L)){static get properties(){return z(z({},super.properties),{},{label:{type:String},selected:{type:String},nolabel:{type:Boolean}})}constructor(){super(),this.label="language"}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",e=>{this.selected=e.detail.language.replace(/^([^-]+).*$/,"$1")},[]),ea.waitOnce("pb-i18n-update",e=>{this.selected=e.language.replace(/^([^-]+).*$/,"$1")})}render(){return R`
            ${this.nolabel?R`
                    <paper-dropdown-menu>
                        <paper-listbox id="menu" slot="dropdown-content" class="dropdown-content" selected="${this.selected}"
                            attr-for-selected="value" @selected-item-changed="${this._changed}">
                            <slot></slot>
                        </paper-listbox>
                    </paper-dropdown-menu>`:R`
                    <paper-dropdown-menu label="${i(this.label)}">
                        <paper-listbox id="menu" slot="dropdown-content" class="dropdown-content" selected="${this.selected}"
                            attr-for-selected="value" @selected-item-changed="${this._changed}">
                            <slot></slot>
                        </paper-listbox>
                    </paper-dropdown-menu>`}
        `}static get styles(){return O`
            :host {
                display: block;
                --paper-input-container-input-color: var(--pb-lang-input-color, black);
                --paper-input-container-color: var(--pb-lang-label-color, --paper-grey-100);
            }
        `}_changed(){const e=this.shadowRoot.getElementById("menu").selected;e!==this.selected&&(console.log("<pb-lang> Language changed to %s",e),this.emitTo("pb-i18n-language",{language:e}),this.selected=e)}}customElements.define("pb-lang",ea);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ta=n`<iron-iconset-svg name="paper-tabs" size="24">
<svg><defs>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(ta.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center;
        @apply --layout-center-justified;
        @apply --layout-flex-auto;

        position: relative;
        padding: 0 12px;
        overflow: hidden;
        cursor: pointer;
        vertical-align: middle;

        @apply --paper-font-common-base;
        @apply --paper-tab;
      }

      :host(:focus) {
        outline: none;
      }

      :host([link]) {
        padding: 0;
      }

      .tab-content {
        height: 100%;
        transform: translateZ(0);
          -webkit-transform: translateZ(0);
        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-flex-auto;
        @apply --paper-tab-content;
      }

      :host(:not(.iron-selected)) > .tab-content {
        opacity: 0.8;

        @apply --paper-tab-content-unselected;
      }

      :host(:focus) .tab-content {
        opacity: 1;
        font-weight: 700;

        @apply --paper-tab-content-focused;
      }

      paper-ripple {
        color: var(--paper-tab-ink, var(--paper-yellow-a100));
      }

      .tab-content > ::slotted(a) {
        @apply --layout-flex-auto;

        height: 100%;
      }
    </style>

    <div class="tab-content">
      <slot></slot>
    </div>
`,is:"paper-tab",behaviors:[o,a,s],properties:{link:{type:Boolean,value:!1,reflectToAttribute:!0}},hostAttributes:{role:"tab"},listeners:{down:"_updateNoink",tap:"_onTap"},attached:function(){this._updateNoink()},get _parentNoink(){var t=e(this).parentNode;return!!t&&!!t.noink},_updateNoink:function(){this.noink=!!this.noink||!!this._parentNoink},_onTap:function(e){if(this.link){var t=this.queryEffectiveChildren("a");if(!t)return;if(e.target===t)return;t.click()}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        @apply --layout;
        @apply --layout-center;

        height: 48px;
        font-size: 14px;
        font-weight: 500;
        overflow: hidden;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        @apply --paper-tabs;
      }

      :host(:dir(rtl)) {
        @apply --layout-horizontal-reverse;
      }

      #tabsContainer {
        position: relative;
        height: 100%;
        white-space: nowrap;
        overflow: hidden;
        @apply --layout-flex-auto;
        @apply --paper-tabs-container;
      }

      #tabsContent {
        height: 100%;
        -moz-flex-basis: auto;
        -ms-flex-basis: auto;
        flex-basis: auto;
        @apply --paper-tabs-content;
      }

      #tabsContent.scrollable {
        position: absolute;
        white-space: nowrap;
      }

      #tabsContent:not(.scrollable),
      #tabsContent.scrollable.fit-container {
        @apply --layout-horizontal;
      }

      #tabsContent.scrollable.fit-container {
        min-width: 100%;
      }

      #tabsContent.scrollable.fit-container > ::slotted(*) {
        /* IE - prevent tabs from compressing when they should scroll. */
        -ms-flex: 1 0 auto;
        -webkit-flex: 1 0 auto;
        flex: 1 0 auto;
      }

      .hidden {
        display: none;
      }

      .not-visible {
        opacity: 0;
        cursor: default;
      }

      paper-icon-button {
        width: 48px;
        height: 48px;
        padding: 12px;
        margin: 0 4px;
      }

      #selectionBar {
        position: absolute;
        height: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));
          -webkit-transform: scale(0);
        transform: scale(0);
          -webkit-transform-origin: left center;
        transform-origin: left center;
          transition: -webkit-transform;
        transition: transform;

        @apply --paper-tabs-selection-bar;
      }

      #selectionBar.align-bottom {
        top: 0;
        bottom: auto;
      }

      #selectionBar.expand {
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
      }

      #selectionBar.contract {
        transition-duration: 0.18s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
      }

      #tabsContent > ::slotted(:not(#selectionBar)) {
        height: 100%;
      }
    </style>

    <paper-icon-button icon="paper-tabs:chevron-left" class$="[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onLeftScrollButtonDown" tabindex="-1"></paper-icon-button>

    <div id="tabsContainer" on-track="_scroll" on-down="_down">
      <div id="tabsContent" class$="[[_computeTabsContentClass(scrollable, fitContainer)]]">
        <div id="selectionBar" class$="[[_computeSelectionBarClass(noBar, alignBottom)]]" on-transitionend="_onBarTransitionEnd"></div>
        <slot></slot>
      </div>
    </div>

    <paper-icon-button icon="paper-tabs:chevron-right" class$="[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]" on-up="_onScrollButtonUp" on-down="_onRightScrollButtonDown" tabindex="-1"></paper-icon-button>
`,is:"paper-tabs",behaviors:[b,[m,{hostAttributes:{role:"menubar"},keyBindings:{left:"_onLeftKey",right:"_onRightKey"},_onUpKey:function(e){this.focusedItem.click(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this.focusedItem.click(),e.detail.keyboardEvent.preventDefault()},get _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_onLeftKey:function(e){this._isRTL?this._focusNext():this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onRightKey:function(e){this._isRTL?this._focusPrevious():this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,"up down left right esc")||this._focusWithKeyboardEvent(e)}}]],properties:{noink:{type:Boolean,value:!1,observer:"_noinkChanged"},noBar:{type:Boolean,value:!1},noSlide:{type:Boolean,value:!1},scrollable:{type:Boolean,value:!1},fitContainer:{type:Boolean,value:!1},disableDrag:{type:Boolean,value:!1},hideScrollButtons:{type:Boolean,value:!1},alignBottom:{type:Boolean,value:!1},selectable:{type:String,value:"paper-tab"},autoselect:{type:Boolean,value:!1},autoselectDelay:{type:Number,value:0},_step:{type:Number,value:10},_holdDelay:{type:Number,value:1},_leftHidden:{type:Boolean,value:!1},_rightHidden:{type:Boolean,value:!1},_previousTab:{type:Object}},hostAttributes:{role:"tablist"},listeners:{"iron-resize":"_onTabSizingChanged","iron-items-changed":"_onTabSizingChanged","iron-select":"_onIronSelect","iron-deselect":"_onIronDeselect"},keyBindings:{"left:keyup right:keyup":"_onArrowKeyup"},created:function(){this._holdJob=null,this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,this._bindDelayedActivationHandler=this._delayedActivationHandler.bind(this),this.addEventListener("blur",this._onBlurCapture.bind(this),!0)},ready:function(){this.setScrollDirection("y",this.$.tabsContainer)},detached:function(){this._cancelPendingActivation()},_noinkChanged:function(t){e(this).querySelectorAll("paper-tab").forEach(t?this._setNoinkAttribute:this._removeNoinkAttribute)},_setNoinkAttribute:function(e){e.setAttribute("noink","")},_removeNoinkAttribute:function(e){e.removeAttribute("noink")},_computeScrollButtonClass:function(e,t,n){return!t||n?"hidden":e?"not-visible":""},_computeTabsContentClass:function(e,t){return e?"scrollable"+(t?" fit-container":""):" fit-container"},_computeSelectionBarClass:function(e,t){return e?"hidden":t?"align-bottom":""},_onTabSizingChanged:function(){this.debounce("_onTabSizingChanged",(function(){this._scroll(),this._tabChanged(this.selectedItem)}),10)},_onIronSelect:function(e){this._tabChanged(e.detail.item,this._previousTab),this._previousTab=e.detail.item,this.cancelDebouncer("tab-changed")},_onIronDeselect:function(e){this.debounce("tab-changed",(function(){this._tabChanged(null,this._previousTab),this._previousTab=null}),1)},_activateHandler:function(){this._cancelPendingActivation(),v._activateHandler.apply(this,arguments)},_scheduleActivation:function(e,t){this._pendingActivationItem=e,this._pendingActivationTimeout=this.async(this._bindDelayedActivationHandler,t)},_delayedActivationHandler:function(){var e=this._pendingActivationItem;this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0,e.fire(this.activateEvent,null,{bubbles:!0,cancelable:!0})},_cancelPendingActivation:function(){void 0!==this._pendingActivationTimeout&&(this.cancelAsync(this._pendingActivationTimeout),this._pendingActivationItem=void 0,this._pendingActivationTimeout=void 0)},_onArrowKeyup:function(e){this.autoselect&&this._scheduleActivation(this.focusedItem,this.autoselectDelay)},_onBlurCapture:function(e){e.target===this._pendingActivationItem&&this._cancelPendingActivation()},get _tabContainerScrollSize(){return Math.max(0,this.$.tabsContainer.scrollWidth-this.$.tabsContainer.offsetWidth)},_scroll:function(e,t){if(this.scrollable){var n=t&&-t.ddx||0;this._affectScroll(n)}},_down:function(e){this.async((function(){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null)}),1)},_affectScroll:function(e){this.$.tabsContainer.scrollLeft+=e;var t=this.$.tabsContainer.scrollLeft;this._leftHidden=0===t,this._rightHidden=t===this._tabContainerScrollSize},_onLeftScrollButtonDown:function(){this._scrollToLeft(),this._holdJob=setInterval(this._scrollToLeft.bind(this),this._holdDelay)},_onRightScrollButtonDown:function(){this._scrollToRight(),this._holdJob=setInterval(this._scrollToRight.bind(this),this._holdDelay)},_onScrollButtonUp:function(){clearInterval(this._holdJob),this._holdJob=null},_scrollToLeft:function(){this._affectScroll(-this._step)},_scrollToRight:function(){this._affectScroll(this._step)},_tabChanged:function(e,t){if(!e)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(0,0);var n=this.$.tabsContent.getBoundingClientRect(),i=n.width,r=e.getBoundingClientRect(),o=r.left-n.left;if(this._pos={width:this._calcPercent(r.width,i),left:this._calcPercent(o,i)},this.noSlide||null==t)return this.$.selectionBar.classList.remove("expand"),this.$.selectionBar.classList.remove("contract"),void this._positionBar(this._pos.width,this._pos.left);var a=t.getBoundingClientRect(),s=this.items.indexOf(t),l=this.items.indexOf(e),c=5;this.$.selectionBar.classList.add("expand");var d=s<l;this._isRTL&&(d=!d),d?this._positionBar(this._calcPercent(r.left+r.width-a.left,i)-c,this._left):this._positionBar(this._calcPercent(a.left+a.width-r.left,i)-c,this._calcPercent(o,i)+c),this.scrollable&&this._scrollToSelectedIfNeeded(r.width,o)},_scrollToSelectedIfNeeded:function(e,t){var n=t-this.$.tabsContainer.scrollLeft;(n<0||(n+=e-this.$.tabsContainer.offsetWidth)>0)&&(this.$.tabsContainer.scrollLeft+=n)},_calcPercent:function(e,t){return 100*e/t},_positionBar:function(e,t){e=e||0,t=t||0,this._width=e,this._left=t,this.transform("translateX("+t+"%) scaleX("+e/100+")",this.$.selectionBar)},_onBarTransitionEnd:function(e){var t=this.$.selectionBar.classList;t.contains("expand")?(t.remove("expand"),t.add("contract"),this._positionBar(this._pos.width,this._pos.left)):t.contains("contract")&&t.remove("contract")}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[b,y],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(e,t){this.async(this.notifyResize)}});class na extends(P(L)){static get properties(){return z(z({},super.properties),{},{selected:{type:Number,reflect:!0},_initial:{type:Number}})}constructor(){super(),this._initial=this.getParameter("tab",0),this.selected=this._initial}_switchTab(e){this.selected=e.detail.value,this.setParameter("tab",this.selected),this.pushHistory("browse",{tab:this.selected})}render(){return R`
            <paper-tabs id="tabs" selected="${this._initial}" @selected-changed="${this._switchTab}">
                <slot name="tab"></slot>
            </paper-tabs>
            <iron-pages selected="${this.selected}">
                <slot name="page"></slot>
            </iron-pages>
        `}static get styles(){return O`
            :host {
                display: block;
            }
        `}}customElements.define("pb-tabs",na),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: var(--app-drawer-content-padding, 120px 0);

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){w(this,(function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")})),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(e){var t=27;e.keyCode===t&&(e.preventDefault(),this.close())},_track:function(e){if(!this.persistent&&!this.disableSwipe)switch(e.preventDefault(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackMove(e);break;case"end":this._trackEnd(e)}},_trackStart:function(e){this._drawerState=this._DRAWER_STATE.TRACKING;var t=this.$.contentContainer.getBoundingClientRect();this._savedWidth=t.width,"left"===this.position?this._translateOffset=t.left:this._translateOffset=t.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(e){this._translateDrawer(e.detail.dx+this._translateOffset),this._trackDetails.push({dx:e.detail.dx,timeStamp:Date.now()})},_trackEnd:function(e){var t=e.detail.dx+this._translateOffset,n=this.getWidth(),i="left"===this.position?t>=0||t<=-n:t<=0||t>=n;if(!i){var r=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(e,r),this._drawerState===this._DRAWER_STATE.FLINGING)return}var o=n/2;e.detail.dx<-o?this.opened="right"===this.position:e.detail.dx>o&&(this.opened="left"===this.position),i?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(e,t){for(var n,i=Date.now(),r=i-100,o=0,a=t.length-1;o<=a;){var s=o+a>>1,l=t[s];l.timeStamp>=r?(n=l,a=s-1):o=s+1}return n?(e.detail.dx-n.dx)/(i-n.timeStamp||1):0},_flingDrawer:function(e,t){var n=this._calculateVelocity(e,t);if(!(Math.abs(n)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var i,r=e.detail.dx+this._translateOffset,o=this.getWidth(),a="left"===this.position,s=n>0;i=!s&&a?-(r+o):s&&!a?o-r:-r,s?(n=Math.max(n,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(n=Math.min(n,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*i/n;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(e){this.style.transitionDuration=e+"ms",this.$.contentContainer.style.transitionDuration=e+"ms",this.$.scrim.style.transitionDuration=e+"ms"},_styleTransitionTimingFunction:function(e){this.$.contentContainer.style.transitionTimingFunction=e,this.$.scrim.style.transitionTimingFunction=e},_translateDrawer:function(e){var t=this.getWidth();"left"===this.position?(e=Math.max(-t,Math.min(e,0)),this.$.scrim.style.opacity=1+e/t):(e=Math.max(0,Math.min(e,t)),this.$.scrim.style.opacity=1-e/t),this.translate3d(e+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var e=this._drawerState;e===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,e!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),e!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var t=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),n=e(this).querySelectorAll(t);n.length>0?(this._firstTabStop=n[0],this._lastTabStop=n[n.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var i=this.getAttribute("tabindex");i&&parseInt(i,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(t){if(!this.noFocusTrap){var n=9;this._drawerState===this._DRAWER_STATE.OPENED&&t.keyCode===n&&(t.shiftKey?this._firstTabStop&&e(t).localTarget===this._firstTabStop&&(t.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&e(t).localTarget===this._lastTabStop&&(t.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(e,t){this.toggleClass("visible",e&&!t,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ia=[b,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(t){e(t).path[0]!==this&&(this.resetLayout(),t.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var e=this._updateLayoutStates.bind(this);this._layoutDebouncer=l.debounce(this._layoutDebouncer,c,e),d(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var e=this;requestAnimationFrame((function(){e.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this)}}];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/t({_template:n`
    <style>
      :host {
        display: block;
        /**
         * Force app-drawer-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements.
         */
        position: relative;
        z-index: 0;
      }

      :host ::slotted([slot=drawer]) {
        z-index: 1;
      }

      :host([fullbleed]) {
        @apply --layout-fit;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        height: 100%;
        transition: var(--app-drawer-layout-content-transition, none);
      }

      #contentContainer[drawer-position=left] {
        margin-left: var(--app-drawer-width, 256px);
      }

      #contentContainer[drawer-position=right] {
        margin-right: var(--app-drawer-width, 256px);
      }
    </style>

    <slot id="drawerSlot" name="drawer"></slot>

    <div id="contentContainer" drawer-position\$="[[_drawerPosition]]">
      <slot></slot>
    </div>

    <iron-media-query query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]" on-query-matches-changed="_onQueryMatchesChanged"></iron-media-query>
`,is:"app-drawer-layout",behaviors:[ia],properties:{forceNarrow:{type:Boolean,value:!1},responsiveWidth:{type:String,value:"640px"},narrow:{type:Boolean,reflectToAttribute:!0,readOnly:!0,notify:!0},openedWhenNarrow:{type:Boolean,value:!1},_drawerPosition:{type:String}},listeners:{click:"_clickHandler"},observers:["_narrowChanged(narrow)"],get drawer(){return e(this.$.drawerSlot).getDistributedNodes()[0]},attached:function(){var e=this.drawer;e&&e.setAttribute("no-transition","")},_clickHandler:function(t){var n=e(t).localTarget;if(n&&n.hasAttribute("drawer-toggle")){var i=this.drawer;i&&!i.persistent&&i.toggle()}},_updateLayoutStates:function(){var e=this.drawer;this.isAttached&&e&&(this._drawerPosition=this.narrow?null:e.position,this._drawerNeedsReset&&(this.narrow?(e.opened=this.openedWhenNarrow,e.persistent=!1):e.opened=e.persistent=!0,e.hasAttribute("no-transition")&&w(this,(function(){e.removeAttribute("no-transition")})),this._drawerNeedsReset=!1))},_narrowChanged:function(){this._drawerNeedsReset=!0,this.resetLayout()},_onQueryMatchesChanged:function(e){this._setNarrow(e.detail.value)},_computeMediaQuery:function(e,t){return e?"(min-width: 0px)":"(max-width: "+t+")"}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ra=document.createElement("template");ra.setAttribute("style","display: none;"),ra.innerHTML='<dom-module id="app-grid-style">\n  <template>\n    <style>\n      :host {\n        /**\n         * The width for the expandible item is:\n         * ((100% - subPixelAdjustment) / columns * itemColumns - gutter\n         *\n         * - subPixelAdjustment: 0.1px (Required for IE 11)\n         * - gutter: var(--app-grid-gutter)\n         * - columns: var(--app-grid-columns)\n         * - itemColumn: var(--app-grid-expandible-item-columns)\n         */\n        --app-grid-expandible-item: {\n          -webkit-flex-basis: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;\n          flex-basis: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;\n          max-width: calc((100% - 0.1px) / var(--app-grid-columns, 1) * var(--app-grid-expandible-item-columns, 1) - var(--app-grid-gutter, 0px)) !important;\n        };\n      }\n\n      .app-grid {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n\n        padding-top: var(--app-grid-gutter, 0px);\n        padding-left: var(--app-grid-gutter, 0px);\n        box-sizing: border-box;\n      }\n\n      .app-grid > * {\n        /* Required for IE 10 */\n        -ms-flex: 1 1 100%;\n        -webkit-flex: 1;\n        flex: 1;\n\n        /* The width for an item is: (100% - subPixelAdjustment - gutter * columns) / columns */\n        -webkit-flex-basis: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));\n        flex-basis: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));\n\n        max-width: calc((100% - 0.1px - (var(--app-grid-gutter, 0px) * var(--app-grid-columns, 1))) / var(--app-grid-columns, 1));\n        margin-bottom: var(--app-grid-gutter, 0px);\n        margin-right: var(--app-grid-gutter, 0px);\n        height: var(--app-grid-item-height);\n        box-sizing: border-box;\n      }\n\n      .app-grid[has-aspect-ratio] > * {\n        position: relative;\n      }\n\n      .app-grid[has-aspect-ratio] > *::before {\n        display: block;\n        content: "";\n        padding-top: var(--app-grid-item-height, 100%);\n      }\n\n      .app-grid[has-aspect-ratio] > * > * {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ra.content),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[F,ia],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var t,n=e(this.$.slot).getDistributedNodes(),i=0;t=n[i];i++)if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("sticky")){this._stickyElRef=t;break}this._stickyElRef||(this._stickyElRef=t)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=0===this._height||0===e,n=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,t||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),t?this._updateScrollState(e,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=n}},_updateScrollState:function(e,t){if(0!==this._height){var n=0,i=0,r=this._top,o=(this._lastScrollTop,this._maxHeaderTop),a=e-this._lastScrollTop,s=Math.abs(a),l=e>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(i=this._clamp(this.reveals?r+a:e,0,o)),e>=this._dHeight&&(i=this.condenses&&!this.fixed?Math.max(this._dHeight,i):i,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&s<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=e,this._initTimestamp=c),e>=o))if(Math.abs(this._initScrollTop-e)>30||s>10){l&&e>=o?i=o:!l&&e>=this._dHeight&&(i=this.condenses&&!this.fixed?this._dHeight:0);var d=a/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((i-r)/d,0,300)+"ms"}else i=this._top;n=0===this._dHeight?e>0?1:0:i/this._dHeight,t||(this._lastScrollTop=e,this._top=i,this._wasScrollingDown=l,this._lastTimestamp=c),(t||n!==this._progress||r!==i||0===e)&&(this._progress=n,this._runEffects(n,i),this._transformHeader(i))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(e){this.translate3d(0,-e+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&e>=this._stickyElTop?Math.min(e,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(e,t,n){return Math.min(n,Math.max(t,e))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),e(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(t){switch(t){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return e(this).querySelector("[main-title]");case"condensedTitle":return e(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[ia],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return e(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),n=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=n+"px"}.bind(this));var n=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(n.marginTop=t+"px",n.paddingTop=""):(n.paddingTop=t+"px",n.marginTop="")}}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        position: relative;
        display: block;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
        height: 100%;
      }

      #backgroundFrontLayer {
        min-height: 100%;
        pointer-events: none;
        background-size: cover;
        @apply --app-box-background-front-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled]) #backgroundFrontLayer {
        transition: none !important;
      }
    </style>

    <div id="background">
      <div id="backgroundFrontLayer">
        <slot name="background"></slot>
      </div>
    </div>
    <div id="contentContainer">
      <slot></slot>
    </div>
`,is:"app-box",behaviors:[F,b],listeners:{"iron-resize":"_resizeHandler"},_progress:0,attached:function(){this.resetLayout()},_debounceRaf:function(e){var t=this;this._raf&&window.cancelAnimationFrame(this._raf),this._raf=window.requestAnimationFrame((function(){t._raf=null,e.call(t)}))},resetLayout:function(){this._debounceRaf((function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=this.disabled;this.disabled=!0,this._elementTop=this._getElementTop(),this._elementHeight=this.offsetHeight,this._cachedScrollTargetHeight=this._scrollTargetHeight,this._setUpEffect(),this._updateScrollState(e),this.disabled=t}}))},_getElementTop:function(){for(var e=this,t=0;e&&e!==this.scrollTarget;)t+=e.offsetTop,e=e.offsetParent;return t},_updateScrollState:function(e){if(this.isOnScreen()){var t=this._elementTop-e;this._progress=1-(t+this._elementHeight)/this._cachedScrollTargetHeight,this._runEffects(this._progress,e)}},isOnScreen:function(){return this._elementTop<this._scrollTop+this._cachedScrollTargetHeight&&this._elementTop+this._elementHeight>this._scrollTop},_resizeHandler:function(){this.resetLayout()},_getDOMRef:function(e){return"background"===e?this.$.background:"backgroundFrontLayer"===e?this.$.backgroundFrontLayer:void 0},getScrollState:function(){return{progress:this._progress}}});class oa extends(P(L)){static get properties(){return z(z({},super.properties),{},{active:{type:Number,reflect:!0},label:{type:String},panels:{type:Array,reflect:!0}})}constructor(){super(),this.active=0,this.label="View",this.panels=null}connectedCallback(){if(super.connectedCallback(),!this.panels){const e=[];this.querySelectorAll("template").forEach(t=>e.push(t.title)),this.panels=e}this._show()}render(){return R`
            <app-toolbar>
                <paper-dropdown-menu id="menu" label="${this.label}">
                    <paper-listbox id="panels" slot="dropdown-content" class="dropdown-content" 
                        selected="${this.active}" @selected-item-changed="${this._update}">
                    ${this.panels.map(e=>R`<paper-item>${e}</paper-item>`)}
                    </paper-listbox>
                </paper-dropdown-menu>
                <slot name="toolbar"></slot>
            </app-toolbar>
            <slot></slot>
        `}static get styles(){return O`
            :host {
                display: block;
            }

            app-toolbar {
                padding: 0;
                justify-content: space-between;
            }

            ::slotted(._pb_panel) {
                overflow: auto;
                max-height: calc(var(--pb-panel-max-height) - 72px);
            }

            app-toolbar {
                font-size: 75%;
            }
        `}_update(){const e=this.shadowRoot.getElementById("panels").selected;this.active!==e&&(this.active=e,this._show())}_show(){const e=this.querySelectorAll("template");this.active>=e.length&&(this.active=e.length-1),console.log("<pb-panel> showing panel %s",this.active),this.querySelectorAll("._pb_panel").forEach(e=>e.style.display="none");const t=this.querySelector("._pb_panel"+this.active);if(t)t.style.display="";else{const t=e[this.active],n=document.importNode(t.content,!0),i=document.createElement("div");i.className="_pb_panel _pb_panel"+this.active,i.appendChild(n),this.appendChild(i),this.emitTo("pb-panel",{panel:this,active:this.active})}}refresh(){this.emitTo("pb-refresh",null)}}customElements.define("pb-panel",oa);class aa extends(P(L)){static get properties(){return z(z({},super.properties),{},{panels:{type:Array},direction:{type:String},_columns:{type:Number},animated:{type:String},animation:{type:Boolean}})}constructor(){super(),this.direction="ltr",this.animated="pb-view",this.animation=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-panel",e=>{const t=Array.from(this.shadowRoot.querySelectorAll("._grid_panel")).indexOf(e.detail.panel);t>0&&(console.log("<pb-grid> Updating panel %d to show %s",t,e.detail.active),this.panels[t]=e.detail.active,localStorage.setItem("pb-grid.panels",this.panels.join(".")),this.setParameter("panels",this.panels.join(".")),this.pushHistory("added panel"))});const e=this.getParameter("panels");if(e)this.panels=e.split(".").map(e=>parseInt(e)),localStorage.setItem("pb-grid.panels",this.panels.join("."));else{const e=localStorage.getItem("pb-grid.panels");e&&(this.panels=e.split(".").map(e=>parseInt(e)))}this._columns=this.panels.length,this.template=this.querySelector("template")}firstUpdated(){this.panels.forEach(e=>this._insertPanel(e)),this._animate(),this._update()}_animate(){if(this.animation&&"anime"in window){const e=document.querySelectorAll(this.animated),t=anime.timeline({easing:"linear",duration:400});t.add({targets:e,opacity:{value:[0,.6],duration:200,delay:100,easing:"linear"},translateX:[2e3,0],duration:400,delay:anime.stagger(100,{start:100})}),t.add({targets:e,opacity:[.6,1],duration:200,delay:anime.stagger(50)}),t.play()}}addPanel(e){if(!e)if(this.panels.length>0){e=this.panels.reduce((function(e,t){return Math.max(e,t)}))+1}else e=0;this._columns++,this.panels.push(e),localStorage.setItem("pb-grid.panels",this.panels.join(".")),this.setParameter("panels",this.panels.join(".")),this.pushHistory("added panel"),this._insertPanel(e),this._update(),this.emitTo("pb-refresh",null)}removePanel(e){const t=Array.from(this.querySelectorAll("._grid_panel")).indexOf(e);console.log("<pb-grid> Removing panel %d",t),this.panels.splice(t,1),this.setParameter("panels",this.panels.join(".")),localStorage.setItem("pb-grid.panels",this.panels.join(".")),this.pushHistory("removed panel"),e.parentNode.removeChild(e),this._columns--,this._update()}_insertPanel(e){const t=document.importNode(this.template.content.firstElementChild,!0);t.setAttribute("active",e),"ltr"===this.direction||0===this.querySelectorAll("._grid_panel").length?this.appendChild(t):this.insertBefore(t,this.firstElementChild),t.classList.add("_grid_panel")}_update(){const e=[];Array.from(this.children).forEach(t=>{if(t instanceof HTMLTemplateElement)return;const n=window.getComputedStyle(t).getPropertyValue("max-width");n&&"none"!==n?e.push(n):e.push("1fr")}),this.style.setProperty("--pb-computed-column-widths",e.join(" "))}render(){return R`<slot></slot>`}static get styles(){return O`
            :host {
                display: grid;
                grid-template-columns: var(--pb-grid-column-widths, var(--pb-computed-column-widths));
                grid-column-gap: var(--pb-grid-column-gap, 20px);
                justify-content: space-between;
            }
        `}}customElements.define("pb-grid",aa);class sa extends(P(L)){static get properties(){return z(z({},super.properties),{},{action:{type:String},grid:{type:String},initial:{type:Number}})}constructor(){super(),this.action="add",this.initial=0}connectedCallback(){super.connectedCallback()}render(){return R`
            <a @click="${this._click}"><slot></slot></a>
        `}static get styles(){return O`
            :host {
                display: block;
            }
        `}_click(){const e=document.querySelector(this.grid);if(!e||!e.addPanel)return console.error("<pb-grid-action> grid not found: %s",this.grid);"add"===this.action?e.addPanel(this.initial):e.removePanel(this.parentNode)}}customElements.define("pb-grid-action",sa);class la extends(P(L)){static get properties(){return z(z({},super.properties),{},{login:{type:String},show:{type:Boolean},group:{type:String}})}constructor(){super(),this.show=!1}firstUpdated(){const e=document.getElementById(this.login);e?(this.subscribeTo("pb-login",e=>{this.show=this._loggedIn(e.detail.user,e.detail.groups)},[]),this.show=e.loggedIn&&this._loggedIn(e.user,e.groups)):console.error("<pb-restricted> connected pb-login element not found!")}render(){return this.show?this.style.display="":this.style.display="none",R`
            ${this.show&&!this.disabled?R`<slot></slot>`:null}
        `}static get styles(){return O`
            :host {
                display: block;
            }
        `}_loggedIn(e,t){return null!=e&&(!this.group||!!t&&t.indexOf(this.group)>-1)}}customElements.define("pb-restricted",la);class ca extends(P(L)){static get properties(){return z(z({},super.properties),{},{odds:{type:Array},target:{type:String},_valid:{type:Boolean},_current:{type:String}})}constructor(){super(),this.odds=[]}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-login",()=>this._refresh(),[]),this.subscribeTo("pb-refresh-odds",e=>{this._refresh();const t=this.shadowRoot.getElementById("regenerate"),n=e.detail.odds.map(e=>"odd="+e).join("&");t.url="modules/lib/regenerate.xql?"+n,t.trigger()})}firstUpdated(){super.firstUpdated(),this._loader=this.shadowRoot.getElementById("load"),ca.waitOnce("pb-page-ready",e=>{this._loader.url=e.endpoint+"/modules/lib/components-odd.xql",this._refresh()})}_refresh(e){this.emitTo("pb-start-update"),this._loader.params=e,this._loader.generateRequest()}_update(){this.emitTo("pb-end-update"),this.odds=this._loader.lastResponse}_selectODD(e){const t=e.model.itemsIndex;this.odds.forEach((e,n)=>{n!==t&&e.current&&(this.set("odds."+n+".current",!1),this.set("odds."+t+".current",!0))});const n={odd:e.model.item.name+".odd"};console.log("<pb-manage-odds> selected ODD: %o",n),this.emitTo("pb-load",{params:n})}_createODD(){const e=this.shadowRoot.querySelector('paper-input[name="new_odd"]').value,t=this.shadowRoot.querySelector('paper-input[name="title"]').value,n={new_odd:e,title:t};console.log("<pb-manage-odds> create ODD: %s, %s",e,t),this._refresh(n)}_createByExample(){const e={new_odd:this.shadowRoot.querySelector('paper-input[name="new_odd"]').value,title:this.shadowRoot.querySelector('paper-input[name="title"]').value},t=document.getElementById(this.target);t||t.getSelected||console.error("<pb-manage-odds> target %s not found",this.target);const n=t.getSelected();document.querySelectorAll(".document-select paper-checkbox[checked]").forEach(e=>{n.push(e.value)}),console.log("<pb-manage-odds> create ODD by example: %o",n),e.byExample=n,this._refresh(e)}_delete(e){this._current=e,this.shadowRoot.getElementById("deleteDialog").open()}_confirmDelete(){this._current?(console.log("<pb-manage-odds> deleting ODD: %s",this._current),this._refresh({delete:this._current}),this._current=null):console.error("<pb-manage-odds> no file marked for deletion")}_validate(){const e=this.shadowRoot.getElementById("ironform").validate();this.shadowRoot.getElementById("createBtn").disabled=!e,this.shadowRoot.getElementById("createByEx").disabled=!e}render(){return this.odds?R`
            <pb-restricted login="login">
                <pb-ajax id="regenerateAll" url="modules/lib/regenerate.xql" title="${i("odd.manage.regenerate-all")}"
                    emit="${this.emit?this.emit:""}" .emitConfig="${this.emitConfig}">
                    <h3 slot="title">${i("odd.manage.regenerate-all")}</h3>
                    <a href="#">${i("odd.manage.regenerate-all")}</a>
                </pb-ajax>
            </pb-restricted>
            ${this.odds.map(e=>R`
                <div class="odd">
                    <a href="odd-editor.html?odd=${e.name}.odd" target="_blank">${e.label}</a>
                    <!-- TODO this toolbar should only appear once per ODD files papercard -->
                    <app-toolbar>
                        ${e.canWrite?R`
                                    <pb-restricted login="login">
                                        <pb-ajax url="modules/lib/regenerate.xql?odd=${e.name}.odd"
                                            emit="${this.emit?this.emit:""}" .emitConfig="${this.emitConfig}">
                                            <h2 slot="title">${i("menu.admin.recompile")}</h2>
                                            <paper-icon-button title="Regenerate ODD" icon="update"></paper-icon-button>
                                        </pb-ajax>
                                        <paper-icon-button title="Delete ODD" icon="delete" @click="${()=>this._delete(e.path)}"></paper-icon-button>
                                    </pb-restricted>
                                `:null}
                        <pb-edit-xml path="${e.path}">
                            <paper-icon-button title="Edit ODD" icon="code"></paper-icon-button>
                        </pb-edit-xml>
                    </app-toolbar>
                </div>
                <div class="odd-description">${e.description}</div>
            `)}
            <pb-restricted login="login">
                <form action="" method="GET">
                    <paper-input name="new_odd" label="${i("odd.manage.filename")}" required auto-validate pattern="[a-zA-Z0-9-_]+"
                        error-message="Required. Use letters, numbers, - and _"></paper-input>
                    <paper-input name="title" label="${i("odd.manage.title")}" auto-validate required minlength="1"
                        error-message="A title is required"></paper-input>
                    <paper-button id="createBtn" @click="${this._createODD}">
                        <iron-icon icon="create"></iron-icon>${i("odd.manage.create")}
                    </paper-button>
                    <!--paper-button id="createByEx" @click="${this._createByExample}">
                        <iron-icon icon="build"></iron-icon>
                        ${i("odd.manage.create-from-example")}
                    </paper-button-->
                </form>
            </pb-restricted>
            <pb-ajax id="regenerate" url="modules/lib/regenerate.xql"></pb-ajax>
            <iron-ajax
                id="load"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._update}">
            </iron-ajax>

            <paper-dialog id="deleteDialog">
                <h2>${i("browse.delete")}</h2>
                <paper-dialog-scrollable>
                    <p>${i("odd.manage.delete",{file:this.file})}</p>
                </paper-dialog-scrollable>
                <div class="buttons">
                    <paper-button dialog-confirm="dialog-confirm" autofocus @click="${this._confirmDelete}">
                        ${i("dialogs.yes")}
                    </paper-button>
                    <paper-button dialog-confirm="dialog-cancel">
                        ${i("dialogs.no")}
                    </paper-button>
                </div>
            </paper-dialog>
        `:null}static get styles(){return O`
            :host {
                display: block;
            }

            .odd {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .odd paper-checkbox {
                display: block;
                flex: 0 0;
                margin-right: 1em;
            }

            .odd a {
                display: block;
                flex: 2 0;
            }

            .odd app-toolbar {
                flex: 1 0;
                justify-content: flex-end;  
                padding: 0;  
            }

            pb-restricted {
                display: flex;
            }

            .odd-description {
                color: #888888;
                font-size: 0.8em;
                margin-top: -1em;
            }

            #regenerateAll {
                display: block;
                width: 100%;
                margin-top: 10px;
                text-align: right;
            }
        `}}customElements.define("pb-manage-odds",ca);const da=document.createElement("template");da.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(da.content);const pa=n`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(pa.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
let ua=!1;window.addEventListener("keydown",()=>{ua=!0},{capture:!0}),window.addEventListener("mousedown",()=>{ua=!1},{capture:!0});const ha=e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}},ga=e=>class extends(ha(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity="0",e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",()=>this.parentNode.removeChild(e))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&ua?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class fa extends(T(ga(C(p(u))))){static get template(){return n`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){h(this,"down",()=>!this.disabled&&this.setAttribute("active","")),h(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(fa.is,fa);const ma=n`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
  <template>
    <style>
      :host {
        height: calc(var(--lumo-size-l) / 10);
        margin: var(--lumo-space-s) 0;
      }

      [part="bar"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      [part="value"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-primary-color);
        /* Use width instead of transform to preserve border radius */
        transform: none;
        width: calc(var(--vaadin-progress-value) * 100%);
        will-change: width;
        transition: 0.1s width linear;
      }

      /* Indeterminate mode */

      :host([indeterminate]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        width: 100%;
        background-color: transparent !important;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        opacity: 0.75;
        will-change: transform;
        animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-indeterminate {
        0% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      :host(:not([aria-valuenow])) [part="value"]::before,
      :host([indeterminate]) [part="value"]::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: var(--lumo-primary-color);
        will-change: opacity;
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-pulse3 {
        0% { opacity: 1; }
        10% { opacity: 0; }
        40% { opacity: 0; }
        50% { opacity: 1; }
        50.1% { opacity: 1; }
        60% { opacity: 0; }
        90% { opacity: 0; }
        100% { opacity: 1; }
      }

      /* Contrast color */

      :host([theme~="contrast"]) [part="value"],
      :host([theme~="contrast"]) [part="value"]::before {
        background-color: var(--lumo-contrast-80pct);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"]) [part="value"],
      :host([theme~="error"]) [part="value"]::before {
        background-color: var(--lumo-error-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"]) [part="value"],
      :host([theme~="success"]) [part="value"]::before {
        background-color: var(--lumo-success-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }

      /* RTL specific styles */

      :host([indeterminate][dir="rtl"]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      :host(:not([aria-valuenow])[dir="rtl"]) [part="value"]::before,
      :host([indeterminate][dir="rtl"]) [part="value"]::before {
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      @keyframes vaadin-progress-indeterminate-rtl {
        0% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      /* Contrast color */

      :host([theme~="contrast"][dir="rtl"]) [part="value"],
      :host([theme~="contrast"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"][dir="rtl"]) [part="value"],
      :host([theme~="error"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"][dir="rtl"]) [part="value"],
      :host([theme~="success"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</custom-style>`;document.head.appendChild(ma.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const ba=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,n){const i=this._normalizeValue(e,t,n);this.style.setProperty("--vaadin-progress-value",i),this.updateStyles({"--vaadin-progress-value":String(i)})}_valueChanged(e,t){this.setAttribute("aria-valuenow",e)}_minChanged(e,t){this.setAttribute("aria-valuemin",e)}_maxChanged(e,t){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,n){let i;return e||0==e?t>=n?i=1:(i=(e-t)/(n-t),i=Math.min(Math.max(i,0),1)):i=0,i}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class va extends(T(C(ba(u)))){static get template(){return n`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"] {
        transform-origin: 100% 50%;
      }
    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.3.0"}}customElements.define(va.is,va);const ya=n`<dom-module id="lumo-upload" theme-for="vaadin-upload">
  <template>
    <style>
      :host {
        line-height: var(--lumo-line-height-m);
      }

      :host(:not([nodrop])) {
        overflow: hidden;
        border: 1px dashed var(--lumo-contrast-20pct);
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
        transition: background-color 0.6s, border-color 0.6s;
      }

      [part="primary-buttons"] > * {
        display: inline-block;
        white-space: nowrap;
      }

      [part="drop-label"] {
        display: inline-block;
        white-space: normal;
        padding: 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
      }

      :host([dragover-valid]) {
        border-color: var(--lumo-primary-color-50pct);
        background: var(--lumo-primary-color-10pct);
        transition: background-color 0.1s, border-color 0.1s;
      }

      :host([dragover-valid]) [part="drop-label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="drop-label-icon"] {
        display: inline-block;
      }

      [part="drop-label-icon"]::before {
        content: var(--lumo-icons-upload);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        vertical-align: -.25em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-upload-file" theme-for="vaadin-upload-file">
  <template>
    <style include="lumo-field-button">
      :host {
        padding: var(--lumo-space-s) 0;
      }

      :host(:not(:first-child)) {
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      [part="row"] {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      [part="status"],
      [part="error"] {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      [part="info"] {
        display: flex;
        align-items: baseline;
        flex: auto;
      }

      [part="meta"] {
        width: 0.001px;
        flex: 1 1 auto;
      }

      [part="name"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="commands"] {
        display: flex;
        align-items: baseline;
        flex: none;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        margin-right: var(--lumo-space-xs);
      }

      /* When both icons are hidden, let us keep space for one */
      [part="done-icon"][hidden] + [part="warning-icon"][hidden] {
        display: block !important;
        visibility: hidden;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        font-size: var(--lumo-icon-size-m);
        font-family: 'lumo-icons';
        line-height: 1;
      }

      [part="start-button"],
      [part="retry-button"],
      [part="clear-button"] {
        flex: none;
        margin-left: var(--lumo-space-xs);
      }

      [part="done-icon"]::before,
      [part="warning-icon"]::before,
      [part="start-button"]::before,
      [part="retry-button"]::before,
      [part="clear-button"]::before {
        vertical-align: -.25em;
      }

      [part="done-icon"]::before {
        content: var(--lumo-icons-checkmark);
        color: var(--lumo-primary-text-color);
      }

      [part="warning-icon"]::before {
        content: var(--lumo-icons-error);
        color: var(--lumo-error-text-color);
      }

      [part="start-button"]::before {
        content: var(--lumo-icons-play);
      }

      [part="retry-button"]::before {
        content: var(--lumo-icons-reload);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="error"] {
        color: var(--lumo-error-text-color);
      }

      [part="progress"] {
        width: auto;
        margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
        margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
      }

      [part="progress"][complete],
      [part="progress"][error] {
        display: none;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild(ya.content);const wa=document.createElement("template");wa.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(wa.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class _a extends(C(u)){static get template(){return n`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){const n=Boolean(e);this.hasAttribute(t)!==n&&(n?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(_a.is,_a);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class xa extends(T(C(u))){static get template(){return n`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <div part="primary-buttons">
      <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
        <slot name="add-button">
          <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
            [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
          </vaadin-button>
        </slot>
      </div>
      <div part="drop-label" hidden\$="[[nodrop]]" id="dropLabelContainer">
        <slot name="drop-label-icon">
          <div part="drop-label-icon"></div>
        </slot>
        <slot name="drop-label" id="dropLabel">
          [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]
        </slot>
      </div>
    </div>
    <slot name="file-list">
      <div id="fileList" part="file-list">
        <template is="dom-repeat" items="[[files]]" as="file">
          <vaadin-upload-file file="[[file]]"></vaadin-upload-file>
        </template>
      </div>
    </slot>
    <slot></slot>
    <input type="file" id="fileInput" on-change="_onFileInputChange" hidden="" accept\$="{{accept}}" multiple\$="[[_isMultiple(maxFiles)]]" capture\$="[[capture]]">
`}static get is(){return"vaadin-upload"}static get version(){return"4.4.0"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(e){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(e){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,n=~~(Math.log(e)/Math.log(t)),i=Math.max(0,Math.min(3,n-1));return parseFloat((e/Math.pow(t,n)).toFixed(i))+" "+this.i18n.units.size[n]}_splitTimeByUnits(e){const t=[60,60,24,1/0],n=[0];for(var i=0;i<t.length&&e>0;i++)n[i]=e%t[i],e=Math.floor(e/t[i]);return n}_formatTime(e,t){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(e=>(e<10?"0":"")+e).join(":")}_formatFileProgress(e){return e.totalStr+": "+e.progress+"% ("+(e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}for(var t in this.headers)e.setRequestHeader(t,this.headers[t]);this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,n,i){e.elapsed=i,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(i*(t/n-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/i/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(n),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=(e=e||this.files).filter(e=>!e.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),n=e.xhr=this._createXhr(e);let i,r;n.upload.onprogress=o=>{clearTimeout(i),r=Date.now();const a=(r-t)/1e3,s=o.loaded,l=o.total,c=~~(s/l*100);e.loaded=s,e.progress=c,e.indeterminate=s<=0||s>=l,e.error?e.indeterminate=e.status=void 0:e.abort||(c<100?(this._setStatus(e,l,s,a),i=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing,e.uploading=!1)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:n}}))},n.onreadystatechange=()=>{if(4==n.readyState){if(clearTimeout(i),e.indeterminate=e.uploading=!1,e.abort)return void this._notifyFileChanges(e);e.status="";if(!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:n},cancelable:!0})))return;0===n.status?e.error=this.i18n.uploading.error.serverUnavailable:n.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:n.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent("upload-"+(e.error?"error":"success"),{detail:{file:e,xhr:n}})),this._notifyFileChanges(e)}};const o=new FormData;e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName;if(!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:n},cancelable:!0})))return;o.append(e.formDataName,e,e.name),n.open(this.method,e.uploadTarget,!0),this._configureXhr(n),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,n.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:n}})),this._notifyFileChanges(e)};this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:n,formData:o},cancelable:!0}))&&n.send(o)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){var t="files."+this.files.indexOf(e)+".";for(var n in e)e.hasOwnProperty(n)&&this.notifyPath(t+n,e[n])}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&e.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));const t=e.name.match(/\.[^\.]*$|$/)[0],n=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");!this.accept||n.test(e.type)||n.test(t)?(e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.unshift("files",e),this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}))}_removeFile(e){this.files.indexOf(e)>-1&&this.splice("files",this.files.indexOf(e),1)}_onAddFilesTouchEnd(e){e.preventDefault(),this.__resetMouseCanceller(),this._onAddFilesClick()}__resetMouseCanceller(){g()}_onAddFilesClick(){this.maxFilesReached||(this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1==e?t.one:t.many}_isMultiple(e){return 1!=e}}customElements.define(xa.is,xa);class ka extends(P(L)){static get properties(){return z(z({},super.properties),{},{target:{type:String},accept:{type:String}})}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.subscribeTo("pb-collection",e=>{this.target=e.detail.collection})}firstUpdated(){super.firstUpdated();const e=this.shadowRoot.getElementById("uploader");e.addEventListener("upload-before",()=>{this.emitTo("pb-start-update")}),e.addEventListener("upload-request",e=>{this.target&&e.detail.formData.append("root",this.target)}),e.addEventListener("upload-error",e=>{e.detail.file.error=e.detail.xhr.responseText,this.emitTo("pb-end-update")}),e.addEventListener("upload-success",()=>{let t=!0;const n=[];e.files.forEach(e=>{e.complete||e.error||e.aborted?/^.*\.odd$/.test(e.name)&&n.push(e.name):t=!1}),t&&(this.emitTo("pb-end-update"),this.emitTo("pb-load"),n.length>0&&this.emitTo("pb-refresh-odds",{odds:n}))}),e.target=this.getEndpoint()+"/modules/lib/upload.xql"}render(){return R`
            <vaadin-upload id="uploader" accept="${this.accept}" method="post" tabindex="-1" form-data-name="files[]"
                with-credentials>
                <span slot="drop-label">${i("upload.drop",{accept:this.accept})}</span>
                <paper-button id="uploadBtn" slot="add-button">${i("upload.upload")}</paper-button>
            </vaadin-upload>
        `}}var Aa,Sa;customElements.define("pb-upload",ka),Sa={},function(e,t){function n(e){if("number"==typeof e)return e;var t={};for(var n in e)t[n]=e[n];return t}function i(){this._delay=0,this._endDelay=0,this._fill="none",this._iterationStart=0,this._iterations=1,this._duration=0,this._playbackRate=1,this._direction="normal",this._easing="linear",this._easingFunction=k}function r(){return e.isDeprecated("Invalid timing inputs","2016-03-02","TypeError exceptions will be thrown instead.",!0)}function o(t,n,r){var o=new i;return n&&(o.fill="both",o.duration="auto"),"number"!=typeof t||isNaN(t)?void 0!==t&&Object.getOwnPropertyNames(t).forEach((function(n){if("auto"!=t[n]){if(("number"==typeof o[n]||"duration"==n)&&("number"!=typeof t[n]||isNaN(t[n])))return;if("fill"==n&&-1==_.indexOf(t[n]))return;if("direction"==n&&-1==x.indexOf(t[n]))return;if("playbackRate"==n&&1!==t[n]&&e.isDeprecated("AnimationEffectTiming.playbackRate","2014-11-28","Use Animation.playbackRate instead."))return;o[n]=t[n]}})):o.duration=t,o}function a(e){return"number"==typeof e&&(e=isNaN(e)?{duration:0}:{duration:e}),e}function s(t,n){return o(t=e.numericTimingToObject(t),n)}function l(e,t,n,i){return e<0||e>1||n<0||n>1?k:function(r){function o(e,t,n){return 3*e*(1-n)*(1-n)*n+3*t*(1-n)*n*n+n*n*n}if(r<=0){var a=0;return e>0?a=t/e:!t&&n>0&&(a=i/n),a*r}if(r>=1){var s=0;return n<1?s=(i-1)/(n-1):1==n&&e<1&&(s=(t-1)/(e-1)),1+s*(r-1)}for(var l=0,c=1;l<c;){var d=(l+c)/2,p=o(e,n,d);if(Math.abs(r-p)<1e-5)return o(t,i,d);p<r?l=d:c=d}return o(t,i,d)}}function c(e,t){return function(n){if(n>=1)return 1;var i=1/e;return(n+=t*i)-n%i}}function d(e){C||(C=document.createElement("div").style),C.animationTimingFunction="",C.animationTimingFunction=e;var t=C.animationTimingFunction;if(""==t&&r())throw new TypeError(e+" is not a valid value for easing");return t}function p(e){if("linear"==e)return k;var t=R.exec(e);if(t)return l.apply(this,t.slice(1).map(Number));var n=O.exec(e);if(n)return c(Number(n[1]),E);var i=z.exec(e);return i?c(Number(i[1]),{start:A,middle:S,end:E}[i[2]]):T[e]||k}function u(e){return Math.abs(h(e)/e.playbackRate)}function h(e){return 0===e.duration||0===e.iterations?0:e.duration*e.iterations}function g(e,t,n){if(null==t)return P;var i=n.delay+e+n.endDelay;return t<Math.min(n.delay,i)?I:t>=Math.min(n.delay+e,i)?B:$}function f(e,t,n,i,r){switch(i){case I:return"backwards"==t||"both"==t?0:null;case $:return n-r;case B:return"forwards"==t||"both"==t?e:null;case P:return null}}function m(e,t,n,i,r){var o=r;return 0===e?t!==I&&(o+=n):o+=i/e,o}function b(e,t,n,i,r,o){var a=e===1/0?t%1:e%1;return 0!==a||n!==B||0===i||0===r&&0!==o||(a=1),a}function v(e,t,n,i){return e===B&&t===1/0?1/0:1===n?Math.floor(i)-1:Math.floor(i)}function y(e,t,n){var i=e;if("normal"!==e&&"reverse"!==e){var r=t;"alternate-reverse"===e&&(r+=1),i="normal",r!==1/0&&r%2!=0&&(i="reverse")}return"normal"===i?n:1-n}function w(e,t,n){var i=g(e,t,n),r=f(e,n.fill,t,i,n.delay);if(null===r)return null;var o=m(n.duration,i,n.iterations,r,n.iterationStart),a=b(o,n.iterationStart,i,n.iterations,r,n.duration),s=v(i,n.iterations,a,o),l=y(n.direction,s,a);return n._easingFunction(l)}var _="backwards|forwards|both|none".split("|"),x="reverse|alternate|alternate-reverse".split("|"),k=function(e){return e};i.prototype={_setMember:function(t,n){this["_"+t]=n,this._effect&&(this._effect._timingInput[t]=n,this._effect._timing=e.normalizeTimingInput(this._effect._timingInput),this._effect.activeDuration=e.calculateActiveDuration(this._effect._timing),this._effect._animation&&this._effect._animation._rebuildUnderlyingAnimation())},get playbackRate(){return this._playbackRate},set delay(e){this._setMember("delay",e)},get delay(){return this._delay},set endDelay(e){this._setMember("endDelay",e)},get endDelay(){return this._endDelay},set fill(e){this._setMember("fill",e)},get fill(){return this._fill},set iterationStart(e){if((isNaN(e)||e<0)&&r())throw new TypeError("iterationStart must be a non-negative number, received: "+e);this._setMember("iterationStart",e)},get iterationStart(){return this._iterationStart},set duration(e){if("auto"!=e&&(isNaN(e)||e<0)&&r())throw new TypeError("duration must be non-negative or auto, received: "+e);this._setMember("duration",e)},get duration(){return this._duration},set direction(e){this._setMember("direction",e)},get direction(){return this._direction},set easing(e){this._easingFunction=p(d(e)),this._setMember("easing",e)},get easing(){return this._easing},set iterations(e){if((isNaN(e)||e<0)&&r())throw new TypeError("iterations must be non-negative, received: "+e);this._setMember("iterations",e)},get iterations(){return this._iterations}};var A=1,S=.5,E=0,T={ease:l(.25,.1,.25,1),"ease-in":l(.42,0,1,1),"ease-out":l(0,0,.58,1),"ease-in-out":l(.42,0,.58,1),"step-start":c(1,A),"step-middle":c(1,S),"step-end":c(1,E)},C=null,L="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",R=new RegExp("cubic-bezier\\("+L+","+L+","+L+","+L+"\\)"),O=/steps\(\s*(\d+)\s*\)/,z=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,P=0,I=1,B=2,$=3;e.cloneTimingInput=n,e.makeTiming=o,e.numericTimingToObject=a,e.normalizeTimingInput=s,e.calculateActiveDuration=u,e.calculateIterationProgress=w,e.calculatePhase=g,e.normalizeEasing=d,e.parseEasingFunction=p}(Aa={}),function(e,t){function n(e,t){return e in d&&d[e][t]||t}function i(e){return"display"===e||0===e.lastIndexOf("animation",0)||0===e.lastIndexOf("transition",0)}function r(e,t,r){if(!i(e)){var o=s[e];if(o)for(var a in l.style[e]=t,o){var c=o[a],d=l.style[c];r[c]=n(c,d)}else r[e]=n(e,t)}}function o(e){var t=[];for(var n in e)if(!(n in["easing","offset","composite"])){var i=e[n];Array.isArray(i)||(i=[i]);for(var r,o=i.length,a=0;a<o;a++)(r={}).offset="offset"in e?e.offset:1==o?1:a/(o-1),"easing"in e&&(r.easing=e.easing),"composite"in e&&(r.composite=e.composite),r[n]=i[a],t.push(r)}return t.sort((function(e,t){return e.offset-t.offset})),t}function a(t){function n(){var e=i.length;null==i[e-1].offset&&(i[e-1].offset=1),e>1&&null==i[0].offset&&(i[0].offset=0);for(var t=0,n=i[0].offset,r=1;r<e;r++){var o=i[r].offset;if(null!=o){for(var a=1;a<r-t;a++)i[t+a].offset=n+(o-n)*a/(r-t);t=r,n=o}}}if(null==t)return[];window.Symbol&&Symbol.iterator&&Array.prototype.from&&t[Symbol.iterator]&&(t=Array.from(t)),Array.isArray(t)||(t=o(t));for(var i=t.map((function(t){var n={};for(var i in t){var o=t[i];if("offset"==i){if(null!=o){if(o=Number(o),!isFinite(o))throw new TypeError("Keyframe offsets must be numbers.");if(o<0||o>1)throw new TypeError("Keyframe offsets must be between 0 and 1.")}}else if("composite"==i){if("add"==o||"accumulate"==o)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"add compositing is not supported"};if("replace"!=o)throw new TypeError("Invalid composite mode "+o+".")}else o="easing"==i?e.normalizeEasing(o):""+o;r(i,o,n)}return null==n.offset&&(n.offset=null),null==n.easing&&(n.easing="linear"),n})),a=!0,s=-1/0,l=0;l<i.length;l++){var c=i[l].offset;if(null!=c){if(c<s)throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");s=c}else a=!1}return i=i.filter((function(e){return e.offset>=0&&e.offset<=1})),a||n(),i}var s={background:["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","backgroundAttachment","backgroundOrigin","backgroundClip","backgroundColor"],border:["borderTopColor","borderTopStyle","borderTopWidth","borderRightColor","borderRightStyle","borderRightWidth","borderBottomColor","borderBottomStyle","borderBottomWidth","borderLeftColor","borderLeftStyle","borderLeftWidth"],borderBottom:["borderBottomWidth","borderBottomStyle","borderBottomColor"],borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderLeft:["borderLeftWidth","borderLeftStyle","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderRight:["borderRightWidth","borderRightStyle","borderRightColor"],borderTop:["borderTopWidth","borderTopStyle","borderTopColor"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],flex:["flexGrow","flexShrink","flexBasis"],font:["fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineHeight"],margin:["marginTop","marginRight","marginBottom","marginLeft"],outline:["outlineColor","outlineStyle","outlineWidth"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},l=document.createElementNS("http://www.w3.org/1999/xhtml","div"),c={thin:"1px",medium:"3px",thick:"5px"},d={borderBottomWidth:c,borderLeftWidth:c,borderRightWidth:c,borderTopWidth:c,fontSize:{"xx-small":"60%","x-small":"75%",small:"89%",medium:"100%",large:"120%","x-large":"150%","xx-large":"200%"},fontWeight:{normal:"400",bold:"700"},outlineWidth:c,textShadow:{none:"0px 0px 0px transparent"},boxShadow:{none:"0px 0px 0px 0px transparent"}};e.convertToArrayForm=o,e.normalizeKeyframes=a}(Aa),function(e){var t={};e.isDeprecated=function(e,n,i,r){var o=r?"are":"is",a=new Date,s=new Date(n);return s.setMonth(s.getMonth()+3),!(a<s&&(e in t||console.warn("Web Animations: "+e+" "+o+" deprecated and will stop working on "+s.toDateString()+". "+i),t[e]=!0,1))},e.deprecated=function(t,n,i,r){var o=r?"are":"is";if(e.isDeprecated(t,n,i,r))throw new Error(t+" "+o+" no longer supported. "+i)}}(Aa),function(){if(document.documentElement.animate){var e=document.documentElement.animate([],0),t=!0;if(e&&(t=!1,"play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach((function(n){void 0===e[n]&&(t=!0)}))),!t)return}!function(e,t,n){function i(e){for(var t={},n=0;n<e.length;n++)for(var i in e[n])if("offset"!=i&&"easing"!=i&&"composite"!=i){var r={offset:e[n].offset,easing:e[n].easing,value:e[n][i]};t[i]=t[i]||[],t[i].push(r)}for(var o in t){var a=t[o];if(0!=a[0].offset||1!=a[a.length-1].offset)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"Partial keyframes are not supported"}}return t}function r(n){var i=[];for(var r in n)for(var o=n[r],a=0;a<o.length-1;a++){var s=a,l=a+1,c=o[s].offset,d=o[l].offset,p=c,u=d;0==a&&(p=-1/0,0==d&&(l=s)),a==o.length-2&&(u=1/0,1==c&&(s=l)),i.push({applyFrom:p,applyTo:u,startOffset:o[s].offset,endOffset:o[l].offset,easingFunction:e.parseEasingFunction(o[s].easing),property:r,interpolation:t.propertyInterpolation(r,o[s].value,o[l].value)})}return i.sort((function(e,t){return e.startOffset-t.startOffset})),i}t.convertEffectInput=function(n){var o=i(e.normalizeKeyframes(n)),a=r(o);return function(e,n){if(null!=n)a.filter((function(e){return n>=e.applyFrom&&n<e.applyTo})).forEach((function(i){var r=n-i.startOffset,o=i.endOffset-i.startOffset,a=0==o?0:i.easingFunction(r/o);t.apply(e,i.property,i.interpolation(a))}));else for(var i in o)"offset"!=i&&"easing"!=i&&"composite"!=i&&t.clear(e,i)}}}(Aa,Sa),function(e,t,n){function i(e){return e.replace(/-(.)/g,(function(e,t){return t.toUpperCase()}))}function r(e,t,n){s[n]=s[n]||[],s[n].push([e,t])}function o(e,t,n){for(var o=0;o<n.length;o++)r(e,t,i(n[o]))}function a(n,r,o){var a=n;/-/.test(n)&&!e.isDeprecated("Hyphenated property names","2016-03-22","Use camelCase instead.",!0)&&(a=i(n)),"initial"!=r&&"initial"!=o||("initial"==r&&(r=l[a]),"initial"==o&&(o=l[a]));for(var c=r==o?[]:s[a],d=0;c&&d<c.length;d++){var p=c[d][0](r),u=c[d][0](o);if(void 0!==p&&void 0!==u){var h=c[d][1](p,u);if(h){var g=t.Interpolation.apply(null,h);return function(e){return 0==e?r:1==e?o:g(e)}}}}return t.Interpolation(!1,!0,(function(e){return e?o:r}))}var s={};t.addPropertiesHandler=o;var l={backgroundColor:"transparent",backgroundPosition:"0% 0%",borderBottomColor:"currentColor",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",borderBottomWidth:"3px",borderLeftColor:"currentColor",borderLeftWidth:"3px",borderRightColor:"currentColor",borderRightWidth:"3px",borderSpacing:"2px",borderTopColor:"currentColor",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderTopWidth:"3px",bottom:"auto",clip:"rect(0px, 0px, 0px, 0px)",color:"black",fontSize:"100%",fontWeight:"400",height:"auto",left:"auto",letterSpacing:"normal",lineHeight:"120%",marginBottom:"0px",marginLeft:"0px",marginRight:"0px",marginTop:"0px",maxHeight:"none",maxWidth:"none",minHeight:"0px",minWidth:"0px",opacity:"1.0",outlineColor:"invert",outlineOffset:"0px",outlineWidth:"3px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",right:"auto",strokeDasharray:"none",strokeDashoffset:"0px",textIndent:"0px",textShadow:"0px 0px 0px transparent",top:"auto",transform:"",verticalAlign:"0px",visibility:"visible",width:"auto",wordSpacing:"normal",zIndex:"auto"};t.propertyInterpolation=a}(Aa,Sa),function(e,t,n){function i(t){var n=e.calculateActiveDuration(t),i=function(i){return e.calculateIterationProgress(n,i,t)};return i._totalDuration=t.delay+n+t.endDelay,i}t.KeyframeEffect=function(n,r,o,a){var s,l=i(e.normalizeTimingInput(o)),c=t.convertEffectInput(r),d=function(){c(n,s)};return d._update=function(e){return null!==(s=l(e))},d._clear=function(){c(n,null)},d._hasSameTarget=function(e){return n===e},d._target=n,d._totalDuration=l._totalDuration,d._id=a,d}}(Aa,Sa),function(e,t){function n(e,t){return!(!t.namespaceURI||-1==t.namespaceURI.indexOf("/svg"))&&(a in e||(e[a]=/Trident|MSIE|IEMobile|Edge|Android 4/i.test(e.navigator.userAgent)),e[a])}function i(e,t,n){n.enumerable=!0,n.configurable=!0,Object.defineProperty(e,t,n)}function r(e){this._element=e,this._surrogateStyle=document.createElementNS("http://www.w3.org/1999/xhtml","div").style,this._style=e.style,this._length=0,this._isAnimatedProperty={},this._updateSvgTransformAttr=n(window,e),this._savedTransformAttr=null;for(var t=0;t<this._style.length;t++){var i=this._style[t];this._surrogateStyle[i]=this._style[i]}this._updateIndices()}function o(e){if(!e._webAnimationsPatchedStyle){var t=new r(e);try{i(e,"style",{get:function(){return t}})}catch(t){e.style._set=function(t,n){e.style[t]=n},e.style._clear=function(t){e.style[t]=""}}e._webAnimationsPatchedStyle=e.style}}var a="_webAnimationsUpdateSvgTransformAttr",s={cssText:1,length:1,parentRule:1},l={getPropertyCSSValue:1,getPropertyPriority:1,getPropertyValue:1,item:1,removeProperty:1,setProperty:1},c={removeProperty:1,setProperty:1};for(var d in r.prototype={get cssText(){return this._surrogateStyle.cssText},set cssText(e){for(var t={},n=0;n<this._surrogateStyle.length;n++)t[this._surrogateStyle[n]]=!0;for(this._surrogateStyle.cssText=e,this._updateIndices(),n=0;n<this._surrogateStyle.length;n++)t[this._surrogateStyle[n]]=!0;for(var i in t)this._isAnimatedProperty[i]||this._style.setProperty(i,this._surrogateStyle.getPropertyValue(i))},get length(){return this._surrogateStyle.length},get parentRule(){return this._style.parentRule},_updateIndices:function(){for(;this._length<this._surrogateStyle.length;)Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,get:function(e){return function(){return this._surrogateStyle[e]}}(this._length)}),this._length++;for(;this._length>this._surrogateStyle.length;)this._length--,Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,value:void 0})},_set:function(t,n){this._style[t]=n,this._isAnimatedProperty[t]=!0,this._updateSvgTransformAttr&&"transform"==e.unprefixedPropertyName(t)&&(null==this._savedTransformAttr&&(this._savedTransformAttr=this._element.getAttribute("transform")),this._element.setAttribute("transform",e.transformToSvgMatrix(n)))},_clear:function(t){this._style[t]=this._surrogateStyle[t],this._updateSvgTransformAttr&&"transform"==e.unprefixedPropertyName(t)&&(this._savedTransformAttr?this._element.setAttribute("transform",this._savedTransformAttr):this._element.removeAttribute("transform"),this._savedTransformAttr=null),delete this._isAnimatedProperty[t]}},l)r.prototype[d]=function(e,t){return function(){var n=this._surrogateStyle[e].apply(this._surrogateStyle,arguments);return t&&(this._isAnimatedProperty[arguments[0]]||this._style[e].apply(this._style,arguments),this._updateIndices()),n}}(d,d in c);for(var p in document.documentElement.style)p in s||p in l||function(e){i(r.prototype,e,{get:function(){return this._surrogateStyle[e]},set:function(t){this._surrogateStyle[e]=t,this._updateIndices(),this._isAnimatedProperty[e]||(this._style[e]=t)}})}(p);e.apply=function(t,n,i){o(t),t.style._set(e.propertyName(n),i)},e.clear=function(t,n){t._webAnimationsPatchedStyle&&t.style._clear(e.propertyName(n))}}(Sa),function(e){window.Element.prototype.animate=function(t,n){var i="";return n&&n.id&&(i=n.id),e.timeline._play(e.KeyframeEffect(this,t,n,i))}}(Sa),function(e,t){function n(e,t,i){if("number"==typeof e&&"number"==typeof t)return e*(1-i)+t*i;if("boolean"==typeof e&&"boolean"==typeof t)return i<.5?e:t;if(e.length==t.length){for(var r=[],o=0;o<e.length;o++)r.push(n(e[o],t[o],i));return r}throw"Mismatched interpolation arguments "+e+":"+t}e.Interpolation=function(e,t,i){return function(r){return i(n(e,t,r))}}}(Sa),function(e,t){function n(e,t,n){return Math.max(Math.min(e,n),t)}function i(t,i,r){var o=e.dot(t,i),a=[];if(1===(o=n(o,-1,1)))a=t;else for(var s=Math.acos(o),l=1*Math.sin(r*s)/Math.sqrt(1-o*o),c=0;c<4;c++)a.push(t[c]*(Math.cos(r*s)-o*l)+i[c]*l);return a}var r=function(){function e(e,t){for(var n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=0;i<4;i++)for(var r=0;r<4;r++)for(var o=0;o<4;o++)n[i][r]+=t[i][o]*e[o][r];return n}function t(e){return 0==e[0][2]&&0==e[0][3]&&0==e[1][2]&&0==e[1][3]&&0==e[2][0]&&0==e[2][1]&&1==e[2][2]&&0==e[2][3]&&0==e[3][2]&&1==e[3][3]}function n(n,i,r,o,a){for(var s=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],l=0;l<4;l++)s[l][3]=a[l];for(l=0;l<3;l++)for(var c=0;c<3;c++)s[3][l]+=n[c]*s[c][l];var d=o[0],p=o[1],u=o[2],h=o[3],g=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];g[0][0]=1-2*(p*p+u*u),g[0][1]=2*(d*p-u*h),g[0][2]=2*(d*u+p*h),g[1][0]=2*(d*p+u*h),g[1][1]=1-2*(d*d+u*u),g[1][2]=2*(p*u-d*h),g[2][0]=2*(d*u-p*h),g[2][1]=2*(p*u+d*h),g[2][2]=1-2*(d*d+p*p),s=e(s,g);var f=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];for(r[2]&&(f[2][1]=r[2],s=e(s,f)),r[1]&&(f[2][1]=0,f[2][0]=r[0],s=e(s,f)),r[0]&&(f[2][0]=0,f[1][0]=r[0],s=e(s,f)),l=0;l<3;l++)for(c=0;c<3;c++)s[l][c]*=i[l];return t(s)?[s[0][0],s[0][1],s[1][0],s[1][1],s[3][0],s[3][1]]:s[0].concat(s[1],s[2],s[3])}return n}();e.composeMatrix=r,e.quat=i}(Sa),function(e,t,n){e.sequenceNumber=0;var i=function(e,t,n){this.target=e,this.currentTime=t,this.timelineTime=n,this.type="finish",this.bubbles=!1,this.cancelable=!1,this.currentTarget=e,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()};t.Animation=function(t){this.id="",t&&t._id&&(this.id=t._id),this._sequenceNumber=e.sequenceNumber++,this._currentTime=0,this._startTime=null,this._paused=!1,this._playbackRate=1,this._inTimeline=!0,this._finishedFlag=!0,this.onfinish=null,this._finishHandlers=[],this._effect=t,this._inEffect=this._effect._update(0),this._idle=!0,this._currentTimePending=!1},t.Animation.prototype={_ensureAlive:function(){this.playbackRate<0&&0===this.currentTime?this._inEffect=this._effect._update(-1):this._inEffect=this._effect._update(this.currentTime),this._inTimeline||!this._inEffect&&this._finishedFlag||(this._inTimeline=!0,t.timeline._animations.push(this))},_tickCurrentTime:function(e,t){e!=this._currentTime&&(this._currentTime=e,this._isFinished&&!t&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this._ensureAlive())},get currentTime(){return this._idle||this._currentTimePending?null:this._currentTime},set currentTime(e){e=+e,isNaN(e)||(t.restart(),this._paused||null==this._startTime||(this._startTime=this._timeline.currentTime-e/this._playbackRate),this._currentTimePending=!1,this._currentTime!=e&&(this._idle&&(this._idle=!1,this._paused=!0),this._tickCurrentTime(e,!0),t.applyDirtiedAnimation(this)))},get startTime(){return this._startTime},set startTime(e){e=+e,isNaN(e)||this._paused||this._idle||(this._startTime=e,this._tickCurrentTime((this._timeline.currentTime-this._startTime)*this.playbackRate),t.applyDirtiedAnimation(this))},get playbackRate(){return this._playbackRate},set playbackRate(e){if(e!=this._playbackRate){var n=this.currentTime;this._playbackRate=e,this._startTime=null,"paused"!=this.playState&&"idle"!=this.playState&&(this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),t.applyDirtiedAnimation(this)),null!=n&&(this.currentTime=n)}},get _isFinished(){return!this._idle&&(this._playbackRate>0&&this._currentTime>=this._totalDuration||this._playbackRate<0&&this._currentTime<=0)},get _totalDuration(){return this._effect._totalDuration},get playState(){return this._idle?"idle":null==this._startTime&&!this._paused&&0!=this.playbackRate||this._currentTimePending?"pending":this._paused?"paused":this._isFinished?"finished":"running"},_rewind:function(){if(this._playbackRate>=0)this._currentTime=0;else{if(!(this._totalDuration<1/0))throw new DOMException("Unable to rewind negative playback rate animation with infinite duration","InvalidStateError");this._currentTime=this._totalDuration}},play:function(){this._paused=!1,(this._isFinished||this._idle)&&(this._rewind(),this._startTime=null),this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),t.applyDirtiedAnimation(this)},pause:function(){this._isFinished||this._paused||this._idle?this._idle&&(this._rewind(),this._idle=!1):this._currentTimePending=!0,this._startTime=null,this._paused=!0},finish:function(){this._idle||(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this._currentTimePending=!1,t.applyDirtiedAnimation(this))},cancel:function(){this._inEffect&&(this._inEffect=!1,this._idle=!0,this._paused=!1,this._finishedFlag=!0,this._currentTime=0,this._startTime=null,this._effect._update(null),t.applyDirtiedAnimation(this))},reverse:function(){this.playbackRate*=-1,this.play()},addEventListener:function(e,t){"function"==typeof t&&"finish"==e&&this._finishHandlers.push(t)},removeEventListener:function(e,t){if("finish"==e){var n=this._finishHandlers.indexOf(t);n>=0&&this._finishHandlers.splice(n,1)}},_fireEvents:function(e){if(this._isFinished){if(!this._finishedFlag){var t=new i(this,this._currentTime,e),n=this._finishHandlers.concat(this.onfinish?[this.onfinish]:[]);setTimeout((function(){n.forEach((function(e){e.call(t.target,t)}))}),0),this._finishedFlag=!0}}else this._finishedFlag=!1},_tick:function(e,t){this._idle||this._paused||(null==this._startTime?t&&(this.startTime=e-this._currentTime/this.playbackRate):this._isFinished||this._tickCurrentTime((e-this._startTime)*this.playbackRate)),t&&(this._currentTimePending=!1,this._fireEvents(e))},get _needsTick(){return this.playState in{pending:1,running:1}||!this._finishedFlag},_targetAnimations:function(){var e=this._effect._target;return e._activeAnimations||(e._activeAnimations=[]),e._activeAnimations},_markTarget:function(){var e=this._targetAnimations();-1===e.indexOf(this)&&e.push(this)},_unmarkTarget:function(){var e=this._targetAnimations(),t=e.indexOf(this);-1!==t&&e.splice(t,1)}}}(Aa,Sa),function(e,t,n){function i(e){var t=c;c=[],e<f.currentTime&&(e=f.currentTime),f._animations.sort(r),f._animations=s(e,!0,f._animations)[0],t.forEach((function(t){t[1](e)})),a()}function r(e,t){return e._sequenceNumber-t._sequenceNumber}function o(){this._animations=[],this.currentTime=window.performance&&performance.now?performance.now():0}function a(){h.forEach((function(e){e()})),h.length=0}function s(e,n,i){g=!0,u=!1,t.timeline.currentTime=e,p=!1;var r=[],o=[],a=[],s=[];return i.forEach((function(t){t._tick(e,n),t._inEffect?(o.push(t._effect),t._markTarget()):(r.push(t._effect),t._unmarkTarget()),t._needsTick&&(p=!0);var i=t._inEffect||t._needsTick;t._inTimeline=i,i?a.push(t):s.push(t)})),h.push.apply(h,r),h.push.apply(h,o),p&&requestAnimationFrame((function(){})),g=!1,[a,s]}var l=window.requestAnimationFrame,c=[],d=0;window.requestAnimationFrame=function(e){var t=d++;return 0==c.length&&l(i),c.push([t,e]),t},window.cancelAnimationFrame=function(e){c.forEach((function(t){t[0]==e&&(t[1]=function(){})}))},o.prototype={_play:function(n){n._timing=e.normalizeTimingInput(n.timing);var i=new t.Animation(n);return i._idle=!1,i._timeline=this,this._animations.push(i),t.restart(),t.applyDirtiedAnimation(i),i}};var p=!1,u=!1;t.restart=function(){return p||(p=!0,requestAnimationFrame((function(){})),u=!0),u},t.applyDirtiedAnimation=function(e){if(!g){e._markTarget();var n=e._targetAnimations();n.sort(r),s(t.timeline.currentTime,!1,n.slice())[1].forEach((function(e){var t=f._animations.indexOf(e);-1!==t&&f._animations.splice(t,1)})),a()}};var h=[],g=!1,f=new o;t.timeline=f}(Aa,Sa),function(e,t){function n(e,t){for(var n=0,i=0;i<e.length;i++)n+=e[i]*t[i];return n}function i(e,t){return[e[0]*t[0]+e[4]*t[1]+e[8]*t[2]+e[12]*t[3],e[1]*t[0]+e[5]*t[1]+e[9]*t[2]+e[13]*t[3],e[2]*t[0]+e[6]*t[1]+e[10]*t[2]+e[14]*t[3],e[3]*t[0]+e[7]*t[1]+e[11]*t[2]+e[15]*t[3],e[0]*t[4]+e[4]*t[5]+e[8]*t[6]+e[12]*t[7],e[1]*t[4]+e[5]*t[5]+e[9]*t[6]+e[13]*t[7],e[2]*t[4]+e[6]*t[5]+e[10]*t[6]+e[14]*t[7],e[3]*t[4]+e[7]*t[5]+e[11]*t[6]+e[15]*t[7],e[0]*t[8]+e[4]*t[9]+e[8]*t[10]+e[12]*t[11],e[1]*t[8]+e[5]*t[9]+e[9]*t[10]+e[13]*t[11],e[2]*t[8]+e[6]*t[9]+e[10]*t[10]+e[14]*t[11],e[3]*t[8]+e[7]*t[9]+e[11]*t[10]+e[15]*t[11],e[0]*t[12]+e[4]*t[13]+e[8]*t[14]+e[12]*t[15],e[1]*t[12]+e[5]*t[13]+e[9]*t[14]+e[13]*t[15],e[2]*t[12]+e[6]*t[13]+e[10]*t[14]+e[14]*t[15],e[3]*t[12]+e[7]*t[13]+e[11]*t[14]+e[15]*t[15]]}function r(e){var t=e.rad||0;return((e.deg||0)/360+(e.grad||0)/400+(e.turn||0))*(2*Math.PI)+t}function o(e){switch(e.t){case"rotatex":var t=r(e.d[0]);return[1,0,0,0,0,Math.cos(t),Math.sin(t),0,0,-Math.sin(t),Math.cos(t),0,0,0,0,1];case"rotatey":return t=r(e.d[0]),[Math.cos(t),0,-Math.sin(t),0,0,1,0,0,Math.sin(t),0,Math.cos(t),0,0,0,0,1];case"rotate":case"rotatez":return t=r(e.d[0]),[Math.cos(t),Math.sin(t),0,0,-Math.sin(t),Math.cos(t),0,0,0,0,1,0,0,0,0,1];case"rotate3d":var n=e.d[0],i=e.d[1],o=e.d[2],a=(t=r(e.d[3]),n*n+i*i+o*o);if(0===a)n=1,i=0,o=0;else if(1!==a){var s=Math.sqrt(a);n/=s,i/=s,o/=s}var l=Math.sin(t/2),c=l*Math.cos(t/2),d=l*l;return[1-2*(i*i+o*o)*d,2*(n*i*d+o*c),2*(n*o*d-i*c),0,2*(n*i*d-o*c),1-2*(n*n+o*o)*d,2*(i*o*d+n*c),0,2*(n*o*d+i*c),2*(i*o*d-n*c),1-2*(n*n+i*i)*d,0,0,0,0,1];case"scale":return[e.d[0],0,0,0,0,e.d[1],0,0,0,0,1,0,0,0,0,1];case"scalex":return[e.d[0],0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"scaley":return[1,0,0,0,0,e.d[0],0,0,0,0,1,0,0,0,0,1];case"scalez":return[1,0,0,0,0,1,0,0,0,0,e.d[0],0,0,0,0,1];case"scale3d":return[e.d[0],0,0,0,0,e.d[1],0,0,0,0,e.d[2],0,0,0,0,1];case"skew":var p=r(e.d[0]),u=r(e.d[1]);return[1,Math.tan(u),0,0,Math.tan(p),1,0,0,0,0,1,0,0,0,0,1];case"skewx":return t=r(e.d[0]),[1,0,0,0,Math.tan(t),1,0,0,0,0,1,0,0,0,0,1];case"skewy":return t=r(e.d[0]),[1,Math.tan(t),0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"translate":return[1,0,0,0,0,1,0,0,0,0,1,0,n=e.d[0].px||0,i=e.d[1].px||0,0,1];case"translatex":return[1,0,0,0,0,1,0,0,0,0,1,0,n=e.d[0].px||0,0,0,1];case"translatey":return[1,0,0,0,0,1,0,0,0,0,1,0,0,i=e.d[0].px||0,0,1];case"translatez":return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,o=e.d[0].px||0,1];case"translate3d":return[1,0,0,0,0,1,0,0,0,0,1,0,n=e.d[0].px||0,i=e.d[1].px||0,o=e.d[2].px||0,1];case"perspective":return[1,0,0,0,0,1,0,0,0,0,1,e.d[0].px?-1/e.d[0].px:0,0,0,0,1];case"matrix":return[e.d[0],e.d[1],0,0,e.d[2],e.d[3],0,0,0,0,1,0,e.d[4],e.d[5],0,1];case"matrix3d":return e.d}}function a(e){return 0===e.length?[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]:e.map(o).reduce(i)}function s(e){return[l(a(e))]}var l=function(){function e(e){return e[0][0]*e[1][1]*e[2][2]+e[1][0]*e[2][1]*e[0][2]+e[2][0]*e[0][1]*e[1][2]-e[0][2]*e[1][1]*e[2][0]-e[1][2]*e[2][1]*e[0][0]-e[2][2]*e[0][1]*e[1][0]}function t(t){for(var n=1/e(t),i=t[0][0],r=t[0][1],o=t[0][2],a=t[1][0],s=t[1][1],l=t[1][2],c=t[2][0],d=t[2][1],p=t[2][2],u=[[(s*p-l*d)*n,(o*d-r*p)*n,(r*l-o*s)*n,0],[(l*c-a*p)*n,(i*p-o*c)*n,(o*a-i*l)*n,0],[(a*d-s*c)*n,(c*r-i*d)*n,(i*s-r*a)*n,0]],h=[],g=0;g<3;g++){for(var f=0,m=0;m<3;m++)f+=t[3][m]*u[m][g];h.push(f)}return h.push(1),u.push(h),u}function i(e){return[[e[0][0],e[1][0],e[2][0],e[3][0]],[e[0][1],e[1][1],e[2][1],e[3][1]],[e[0][2],e[1][2],e[2][2],e[3][2]],[e[0][3],e[1][3],e[2][3],e[3][3]]]}function r(e,t){for(var n=[],i=0;i<4;i++){for(var r=0,o=0;o<4;o++)r+=e[o]*t[o][i];n.push(r)}return n}function o(e){var t=a(e);return[e[0]/t,e[1]/t,e[2]/t]}function a(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}function s(e,t,n,i){return[n*e[0]+i*t[0],n*e[1]+i*t[1],n*e[2]+i*t[2]]}function l(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function c(c){var d=[c.slice(0,4),c.slice(4,8),c.slice(8,12),c.slice(12,16)];if(1!==d[3][3])return null;for(var p=[],u=0;u<4;u++)p.push(d[u].slice());for(u=0;u<3;u++)p[u][3]=0;if(0===e(p))return null;var h,g=[];d[0][3]||d[1][3]||d[2][3]?(g.push(d[0][3]),g.push(d[1][3]),g.push(d[2][3]),g.push(d[3][3]),h=r(g,i(t(p)))):h=[0,0,0,1];var f=d[3].slice(0,3),m=[];m.push(d[0].slice(0,3));var b=[];b.push(a(m[0])),m[0]=o(m[0]);var v=[];m.push(d[1].slice(0,3)),v.push(n(m[0],m[1])),m[1]=s(m[1],m[0],1,-v[0]),b.push(a(m[1])),m[1]=o(m[1]),v[0]/=b[1],m.push(d[2].slice(0,3)),v.push(n(m[0],m[2])),m[2]=s(m[2],m[0],1,-v[1]),v.push(n(m[1],m[2])),m[2]=s(m[2],m[1],1,-v[2]),b.push(a(m[2])),m[2]=o(m[2]),v[1]/=b[2],v[2]/=b[2];var y=l(m[1],m[2]);if(n(m[0],y)<0)for(u=0;u<3;u++)b[u]*=-1,m[u][0]*=-1,m[u][1]*=-1,m[u][2]*=-1;var w,_,x=m[0][0]+m[1][1]+m[2][2]+1;return x>1e-4?(w=.5/Math.sqrt(x),_=[(m[2][1]-m[1][2])*w,(m[0][2]-m[2][0])*w,(m[1][0]-m[0][1])*w,.25/w]):m[0][0]>m[1][1]&&m[0][0]>m[2][2]?_=[.25*(w=2*Math.sqrt(1+m[0][0]-m[1][1]-m[2][2])),(m[0][1]+m[1][0])/w,(m[0][2]+m[2][0])/w,(m[2][1]-m[1][2])/w]:m[1][1]>m[2][2]?(w=2*Math.sqrt(1+m[1][1]-m[0][0]-m[2][2]),_=[(m[0][1]+m[1][0])/w,.25*w,(m[1][2]+m[2][1])/w,(m[0][2]-m[2][0])/w]):(w=2*Math.sqrt(1+m[2][2]-m[0][0]-m[1][1]),_=[(m[0][2]+m[2][0])/w,(m[1][2]+m[2][1])/w,.25*w,(m[1][0]-m[0][1])/w]),[f,b,v,_,h]}return c}();e.dot=n,e.makeMatrixDecomposition=s,e.transformListToMatrix=a}(Sa),function(e){function t(e,t){var n=e.exec(t);if(n)return[n=e.ignoreCase?n[0].toLowerCase():n[0],t.substr(n.length)]}function n(e,t){var n=e(t=t.replace(/^\s*/,""));if(n)return[n[0],n[1].replace(/^\s*/,"")]}function i(e,i,r){e=n.bind(null,e);for(var o=[];;){var a=e(r);if(!a)return[o,r];if(o.push(a[0]),!(a=t(i,r=a[1]))||""==a[1])return[o,r];r=a[1]}}function r(e,t){for(var n=0,i=0;i<t.length&&(!/\s|,/.test(t[i])||0!=n);i++)if("("==t[i])n++;else if(")"==t[i]&&(0==--n&&i++,n<=0))break;var r=e(t.substr(0,i));return null==r?void 0:[r,t.substr(i)]}function o(e,t){for(var n=e,i=t;n&&i;)n>i?n%=i:i%=n;return e*t/(n+i)}function a(e){return function(t){var n=e(t);return n&&(n[0]=void 0),n}}function s(e,t){return function(n){return e(n)||[t,n]}}function l(t,n){for(var i=[],r=0;r<t.length;r++){var o=e.consumeTrimmed(t[r],n);if(!o||""==o[0])return;void 0!==o[0]&&i.push(o[0]),n=o[1]}if(""==n)return i}function c(e,t,n,i,r){for(var a=[],s=[],l=[],c=o(i.length,r.length),d=0;d<c;d++){var p=t(i[d%i.length],r[d%r.length]);if(!p)return;a.push(p[0]),s.push(p[1]),l.push(p[2])}return[a,s,function(t){var i=t.map((function(e,t){return l[t](e)})).join(n);return e?e(i):i}]}function d(e,t,n){for(var i=[],r=[],o=[],a=0,s=0;s<n.length;s++)if("function"==typeof n[s]){var l=n[s](e[a],t[a++]);i.push(l[0]),r.push(l[1]),o.push(l[2])}else!function(e){i.push(!1),r.push(!1),o.push((function(){return n[e]}))}(s);return[i,r,function(e){for(var t="",n=0;n<e.length;n++)t+=o[n](e[n]);return t}]}e.consumeToken=t,e.consumeTrimmed=n,e.consumeRepeated=i,e.consumeParenthesised=r,e.ignore=a,e.optional=s,e.consumeList=l,e.mergeNestedRepeated=c.bind(null,null),e.mergeWrappedNestedRepeated=c,e.mergeList=d}(Sa),function(e){function t(t){function n(t){var n=e.consumeToken(/^inset/i,t);return n?(i.inset=!0,n):(n=e.consumeLengthOrPercent(t))?(i.lengths.push(n[0]),n):(n=e.consumeColor(t))?(i.color=n[0],n):void 0}var i={inset:!1,lengths:[],color:null},r=e.consumeRepeated(n,/^/,t);if(r&&r[0].length)return[i,r[1]]}function n(n){var i=e.consumeRepeated(t,/^,/,n);if(i&&""==i[1])return i[0]}function i(t,n){for(;t.lengths.length<Math.max(t.lengths.length,n.lengths.length);)t.lengths.push({px:0});for(;n.lengths.length<Math.max(t.lengths.length,n.lengths.length);)n.lengths.push({px:0});if(t.inset==n.inset&&!!t.color==!!n.color){for(var i,r=[],o=[[],0],a=[[],0],s=0;s<t.lengths.length;s++){var l=e.mergeDimensions(t.lengths[s],n.lengths[s],2==s);o[0].push(l[0]),a[0].push(l[1]),r.push(l[2])}if(t.color&&n.color){var c=e.mergeColors(t.color,n.color);o[1]=c[0],a[1]=c[1],i=c[2]}return[o,a,function(e){for(var n=t.inset?"inset ":" ",o=0;o<r.length;o++)n+=r[o](e[0][o])+" ";return i&&(n+=i(e[1])),n}]}}function r(t,n,i,r){function o(e){return{inset:e,color:[0,0,0,0],lengths:[{px:0},{px:0},{px:0},{px:0}]}}for(var a=[],s=[],l=0;l<i.length||l<r.length;l++){var c=i[l]||o(r[l].inset),d=r[l]||o(i[l].inset);a.push(c),s.push(d)}return e.mergeNestedRepeated(t,n,a,s)}var o=r.bind(null,i,", ");e.addPropertiesHandler(n,o,["box-shadow","text-shadow"])}(Sa),function(e,t){function n(e){return e.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function i(e,t,n){return Math.min(t,Math.max(e,n))}function r(e){if(/^\s*[-+]?(\d*\.)?\d+\s*$/.test(e))return Number(e)}function o(e,t){return[e,t,n]}function a(e,t){if(0!=e)return l(0,1/0)(e,t)}function s(e,t){return[e,t,function(e){return Math.round(i(1,1/0,e))}]}function l(e,t){return function(r,o){return[r,o,function(r){return n(i(e,t,r))}]}}function c(e){var t=e.trim().split(/\s*[\s,]\s*/);if(0!==t.length){for(var n=[],i=0;i<t.length;i++){var o=r(t[i]);if(void 0===o)return;n.push(o)}return n}}function d(e,t){if(e.length==t.length)return[e,t,function(e){return e.map(n).join(" ")}]}function p(e,t){return[e,t,Math.round]}e.clamp=i,e.addPropertiesHandler(c,d,["stroke-dasharray"]),e.addPropertiesHandler(r,l(0,1/0),["border-image-width","line-height"]),e.addPropertiesHandler(r,l(0,1),["opacity","shape-image-threshold"]),e.addPropertiesHandler(r,a,["flex-grow","flex-shrink"]),e.addPropertiesHandler(r,s,["orphans","widows"]),e.addPropertiesHandler(r,p,["z-index"]),e.parseNumber=r,e.parseNumberList=c,e.mergeNumbers=o,e.numberToString=n}(Sa),function(e,t){function n(e,t){if("visible"==e||"visible"==t)return[0,1,function(n){return n<=0?e:n>=1?t:"visible"}]}e.addPropertiesHandler(String,n,["visibility"])}(Sa),function(e,t){function n(e){e=e.trim(),o.fillStyle="#000",o.fillStyle=e;var t=o.fillStyle;if(o.fillStyle="#fff",o.fillStyle=e,t==o.fillStyle){o.fillRect(0,0,1,1);var n=o.getImageData(0,0,1,1).data;o.clearRect(0,0,1,1);var i=n[3]/255;return[n[0]*i,n[1]*i,n[2]*i,i]}}function i(t,n){return[t,n,function(t){function n(e){return Math.max(0,Math.min(255,e))}if(t[3])for(var i=0;i<3;i++)t[i]=Math.round(n(t[i]/t[3]));return t[3]=e.numberToString(e.clamp(0,1,t[3])),"rgba("+t.join(",")+")"}]}var r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");r.width=r.height=1;var o=r.getContext("2d");e.addPropertiesHandler(n,i,["background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","color","fill","flood-color","lighting-color","outline-color","stop-color","stroke","text-decoration-color"]),e.consumeColor=e.consumeParenthesised.bind(null,n),e.mergeColors=i}(Sa),function(e,t){function n(e){function t(){var t=s.exec(e);a=t?t[0]:void 0}function n(){var e=Number(a);return t(),e}function i(){if("("!==a)return n();t();var e=o();return")"!==a?NaN:(t(),e)}function r(){for(var e=i();"*"===a||"/"===a;){var n=a;t();var r=i();"*"===n?e*=r:e/=r}return e}function o(){for(var e=r();"+"===a||"-"===a;){var n=a;t();var i=r();"+"===n?e+=i:e-=i}return e}var a,s=/([\+\-\w\.]+|[\(\)\*\/])/g;return t(),o()}function i(e,t){if("0"==(t=t.trim().toLowerCase())&&"px".search(e)>=0)return{px:0};if(/^[^(]*$|^calc/.test(t)){t=t.replace(/calc\(/g,"(");var i={};t=t.replace(e,(function(e){return i[e]=null,"U"+e}));for(var r="U("+e.source+")",o=t.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g,"N").replace(new RegExp("N"+r,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),a=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],s=0;s<a.length;)a[s].test(o)?(o=o.replace(a[s],"$1"),s=0):s++;if("D"==o){for(var l in i){var c=n(t.replace(new RegExp("U"+l,"g"),"").replace(new RegExp(r,"g"),"*0"));if(!isFinite(c))return;i[l]=c}return i}}}function r(e,t){return o(e,t,!0)}function o(t,n,i){var r,o=[];for(r in t)o.push(r);for(r in n)o.indexOf(r)<0&&o.push(r);return t=o.map((function(e){return t[e]||0})),n=o.map((function(e){return n[e]||0})),[t,n,function(t){var n=t.map((function(n,r){return 1==t.length&&i&&(n=Math.max(n,0)),e.numberToString(n)+o[r]})).join(" + ");return t.length>1?"calc("+n+")":n}]}var a="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",s=i.bind(null,new RegExp(a,"g")),l=i.bind(null,new RegExp(a+"|%","g")),c=i.bind(null,/deg|rad|grad|turn/g);e.parseLength=s,e.parseLengthOrPercent=l,e.consumeLengthOrPercent=e.consumeParenthesised.bind(null,l),e.parseAngle=c,e.mergeDimensions=o;var d=e.consumeParenthesised.bind(null,s),p=e.consumeRepeated.bind(void 0,d,/^/),u=e.consumeRepeated.bind(void 0,p,/^,/);e.consumeSizePairList=u;var h=function(e){var t=u(e);if(t&&""==t[1])return t[0]},g=e.mergeNestedRepeated.bind(void 0,r," "),f=e.mergeNestedRepeated.bind(void 0,g,",");e.mergeNonNegativeSizePair=g,e.addPropertiesHandler(h,f,["background-size"]),e.addPropertiesHandler(l,r,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),e.addPropertiesHandler(l,o,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","stroke-dashoffset","text-indent","top","vertical-align","word-spacing"])}(Sa),function(e,t){function n(t){return e.consumeLengthOrPercent(t)||e.consumeToken(/^auto/,t)}function i(t){var i=e.consumeList([e.ignore(e.consumeToken.bind(null,/^rect/)),e.ignore(e.consumeToken.bind(null,/^\(/)),e.consumeRepeated.bind(null,n,/^,/),e.ignore(e.consumeToken.bind(null,/^\)/))],t);if(i&&4==i[0].length)return i[0]}function r(t,n){return"auto"==t||"auto"==n?[!0,!1,function(i){var r=i?t:n;if("auto"==r)return"auto";var o=e.mergeDimensions(r,r);return o[2](o[0])}]:e.mergeDimensions(t,n)}function o(e){return"rect("+e+")"}var a=e.mergeWrappedNestedRepeated.bind(null,o,r,", ");e.parseBox=i,e.mergeBoxes=a,e.addPropertiesHandler(i,a,["clip"])}(Sa),function(e,t){function n(e){return function(t){var n=0;return e.map((function(e){return e===d?t[n++]:e}))}}function i(e){return e}function r(t){if("none"==(t=t.toLowerCase().trim()))return[];for(var n,i=/\s*(\w+)\(([^)]*)\)/g,r=[],o=0;n=i.exec(t);){if(n.index!=o)return;o=n.index+n[0].length;var a=n[1],s=h[a];if(!s)return;var l=n[2].split(","),c=s[0];if(c.length<l.length)return;for(var d=[],g=0;g<c.length;g++){var f,m=l[g],b=c[g];if(void 0===(f=m?{A:function(t){return"0"==t.trim()?u:e.parseAngle(t)},N:e.parseNumber,T:e.parseLengthOrPercent,L:e.parseLength}[b.toUpperCase()](m):{a:u,n:d[0],t:p}[b]))return;d.push(f)}if(r.push({t:a,d:d}),i.lastIndex==t.length)return r}}function o(e){return e.toFixed(6).replace(".000000","")}function a(t,n){if(t.decompositionPair!==n){t.decompositionPair=n;var i=e.makeMatrixDecomposition(t)}if(n.decompositionPair!==t){n.decompositionPair=t;var r=e.makeMatrixDecomposition(n)}return null==i[0]||null==r[0]?[[!1],[!0],function(e){return e?n[0].d:t[0].d}]:(i[0].push(0),r[0].push(1),[i,r,function(t){var n=e.quat(i[0][3],r[0][3],t[5]);return e.composeMatrix(t[0],t[1],t[2],n,t[4]).map(o).join(",")}])}function s(e){return e.replace(/[xy]/,"")}function l(e){return e.replace(/(x|y|z|3d)?$/,"3d")}function c(t,n){var i=e.makeMatrixDecomposition&&!0,r=!1;if(!t.length||!n.length){t.length||(r=!0,t=n,n=[]);for(var o=0;o<t.length;o++){var c=t[o].t,d=t[o].d,p="scale"==c.substr(0,5)?1:0;n.push({t:c,d:d.map((function(e){if("number"==typeof e)return p;var t={};for(var n in e)t[n]=p;return t}))})}}var u=function(e,t){return"perspective"==e&&"perspective"==t||("matrix"==e||"matrix3d"==e)&&("matrix"==t||"matrix3d"==t)},g=[],f=[],m=[];if(t.length!=n.length){if(!i)return;g=[(k=a(t,n))[0]],f=[k[1]],m=[["matrix",[k[2]]]]}else for(o=0;o<t.length;o++){var b=t[o].t,v=n[o].t,y=t[o].d,w=n[o].d,_=h[b],x=h[v];if(u(b,v)){if(!i)return;var k=a([t[o]],[n[o]]);g.push(k[0]),f.push(k[1]),m.push(["matrix",[k[2]]])}else{if(b==v)c=b;else if(_[2]&&x[2]&&s(b)==s(v))c=s(b),y=_[2](y),w=x[2](w);else{if(!_[1]||!x[1]||l(b)!=l(v)){if(!i)return;g=[(k=a(t,n))[0]],f=[k[1]],m=[["matrix",[k[2]]]];break}c=l(b),y=_[1](y),w=x[1](w)}for(var A=[],S=[],E=[],T=0;T<y.length;T++)k=("number"==typeof y[T]?e.mergeNumbers:e.mergeDimensions)(y[T],w[T]),A[T]=k[0],S[T]=k[1],E.push(k[2]);g.push(A),f.push(S),m.push([c,E])}}if(r){var C=g;g=f,f=C}return[g,f,function(e){return e.map((function(e,t){var n=e.map((function(e,n){return m[t][1][n](e)})).join(",");return"matrix"==m[t][0]&&16==n.split(",").length&&(m[t][0]="matrix3d"),m[t][0]+"("+n+")"})).join(" ")}]}var d=null,p={px:0},u={deg:0},h={matrix:["NNNNNN",[d,d,0,0,d,d,0,0,0,0,1,0,d,d,0,1],i],matrix3d:["NNNNNNNNNNNNNNNN",i],rotate:["A"],rotatex:["A"],rotatey:["A"],rotatez:["A"],rotate3d:["NNNA"],perspective:["L"],scale:["Nn",n([d,d,1]),i],scalex:["N",n([d,1,1]),n([d,1])],scaley:["N",n([1,d,1]),n([1,d])],scalez:["N",n([1,1,d])],scale3d:["NNN",i],skew:["Aa",null,i],skewx:["A",null,n([d,u])],skewy:["A",null,n([u,d])],translate:["Tt",n([d,d,p]),i],translatex:["T",n([d,p,p]),n([d,p])],translatey:["T",n([p,d,p]),n([p,d])],translatez:["L",n([p,p,d])],translate3d:["TTL",i]};e.addPropertiesHandler(r,c,["transform"]),e.transformToSvgMatrix=function(t){var n=e.transformListToMatrix(r(t));return"matrix("+o(n[0])+" "+o(n[1])+" "+o(n[4])+" "+o(n[5])+" "+o(n[12])+" "+o(n[13])+")"}}(Sa),function(e){function t(e){var t=Number(e);if(!(isNaN(t)||t<100||t>900||t%100!=0))return t}function n(t){return t=100*Math.round(t/100),400===(t=e.clamp(100,900,t))?"normal":700===t?"bold":String(t)}function i(e,t){return[e,t,n]}e.addPropertiesHandler(t,i,["font-weight"])}(Sa),function(e){function t(e){var t={};for(var n in e)t[n]=-e[n];return t}function n(t){return e.consumeToken(/^(left|center|right|top|bottom)\b/i,t)||e.consumeLengthOrPercent(t)}function i(t,i){var r=e.consumeRepeated(n,/^/,i);if(r&&""==r[1]){var o=r[0];if(o[0]=o[0]||"center",o[1]=o[1]||"center",3==t&&(o[2]=o[2]||{px:0}),o.length==t){if(/top|bottom/.test(o[0])||/left|right/.test(o[1])){var s=o[0];o[0]=o[1],o[1]=s}if(/left|right|center|Object/.test(o[0])&&/top|bottom|center|Object/.test(o[1]))return o.map((function(e){return"object"==typeof e?e:a[e]}))}}}function r(i){var r=e.consumeRepeated(n,/^/,i);if(r){for(var o=r[0],s=[{"%":50},{"%":50}],l=0,c=!1,d=0;d<o.length;d++){var p=o[d];"string"==typeof p?(c=/bottom|right/.test(p),s[l={left:0,right:0,center:l,top:1,bottom:1}[p]]=a[p],"center"==p&&l++):(c&&((p=t(p))["%"]=(p["%"]||0)+100),s[l]=p,l++,c=!1)}return[s,r[1]]}}function o(t){var n=e.consumeRepeated(r,/^,/,t);if(n&&""==n[1])return n[0]}var a={left:{"%":0},center:{"%":50},right:{"%":100},top:{"%":0},bottom:{"%":100}},s=e.mergeNestedRepeated.bind(null,e.mergeDimensions," ");e.addPropertiesHandler(i.bind(null,3),s,["transform-origin"]),e.addPropertiesHandler(i.bind(null,2),s,["perspective-origin"]),e.consumePosition=r,e.mergeOffsetList=s;var l=e.mergeNestedRepeated.bind(null,s,", ");e.addPropertiesHandler(o,l,["background-position","object-position"])}(Sa),function(e){function t(t){var n=e.consumeToken(/^circle/,t);if(n&&n[0])return["circle"].concat(e.consumeList([e.ignore(e.consumeToken.bind(void 0,/^\(/)),i,e.ignore(e.consumeToken.bind(void 0,/^at/)),e.consumePosition,e.ignore(e.consumeToken.bind(void 0,/^\)/))],n[1]));var o=e.consumeToken(/^ellipse/,t);if(o&&o[0])return["ellipse"].concat(e.consumeList([e.ignore(e.consumeToken.bind(void 0,/^\(/)),r,e.ignore(e.consumeToken.bind(void 0,/^at/)),e.consumePosition,e.ignore(e.consumeToken.bind(void 0,/^\)/))],o[1]));var a=e.consumeToken(/^polygon/,t);return a&&a[0]?["polygon"].concat(e.consumeList([e.ignore(e.consumeToken.bind(void 0,/^\(/)),e.optional(e.consumeToken.bind(void 0,/^nonzero\s*,|^evenodd\s*,/),"nonzero,"),e.consumeSizePairList,e.ignore(e.consumeToken.bind(void 0,/^\)/))],a[1])):void 0}function n(t,n){if(t[0]===n[0])return"circle"==t[0]?e.mergeList(t.slice(1),n.slice(1),["circle(",e.mergeDimensions," at ",e.mergeOffsetList,")"]):"ellipse"==t[0]?e.mergeList(t.slice(1),n.slice(1),["ellipse(",e.mergeNonNegativeSizePair," at ",e.mergeOffsetList,")"]):"polygon"==t[0]&&t[1]==n[1]?e.mergeList(t.slice(2),n.slice(2),["polygon(",t[1],a,")"]):void 0}var i=e.consumeParenthesised.bind(null,e.parseLengthOrPercent),r=e.consumeRepeated.bind(void 0,i,/^/),o=e.mergeNestedRepeated.bind(void 0,e.mergeDimensions," "),a=e.mergeNestedRepeated.bind(void 0,o,",");e.addPropertiesHandler(t,n,["shape-outside"])}(Sa),function(e,t){function n(e,t){t.concat([e]).forEach((function(t){t in document.documentElement.style&&(i[e]=t),r[t]=e}))}var i={},r={};n("transform",["webkitTransform","msTransform"]),n("transformOrigin",["webkitTransformOrigin"]),n("perspective",["webkitPerspective"]),n("perspectiveOrigin",["webkitPerspectiveOrigin"]),e.propertyName=function(e){return i[e]||e},e.unprefixedPropertyName=function(e){return r[e]||e}}(Sa)}(),function(){if(void 0===document.createElement("div").animate([]).oncancel){if(window.performance&&performance.now)var e=function(){return performance.now()};else e=function(){return Date.now()};var t=function(e,t,n){this.target=e,this.currentTime=t,this.timelineTime=n,this.type="cancel",this.bubbles=!1,this.cancelable=!1,this.currentTarget=e,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()},n=window.Element.prototype.animate;window.Element.prototype.animate=function(i,r){var o=n.call(this,i,r);o._cancelHandlers=[],o.oncancel=null;var a=o.cancel;o.cancel=function(){a.call(this);var n=new t(this,null,e()),i=this._cancelHandlers.concat(this.oncancel?[this.oncancel]:[]);setTimeout((function(){i.forEach((function(e){e.call(n.target,n)}))}),0)};var s=o.addEventListener;o.addEventListener=function(e,t){"function"==typeof t&&"cancel"==e?this._cancelHandlers.push(t):s.call(this,e,t)};var l=o.removeEventListener;return o.removeEventListener=function(e,t){if("cancel"==e){var n=this._cancelHandlers.indexOf(t);n>=0&&this._cancelHandlers.splice(n,1)}else l.call(this,e,t)},o}}}(),function(e){var t=document.documentElement,n=null,i=!1;try{var r="0"==getComputedStyle(t).getPropertyValue("opacity")?"1":"0";(n=t.animate({opacity:[r,r]},{duration:1})).currentTime=0,i=getComputedStyle(t).getPropertyValue("opacity")==r}catch(e){}finally{n&&n.cancel()}if(!i){var o=window.Element.prototype.animate;window.Element.prototype.animate=function(t,n){return window.Symbol&&Symbol.iterator&&Array.prototype.from&&t[Symbol.iterator]&&(t=Array.from(t)),Array.isArray(t)||null===t||(t=e.convertToArrayForm(t)),o.call(this,t,n)}}}(Aa),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host > ::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      :host > ::slotted(:not(.iron-selected):not(.neon-animating))
       {
        display: none !important;
      }

      :host > ::slotted(.neon-animating) {
        pointer-events: none;
      }
    </style>

    <slot id="content"></slot>
  `,is:"neon-animated-pages",behaviors:[b,y,_],properties:{activateEvent:{type:String,value:""},animateInitialSelection:{type:Boolean,value:!1}},listeners:{"iron-select":"_onIronSelect","neon-animation-finish":"_onNeonAnimationFinish"},_onIronSelect:function(e){var t=e.detail.item;if(!(this.items.indexOf(t)<0)){var n=this._valueToItem(this._prevSelected)||!1;this._prevSelected=this.selected,n||this.animateInitialSelection?(this.animationConfig=[],this.entryAnimation?this.animationConfig.push({name:this.entryAnimation,node:t}):t.getAnimationConfig&&this.animationConfig.push({animatable:t,type:"entry"}),n&&(n.classList.contains("neon-animating")&&(this._squelchNextFinishEvent=!0,this.cancelAnimation(),this._completeSelectedChanged(),this._squelchNextFinishEvent=!1),this.exitAnimation?this.animationConfig.push({name:this.exitAnimation,node:n}):n.getAnimationConfig&&this.animationConfig.push({animatable:n,type:"exit"}),n.classList.add("neon-animating")),t.classList.add("neon-animating"),this.animationConfig.length>=1?this.isAttached?this.playAnimation(void 0,{fromPage:n,toPage:t}):this.async((function(){this.playAnimation(void 0,{fromPage:null,toPage:t})})):this._completeSelectedChanged(n,t)):this._completeSelectedChanged()}},_completeSelectedChanged:function(t,n){if(n&&n.classList.remove("neon-animating"),t&&t.classList.remove("neon-animating"),!n||!t)for(var i,r=e(this.$.content).getDistributedNodes(),o=0;i=r[o];o++)i.classList&&i.classList.remove("neon-animating");this.async(this._notifyPageResize)},_onNeonAnimationFinish:function(e){this._squelchNextFinishEvent?this._squelchNextFinishEvent=!1:this._completeSelectedChanged(e.detail.fromPage,e.detail.toPage)},_notifyPageResize:function(){var e=this.selectedItem||this._valueToItem(this.selected);this.resizerShouldNotify=function(t){return t==e},this.notifyResize()}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({_template:n`
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
  `,is:"neon-animatable",behaviors:[x,b]}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"cascaded-animation",behaviors:[k],configure:function(e){this._animations=[];var t=e.nodes,n=[],i=e.nodeDelay||50;e.timing=e.timing||{},e.timing.delay=e.timing.delay||0;for(var r,o,a=e.timing.delay,s=0;o=t[s];s++){e.timing.delay+=i,e.node=o;var l=document.createElement(e.animation);if(!l.isNeonAnimation){console.warn(this.is+":",e.animation,"not found!"),r=!0;break}var c=l.configure(e);this._animations.push(l),n.push(c)}if(e.timing.delay=a,e.node=null,!r)return this._effect=new GroupEffect(n),this._effect},complete:function(){for(var e,t=0;e=this._animations[t];t++)e.complete(e.config)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ea=[k,{properties:{sharedElements:{type:Object}},findSharedElements:function(e){var t=e.fromPage,n=e.toPage;if(!t||!n)return console.warn(this.is+":",t?"toPage":"fromPage","is undefined!"),null;if(!t.sharedElements||!n.sharedElements)return console.warn(this.is+":","sharedElements are undefined for",t.sharedElements?n:t),null;var i=t.sharedElements[e.id],r=n.sharedElements[e.id];return i&&r?(this.sharedElements={from:i,to:r},this.sharedElements):(console.warn(this.is+":","sharedElement with id",e.id,"not found in",i?n:t),null)}}];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"hero-animation",behaviors:[Ea],configure:function(e){var t=this.findSharedElements(e);if(t){var n=t.from.getBoundingClientRect(),i=t.to.getBoundingClientRect(),r=n.left-i.left,o=n.top-i.top,a=n.width/i.width,s=n.height/i.height;return this._effect=new KeyframeEffect(t.to,[{transform:"translate("+r+"px,"+o+"px) scale("+a+","+s+")"},{transform:"none"}],this.timingFromConfig(e)),this.setPrefixedProperty(t.to,"transformOrigin","0 0"),t.to.style.zIndex=1e4,t.from.style.visibility="hidden",this._effect}},complete:function(e){var t=this.findSharedElements(e);if(!t)return null;t.to.style.zIndex="",t.from.style.visibility=""}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"opaque-animation",behaviors:[k],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{opacity:"1"},{opacity:"1"}],this.timingFromConfig(e)),t.style.opacity="0",this._effect},complete:function(e){e.node.style.opacity=""}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"ripple-animation",behaviors:[Ea],configure:function(e){var t,n,i=this.findSharedElements(e);if(!i)return null;var r=i.to.getBoundingClientRect();if(e.gesture)t=e.gesture.x-(r.left+r.width/2),n=e.gesture.y-(r.top+r.height/2);else{var o=i.from.getBoundingClientRect();t=o.left+o.width/2-(r.left+r.width/2),n=o.top+o.height/2-(r.top+r.height/2)}var a="translate("+t+"px,"+n+"px)",s=Math.max(r.width+2*Math.abs(t),r.height+2*Math.abs(n)),l=Math.sqrt(2*s*s),c="scale("+l/r.width+","+l/r.height+")";return this._effect=new KeyframeEffect(i.to,[{transform:a+" scale(0)"},{transform:a+" "+c}],this.timingFromConfig(e)),this.setPrefixedProperty(i.to,"transformOrigin","50% 50%"),i.to.style.borderRadius="50%",this._effect},complete:function(){this.sharedElements&&(this.setPrefixedProperty(this.sharedElements.to,"transformOrigin",""),this.sharedElements.to.style.borderRadius="")}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"reverse-ripple-animation",behaviors:[Ea],configure:function(e){var t,n,i=this.findSharedElements(e);if(!i)return null;var r=i.from.getBoundingClientRect();if(e.gesture)t=e.gesture.x-(r.left+r.width/2),n=e.gesture.y-(r.top+r.height/2);else{var o=i.to.getBoundingClientRect();t=o.left+o.width/2-(r.left+r.width/2),n=o.top+o.height/2-(r.top+r.height/2)}var a="translate("+t+"px,"+n+"px)",s=Math.max(r.width+2*Math.abs(t),r.height+2*Math.abs(n)),l=Math.sqrt(2*s*s),c="scale("+l/r.width+","+l/r.height+")";return this._effect=new KeyframeEffect(i.from,[{transform:a+" "+c},{transform:a+" scale(0)"}],this.timingFromConfig(e)),this.setPrefixedProperty(i.from,"transformOrigin","50% 50%"),i.from.style.borderRadius="50%",this._effect},complete:function(){this.sharedElements&&(this.setPrefixedProperty(this.sharedElements.from,"transformOrigin",""),this.sharedElements.from.style.borderRadius="")}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"scale-down-animation",behaviors:[k],configure:function(e){var t=e.node,n="scale(0, 0)";return"x"===e.axis?n="scale(0, 1)":"y"===e.axis&&(n="scale(1, 0)"),this._effect=new KeyframeEffect(t,[{transform:"scale(1,1)"},{transform:n}],this.timingFromConfig(e)),e.transformOrigin&&this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"scale-up-animation",behaviors:[k],configure:function(e){var t=e.node,n="scale(0)";return"x"===e.axis?n="scale(0, 1)":"y"===e.axis&&(n="scale(1, 0)"),this._effect=new KeyframeEffect(t,[{transform:n},{transform:"scale(1, 1)"}],this.timingFromConfig(e)),e.transformOrigin&&this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"slide-from-left-animation",behaviors:[k],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{transform:"translateX(-100%)"},{transform:"none"}],this.timingFromConfig(e)),e.transformOrigin?this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin):this.setPrefixedProperty(t,"transformOrigin","0 50%"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"slide-from-right-animation",behaviors:[k],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{transform:"translateX(100%)"},{transform:"none"}],this.timingFromConfig(e)),e.transformOrigin?this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin):this.setPrefixedProperty(t,"transformOrigin","0 50%"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"slide-from-top-animation",behaviors:[k],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{transform:"translateY(-100%)"},{transform:"translateY(0%)"}],this.timingFromConfig(e)),e.transformOrigin?this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin):this.setPrefixedProperty(t,"transformOrigin","50% 0"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"slide-from-bottom-animation",behaviors:[k],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{transform:"translateY(100%)"},{transform:"translateY(0)"}],this.timingFromConfig(e)),e.transformOrigin?this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin):this.setPrefixedProperty(t,"transformOrigin","50% 0"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"slide-left-animation",behaviors:[k],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{transform:"none"},{transform:"translateX(-100%)"}],this.timingFromConfig(e)),e.transformOrigin?this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin):this.setPrefixedProperty(t,"transformOrigin","0 50%"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"slide-right-animation",behaviors:[k],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{transform:"none"},{transform:"translateX(100%)"}],this.timingFromConfig(e)),e.transformOrigin?this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin):this.setPrefixedProperty(t,"transformOrigin","0 50%"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"slide-up-animation",behaviors:[k],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{transform:"translate(0)"},{transform:"translateY(-100%)"}],this.timingFromConfig(e)),e.transformOrigin?this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin):this.setPrefixedProperty(t,"transformOrigin","50% 0"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"slide-down-animation",behaviors:[k],configure:function(e){var t=e.node;return this._effect=new KeyframeEffect(t,[{transform:"translateY(0%)"},{transform:"translateY(100%)"}],this.timingFromConfig(e)),e.transformOrigin?this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin):this.setPrefixedProperty(t,"transformOrigin","50% 0"),this._effect}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
t({is:"transform-animation",behaviors:[k],configure:function(e){var t=e.node,n=e.transformFrom||"none",i=e.transformTo||"none";return this._effect=new KeyframeEffect(t,[{transform:n},{transform:i}],this.timingFromConfig(e)),e.transformOrigin&&this.setPrefixedProperty(t,"transformOrigin",e.transformOrigin),this._effect}});class Ta extends(P(L)){static get properties(){return z(z({},super.properties),{},{label:{type:String},odds:{type:Array},name:{type:String},odd:{type:String,notify:!0}})}constructor(){super(),this.label="document.selectODD",this.odds=[]}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-update",this._onTargetUpdate.bind(this))}firstUpdated(){super.firstUpdated(),this._refresh()}render(){return R`
            <paper-dropdown-menu id="menu" label="${i(this.label)}" name="${this.name}">
                <paper-listbox id="odds" slot="dropdown-content" class="dropdown-content" selected="${this.odd}" 
                    attr-for-selected="value" @selected-item-changed="${this._selected}">
                    ${this.odds.map(e=>R`<paper-item value="${e.name}">${e.label}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>

            <iron-ajax
                id="load"
                verbose
                handle-as="json"
                method="get"
                with-credentials
                @response="${this._update}"></iron-ajax>
        `}static get styles(){return O`
            :host {
                display: block;
            }

            paper-dropdown-menu {
                --paper-listbox-background-color: white;
                width: 100%;
            }
        `}_selected(){const e=this.shadowRoot.getElementById("odds").selected;if(e===this.odd)return;this.odd=e,console.log("<pb-select-odd> Switching to ODD %s",this.odd);const t=this.getDocument();t&&(t.odd=this.odd),this.setParameter("odd",this.odd+".odd"),this.pushHistory("changed odd",{odd:this.odd}),this.emitTo("pb-refresh",{odd:this.odd})}_refresh(){const e=this.shadowRoot.getElementById("load");e.url=this.getEndpoint()+"/modules/lib/components-list-odds.xql",e.params={odd:this.odd},e.generateRequest()}_update(){const e=this.shadowRoot.getElementById("load");this.odds=e.lastResponse}_onTargetUpdate(e){let t=e.detail.data.odd;t&&(t=t.replace(/^(.*?)\.[^\.]+$/,"$1")),t!==this.odd&&console.log("<pb-select-odd> Set current ODD from %s to %s",this.odd,t),this.odd=t}}customElements.define("pb-select-odd",Ta);class Ca extends(P(L)){static get properties(){return z(z({},super.properties),{},{label:{type:String},template:{type:String},_templates:{type:Array}})}constructor(){super(),this.label="document.selectTemplate",this._templates=[]}firstUpdated(){Ca.waitOnce("pb-page-ready",e=>{this.template=e.template;const t=this.shadowRoot.getElementById("getTemplates");t.url=e.endpoint+"/modules/lib/components-list-templates.xql",t.generateRequest()})}render(){return R`
            <paper-dropdown-menu id="menu" label="${i(this.label)}" name="${this.name}">
                <paper-listbox id="templates" slot="dropdown-content" class="dropdown-content" 
                    selected="${this.template}" attr-for-selected="value"
                    @selected-item-changed="${this._selected}">
                ${this._templates.map(e=>R`<paper-item value="${e.name}">${e.title}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>

            <iron-ajax id="getTemplates" with-credentials
                handle-as="json" @response="${this._handleTemplatesResponse}"
                method="GET"></iron-ajax>
        `}static get styles(){return O`
            :host {
                display: block;
            }
            paper-dropdown-menu {
                --paper-listbox-background-color: white;
                width: 100%;
            }
        `}_selected(){const e=this.shadowRoot.getElementById("templates").selected;e!==this.template&&(this.setParameter("template",e),window.location=this.getUrl().toString())}_handleTemplatesResponse(){const e=this.shadowRoot.getElementById("getTemplates");this._templates=e.lastResponse}}customElements.define("pb-select-template",Ca);class La extends $n{static get properties(){return z(z({},super.properties),{},{longitude:{type:Number},latitude:{type:Number},label:{type:String}})}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseover",()=>this.emitTo("pb-geolocation",{coordinates:{latitude:this.latitude,longitude:this.longitude},label:this.label}))}render(){return R`<span id="content"><slot></slot></span>`}static get styles(){return O`
            :host {
                display: inline;
            }

            @keyframes keyFrameBackgroundColorIn {
                0% {
                    background-color: inherit;
                }
                100% {
                    background-color: var(--pb-highlight-color, #F9E976);
                }
            }

            #content {
                display: inline;
            }

            .highlight-on {
                background-color: var(--pb-highlight-color, #F9E976);
                animation-name: keyFrameBackgroundColorIn;
                animation-duration: 500ms;
                animation-iteration-count: 1;
                animation-timing-function: ease-in;

            }

            .highlight-off {
                background-color: inherit;
            }
        `}}customElements.define("pb-geolocation",La);class Ra extends(P(L)){static get properties(){return z(z({},super.properties),{},{initial:{type:Number},_instances:{type:Array}})}constructor(){super(),this.initial=1,this._instances=[]}connectedCallback(){super.connectedCallback(),this.template=this.querySelector("template");const e=this.getParameters(),t=Object.keys(e).filter(e=>/\[\d+\]$/.test(e)).sort();if(t.length>0){const e=t[t.length-1].replace(/^.*\[(\d+)\]$/,"$1");this.initial=parseInt(e,10)}if(0===this._instances.length)for(let t=0;t<this.initial;t++)this._add(e)}add(){this._add(),this.requestUpdate()}_add(e){const t=this._instances.length+1,n=document.importNode(this.template.content,!0),i=document.createElement("div");i.appendChild(n),i.querySelectorAll("[name]").forEach(n=>{const i=`${n.name}[${t}]`;e&&e[i]&&("checkbox"===n.type||"radio"===n.type?n.checked=e[i]===n.value:n.value=e[i]),n.name=i}),this._instances.push(i)}_renumber(){this._instances.forEach((e,t)=>{e.querySelectorAll("[name]").forEach(e=>{const n=e.name.replace(/^(.*)\[\d+\]$/,"$1");e.name=`${n}[${t+1}]`})})}delete(e){this._instances.splice(e,1),this._renumber(),this.requestUpdate()}render(){return R`
            <div class="instances">${this._instances.map(this.renderInstance.bind(this))}</div>
            <paper-icon-button icon="add" @click="${this.add}"></paper-icon-button>
        `}renderInstance(e,t){return R`
            <div class="instance">
                ${e}
                <paper-icon-button icon="delete" @click="${()=>this.delete(t)}"></paper-icon-button>
            </div>`}createRenderRoot(){return this}}customElements.define("pb-repeat",Ra);
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class Oa{constructor(){this.load=(e,t,n=!1)=>{let i=window.ESGlobalBridge.imports&&window.ESGlobalBridge.imports[e];if(!(!n&&window.ESGlobalBridge.webpack&&window.ESGlobalBridge.webpack[e])&&!i)return new Promise((n,i)=>{const r=document.createElement("script");r.src=t,r.setAttribute("data-name",e),window.ESGlobalBridge.imports[e]=t,r.onload=()=>{n(window.ESGlobalBridge.imports[e]),window.ESGlobalBridge.imports[e]=!0,setTimeout(()=>{const n=new CustomEvent(`es-bridge-${e}-loaded`,{bubbles:!0,cancelable:!0,detail:{name:e,location:t}});document.dispatchEvent(n)},100)},r.onerror=()=>{i(new Error(`Failed to load ${e} script with location ${t}.`)),delete window.ESGlobalBridge.imports[e],window.ESGlobalBridge.imports[e]=!1},document.documentElement.appendChild(r)})}}}window.ESGlobalBridge=window.ESGlobalBridge||{},window.ESGlobalBridge.imports=window.ESGlobalBridge.imports||{},window.ESGlobalBridge.requestAvailability=()=>{window.ESGlobalBridge.instance||(window.ESGlobalBridge.instance=new Oa)};class za extends(P(L)){static get properties(){return z(z({},super.properties),{},{url:{type:String}})}constructor(){super(),this._pan=null}connectedCallback(){super.connectedCallback()}firstUpdated(){super.firstUpdated(),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("svg-pan-zoom","https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.5.0/dist/svg-pan-zoom.min.js"),window.addEventListener("es-bridge-svg-pan-zoom-loaded",this._onSvgPanZoomLoaded.bind(this),{once:!0}),this.container=this.shadowRoot.getElementById("image"),this.subscribeTo("pb-show-annotation",e=>{console.log("<pb-svg> loading %s",e.detail.file),this.url=e.detail.file,this.load()})}_onSvgPanZoomLoaded(){this.load()}load(){this._pan&&(this._pan.destroy(),this._pan=null,this.container.innerHTML=""),fetch(this.url).then(e=>e.text()).then(e=>{const t=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;this.container.appendChild(t),this._pan=window.svgPanZoom(t,{controlIconsEnabled:!0,fit:!0,center:!0})})}render(){return R`<div id="image"></div>`}static get styles(){return O`
            :host {
                display: block;
            }

            #image svg {
                height: var(--pb-svg-height, 100%);
                width: var(--pb-svg-width, 100%);
            }
        `}}customElements.define("pb-svg",za);class Pa extends(P(L)){static get properties(){return z(z({},super.properties),{},{src:{type:String},showNavigationControl:{type:Boolean,attribute:"show-navigation-control"},showNavigator:{type:Boolean,attribute:"show-navigator"},showHomeControl:{type:Boolean},showFullPageControl:{type:Boolean},defaultZoomLevel:{type:Number,attribute:"default-zoom-level"},showRotationControl:{type:Boolean},constrainDuringPan:{type:Boolean},visibilityRatio:{type:Number},type:{type:String},baseUri:{type:String,attribute:"base-uri"},prefixUrl:{type:String,attribute:"prefix-url"},facsimiles:{type:Array},loaded:{type:Boolean,reflect:!0}})}constructor(){super(),this._facsimiles=[],this.baseUri="",this.type="iiif",this.visibilityRatio=1,this.defaultZoomLevel=0,this.showHomeControl=!0,this.showNavigationControl=!0,this.src="",this.prefixUrl="../images/openseadragon/",this.loaded=!1}set facsimiles(e){this._facsimiles=e||[],this.loaded=this._facsimiles.length>0}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-start-update",this._clearAll.bind(this)),this.subscribeTo("pb-update",this._fragmentUpdateListener.bind(this)),this.subscribeTo("pb-show-annotation",this._showAnnotationListener.bind(this))}firstUpdated(){window.ESGlobalBridge.requestAvailability();const e=I("../lib/openseadragon.min.js");window.ESGlobalBridge.instance.load("openseadragon",e),window.addEventListener("es-bridge-openseadragon-loaded",this._initOpenSeadragon.bind(this),{once:!0})}render(){return R`
            <!-- Openseadragon -->
            <div id="viewer"></div>
        `}static get styles(){return O`
            :host {
                display: block;
                position: relative;
                background: transparent;
                height: var(--pb-facsimile-height, 500px);
            }

            #viewer {
                position: relative;
                height: 100%;
                width: 100%;
            }
        `}_initOpenSeadragon(){const e=I(this.prefixUrl+(this.prefixUrl.endsWith("/")?"":"/"));this.viewer=OpenSeadragon({element:this.shadowRoot.getElementById("viewer"),prefixUrl:e,preserveViewport:!0,sequenceMode:!0,showZoomControl:!0,showHomeControl:this.showHomeControl,showFullPageControl:this.showFullPageControl,showNavigator:this.showNavigator,showNavigationControl:this.showNavigationControl,showRotationControl:this.showRotationControl,autoHideControls:!1,visibilityRatio:1,minZoomLevel:1,defaultZoomLevel:this.defaultZoomLevel,constrainDuringPan:!0}),this.viewer.addHandler("open",this.resetZoom.bind(this)),this._facsimileObserver(),this.signalReady()}_facsimileObserver(){if(!this.viewer)return;if(0===this._facsimiles.length)return this.viewer.close();const e=this._facsimiles.map(e=>"iiif"===this.type?`${this.baseUri}${e}/info.json`:{tileSource:{type:"image",url:`${this.baseUri}${e}`,buildPyramid:!1}});this.viewer.open(e),this.viewer.goToPage(0)}_clearAll(){this.viewer&&(this.resetZoom(),this.viewer.clearOverlays(),this.facsimiles=[])}_fragmentUpdateListener(e){this.facsimiles=this._getFacsimilesFromData(e.detail.root),this._facsimileObserver()}_getFacsimilesFromData(e){const t=[];return e.querySelectorAll("pb-facs-link").forEach(e=>{e.facs&&t.push(e.facs)}),console.log("<pb-facsimile> _getFacsimilesFromData",t),t}_showAnnotationListener(e){if(!this.viewer)return;const t="runtime-overlay";if(this.viewer.removeOverlay(this.overlay),!e.detail.file||0===e.detail.file)return console.error("file missing",e.detail);if(e.detail.coordinates&&(!e.detail.coordinates[0]||4!==e.detail.coordinates.length))return console.error("coords incomplete or missing",e.detail);const n=this._pageIndexByUrl(e.detail.file);if(n<0)return console.error("page not found",e.detail);if(this.viewer.currentPage()!==n&&this.viewer.goToPage(n),e.detail.coordinates){const[n,i,r,o]=e.detail.coordinates,a=this.viewer.viewport.viewportToImageRectangle(this.viewer.viewport.getBounds(!0));a.containsPoint(new OpenSeadragon.Point(n,i))||this.viewer.viewport.fitBoundsWithConstraints(this.viewer.viewport.imageToViewportRectangle(n,i,a.width,a.height));const s=this.overlay=document.createElement("div");s.id=t,s.style.border=this.getBorderStyle();const l=this.viewer.viewport.imageToViewportRectangle(n,i,r,o);this.viewer.addOverlay({element:s,location:l})}}_pageIndexByUrl(e){return this._facsimiles.indexOf(e)}getBorderStyle(){return"4px solid rgba(128, 0, 0, 0.5)"}resetZoom(){this.viewer&&this.viewer.viewport.goHome()}}customElements.define("pb-facsimile",Pa);class Ia extends(P(L)){static get properties(){return z(z({},super.properties),{},{endpoint:{type:String},label:{type:String},endpoints:{type:Array},auto:{type:Boolean}})}constructor(){super(),this.endpoints=[],this.label="dts.endpoint"}connectedCallback(){super.connectedCallback(),this.endpoint=this.getParameter("endpoint")}updated(e){if(super.updated(),e.has("endpoints")){!this.shadowRoot.getElementById("endpoints").selectedItem&&this.auto&&this.endpoints.length>0&&(this.endpoint=this.endpoints[0].url)}}render(){return R`
            <paper-dropdown-menu id="menu" label="${i(this.label)}">
                <paper-listbox id="endpoints" slot="dropdown-content" class="dropdown-content" selected="${this.endpoint}" attr-for-selected="value"
                    @selected-item-changed="${this._selected}">
                    ${this.endpoints.map(e=>R`<paper-item value="${e.url?e.url:""}">${e.title}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>
        `}static get styles(){return O`
            :host {
                display: block;
            }
        `}_selected(){const e=this.shadowRoot.getElementById("endpoints").selectedItem;if(!e)return;const t=e.getAttribute("value");t&&(this.setParameter("endpoint",t),this.pushHistory("dts-endpoint"),console.log("<dts-select-endpoint> Setting endpoint to %s",t),this.emitTo("dts-endpoint",{endpoint:t,reload:!this.endpoint}),this.endpoint=t)}}customElements.define("dts-select-endpoint",Ia);class Ba extends(P(L)){static get properties(){return z(z({},super.properties),{},{baseUri:{type:String},data:{type:Object},collection:{type:String},page:{type:Number},perPage:{type:Number},_collectionEndpoint:{type:String}})}connectedCallback(){super.connectedCallback(),this.collection=this.getParameter("id"),this.page=this.getParameter("page"),this.subscribeTo("dts-endpoint",e=>{this._setEndpoint(e.detail.endpoint,e.detail.reload)}),this.subscribeTo("pb-load",e=>{this.page=e.detail.params.page,console.log("<dts-client> Loading page %d",this.page),this._update()})}firstUpdated(){super.firstUpdated(),this.queryAPI=this.shadowRoot.getElementById("queryAPI"),this.documentsAPI=this.shadowRoot.getElementById("documentsAPI"),this.signalReady()}_setEndpoint(e,t){t||(this.page=null,this.collection=null),this._configureEndpoint(e),this.baseUri=e}_configureEndpoint(e){e&&(console.log("<dts-client> initializing connection to endpoint %s",e),this.emitTo("pb-start-update"),this.queryAPI.url=e,this.queryAPI.generateRequest())}_navigate(e,t){e.preventDefault(),this.collection=t["@id"],this.page=null,console.log("<dts-client> navigating to collection %s",this.collection),this._update()}_preview(e,t){e.preventDefault(),this.emitTo("pb-start-update");const n=t["dts:passage"]||t["dts:download"],i=new URL(n,this.baseUri).toString();console.log("<dts-client> downloading %s",i),this.documentsAPI.url=this.getEndpoint()+"/modules/lib/dts.xql",this.documentsAPI.params={preview:i,id:t["@id"]},this.documentsAPI.generateRequest()}_download(e,t){this.emitTo("pb-start-update");const n=t["dts:passage"]||t["dts:download"],i=new URL(n,this.baseUri).toString();console.log("<dts-client> importing %s",i),this.documentsAPI.url=this.getEndpoint()+"/modules/lib/dts.xql",this.documentsAPI.params={import:i,id:t["@id"]},this.documentsAPI.generateRequest()}_update(){this.emitTo("pb-start-update");const e={};this.collection&&(e.id=this.collection,this.setParameter("id",this.collection)),this.page&&(e.page=this.page+1,this.setParameter("page",this.page)),this.pushHistory("dts-client-navigate"),this.queryAPI.params=e,this.queryAPI.url=this._collectionEndpoint,this.queryAPI.generateRequest()}_handleResponse(){const e=this.queryAPI.lastResponse;"EntryPoint"===e["@type"]?(this._collectionEndpoint=new URL(e.collections,this.baseUri).toString(),console.log("<dts-client> configured collection endpoint: %s",this._collectionEndpoint),this._update()):(this.data=e,console.log("<dts-client> received collection data: %o",e),!this.page&&e.totalItems>e.member.length&&(this.perPage=e.member.length),this.emitTo("pb-results-received",{start:this.page&&this.page>0?this.page*this.perPage+1:1,count:e.totalItems})),this.emitTo("pb-end-update")}_handlePreview(){const e=this.documentsAPI.lastResponse;this.emitTo("pb-end-update");const t=new URL(e.path,window.location.href);window.location=t}_handleError(e){this.emitTo("pb-end-update");const t=e.target.lastError.response,n=(new DOMParser).parseFromString(t,"application/xml").querySelector("message"),i=document.getElementById("errorDialog"),r=i.querySelector("paper-dialog-scrollable");r.innerHTML=n?n.textContent:e.detail.error.message,i.open()}static _getCreator(e){const t=e["dts:dublincore"];return t?t["dc:creator"]:null}static _getLicense(e){const t=e["dts:dublincore"];return t?t["dc:license"]:null}render(){return R`
            <slot name="toolbar"></slot>
            ${this.baseUri?this._renderClient():""}
            
            <iron-ajax
                id="queryAPI"
                verbose
                handle-as="json"
                method="get"
                @response="${this._handleResponse}"
                @error="${this._handleError}"></iron-ajax>
            <iron-ajax
                id="documentsAPI"
                verbose
                handle-as="json"
                method="get"
                @response="${this._handlePreview}"
                @error="${this._handleError}"></iron-ajax>
        `}_renderClient(){return R`
            <div class="uri">${this.baseUri}</div>
            <h3>${this.data?this.data.title:"Loading ..."}</h3>
            <slot name="pagination"></slot>
            ${this.data?this._renderMembers():""}
        `}_renderMembers(){const e=[];return this.data.member.forEach(t=>{e.push(R`<div class="member">${this._renderMember(t)}</div>`)}),e}_renderMember(e){if("Collection"==e["@type"])return R`
                <iron-icon icon="icons:folder-open"></iron-icon>
                <div class="details">
                    <h4 class="collection">
                        <a href="#" @click="${t=>this._navigate(t,e)}">${e.title}</a>
                    </h4>
                </div>
            `;const t=Ba._getLicense(e);return R`
            <iron-icon icon="icons:code"></iron-icon>
            <div class="details">
                <div>
                    <h4>
                        <a href="#" @click="${t=>this._preview(t,e)}">${e.title}</a>
                    </h4>
                    <p class="creator">${Ba._getCreator(e)}</p>
                    ${t?R`<p class="license"><a href="${t}">${i("dts.licence")}</a></p>`:""}
                </div>
                <iron-icon title="${i("dts.import")}" icon="icons:file-download" 
                    @click="${t=>this._download(t,e)}">
                </iron-icon>
            </div>
        `}static get styles(){return O`
            :host {
                display: block;
            }

            .uri {
                color: #607d8a;
                margin-top: 12px;
                font-weight: bold;
            }
            h3 {
                margin-top: 0;
            }
            .member {
                display: flex;
            }
            .member .details {
                flex: 2;
                margin-left: 20px;
                display: flex;
                justify-content: space-between;
            }
            .member iron-icon {
                width: 24px;
            }
            .member h4 {
                margin: 0;
            }
            .member h4.collection {
                margin-bottom: 10px;
            }
            [name='toolbar'] {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #f6a622;
                font-size: 85%;
            }
        `}}customElements.define("dts-client",Ba);class $a extends L{static get properties(){return z(z({},super.properties),{},{user:{type:String},hash:{type:String},height:{type:Number},theme:{type:String},preview:{type:Boolean},editable:{type:Boolean}})}constructor(){super(),this.height=256,this.theme="light"}render(){let e=`height=${this.height}&theme-id=${this.theme}&default-tab=html,result`;this.editable&&(e+="&editable=true");const t=`https://codepen.io/${this.user}/embed/${this.preview?"preview/":""}${this.hash}?${e}`;return R`
            <iframe height="${this.height}" scrolling="no" title="${this.labe}l" 
                src="${t}" frameborder="no" allowtransparency="true" allowfullscreen>
                Loading codepen ...
            </iframe>
        `}static get styles(){return O`
            :host {
                display: block;
            }

            iframe {
                width: 100%;
            }
        `}}customElements.define("pb-codepen",$a),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).marked=t()}(void 0,(function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=n(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=e[Symbol.iterator]()).next.bind(i)}function o(e,t){return e(t={exports:{}},t.exports),t.exports}var a=o((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function n(t){e.exports.defaults=t}e.exports={defaults:t(),getDefaults:t,changeDefaults:n}})),s=(a.defaults,a.getDefaults,a.changeDefaults,/[&<>"']/),l=/[&<>"']/g,c=/[<>"']|&(?!#?\w+;)/,d=/[<>"']|&(?!#?\w+;)/g,p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u=function(e){return p[e]};function h(e,t){if(t){if(s.test(e))return e.replace(l,u)}else if(c.test(e))return e.replace(d,u);return e}var g=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function f(e){return e.replace(g,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var m=/(^|[^\[])\^/g;function b(e,t){e=e.source||e,t=t||"";var n={replace:function(t,i){return i=(i=i.source||i).replace(m,"$1"),e=e.replace(t,i),n},getRegex:function(){return new RegExp(e,t)}};return n}var v=/[^\w:]/g,y=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function w(e,t,n){if(e){var i;try{i=decodeURIComponent(f(n)).replace(v,"").toLowerCase()}catch(e){return null}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return null}t&&!y.test(n)&&(n=S(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}var _={},x=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,A=/^([^:]+:\/*[^/]*)[\s\S]*$/;function S(e,t){_[" "+e]||(x.test(e)?_[" "+e]=e+"/":_[" "+e]=C(e,"/",!0));var n=-1===(e=_[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(k,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(A,"$1")+t:e+t}function E(e){for(var t,n,i=1;i<arguments.length;i++)for(n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function T(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var i=!1,r=t;--r>=0&&"\\"===n[r];)i=!i;return i?"|":" |"})).split(/ \|/),i=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function C(e,t,n){var i=e.length;if(0===i)return"";for(var r=0;r<i;){var o=e.charAt(i-r-1);if(o!==t||n){if(o===t||!n)break;r++}else r++}return e.substr(0,i-r)}function L(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,i=0,r=0;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])i++;else if(e[r]===t[1]&&--i<0)return r;return-1}function R(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}var O={escape:h,unescape:f,edit:b,cleanUrl:w,resolveUrl:S,noopTest:{exec:function(){}},merge:E,splitCells:T,rtrim:C,findClosingBracket:L,checkSanitizeDeprecation:R},z=a.defaults,P=O.rtrim,I=O.splitCells,B=O.escape,$=O.findClosingBracket;function M(e,t,n){var i=t.href,r=t.title?B(t.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:i,title:r,text:o}:{type:"image",raw:n,href:i,title:r,text:B(o)}}function F(e,t){var n=e.match(/^(\s+)(?:```)/);if(null===n)return t;var i=n[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);return null===t?e:t[0].length>=i.length?e.slice(i.length):e})).join("\n")}var D=function(){function e(e){this.options=e||z}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e,t){var n=this.rules.block.code.exec(e);if(n){var i=t[t.length-1];if(i&&"paragraph"===i.type)return{raw:n[0],text:n[0].trimRight()};var r=n[0].replace(/^ {4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:P(r,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],i=F(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:"table",header:I(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(n.header.length===n.align.length){var i,r=n.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=I(n.cells[i],n.header.length);return n}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var n=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:n}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){for(var n,i,r,o,a,s,l,c=t[0],d=t[2],p=d.length>1,u=")"===d[d.length-1],h={type:"list",raw:c,ordered:p,start:p?+d.slice(0,-1):"",loose:!1,items:[]},g=t[0].match(this.rules.block.item),f=!1,m=g.length,b=0;b<m;b++)c=n=g[b],i=n.length,~(n=n.replace(/^ *([*+-]|\d+[.)]) */,"")).indexOf("\n ")&&(i-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,""):n.replace(new RegExp("^ {1,"+i+"}","gm"),"")),b!==m-1&&(r=this.rules.block.bullet.exec(g[b+1])[0],(p?1===r.length||!u&&")"===r[r.length-1]:r.length>1||this.options.smartLists&&r!==d)&&(o=g.slice(b+1).join("\n"),h.raw=h.raw.substring(0,h.raw.length-o.length),b=m-1)),a=f||/\n\n(?!\s*$)/.test(n),b!==m-1&&(f="\n"===n.charAt(n.length-1),a||(a=f)),a&&(h.loose=!0),l=void 0,(s=/^\[[ xX]\] /.test(n))&&(l=" "!==n[1],n=n.replace(/^\[[ xX]\] +/,"")),h.items.push({type:"list_item",raw:c,task:s,checked:l,loose:a,text:n});return h}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):B(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:I(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];var i,r=n.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=I(n.cells[i].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e,t){var n=this.rules.block.text.exec(e);if(n){var i=t[t.length-1];return i&&"text"===i.type?{raw:n[0],text:n[0]}:{type:"text",raw:n[0],text:n[0]}}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:B(t[1])}},t.tag=function(e,t,n){var i=this.rules.inline.tag.exec(e);if(i)return!t&&/^<a /i.test(i[0])?t=!0:t&&/^<\/a>/i.test(i[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:i[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):B(i[0]):i[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=$(t[2],"()");if(n>-1){var i=(0===t[0].indexOf("!")?5:4)+t[1].length+n;t[2]=t[2].substring(0,n),t[0]=t[0].substring(0,i).trim(),t[3]=""}var r=t[2],o="";if(this.options.pedantic){var a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);a?(r=a[1],o=a[3]):o=""}else o=t[3]?t[3].slice(1,-1):"";return M(t,{href:(r=r.trim().replace(/^<([\s\S]*)>$/,"$1"))?r.replace(this.rules.inline._escapes,"$1"):r,title:o?o.replace(this.rules.inline._escapes,"$1"):o},t[0])}},t.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var i=(n[2]||n[1]).replace(/\s+/g," ");if(!(i=t[i.toLowerCase()])||!i.href){var r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return M(n,i,n[0])}},t.strong=function(e,t,n){void 0===n&&(n="");var i=this.rules.inline.strong.start.exec(e);if(i&&(!i[1]||i[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var r,o="**"===i[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(o.lastIndex=0;null!=(i=o.exec(t));)if(r=this.rules.inline.strong.middle.exec(t.slice(0,i.index+3)))return{type:"strong",raw:e.slice(0,r[0].length),text:e.slice(2,r[0].length-2)}}},t.em=function(e,t,n){void 0===n&&(n="");var i=this.rules.inline.em.start.exec(e);if(i&&(!i[1]||i[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var r,o="*"===i[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(o.lastIndex=0;null!=(i=o.exec(t));)if(r=this.rules.inline.em.middle.exec(t.slice(0,i.index+2)))return{type:"em",raw:e.slice(0,r[0].length),text:e.slice(1,r[0].length-1)}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),i=/[^ ]/.test(n),r=n.startsWith(" ")&&n.endsWith(" ");return i&&r&&(n=n.substring(1,n.length-1)),n=B(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}},t.autolink=function(e,t){var n,i,r=this.rules.inline.autolink.exec(e);if(r)return i="@"===r[2]?"mailto:"+(n=B(this.options.mangle?t(r[1]):r[1])):n=B(r[1]),{type:"link",raw:r[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}},t.url=function(e,t){var n;if(n=this.rules.inline.url.exec(e)){var i,r;if("@"===n[2])r="mailto:"+(i=B(this.options.mangle?t(n[0]):n[0]));else{var o;do{o=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(o!==n[0]);i=B(n[0]),r="www."===n[1]?"http://"+i:i}return{type:"link",raw:n[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}},t.inlineText=function(e,t,n){var i,r=this.rules.inline.text.exec(e);if(r)return i=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):B(r[0]):r[0]:B(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:i}},e}(),N=O.noopTest,H=O.edit,j=O.merge,V={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:N,table:N,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};V.def=H(V.def).replace("label",V._label).replace("title",V._title).getRegex(),V.bullet=/(?:[*+-]|\d{1,9}[.)])/,V.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,V.item=H(V.item,"gm").replace(/bull/g,V.bullet).getRegex(),V.list=H(V.list).replace(/bull/g,V.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+V.def.source+")").getRegex(),V._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",V._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,V.html=H(V.html,"i").replace("comment",V._comment).replace("tag",V._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),V.paragraph=H(V._paragraph).replace("hr",V.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",V._tag).getRegex(),V.blockquote=H(V.blockquote).replace("paragraph",V.paragraph).getRegex(),V.normal=j({},V),V.gfm=j({},V.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),V.gfm.nptable=H(V.gfm.nptable).replace("hr",V.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",V._tag).getRegex(),V.gfm.table=H(V.gfm.table).replace("hr",V.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",V._tag).getRegex(),V.pedantic=j({},V.normal,{html:H("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",V._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:N,paragraph:H(V.normal._paragraph).replace("hr",V.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",V.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var q={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:N,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:N,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};q.punctuation=H(q.punctuation).replace(/punctuation/g,q._punctuation).getRegex(),q._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",q._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",q._comment=H(V._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),q.em.start=H(q.em.start).replace(/punctuation/g,q._punctuation).getRegex(),q.em.middle=H(q.em.middle).replace(/punctuation/g,q._punctuation).replace(/overlapSkip/g,q._overlapSkip).getRegex(),q.em.endAst=H(q.em.endAst,"g").replace(/punctuation/g,q._punctuation).getRegex(),q.em.endUnd=H(q.em.endUnd,"g").replace(/punctuation/g,q._punctuation).getRegex(),q.strong.start=H(q.strong.start).replace(/punctuation/g,q._punctuation).getRegex(),q.strong.middle=H(q.strong.middle).replace(/punctuation/g,q._punctuation).replace(/overlapSkip/g,q._overlapSkip).getRegex(),q.strong.endAst=H(q.strong.endAst,"g").replace(/punctuation/g,q._punctuation).getRegex(),q.strong.endUnd=H(q.strong.endUnd,"g").replace(/punctuation/g,q._punctuation).getRegex(),q.blockSkip=H(q._blockSkip,"g").getRegex(),q.overlapSkip=H(q._overlapSkip,"g").getRegex(),q._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,q._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,q._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,q.autolink=H(q.autolink).replace("scheme",q._scheme).replace("email",q._email).getRegex(),q._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,q.tag=H(q.tag).replace("comment",q._comment).replace("attribute",q._attribute).getRegex(),q._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,q._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,q._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,q.link=H(q.link).replace("label",q._label).replace("href",q._href).replace("title",q._title).getRegex(),q.reflink=H(q.reflink).replace("label",q._label).getRegex(),q.reflinkSearch=H(q.reflinkSearch,"g").replace("reflink",q.reflink).replace("nolink",q.nolink).getRegex(),q.normal=j({},q),q.pedantic=j({},q.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:H(/^!?\[(label)\]\((.*?)\)/).replace("label",q._label).getRegex(),reflink:H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q._label).getRegex()}),q.gfm=j({},q.normal,{escape:H(q.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),q.gfm.url=H(q.gfm.url,"i").replace("email",q.gfm._extended_email).getRegex(),q.breaks=j({},q.gfm,{br:H(q.br).replace("{2,}","*").getRegex(),text:H(q.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var U={block:V,inline:q},W=a.defaults,G=U.block,X=U.inline;function Z(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Q(e){var t,n,i="",r=e.length;for(t=0;t<r;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),i+="&#"+n+";";return i}var Y=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||W,this.options.tokenizer=this.options.tokenizer||new D,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:G.normal,inline:X.normal};this.options.pedantic?(t.block=G.pedantic,t.inline=X.pedantic):this.options.gfm&&(t.block=G.gfm,this.options.breaks?t.inline=X.breaks:t.inline=X.gfm),this.tokenizer.rules=t}e.lex=function(t,n){return new e(n).lex(t)},e.lexInline=function(t,n){return new e(n).inlineTokens(t)};var n=e.prototype;return n.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},n.blockTokens=function(e,t,n){var i,r,o,a;for(void 0===t&&(t=[]),void 0===n&&(n=!0),e=e.replace(/^ +$/gm,"");e;)if(i=this.tokenizer.space(e))e=e.substring(i.raw.length),i.type&&t.push(i);else if(i=this.tokenizer.code(e,t))e=e.substring(i.raw.length),i.type?t.push(i):((a=t[t.length-1]).raw+="\n"+i.raw,a.text+="\n"+i.text);else if(i=this.tokenizer.fences(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.heading(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.nptable(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.hr(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.blockquote(e))e=e.substring(i.raw.length),i.tokens=this.blockTokens(i.text,[],n),t.push(i);else if(i=this.tokenizer.list(e)){for(e=e.substring(i.raw.length),o=i.items.length,r=0;r<o;r++)i.items[r].tokens=this.blockTokens(i.items[r].text,[],!1);t.push(i)}else if(i=this.tokenizer.html(e))e=e.substring(i.raw.length),t.push(i);else if(n&&(i=this.tokenizer.def(e)))e=e.substring(i.raw.length),this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});else if(i=this.tokenizer.table(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.lheading(e))e=e.substring(i.raw.length),t.push(i);else if(n&&(i=this.tokenizer.paragraph(e)))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.text(e,t))e=e.substring(i.raw.length),i.type?t.push(i):((a=t[t.length-1]).raw+="\n"+i.raw,a.text+="\n"+i.text);else if(e){var s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}throw new Error(s)}return t},n.inline=function(e){var t,n,i,r,o,a,s=e.length;for(t=0;t<s;t++)switch((a=e[t]).type){case"paragraph":case"text":case"heading":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case"table":for(a.tokens={header:[],cells:[]},r=a.header.length,n=0;n<r;n++)a.tokens.header[n]=[],this.inlineTokens(a.header[n],a.tokens.header[n]);for(r=a.cells.length,n=0;n<r;n++)for(o=a.cells[n],a.tokens.cells[n]=[],i=0;i<o.length;i++)a.tokens.cells[n][i]=[],this.inlineTokens(o[i],a.tokens.cells[n][i]);break;case"blockquote":this.inline(a.tokens);break;case"list":for(r=a.items.length,n=0;n<r;n++)this.inline(a.items[n].tokens)}return e},n.inlineTokens=function(e,t,n,i,r){var o;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===i&&(i=!1),void 0===r&&(r="");var a,s=e;if(this.tokens.links){var l=Object.keys(this.tokens.links);if(l.length>0)for(;null!=(a=this.tokenizer.rules.inline.reflinkSearch.exec(s));)l.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(a=this.tokenizer.rules.inline.blockSkip.exec(s));)s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(o=this.tokenizer.escape(e))e=e.substring(o.raw.length),t.push(o);else if(o=this.tokenizer.tag(e,n,i))e=e.substring(o.raw.length),n=o.inLink,i=o.inRawBlock,t.push(o);else if(o=this.tokenizer.link(e))e=e.substring(o.raw.length),"link"===o.type&&(o.tokens=this.inlineTokens(o.text,[],!0,i)),t.push(o);else if(o=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(o.raw.length),"link"===o.type&&(o.tokens=this.inlineTokens(o.text,[],!0,i)),t.push(o);else if(o=this.tokenizer.strong(e,s,r))e=e.substring(o.raw.length),o.tokens=this.inlineTokens(o.text,[],n,i),t.push(o);else if(o=this.tokenizer.em(e,s,r))e=e.substring(o.raw.length),o.tokens=this.inlineTokens(o.text,[],n,i),t.push(o);else if(o=this.tokenizer.codespan(e))e=e.substring(o.raw.length),t.push(o);else if(o=this.tokenizer.br(e))e=e.substring(o.raw.length),t.push(o);else if(o=this.tokenizer.del(e))e=e.substring(o.raw.length),o.tokens=this.inlineTokens(o.text,[],n,i),t.push(o);else if(o=this.tokenizer.autolink(e,Q))e=e.substring(o.raw.length),t.push(o);else if(n||!(o=this.tokenizer.url(e,Q))){if(o=this.tokenizer.inlineText(e,i,Z))e=e.substring(o.raw.length),r=o.raw.slice(-1),t.push(o);else if(e){var c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}throw new Error(c)}}else e=e.substring(o.raw.length),t.push(o);return t},t(e,null,[{key:"rules",get:function(){return{block:G,inline:X}}}]),e}(),K=a.defaults,J=O.cleanUrl,ee=O.escape,te=function(){function e(e){this.options=e||K}var t=e.prototype;return t.code=function(e,t,n){var i=(t||"").match(/\S*/)[0];if(this.options.highlight){var r=this.options.highlight(e,i);null!=r&&r!==e&&(n=!0,e=r)}return i?'<pre><code class="'+this.options.langPrefix+ee(i,!0)+'">'+(n?e:ee(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:ee(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,i){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+i.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var i=t?"ol":"ul";return"<"+i+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+i+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=J(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<a href="'+ee(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=J(this.options.sanitize,this.options.baseUrl,e)))return n;var i='<img src="'+e+'" alt="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),ne=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),ie=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do{n=e+"-"+ ++i}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),re=a.defaults,oe=O.unescape,ae=function(){function e(e){this.options=e||re,this.options.renderer=this.options.renderer||new te,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ne,this.slugger=new ie}e.parse=function(t,n){return new e(n).parse(t)},e.parseInline=function(t,n){return new e(n).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var n,i,r,o,a,s,l,c,d,p,u,h,g,f,m,b,v,y,w="",_=e.length;for(n=0;n<_;n++)switch((p=e[n]).type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(p.tokens),p.depth,oe(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",l="",o=p.header.length,i=0;i<o;i++)l+=this.renderer.tablecell(this.parseInline(p.tokens.header[i]),{header:!0,align:p.align[i]});for(c+=this.renderer.tablerow(l),d="",o=p.cells.length,i=0;i<o;i++){for(l="",a=(s=p.tokens.cells[i]).length,r=0;r<a;r++)l+=this.renderer.tablecell(this.parseInline(s[r]),{header:!1,align:p.align[r]});d+=this.renderer.tablerow(l)}w+=this.renderer.table(c,d);continue;case"blockquote":d=this.parse(p.tokens),w+=this.renderer.blockquote(d);continue;case"list":for(u=p.ordered,h=p.start,g=p.loose,o=p.items.length,d="",i=0;i<o;i++)b=(m=p.items[i]).checked,v=m.task,f="",m.task&&(y=this.renderer.checkbox(b),g?m.tokens.length>0&&"text"===m.tokens[0].type?(m.tokens[0].text=y+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=y+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:y}):f+=y),f+=this.parse(m.tokens,g),d+=this.renderer.listitem(f,v,b);w+=this.renderer.list(d,u,h);continue;case"html":w+=this.renderer.html(p.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(d=p.tokens?this.parseInline(p.tokens):p.text;n+1<_&&"text"===e[n+1].type;)d+="\n"+((p=e[++n]).tokens?this.parseInline(p.tokens):p.text);w+=t?this.renderer.paragraph(d):d;continue;default:var x='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(x);throw new Error(x)}return w},t.parseInline=function(e,t){t=t||this.renderer;var n,i,r="",o=e.length;for(n=0;n<o;n++)switch((i=e[n]).type){case"escape":r+=t.text(i.text);break;case"html":r+=t.html(i.text);break;case"link":r+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case"image":r+=t.image(i.href,i.title,i.text);break;case"strong":r+=t.strong(this.parseInline(i.tokens,t));break;case"em":r+=t.em(this.parseInline(i.tokens,t));break;case"codespan":r+=t.codespan(i.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(i.tokens,t));break;case"text":r+=t.text(i.text);break;default:var a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(a);throw new Error(a)}return r},e}(),se=O.merge,le=O.checkSanitizeDeprecation,ce=O.escape,de=a.getDefaults,pe=a.changeDefaults,ue=a.defaults;function he(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=se({},he.defaults,t||{}),le(t),n){var i,r=t.highlight;try{i=Y.lex(e,t)}catch(e){return n(e)}var o=function(e){var o;if(!e)try{o=ae.parse(i,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,o)};if(!r||r.length<3)return o();if(delete t.highlight,!i.length)return o();var a=0;return he.walkTokens(i,(function(e){"code"===e.type&&(a++,setTimeout((function(){r(e.text,e.lang,(function(t,n){if(t)return o(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),0===--a&&o()}))}),0))})),void(0===a&&o())}try{var s=Y.lex(e,t);return t.walkTokens&&he.walkTokens(s,t.walkTokens),ae.parse(s,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+ce(e.message+"",!0)+"</pre>";throw e}}return he.options=he.setOptions=function(e){return se(he.defaults,e),pe(he.defaults),he},he.getDefaults=de,he.defaults=ue,he.use=function(e){var t=se({},e);if(e.renderer&&function(){var n=he.defaults.renderer||new te,i=function(t){var i=n[t];n[t]=function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var s=e.renderer[t].apply(n,o);return!1===s&&(s=i.apply(n,o)),s}};for(var r in e.renderer)i(r);t.renderer=n}(),e.tokenizer&&function(){var n=he.defaults.tokenizer||new D,i=function(t){var i=n[t];n[t]=function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];var s=e.tokenizer[t].apply(n,o);return!1===s&&(s=i.apply(n,o)),s}};for(var r in e.tokenizer)i(r);t.tokenizer=n}(),e.walkTokens){var n=he.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t),n&&n(t)}}he.setOptions(t)},he.walkTokens=function(e,t){for(var n,i=r(e);!(n=i()).done;){var o=n.value;switch(t(o),o.type){case"table":for(var a,s=r(o.tokens.header);!(a=s()).done;){var l=a.value;he.walkTokens(l,t)}for(var c,d=r(o.tokens.cells);!(c=d()).done;)for(var p,u=r(c.value);!(p=u()).done;){var h=p.value;he.walkTokens(h,t)}break;case"list":he.walkTokens(o.items,t);break;default:o.tokens&&he.walkTokens(o.tokens,t)}}},he.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=se({},he.defaults,t||{}),le(t);try{var n=Y.lexInline(e,t);return t.walkTokens&&he.walkTokens(n,t.walkTokens),ae.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+ce(e.message+"",!0)+"</pre>";throw e}},he.Parser=ae,he.parser=ae.parse,he.Renderer=te,he.TextRenderer=ne,he.Lexer=Y,he.lexer=Y.lex,he.Tokenizer=D,he.Slugger=ie,he.parse=he,he}));const Ma=new window.marked.Renderer;function Fa(e){const t=e.match(/^[^\S]*(?=\S)/gm);return t&&t[0].length?(t.sort((e,t)=>e.length-t.length),t[0].length?e.replace(RegExp("^"+t[0],"gm"),""):e):e}Ma.code=function(e,t,n){return`<pb-code-highlight language="${t}" line-numbers>\n        <template>${e}</template>\n    </pb-code-highlight>`},window.marked.setOptions({renderer:Ma});class Da extends(P(L)){static get properties(){return z({content:{type:String},url:{type:String}},super.properties)}connectedCallback(){if(super.connectedCallback(),this.style.display="block",this.url&&Da.waitOnce("pb-page-ready",()=>{const e="."===this.getEndpoint()?window.location.href:this.getEndpoint()+"/",t=new URL(this.url,e);fetch(t,{credentials:"same-origin"}).then(e=>e.text()).catch(()=>(console.error("<pb-markdown> failed to load content from %s",t.toString()),Promise.resolve(this.content))).then(e=>{this.content=e})}),!this.content){const e=document.createElement("div");for(let t=0;t<this.childNodes.length;t++){const n=this.childNodes[t];e.appendChild(document.importNode(n.content||n,!0))}this.content=Fa(e.innerHTML)}}createRenderRoot(){return this}render(){return R`<div>${A(window.marked(this.content))}</div>`}}customElements.define("pb-markdown",Da);const Na=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target;t.emitTo("pb-visible",{data:t.data})}})});class Ha extends(P(L)){static get properties(){return z({data:{type:String}},super.properties)}disconnectedCallback(){super.disconnectedCallback(),Na&&Na.unobserve(this)}firstUpdated(){Na.observe(this)}render(){return R`<slot></slot>`}static get styles(){return O`
            :host {
                display: inline;
            }
        `}}customElements.define("pb-observable",Ha);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ja=n`<iron-iconset-svg name="av" size="24">
<svg><defs>
<g id="add-to-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"></path></g>
<g id="airplay"><path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="album"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></g>
<g id="art-track"><path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"></path></g>
<g id="av-timer"><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path></g>
<g id="branding-watermark"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"></path></g>
<g id="call-to-action"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"></path></g>
<g id="closed-caption"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"></path></g>
<g id="equalizer"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></g>
<g id="explicit"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path></g>
<g id="fast-forward"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path></g>
<g id="fast-rewind"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path></g>
<g id="featured-play-list"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"></path></g>
<g id="featured-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></g>
<g id="fiber-dvr"><path d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"></path></g>
<g id="fiber-manual-record"><circle cx="12" cy="12" r="8"></circle></g>
<g id="fiber-new"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path></g>
<g id="fiber-pin"><path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"></path></g>
<g id="fiber-smart-record"><g><circle cx="9" cy="12" r="8"></circle><path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"></path></g></g>
<g id="forward-10"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="forward-30"><path d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"></path></g>
<g id="forward-5"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"></path></g>
<g id="games"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></g>
<g id="hd"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path></g>
<g id="hearing"><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"></path></g>
<g id="high-quality"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"></path></g>
<g id="library-add"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="library-books"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path></g>
<g id="library-music"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></g>
<g id="loop"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></g>
<g id="mic"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-none"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-off"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></g>
<g id="movie"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></g>
<g id="music-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"></path></g>
<g id="new-releases"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="not-interested"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g>
<g id="note"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"></path></g>
<g id="pause"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></g>
<g id="pause-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path></g>
<g id="pause-circle-outline"><path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path></g>
<g id="play-arrow"><path d="M8 5v14l11-7z"></path></g>
<g id="play-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></g>
<g id="play-circle-outline"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="playlist-add"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></g>
<g id="playlist-add-check"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"></path></g>
<g id="playlist-play"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"></path></g>
<g id="queue"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="queue-music"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path></g>
<g id="queue-play-next"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"></path></g>
<g id="radio"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"></path></g>
<g id="recent-actors"><path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"></path></g>
<g id="remove-from-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"></path></g>
<g id="repeat"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path></g>
<g id="repeat-one"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path></g>
<g id="replay"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></g>
<g id="replay-10"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-30"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-5"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"></path></g>
<g id="shuffle"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path></g>
<g id="skip-next"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></g>
<g id="skip-previous"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></g>
<g id="slow-motion-video"><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></g>
<g id="snooze"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"></path></g>
<g id="sort-by-alpha"><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path></g>
<g id="stop"><path d="M6 6h12v12H6z"></path></g>
<g id="subscriptions"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path></g>
<g id="subtitles"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path></g>
<g id="surround-sound"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="video-call"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></g>
<g id="video-label"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"></path></g>
<g id="video-library"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g>
<g id="videocam"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></g>
<g id="videocam-off"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path></g>
<g id="volume-down"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path></g>
<g id="volume-mute"><path d="M7 9v6h4l5 5V4l-5 5H7z"></path></g>
<g id="volume-off"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></g>
<g id="volume-up"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g>
<g id="web"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></g>
<g id="web-asset"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"></path></g>
</defs></svg>
</iron-iconset-svg>`;function Va(e,t){return window.ESGlobalBridge.requestAvailability(),new Promise(n=>{window.ESGlobalBridge.instance.load(e,t),window.addEventListener(`es-bridge-${e}-loaded`,()=>n(),{once:!0})})}document.head.appendChild(ja.content);class qa extends(P(L)){static get properties(){return z({url:{type:String},player:{type:Boolean},header:{type:String},footer:{type:String},breaks:{type:String},_pages:{type:Number}},super.properties)}constructor(){super(),this._data=null,this._pages=0,this._page=0,this._midiPlayer=null,this._verovio=null,this.footer="auto",this.header="auto",this.breaks="auto"}firstUpdated(){super.firstUpdated(),this.player&&Va("midiPlayer","https://cdn.jsdelivr.net/npm/web-midi-player@latest/index.js").then(()=>{const{"web-midi-player":{default:e}}=window;this._midiPlayer=new e}),Va("verovio","https://www.verovio.org/javascript/latest/verovio-toolkit.js").then(()=>{this._verovio=new window.verovio.toolkit,qa.waitOnce("pb-page-ready",()=>{const e="."===this.getEndpoint()?window.location.href:this.getEndpoint()+"/";this.url=new URL(this.url,e),fetch(this.url).then(e=>e.text()).then(async e=>{this._data=e,this._verovio.loadData(this._data),this._pages=this._verovio.getPageCount(),this._page=1,console.log("<pb-mei> Loaded %d pages",this._pages),this.showPage()})})})}showPage(){this._verovio.setOptions(this._getOptions());const e=this._verovio.renderToSVG(this._page,{});this.shadowRoot.getElementById("output").innerHTML=e,this.shadowRoot.getElementById("pageRight").disabled=this._page===this._pages,this.shadowRoot.getElementById("pageLeft").disabled=1===this._page}async play(){const e=this.shadowRoot.getElementById("play");if(e.active)if(e.icon="av:stop",this._midiPaused)this._midiPaused=!1,this._midiPlayer.resume();else{this._verovio.loadData(this._data);const e=this._verovio.renderToMIDI(),t=window.atob(e),n=t.length,i=new Uint8Array(new ArrayBuffer(n));for(let e=0;e<n;e+=1)i[e]=t.charCodeAt(e);this._midiPlayer.play({arrayBuffer:i})}else this._midiPlayer.stop(),e.icon="av:play-arrow"}pause(){const e=this.shadowRoot.getElementById("play");e.active&&(this._midiPaused=this._midiPlayer.pause(),this._midiPaused&&(e.icon="av:play-arrow",e.active=!1))}render(){return R`
            <div id="toolbar">
                <paper-icon-button id="pageLeft" icon="icons:chevron-left" @click="${this._previousPage}"
                    class="${1===this._pages?"hidden":""}"></paper-icon-button>
                <paper-icon-button id="pageRight" icon="icons:chevron-right" @click="${this._nextPage}"
                    class="${1===this._pages?"hidden":""}"></paper-icon-button>
                ${this._renderPlayer()}
            </div>
            <div id="output">${i("dialogs.loading")}</div>
        `}_renderPlayer(){return this.player?R`
                <div id="player">
                    <paper-icon-button id="play" icon="av:play-arrow" toggles @click="${this.play}"></paper-icon-button>
                    <paper-icon-button icon="av:pause" @click="${this.pause}"></paper-icon-button>
                </div>
            `:null}_nextPage(e){e.preventDefault(),this._page<this._pages&&(this._page+=1,this.showPage())}_previousPage(e){e.preventDefault(),this._page>1&&(this._page-=1,this.showPage())}_getOptions(){return{svgViewBox:!0,adjustPageHeight:!0,adjustPageWidth:!0,footer:this.footer,header:this.header,breaks:this.breaks}}static get styles(){return O`
            :host {
                display: grid;
                grid-template-rows: auto 1fr;
            }

            #toolbar {
                display: flex;
            }

            #output {
                width: 100%;
                overflow: auto;
            }

            #player {
                margin-left: 30px;
            }

            .hidden ~ #player {
                margin-left: 0;
            }

            .hidden {
                display: none;
            }
        `}}customElements.define("pb-mei",qa);class Ua extends(P(L)){static get properties(){return z(z({},super.properties),{},{name:{type:String},value:{type:String},placeholder:{type:String,attribute:"placeholder"},source:{type:String},suggestions:{type:Array},icon:{type:String}})}constructor(){super(),this.placeholder="search.placeholder",this.suggestions=[],this.lastSelected=null,this._hiddenInput=null,this._initialized=!1}connectedCallback(){super.connectedCallback()}firstUpdated(){this.closest("iron-form,pb-search,pb-custom-form")||(this._hiddenInput=document.createElement("input"),this._hiddenInput.type="hidden",this._hiddenInput.name=this.name,this.appendChild(this._hiddenInput));if(this.shadowRoot.getElementById("autocomplete").addEventListener("autocomplete-change",this._autocomplete.bind(this)),this.value)if(this.source)Ua.waitOnce("pb-page-ready",()=>{this._sendRequest(this.value)});else{const e=this.shadowRoot.getElementById("search"),t=this.suggestions.find(e=>e.text?e.value===this.value:e===this.value);t&&(e.value=t.text||t,this._hiddenInput&&(this._hiddenInput.value=t.value||t)),this._hiddenInput&&(this._hiddenInput.value=this.value)}}render(){return R`
            <custom-style>
                <style>
                    :host {
                        --suggestions-item: {
                            color: var(--pb-search-suggestions-color, black);
                        };
                        --suggestions-wrapper: {
                            background: var(--pb-search-suggestions-background, white);
                        };
                    }
                </style>
            </custom-style>
            <slot></slot>
            <paper-input id="search" type="search" name="query" @keyup="${this._handleEnter}" label="${i(this.placeholder)}"
                always-float-label>
                ${this.icon?R`<iron-icon icon="${this.icon}" @click="${this._doSearch}" slot="prefix"></iron-icon>`:null}
            </paper-input>
            <paper-autocomplete-suggestions id="autocomplete" for="search" .source="${this.suggestions}" ?remote-source="${this.source}"
                @autocomplete-selected="${this._autocompleteSelected}"></paper-autocomplete-suggestions>
          
        <iron-ajax
            id="autocompleteLoader"
            verbose
            handle-as="json"
            method="get"
            with-credentials
            @response="${this._updateSuggestions}"></iron-ajax>

        
    `}static get styles(){return O`
            :host {
                --paper-input-container-color: var(--pb-search-label-color, var(--paper-grey-500, #303030));
                --paper-input-container-input-color: var(--pb-search-input-color, var(--pb-color-primary, #000000));
                --paper-input-container-focus-color: var(--pb-search-focus-color, var(--paper-grey-500, #303030));

                display: flex;
                align-items: center;
            }

            ::slotted {
                display: block;
                margin-left: 10px;
            }
        `}_autocomplete(e){const t=this.shadowRoot.getElementById("search");this._sendRequest(t.value)}_sendRequest(e){const t=this.shadowRoot.getElementById("autocompleteLoader"),n="."===this.getEndpoint()?window.location.href:this.getEndpoint()+"/";t.url=new URL(this.source,n).toString();const i=this._getParameters();i.query=e,t.params=i,t.generateRequest()}_updateSuggestions(){const e=this.shadowRoot.getElementById("autocompleteLoader");if(this._initialized){const t=this.shadowRoot.getElementById("autocomplete");e.lastResponse&&(this.suggestions=e.lastResponse,t.suggestions(this.suggestions))}else if(e.lastResponse){let t=e.lastResponse;const n=this.shadowRoot.getElementById("search"),i=t.find(e=>e.text?e.value===this.value:e===this.value);i?(n.value=i.text||i,this._hiddenInput&&(this._hiddenInput.value=i.value||i)):this._hiddenInput&&(this._hiddenInput.value=this.value)}this._initialized=!0}_getParameters(){const e={};return this.querySelectorAll("[name]").forEach(t=>{e[t.name]=t.value}),e}_autocompleteSelected(e){this.lastSelected=e.detail.text;const t=this.shadowRoot.getElementById("search");console.log("autocomplete selected %s",e.detail.text),t.value=e.detail.text,this.value=e.detail.value,this._hiddenInput&&(this._hiddenInput.value=this.value)}}customElements.define("pb-autocomplete",Ua);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Wa=t({is:"iron-label",listeners:{tap:"_tapHandler"},properties:{for:{type:String,value:"",reflectToAttribute:!0,observer:"_forChanged"},_forElement:Object},attached:function(){this._forChanged()},ready:function(){this._generateLabelId()},_generateLabelId:function(){if(!this.id){var t="iron-label-"+Wa._labelNumber++;e(this).setAttribute("id",t)}},_findTarget:function(){if(this.for){var t=e(this).getOwnerRoot();return e(t).querySelector("#"+this.for)}var n=e(this).querySelector("[iron-label-target]");return n||(n=e(this).firstElementChild),n},_tapHandler:function(t){this._forElement&&(e(t).localTarget!==this._forElement&&(this._forElement.focus(),this._forElement.click()))},_applyLabelledBy:function(){this._forElement&&e(this._forElement).setAttribute("aria-labelledby",this.id)},_forChanged:function(){this._forElement&&e(this._forElement).removeAttribute("aria-labelledby"),this._forElement=this._findTarget(),this._applyLabelledBy()}});Wa._labelNumber=0;class Ga extends(P(L)){static get properties(){return z({label:{type:String},value:{type:String,reflect:!0},values:{type:Array,reflect:!0},name:{type:String},source:{type:String},multi:{type:Boolean},_items:{type:Array},_selected:{type:Array}},super.properties)}constructor(){super(),this.value=null,this.values=[],this._items=[],this._selected=[],this._inIronForm=!1}connectedCallback(){super.connectedCallback(),this.subscribeTo("pb-i18n-update",this._refresh.bind(this)),this.multi&&(0===this.values.length&&this.value&&(this.values=[this.value]),this.value=void 0)}firstUpdated(){super.firstUpdated(),this._inIronForm=this.closest("iron-form, pb-search,pb-custom-form");const e=this.shadowRoot.querySelector('[name="subform"]');e&&e.assignedNodes().forEach(e=>{this.name&&e.addEventListener("change",this._loadRemote.bind(this));e.querySelectorAll("[name]").forEach(e=>{e.addEventListener("change",this._loadRemote.bind(this))})}),this._loadRemote()}_refresh(){const e=this.shadowRoot.getElementById("list");e&&setTimeout(()=>{const t=e.selected;e.selected=void 0,e.selected=t})}_clear(e){const t=this.shadowRoot.querySelector(e);t&&t.assignedNodes().forEach(e=>{e.parentNode.removeChild(e)})}_loadRemote(){if(this.source){const e="."===this.getEndpoint()?window.location.href:this.getEndpoint()+"/";let t=new URL(this.source,e).toString();t=t.indexOf("?")>-1?`${t}&${this._getParameters()}`:`${t}?${this._getParameters()}`,console.log("<pb-select> loading items from %s",t),fetch(t,{method:"GET",mode:"cors",credentials:"same-origin"}).then(e=>e.json()).then(e=>{this._clear("slot:not([name])");const t=[];e.forEach(e=>{t.push({label:e.text,value:e.value})}),console.log("<pb-select> loaded %d items",t.length),this._items=t}).catch(()=>{console.error("<pb-select> request to %s failed",t)})}}_getParameters(){const e=this.shadowRoot.querySelector('[name="subform"]'),t=[];return e&&e.assignedNodes().forEach(e=>{e.querySelectorAll("[name]").forEach(e=>{t.push(`${e.name}=${encodeURIComponent(e.value)}`)})}),t.join("&")}render(){return this.multi?R`
                <slot name="subform"></slot>
                <iron-label for="list" part="label">${i(this.label)}</iron-label>
                ${this.multi?R`<paper-listbox id="list" slot="dropdown-content" class="dropdown-content" 
                    .selectedValues="${this.values}" multi
                    attr-for-selected="value" @iron-select="${this._changed}" @iron-deselect="${this._changed}">
                    <slot></slot>
                    ${this._items.map(e=>R`<paper-item value="${e.value}">${e.label}</paper-item>`)}
                </paper-listbox>`:R`<paper-listbox id="list" slot="dropdown-content" class="dropdown-content" 
                    .selected="${this.value}"
                    attr-for-selected="value" @iron-select="${this._changed}" @iron-deselect="${this._changed}">
                    <slot></slot>
                    ${this._items.map(e=>R`<paper-item value="${e.value}">${e.label}</paper-item>`)}
                </paper-listbox>`}
                <slot name="output"></slot>
            `:R`
            <slot name="subform"></slot>
            <paper-dropdown-menu label="${i(this.label)}">
                <paper-listbox id="list" slot="dropdown-content" class="dropdown-content" .selected="${this.value}"
                    attr-for-selected="value" @iron-select="${this._changed}">
                    <slot></slot>
                    ${this._items.map(e=>R`<paper-item value="${e.value}">${e.label}</paper-item>`)}
                </paper-listbox>
            </paper-dropdown-menu>
            <slot name="output"></slot>
        `}_changed(){const e=this.shadowRoot.getElementById("list"),t=Array.of(this._selected);if(this.multi?(this._selected=e.selectedValues,this.values=this._selected):(this._selected=[e.selected],this.value=e.selected),this._selected.length!==t.length||!this._selected.every((e,n)=>e===t[n])){if(!this._inIronForm||this.multi){this._clear('[name="output"]');(this.multi?this.values:[this.value]).forEach(e=>{const t=document.createElement("input");t.type="hidden",t.name=this.name,t.value=e,t.slot="output",this.appendChild(t)})}this.dispatchEvent(new CustomEvent("change"))}}static get styles(){return O`
            :host {
                display: block;
                position:relative;
                overflow:auto;
                margin-top:1rem;
            }
            :host([multi]) paper-listbox{
                height:16rem;
            }

            iron-label {
                font: var(--pb-base-font);
                font-size:var(--pb-font-caption);
                font-weight: 400;
                color: var(--pb-color-lighter);
            }

            paper-dropdown-menu{
                width:100%;
            }
            
            paper-listbox{
                overflow:auto;
                height:100%;
            }
        `}}customElements.define("pb-select",Ga);
