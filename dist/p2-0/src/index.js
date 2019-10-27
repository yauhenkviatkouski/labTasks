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
/******/ 	return __webpack_require__(__webpack_require__.s = "./p2-0/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./p2-0/src/arrayProcessig.js":
/*!************************************!*\
  !*** ./p2-0/src/arrayProcessig.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArrayProcessig; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ArrayProcessig =
/*#__PURE__*/
function () {
  function ArrayProcessig() {
    _classCallCheck(this, ArrayProcessig);
  }

  _createClass(ArrayProcessig, [{
    key: "getArrayFromJSON",
    value: function getArrayFromJSON(arrayString) {
      try {
        var array = JSON.parse(arrayString);
        if (!Array.isArray(array)) throw new Error();
        return array;
      } catch (e) {
        alert('It isn\'t array of numbers!');
      }
    }
  }, {
    key: "subSumN2",
    value: function subSumN2(arrayString) {
      var array = this.getArrayFromJSON(arrayString);
      var maxSubArray = 0;

      for (var i = 0; i < array.length; i += 1) {
        for (var j = i; j < array.length; j += 1) {
          var subArray = array.slice(i, j + 1);
          var subArrayValue = subArray.reduce(function (sum, current) {
            return sum + current;
          });

          if (subArrayValue > maxSubArray) {
            maxSubArray = subArrayValue;
          }
        }
      }

      return maxSubArray;
    }
  }, {
    key: "subSumN",
    value: function subSumN(arrayString) {
      var array = this.getArrayFromJSON(arrayString);
      var maxSubArray = 0;
      var accumulator = 0;

      for (var i = 0; i < array.length; i += 1) {
        accumulator = accumulator + array[i];

        if (accumulator < 0) {
          accumulator = 0;
        } else if (accumulator > maxSubArray) {
          maxSubArray = accumulator;
        }
      }

      return maxSubArray;
    }
  }, {
    key: "searchMin",
    value: function searchMin(arrayString) {
      var array = this.getArrayFromJSON(arrayString);
      return array.reduce(function (previous, item) {
        return item < previous ? item : previous;
      });
    }
  }, {
    key: "searchMax",
    value: function searchMax(arrayString) {
      var array = this.getArrayFromJSON(arrayString);
      return array.reduce(function (previous, item) {
        return item > previous ? item : previous;
      });
    }
  }, {
    key: "searchMedian",
    value: function searchMedian(arrayString) {
      var array = this.getArrayFromJSON(arrayString);

      var quickSort = function quickSort(arr) {
        if (arr.length === 0) return [];
        var leftPart = [];
        var rightPart = [];
        var base = arr[0];

        for (var i = 1; i < arr.length; i += 1) {
          if (arr[i] < base) {
            leftPart.push(arr[i]);
          } else {
            rightPart.push(arr[i]);
          }
        }

        return quickSort(leftPart).concat(base, quickSort(rightPart));
      };

      var sort = quickSort(array);
      var center = sort[Math.floor(sort.length / 2)];

      if (sort.length % 2 === 1) {
        return center;
      } else {
        var centerLeft = sort[Math.floor(sort.length / 2 - 1)];
        return (centerLeft + center) / 2;
      }
    }
  }, {
    key: "selection",
    value: function selection(arrayString) {
      var array = this.getArrayFromJSON(arrayString);
      var sequence = [array[0]];
      var maxSequence = sequence;

      for (var i = 1; i < array.length; i += 1) {
        if (array[i] > array[i - 1]) {
          sequence.push(array[i]);

          if (maxSequence.length < sequence.length) {
            maxSequence = sequence;
          }
        } else {
          sequence = [array[i]];
        }
      }

      return maxSequence;
    }
  }]);

  return ArrayProcessig;
}(); // export default ArrayProcessig;




/***/ }),

