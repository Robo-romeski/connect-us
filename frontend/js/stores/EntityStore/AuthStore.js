import { AsyncStorage } from 'react-native';
import { observable, computed } from 'mobx';
import { Actions, ActionConst } from 'react-native-router-flux';

import AppViewStore from '../ViewStore/AppViewStore.js';

const TOKEN_KEY = '@Token:key';

class AuthStore {
  @observable user;
  // @observable isClickedLogOut=false;
  @computed get isLoggedIn() {
    return this.user;
  }
  //  methods
  setUser(user) {
    this.user = user;
    // AppViewStore.isAppLoading=true;
   
  }

  unsetUser() {
    Actions.login({type: ActionConst.RESET});
    AsyncStorage.removeItem(TOKEN_KEY)
    .then(() => {
      console.log('Data Removed');
    })
    .catch((error) => {
      console.log('Error in removing data: ', error);
    });
    // AppViewStore.isAppLoading=false;
  }

}

export default new AuthStore();
