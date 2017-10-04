Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/js/components/login/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _nativeBase = require('native-base');

var _native = require('mobx-react/native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _loginTheme = require('./login-theme');

var _loginTheme2 = babelHelpers.interopRequireDefault(_loginTheme);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var _AppViewStore = require('../../stores/ViewStore/AppViewStore.js');

var _AppViewStore2 = babelHelpers.interopRequireDefault(_AppViewStore);

var _LoginViewStore = require('../../stores/ViewStore/LoginViewStore.js');

var _LoginViewStore2 = babelHelpers.interopRequireDefault(_LoginViewStore);

var _errorMsg = require('../errorMsg');

var _errorMsg2 = babelHelpers.interopRequireDefault(_errorMsg);

var backgroundImage = require('../../../images/glow2.png');
var logo = require('../../../images/logo.png');

var Login = (0, _native.observer)(_class = function (_Component) {
  babelHelpers.inherits(Login, _Component);

  function Login() {
    babelHelpers.classCallCheck(this, Login);
    return babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  babelHelpers.createClass(Login, [{
    key: 'render',
    value: function render() {
      var showErrors = !_LoginViewStore2.default.isValid && _LoginViewStore2.default.isSubmitted && _LoginViewStore2.default.validationErrors;
      var showEmailError = showErrors && _LoginViewStore2.default.validationErrors.email;
      var showPasswordError = showErrors && _LoginViewStore2.default.validationErrors.password;

      return _react2.default.createElement(
        _nativeBase.Container,
        { style: _styles2.default.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        _react2.default.createElement(
          _nativeBase.Content,
          { keyboardShouldPersistTaps: 'always', style: { backgroundColor: '#384850' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          _react2.default.createElement(
            _reactNative.Image,
            { square: true, source: backgroundImage, style: _styles2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            _react2.default.createElement(
              _reactNative.Image,
              { square: true, source: logo, style: _styles2.default.shadow, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.bg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                _react2.default.createElement(
                  _nativeBase.View,
                  { style: { flexGrow: 1, paddingBottom: 10 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Item,
                    { underline: true, style: { borderBottomWidth: _reactNative.Platform.OS === 'ios' ? 0.5 : 1 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'person', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                      }
                    }),
                    _react2.default.createElement(_nativeBase.Input, {
                      placeholder: 'EMAIL',
                      placeholderTextColor: '#FFF',
                      keyboardType: 'email-address',
                      onChangeText: _LoginViewStore2.default.isSubmitted ? function (email) {
                        _LoginViewStore2.default.email = email;

                        _LoginViewStore2.default.validate();
                      } : function (email) {
                        _LoginViewStore2.default.email = email;
                      },
                      value: _LoginViewStore2.default.email,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                      }
                    }),
                    showEmailError && _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'warning', style: { color: 'red' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      }
                    })
                  ),
                  showEmailError && _LoginViewStore2.default.validationErrors.email.map(function (err, index) {
                    return _react2.default.createElement(
                      _errorMsg2.default,
                      { key: index, style: _styles2.default.error, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 57
                        }
                      },
                      err
                    );
                  })
                ),
                _react2.default.createElement(
                  _nativeBase.View,
                  { style: { flexGrow: 1, marginTop: _reactNative.Platform.OS === 'ios' ? -10 : 10 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Item,
                    { underline: true, style: { borderBottomWidth: _reactNative.Platform.OS === 'ios' ? 0.5 : 1 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: 'unlock', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                      }
                    }),
                    _react2.default.createElement(_nativeBase.Input, {
                      placeholder: 'PASSWORD',
                      placeholderTextColor: '#FFF',
                      secureTextEntry: true,
                      onChangeText: _LoginViewStore2.default.isSubmitted ? function (password) {
                        _LoginViewStore2.default.password = password;

                        _LoginViewStore2.default.validate();
                      } : function (password) {
                        _LoginViewStore2.default.password = password;
                      },
                      value: _LoginViewStore2.default.password,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                      }
                    }),
                    showPasswordError && _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'warning', style: { color: 'red' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                      }
                    })
                  ),
                  showPasswordError && _LoginViewStore2.default.validationErrors.password.map(function (err, index) {
                    return _react2.default.createElement(
                      _errorMsg2.default,
                      { key: index, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 89
                        }
                      },
                      err
                    );
                  })
                ),
                _react2.default.createElement(
                  _nativeBase.Button,
                  {
                    transparent: true,
                    style: { alignSelf: 'flex-end', marginBottom: _reactNative.Platform.OS === 'ios' ? 5 : 5, marginTop: 5 },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 96
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: { color: '#fff' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      }
                    },
                    'Forgot Password'
                  )
                ),
                _react2.default.createElement(
                  _nativeBase.Button,
                  {
                    rounded: true,
                    block: true,
                    style: { marginBottom: 5 },
                    onPress: function onPress() {
                      _LoginViewStore2.default.submit();
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 105
                    }
                  },
                  !_LoginViewStore2.default.isSubmitting ? _react2.default.createElement(
                    _nativeBase.Text,
                    { style: { color: 'rgba(1,188,140,1)' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      }
                    },
                    'Log In'
                  ) : _react2.default.createElement(_nativeBase.Spinner, { color: 'rgba(1,188,140,1)', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 115
                    }
                  })
                ),
                _react2.default.createElement(
                  _nativeBase.Button,
                  {
                    transparent: true,
                    style: { alignSelf: 'center' },
                    onPress: function onPress() {
                      return _reactNativeRouterFlux.Actions.signup();
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 118
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Text,
                    { style: { color: '#fff' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 123
                      }
                    },
                    'Sign Up Here'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Login;
}(_react.Component)) || _class;

exports.default = Login;