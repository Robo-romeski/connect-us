import { observable } from 'mobx';
import { AsyncStorage } from 'react-native';
import validate from 'validate.js';
import { Actions } from 'react-native-router-flux';

import AuthService from '../../services/AuthService.js';
//import AppViewStore from './AppViewStore.js';
import UserModel from '../../models/UserModel.js';
import AuthStore from '../EntityStore/AuthStore.js';

const TOKEN_KEY = '@Token:key';

class EditCardViewStore {
  @observable name;
  @observable email;

  @observable isSubmitted=false;
  @observable isSubmitting=false;
  @observable isValid;
  @observable apiSuccess;
  @observable apiErrors;
  @observable validationErrors;

  constraints = {
    email: {
      presence: true,
      email: true,
    },
    name: {
      presence: true,
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        message: 'must be at least 6 characters',
      },
    },
    reTypePassword: {
      presence: true,
      equality: 'password',
    },
  };

  // methods
  validate() {
    this.validationErrors = validate({
      email: this.email,
      name: this.name,
      password: this.password,
      reTypePassword: this.reTypePassword,
    }, this.constraints);
    this.isValid = !this.validationErrors;
  }
  submit() {
    this.isSubmitted = true;
    this.isSubmitting = true;

    this.validate();

    if (this.isValid === true) {
      AuthService.signup(this.email, this.password)
      .then(response => response.json())
      .then((responseJson) => {
        console.log('returned response is: ', responseJson);
        console.log(`JWT token: ...${responseJson.data}`);

        if (responseJson.success === true) {
          this.apiSuccess = responseJson;

          const userObj = new UserModel(this.apiSuccess.data);
          AuthStore.setUser(userObj);

          // AppViewStore.isAsyncCallMade=true;
          AsyncStorage.setItem(TOKEN_KEY, AuthStore.user.token)
          .then(() => {
            console.log('Successfully added data ');
          })
         .catch((error) => {
           console.log('Failed with error', error);
         });

          Actions.home();
          this.isSubmitting = false;
          this.email = this.password = this.name = this.reTypePassword = '';
        } else {
          this.apiErrors = responseJson;
          alert(this.apiErrors.message);
        }
      })
      .catch((error) => {
        console.log('Error is: ', error);
      })
      .finally(
        () => {
          this.isSubmitting = false;
          // AppViewStore.isAsyncCallMade=false;
        }
      );
    } else {
      this.isSubmitting = false;
    }
  }
}

export default new EditCardViewStore();
