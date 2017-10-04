Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _temp,
    _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/js/components/errorMsg/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var ErrorMsg = (_temp = _class = function (_Component) {
  babelHelpers.inherits(ErrorMsg, _Component);

  function ErrorMsg() {
    babelHelpers.classCallCheck(this, ErrorMsg);
    return babelHelpers.possibleConstructorReturn(this, (ErrorMsg.__proto__ || Object.getPrototypeOf(ErrorMsg)).apply(this, arguments));
  }

  babelHelpers.createClass(ErrorMsg, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _nativeBase.View,
        babelHelpers.extends({}, this.props, { style: { marginTop: 5, alignSelf: 'flex-end' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }),
        _react2.default.createElement(
          _nativeBase.Text,
          { style: { fontSize: 12 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          this.props.children && this.props.children.toUpperCase()
        )
      );
    }
  }]);
  return ErrorMsg;
}(_react.Component), _class.propTypes = {
  children: _react2.default.PropTypes.string
}, _temp);
exports.default = ErrorMsg;