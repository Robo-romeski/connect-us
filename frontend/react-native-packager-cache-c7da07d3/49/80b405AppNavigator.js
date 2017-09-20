Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/js/AppNavigator.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _native = require('mobx-react/native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _login = require('./components/login/');

var _login2 = babelHelpers.interopRequireDefault(_login);

var _home = require('./components/home/');

var _home2 = babelHelpers.interopRequireDefault(_home);

var _blankPage = require('./components/blankPage/');

var _blankPage2 = babelHelpers.interopRequireDefault(_blankPage);

var _sideBar = require('./components/sideBar');

var _sideBar2 = babelHelpers.interopRequireDefault(_sideBar);

var _signup = require('./components/signup');

var _signup2 = babelHelpers.interopRequireDefault(_signup);

var _baseTheme = require('./themes/base-theme');

var _AppViewStore = require('./stores/ViewStore/AppViewStore.js');

var _AppViewStore2 = babelHelpers.interopRequireDefault(_AppViewStore);

var _AuthStore = require('./stores/EntityStore/AuthStore.js');

var _AuthStore2 = babelHelpers.interopRequireDefault(_AuthStore);

var _AuthService = require('./services/AuthService.js');

var _AuthService2 = babelHelpers.interopRequireDefault(_AuthService);

var _UserModel = require('./models/UserModel.js');

var _UserModel2 = babelHelpers.interopRequireDefault(_UserModel);

var TOKEN_KEY = '@Token:key';

var AppNavigator = (0, _native.observer)(_class = function (_Component) {
  babelHelpers.inherits(AppNavigator, _Component);

  function AppNavigator() {
    babelHelpers.classCallCheck(this, AppNavigator);
    return babelHelpers.possibleConstructorReturn(this, (AppNavigator.__proto__ || Object.getPrototypeOf(AppNavigator)).apply(this, arguments));
  }

  babelHelpers.createClass(AppNavigator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._loadInitialState();
    }
  }, {
    key: 'componentWillReact',
    value: function componentWillReact() {
      if (_AppViewStore2.default.drawerOpened) {
        this._drawer._root.open();
      } else {
        this._drawer._root.close();
      }
    }
  }, {
    key: '_loadInitialState',
    value: function _loadInitialState() {
      _AppViewStore2.default.appLoading = true;
      _reactNative.AsyncStorage.getItem(TOKEN_KEY).then(function (responseToken) {
        if (responseToken) {
          _AuthService2.default.getUser(responseToken).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            responseJson.data.jwtAccessToken = responseToken;
            if (responseJson.success === true) {
              var userObj = new _UserModel2.default(responseJson.data);
              _AuthStore2.default.setUser(userObj);
              _reactNativeRouterFlux.Actions.home();
            }
          }).catch(function (error) {
            console.log('Error is: ', error);
          }).finally(function () {
            _AppViewStore2.default.appLoading = false;
          });
        } else {
          _AppViewStore2.default.appLoading = false;
        }
      }).catch(function (error) {
        console.log('Error in retreiving data', error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(_AppViewStore2.default.drawerOpened);
      return _react2.default.createElement(
        _nativeBase.Drawer,
        {
          ref: function ref(_ref) {
            _this2._drawer = _ref;
          },
          onClose: function onClose() {
            _AppViewStore2.default.drawerOpened = false;
          },
          type: 'overlay',
          content: _react2.default.createElement(_sideBar2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          }),
          tapToClose: true,
          acceptPan: false,
          openDrawerOffset: 0.2,
          panCloseMask: 0.2,
          negotiatePan: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        _react2.default.createElement(_reactNative.StatusBar, {
          backgroundColor: _baseTheme.statusBarColor,
          barStyle: 'light-content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }),
        _AppViewStore2.default.appLoading ? _react2.default.createElement(
          _nativeBase.View,
          { style: { flex: 1, backgroundColor: '#384850' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          },
          _react2.default.createElement(_nativeBase.Spinner, { style: { flex: 1 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          })
        ) : _react2.default.createElement(
          _reactNativeRouterFlux.Router,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          },
          _react2.default.createElement(
            _reactNativeRouterFlux.Scene,
            { key: 'root', __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'login', component: _login2.default, hideNavBar: true, initial: !_AuthStore2.default.isLoggedIn ? true : false, __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            }),
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'signup', component: _signup2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            }),
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'sideBar', component: _sideBar2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              }
            }),
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'home', component: _home2.default, hideNavBar: true, initial: _AuthStore2.default.isLoggedIn ? true : false, __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              }
            }),
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'blankPage', component: _blankPage2.default, __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            })
          )
        )
      );
    }
  }]);
  return AppNavigator;
}(_react.Component)) || _class;

exports.default = AppNavigator;