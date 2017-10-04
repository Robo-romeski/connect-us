Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/js/components/contacts/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _nativeBase = require('native-base');

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = babelHelpers.interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var _AppViewStore = require('../../stores/ViewStore/AppViewStore.js');

var _AppViewStore2 = babelHelpers.interopRequireDefault(_AppViewStore);

var personas = ['Benjamin Blanco', 'Terry Crews', 'Ray Donovan', 'Jessie Teague', 'Fredrick Grey', 'Derrick FoReal', 'Patrick Peterson', 'Delvin Cook', 'Art Shell', 'Patty Mills'];

var backgroundImage = require('../../../images/glow2.png');

var Contacts = function (_Component) {
  babelHelpers.inherits(Contacts, _Component);

  function Contacts() {
    babelHelpers.classCallCheck(this, Contacts);
    return babelHelpers.possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).apply(this, arguments));
  }

  babelHelpers.createClass(Contacts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        { theme: _baseTheme2.default, style: { backgroundColor: '#384850' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        _react2.default.createElement(
          _nativeBase.Thumbnail,
          { square: true, source: backgroundImage, style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          _react2.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            _react2.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.pop();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'arrow-back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                })
              )
            ),
            _react2.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              _react2.default.createElement(
                _nativeBase.Title,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                },
                'Contacts'
              )
            ),
            _react2.default.createElement(
              _nativeBase.Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'search', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _nativeBase.Content,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            _react2.default.createElement(_nativeBase.List, { dataArray: personas,
              renderRow: function renderRow(item) {
                return _react2.default.createElement(
                  _nativeBase.ListItem,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      }
                    },
                    item
                  )
                );
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            })
          )
        )
      );
    }
  }]);
  return Contacts;
}(_react.Component);

exports.default = Contacts;