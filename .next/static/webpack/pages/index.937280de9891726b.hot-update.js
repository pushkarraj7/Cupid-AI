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

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./components/card.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Main = ()=>{\n    _s();\n    const [wordInput, setWordInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"I'm no fortune teller, but I can predict one thing - I'm about to surprise you with something special.    \");\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    word: wordInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(data.result);\n            setWordInput(\"\");\n            console.log(result);\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n        }\n    }\n    async function onSurpriseMe() {\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    word: \"surprise\"\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(data.result);\n            setWordInput(\"\");\n            console.log(result);\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-8 lg:mt-16 lg:mb-16 px-4 lg:px-32 wrapper grid h-full lg:w-full flex-1 gap-16 lg:py-4 lg:grid-cols-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    text: result\n                }, void 0, false, {\n                    fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-col justify-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-2\",\n                            onSubmit: onSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"keyword\",\n                                            className: \"sr-only\",\n                                            children: \"Keyword\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"keyword\",\n                                            id: \"keyword\",\n                                            className: \"block w-full rounded-2xl border-2 border-black/5 bg-black/5 p-4 focus:border-brand focus:ring-brand\",\n                                            placeholder: \"Enter a keyword (e.g. heart, hair, eyes, etc.)\",\n                                            required: true,\n                                            value: wordInput,\n                                            onChange: (e)=>setWordInput(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"btn text-white py-4 rounded-[20px] hover:bg-primaryDarker bg-primary w-full\",\n                                    children: \"Generate\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            className: \"border-t border-black\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                    className: \"mx-auto px-4 py-4 text-2xl\",\n                                    children: \"OR\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn text-white py-4 rounded-[20px] hover:bg-primaryDarker bg-primary w-full\",\n                                    onClick: onSurpriseMe,\n                                    children: \"Surprise me!\"\n                                }, void 0, false, {\n                                    fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                            fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/deependu/Cupid-AI/components/main.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Main, \"1D8S0HjHALK+DKLpRtpdH2s+Q30=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ087QUFDc0I7QUFDUjtBQUUvQyxNQUFNRyxPQUFPLElBQU07O0lBQ2pCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQ2xDO0lBR0YsZUFBZU8sU0FBU0MsS0FBdUMsRUFBRTtRQUMvREEsTUFBTUMsY0FBYztRQUNwQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlCQUFpQjtnQkFDNUNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxNQUFNZDtnQkFBVTtZQUN6QztZQUVBLE1BQU1lLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtZQUNoQyxJQUFJVCxTQUFTVSxNQUFNLEtBQUssS0FBSztnQkFDM0IsTUFDRUYsS0FBS0csS0FBSyxJQUNWLElBQUlDLE1BQU0sOEJBQThDLE9BQWhCWixTQUFTVSxNQUFNLEdBQ3ZEO1lBQ0osQ0FBQztZQUVEZCxVQUFVWSxLQUFLYixNQUFNO1lBQ3JCRCxhQUFhO1lBQ2JtQixRQUFRQyxHQUFHLENBQUNuQjtRQUNkLEVBQUUsT0FBT2dCLE9BQU87WUFDZCwyREFBMkQ7WUFDM0RFLFFBQVFGLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVBLGVBQWVJLGVBQWU7UUFDNUIsSUFBSTtZQUNGLE1BQU1mLFdBQVcsTUFBTUMsTUFBTSxpQkFBaUI7Z0JBQzVDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsTUFBTTtnQkFBVztZQUMxQztZQUVBLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtZQUNoQyxJQUFJVCxTQUFTVSxNQUFNLEtBQUssS0FBSztnQkFDM0IsTUFDRUYsS0FBS0csS0FBSyxJQUNWLElBQUlDLE1BQU0sOEJBQThDLE9BQWhCWixTQUFTVSxNQUFNLEdBQ3ZEO1lBQ0osQ0FBQztZQUVEZCxVQUFVWSxLQUFLYixNQUFNO1lBQ3JCRCxhQUFhO1lBQ2JtQixRQUFRQyxHQUFHLENBQUNuQjtRQUNkLEVBQUUsT0FBT2dCLE9BQU87WUFDZCwyREFBMkQ7WUFDM0RFLFFBQVFGLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDSztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQzVCLDZDQUFJQTtvQkFBQzZCLE1BQU12Qjs7Ozs7OzhCQUNaLDhEQUFDd0I7b0JBQVFGLFdBQVU7O3NDQUNqQiw4REFBQ0c7NEJBQUtILFdBQVU7NEJBQVlwQixVQUFVQTs7OENBQ3BDLDhEQUFDbUI7O3NEQUNDLDhEQUFDSzs0Q0FBTUMsU0FBUTs0Q0FBVUwsV0FBVTtzREFBVTs7Ozs7O3NEQUc3Qyw4REFBQ007NENBQ0NDLE1BQUs7NENBQ0xDLE1BQUs7NENBQ0xDLElBQUc7NENBQ0hULFdBQVU7NENBQ1ZVLGFBQVk7NENBQ1pDLFFBQVE7NENBQ1JDLE9BQU9wQzs0Q0FDUHFDLFVBQVUsQ0FBQ0MsSUFBTXJDLGFBQWFxQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FHaEQsOERBQUNJO29DQUNDVCxNQUFLO29DQUNMUCxXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUNpQjs0QkFBU2pCLFdBQVU7OzhDQUNsQiw4REFBQ2tCO29DQUFPbEIsV0FBVTs4Q0FBNkI7Ozs7Ozs4Q0FDL0MsOERBQUNnQjtvQ0FDQ2hCLFdBQVU7b0NBQ1ZtQixTQUFTckI7OENBQ1Y7Ozs7Ozs7Ozs7OztzQ0FJSCw4REFBQ3hCLDBEQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0dBdkdNQztLQUFBQTtBQXlHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW4udHN4PzVjZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbd29yZElucHV0LCBzZXRXb3JkSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcbiAgICBcIkknbSBubyBmb3J0dW5lIHRlbGxlciwgYnV0IEkgY2FuIHByZWRpY3Qgb25lIHRoaW5nIC0gSSdtIGFib3V0IHRvIHN1cnByaXNlIHlvdSB3aXRoIHNvbWV0aGluZyBzcGVjaWFsLiAgICBcIlxuICApO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHdvcmQ6IHdvcmRJbnB1dCB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IChcbiAgICAgICAgICBkYXRhLmVycm9yIHx8XG4gICAgICAgICAgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgICAgc2V0V29yZElucHV0KFwiXCIpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gQ29uc2lkZXIgaW1wbGVtZW50aW5nIHlvdXIgb3duIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGhlcmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VycHJpc2VNZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgd29yZDogXCJzdXJwcmlzZVwiIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgKFxuICAgICAgICAgIGRhdGEuZXJyb3IgfHxcbiAgICAgICAgICBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XG4gICAgICBzZXRXb3JkSW5wdXQoXCJcIik7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBDb25zaWRlciBpbXBsZW1lbnRpbmcgeW91ciBvd24gZXJyb3IgaGFuZGxpbmcgbG9naWMgaGVyZVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGxnOm10LTE2IGxnOm1iLTE2IHB4LTQgbGc6cHgtMzIgd3JhcHBlciBncmlkIGgtZnVsbCBsZzp3LWZ1bGwgZmxleC0xIGdhcC0xNiBsZzpweS00IGxnOmdyaWQtY29scy0yXCI+XG4gICAgICAgIDxDYXJkIHRleHQ9e3Jlc3VsdH0gLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImtleXdvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgICAgICAgICAgS2V5d29yZFxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImtleXdvcmRcIlxuICAgICAgICAgICAgICAgIGlkPVwia2V5d29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci1ibGFjay81IGJnLWJsYWNrLzUgcC00IGZvY3VzOmJvcmRlci1icmFuZCBmb2N1czpyaW5nLWJyYW5kXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEga2V5d29yZCAoZS5nLiBoZWFydCwgaGFpciwgZXllcywgZXRjLilcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgdmFsdWU9e3dvcmRJbnB1dH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFdvcmRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXdoaXRlIHB5LTQgcm91bmRlZC1bMjBweF0gaG92ZXI6YmctcHJpbWFyeURhcmtlciBiZy1wcmltYXJ5IHctZnVsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdlbmVyYXRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1ibGFja1wiPlxuICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJteC1hdXRvIHB4LTQgcHktNCB0ZXh0LTJ4bFwiPk9SPC9sZWdlbmQ+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0ZXh0LXdoaXRlIHB5LTQgcm91bmRlZC1bMjBweF0gaG92ZXI6YmctcHJpbWFyeURhcmtlciBiZy1wcmltYXJ5IHctZnVsbFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VycHJpc2VNZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VycHJpc2UgbWUhXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiQ2FyZCIsInVzZVN0YXRlIiwiVG9hc3RDb250YWluZXIiLCJNYWluIiwid29yZElucHV0Iiwic2V0V29yZElucHV0IiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIndvcmQiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJjb25zb2xlIiwibG9nIiwib25TdXJwcmlzZU1lIiwiZGl2IiwiY2xhc3NOYW1lIiwidGV4dCIsInNlY3Rpb24iLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwiZmllbGRzZXQiLCJsZWdlbmQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main.tsx\n"));

/***/ })

});