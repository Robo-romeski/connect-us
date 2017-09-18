import * as Expo from 'expo';
import React, { Component } from 'react';
import { StyleProvider } from 'native-base';

import App from './App';
import getTheme from '../native-base-theme/components';
import variables from '../native-base-theme/variables/commonColor';

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isReady: false,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
          <App />
      </StyleProvider>
    );
  }
  }
