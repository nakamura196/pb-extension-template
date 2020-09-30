import{P as e,h as t,d as i}from"./paper-checkbox-ab1760d5.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/e({_template:t`
    <style>
      :host {
        display: block;
      }
    </style>

    <!-- This form is used to collect the elements that should be submitted -->
    <slot></slot>

    <!-- This form is used for submission -->
    <form id="helper" action\$="[[action]]" method\$="[[method]]" enctype\$="[[enctype]]"></form>
`,is:"iron-form",properties:{allowRedirect:{type:Boolean,value:!1},headers:{type:Object,value:function(){return{}}},withCredentials:{type:Boolean,value:!1}},attached:function(){this._form||(this._form=i(this).querySelector("form"),this._form?(this._init(),this.async(this._saveInitialValues.bind(this),1)):this._nodeObserver=i(this).observeNodes(function(e){for(var t=0;t<e.addedNodes.length;t++)"FORM"===e.addedNodes[t].tagName&&(this._form=e.addedNodes[t],this._init(),i(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)}.bind(this)))},detached:function(){this._nodeObserver&&(i(this).unobserveNodes(this._nodeObserver),this._nodeObserver=null)},_init:function(){this._form.addEventListener("submit",this.submit.bind(this)),this._form.addEventListener("reset",this.reset.bind(this)),this._defaults=this._defaults||new WeakMap,this._saveInitialValues()},saveResetValues:function(){this._saveInitialValues(!0)},_saveInitialValues:function(e){for(var t=this._getValidatableElements(),i=0;i<t.length;i++){var s=t[i];if(!this._defaults.has(s)||e){var r={value:s.value};"checked"in s&&(r.checked=s.checked),"invalid"in s&&(r.invalid=s.invalid),this._defaults.set(s,r)}}},validate:function(){if(!this._form)return!1;if(""===this._form.getAttribute("novalidate"))return!0;for(var e,t=this._form.checkValidity(),i=this._getValidatableElements(),s=0;e=i[s],s<i.length;s++){var r=e;r.validate&&(t=!!r.validate()&&t)}return t},submit:function(e){if(e&&e.preventDefault(),this._form)if(this.validate()){this.$.helper.textContent="";var t=this.serializeForm();if(this.allowRedirect){for(var i in t)this.$.helper.appendChild(this._createHiddenElement(i,t[i]));this.$.helper.action=this._form.getAttribute("action"),this.$.helper.method=this._form.getAttribute("method")||"GET",this.$.helper.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.$.helper.submit(),this.fire("iron-form-submit")}else this._makeAjaxRequest(t)}else this.fire("iron-form-invalid")},reset:function(e){if(e&&e.preventDefault(),this._form)if(e&&"reset"===e.type&&e.target===this._form){for(var t=this._getValidatableElements(),i=0;i<t.length;i++){var s=t[i];if(this._defaults.has(s)){var r=this._defaults.get(s);for(var n in r)s[n]=r[n]}}this.fire("iron-form-reset")}else this._form.reset()},serializeForm:function(){for(var e=this._getSubmittableElements(),t={},i=0;i<e.length;i++)for(var s=this._serializeElementValues(e[i]),r=0;r<s.length;r++)this._addSerializedElement(t,e[i].name,s[r]);return t},_handleFormResponse:function(e){this.fire("iron-form-response",e.detail)},_handleFormError:function(e){this.fire("iron-form-error",e.detail)},_makeAjaxRequest:function(e){this.request||(this.request=document.createElement("iron-ajax"),this.request.addEventListener("response",this._handleFormResponse.bind(this)),this.request.addEventListener("error",this._handleFormError.bind(this))),this.request.url=this._form.getAttribute("action"),this.request.method=this._form.getAttribute("method")||"GET",this.request.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded",this.request.withCredentials=this.withCredentials,this.request.headers=this.headers,"POST"===this._form.method.toUpperCase()?this.request.body=e:this.request.params=e,this.fire("iron-form-presubmit",{},{cancelable:!0}).defaultPrevented||(this.request.generateRequest(),this.fire("iron-form-submit",e))},_getValidatableElements:function(){return this._findElements(this._form,!0,!1)},_getSubmittableElements:function(){return this._findElements(this._form,!1,!1)},_findElements:function(e,t,s,r){r=r||[];for(var n=i(e).querySelectorAll("*"),a=0;a<n.length;a++)s||"slot"!==n[a].localName&&"content"!==n[a].localName?this._searchSubmittable(r,n[a],t):this._searchSubmittableInSlot(r,n[a],t);return r},_searchSubmittableInSlot:function(e,t,s){for(var r=i(t).getDistributedNodes(),n=0;n<r.length;n++)if(r[n].nodeType!==Node.TEXT_NODE){this._searchSubmittable(e,r[n],s);for(var a=i(r[n]).querySelectorAll("*"),o=0;o<a.length;o++)this._searchSubmittable(e,a[o],s)}},_searchSubmittable:function(e,t,i){this._isSubmittable(t,i)?e.push(t):t.root&&this._findElements(t.root,i,!0,e)},_isSubmittable:function(e,t){return!e.disabled&&(t?e.name||"function"==typeof e.validate:e.name)},_serializeElementValues:function(e){var t=e.tagName.toLowerCase();return"button"===t||"input"===t&&("submit"===e.type||"reset"===e.type)?[]:"select"===t?this._serializeSelectValues(e):"input"===t?this._serializeInputValues(e):e._hasIronCheckedElementBehavior&&!e.checked?[]:[e.value]},_serializeSelectValues:function(e){for(var t=[],i=0;i<e.options.length;i++)e.options[i].selected&&t.push(e.options[i].value);return t},_serializeInputValues:function(e){var t=e.type.toLowerCase();return("checkbox"!==t&&"radio"!==t||e.checked)&&"file"!==t?[e.value]:[]},_createHiddenElement:function(e,t){var i=document.createElement("input");return i.setAttribute("type","hidden"),i.setAttribute("name",e),i.setAttribute("value",t),i},_addSerializedElement:function(e,t,i){void 0===e[t]?e[t]=i:(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(i))}});