/***/ "./p2-0/src/arraySorter.js":
/*!*********************************!*\
  !*** ./p2-0/src/arraySorter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArraySorter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ArraySorter =
/*#__PURE__*/
function () {
  function ArraySorter() {
    _classCallCheck(this, ArraySorter);
  }

  _createClass(ArraySorter, [{
    key: "isArray",
    value: function isArray(arr) {
      try {
        if (!Array.isArray(JSON.parse(arr))) {
          throw new Error();
        }

        return true;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "quick",
    value: function quick(arr, down) {
      if (!Array.isArray(arr)) {
        if (!this.isArray(arr)) {
          return 'It isn\'t array of numbers!';
        }

        arr = JSON.parse(arr);
      }

      if (arr.length === 0) return [];
      var leftPart = [];
      var rightPart = [];
      var base = arr[0];

      if (down) {
        for (var i = 1; i < arr.length; i += 1) {
          if (arr[i] > base) {
            leftPart.push(arr[i]);
          } else {
            rightPart.push(arr[i]);
          }
        }
      } else {
        for (var _i = 1; _i < arr.length; _i += 1) {
          if (arr[_i] < base) {
            leftPart.push(arr[_i]);
          } else {
            rightPart.push(arr[_i]);
          }
        }
      }

      return this.quick(leftPart, down).concat(base, this.quick(rightPart, down));
    }
  }, {
    key: "selection",
    value: function selection(arr, down) {
      if (!Array.isArray(arr)) {
        if (!this.isArray(arr)) {
          return 'It isn\'t array of numbers!';
        }

        arr = JSON.parse(arr);
      }

      for (var i = 0; i < arr.length - 1; i += 1) {
        var min = i;

        for (var j = i + 1; j < arr.length; j += 1) {
          if (down === true) {
            if (arr[j] > arr[min]) {
              min = j;
            }
          } else if (arr[j] < arr[min]) {
            min = j;
          }
        }

        var t = arr[min];
        arr[min] = arr[i];
        arr[i] = t;
      }

      return arr;
    }
  }, {
    key: "insertion",
    value: function insertion(arr, down) {
      if (!Array.isArray(arr)) {
        if (!this.isArray(arr)) return 'It isn\'t array of numbers!';
        arr = JSON.parse(arr);
      }

      for (var i = 0; i < arr.length; i += 1) {
        var t = arr[i];
        var j = i - 1;

        if (down === true) {
          while (j >= 0 && arr[j] < t) {
            arr[j + 1] = arr[j];
            j -= 1;
          }
        } else {
          while (j >= 0 && arr[j] > t) {
            arr[j + 1] = arr[j];
            j -= 1;
          }
        }

        arr[j + 1] = t;
      }

      return arr;
    }
  }, {
    key: "standard",
    value: function standard(arr, down) {
      if (!Array.isArray(arr)) {
        if (!this.isArray(arr)) return 'It isn\'t array of numbers!';
        arr = JSON.parse(arr);
      }

      if (down === true) {
        arr.sort(function (a, b) {
          return b - a;
        });
      } else {
        arr.sort(function (a, b) {
          return a - b;
        });
      }

      return arr;
    }
  }]);

  return ArraySorter;
}();



/***/ }),

/***/ "./p2-0/src/cachingCalculator.js":
/*!***************************************!*\
  !*** ./p2-0/src/cachingCalculator.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CachingCalc; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CachingCalc =
/*#__PURE__*/
function () {
  function CachingCalc() {
    _classCallCheck(this, CachingCalc);

    this.cache = [];
  }

  _createClass(CachingCalc, [{
    key: "calculate",
    value: function calculate(a, b, oper) {
      a = Number(a);
      b = Number(b);

      function simpleCalc(a, b, operation) {
        switch (operation) {
          case '+':
            return a + b;

          case '-':
            return a - b;

          case '*':
            return a * b;

          case '/':
            if (b === 0) {
              alert('TypeError: Devision by zero.');
              throw new Error('TypeError: Devision by zero.');
            }

            return a / b;

          default:
            alert('TypeError: incorrect operator');
            throw new Error('TypeError: incorrect operator.');
        }
      }

      var require = {
        a: a,
        b: b,
        oper: oper
      };

      for (var i = 0; i < this.cache.length; i += 1) {
        if (require.a === this.cache[i].a && require.b === this.cache[i].b && require.oper === this.cache[i].oper) {
          require.result = this.cache[i].result;
          break;
        }
      }

      if (require.result) return 'Result from cache: ' + require.result;

      if (oper.length === 1) {
        require.result = simpleCalc(a, b, oper);
      } else {
        var customFunction = new Function('a', 'b', 'return ' + oper);
        require.result = customFunction(a, b);
      }

      this.cache.push(require);
      return 'No in cache. Result: ' + require.result;
    }
  }]);

  return CachingCalc;
}();



