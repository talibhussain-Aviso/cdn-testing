(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("vue-router"));
	else if(typeof define === 'function' && define.amd)
		define("LeadIntelligenceModule", ["vue", "vue-router"], factory);
	else if(typeof exports === 'object')
		exports["LeadIntelligenceModule"] = factory(require("vue"), require("vue-router"));
	else
		root["LeadIntelligenceModule"] = factory(root["Vue"], root["VueRouter"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_vue__, __WEBPACK_EXTERNAL_MODULE_vue_router__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Navbar.vue */ \"./src/components/Navbar.vue\");\n/* harmony import */ var _pages_Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Dashboard.vue */ \"./src/pages/Dashboard.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Dashboard: _pages_Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/components/Navbar.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vuex_modules_leadIntelligenceChild_getters_leadIntelligenceChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vuex/modules/leadIntelligenceChild/getters.leadIntelligenceChild */ \"./src/vuex/modules/leadIntelligenceChild/getters.leadIntelligenceChild.js\");\n/* harmony import */ var _vuex_modules_leadIntelligenceChild_actions_leadIntelligenceChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vuex/modules/leadIntelligenceChild/actions.leadIntelligenceChild */ \"./src/vuex/modules/leadIntelligenceChild/actions.leadIntelligenceChild.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    description: {\n      type: String\n    }\n  },\n  data: function data() {\n    return {\n      test: ''\n    };\n  },\n  vuex: {\n    getters: {\n      getTest: _vuex_modules_leadIntelligenceChild_getters_leadIntelligenceChild__WEBPACK_IMPORTED_MODULE_0__[\"getTest\"]\n    },\n    actions: {\n      setTest: _vuex_modules_leadIntelligenceChild_actions_leadIntelligenceChild__WEBPACK_IMPORTED_MODULE_1__[\"setTest\"]\n    }\n  }\n});\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Dashboard.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Settings.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Settings.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Settings.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", [_c(\"navbar\"), _vm._v(\" \"), _c(\"Dashboard\"), _vm._v(\" \"), _c(\"router-view\")], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=template&id=41458b80":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=template&id=41458b80 ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"nav\", [_c(\"router-link\", {\n    attrs: {\n      to: \"/\"\n    }\n  }, [_vm._v(\"Dashboard\")]), _vm._v(\" |\\n  \"), _c(\"router-link\", {\n    attrs: {\n      to: \"/settings\"\n    }\n  }, [_vm._v(\"Settings\")])], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/components/Navbar.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard.vue?vue&type=template&id=1d81e2c0":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dashboard.vue?vue&type=template&id=1d81e2c0 ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticStyle: {\n      \"background-color\": \"red\",\n      padding: \"20px\"\n    }\n  }, [_c(\"h2\", [_vm._v(\"This is Micro Frontend App Dashboard \")]), _vm._v(\"\\n  data : \" + _vm._s(_vm.getTest) + \"\\n  \"), _c(\"input\", {\n    directives: [{\n      name: \"model\",\n      rawName: \"v-model\",\n      value: _vm.test,\n      expression: \"test\"\n    }],\n    attrs: {\n      type: \"text\"\n    },\n    domProps: {\n      value: _vm.test\n    },\n    on: {\n      input: function input($event) {\n        if ($event.target.composing) return;\n        _vm.test = $event.target.value;\n      }\n    }\n  }), _vm._v(\" \"), _c(\"button\", {\n    on: {\n      click: function click($event) {\n        return _vm.setTest(_vm.test);\n      }\n    }\n  }, [_vm._v(\"Set Test\")])]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Dashboard.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Settings.vue?vue&type=template&id=b66ee972&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Settings.vue?vue&type=template&id=b66ee972&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _vm._m(0);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", [_c(\"h2\", [_vm._v(\"Settings Page\")]), _vm._v(\" \"), _c(\"p\", [_vm._v(\"Module settings goes here.\")])]);\n}];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Settings.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nh2[data-v-b66ee972] {\\n  background: red\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Settings.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://LeadIntelligenceModule/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent(\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */,\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options =\n    typeof scriptExports === 'function' ? scriptExports.options : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) {\n    // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n          injectStyles.call(\n            this,\n            (options.functional ? this.parent : this).$root.$options.shadowRoot\n          )\n        }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection(h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"37a95174\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Settings.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listToStyles; });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles (parentId, list) {\n  var styles = []\n  var newStyles = {}\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i]\n    var id = item[0]\n    var css = item[1]\n    var media = item[2]\n    var sourceMap = item[3]\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    }\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = { id: id, parts: [part] })\n    } else {\n      newStyles[id].parts.push(part)\n    }\n  }\n  return styles\n}\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.js":
