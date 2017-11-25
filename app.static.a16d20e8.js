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

module.exports = "data:image/png;base64,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"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

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

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _MuiThemeProvider = __webpack_require__(7);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

__webpack_require__(8);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(12);

var _Details2 = _interopRequireDefault(_Details);

var _About = __webpack_require__(17);

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

var _react = __webpack_require__(1);

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
            _react2.default.createElement('div', { style: { marginTop: "30%" } }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 42, color: 'rgb(83, 85, 88)' } },
              '\u9605\u4EAB',
              _react2.default.createElement(
                'span',
                { style: { fontSize: 20, color: 'rgb(83, 85, 88)' } },
                '\xA0\xA0V0.80.3'
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
            _react2.default.createElement('img', { src: __webpack_require__(11), style: { width: "100%" } })
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

module.exports = __webpack_require__.p + "static/ScreenShot_01.25db1ff6.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _telescope = __webpack_require__(13);

var _telescope2 = _interopRequireDefault(_telescope);

var _cloudUpload = __webpack_require__(14);

var _cloudUpload2 = _interopRequireDefault(_cloudUpload);

var _gitCompare = __webpack_require__(15);

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
            _react2.default.createElement('img', { src: __webpack_require__(16), style: { width: "100%" } })
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
              { className: 'start-xs', style: { fontSize: 28, color: 'rgb(83, 85, 88)' } },
              '\u9605\u4EABApp\u662F\u8BA9\u4E66\u7C4D\u8D44\u6E90\u5145\u5206\u5229\u7528\u7684\u6700\u597D\u65B9\u5F0F\u3002'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA", alignItems: 'center', paddingTop: 60 } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-1 col-md-1 col-lg-1' },
            _react2.default.createElement(_cloudUpload2.default, { size: 68, color: 'rgb(83, 85, 88)' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-8 col-md-6 col-lg-6' },
            _react2.default.createElement(
              'p',
              { className: 'start-xs', style: { fontSize: 28, color: 'rgb(83, 85, 88)' } },
              '\u626B\u7801\u5F55\u5165\u60A8\u62E5\u6709\u7684\u4E66\u7C4D\uFF0C\u5E76\u5411\u597D\u53CB\u5C55\u793A\u3002'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA", alignItems: 'center', paddingTop: 20 } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-1 col-md-1 col-lg-1' },
            _react2.default.createElement(_gitCompare2.default, { size: 68, color: 'rgb(83, 85, 88)' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-8 col-md-6 col-lg-6' },
            _react2.default.createElement(
              'p',
              { className: 'start-xs', style: { fontSize: 28, color: 'rgb(83, 85, 88)' } },
              '\u6DFB\u52A0\u60A8\u60F3\u770B\u7684\u4E66\u5230\u613F\u671B\u5355\uFF0C\u770B\u770B\u54EA\u4E2A\u597D\u53CB\u62E5\u6709\u60A8\u60F3\u8BFB\u7684\u4E66\u3002'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA", alignItems: 'center', paddingTop: 20 } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-1 col-md-1 col-lg-1' },
            _react2.default.createElement(_telescope2.default, { size: 68, color: 'rgb(83, 85, 88)' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-8 col-md-6 col-lg-6' },
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/go/telescope");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/go/cloud-upload");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/go/git-compare");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ScreenShot_02.f8a060b7.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Avatar = __webpack_require__(18);

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
        { style: { height: '100vh', backgroundColor: "#F7F8FA" } },
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
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
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-sm-6 col-md-6 col-lg-3' },
            _react2.default.createElement(_Avatar2.default, {
              src: __webpack_require__(19),
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
              src: __webpack_require__(20),
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
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-10 col-md-8 col-lg-6' },
            _react2.default.createElement(
              'p',
              { style: { fontSize: 34, fontWeight: "bold", color: 'rgb(83, 85, 88)' } },
              '\u611F\u8C22\u6240\u6709\u53C2\u4E0E\u4EBA\u5458'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-2 m-b-15' },
            _react2.default.createElement(_Avatar2.default, { src: __webpack_require__(0), size: 66 }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 16, fontWeight: "bold", color: 'rgb(83, 85, 88)', paddingBottom: 25 } },
              'Florence Wang'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-2 m-b-15 ' },
            _react2.default.createElement(_Avatar2.default, { src: __webpack_require__(0), size: 66 }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 16, fontWeight: "bold", color: 'rgb(83, 85, 88)', paddingBottom: 25 } },
              'Anna He'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-2 m-b-15 ' },
            _react2.default.createElement(_Avatar2.default, { src: __webpack_require__(0), size: 66 }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 16, fontWeight: "bold", color: 'rgb(83, 85, 88)', paddingBottom: 25 } },
              'Lingfei Li'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-2 m-b-15 ' },
            _react2.default.createElement(_Avatar2.default, { src: __webpack_require__(0), size: 66 }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 16, fontWeight: "bold", color: 'rgb(83, 85, 88)', paddingBottom: 25 } },
              'Yueyao Wang'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row center-xs', style: { backgroundColor: "#F7F8FA" } },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-2 m-b-15 ' },
            _react2.default.createElement(_Avatar2.default, { src: __webpack_require__(0), size: 66 }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 16, fontWeight: "bold", color: 'rgb(83, 85, 88)', paddingBottom: 25 } },
              'Lily Li'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-2 m-b-15 ' },
            _react2.default.createElement(_Avatar2.default, { src: __webpack_require__(0), size: 66 }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 16, fontWeight: "bold", color: 'rgb(83, 85, 88)', paddingBottom: 25 } },
              'Eric Ma'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-2 m-b-15 ' },
            _react2.default.createElement(_Avatar2.default, { src: __webpack_require__(0), size: 66 }),
            _react2.default.createElement(
              'p',
              { style: { fontSize: 16, fontWeight: "bold", color: 'rgb(83, 85, 88)', paddingBottom: 25 } },
              'You?'
            )
          ),
          _react2.default.createElement('div', { className: 'col-xs-6 col-sm-6 col-md-3 col-lg-2 m-b-15 ' })
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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/luyu.60d205b5.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/yida.951dc01f.png";

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.a16d20e8.js.map