/***/ }),

/***/ "./p2-0/src/convertNum.js":
/*!********************************!*\
  !*** ./p2-0/src/convertNum.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberConverter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NumberConverter =
/*#__PURE__*/
function () {
  function NumberConverter() {
    _classCallCheck(this, NumberConverter);
  }

  _createClass(NumberConverter, [{
    key: "convert",
    value: function convert(inputNumber, base, outputBase) {
      try {
        inputNumber = JSON.parse(inputNumber);

        if (!Array.isArray(inputNumber)) {
          throw new Error();
        }
      } catch (e) {
        return 'It isn\'t array of numbers!';
      }

      var alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

      var convertToTen = function convertToTen(num, base) {
        var pow = 0;
        var result = 0;

        for (var i = num.length - 1; i >= 0; i -= 1) {
          result += alphabet.indexOf(String(num[i])) * Math.pow(base, pow);
          pow += 1;
        }

        return result;
      };

      var convertFromTen = function convertFromTen(num, base) {
        var result = '';

        while (num > 0) {
          result = alphabet[num % base] + result;
          num = Math.floor(num / base);
        }

        return result;
      };

      if (base === 10) {
        return convertFromTen(parseInt(inputNumber.join('')), outputBase);
      } else {
        return convertFromTen(convertToTen(inputNumber, base), outputBase);
      }
    }
  }]);

  return NumberConverter;
}();



/***/ }),

/***/ "./p2-0/src/dateDisplay.js":
/*!*********************************!*\
  !*** ./p2-0/src/dateDisplay.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateDisplay; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DateDisplay =
/*#__PURE__*/
function () {
  function DateDisplay() {
    _classCallCheck(this, DateDisplay);
  }

  _createClass(DateDisplay, [{
    key: "parser",
    value: function parser(str, inputScheme) {
      var components = {};
      var defaultScheme = inputScheme ? inputScheme : 'DDMMYYYY';
      components.day = str.substr([defaultScheme.indexOf('DD')], 2);
      components.month = str.substr([defaultScheme.indexOf('MM')], 2);
      components.year = str.substr([defaultScheme.indexOf('YYYY')], 4);
      return components;
    }
  }, {
    key: "print",
    value: function print(components, outputScheme) {
      var defaultScheme = outputScheme ? outputScheme : 'DD-MM-YYYY';
      var result = defaultScheme.replace(/DD/, components.day);

      if (outputScheme.indexOf('MMMM') >= 0) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        result = result.replace(/MMMM/, months[Number(components.month) - 1]);
      } else {
        result = result.replace(/MM/, components.month);
      }

      result = result.replace(/YYYY/, components.year);
      return result;
    }
  }, {
    key: "formatStr",
    value: function formatStr(str, inputScheme, outputScheme) {
      var components = this.parser(str, inputScheme);
      return this.print(components, outputScheme);
    }
  }, {
    key: "formatMs",
    value: function formatMs(ms, outputScheme) {
      var date = new Date(Number(ms));
      var components = {};
      var day = date.getDate();
      var month = date.getMonth() + 1;
      components.year = date.getFullYear();
      components.day = day < 10 ? '0' + day : day;
      components.month = month < 10 ? '0' + month : month;
      return this.print(components, outputScheme);
    }
  }, {
    key: "fromNow",
    value: function fromNow(str, inputScheme) {
      var components = this.parser(str, inputScheme);
      var date = new Date(components.year + '-' + components.month + '-' + components.day);
      var nowDate = new Date();
      var diffDays = (nowDate - date) / 1000 / 60 / 60 / 24;
      var isPast = date < nowDate ? true : false;
      diffDays = Math.floor(Math.abs(diffDays));
      var years = Math.floor(diffDays / 365);
      var days = diffDays % 365;
      var resStr = years ? years + ' years and ' + days + ' days' : days + ' days';
      return isPast ? 'it was ' + resStr + ' ago' : 'it will be in ' + resStr;
    }
  }]);

  return DateDisplay;
}();