/*!****************************************!*\
  !*** ./node_modules/vuex/dist/vuex.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!\n * Vuex v1.0.0-rc.2\n * (c) 2016 Evan You\n * Released under the MIT License.\n */\n(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n}(this, function () { 'use strict';\n\n  var _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n  };\n\n  var classCallCheck = function (instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError(\"Cannot call a class as a function\");\n    }\n  };\n\n  var createClass = function () {\n    function defineProperties(target, props) {\n      for (var i = 0; i < props.length; i++) {\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n      }\n    }\n\n    return function (Constructor, protoProps, staticProps) {\n      if (protoProps) defineProperties(Constructor.prototype, protoProps);\n      if (staticProps) defineProperties(Constructor, staticProps);\n      return Constructor;\n    };\n  }();\n\n  var toConsumableArray = function (arr) {\n    if (Array.isArray(arr)) {\n      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];\n\n      return arr2;\n    } else {\n      return Array.from(arr);\n    }\n  };\n\n  /**\n   * Merge an array of objects into one.\n   *\n   * @param {Array<Object>} arr\n   * @return {Object}\n   */\n\n  function mergeObjects(arr) {\n    return arr.reduce(function (prev, obj) {\n      Object.keys(obj).forEach(function (key) {\n        var existing = prev[key];\n        if (existing) {\n          // allow multiple mutation objects to contain duplicate\n          // handlers for the same mutation type\n          if (Array.isArray(existing)) {\n            prev[key] = existing.concat(obj[key]);\n          } else {\n            prev[key] = [existing].concat(obj[key]);\n          }\n        } else {\n          prev[key] = obj[key];\n        }\n      });\n      return prev;\n    }, {});\n  }\n\n  /**\n   * Check whether the given value is Object or not\n   *\n   * @param {*} obj\n   * @return {Boolean}\n   */\n\n  function isObject(obj) {\n    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';\n  }\n\n  /**\n   * Get state sub tree by given keys.\n   *\n   * @param {Object} state\n   * @param {Array<String>} nestedKeys\n   * @return {Object}\n   */\n  function getNestedState(state, nestedKeys) {\n    return nestedKeys.reduce(function (state, key) {\n      return state[key];\n    }, state);\n  }\n\n  /**\n   * Hacks to get access to Vue internals.\n   * Maybe we should expose these...\n   */\n\n  var Watcher = void 0;\n  function getWatcher(vm) {\n    if (!Watcher) {\n      var noop = function noop() {};\n      var unwatch = vm.$watch(noop, noop);\n      Watcher = vm._watchers[0].constructor;\n      unwatch();\n    }\n    return Watcher;\n  }\n\n  var Dep = void 0;\n  function getDep(vm) {\n    if (!Dep) {\n      Dep = vm._data.__ob__.dep.constructor;\n    }\n    return Dep;\n  }\n\n  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;\n\n  function devtoolPlugin(store) {\n    if (!hook) return;\n\n    hook.emit('vuex:init', store);\n\n    hook.on('vuex:travel-to-state', function (targetState) {\n      store.replaceState(targetState);\n    });\n\n    store.subscribe(function (mutation, state) {\n      hook.emit('vuex:mutation', mutation, state);\n    });\n  }\n\n  function override (Vue) {\n    var version = Number(Vue.version.split('.')[0]);\n\n    if (version >= 2) {\n      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;\n      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });\n    } else {\n      (function () {\n        // override init and inject vuex init procedure\n        // for 1.x backwards compatibility.\n        var _init = Vue.prototype._init;\n        Vue.prototype._init = function () {\n          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;\n          _init.call(this, options);\n        };\n      })();\n    }\n\n    /**\n     * Vuex init hook, injected into each instances init hooks list.\n     */\n\n    function vuexInit() {\n      var options = this.$options;\n      var store = options.store;\n      var vuex = options.vuex;\n      // store injection\n\n      if (store) {\n        this.$store = store;\n      } else if (options.parent && options.parent.$store) {\n        this.$store = options.parent.$store;\n      }\n      // vuex option handling\n      if (vuex) {\n        if (!this.$store) {\n          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');\n        }\n        var state = vuex.state;\n        var actions = vuex.actions;\n        var getters = vuex.getters;\n        // handle deprecated state option\n\n        if (state && !getters) {\n          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');\n          getters = state;\n        }\n        // getters\n        if (getters) {\n          options.computed = options.computed || {};\n          for (var key in getters) {\n            defineVuexGetter(this, key, getters[key]);\n          }\n        }\n        // actions\n        if (actions) {\n          options.methods = options.methods || {};\n          for (var _key in actions) {\n            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);\n          }\n        }\n      }\n    }\n\n    /**\n     * Setter for all getter properties.\n     */\n\n    function setter() {\n      throw new Error('vuex getter properties are read-only.');\n    }\n\n    /**\n     * Define a Vuex getter on an instance.\n     *\n     * @param {Vue} vm\n     * @param {String} key\n     * @param {Function} getter\n     */\n\n    function defineVuexGetter(vm, key, getter) {\n      if (typeof getter !== 'function') {\n        console.warn('[vuex] Getter bound to key \\'vuex.getters.' + key + '\\' is not a function.');\n      } else {\n        Object.defineProperty(vm, key, {\n          enumerable: true,\n          configurable: true,\n          get: makeComputedGetter(vm.$store, getter),\n          set: setter\n        });\n      }\n    }\n\n    /**\n     * Make a computed getter, using the same caching mechanism of computed\n     * properties. In addition, it is cached on the raw getter function using\n     * the store's unique cache id. This makes the same getter shared\n     * across all components use the same underlying watcher, and makes\n     * the getter evaluated only once during every flush.\n     *\n     * @param {Store} store\n     * @param {Function} getter\n     */\n\n    function makeComputedGetter(store, getter) {\n      var id = store._getterCacheId;\n\n      // cached\n      if (getter[id]) {\n        return getter[id];\n      }\n      var vm = store._vm;\n      var Watcher = getWatcher(vm);\n      var Dep = getDep(vm);\n      var watcher = new Watcher(vm, function (vm) {\n        return getter(vm.state);\n      }, null, { lazy: true });\n      var computedGetter = function computedGetter() {\n        if (watcher.dirty) {\n          watcher.evaluate();\n        }\n        if (Dep.target) {\n          watcher.depend();\n        }\n        return watcher.value;\n      };\n      getter[id] = computedGetter;\n      return computedGetter;\n    }\n\n    /**\n     * Make a bound-to-store version of a raw action function.\n     *\n     * @param {Store} store\n     * @param {Function} action\n     * @param {String} key\n     */\n\n    function makeBoundAction(store, action, key) {\n      if (typeof action !== 'function') {\n        console.warn('[vuex] Action bound to key \\'vuex.actions.' + key + '\\' is not a function.');\n      }\n      return function vuexBoundAction() {\n        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {\n          args[_key2] = arguments[_key2];\n        }\n\n        return action.call.apply(action, [this, store].concat(args));\n      };\n    }\n\n    // option merging\n    var merge = Vue.config.optionMergeStrategies.computed;\n    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {\n      if (!toVal) return fromVal;\n      if (!fromVal) return toVal;\n      return {\n        getters: merge(toVal.getters, fromVal.getters),\n        state: merge(toVal.state, fromVal.state),\n        actions: merge(toVal.actions, fromVal.actions)\n      };\n    };\n  }\n\n  var Vue = void 0;\n  var uid = 0;\n\n  var Store = function () {\n\n    /**\n     * @param {Object} options\n     *        - {Object} state\n     *        - {Object} actions\n     *        - {Object} mutations\n     *        - {Array} plugins\n     *        - {Boolean} strict\n     */\n\n    function Store() {\n      var _this = this;\n\n      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n      var _ref$state = _ref.state;\n      var state = _ref$state === undefined ? {} : _ref$state;\n      var _ref$mutations = _ref.mutations;\n      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;\n      var _ref$modules = _ref.modules;\n      var modules = _ref$modules === undefined ? {} : _ref$modules;\n      var _ref$plugins = _ref.plugins;\n      var plugins = _ref$plugins === undefined ? [] : _ref$plugins;\n      var _ref$strict = _ref.strict;\n      var strict = _ref$strict === undefined ? false : _ref$strict;\n      classCallCheck(this, Store);\n\n      this._getterCacheId = 'vuex_store_' + uid++;\n      this._dispatching = false;\n      this._rootMutations = this._mutations = mutations;\n      this._modules = modules;\n      this._subscribers = [];\n      // bind dispatch to self\n      var dispatch = this.dispatch;\n      this.dispatch = function () {\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        dispatch.apply(_this, args);\n      };\n      // use a Vue instance to store the state tree\n      // suppress warnings just in case the user has added\n      // some funky global mixins\n      if (!Vue) {\n        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');\n      }\n      var silent = Vue.config.silent;\n      Vue.config.silent = true;\n      this._vm = new Vue({\n        data: {\n          state: state\n        }\n      });\n      Vue.config.silent = silent;\n      this._setupModuleState(state, modules);\n      this._setupModuleMutations(modules);\n      // add extra warnings in strict mode\n      if (strict) {\n        this._setupMutationCheck();\n      }\n      // apply plugins\n      devtoolPlugin(this);\n      plugins.forEach(function (plugin) {\n        return plugin(_this);\n      });\n    }\n\n    /**\n     * Getter for the entire state tree.\n     * Read only.\n     *\n     * @return {Object}\n     */\n\n    createClass(Store, [{\n      key: 'replaceState',\n\n\n      /**\n       * Replace root state.\n       *\n       * @param {Object} state\n       */\n\n      value: function replaceState(state) {\n        this._dispatching = true;\n        this._vm.state = state;\n        this._dispatching = false;\n      }\n\n      /**\n       * Dispatch an action.\n       *\n       * @param {String} type\n       */\n\n    }, {\n      key: 'dispatch',\n      value: function dispatch(type) {\n        var _this2 = this;\n\n        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n          payload[_key2 - 1] = arguments[_key2];\n        }\n\n        var silent = false;\n        var isObjectStyleDispatch = false;\n        // compatibility for object actions, e.g. FSA\n        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {\n          isObjectStyleDispatch = true;\n          payload = type;\n          if (type.silent) silent = true;\n          type = type.type;\n        }\n        var handler = this._mutations[type];\n        var state = this.state;\n        if (handler) {\n          this._dispatching = true;\n          // apply the mutation\n          if (Array.isArray(handler)) {\n            handler.forEach(function (h) {\n              isObjectStyleDispatch ? h(state, payload) : h.apply(undefined, [state].concat(toConsumableArray(payload)));\n            });\n          } else {\n            isObjectStyleDispatch ? handler(state, payload) : handler.apply(undefined, [state].concat(toConsumableArray(payload)));\n          }\n          this._dispatching = false;\n          if (!silent) {\n            (function () {\n              var mutation = isObjectStyleDispatch ? payload : { type: type, payload: payload };\n              _this2._subscribers.forEach(function (sub) {\n                return sub(mutation, state);\n              });\n            })();\n          }\n        } else {\n          console.warn('[vuex] Unknown mutation: ' + type);\n        }\n      }\n\n      /**\n       * Watch state changes on the store.\n       * Same API as Vue's $watch, except when watching a function,\n       * the function gets the state as the first argument.\n       *\n       * @param {Function} fn\n       * @param {Function} cb\n       * @param {Object} [options]\n       */\n\n    }, {\n      key: 'watch',\n      value: function watch(fn, cb, options) {\n        var _this3 = this;\n\n        if (typeof fn !== 'function') {\n          console.error('Vuex store.watch only accepts function.');\n          return;\n        }\n        return this._vm.$watch(function () {\n          return fn(_this3.state);\n        }, cb, options);\n      }\n\n      /**\n       * Subscribe to state changes. Fires after every mutation.\n       */\n\n    }, {\n      key: 'subscribe',\n      value: function subscribe(fn) {\n        var subs = this._subscribers;\n        if (subs.indexOf(fn) < 0) {\n          subs.push(fn);\n        }\n        return function () {\n          var i = subs.indexOf(fn);\n          if (i > -1) {\n            subs.splice(i, 1);\n          }\n        };\n      }\n\n      /**\n       * Hot update mutations & modules.\n       *\n       * @param {Object} options\n       *        - {Object} [mutations]\n       *        - {Object} [modules]\n       */\n\n    }, {\n      key: 'hotUpdate',\n      value: function hotUpdate() {\n        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n        var mutations = _ref2.mutations;\n        var modules = _ref2.modules;\n\n        this._rootMutations = this._mutations = mutations || this._rootMutations;\n        this._setupModuleMutations(modules || this._modules);\n      }\n\n      /**\n       * Attach sub state tree of each module to the root tree.\n       *\n       * @param {Object} state\n       * @param {Object} modules\n       */\n\n    }, {\n      key: '_setupModuleState',\n      value: function _setupModuleState(state, modules) {\n        var _this4 = this;\n\n        if (!isObject(modules)) return;\n\n        Object.keys(modules).forEach(function (key) {\n          var module = modules[key];\n\n          // set this module's state\n          Vue.set(state, key, module.state || {});\n\n          // retrieve nested modules\n          _this4._setupModuleState(state[key], module.modules);\n        });\n      }\n\n      /**\n       * Bind mutations for each module to its sub tree and\n       * merge them all into one final mutations map.\n       *\n       * @param {Object} updatedModules\n       */\n\n    }, {\n      key: '_setupModuleMutations',\n      value: function _setupModuleMutations(updatedModules) {\n        var modules = this._modules;\n        Object.keys(updatedModules).forEach(function (key) {\n          modules[key] = updatedModules[key];\n        });\n        var updatedMutations = this._createModuleMutations(modules, []);\n        this._mutations = mergeObjects([this._rootMutations].concat(toConsumableArray(updatedMutations)));\n      }\n\n      /**\n       * Helper method for _setupModuleMutations.\n       * The method retrieve nested sub modules and\n       * bind each mutations to its sub tree recursively.\n       *\n       * @param {Object} modules\n       * @param {Array<String>} nestedKeys\n       * @return {Array<Object>}\n       */\n\n    }, {\n      key: '_createModuleMutations',\n      value: function _createModuleMutations(modules, nestedKeys) {\n        var _this5 = this;\n\n        if (!isObject(modules)) return [];\n\n        return Object.keys(modules).map(function (key) {\n          var module = modules[key];\n          var newNestedKeys = nestedKeys.concat(key);\n\n          // retrieve nested modules\n          var nestedMutations = _this5._createModuleMutations(module.modules, newNestedKeys);\n\n          if (!module || !module.mutations) {\n            return mergeObjects(nestedMutations);\n          }\n\n          // bind mutations to sub state tree\n          var mutations = {};\n          Object.keys(module.mutations).forEach(function (name) {\n            var original = module.mutations[name];\n            mutations[name] = function (state) {\n              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {\n                args[_key3 - 1] = arguments[_key3];\n              }\n\n              original.apply(undefined, [getNestedState(state, newNestedKeys)].concat(args));\n            };\n          });\n\n          // merge mutations of this module and nested modules\n          return mergeObjects([mutations].concat(toConsumableArray(nestedMutations)));\n        });\n      }\n\n      /**\n       * Setup mutation check: if the vuex instance's state is mutated\n       * outside of a mutation handler, we throw en error. This effectively\n       * enforces all mutations to the state to be trackable and hot-reloadble.\n       * However, this comes at a run time cost since we are doing a deep\n       * watch on the entire state tree, so it is only enalbed with the\n       * strict option is set to true.\n       */\n\n    }, {\n      key: '_setupMutationCheck',\n      value: function _setupMutationCheck() {\n        var _this6 = this;\n\n        var Watcher = getWatcher(this._vm);\n        /* eslint-disable no-new */\n        new Watcher(this._vm, 'state', function () {\n          if (!_this6._dispatching) {\n            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');\n          }\n        }, { deep: true, sync: true });\n        /* eslint-enable no-new */\n      }\n    }, {\n      key: 'state',\n      get: function get() {\n        return this._vm.state;\n      },\n      set: function set(v) {\n        throw new Error('[vuex] Use store.replaceState() to explicit replace store state.');\n      }\n    }]);\n    return Store;\n  }();\n\n  function install(_Vue) {\n    if (Vue) {\n      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');\n      return;\n    }\n    Vue = _Vue;\n    override(Vue);\n  }\n\n  // auto install in dist mode\n  if (typeof window !== 'undefined' && window.Vue) {\n    install(window.Vue);\n  }\n\n  var index = {\n    Store: Store,\n    install: install\n  };\n\n  return index;\n\n}));\n\n//# sourceURL=webpack://LeadIntelligenceModule/./node_modules/vuex/dist/vuex.js?");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90 */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/App.vue?");

/***/ }),

