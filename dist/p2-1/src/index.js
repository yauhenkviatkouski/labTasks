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
/******/ 	return __webpack_require__(__webpack_require__.s = "./p2-1/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./p2-1/src/index.js":
/*!***************************!*\
  !*** ./p2-1/src/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import './styles/styles.css';
var WeatherApi =
/*#__PURE__*/
function () {
  function WeatherApi() {
    _classCallCheck(this, WeatherApi);

    this.state = {
      currentLang: 'ru',
      currentUnits: 'metric',
      // imperial
      currentCity: 'Minsk'
    };
    this.data = {
      cities: {
        Minsk: {
          en: 'Minsk',
          ru: 'Минск'
        },
        Homyel: {
          en: 'Homyel',
          ru: 'Гомель'
        },
        Brest: {
          en: 'Brest',
          ru: 'Брест'
        },
        Vitsyebsk: {
          en: 'Vitsyebsk',
          ru: 'Витебск'
        },
        Mahilyow: {
          en: 'Mahilyow',
          ru: 'Могилев'
        },
        Hrodna: {
          en: 'Hrodna',
          ru: 'Гродно'
        }
      },
      weather: {
        en: 'Weather',
        ru: 'Погода'
      },
      temp: {
        en: 'temperature',
        ru: 'Температура'
      },
      overcast: {
        en: 'Оvercast',
        ru: 'Облачность'
      },
      degrees: {
        imperial: '°F',
        metric: '°C'
      }
    };
  }

  _createClass(WeatherApi, [{
    key: "getWeather",
    value: function getWeather() {
      var _this = this;

      var xhr = new XMLHttpRequest();
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.currentCity + ',by&APPID=63b5f0f7da4cdbc5f7ee9af7c7afbc96&lang=' + this.state.currentLang + '&units=' + this.state.currentUnits;
      xhr.open('GET', url);

      xhr.onerror = function () {
        alert('Something went wrong please reload the page');
      };

      xhr.onload = function () {
        _this.drawWeather(JSON.parse(xhr.response));
      };

      xhr.send();
    }
  }, {
    key: "drawWeather",
    value: function drawWeather(response) {
      document.querySelector('.title').textContent = this.data.weather[this.state.currentLang];
      document.querySelector('.city').textContent = this.data.cities[this.state.currentCity][this.state.currentLang];
      document.querySelector('.temp').textContent = this.data.temp[this.state.currentLang] + ': ' + response.main.temp + this.data.degrees[this.state.currentUnits];
      document.querySelector('.overcast').textContent = this.data.overcast[this.state.currentLang] + ': ' + response.weather[0].description;
      var img = document.createElement('img');
      img.src = 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png';
      var icon = document.querySelector('.icon');

      if (document.querySelector('.icon img')) {
        icon.removeChild(document.querySelector('.icon img'));
      }

      icon.insertAdjacentElement('afterbegin', img);
      var cityList = document.querySelector('.cities__list').children;

      for (var i = 0; i < cityList.length; i += 1) {
        cityList[i].textContent = this.data.cities[cityList[i].value][this.state.currentLang];
      }
    }
  }, {
    key: "weatherApi",
    value: function weatherApi() {
      var _this2 = this;

      this.getWeather();
      document.querySelector('.lang__list').addEventListener('change', function (e) {
        var value = e.target.value;
        if (value === _this2.state.currentLang) return;
        _this2.state.currentLang = value;

        _this2.getWeather();
      });
      document.querySelector('.cities__list').addEventListener('change', function (e) {
        var value = e.target.value;
        if (value === _this2.state.currentCity) return;
        _this2.state.currentCity = value;

        _this2.getWeather();
      });
      document.querySelector('.system__list').addEventListener('change', function (e) {
        var value = e.target.value;
        if (value === _this2.state.currentUnits) return;
        _this2.state.currentUnits = value;

        _this2.getWeather();
      });
    }
  }]);

  return WeatherApi;
}();

var weatherVidget = new WeatherApi();
weatherVidget.weatherApi();

/***/ })

/******/ });
//# sourceMappingURL=index.js.map