/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cookie&family=Lato:wght@400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-family: 'Lato', sans-serif;\\n}\\n\\nh2 {\\n  font-size: 3rem;\\n}\\n\\nh3 {\\n  font-size: 2.5rem;\\n}\\n\\n.main-navbar__container {\\n  display: flex;\\n  gap: 2vw;\\n}\\n\\n.main-navbar__menu {\\n  display: flex;\\n  gap: 5vw;\\n}\\n\\n.main-navbar {\\n  display: flex;\\n  padding: 10px;\\n  background-color: black;\\n}\\n\\n.main-navbar__menu__item {\\n  list-style: none;\\n  margin-left: 15px;\\n  background-color: white;\\n  padding: 12px;\\n  border-radius: 24px;\\n}\\n\\n.meals-container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 85%;\\n  max-width: 1024px;\\n  margin: 0 auto;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 1.5rem;\\n}\\n\\n.meal-card {\\n  display: flex;\\n  margin: 10px;\\n  width: 250px;\\n  height: 300px;\\n  background-repeat: no-repeat;\\n  background-position: center center;\\n  background-size: 100% 100%;\\n  justify-content: flex-end;\\n  border-radius: 17px;\\n  flex-direction: column;\\n  cursor: pointer;\\n}\\n\\n.meal-title {\\n  display: block;\\n  color: rgb(247, 246, 246);\\n  margin: 0 0 30px 12px;\\n  font-size: 2.5rem;\\n  font-weight: 900;\\n  text-shadow: 4px 3px 3px #000;\\n}\\n\\n.reactions {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  border-radius: 0 0 17px 17px;\\n  padding: 5px 5px;\\n  background-color: #ab838374;\\n}\\n\\n.heart-background {\\n  fill: white;\\n}\\n\\n.heart-icon {\\n  width: 30px;\\n  transition: all 0.2s;\\n}\\n\\n.heart-icon:active {\\n  transform: scale(1.2);\\n}\\n\\n.likes-number {\\n  color: #fff;\\n  font-size: 1.8rem;\\n  font-weight: 900;\\n  text-shadow: 1px 1px #000;\\n}\\n\\n.commentBtn {\\n  /* background: rgba(255, 255, 255, 0.334); */\\n  background: none;\\n  border-radius: 8px;\\n\\n  /* border: 4px solid rgb(255, 255, 255); */\\n  border: none;\\n  color: rgb(255, 255, 255);\\n  cursor: pointer;\\n  font-size: 1.8rem;\\n  font-weight: bold;\\n  padding: 5px 10px;\\n  transition: all 0.3s ease-in;\\n  text-shadow: 1px 1px #000;\\n}\\n\\n.commentBtn:hover {\\n  background-color: #fff;\\n  color: rgb(46, 46, 46);\\n}\\n\\n.footer {\\n  background-color: black;\\n  color: #f3f3f3;\\n  bottom: 0;\\n  padding: 1rem 3rem;\\n  width: 100%;\\n}\\n\\n/* popup */\\n\\n.popup {\\n  display: none;\\n  box-shadow: 5px 2px 13px 6px grey;\\n  background-color: #fff;\\n  width: 70%;\\n  height: 80%;\\n  position: fixed;\\n  transform: translate(-50%, -50%);\\n  left: 50%;\\n  top: 50%;\\n  border-radius: 17px;\\n  text-align: center;\\n  overflow: scroll;\\n  z-index: 29;\\n  padding: 2rem;\\n}\\n\\n.img-container {\\n  width: 100%;\\n  height: 55%;\\n}\\n\\n.meal-img {\\n  width: 90%;\\n  height: 100%;\\n  border-radius: 17px 17px 0 0;\\n}\\n\\n.closeBtn {\\n  position: absolute;\\n  right: 8px;\\n  top: 8px;\\n  display: block;\\n  font-size: 35px;\\n  font-weight: bold;\\n  color: #000;\\n  border-radius: 100%;\\n  width: 40px;\\n  height: 40px;\\n  border: none;\\n  outline: none;\\n  cursor: pointer;\\n  z-index: 1;\\n  background: #fff;\\n  transition: all 0.4s ease-in;\\n}\\n\\n.closeBtn:hover {\\n  background: #dae6e3;\\n  color: red;\\n  transform: rotate(180deg);\\n}\\n\\n.popup-meal-recipe {\\n  font-size: 1.4rem;\\n  text-align: justify;\\n  margin: 20px 0;\\n  line-height: 25px;\\n}\\n\\n.ingredients {\\n  display: flex;\\n  list-style: none;\\n  font-size: 1.8rem;\\n  flex-direction: column;\\n}\\n\\n.video-link {\\n  display: block;\\n  width: 150px;\\n  position: relative;\\n  margin: 10px auto;\\n  text-align: center;\\n  background-color: #3ebd71;\\n  border-radius: 20px;\\n  color: #fff;\\n  text-decoration: none;\\n  padding: 8px 0;\\n}\\n\\n.info {\\n  padding: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n\\nform {\\n  width: 70%;\\n  display: flex;\\n  flex-direction: column;\\n  grid-template-rows: auto;\\n  gap: 20px;\\n  justify-items: center;\\n  margin: 0 auto;\\n  padding: 15px 0;\\n}\\n\\ninput,\\ntextarea {\\n  width: 100%;\\n  padding: 10px;\\n  font-size: 1.2em;\\n  border: 4px solid #3ebd71;\\n  border-radius: 8px;\\n}\\n\\n.filter {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  opacity: 0.8;\\n  filter: blur(20px);\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #b8ccc6;\\n}\\n\\n.allComments {\\n  display: flex;\\n  list-style: none;\\n  font-size: 1.8rem;\\n  flex-direction: column;\\n}\\n\\n.show {\\n  display: block;\\n}\\n\\n.red {\\n  fill: red;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Meals-Website/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Meals-Website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Meals-Website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Meals-Website/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Meals-Website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Meals-Website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Meals-Website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Meals-Website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Meals-Website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Meals-Website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayMeals.js */ \"./src/modules/displayMeals.js\");\n\n\n\nconst mealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=c';\nconst involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CUZJYbcXhLNNl7JTkeKF/likes';\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealUrl, involvementUrl);\n});\n\n//# sourceURL=webpack://Meals-Website/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Url\": () => (/* binding */ Url),\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"displayComments\": () => (/* binding */ displayComments),\n/* harmony export */   \"getcomments\": () => (/* binding */ getcomments),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments),\n/* harmony export */   \"retriveComments\": () => (/* binding */ retriveComments)\n/* harmony export */ });\nconst Url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CUZJYbcXhLNNl7JTkeKF/comments';\n\nconst displayComments = (data) => {\n  const commentHolder = document.querySelector('.allComments');\n  const commentNumber = document.querySelector('.none');\n  commentHolder.innerHTML = '';\n  data.forEach((element) => {\n    const li = document.createElement('li');\n    li.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;\n    commentNumber.textContent = `comments (${data.length})`;\n    commentHolder.appendChild(li);\n  });\n  commentCounter(commentHolder);\n};\n\nconst commentCounter = (commentHolder) => {\n  const commentNumber = [...commentHolder.children].length;\n  return commentNumber.length;\n}\n\n\nconst retriveComments = async (itemId) => {\n  try {\n    const res = await fetch(`${Url}?item_id=${itemId}`);\n    const data = await res.json();\n    displayComments(data);\n    return data;\n  } catch (error) {\n    throw Error(error);\n  }\n};\n\nconst postComments = async (itemId, name, comment) => {\n  try {\n    await fetch(Url, {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n      body: JSON.stringify({\n        item_id: itemId,\n        username: name,\n        comment,\n      }),\n    });\n  } catch (error) {\n    throw Error(error);\n  }\n  retriveComments(itemId);\n};\n\nconst getcomments = (event, meals) => {\n  const inputName = document.querySelector('.name');\n  const inputComment = document.querySelector('.comment');\n  const submitBtn = document.querySelector('.submitBtn');\n  submitBtn.addEventListener('click', (ev) => {\n    ev.preventDefault();\n    postComments(meals[event.target.id].idMeal, inputName.value, inputComment.value);\n  });\n};\n\n//# sourceURL=webpack://Meals-Website/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/displayMeals.js":
/*!*************************************!*\
  !*** ./src/modules/displayMeals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchMeals.js */ \"./src/modules/fetchMeals.js\");\n/* harmony import */ var _renderMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMeals.js */ \"./src/modules/renderMeals.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\n\n\n\n\nconst displayMeals = async (mealUrl, url) => {\n  const mealData = await (0,_fetchMeals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mealUrl);\n  const likes = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.fetchLikes)(url);\n  (0,_renderMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealData, likes);\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.getLikesNumber)(url);\n  (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mealData, url);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeals);\n\n\n//# sourceURL=webpack://Meals-Website/./src/modules/displayMeals.js?");

