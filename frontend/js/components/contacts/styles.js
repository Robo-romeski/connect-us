
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default{
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  roundedButton: {
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#00c497',
    borderRadius: 90,
    width: 65,
    height: 65,
    justifyContent:'center',
  },
  editCard: {
    borderRadius: 90,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  actionButton: {
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: 'transparent',
    borderRadius: 9,
    width: '100%',
    height: 65,
    justifyContent:'center',
  },
  name: {
    color: 'red',
  },
  text: {
    marginBottom: 0,
    color: 'black',
    height: 175,
  },
  hunnit: {
    height: deviceHeight - 150,
    alignItems: 'center',
  },
  heading: {
    paddingBottom: '2%',
    fontWeight: 'bold',
  },
  position: {
    fontStyle: 'italic',
  },
  textOnBack: {
    color: 'white',
  }
};
