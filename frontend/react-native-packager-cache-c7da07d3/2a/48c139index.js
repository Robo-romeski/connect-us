Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/js/components/editCard/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _nativeBase = require('native-base');

var _native = require('mobx-react/native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = babelHelpers.interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var _AppViewStore = require('../../stores/ViewStore/AppViewStore.js');

var _AppViewStore2 = babelHelpers.interopRequireDefault(_AppViewStore);

var _SignUpViewStore = require('../../stores/ViewStore/SignUpViewStore.js');

var _SignUpViewStore2 = babelHelpers.interopRequireDefault(_SignUpViewStore);

var _errorMsg = require('../errorMsg');

var _errorMsg2 = babelHelpers.interopRequireDefault(_errorMsg);

var backgroundImage = require('../../../images/glow2.png');

var SignUp = (0, _native.observer)(_class = function (_Component) {
  babelHelpers.inherits(SignUp, _Component);

  function SignUp() {
    babelHelpers.classCallCheck(this, SignUp);
    return babelHelpers.possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).apply(this, arguments));
  }

  babelHelpers.createClass(SignUp, [{
    key: 'render',
    value: function render() {
      var showErrors = !_SignUpViewStore2.default.isValid && _SignUpViewStore2.default.isSubmitted && _SignUpViewStore2.default.validationErrors;
      var showEmailError = showErrors && _SignUpViewStore2.default.validationErrors.email;
      var showNameError = showErrors && _SignUpViewStore2.default.validationErrors.name;
      var showPasswordError = showErrors && _SignUpViewStore2.default.validationErrors.password;
      var showReTypePasswordError = showErrors && _SignUpViewStore2.default.validationErrors.reTypePassword;
      return _react2.default.createElement(
        _nativeBase.Container,
        { theme: _baseTheme2.default, style: { backgroundColor: 'rgba(65,75,85,1)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        _react2.default.createElement(
          _reactNative.Image,
          { source: backgroundImage, style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          _react2.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            _react2.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    return _reactNativeRouterFlux.Actions.pop();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { name: 'arrow-back', style: { fontSize: 30, lineHeight: 32 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                })
              )
            ),
            _react2.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              _react2.default.createElement(
                _nativeBase.Title,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                'Sign Up'
              )
            ),
            _react2.default.createElement(_nativeBase.Right, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            })
          ),
          _react2.default.createElement(
            _nativeBase.Content,
            { padder: true, style: { backgroundColor: 'transparent' }, keyboardShouldPersistTaps: 'always', __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            _react2.default.createElement(
              _nativeBase.View,
              { padder: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.mb25, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Item,
                  { underline: true, style: { borderBottomWidth: _reactNative.Platform.OS === 'ios' ? 1 : 1 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'mail-open', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    }
                  }),
                  _react2.default.createElement(_nativeBase.Input, {
                    placeholderTextColor: 'white',
                    placeholder: 'Email',
                    keyboardType: 'email-address',
                    onChangeText: _SignUpViewStore2.default.isSubmitted ? function (email) {
                      _SignUpViewStore2.default.email = email;

                      _SignUpViewStore2.default.validate();
                    } : function (email) {
                      _SignUpViewStore2.default.email = email;
                    },
                    value: _SignUpViewStore2.default.email,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    }
                  }),
                  showEmailError && _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'warning', style: { color: 'red' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67
                    }
                  })
                ),
                showEmailError && _SignUpViewStore2.default.validationErrors.email.map(function (err, index) {
                  return _react2.default.createElement(
                    _errorMsg2.default,
                    { key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      }
                    },
                    err
                  );
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.mb25, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Item,
                  { underline: true, style: { borderBottomWidth: _reactNative.Platform.OS === 'ios' ? 1 : 1 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'person', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 80
                    }
                  }),
                  _react2.default.createElement(_nativeBase.Input, {
                    placeholder: 'Name',
                    placeholderTextColor: 'white',
                    value: _SignUpViewStore2.default.name,
                    onChangeText: _SignUpViewStore2.default.isSubmitted ? function (name) {
                      _SignUpViewStore2.default.name = name;

                      _SignUpViewStore2.default.validate();
                    } : function (name) {
                      _SignUpViewStore2.default.name = name;
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 81
                    }
                  }),
                  showNameError && _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'warning', style: { color: 'red' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97
                    }
                  })
                ),
                showNameError && _SignUpViewStore2.default.validationErrors.name.map(function (err, index) {
                  return _react2.default.createElement(
                    _errorMsg2.default,
                    { key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      }
                    },
                    err
                  );
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.mb25, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Item,
                  { underline: true, style: { borderBottomWidth: _reactNative.Platform.OS === 'ios' ? 1 : 1 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 110
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'unlock', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  }),
                  _react2.default.createElement(_nativeBase.Input, {
                    placeholderTextColor: 'white',
                    placeholder: 'Password',
                    secureTextEntry: true,
                    onChangeText: _SignUpViewStore2.default.isSubmitted ? function (password) {
                      _SignUpViewStore2.default.password = password;

                      _SignUpViewStore2.default.validate();
                    } : function (password) {
                      _SignUpViewStore2.default.password = password;
                    },
                    value: _SignUpViewStore2.default.password,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112
                    }
                  }),
                  showPasswordError && _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'warning', style: { color: 'red' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 129
                    }
                  })
                ),
                showPasswordError && _SignUpViewStore2.default.validationErrors.password.map(function (err, index) {
                  return _react2.default.createElement(
                    _errorMsg2.default,
                    { key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 134
                      }
                    },
                    err
                  );
                })
              ),
              _react2.default.createElement(
                _nativeBase.View,
                { style: _styles2.default.mb25, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Item,
                  { underline: true, style: { borderBottomWidth: _reactNative.Platform.OS === 'ios' ? 1 : 1 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 141
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'unlock', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 142
                    }
                  }),
                  _react2.default.createElement(_nativeBase.Input, {
                    placeholder: 'Re-Type Password',
                    secureTextEntry: true,
                    placeholderTextColor: 'white',
                    onChangeText: _SignUpViewStore2.default.isSubmitted ? function (reTypePassword) {
                      _SignUpViewStore2.default.reTypePassword = reTypePassword;

                      _SignUpViewStore2.default.validate();
                    } : function (reTypePassword) {
                      _SignUpViewStore2.default.reTypePassword = reTypePassword;
                    },
                    value: _SignUpViewStore2.default.reTypePassword,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 143
                    }
                  }),
                  showReTypePasswordError && _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'warning', style: { color: 'red' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 160
                    }
                  })
                ),
                showReTypePasswordError && _SignUpViewStore2.default.validationErrors.reTypePassword.map(function (err, index) {
                  return _react2.default.createElement(
                    _errorMsg2.default,
                    { key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                      }
                    },
                    err
                  );
                })
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                {
                  rounded: true,
                  block: true,
                  style: { backgroundColor: '#fff', marginTop: 20 },
                  textStyle: { color: '#00c497' },
                  onPress: function onPress() {
                    return _SignUpViewStore2.default.submit();
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                  }
                },
                !_SignUpViewStore2.default.isSubmitting ? _react2.default.createElement(
                  _nativeBase.Text,
                  { style: { color: 'rgba(1,188,140,1)' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 179
                    }
                  },
                  'Save and Continue'
                ) : _react2.default.createElement(_nativeBase.Spinner, { color: 'rgba(1,188,140,1)', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                  }
                })
              )
            )
          )
        )
      );
    }
  }]);
  return SignUp;
}(_react.Component)) || _class;

exports.default = SignUp;