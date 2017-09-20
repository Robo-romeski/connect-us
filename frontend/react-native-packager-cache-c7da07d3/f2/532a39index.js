Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class,
    _jsxFileName = '/Users/controltower/Projects/kunexxus/frontend/js/components/home/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var _reactNative = require('react-native');

var _native = require('mobx-react/native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _baseTheme = require('../../themes/base-theme');

var _baseTheme2 = babelHelpers.interopRequireDefault(_baseTheme);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var _AppViewStore = require('../../stores/ViewStore/AppViewStore.js');

var _AppViewStore2 = babelHelpers.interopRequireDefault(_AppViewStore);

var _AuthStore = require('../../stores/EntityStore/AuthStore.js');

var _AuthStore2 = babelHelpers.interopRequireDefault(_AuthStore);

var backgroundImage = require('../../../images/glow2.png');

var Home = (0, _native.observer)(_class = function (_Component) {
  babelHelpers.inherits(Home, _Component);

  function Home() {
    babelHelpers.classCallCheck(this, Home);
    return babelHelpers.possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  babelHelpers.createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactNative.BackAndroid.addEventListener('hardwareBackPress', function () {
        _reactNativeRouterFlux.Actions.pop();
      });
    }
  }, {
    key: 'render',
    value: function render() {

      console.log(_AppViewStore2.default.drawerOpened);
      return _react2.default.createElement(
        _nativeBase.Container,
        { theme: _baseTheme2.default, style: { backgroundColor: '#384850' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        _react2.default.createElement(
          _nativeBase.Thumbnail,
          { square: true, source: backgroundImage, style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          _react2.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
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
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  }
                },
                _react2.default.createElement(_nativeBase.Text, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                })
              )
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
                _nativeBase.Title,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                'Dashboard'
              )
            ),
            _react2.default.createElement(
              _nativeBase.Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    _AppViewStore2.default.drawerOpened = true;
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _nativeBase.Content,
            { style: { backgroundColor: 'transparent' }, padder: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: { flex: 1, justifyContent: 'center', alignItems: 'center' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    }
                  },
                  'Welcome ',
                  _AuthStore2.default.user.email,
                  '!'
                )
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: { marginTop: 20 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Card,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.CardItem,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                      }
                    },
                    _react2.default.createElement(
                      _nativeBase.Text,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 55
                        }
                      },
                      'The Status Board'
                    )
                  )
                ),
                _react2.default.createElement(
                  _nativeBase.Button,
                  {
                    transparent: true,
                    large: true,
                    style: _styles2.default.roundedButton,
                    onPress: function onPress() {
                      return _AuthStore2.default.unsetUser();
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    }
                  },
                  _react2.default.createElement(_nativeBase.Icon, { name: 'close', style: { fontSize: _reactNative.Platform.OS === 'ios' ? 50 : 40, color: '#fff' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    }
                  })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _nativeBase.Footer,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          },
          _react2.default.createElement(
            _nativeBase.FooterTab,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { vertical: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'apps', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                'Apps'
              )
            ),
            _react2.default.createElement(
              _nativeBase.Button,
              { vertical: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'camera', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  }
                },
                'Camera'
              )
            ),
            _react2.default.createElement(
              _nativeBase.Button,
              { vertical: true, active: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'navigate', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                },
                'Navigate'
              )
            ),
            _react2.default.createElement(
              _nativeBase.Button,
              { vertical: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'person', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  }
                },
                'Contact'
              )
            )
          )
        )
      );
    }
  }]);
  return Home;
}(_react.Component)) || _class;

exports.default = Home;