"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpeople_mf"] = self["webpackChunkpeople_mf"] || []).push([["src_bootstrap_tsx"],{

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\nif (true) {\n  exports.createRoot = m.createRoot;\n  exports.hydrateRoot = m.hydrateRoot;\n} else { var i; }\n\n\n//# sourceURL=webpack://people_mf/./node_modules/react-dom/client.js?");

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main */ \"./src/components/Main.tsx\");\n\n\n\n// Clear the existing HTML content\n//document.body.innerHTML = '<div id=\"app\"></div>';\n// Render your React component instead\nconsole.log('people loaded');\nvar root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById(\"app\"));\nroot.render(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Main__WEBPACK_IMPORTED_MODULE_2__.Main, null));\n\n\n//# sourceURL=webpack://people_mf/./src/bootstrap.tsx?");

/***/ }),

/***/ "./src/components/Loaders.tsx":
/*!************************************!*\
  !*** ./src/components/Loaders.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n\n\nvar Loader = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { style: { display: \"flex\", justifyContent: \"center\" } },\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { color: 'secondary' }))); };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n\n\n//# sourceURL=webpack://people_mf/./src/components/Loaders.tsx?");

/***/ }),

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/ThemeProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _People_People__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./People/People */ \"./src/components/People/People.tsx\");\n/* harmony import */ var _Loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loaders */ \"./src/components/Loaders.tsx\");\n\n\n\n\nvar Main = function () {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), theme = _a[0], setTheme = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        __webpack_require__.e(/*! import() */ \"webpack_container_remote_Sharedlib_theme\").then(__webpack_require__.t.bind(__webpack_require__, /*! Sharedlib/theme */ \"webpack/container/remote/Sharedlib/theme\", 23)).then(function (sharedTheme) {\n            setTheme(sharedTheme.default);\n        }).catch(function (error) {\n            console.log('Error loading shared theme', error);\n        });\n    }, []);\n    if (!theme) {\n        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Loaders__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { theme: theme },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_People_People__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n};\n\n\n//# sourceURL=webpack://people_mf/./src/components/Main.tsx?");

/***/ })

}]);