(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(3);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
var _default = _App2.default;

// Your top level component

exports.default = _default;

// Render your app

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yidayin/Desktop/YueXiangAppSource/src/index.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = __webpack_require__(5);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

__webpack_require__(6);

var _Home = __webpack_require__(7);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(_Home2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/yidayin/Desktop/YueXiangAppSource/src/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yidayin/Desktop/YueXiangAppSource/src/App.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("flexboxgrid/css/flexboxgrid.css");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(8);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Yida Yin on 11/13/17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var component1 = _react2.default.createElement(
  'div',
  { style: { marginTop: '30%' } },
  _react2.default.createElement(
    'p',
    { style: { fontSize: 42, color: 'rgb(83, 85, 88)' } },
    '\u9605\u4EAB'
  ),
  _react2.default.createElement(
    'p',
    { className: 'start-xs', style: { fontSize: 22, color: 'rgb(83, 85, 88)' } },
    '\u6DFB\u52A0\u60A8\u62E5\u6709\u7684\u548C\u60A8\u60F3\u770B\u7684\u4E66\u7C4D\uFF0C\u53D1\u73B0\u60A8\u4E0E\u60A8\u597D\u53CB\u4E4B\u95F4\u5171\u540C\u611F\u5174\u8DA3\u7684\u9605\u8BFB\u3002\u5145\u5206\u5229\u7528\u95F2\u7F6E\u4E66\u7C4D\u3002\u73B0\u652F\u6301iPhone\u8BBE\u5907\u3002'
  ),
  _react2.default.createElement(
    'div',
    { className: 'row start-xs' },
    _react2.default.createElement(
      'div',
      { className: 'col-xs-6 col-sm-6 col-md-4 col-lg-5' },
      _react2.default.createElement(_RaisedButton2.default, {
        label: '\u4E0B\u8F7D\u9605\u4EAB0.73',
        href: 'http://yuexiangapp.com/ipa_files/manifest.plist',
        primary: true
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-xs-6 col-sm-4 col-md-4 col-lg-3' },
      _react2.default.createElement(_RaisedButton2.default, { label: '\u66F4\u591A\u8BE6\u60C5', primary: true, style: { marginLeft: 30 } })
    )
  )
);

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { style: { height: '100vh', backgroundColor: "#F7F8FA" } },
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#FFFFFF" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-10 col-md-8 col-lg-6' },
            _react2.default.createElement(
              _Tabs.Tabs,
              {
                tabItemContainerStyle: { backgroundColor: "#FFFFFF" },
                inkBarStyle: { backgroundColor: 'rgb(70, 160, 153)' }
              },
              _react2.default.createElement(_Tabs.Tab, { style: styles.tab, label: '\u4E3B\u9875' }),
              _react2.default.createElement(_Tabs.Tab, { style: styles.tab, label: '\u9605\u4EAB' }),
              _react2.default.createElement(_Tabs.Tab, { style: styles.tab, label: '\u5173\u4E8E\u6211\u4EEC' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-5 col-md-4 col-lg-3' },
            component1
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-5 col-md-4 col-lg-4' },
            _react2.default.createElement('img', { src: __webpack_require__(10), style: { width: "100%" } })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;


var styles = {
  tab: {
    color: "#727272",
    fontWeight: 400
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(component1, 'component1', '/Users/yidayin/Desktop/YueXiangAppSource/src/Home.js');

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/yidayin/Desktop/YueXiangAppSource/src/Home.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/yidayin/Desktop/YueXiangAppSource/src/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yidayin/Desktop/YueXiangAppSource/src/Home.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Tabs");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ScreenShot_01.25db1ff6.png";

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.4f6f8245.js.map