/***/ }),

/***/ "./p2-0/src/index.js":
/*!***************************!*\
  !*** ./p2-0/src/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayProcessig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayProcessig */ "./p2-0/src/arrayProcessig.js");
/* harmony import */ var _dateDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateDisplay */ "./p2-0/src/dateDisplay.js");
/* harmony import */ var _textFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textFormatter */ "./p2-0/src/textFormatter.js");
/* harmony import */ var _stringCalculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stringCalculator */ "./p2-0/src/stringCalculator.js");
/* harmony import */ var _arraySorter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arraySorter */ "./p2-0/src/arraySorter.js");
/* harmony import */ var _convertNum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./convertNum */ "./p2-0/src/convertNum.js");
/* harmony import */ var _cachingCalculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cachingCalculator */ "./p2-0/src/cachingCalculator.js");
// import './styles/styles.css';







var arrayHandler = new _arrayProcessig__WEBPACK_IMPORTED_MODULE_0__["default"]();
var dateHandler = new _dateDisplay__WEBPACK_IMPORTED_MODULE_1__["default"]();
var textHandler = new _textFormatter__WEBPACK_IMPORTED_MODULE_2__["default"]();
var expressionHandler = new _stringCalculator__WEBPACK_IMPORTED_MODULE_3__["default"]();
var araySorter = new _arraySorter__WEBPACK_IMPORTED_MODULE_4__["default"]();
var numConverter = new _convertNum__WEBPACK_IMPORTED_MODULE_5__["default"]();
var cachingCalc = new _cachingCalculator__WEBPACK_IMPORTED_MODULE_6__["default"]();
var formList = document.querySelectorAll('form');
Array.prototype.forEach.call(formList, function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var result;

    switch (form.id) {
      case 'subSumN2':
        {
          var arrayString = document.getElementById('subSumN2-field').value;
          result = arrayHandler.subSumN2(arrayString);
          break;
        }

      case 'subSumN':
        {
          var _arrayString = document.getElementById('subSumN-field').value;
          result = arrayHandler.subSumN(_arrayString);
          break;
        }

      case 'searchMin':
        {
          var _arrayString2 = document.getElementById('searchMin-field').value;
          result = arrayHandler.searchMin(_arrayString2);
          break;
        }

      case 'searchMax':
        {
          var _arrayString3 = document.getElementById('searchMax-field').value;
          result = arrayHandler.searchMax(_arrayString3);
          break;
        }

      case 'searchMedian':
        {
          var _arrayString4 = document.getElementById('searchMedian-field').value;
          result = arrayHandler.searchMedian(_arrayString4);
          break;
        }

      case 'selection':
        {
          var _arrayString5 = document.getElementById('selection-field').value;
          result = arrayHandler.selection(_arrayString5);
          break;
        }

      case 'formatStr':
        {
          var dateString = document.getElementById('formatStr-field1').value;
          var inputScheme = document.getElementById('formatStr-field2').value;
          var outputScheme = document.getElementById('formatStr-field3').value;
          result = dateHandler.formatStr(dateString, inputScheme, outputScheme);
          break;
        }

      case 'formatMs':
        {
          var ms = document.getElementById('formatMs-ms').value;
          var outputRegEx = document.getElementById('formatMs-output').value;
          result = dateHandler.formatMs(ms, outputRegEx);
          break;
        }

      case 'fromNow':
        {
          var str = document.getElementById('fromNow-field1').value;
          var _inputScheme = document.getElementById('fromNow-field2').value;
          result = dateHandler.fromNow(str, _inputScheme);
          break;
        }

      case 'textFormatter':
        {
          var text = document.getElementById('textFormatter-field').value;
          var options = {
            maxSize: document.getElementById('textFormatter-maxSize').value,
            maxStrings: document.getElementById('textFormatter-maxStrings').value,
            type: document.getElementById('textFormatter-type').value
          };
          result = textHandler.format(text, options);
          break;
        }

      case 'stringCalculator':
        {
          var _str = document.getElementById('stringCalculator-field').value;
          result = expressionHandler.calculate(_str);
          break;
        }

      case 'sort-quick-up':
        {
          var arrString = document.getElementById('sort-quick-up-field').value;
          result = araySorter.quick(arrString);
          break;
        }

      case 'sort-quick-down':
        {
          var _arrString = document.getElementById('sort-quick-down-field').value;
          result = araySorter.quick(_arrString, true);
          break;
        }

      case 'sort-selection-up':
        {
          var _arrString2 = document.getElementById('sort-selection-up-field').value;
          result = araySorter.selection(_arrString2);
          break;
        }

      case 'sort-selection-down':
        {
          var _arrString3 = document.getElementById('sort-selection-down-field').value;
          result = araySorter.selection(_arrString3, true);
          break;
        }

      case 'sort-insertion-up':
        {
          var _arrString4 = document.getElementById('sort-insertion-up-feild').value;
          result = araySorter.insertion(_arrString4);
          break;
        }

      case 'sort-insertion-down':
        {
          var _arrString5 = document.getElementById('sort-insertion-down-field').value;
          result = araySorter.insertion(_arrString5, true);
          break;
        }

      case 'sort-standard-up':
        {
          var _arrString6 = document.getElementById('sort-standard-up-field').value;
          result = araySorter.standard(_arrString6);
          break;
        }

      case 'sort-standard-down':
        {
          var _arrString7 = document.getElementById('sort-standard-down-field').value;
          result = araySorter.standard(_arrString7, true);
          break;
        }

      case 'convertNum':
        {
          var _arrString8 = document.getElementById('convertNum-number').value;
          var input = document.getElementById('convertNum-input').value;
          var output = document.getElementById('convertNum-output').value;
          result = numConverter.convert(_arrString8, input, output);
          break;
        }

      case 'caching-calc':
        {
          var varA = document.getElementById('caching-calc-a').value;
          var varB = document.getElementById('caching-calc-b').value;
          var oper = document.getElementById('caching-calc-operation').value;
          result = cachingCalc.calculate(varA, varB, oper);
          break;
        }
    }

    console.log(result);
  });
});