/***/ "./src/components/Navbar.vue":
/*!***********************************!*\
  !*** ./src/components/Navbar.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Navbar_vue_vue_type_template_id_41458b80__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=41458b80 */ \"./src/components/Navbar.vue?vue&type=template&id=41458b80\");\n/* harmony import */ var _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js */ \"./src/components/Navbar.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Navbar_vue_vue_type_template_id_41458b80__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Navbar_vue_vue_type_template_id_41458b80__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Navbar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/components/Navbar.vue?");

/***/ }),

/***/ "./src/components/Navbar.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Navbar.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/components/Navbar.vue?");

/***/ }),

/***/ "./src/components/Navbar.vue?vue&type=template&id=41458b80":
/*!*****************************************************************!*\
  !*** ./src/components/Navbar.vue?vue&type=template&id=41458b80 ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_41458b80__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=41458b80 */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navbar.vue?vue&type=template&id=41458b80\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_41458b80__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_41458b80__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/components/Navbar.vue?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: mount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return mount; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _vuex_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vuex/store */ \"./src/vuex/store.js\");\n/* harmony import */ var _vuex_modules_leadIntelligenceChild_leadIntelligenceChild__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vuex/modules/leadIntelligenceChild/leadIntelligenceChild */ \"./src/vuex/modules/leadIntelligenceChild/leadIntelligenceChild.js\");\n/* harmony import */ var _vuex_register_child_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vuex/register-child-store */ \"./src/vuex/register-child-store.js\");\n/* harmony import */ var _pages_Dashboard_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Dashboard.vue */ \"./src/pages/Dashboard.vue\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\n\n\nvar MODULE_NAME = 'leadIntelligenceChild';\nfunction mount(el) {\n  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  new vue__WEBPACK_IMPORTED_MODULE_0___default.a({\n    router: _router__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    store: _vuex_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    render: function render(h) {\n      return h(_App_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        props: props\n      });\n    }\n  }).$mount(el);\n}\nvar components = {\n  'LeadIntelligenceModule': _App_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Dashboard: _pages_Dashboard_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\nvar LeadIntelligenceModule = _objectSpread(_objectSpread({\n  install: function install(Vue, options) {\n    Object.entries(components).forEach(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n        name = _ref2[0],\n        component = _ref2[1];\n      Vue.component(name, component);\n    });\n    console.log('options >>', options);\n    console.log('store >>>', options.store);\n    Vue.mixin({\n      beforeCreate: function beforeCreate() {\n        var storeInstance = this.$store;\n        if (!storeInstance) return;\n        var opts = this.$options || {};\n        var compName = opts.name || this.$vnode && this.$vnode.tag && this.$vnode.tag.replace(/^vue-component-/, '');\n        var isMicroByName = compName && Object.prototype.hasOwnProperty.call(components, compName);\n        var ctorOpts = opts.Ctor && opts.Ctor.options ? opts.Ctor.options : opts;\n        var isMicroByFlag = ctorOpts && ctorOpts.__IS_MICRO_COMPONENT;\n        if (!isMicroByName && !isMicroByFlag) {\n          return;\n        }\n        try {\n          Object(_vuex_register_child_store__WEBPACK_IMPORTED_MODULE_5__[\"registerChildStore\"])(storeInstance, MODULE_NAME, _vuex_modules_leadIntelligenceChild_leadIntelligenceChild__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n        } catch (err) {\n          console.error('Failed to register child module from mixin:', err);\n        }\n      }\n    });\n  }\n}, components), {}, {\n  router: _router__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  store: _vuex_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeadIntelligenceModule);\nif (typeof window !== 'undefined' && window.Vue) {\n  window.Vue.use(LeadIntelligenceModule);\n}\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/index.js?");

