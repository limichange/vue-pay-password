module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jL/W");


/***/ }),

/***/ "3bcB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jL/W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/limichange/limiCode/vue-payPassword/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib?{"presets":["/usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/babel-preset-app/index.js"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/payPassword.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var payPassword = ({
  name: 'PayPasswrod',
  props: {
    value: {
      type: String,
      default: ''
    },
    length: {
      type: Number,
      default: 6
    },
    tabindex: {
      type: Number,
      default: 0
    },
    disable: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'payPassword'
    }
  },
  data: function data() {
    return {
      status: '',
      val: '',
      step: 0,
      MODE: {
        FOCUS: 1,
        BLUR: 2,
        COMPLETE: 3
      }
    };
  },
  computed: {
    inputStyle: function inputStyle() {
      return {
        width: "29px",
        left: "".concat(this.val.length * this.step, "px")
      };
    }
  },
  watch: {
    val: function val(_val) {
      this.$emit('input', _val);

      if (this.status === this.MODE.BLUR) {
        return;
      }

      if (_val.length === this.length) {
        this.status = this.MODE.COMPLETE;
      } else {
        this.status = this.MODE.FOCUS;
      }
    },
    value: function value(_value) {
      this.updateVal(_value);
    }
  },
  mounted: function mounted() {
    this.status = this.MODE.BLUR;
    this.updateVal(this.value);
    this.step = (this.$el.offsetWidth - 2) / this.length;
  },
  methods: {
    updateVal: function updateVal(value) {
      if (this.val === value || value.length > this.length) {
        return;
      }

      this.val = value;
    },
    clear: function clear() {
      this.val = '';
      this.$emit('clear');
    },
    blur: function blur() {
      this.status = this.MODE.BLUR;
      this.$emit('blur');
    },
    focus: function focus(e) {
      if (this.disable) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }

        return false;
      }

      this.$refs.input.focus();

      if (this.val.length === this.length) {
        this.status = this.MODE.COMPLETE;
      } else {
        this.status = this.MODE.FOCUS;
      }

      this.$emit('focus');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9f79dcac","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/payPassword.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"payPassword"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.val),expression:"val"}],ref:"input",staticClass:"sixDigitPassword",attrs:{"aria-disabled":_vm.disable,"type":"password","name":_vm.name,"autocomplete":"off","maxlength":_vm.length,"minlength":_vm.length},domProps:{"value":(_vm.val)},on:{"contextmenu":function () { return false; },"paste":function () { return false; },"copy":function () { return false; },"cut":function () { return false; },"blur":_vm.blur,"input":function($event){if($event.target.composing){ return; }_vm.val=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"sixDigitPassword",attrs:{"tabindex":_vm.tabindex},on:{"focus":_vm.focus}},[_vm._l((_vm.length),function(index,i){return _c('i',{key:i},[_c('b',{directives:[{name:"show",rawName:"v-show",value:(index <= _vm.val.length),expression:"index <= val.length"}]})])}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.status === _vm.MODE.FOCUS),expression:"status === MODE.FOCUS"}],style:(_vm.inputStyle)})],2)])}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/payPassword.vue
function injectStyle (context) {
  __webpack_require__("3bcB")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  payPassword,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_payPassword = (Component.exports);

// CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_payPassword);


/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-pay-password.common.js.map