/***/ }),

/***/ "./src/modules/fetchMeals.js":
/*!***********************************!*\
  !*** ./src/modules/fetchMeals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchMeals = async (url) => {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    throw Error(error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeals);\n\n//# sourceURL=webpack://Meals-Website/./src/modules/fetchMeals.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchLikes\": () => (/* binding */ fetchLikes),\n/* harmony export */   \"getLikesNumber\": () => (/* binding */ getLikesNumber)\n/* harmony export */ });\nconst fetchLikes = async (url) => {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    throw Error(error);\n  }\n};\n\nconst postLikes = async (url, likeBtn) => {\n  await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: likeBtn.id,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  await fetchLikes(url, likeBtn);\n};\n\nconst displaylikes = async (likeBtn) => {\n  if (likeBtn.nextSibling.textContent === '') { likeBtn.nextSibling.textContent = 0; }\n  likeBtn.nextSibling.textContent = parseInt(likeBtn.nextSibling.textContent, 10) + 1;\n};\n\nconst getLikesNumber = (url) => {\n  const likesNumber = document.querySelectorAll('.heart-background');\n  likesNumber.forEach((likeBtn) => {\n    likeBtn.addEventListener('click', () => {\n      postLikes(url, likeBtn);\n      displaylikes(likeBtn);\n    });\n  });\n};\n\n\n//# sourceURL=webpack://Meals-Website/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\n\nconst showAndHidePopup = (element, popup) => {\n  const closeBtn = document.querySelector('.closeBtn');\n  const filter = document.querySelector('.filter');\n  filter.classList.add('show');\n  popup.classList.add('show');\n  document.body.style.overflow = 'hidden';\n\n  closeBtn.addEventListener('click', () => {\n    filter.classList.remove('show');\n    popup.classList.remove('show');\n    document.body.style.overflow = 'visible';\n  });\n};\n\nconst buildPopup = (event, meals) => {\n  const popup = document.querySelector('.popup');\n  const mealitems = Object.entries(meals[event.target.id]);\n  const ingredients = mealitems.filter(\n    ([item, value]) => item.includes('strIngredient') && value.trim() !== '',\n  );\n\n  const measures = mealitems.filter(\n    ([item, value]) => item.includes('strMeasure') && value.trim() !== '',\n  );\n\n  let recipe = '';\n  for (let i = 0; i < ingredients.length; i += 1) {\n    recipe += `<li>${ingredients[i][1]}: ( ${measures[i][1]} )</li>`;\n  }\n\n  const {\n    idMeal, strMeal, strMealThumb, strInstructions,\n  } = meals[event.target.id];\n  popup.setAttribute = ('id', meals[event.target.id]);\n  popup.setAttribute = ('data-id', idMeal);\n  popup.innerHTML = `\n  <button class=\"closeBtn\">&times;</button>\n  <div class=\"img-container\">\n  <img class=\"meal-img\" src=\"${strMealThumb}\">\n  </div>\n  <div class=\"info\">\n    <h2>${strMeal}</h2>\n    <p class=\"popup-meal-recipe\">${strInstructions}</p>\n    <h3><strong>Ingredients:</strong></h3>\n    <ul class = \"ingredients\">${recipe}</ul>\n\n    <a class=\"video-link\" href=\"https://www.youtube.com/watch?v=IO0issT0Rmc\"\n      >Youtube Video</a\n    >\n    <h3 class=\"none\">Comments (0)</h3>\n    <ul class=\"allComments none\"></ul>\n    <h3 class=\"formHeader none\">Add a comment</h3>\n    <form id=\"form\">\n      <input\n        type=\"text\"\n        name=\"name\"\n        class=\"name\"\n        placeholder=\"Your name:\"\n        required\n      />\n      <textarea\n        name=\"comment\"\n        class=\"comment\"\n        rows=\"5\"\n        placeholder=\"Your comment:\"\n        required\n      ></textarea>\n      <button class=\"submitBtn\" type=\"submit\" id=\"submit\">Add Comment</button>\n    </form>\n  </div>\n  `;\n  showAndHidePopup(event, popup);\n  (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.getcomments)(event, meals);\n};\n\nconst selectCard = ({ meals }) => {\n  const mealCard = document.querySelectorAll('.meal-card');\n  mealCard.forEach((card) => {\n    card.addEventListener('click', (event) => {\n      if (\n        event.target.tagName === 'path'\n        || event.target.classList.contains('likes-number')\n      ) return;\n      buildPopup(event, meals);\n      const buildComments = async () => {\n        const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.retriveComments)(`${meals[event.target.id].idMeal}`);\n        return comments;\n      };\n      buildComments();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectCard);\n\n\n//# sourceURL=webpack://Meals-Website/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/renderMeals.js":
