Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/js/components/blankPage/index.js';

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

var backgroundImage = require('../../../images/glow2.png');

var BlankPage = function (_Component) {
  babelHelpers.inherits(BlankPage, _Component);

  function BlankPage() {
    babelHelpers.classCallCheck(this, BlankPage);
    return babelHelpers.possibleConstructorReturn(this, (BlankPage.__proto__ || Object.getPrototypeOf(BlankPage)).apply(this, arguments));
  }

  babelHelpers.createClass(BlankPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.Container,
        { theme: _baseTheme2.default, style: { backgroundColor: '#384850' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        _react2.default.createElement(
          _nativeBase.Thumbnail,
          { square: true, source: backgroundImage, style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          _react2.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            _react2.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.pop();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'arrow-back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  }
                })
              )
            ),
            _react2.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              _react2.default.createElement(
                _nativeBase.Title,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                },
                'Blank Page'
              )
            ),
            _react2.default.createElement(_nativeBase.Right, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            })
          ),
          _react2.default.createElement(_nativeBase.Content, { padder: true, style: { backgroundColor: 'transparent' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          })
        )
      );
    }
  }]);
  return BlankPage;
}(_react.Component);

exports.default = BlankPage;