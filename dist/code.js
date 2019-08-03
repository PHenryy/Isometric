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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Isometric.ts":
/*!**************************!*\
  !*** ./src/Isometric.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Isometric; });
class Isometric {
    constructor(x, y, l, w, h) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.w = w;
        this.h = h;
    }
    generateLeftPlane() {
        const left = figma.createVector();
        const { x, y, l, w, h } = this;
        left.vectorPaths = [
            {
                windingRule: "EVENODD",
                data: `M ${x} ${y} L ${x - l} ${y - l * 0.5} L ${x - l} ${y -
                    h -
                    l * 0.5} L ${x} ${y - h * 1} Z`
            }
        ];
        left.fills = [{ type: "SOLID", color: { r: 0.36, g: 0.36, b: 0.36 } }];
        left.strokes = [];
        return left;
    }
    generateRightPlane() {
        const right = figma.createVector();
        const { x, y, l, w, h } = this;
        right.vectorPaths = [
            {
                windingRule: "EVENODD",
                data: `M ${x} ${y} L ${x + w} ${y - w * 0.5} L ${x + w} ${y -
                    h -
                    w * 0.5} L ${x} ${y - h * 1} Z`
            }
        ];
        right.fills = [{ type: "SOLID", color: { r: 0.52, g: 0.52, b: 0.52 } }];
        right.strokes = [];
        return right;
    }
    generateTopPlane() {
        const top = figma.createVector();
        const { x, y, l, w, h } = this;
        top.vectorPaths = [
            {
                windingRule: "EVENODD",
                data: `M ${x} ${y - h} L ${x - l} ${y - h - l * 0.5} L ${x -
                    l +
                    w} ${y - h - (l + w) * 0.5} L ${x + w} ${y - h - w * 0.5} Z`
            }
        ];
        top.fills = [{ type: "SOLID", color: { r: 0.63, g: 0.63, b: 0.63 } }];
        top.strokes = [];
        return top;
    }
    generatePlanes() {
        const left = this.generateLeftPlane();
        const right = this.generateRightPlane();
        const top = this.generateTopPlane();
        const nodes = [left, right, top];
        return nodes;
    }
}


/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Isometric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Isometric */ "./src/Isometric.ts");

