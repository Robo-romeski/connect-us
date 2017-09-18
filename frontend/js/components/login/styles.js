
const React = require('react-native');
import { Platform } from 'react-native';
const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    right: (Platform.OS === 'ios') ? -1.5 : -2,
    height:deviceHeight,
    marginTop:(Platform.OS === 'ios') ? 0 : -10,
  },
  shadow: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'transparent',


  },
  error:{
    marginTop:0,
  },
  bg: {
    flex: 1,
    marginTop: (deviceHeight / 2) - 15,
    backgroundColor: '#00c497',
    paddingTop:10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: (Platform.OS === 'ios') ? 70 : 50,
  },
};
