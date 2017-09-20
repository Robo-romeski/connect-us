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
            lineNumber: 15
          }
        },
        _react2.default.createElement(_nativeBase.Thumbnail, { style: { alignSelf: 'center', width: 200, height: 200, marginTop: 20, marginBottom: 15, resizeMode: 'contain' }, circular: true, source: logo, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
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
              lineNumber: 17
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'home', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            _react2.default.createElement(
              _nativeBase.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              'Home'
            )
          ),
          _react2.default.createElement(_nativeBase.Right, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
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
              lineNumber: 37
            }
          },
          _react2.default.createElement(
            _nativeBase.Left,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'chatboxes', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            _react2.default.createElement(
              _nativeBase.Text,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              'Blank Page'
            )
          ),
          _react2.default.createElement(_nativeBase.Right, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          })
        )
      );
    }
  }]);
  return SideBar;
}(_react.Component);

exports.default = SideBar;