/***/ }),

/***/ "./src/pages/Dashboard.vue":
/*!*********************************!*\
  !*** ./src/pages/Dashboard.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dashboard_vue_vue_type_template_id_1d81e2c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1d81e2c0 */ \"./src/pages/Dashboard.vue?vue&type=template&id=1d81e2c0\");\n/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ \"./src/pages/Dashboard.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Dashboard_vue_vue_type_template_id_1d81e2c0__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Dashboard_vue_vue_type_template_id_1d81e2c0__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/pages/Dashboard.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Dashboard.vue?");

/***/ }),

/***/ "./src/pages/Dashboard.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/pages/Dashboard.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Dashboard.vue?");

/***/ }),

/***/ "./src/pages/Dashboard.vue?vue&type=template&id=1d81e2c0":
/*!***************************************************************!*\
  !*** ./src/pages/Dashboard.vue?vue&type=template&id=1d81e2c0 ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1d81e2c0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1d81e2c0 */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Dashboard.vue?vue&type=template&id=1d81e2c0\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1d81e2c0__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1d81e2c0__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Dashboard.vue?");

/***/ }),

/***/ "./src/pages/Settings.vue":
/*!********************************!*\
  !*** ./src/pages/Settings.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Settings_vue_vue_type_template_id_b66ee972_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=b66ee972&scoped=true */ \"./src/pages/Settings.vue?vue&type=template&id=b66ee972&scoped=true\");\n/* harmony import */ var _Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js */ \"./src/pages/Settings.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Settings_vue_vue_type_style_index_0_id_b66ee972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css */ \"./src/pages/Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Settings_vue_vue_type_template_id_b66ee972_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Settings_vue_vue_type_template_id_b66ee972_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"b66ee972\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/pages/Settings.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Settings.vue?");

