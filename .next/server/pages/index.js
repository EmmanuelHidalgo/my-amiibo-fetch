module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/amiibolist.js":
/*!**********************************!*\
  !*** ./components/amiibolist.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_amiiboContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/amiiboContext */ \"./context/amiiboContext.js\");\n\n\nvar _jsxFileName = \"/Users/emmanuel.hidalgo/Desktop/courses/my-amiibo-fetch/components/amiibolist.js\";\n\n\n\nconst AmiiboList = () => {\n  const {\n    amiiboData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_amiiboContext__WEBPACK_IMPORTED_MODULE_2__[\"AmiiboContext\"]);\n  console.log(amiiboData);\n\n  if (amiiboData.length === 0) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No amiibos to show\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: amiiboData.amiibo && amiiboData.amiibo.map((currentAmiibo, key) => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: currentAmiibo.image\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 17\n          }, undefined)\n        }, key, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 15\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AmiiboList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FtaWlib2xpc3QuanM/YjQ5MiJdLCJuYW1lcyI6WyJBbWlpYm9MaXN0IiwiYW1paWJvRGF0YSIsInVzZUNvbnRleHQiLCJBbWlpYm9Db250ZXh0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImFtaWlibyIsIm1hcCIsImN1cnJlbnRBbWlpYm8iLCJrZXkiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUVDO0FBQUYsTUFBaUJDLHdEQUFVLENBQUNDLG9FQUFELENBQWpDO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaOztBQUVBLE1BQUlBLFVBQVUsQ0FBQ0ssTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUMzQix3QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUdEOztBQUNELHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSxnQkFDR0wsVUFBVSxDQUFDTSxNQUFYLElBQXFCTixVQUFVLENBQUNNLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCLENBQUNDLGFBQUQsRUFBZ0JDLEdBQWhCLEtBQXdCO0FBQ2hFLDRCQUNFO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUVELGFBQWEsQ0FBQ0U7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVNELEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUtILE9BTnFCO0FBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWFELENBdEJEOztBQXdCZ0JWLHlFQUFoQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYW1paWJvbGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFtaWlib0NvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hbWlpYm9Db250ZXh0XCI7XG5cbmNvbnN0IEFtaWlib0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYW1paWJvRGF0YSB9ID0gdXNlQ29udGV4dChBbWlpYm9Db250ZXh0KVxuICBjb25zb2xlLmxvZyhhbWlpYm9EYXRhKVxuXG4gIGlmIChhbWlpYm9EYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8cD5ObyBhbWlpYm9zIHRvIHNob3c8L3A+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bD5cbiAgICAgICAge2FtaWlib0RhdGEuYW1paWJvICYmIGFtaWlib0RhdGEuYW1paWJvLm1hcCgoY3VycmVudEFtaWlibywga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50QW1paWJvLmltYWdlfS8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgIEFtaWlib0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/amiibolist.js\n");

/***/ }),

/***/ "./components/searchbar.js":
/*!*********************************!*\
  !*** ./components/searchbar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_amiiboContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/amiiboContext */ \"./context/amiiboContext.js\");\n/* harmony import */ var _pages_api_fetchAmiiboData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/api/fetchAmiiboData */ \"./pages/api/fetchAmiiboData.js\");\n\n\nvar _jsxFileName = \"/Users/emmanuel.hidalgo/Desktop/courses/my-amiibo-fetch/components/searchbar.js\";\n\n\n\n\nconst SearchBar = () => {\n  const {\n    0: term,\n    1: setTerm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    setAmiiboData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_amiiboContext__WEBPACK_IMPORTED_MODULE_2__[\"AmiiboContext\"]);\n\n  const onChangeText = e => {\n    setTerm(e.target.value);\n  };\n\n  const onSearch = async () => {\n    const amiiboData = await Object(_pages_api_fetchAmiiboData__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(term);\n    setAmiiboData(amiiboData);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      value: term,\n      onChange: onChangeText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: onSearch,\n      children: \"Search\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlYXJjaGJhci5qcz8xOTQ4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInRlcm0iLCJzZXRUZXJtIiwidXNlU3RhdGUiLCJzZXRBbWlpYm9EYXRhIiwidXNlQ29udGV4dCIsIkFtaWlib0NvbnRleHQiLCJvbkNoYW5nZVRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblNlYXJjaCIsImFtaWlib0RhdGEiLCJmZXRjaEFtaWlib0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsUUFBTTtBQUFBLE9BQUVDLElBQUY7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBb0JDLHdEQUFVLENBQUVDLG9FQUFGLENBQXBDOztBQUVBLFFBQU1DLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBQzFCTixXQUFPLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDRCxHQUZEOztBQUlBLFFBQU1DLFFBQVEsR0FBSSxZQUFZO0FBQzVCLFVBQU1DLFVBQVUsR0FBRyxNQUFNQywwRUFBZSxDQUFDWixJQUFELENBQXhDO0FBQ0FHLGlCQUFhLENBQUNRLFVBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBQSw0QkFDQTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFdBQUssRUFBRVgsSUFBMUI7QUFBZ0MsY0FBUSxFQUFFTTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUE7QUFBUSxhQUFPLEVBQUVJLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZBO0FBQUEsa0JBREY7QUFNRCxDQW5CRDs7QUFxQmVYLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zZWFyY2hiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW1paWJvQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2FtaWlib0NvbnRleHRcIjtcbmltcG9ydCBmZXRjaEFtaWlib0RhdGEgZnJvbSBcIi4uL3BhZ2VzL2FwaS9mZXRjaEFtaWlib0RhdGFcIjtcblxuY29uc3QgU2VhcmNoQmFyID0gKCkgPT4ge1xuICBjb25zdCBbIHRlcm0sIHNldFRlcm0gXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgeyBzZXRBbWlpYm9EYXRhIH0gPSB1c2VDb250ZXh0KCBBbWlpYm9Db250ZXh0ICk7XG5cbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gKGUpID0+IHtcbiAgICBzZXRUZXJtKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IG9uU2VhcmNoID0gIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhbWlpYm9EYXRhID0gYXdhaXQgZmV0Y2hBbWlpYm9EYXRhKHRlcm0pO1xuICAgIHNldEFtaWlib0RhdGEoYW1paWJvRGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Rlcm19IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9Lz5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU2VhcmNofT5TZWFyY2g8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/searchbar.js\n");

