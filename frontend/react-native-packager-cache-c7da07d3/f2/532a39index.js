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
      var person = {
        name: "Jerome O. Moore",
        address: "928 Elton St.",
        city: "Brooklyn",
        state: "New York",
        zipcode: 11208,
        phone: "(347)788-8436",
        employer: "RomeCode Inc.",
        position: "Design Specialist"
      };

      console.log(_AppViewStore2.default.drawerOpened);
      return _react2.default.createElement(
        _nativeBase.Container,
        { theme: _baseTheme2.default, style: { backgroundColor: '#384850' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        _react2.default.createElement(
          _nativeBase.Thumbnail,
          { square: true, source: backgroundImage, style: _styles2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          _react2.default.createElement(
            _nativeBase.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            _react2.default.createElement(
              _nativeBase.Left,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                },
                _react2.default.createElement(_nativeBase.Text, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  }
                })
              )
            ),
            _react2.default.createElement(
              _nativeBase.Body,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              _react2.default.createElement(
                _nativeBase.Title,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                },
                'Home'
              )
            ),
            _react2.default.createElement(
              _nativeBase.Right,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, onPress: function onPress() {
                    _AppViewStore2.default.drawerOpened = true;
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _nativeBase.Content,
            { style: { backgroundColor: 'transparent' }, padder: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              _react2.default.createElement(
                _nativeBase.Card,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                },
                _react2.default.createElement(
                  _nativeBase.CardItem,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    }
                  },
                  _react2.default.createElement(
                    _nativeBase.Left,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      }
                    },
                    _react2.default.createElement(_nativeBase.Thumbnail, { style: { paddingTop: '2%' },
                      source: { uri: 'http://via.placeholder.com/100x100' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                      }
                    }),
                    _react2.default.createElement(
                      _nativeBase.Body,
                      { style: { paddingLeft: '2%' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63
                        }
                      },
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.heading, note: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                          }
                        },
                        person.name
                      ),
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.heading, note: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                          }
                        },
                        person.employer
                      ),
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { style: _styles2.default.position, note: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                          }
                        },
                        person.position
                      ),
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { note: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                          }
                        },
                        person.address
                      ),
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { note: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                          }
                        },
                        person.city,
                        ', ',
                        person.state,
                        ' ',
                        person.zipcode
                      ),
                      _react2.default.createElement(
                        _nativeBase.Text,
                        { note: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                          }
                        },
                        person.phone
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _nativeBase.Button,
                    { style: _styles2.default.editCard, transparent: true, warning: true,
                      onPress: function onPress() {
                        _reactNativeRouterFlux.Actions.editCard();
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                      }
                    },
                    _react2.default.createElement(_nativeBase.Icon, { name: 'paper', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                      }
                    })
                  )
                )
              ),
              _react2.default.createElement(
                _nativeBase.Button,
                { transparent: true, style: _styles2.default.actionButton,
                  onPress: function onPress() {
                    _reactNativeRouterFlux.Actions.contacts();
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                  }
                },
                _react2.default.createElement(
                  _nativeBase.Text,
                  { style: _styles2.default.textOnBack, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 89
                    }
                  },
                  'Contacts'
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
              lineNumber: 96
            }
          },
          _react2.default.createElement(
            _nativeBase.FooterTab,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              }
            },
            _react2.default.createElement(
              _nativeBase.Button,
              { vertical: true,
                onPress: function onPress() {
                  _reactNativeRouterFlux.Actions.profiles();
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 98
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'contact', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                },
                'Profiles'
              )
            ),
            _react2.default.createElement(
              _nativeBase.Button,
              { vertical: true, active: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 107
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { active: true, name: 'navigate', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  }
                },
                'Local'
              )
            ),
            _react2.default.createElement(
              _nativeBase.Button,
              { vertical: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              _react2.default.createElement(_nativeBase.Icon, { name: 'settings', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              }),
              _react2.default.createElement(
                _nativeBase.Text,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                  }
                },
                'Settings'
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