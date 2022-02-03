"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/projectItem.js":
/*!***********************************!*\
  !*** ./components/projectItem.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar ProjectItem = function(param) {\n    var id = param.id, name = param.name, description = param.description;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        w: \"100%\",\n        p: 4,\n        mt: 16,\n        transition: \".5s\",\n        role: \"group\",\n        _hover: {\n            borderColor: \"green.500\"\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\dylan\\\\Documents\\\\GitHub\\\\dylanleon-homepage\\\\components\\\\projectItem.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                as: \"h3\",\n                size: \"m\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\dylan\\\\Documents\\\\GitHub\\\\dylanleon-homepage\\\\components\\\\projectItem.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    \"0\",\n                    id.toString(),\n                    \" / \",\n                    name.toUpperCase()\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                mt: 6,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\dylan\\\\Documents\\\\GitHub\\\\dylanleon-homepage\\\\components\\\\projectItem.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: description\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/projects/[id]\",\n                passHref: true,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\dylan\\\\Documents\\\\GitHub\\\\dylanleon-homepage\\\\components\\\\projectItem.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    mt: 8,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\dylan\\\\Documents\\\\GitHub\\\\dylanleon-homepage\\\\components\\\\projectItem.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Home\"\n                })\n            })\n        ]\n    }));\n};\n_c = ProjectItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItem);\nvar _c;\n$RefreshReg$(_c, \"ProjectItem\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJEO0FBRTNCOztBQUVoQyxHQUFLLENBQUNLLFdBQVcsR0FBRyxRQUFRLFFBQXVCLENBQUM7UUFBN0JDLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsV0FBVyxTQUFYQSxXQUFXO0lBQzFDLE1BQU0sdUVBQ0hSLGlEQUFHO1FBQ0ZTLENBQUMsRUFBQyxDQUFNO1FBQ1JDLENBQUMsRUFBRSxDQUFDO1FBQ0pDLEVBQUUsRUFBRSxFQUFFO1FBQ05DLFVBQVUsRUFBQyxDQUFLO1FBQ2hCQyxJQUFJLEVBQUMsQ0FBTztRQUNaQyxNQUFNLEVBQUUsQ0FBQztZQUNQQyxXQUFXLEVBQUUsQ0FBVztRQUMxQixDQUFDOzs7Ozs7OztrRkFFQWQscURBQU87Z0JBQUNlLEVBQUUsRUFBQyxDQUFJO2dCQUFDQyxJQUFJLEVBQUMsQ0FBRzs7Ozs7Ozs7b0JBQUMsQ0FDdkI7b0JBQUNYLEVBQUUsQ0FBQ1ksUUFBUTtvQkFBRyxDQUFHO29CQUFDWCxJQUFJLENBQUNZLFdBQVc7OztpRkFFckNoQixrREFBSTtnQkFBQ1EsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7MEJBQUdILFdBQVc7O2lGQUN4Qkosa0RBQVE7Z0JBQUNnQixJQUFJLEVBQUMsQ0FBZ0I7Z0JBQUNDLFFBQVE7Ozs7Ozs7K0ZBQ3JDbkIsa0RBQUk7b0JBQUNTLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OzhCQUFFLENBQUk7Ozs7O0FBSXpCLENBQUM7S0FyQktOLFdBQVc7QUF1QmpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdEl0ZW0uanM/ZTVmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEhlYWRpbmcsIExpbmssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5jb25zdCBQcm9qZWN0SXRlbSA9ICh7IGlkLCBuYW1lLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBwPXs0fVxyXG4gICAgICBtdD17MTZ9XHJcbiAgICAgIHRyYW5zaXRpb249XCIuNXNcIlxyXG4gICAgICByb2xlPVwiZ3JvdXBcIlxyXG4gICAgICBfaG92ZXI9e3tcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJncmVlbi41MDBcIlxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgzXCIgc2l6ZT1cIm1cIj5cclxuICAgICAgICAwe2lkLnRvU3RyaW5nKCl9IC8ge25hbWUudG9VcHBlckNhc2UoKX1cclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8VGV4dCBtdD17Nn0+e2Rlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcHJvamVjdHMvW2lkXVwiIHBhc3NIcmVmPlxyXG4gICAgICAgIDxMaW5rIG10PXs4fT5Ib21lPC9MaW5rPlxyXG4gICAgICA8L05leHRMaW5rPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0SXRlbVxyXG4iXSwibmFtZXMiOlsiQm94IiwiSGVhZGluZyIsIkxpbmsiLCJUZXh0IiwiTmV4dExpbmsiLCJQcm9qZWN0SXRlbSIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidyIsInAiLCJtdCIsInRyYW5zaXRpb24iLCJyb2xlIiwiX2hvdmVyIiwiYm9yZGVyQ29sb3IiLCJhcyIsInNpemUiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiaHJlZiIsInBhc3NIcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projectItem.js\n");

/***/ })

});