/***/ }),

/***/ "./context/amiiboContext.js":
/*!**********************************!*\
  !*** ./context/amiiboContext.js ***!
  \**********************************/
/*! exports provided: AmiiboContext, AmiiboProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AmiiboContext\", function() { return AmiiboContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AmiiboProvider\", function() { return AmiiboProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/emmanuel.hidalgo/Desktop/courses/my-amiibo-fetch/context/amiiboContext.js\";\n\nconst AmiiboContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst AmiiboProvider = ({\n  children\n}) => {\n  const {\n    0: amiiboData,\n    1: setAmiiboData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AmiiboContext.Provider, {\n    value: {\n      amiiboData,\n      setAmiiboData\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2FtaWlib0NvbnRleHQuanM/YmJhMSJdLCJuYW1lcyI6WyJBbWlpYm9Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFtaWlib1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJhbWlpYm9EYXRhIiwic2V0QW1paWJvRGF0YSIsInVzZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLEVBQW5DO0FBRUEsTUFBTUMsY0FBYyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBRTVDLFFBQU07QUFBQSxPQUFFQyxVQUFGO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBRUEsc0JBQ0UscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUVGLGdCQUFGO0FBQWNDO0FBQWQsS0FBL0I7QUFBQSxjQUNNRjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBVE0iLCJmaWxlIjoiLi9jb250ZXh0L2FtaWlib0NvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQW1paWJvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEFtaWlib1Byb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcblxuICBjb25zdCBbIGFtaWlib0RhdGEsIHNldEFtaWlib0RhdGEgXSA9IHVzZVN0YXRlKFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBbWlpYm9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFtaWlib0RhdGEsIHNldEFtaWlib0RhdGEgfX0+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvIEFtaWlib0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/amiiboContext.js\n");

/***/ }),

/***/ "./pages/api/fetchAmiiboData.js":
/*!**************************************!*\
  !*** ./pages/api/fetchAmiiboData.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fetchAmiiboData = async term => {\n  const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?character=${term}`);\n  const data = await res.json();\n  return data;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchAmiiboData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZmV0Y2hBbWlpYm9EYXRhLmpzPzI2MTkiXSwibmFtZXMiOlsiZmV0Y2hBbWlpYm9EYXRhIiwidGVybSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsZUFBZSxHQUFJLE1BQU9DLElBQVAsSUFBZ0I7QUFDdkMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxtREFBa0RGLElBQUssRUFBekQsQ0FBdkI7QUFDQSxRQUFNRyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBRUEsU0FBT0QsSUFBUDtBQUNELENBTEQ7O0FBT2VKLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2ZldGNoQW1paWJvRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoQW1paWJvRGF0YSA9ICBhc3luYyAodGVybSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuYW1paWJvYXBpLmNvbS9hcGkvYW1paWJvLz9jaGFyYWN0ZXI9JHt0ZXJtfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hBbWlpYm9EYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/fetchAmiiboData.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/searchbar */ \"./components/searchbar.js\");\n/* harmony import */ var _components_amiibolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/amiibolist */ \"./components/amiibolist.js\");\n/* harmony import */ var _context_amiiboContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/amiiboContext */ \"./context/amiiboContext.js\");\n\nvar _jsxFileName = \"/Users/emmanuel.hidalgo/Desktop/courses/my-amiibo-fetch/pages/index.js\";\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_amiiboContext__WEBPACK_IMPORTED_MODULE_3__[\"AmiiboProvider\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_searchbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_amiibolist__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxxRUFBRDtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaGJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcic7XG5pbXBvcnQgQW1paWJvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FtaWlib2xpc3QnO1xuaW1wb3J0IHsgQW1paWJvUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L2FtaWlib0NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QW1paWJvUHJvdmlkZXI+XG4gICAgICAgIDxTZWFyY2hiYXIgLz5cbiAgICAgICAgPEFtaWlib0xpc3QgLz5cbiAgICAgIDwvQW1paWJvUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });