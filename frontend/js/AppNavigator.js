
import React, { Component } from 'react';
import { StatusBar, AsyncStorage, Platform } from 'react-native';
import { observer } from 'mobx-react/native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Drawer, Spinner, View } from 'native-base';
import Login from './components/login/';
import Home from './components/home/';
import BlankPage from './components/blankPage/';
import SideBar from './components/sideBar';
import Signup from './components/signup';
import { statusBarColor } from './themes/base-theme';
import AppViewStore from './stores/ViewStore/AppViewStore.js';
import AuthStore from './stores/EntityStore/AuthStore.js';
import AuthService from './services/AuthService.js';
import UserModel from './models/UserModel.js';

// const RouterWithRedux = connect()(Router);

const TOKEN_KEY = '@Token:key';

@observer
class AppNavigator extends Component {

  componentDidMount() {
    this._loadInitialState();
  }

  componentWillReact() {
    if (AppViewStore.drawerOpened) {
      this._drawer._root.open();
    } else {
      this._drawer._root.close();
    }
  }

  _loadInitialState() { // eslint-disable-line class-methods-use-this
    AppViewStore.appLoading = true;
    AsyncStorage.getItem(TOKEN_KEY)
          .then((responseToken) => {
            if (responseToken) {
              AuthService.getUser(responseToken)
                .then(response => response.json())
                .then((responseJson) => {
                  responseJson.data // eslint-disable-line no-param-reassign
                    .jwtAccessToken = responseToken;
                  if (responseJson.success === true) {
                    const userObj = new UserModel(responseJson.data);
                    AuthStore.setUser(userObj);
                    Actions.home();
                  }
                })
                .catch((error) => {
                  console.log('Error is: ', error);
                })
                .finally(() => {
                  AppViewStore.appLoading = false;
                });
            } else {
              AppViewStore.appLoading = false;
            }
          })
          .catch((error) => {
            console.log('Error in retreiving data', error);
          });
  }
  render() {
    console.log(AppViewStore.drawerOpened);
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        onClose={() => { AppViewStore.drawerOpened = false; }}
        type="overlay"
        content={<SideBar />}
        tapToClose
        acceptPan={false}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
      >
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="light-content"
        />
        {AppViewStore.appLoading ?
          <View style={{ flex: 1, backgroundColor: '#384850' }}>
            <Spinner style={{ flex: 1 }} />
          </View> :

          <Router>
            <Scene key="root">
              <Scene key="login" component={Login} hideNavBar initial={!(AuthStore.isLoggedIn) ? true : false} />
              <Scene key="signup" component={Signup} />
              <Scene key="sideBar" component={SideBar} />
              <Scene key="home" component={Home} hideNavBar initial={(AuthStore.isLoggedIn) ? true : false} />
              <Scene key="blankPage" component={BlankPage} />
            </Scene>
          </Router>}
      </Drawer>
    );
  }

}


export default AppNavigator;