/***/ }),

/***/ "./p2-0/src/stringCalculator.js":
/*!**************************************!*\
  !*** ./p2-0/src/stringCalculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringCalc; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StringCalc =
/*#__PURE__*/
function () {
  function StringCalc() {
    _classCallCheck(this, StringCalc);
  }

  _createClass(StringCalc, [{
    key: "calculate",
    value: function calculate(expr) {
      var check = function check(str) {
        var brConf = ['(', ')'];
        var brackets = str.match(/[()]/g);

        for (var i = 0; i <= brackets.length; i++) {
          if (brackets.length === 0) {
            return true;
          }

          if (brackets[i] === brConf[0] && brackets[i + 1] === brConf[1]) {
            brackets.splice(i, 2);
            i = i === 0 ? i - 1 : i - 2;
            continue;
          }
        }

        return false;
      };

      if (expr.indexOf('(') !== -1 || expr.indexOf(')') !== -1) {
        if (!check(expr)) alert('ExpressionError: Brackets must be paired');
      }

      expr = expr.replace(/\s/g, '');

      var operSingleSolve = function operSingleSolve(exprShort) {
        var operandA = Number(exprShort.match(/-?\d+\.*\d*/g)[0]);
        exprShort = exprShort.replace(/-?\d+\.*\d*/, '');
        var operation = exprShort.match(/[-+*/]/)[0];
        exprShort = exprShort.replace(/[-+*/]/, ' ');
        var operandB = Number(exprShort.match(/-?\d+\.*\d*/g)[0]);

        switch (operation) {
          case '+':
            return operandA + operandB;

          case '-':
            return operandA - operandB;

          case '*':
            return operandA * operandB;

          case '/':
            if (operandB === 0) alert('TypeError: Devision by zero.');
            return operandA / operandB;
        }
      };

      var operManySolve = function operManySolve(exprLong) {
        while (exprLong.match(/-?\d+\.*\d*/g).length > 1 && (exprLong.indexOf('/') !== -1 || exprLong.indexOf('*') !== -1)) {
          exprLong = exprLong.replace(/((-?))\d+\.*\d*((e-1\d)?)[*/]-?\d+\.*\d*/, operSingleSolve);
        }

        while (exprLong.match(/-?\d+\.*\d*/g).length > 1 && (exprLong.indexOf('+') !== -1 || exprLong.indexOf('-') !== -1)) {
          exprLong = exprLong.replace(/((-?))\d+\.*\d*((e-1\d)?)[+-]-?\d+\.*\d*/, operSingleSolve);
        }

        exprLong = exprLong.replace(/[()]/g, '');
        return exprLong;
      };

      while (expr.indexOf('(') !== -1) {
        expr = expr.replace(/\([^(]+?\)/, operManySolve);
      }

      return Number(operManySolve(expr));
    }
  }]);

  return StringCalc;
}();



/***/ }),