/***/ }),

/***/ "./src/pages/Settings.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/pages/Settings.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Settings.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Settings.vue?");

/***/ }),

/***/ "./src/pages/Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css":
/*!****************************************************************************************!*\
  !*** ./src/pages/Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_b66ee972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/Settings.vue?vue&type=style&index=0&id=b66ee972&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_b66ee972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_b66ee972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_b66ee972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_b66ee972_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Settings.vue?");

/***/ }),

/***/ "./src/pages/Settings.vue?vue&type=template&id=b66ee972&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/pages/Settings.vue?vue&type=template&id=b66ee972&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_b66ee972_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=b66ee972&scoped=true */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Settings.vue?vue&type=template&id=b66ee972&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_b66ee972_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_b66ee972_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/pages/Settings.vue?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"vue-router\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_Dashboard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Dashboard.vue */ \"./src/pages/Dashboard.vue\");\n/* harmony import */ var _pages_Settings_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Settings.vue */ \"./src/pages/Settings.vue\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1___default.a);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1___default.a({\n  mode: 'history',\n  routes: [{\n    path: '/',\n    component: _pages_Dashboard_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: '/settings',\n    component: _pages_Settings_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }]\n}));\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/router.js?");

/***/ }),

/***/ "./src/vuex/modules/leadIntelligenceChild/actions.leadIntelligenceChild.js":
/*!*********************************************************************************!*\
  !*** ./src/vuex/modules/leadIntelligenceChild/actions.leadIntelligenceChild.js ***!
  \*********************************************************************************/