const x = 100;
const y = 100;
const z = 100;
figma.showUI(__html__, { width: 800 });
figma.ui.onmessage = msg => {
    if (msg.type === "create-rectangles") {
        const isometric = new _Isometric__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 100, 100, 100);
        const nodes = isometric.generatePlanes();
        figma.group(nodes, figma.currentPage);
        figma.currentPage.selection = nodes;
        // figma.viewport.scrollAndZoomIntoView(nodes);
    }
    figma.closePlugin();
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lzb21ldHJpYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxLQUFLLE1BQU0sR0FBRyxZQUFZLEtBQUssTUFBTSxHQUFHO0FBQzFFO0FBQ0EsNEJBQTRCLEtBQUssRUFBRSxHQUFHLFVBQVU7QUFDaEQ7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0IsNEJBQTRCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFLEdBQUcsRUFBRSxLQUFLLE1BQU0sR0FBRyxZQUFZLEtBQUssTUFBTSxHQUFHO0FBQzFFO0FBQ0EsNEJBQTRCLEtBQUssRUFBRSxHQUFHLFVBQVU7QUFDaEQ7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0IsNEJBQTRCLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFLEdBQUcsTUFBTSxLQUFLLE1BQU0sR0FBRyxnQkFBZ0IsS0FBSztBQUN6RTtBQUNBLHNCQUFzQixHQUFHLHNCQUFzQixLQUFLLE1BQU0sR0FBRyxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0IsNEJBQTRCLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJc29tZXRyaWMge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgbCwgdywgaCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmwgPSBsO1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy5oID0gaDtcclxuICAgIH1cclxuICAgIGdlbmVyYXRlTGVmdFBsYW5lKCkge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBmaWdtYS5jcmVhdGVWZWN0b3IoKTtcclxuICAgICAgICBjb25zdCB7IHgsIHksIGwsIHcsIGggfSA9IHRoaXM7XHJcbiAgICAgICAgbGVmdC52ZWN0b3JQYXRocyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2luZGluZ1J1bGU6IFwiRVZFTk9ERFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYE0gJHt4fSAke3l9IEwgJHt4IC0gbH0gJHt5IC0gbCAqIDAuNX0gTCAke3ggLSBsfSAke3kgLVxyXG4gICAgICAgICAgICAgICAgICAgIGggLVxyXG4gICAgICAgICAgICAgICAgICAgIGwgKiAwLjV9IEwgJHt4fSAke3kgLSBoICogMX0gWmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGVmdC5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMC4zNiwgZzogMC4zNiwgYjogMC4zNiB9IH1dO1xyXG4gICAgICAgIGxlZnQuc3Ryb2tlcyA9IFtdO1xyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVSaWdodFBsYW5lKCkge1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZmlnbWEuY3JlYXRlVmVjdG9yKCk7XHJcbiAgICAgICAgY29uc3QgeyB4LCB5LCBsLCB3LCBoIH0gPSB0aGlzO1xyXG4gICAgICAgIHJpZ2h0LnZlY3RvclBhdGhzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aW5kaW5nUnVsZTogXCJFVkVOT0REXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBgTSAke3h9ICR7eX0gTCAke3ggKyB3fSAke3kgLSB3ICogMC41fSBMICR7eCArIHd9ICR7eSAtXHJcbiAgICAgICAgICAgICAgICAgICAgaCAtXHJcbiAgICAgICAgICAgICAgICAgICAgdyAqIDAuNX0gTCAke3h9ICR7eSAtIGggKiAxfSBaYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICByaWdodC5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMC41MiwgZzogMC41MiwgYjogMC41MiB9IH1dO1xyXG4gICAgICAgIHJpZ2h0LnN0cm9rZXMgPSBbXTtcclxuICAgICAgICByZXR1cm4gcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVRvcFBsYW5lKCkge1xyXG4gICAgICAgIGNvbnN0IHRvcCA9IGZpZ21hLmNyZWF0ZVZlY3RvcigpO1xyXG4gICAgICAgIGNvbnN0IHsgeCwgeSwgbCwgdywgaCB9ID0gdGhpcztcclxuICAgICAgICB0b3AudmVjdG9yUGF0aHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpbmRpbmdSdWxlOiBcIkVWRU5PRERcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGBNICR7eH0gJHt5IC0gaH0gTCAke3ggLSBsfSAke3kgLSBoIC0gbCAqIDAuNX0gTCAke3ggLVxyXG4gICAgICAgICAgICAgICAgICAgIGwgK1xyXG4gICAgICAgICAgICAgICAgICAgIHd9ICR7eSAtIGggLSAobCArIHcpICogMC41fSBMICR7eCArIHd9ICR7eSAtIGggLSB3ICogMC41fSBaYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0b3AuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAuNjMsIGc6IDAuNjMsIGI6IDAuNjMgfSB9XTtcclxuICAgICAgICB0b3Auc3Ryb2tlcyA9IFtdO1xyXG4gICAgICAgIHJldHVybiB0b3A7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVBsYW5lcygpIHtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5nZW5lcmF0ZUxlZnRQbGFuZSgpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5nZW5lcmF0ZVJpZ2h0UGxhbmUoKTtcclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdlbmVyYXRlVG9wUGxhbmUoKTtcclxuICAgICAgICBjb25zdCBub2RlcyA9IFtsZWZ0LCByaWdodCwgdG9wXTtcclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IElzb21ldHJpYyBmcm9tIFwiLi9Jc29tZXRyaWNcIjtcclxuY29uc3QgeCA9IDEwMDtcclxuY29uc3QgeSA9IDEwMDtcclxuY29uc3QgeiA9IDEwMDtcclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA4MDAgfSk7XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XHJcbiAgICBpZiAobXNnLnR5cGUgPT09IFwiY3JlYXRlLXJlY3RhbmdsZXNcIikge1xyXG4gICAgICAgIGNvbnN0IGlzb21ldHJpYyA9IG5ldyBJc29tZXRyaWMoMCwgMCwgMTAwLCAxMDAsIDEwMCk7XHJcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBpc29tZXRyaWMuZ2VuZXJhdGVQbGFuZXMoKTtcclxuICAgICAgICBmaWdtYS5ncm91cChub2RlcywgZmlnbWEuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IG5vZGVzO1xyXG4gICAgICAgIC8vIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhub2Rlcyk7XHJcbiAgICB9XHJcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9