/***/ "./p2-0/src/textFormatter.js":
/*!***********************************!*\
  !*** ./p2-0/src/textFormatter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFormatter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextFormatter =
/*#__PURE__*/
function () {
  function TextFormatter() {
    _classCallCheck(this, TextFormatter);
  }

  _createClass(TextFormatter, [{
    key: "format",
    value: function format(str, options) {
      options.type = options.type || 'symbol';
      var maxSize = parseInt(options.maxSize);

      if (maxSize >= 0) {
        var result = '';
        var startSubStr = 0;

        switch (options.type) {
          case 'symbol':
            while (startSubStr < str.length) {
              result += str.slice(startSubStr, startSubStr + maxSize) + '\n';
              startSubStr += maxSize;
            }

            break;

          case 'word':
            while (startSubStr < str.length) {
              var subStr = str.slice(startSubStr, startSubStr + maxSize);
              var lastSpace = subStr.lastIndexOf(' ');

              if (lastSpace < 1) {
                result += subStr + '\n';
                startSubStr += maxSize;
              } else {
                result += subStr.slice(0, lastSpace) + '\n';
                startSubStr += 1 + lastSpace;
              }
            }

            break;

          case 'sentence':
            while (startSubStr < str.length) {
              var _subStr = str.slice(startSubStr, startSubStr + maxSize);

              var lastSentenceEnd = Math.max(_subStr.lastIndexOf('. '), _subStr.lastIndexOf('! '), _subStr.lastIndexOf('? '));

              if (lastSentenceEnd < 1) {
                var _lastSpace = _subStr.lastIndexOf(' ');

                if (_lastSpace < 1) {
                  result += _subStr + '\n';
                  startSubStr += maxSize;
                } else {
                  result += _subStr.slice(0, _lastSpace) + '\n';
                  startSubStr += 1 + _lastSpace;
                }
              } else {
                result += _subStr.slice(0, lastSentenceEnd + 1) + '\n';
                startSubStr += 1 + lastSentenceEnd;
              }
            }

            break;

          default:
            break;
        }

        str = result;
      }

      if (options.maxStrings > 0) {
        var posOfBreaks = [];
        var pos = 0;

        for (;;) {
          var foundPos = str.indexOf('\n', pos);

          if (foundPos === -1) {
            break;
          }

          posOfBreaks.push(foundPos);
          pos = foundPos + 1;
        }

        str = str.substring(0, posOfBreaks[options.maxStrings - 1]);
      } else if (options.maxStrings === 0) {
        str = '';
      }

      return str;
    }
  }]);

  return TextFormatter;
}();



/***/ })

/******/ });
//# sourceMappingURL=index.js.map