/*! exports provided: setTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setTest\", function() { return setTest; });\n/* harmony import */ var _mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mutation-types */ \"./src/vuex/mutation-types.js\");\n\nvar setTest = function setTest(_ref, value) {\n  var dispatch = _ref.dispatch;\n  dispatch(_mutation_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_TEST\"], value);\n};\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/vuex/modules/leadIntelligenceChild/actions.leadIntelligenceChild.js?");

/***/ }),

/***/ "./src/vuex/modules/leadIntelligenceChild/getters.leadIntelligenceChild.js":
/*!*********************************************************************************!*\
  !*** ./src/vuex/modules/leadIntelligenceChild/getters.leadIntelligenceChild.js ***!
  \*********************************************************************************/
/*! exports provided: getTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTest\", function() { return getTest; });\nvar getTest = function getTest(_ref) {\n  var leadIntelligenceChild = _ref.leadIntelligenceChild;\n  return leadIntelligenceChild.test;\n};\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/vuex/modules/leadIntelligenceChild/getters.leadIntelligenceChild.js?");

/***/ }),

/***/ "./src/vuex/modules/leadIntelligenceChild/leadIntelligenceChild.js":
/*!*************************************************************************!*\
  !*** ./src/vuex/modules/leadIntelligenceChild/leadIntelligenceChild.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mutation-types */ \"./src/vuex/mutation-types.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n// Vuex 1.x compatible module - only state and mutations\nvar state = {\n  test: ''\n};\nvar mutations = _defineProperty({}, _mutation_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_TEST\"], function (state, data) {\n  vue__WEBPACK_IMPORTED_MODULE_1___default.a.set(state, 'test', data);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state: state,\n  mutations: mutations\n});\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/vuex/modules/leadIntelligenceChild/leadIntelligenceChild.js?");

