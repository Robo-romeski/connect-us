Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/js/setup.js';

var _expo = require('expo');

var Expo = babelHelpers.interopRequireWildcard(_expo);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var _App = require('./App');

var _App2 = babelHelpers.interopRequireDefault(_App);

var _components = require('../native-base-theme/components');

var _components2 = babelHelpers.interopRequireDefault(_components);

var _commonColor = require('../native-base-theme/variables/commonColor');

var _commonColor2 = babelHelpers.interopRequireDefault(_commonColor);

var Setup = function (_Component) {
  babelHelpers.inherits(Setup, _Component);

  function Setup() {
    babelHelpers.classCallCheck(this, Setup);

    var _this = babelHelpers.possibleConstructorReturn(this, (Setup.__proto__ || Object.getPrototypeOf(Setup)).call(this));

    _this.state = {
      isLoading: false,
      isReady: false
    };
    return _this;
  }

  babelHelpers.createClass(Setup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      return regeneratorRuntime.async(function componentWillMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(Expo.Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
              }));

            case 2:
              this.setState({ isReady: true });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.isReady) {
        return _react2.default.createElement(Expo.AppLoading, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        });
      }
      return _react2.default.createElement(
        _nativeBase.StyleProvider,
        { style: (0, _components2.default)(_commonColor2.default), __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        _react2.default.createElement(_App2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        })
      );
    }
  }]);
  return Setup;
}(_react.Component);

exports.default = Setup;