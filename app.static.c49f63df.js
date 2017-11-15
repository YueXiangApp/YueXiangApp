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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ScreenShot_01.25db1ff6.png";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(4);

var _App = __webpack_require__(5);

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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _MuiThemeProvider = __webpack_require__(7);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

__webpack_require__(8);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(11);

var _Details2 = _interopRequireDefault(_Details);

var _About = __webpack_require__(15);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.renderBody = function () {
      return _this.__renderBody__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleChange = function () {
      return _this.__handleChange__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      slideLabel: "home"
    };
    return _this;
  }

  _createClass(App, [{
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__() {
      return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__renderBody__REACT_HOT_LOADER__',
    value: function __renderBody__REACT_HOT_LOADER__() {
      return this.__renderBody__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__renderBody__REACT_HOT_LOADER__',
    value: function __renderBody__REACT_HOT_LOADER__() {
      if (this.state.slideLabel === "home") {
        return _react2.default.createElement(_Home2.default, null);
      }
      if (this.state.slideLabel === "details") {
        return _react2.default.createElement(_Details2.default, null);
      }
      if (this.state.slideLabel === "about") {
        return _react2.default.createElement(_About2.default, null);
      }
      return null;
    }
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function __handleChange__REACT_HOT_LOADER__(value) {
      console.log("Switch to " + value);
      this.setState({
        slideLabel: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          'div',
          { style: { backgroundColor: "#F7F8FA" } },
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
                  inkBarStyle: { backgroundColor: 'rgb(70, 160, 153)' },
                  onChange: this.handleChange,
                  value: this.state.slideLabel,
                  ref: function ref(e) {
                    return _this2.navTabBar = e;
                  }
                },
                _react2.default.createElement(_Tabs.Tab, { style: styles.tab, label: '\u4E3B\u9875', value: "home" }),
                _react2.default.createElement(_Tabs.Tab, { style: styles.tab, label: '\u9605\u4EAB', value: "details" }),
                _react2.default.createElement(_Tabs.Tab, { style: styles.tab, label: '\u5173\u4E8E\u6211\u4EEC', value: "about" })
              )
            )
          ),
          this.renderBody()
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var styles = {
  tab: {
    color: "#727272",
    fontWeight: 400
  }
};

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/yidayin/Desktop/YueXiangAppSource/src/App.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/yidayin/Desktop/YueXiangAppSource/src/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yidayin/Desktop/YueXiangAppSource/src/App.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Tabs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("flexboxgrid/css/flexboxgrid.css");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(10);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Yida Yin on 11/13/17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.switchToDetails = function () {
      var _this2;

      return (_this2 = _this).__switchToDetails__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: '__switchToDetails__REACT_HOT_LOADER__',
    value: function __switchToDetails__REACT_HOT_LOADER__() {
      return this.__switchToDetails__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__switchToDetails__REACT_HOT_LOADER__',
    value: function __switchToDetails__REACT_HOT_LOADER__() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { height: '100vh', backgroundColor: "#F7F8FA" } },
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-5 col-md-4 col-lg-3', style: { backgroundColor: "#F7F8FA" } },
            _react2.default.createElement('div', { style: { marginTop: "40%" } }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 42, color: 'rgb(83, 85, 88)' } },
              '\u9605\u4EAB',
              _react2.default.createElement(
                'span',
                { style: { fontSize: 20, color: 'rgb(83, 85, 88)' } },
                '\xA0\xA0V0.73'
              )
            ),
            _react2.default.createElement(
              'p',
              { className: 'start-xs', style: { fontSize: 22, color: 'rgb(83, 85, 88)' } },
              '\u6DFB\u52A0\u60A8\u62E5\u6709\u7684\u548C\u60A8\u60F3\u770B\u7684\u4E66\u7C4D\uFF0C\u53D1\u73B0\u60A8\u4E0E\u60A8\u597D\u53CB\u4E4B\u95F4\u5171\u540C\u611F\u5174\u8DA3\u7684\u9605\u8BFB\u3002\u5145\u5206\u5229\u7528\u95F2\u7F6E\u4E66\u7C4D\u3002\u73B0\u652F\u6301iPhone\u8BBE\u5907\u3002'
            ),
            _react2.default.createElement(
              'div',
              { className: 'center-xs start-md' },
              _react2.default.createElement(_RaisedButton2.default, {
                label: '\u4E0B\u8F7D\u9605\u4EAB',
                href: 'itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/YueXiangApp/YueXiangApp.github.io/master/ipa_files/manifest.plist'
                //primary={true}
                , backgroundColor: 'rgb(98, 198, 185)',
                labelStyle: { color: "#F7F8FA", fontSize: 18 },
                style: { marginBottom: 15, width: '40%' }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-5 col-md-4 col-lg-4', style: { backgroundColor: "#F7F8FA" } },
            _react2.default.createElement('img', { src: __webpack_require__(1), style: { width: "100%" } })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/yidayin/Desktop/YueXiangAppSource/src/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yidayin/Desktop/YueXiangAppSource/src/Home.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _telescope = __webpack_require__(12);

var _telescope2 = _interopRequireDefault(_telescope);

var _cloudUpload = __webpack_require__(13);

var _cloudUpload2 = _interopRequireDefault(_cloudUpload);

var _gitCompare = __webpack_require__(14);

var _gitCompare2 = _interopRequireDefault(_gitCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Yida Yin on 11/14/17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }

  _createClass(Details, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { height: '100vh', backgroundColor: "#F7F8FA" } },
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-5 col-md-4 col-lg-3' },
            _react2.default.createElement('img', { src: __webpack_require__(1), style: { width: "100%" } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-5 col-md-4 col-lg-3' },
            _react2.default.createElement('div', { style: { marginTop: "40%" } }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 42, color: 'rgb(83, 85, 88)' } },
              '\u9605\u4EABApp'
            ),
            _react2.default.createElement(
              'p',
              { className: 'start-xs', style: { fontSize: 22, color: 'rgb(83, 85, 88)' } },
              '\u9605\u4EABApp\u662F\u8BA9\u4E66\u7C4D\u8D44\u6E90\u5145\u5206\u5229\u7528\u7684\u6700\u597D\u65B9\u5F0F\u3002'
            )
          )
        ),
        _react2.default.createElement('div', { style: { marginTop: 80, backgroundColor: "#F7F8FA" } }),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-1 col-md-1 col-lg-1' },
            _react2.default.createElement(_cloudUpload2.default, { size: 68, color: 'rgb(83, 85, 88)' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-8 col-md-6 col-lg-4' },
            _react2.default.createElement(
              'p',
              { className: 'start-xs', style: { fontSize: 28, color: 'rgb(83, 85, 88)' } },
              '\u4E0A\u4F20\u81EA\u5DF1\u62E5\u6709\u7684\u4E66\u7C4D\uFF0C\u5E76\u5BF9\u597D\u53CB\u53EF\u89C1\u3002'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-1 col-md-1 col-lg-1' },
            _react2.default.createElement(_gitCompare2.default, { size: 68, color: 'rgb(83, 85, 88)' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-8 col-md-6 col-lg-4' },
            _react2.default.createElement(
              'p',
              { className: 'start-xs', style: { fontSize: 28, color: 'rgb(83, 85, 88)' } },
              '\u6DFB\u52A0\u81EA\u5DF1\u60F3\u770B\u7684\u4E66\u5230\u613F\u671B\u5355\uFF0C\u770B\u770B\u54EA\u4E2A\u597D\u53CB\u62E5\u6709\u6211\u613F\u671B\u7684\u4E66\u3002'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-1 col-md-1 col-lg-1' },
            _react2.default.createElement(_telescope2.default, { size: 68, color: 'rgb(83, 85, 88)' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-8 col-md-6 col-lg-4' },
            _react2.default.createElement(
              'p',
              { className: 'start-xs', style: { fontSize: 28, color: 'rgb(83, 85, 88)' } },
              '\u53D1\u73B0\u4E0E\u81EA\u5DF1\u8BFB\u4E66\u54C1\u5473\u76F8\u8FD1\u7684\u4EBA\u3002'
            )
          )
        ),
        _react2.default.createElement('div', { style: { height: 120, backgroundColor: "#F7F8FA" } })
      );
    }
  }]);

  return Details;
}(_react.Component);

var _default = Details;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Details, 'Details', '/Users/yidayin/Desktop/YueXiangAppSource/src/Details.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yidayin/Desktop/YueXiangAppSource/src/Details.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/go/telescope");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/go/cloud-upload");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/go/git-compare");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Avatar = __webpack_require__(16);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Yida Yin on 11/14/17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { height: '100vh' } },
        _react2.default.createElement(
          'div',
          { className: 'row center-xs' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-10 col-md-8 col-lg-6' },
            _react2.default.createElement(
              'p',
              { style: { fontSize: 34, fontWeight: "bold", color: 'rgb(83, 85, 88)' } },
              '\u6211\u4EEC\u7684\u56E2\u961F'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-6 col-md-6 col-lg-3' },
            _react2.default.createElement(_Avatar2.default, {
              src: __webpack_require__(17),
              size: 120
            }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 28, fontWeight: "bold", color: 'rgb(83, 85, 88)' } },
              'Luyu Cai'
            ),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 16, color: 'rgb(90, 85, 162)' } },
              'Founder & & CEO '
            ),
            _react2.default.createElement(
              'p',
              { style: { color: 'rgb(83, 85, 88)' } },
              'Founder & Core Developer @YueXiangApp. '
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-6 col-md-6 col-lg-3' },
            _react2.default.createElement(_Avatar2.default, {
              src: __webpack_require__(18),
              size: 120
            }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 28, fontWeight: "bold", color: 'rgb(83, 85, 88)' } },
              'Yida Yin '
            ),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 16, color: 'rgb(90, 85, 162)' } },
              'Founder & & CTO '
            ),
            _react2.default.createElement(
              'p',
              { style: { color: 'rgb(83, 85, 88)' } },
              'Founder & Core Developer @YueXiangApp. @UW-Madison grad.'
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

var _default = About;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(About, 'About', '/Users/yidayin/Desktop/YueXiangAppSource/src/About.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/yidayin/Desktop/YueXiangAppSource/src/About.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/luyu.60d205b5.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/yida.951dc01f.png";

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.c49f63df.js.map