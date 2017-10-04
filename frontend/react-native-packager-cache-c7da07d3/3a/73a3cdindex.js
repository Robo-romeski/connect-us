Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/js/components/sideBar/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _style = require('./style');

var _style2 = babelHelpers.interopRequireDefault(_style);

var _AppViewStore = require('../../stores/ViewStore/AppViewStore.js');

var _AppViewStore2 = babelHelpers.interopRequireDefault(_AppViewStore);

var _AuthStore = require('../../stores/EntityStore/AuthStore.js');

var _AuthStore2 = babelHelpers.interopRequireDefault(_AuthStore);

var logo = require('../../../images/icon2.png');

var SideBar = function (_Component) {
  babelHelpers.inherits(SideBar, _Component);

  function SideBar() {
    babelHelpers.classCallCheck(this, SideBar);
    return babelHelpers.possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
  }

  babelHelpers.createClass(SideBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Content,
        { style: { backgroundColor: '#252A30' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        _react2.default.createElement(_nativeBase.Thumbnail, { style: { alignSelf: 'center', width: 200, height: 200, marginTop: 20, marginBottom: 15, resizeMode: 'contain' }, circular: true, source: logo, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        _react2.default.createElement(
          _nativeBase.ListItem,
          {
            button: true,
            onPress: function onPress() {
              _AppViewStore2.default.drawerOpened = false;
              if (_AppViewStore2.default.routeStack2[_AppViewStore2.default.routeStack2.length - 1].key !== 'home') {
                _reactNativeRouterFlux.Actions.home();
              }
            },
            icon: true, style: _style2.default.links,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'home', __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            _react2.default.createElement(
              _nativeBase.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              'Home'
            )
          ),
          _react2.default.createElement(_nativeBase.Right, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          })
        ),
        _react2.default.createElement(
          _nativeBase.ListItem,
          {
            button: true,
            onPress: function onPress() {
              _AppViewStore2.default.drawerOpened = false;
              _reactNativeRouterFlux.Actions.blankPage();
            },
            icon: true, style: _style2.default.links,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'chatboxes', __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            _react2.default.createElement(
              _nativeBase.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              'Blank Page'
            )
          ),
          _react2.default.createElement(_nativeBase.Right, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          })
        ),
        _react2.default.createElement(
          _nativeBase.ListItem,
          {
            button: true,
            onPress: function onPress() {
              _AppViewStore2.default.drawerOpened = false;
              _AuthStore2.default.unsetUser();
            },
            icon: true, style: _style2.default.links,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'exit', __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            _react2.default.createElement(
              _nativeBase.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              'Log Out'
            )
          ),
          _react2.default.createElement(_nativeBase.Right, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          })
        )
      );
    }
  }]);
  return SideBar;
}(_react.Component);

exports.default = SideBar;