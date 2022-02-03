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

/***/ "./components/pages/projects.js":
/*!**************************************!*\
  !*** ./components/pages/projects.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projectItem */ \"./components/projectItem.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar Projects = function() {\n    var _this1 = _this;\n    var projects = [\n        {\n            id: 1,\n            name: \"Food Truck Web Application\",\n            description: \"A food truck application that allows users to create and manage their own food trucks.\"\n        },\n        {\n            id: 2,\n            name: \"Contacts Application for Android\",\n            description: \"A contacts application that allows users to create and manage their network.\"\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n        spacing: 8,\n        w: \"100%\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\dylan\\\\Documents\\\\GitHub\\\\dylanleon-homepage\\\\components\\\\pages\\\\projects.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: projects.map(function(project) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_projectItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({\n            }, project, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\dylan\\\\Documents\\\\GitHub\\\\dylanleon-homepage\\\\components\\\\pages\\\\projects.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                },\n                __self: _this1\n            }), project.id);\n        })\n    }));\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VzL3Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxHQUFLLENBQUNFLFFBQVEsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDdEIsR0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBQztRQUNoQixDQUFDO1lBQ0NDLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxDQUE0QjtZQUNsQ0MsV0FBVyxFQUNULENBQXdGO1FBQzVGLENBQUM7UUFDRCxDQUFDO1lBQ0NGLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLElBQUksRUFBRSxDQUFrQztZQUN4Q0MsV0FBVyxFQUNULENBQThFO1FBQ2xGLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxzRUFDSEwsbURBQUs7UUFBQ00sT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFDLENBQU07Ozs7Ozs7a0JBQ3hCTCxRQUFRLENBQUNNLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxPQUFPOzBCQUNuQixNQUFNLHdEQUFMVixvREFBVztlQUFzQlUsT0FBTzs7Ozs7OztnQkFBdkJBLE9BQU8sQ0FBQ04sRUFBRTs7O0FBSXBDLENBQUM7S0F0QktGLFFBQVE7QUF3QmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9wcm9qZWN0cy5qcz8xMDMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0SXRlbSBmcm9tIFwiLi4vcHJvamVjdEl0ZW1cIlxyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCJGb29kIFRydWNrIFdlYiBBcHBsaWNhdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkEgZm9vZCB0cnVjayBhcHBsaWNhdGlvbiB0aGF0IGFsbG93cyB1c2VycyB0byBjcmVhdGUgYW5kIG1hbmFnZSB0aGVpciBvd24gZm9vZCB0cnVja3MuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiBcIkNvbnRhY3RzIEFwcGxpY2F0aW9uIGZvciBBbmRyb2lkXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQSBjb250YWN0cyBhcHBsaWNhdGlvbiB0aGF0IGFsbG93cyB1c2VycyB0byBjcmVhdGUgYW5kIG1hbmFnZSB0aGVpciBuZXR3b3JrLlwiXHJcbiAgICB9XHJcbiAgXVxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgc3BhY2luZz17OH0gdz1cIjEwMCVcIj5cclxuICAgICAge3Byb2plY3RzLm1hcChwcm9qZWN0ID0+IChcclxuICAgICAgICA8UHJvamVjdEl0ZW0ga2V5PXtwcm9qZWN0LmlkfSB7Li4ucHJvamVjdH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L1N0YWNrPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNcclxuIl0sIm5hbWVzIjpbIlByb2plY3RJdGVtIiwiU3RhY2siLCJQcm9qZWN0cyIsInByb2plY3RzIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzcGFjaW5nIiwidyIsIm1hcCIsInByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pages/projects.js\n");

/***/ })

});