/***/ }),

/***/ "./src/vuex/mutation-types.js":
/*!************************************!*\
  !*** ./src/vuex/mutation-types.js ***!
  \************************************/
/*! exports provided: SET_TEST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_TEST\", function() { return SET_TEST; });\n/* ----Test---- */\nvar SET_TEST = 'SET_TEST';\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/vuex/mutation-types.js?");

/***/ }),

/***/ "./src/vuex/register-child-store.js":
/*!******************************************!*\
  !*** ./src/vuex/register-child-store.js ***!
  \******************************************/
/*! exports provided: registerChildStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerChildStore\", function() { return registerChildStore; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n\nfunction registerChildStore(store, moduleName, moduleDef) {\n  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n  if (!store) {\n    console.error('registerChildStore: store is required');\n    return false;\n  }\n  if (store.state && store.state[moduleName]) {\n    console.error(\"registerChildStore: \".concat(moduleName, \" already present on store.state\"));\n    return false;\n  }\n\n  // Prefer using the host store's VM $set so we use the same Vue instance\n  var hostVm = store._vm || store._wrappedGetters && store._wrappedGetters._vm || null;\n  var doSet = function doSet(target, key, val) {\n    if (hostVm && typeof hostVm.$set === 'function') {\n      hostVm.$set(target, key, val);\n    } else {\n      vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(target, key, val);\n    }\n  };\n  try {\n    doSet(store.state, moduleName, {});\n    var hostModuleState = store.state[moduleName];\n    var sourceState = moduleDef && moduleDef.state || {};\n    Object.keys(sourceState).forEach(function (k) {\n      doSet(hostModuleState, k, sourceState[k]);\n    });\n    if (moduleDef && moduleDef.mutations) {\n      var prefix = opts.namespaced ? \"\".concat(moduleName, \"/\") : '';\n      Object.keys(moduleDef.mutations).forEach(function (key) {\n        var fullKey = \"\".concat(prefix).concat(key);\n        store._mutations[fullKey] = store._mutations[fullKey] || [];\n        var wrapped = function wrappedMutationHandler() {\n          var realPayload;\n          if (arguments.length === 0) {\n            realPayload = undefined;\n          } else if (arguments.length === 1) {\n            var a0 = arguments[0];\n            if (a0 && _typeof(a0) === 'object' && Object.prototype.hasOwnProperty.call(a0, 'payload')) {\n              realPayload = a0.payload;\n            } else if (a0 === store || a0 === store.state || _typeof(a0) === 'object' && Object.keys(a0 || {}).length > 0 && Object.keys(store.state || {}).every(function (k) {\n              return k in a0;\n            })) {\n              realPayload = undefined;\n            } else {\n              realPayload = a0;\n            }\n          } else {\n            realPayload = arguments[1];\n          }\n          try {\n            moduleDef.mutations[key](hostModuleState, realPayload);\n          } catch (err) {\n            console.error(\"Error running mutation \".concat(fullKey, \":\"), err);\n          }\n        };\n        store._mutations[fullKey].push(wrapped);\n        console.log(\"\\u2705 registered mutation >>>>: \".concat(fullKey));\n      });\n    }\n    console.log(\"\\u2705 registerChildStore: \\\"\".concat(moduleName, \"\\\" registered. Host module keys:\"), Object.keys(store.state[moduleName]));\n    return true;\n  } catch (err) {\n    console.error('registerChildStore failed:', err);\n    return false;\n  }\n}\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/vuex/register-child-store.js?");

/***/ }),

