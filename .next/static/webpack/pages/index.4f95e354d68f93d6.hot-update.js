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

/***/ "./components/card.tsx":
/*!*****************************!*\
  !*** ./components/card.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Card = (param)=>{\n    let { text  } = param;\n    _s();\n    const [liked, setLiked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disliked, setDisliked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [feedbackMessage, setFeedbackMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleLike = ()=>{\n        setLiked(true);\n        setDisliked(false);\n        setFeedbackMessage(\"Feedback submitted. Thanks for liking!\");\n        alert(\"Feedback submitted. Thanks for liking!\");\n        setTimeout(()=>{\n            setFeedbackMessage(\"\");\n        }, 2000);\n    };\n    const handleDislike = ()=>{\n        setLiked(false);\n        setDisliked(true);\n        setFeedbackMessage(\"Feedback submitted. Thanks for disliking!\");\n        alert(\"Thanks for your Feedback!\");\n        setTimeout(()=>{\n            setFeedbackMessage(\"\");\n        }, 2000);\n    };\n    const handleCopy = ()=>{\n        navigator.clipboard.writeText(text);\n        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Copied to clipboard\", {\n            position: \"top-right\",\n            autoClose: 5000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined,\n            theme: \"light\"\n        });\n    };\n    const handleFacebookShare = ()=>{\n        window.open(\"https://www.facebook.com/sharer/sharer.php?u=\".concat(encodeURIComponent(window.location.href)), \"_blank\");\n    };\n    const handleTwitterShare = ()=>{\n        window.open(\"https://twitter.com/intent/tweet?text=\".concat(encodeURIComponent(text), \"&url=\").concat(encodeURIComponent(window.location.href)), \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex h-[25rem] min-h-full w-full items-center justify-center rounded-[20px] bg-primary px-8 py-6 text-white shadow-lg shadow-brand/50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex h-full w-full flex-col justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"my-auto text-white lg:text-2xl sm:text-sm  font-bold \",\n                    children: text\n                }, void 0, false, {\n                    fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-8 flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-tip\": \"Like\",\n                                    onClick: handleLike,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faThumbsUp,\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-tip\": \"Dislike\",\n                                    onClick: handleDislike,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faThumbsDown,\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-tip\": \"Copy\",\n                                    onClick: handleCopy,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCopy,\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-tip\": \"Share on Facebook\",\n                                    \"aria-label\": \"facebook\",\n                                    className: \"react-share__ShareButton\",\n                                    style: {\n                                        backgroundColor: \"transparent\",\n                                        border: \"none\",\n                                        padding: 0,\n                                        font: \"inherit\",\n                                        color: \"inherit\",\n                                        cursor: \"pointer\"\n                                    },\n                                    onClick: handleFacebookShare,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faFacebook,\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"data-tip\": \"Share on Twitter\",\n                                    \"aria-label\": \"twitter\",\n                                    className: \"react-share__ShareButton\",\n                                    style: {\n                                        backgroundColor: \"transparent\",\n                                        border: \"none\",\n                                        padding: 0,\n                                        font: \"inherit\",\n                                        color: \"inherit\",\n                                        cursor: \"pointer\"\n                                    },\n                                    onClick: handleTwitterShare,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faTwitter,\n                                        className: \"h-6 w-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                        lineNumber: 131,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/deependu/Cupid-AI/components/card.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Card, \"lwgdgjoN1WOHoCvedr7W6rvOmko=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dDQUNSQyxTQUFTO3dDQUNUQyxNQUFNO3dDQUNOQyxPQUFPO3dDQUNQQyxRQUFRO29DQUNWO29DQUNBVCxTQUFTUDs4Q0FFVCw0RUFBQ3ZDLDJFQUFlQTt3Q0FBQytDLE1BQU0xQyx5RUFBU0E7d0NBQUVvQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFEO0dBeEhNbEM7S0FBQUE7QUEwSE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLnRzeD81ZGIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQge1xuICBmYVRodW1ic1VwLFxuICBmYVRodW1ic0Rvd24sXG4gIGZhQ29weSxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFGYWNlYm9vaywgZmFUd2l0dGVyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcblxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcblxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuY29uc3QgQ2FyZDogUmVhY3QuRkM8Q2FyZFByb3BzPiA9ICh7IHRleHQgfSkgPT4ge1xuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2xpa2VkLCBzZXREaXNsaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmZWVkYmFja01lc3NhZ2UsIHNldEZlZWRiYWNrTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVMaWtlID0gKCkgPT4ge1xuICAgIHNldExpa2VkKHRydWUpO1xuICAgIHNldERpc2xpa2VkKGZhbHNlKTtcbiAgICBzZXRGZWVkYmFja01lc3NhZ2UoXCJGZWVkYmFjayBzdWJtaXR0ZWQuIFRoYW5rcyBmb3IgbGlraW5nIVwiKTtcbiAgICBhbGVydChcIkZlZWRiYWNrIHN1Ym1pdHRlZC4gVGhhbmtzIGZvciBsaWtpbmchXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0RmVlZGJhY2tNZXNzYWdlKFwiXCIpO1xuICAgIH0sIDIwMDApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURpc2xpa2UgPSAoKSA9PiB7XG4gICAgc2V0TGlrZWQoZmFsc2UpO1xuICAgIHNldERpc2xpa2VkKHRydWUpO1xuICAgIHNldEZlZWRiYWNrTWVzc2FnZShcIkZlZWRiYWNrIHN1Ym1pdHRlZC4gVGhhbmtzIGZvciBkaXNsaWtpbmchXCIpO1xuICAgIGFsZXJ0KFwiVGhhbmtzIGZvciB5b3VyIEZlZWRiYWNrIVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEZlZWRiYWNrTWVzc2FnZShcIlwiKTtcbiAgICB9LCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb3B5ID0gKCkgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuICAgIHRvYXN0LnN1Y2Nlc3MoXCJDb3BpZWQgdG8gY2xpcGJvYXJkXCIsIHtcbiAgICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLFxuICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXG4gICAgICB0aGVtZTogXCJsaWdodFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZhY2Vib29rU2hhcmUgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICApfWAsXG4gICAgICBcIl9ibGFua1wiXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUd2l0dGVyU2hhcmUgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgdGV4dFxuICAgICAgKX0mdXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKX1gLFxuICAgICAgXCJfYmxhbmtcIlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGgtWzI1cmVtXSBtaW4taC1mdWxsIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1bMjBweF0gYmctcHJpbWFyeSBweC04IHB5LTYgdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LWJyYW5kLzUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIHctZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktYXV0byB0ZXh0LXdoaXRlIGxnOnRleHQtMnhsIHNtOnRleHQtc20gIGZvbnQtYm9sZCBcIj57dGV4dH08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkYXRhLXRpcD1cIkxpa2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaWtlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGh1bWJzVXB9IGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGRhdGEtdGlwPVwiRGlzbGlrZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURpc2xpa2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaHVtYnNEb3dufSBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGRhdGEtdGlwPVwiQ29weVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvcHl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDb3B5fSBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkYXRhLXRpcD1cIlNoYXJlIG9uIEZhY2Vib29rXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImZhY2Vib29rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3Qtc2hhcmVfX1NoYXJlQnV0dG9uXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgZm9udDogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZhY2Vib29rU2hhcmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGYWNlYm9va30gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgZGF0YS10aXA9XCJTaGFyZSBvbiBUd2l0dGVyXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInR3aXR0ZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1zaGFyZV9fU2hhcmVCdXR0b25cIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBmb250OiBcImluaGVyaXRcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVHdpdHRlclNoYXJlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlcn0gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhVGh1bWJzVXAiLCJmYVRodW1ic0Rvd24iLCJmYUNvcHkiLCJmYUZhY2Vib29rIiwiZmFUd2l0dGVyIiwidG9hc3QiLCJDYXJkIiwidGV4dCIsImxpa2VkIiwic2V0TGlrZWQiLCJkaXNsaWtlZCIsInNldERpc2xpa2VkIiwiZmVlZGJhY2tNZXNzYWdlIiwic2V0RmVlZGJhY2tNZXNzYWdlIiwiaGFuZGxlTGlrZSIsImFsZXJ0Iiwic2V0VGltZW91dCIsImhhbmRsZURpc2xpa2UiLCJoYW5kbGVDb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJ0aGVtZSIsImhhbmRsZUZhY2Vib29rU2hhcmUiLCJ3aW5kb3ciLCJvcGVuIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9jYXRpb24iLCJocmVmIiwiaGFuZGxlVHdpdHRlclNoYXJlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJidXR0b24iLCJkYXRhLXRpcCIsIm9uQ2xpY2siLCJpY29uIiwiYXJpYS1sYWJlbCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsImZvbnQiLCJjb2xvciIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card.tsx\n"));

/***/ })

});