/*!************************************!*\
  !*** ./src/modules/renderMeals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealsContainer = document.querySelector('.meals-container');\nconst renderMeals = ({ meals }, liked) => {\n  if (!meals) {\n    const titeMessage = document.createElement('h2');\n    titeMessage.className = 'result-message';\n    titeMessage.textContent = 'error message change it later';\n    mealsContainer.innerHTML = null;\n  }\n  meals.forEach((meal, index) => {\n    const { idMeal, strMeal, strMealThumb } = meal;\n    const mealCard = document.createElement('div');\n    mealCard.className = 'meal-card';\n    mealCard.id = index;\n    mealCard.setAttribute('data-id', idMeal);\n    mealCard.style.backgroundImage = `url(${strMealThumb})`;\n    const mealTitle = document.createElement('p');\n    mealTitle.className = 'meal-title';\n    mealTitle.textContent = strMeal;\n    const reactions = document.createElement('div');\n    reactions.className = 'reactions';\n    const commentBtn = document.createElement('button');\n    commentBtn.className = 'commentBtn';\n    commentBtn.id = index;\n    commentBtn.textContent = 'Comments';\n    const heartIcon = document.createElement('span');\n    heartIcon.className = 'heart-background';\n    heartIcon.id = idMeal;\n    heartIcon.innerHTML = '<svg class=\"heart-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z\"/></svg>';\n    const likesNumber = document.createElement('p');\n    likesNumber.className = 'likes-number';\n    for (let i = 0; i < liked.length; i += 1) {\n      if (idMeal === liked[i].item_id) {\n        likesNumber.textContent = `${liked[i].likes}`;\n      }\n    }\n    reactions.appendChild(heartIcon);\n    reactions.appendChild(likesNumber);\n    reactions.appendChild(commentBtn);\n    mealCard.appendChild(mealTitle);\n    mealCard.appendChild(reactions);\n    mealsContainer.appendChild(mealCard);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMeals);\n\n//# sourceURL=webpack://Meals-Website/./src/modules/renderMeals.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;