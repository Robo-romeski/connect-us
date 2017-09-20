Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var React = require('react-native');
var StyleSheet = React.StyleSheet,
    Dimensions = React.Dimensions;


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

exports.default = {
  container: {
    right: _reactNative.Platform.OS === 'ios' ? -1.5 : -2,
    height: deviceHeight,
    marginTop: _reactNative.Platform.OS === 'ios' ? 0 : -10
  },
  shadow: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'transparent'

  },
  error: {
    marginTop: 0
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 2 - 15,
    backgroundColor: '#00c497',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: _reactNative.Platform.OS === 'ios' ? 70 : 50
  }
};