/***/ "./src/vuex/store.js":
/*!***************************!*\
  !*** ./src/vuex/store.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_leadIntelligenceChild_leadIntelligenceChild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/leadIntelligenceChild/leadIntelligenceChild */ \"./src/vuex/modules/leadIntelligenceChild/leadIntelligenceChild.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1___default.a);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_1___default.a.Store({\n  modules: {\n    leadIntelligenceChild: _modules_leadIntelligenceChild_leadIntelligenceChild__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }\n}));\n\n//# sourceURL=webpack://LeadIntelligenceModule/./src/vuex/store.js?");

/***/ }),

/***/ "vue":
/*!******************************************************************************!*\
  !*** external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;\n\n//# sourceURL=webpack://LeadIntelligenceModule/external_%7B%22root%22:%22Vue%22,%22commonjs%22:%22vue%22,%22commonjs2%22:%22vue%22,%22amd%22:%22vue%22%7D?");

/***/ }),

/***/ "vue-router":
/*!*********************************************************************************************************!*\
  !*** external {"root":"VueRouter","commonjs":"vue-router","commonjs2":"vue-router","amd":"vue-router"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_vue_router__;\n\n//# sourceURL=webpack://LeadIntelligenceModule/external_%7B%22root%22:%22VueRouter%22,%22commonjs%22:%22vue-router%22,%22commonjs2%22:%22vue-router%22,%22amd%22:%22vue-router%22%7D?");

/***/ })

/******/ });
});