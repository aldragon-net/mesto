(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){var n=e.baseUrl,r=e.endpoints,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._authorization=o.authorization,this._contentType=o["Content-Type"],this._profileEndpoint=this._baseUrl+r.profile,this._cardsEndpoint=this._baseUrl+r.cards,this._avatarEndpoint=this._baseUrl+r.avatar}var n,r;return n=t,(r=[{key:"_getResponseOrError",value:function(t,e){return fetch(t,e).then((function(t){return t.ok?t.json():Promise.reject("Ошибка запроса: ".concat(t.status))}))}},{key:"getProfileInfo",value:function(){return this._getResponseOrError(this._profileEndpoint,{method:"GET",headers:{authorization:this._authorization}})}},{key:"updateProfileInfo",value:function(t){var e=t.name,n=t.about;return this._getResponseOrError(this._profileEndpoint,{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:e,about:n})})}},{key:"changeAvatar",value:function(t){var e=t.link;return this._getResponseOrError(this._avatarEndpoint,{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({avatar:e})})}},{key:"getInitialCards",value:function(){return this._getResponseOrError(this._cardsEndpoint,{method:"GET",headers:{authorization:this._authorization}})}},{key:"createCard",value:function(t){var e=t.name,n=t.link;return this._getResponseOrError(this._cardsEndpoint,{method:"POST",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:e,link:n})})}},{key:"deleteCard",value:function(t){return this._getResponseOrError(this._cardsEndpoint+"/".concat(t),{method:"DELETE",headers:{authorization:this._authorization}})}},{key:"likeCard",value:function(t){return this._getResponseOrError(this._cardsEndpoint+"/".concat(t)+"/likes",{method:"PUT",headers:{authorization:this._authorization}})}},{key:"unlikeCard",value:function(t){return this._getResponseOrError(this._cardsEndpoint+"/".concat(t)+"/likes",{method:"DELETE",headers:{authorization:this._authorization}})}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderItem=r}var e,n;return e=t,(n=[{key:"prependItem",value:function(t){this._container.prepend(t)}},{key:"appendItem",value:function(t){this._container.append(t)}},{key:"renderItems",value:function(t,e){var n=this;t.forEach((function(t){n._renderItem(t,e)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e){var n=e.nameSelector,r=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about}},{key:"setAvatar",value:function(t){this._avatar.src=t.avatar}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._closeButton=this._popupElement.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popupElement.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._closeButton.addEventListener("click",(function(){return t.close()})),this._popupElement.addEventListener("click",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__container"))&&t.close()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popupElement.querySelector(".popup__image"),e._popupImageCaption=e._popupElement.querySelector(".popup__image-caption"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.link,n=t.name;this._popupImage.src=e,this._popupImage.alt="фотография места «".concat(n,"»"),this._popupImageCaption.textContent=n,h(b(u.prototype),"open",this).call(this)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).form=e._popupElement.querySelector(".popup__form"),e._button=document.querySelector(".popup__form .popup__form-submit"),e}return e=u,(n=[{key:"setButtonText",value:function(t){this._button.textContent=t}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitHandler=e,n._inputs=n.form.querySelectorAll(".popup__form-input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;O(P(u.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(e){e.preventDefault();var n=t._getInputValues();t._submitHandler(n)}))}},{key:"close",value:function(){this.form.reset(),O(P(u.prototype),"close",this).call(this)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;R(B(u.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit()}))}},{key:"setCallback",value:function(t){this._handleSubmit=t}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var D=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=n,this._formElement=e}var e,n;return e=t,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));n.textContent=e,t.classList.add(this._settings.inputErrorClass),n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._settings.inputErrorClass),e.classList.remove(this._settings.errorClass),e.textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector),this._toggleButtonState(),this._formElement.addEventListener("reset",(function(){t._disableButton()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),U={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__form-submit",inactiveButtonClass:"popup__form-submit_inactive",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__form-error_visible"},A=document.forms["profile-form"],V=A.querySelector("#profile-name-input"),H=A.querySelector("#profile-about-input"),N=document.forms["avatar-form"].querySelector("#avatar-link-input"),J=(document.forms["place-form"],document.querySelector(".profile__add-button")),G=document.querySelector(".profile__edit-button"),M=document.querySelector(".profile__avatar-button");function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}var Q=function(){function t(e,n,r,o,i,u){var a=e.name,c=e.link,l=e.owner,s=e.likes,f=e._id;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=a,this._link=c,this._owned=n._id===l._id,this._id=f,this._likes=s,this._user=n,this._templateSelector=r,this._handleCardClick=o,this._handleDelete=i,this._handleLike=u}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(!0)}},{key:"_renderLikes",value:function(){this._likeCounter.textContent=this._likes.length;var t=Array.from(this._likes,(function(t){return t._id}));this._liked=t.includes(this._user._id),this._liked?this._buttonLike.classList.add("place__like-icon_active"):this._buttonLike.classList.remove("place__like-icon_active")}},{key:"updateLikes",value:function(t){this._likes=t.likes,this._renderLikes()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){return t._handleLike(t)})),this._owned?this._buttonDelete.addEventListener("click",(function(){return t._handleDelete(t)})):this._buttonDelete.remove(),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t._link,t._name)}))}},{key:"_fillContent",value:function(){this._element.querySelector(".place__name").textContent=this._name,this._cardImage.src=this._link,this._renderLikes(),this._cardImage.alt="фотография места «".concat(this._name,"»")}},{key:"getId",value:function(){return this._id}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._buttonDelete=this._element.querySelector(".place__delete-icon"),this._buttonLike=this._element.querySelector(".place__like-icon"),this._likeCounter=this._element.querySelector(".place__like-counter"),this._cardImage=this._element.querySelector(".place__image"),this._fillContent(),this._setEventListeners(),this._element}}])&&K(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),W=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-73",endpoints:{profile:"/users/me",cards:"/cards",avatar:"/users/me/avatar"},headers:{authorization:"5f40da40-c28b-4113-a248-5874131380d9","Content-Type":"application/json"}}),X=new m("#photo-popup");X.setEventListeners();var Y=new q("#confirmation-popup");Y.setEventListeners();var Z,$,tt,et=(Z=X.open.bind(X),$=function(t){Y.setCallback((function(){return function(t){Y.setButtonText("Удаляется…"),W.deleteCard(t.getId()).then((function(){Y.close(),t.deleteCard()})).catch((function(t){console.log("Карточка не удалена: ".concat(t))})).finally((function(){Y.setButtonText("Да")}))}(t)})),Y.open()},tt=function(t){(t._liked?W.unlikeCard.bind(W):W.likeCard.bind(W))(t._id).then((function(e){t.updateLikes(e)})).catch((function(t){return console.log("Ошибка обработки лайка: ".concat(t))}))},function(t,e){return new Q(t,e,"#template-place",(function(){Z(t)}),$,tt).generateCard()}),nt=new c({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"});W.getProfileInfo().then((function(t){return nt.setUserInfo(t),nt.setAvatar(t),t})).then((function(t){var e=new i({renderer:function(n){var r=et(n,t);e.appendItem(r)}},".places");W.getInitialCards().then((function(t){e.renderItems(t)})).catch((function(t){console.log("Не удалось загрузить карточки: ".concat(t))}));var n=new C("#place-popup",(function(t){n.setButtonText("Создание карточки…"),W.createCard(t).then((function(t){e.prependItem(et(t,t.owner)),n.close()})).catch((function(t){console.log("Не удалось создать карточку: ".concat(t))})).finally((function(){n.setButtonText("Создать")}))}));n.setEventListeners(),new D(n.form,U).enableValidation(),J.addEventListener("click",n.open.bind(n))})).catch((function(t){console.log("Не удалось получить данные профиля: ".concat(t))}));var rt=new C("#profile-popup",(function(t){rt.setButtonText("Сохранение…"),W.updateProfileInfo(t).then((function(t){nt.setUserInfo(t),rt.close()})).catch((function(t){console.log("Не удалось обновить профиль: ".concat(t))})).finally((function(){rt.setButtonText("Сохранить")}))}));rt.setEventListeners(),new D(rt.form,U).enableValidation();var ot=new C("#avatar-popup",(function(t){ot.setButtonText("Сохранение…"),W.changeAvatar(t).then((function(t){nt.setAvatar(t),ot.close()})).catch((function(t){console.log("Не удалось обновить аватар: ".concat(t))})).finally((function(){ot.setButtonText("Сохранить")}))}));ot.setEventListeners(),new D(ot.form,U).enableValidation(),G.addEventListener("click",(function(){var t=nt.getUserInfo();V.value=t.name,H.value=t.about,rt.open()})),M.addEventListener("click",(function(){var t=nt.getUserInfo();N.value=t.avatar,ot.open()}))})();