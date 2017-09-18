import React, { Component } from 'react';
import { Image, Platform, ScrollView } from 'react-native';
import { Container, Content, Text, InputGroup, Input, Button, Thumbnail, Icon, Item, View, Spinner } from 'native-base';
import { observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';

import login from './login-theme';
import styles from './styles';
import AppViewStore from '../../stores/ViewStore/AppViewStore.js';
import LoginViewStore from '../../stores/ViewStore/LoginViewStore.js';
import ErrorMsg from '../errorMsg';

const backgroundImage = require('../../../images/glow2.png');
const logo = require('../../../images/logo.png');

@observer
class Login extends Component { // eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    const showErrors = !LoginViewStore.isValid &&
                          LoginViewStore.isSubmitted &&
                          LoginViewStore.validationErrors;
    const showEmailError = showErrors && LoginViewStore.validationErrors.email;
    const showPasswordError = showErrors && LoginViewStore.validationErrors.password;

    return (
      <Container style={styles.container} >
        <Content keyboardShouldPersistTaps="always" style={{ backgroundColor: '#384850' }}>
          <Image square source={backgroundImage} style={styles.container}>
            <Image square source={logo} style={styles.shadow} >
              <View style={styles.bg}>
                <View style={{ flexGrow: 1, paddingBottom:10 }}>
                  <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 0.5 : 1 }}>
                    <Icon active name="person" />
                    <Input
                      placeholder="EMAIL"
                      placeholderTextColor="#FFF"
                      keyboardType="email-address"
                      onChangeText={
                        LoginViewStore.isSubmitted
                        ?
                        (email) => {
                          LoginViewStore.email = email;

                          LoginViewStore.validate();
                        }
                        :
                        (email) => { LoginViewStore.email = email; }
                      }
                      value={LoginViewStore.email}
                    />
                    {showEmailError && <Icon active name="warning" style={{ color: 'red' }} />}
                  </Item>
                  {
                    showEmailError &&
                    LoginViewStore.validationErrors.email.map((err, index) =>
                      <ErrorMsg key={index} style={styles.error}>
                        {err}
                      </ErrorMsg>
                    )
                  }
                </View>

                <View style={{ flexGrow: 1,marginTop:(Platform.OS === 'ios') ? -10: 10 }}>
                  <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 0.5 : 1 }}>
                    <Icon name="unlock" />
                    <Input
                      placeholder="PASSWORD"
                      placeholderTextColor="#FFF"
                      secureTextEntry
                      onChangeText={
                        LoginViewStore.isSubmitted
                        ?
                        (password) => {
                          LoginViewStore.password = password;

                          LoginViewStore.validate();
                        }
                        :
                        (password) => { LoginViewStore.password = password; }
                      }
                      value={LoginViewStore.password}
                    />
                    {showPasswordError && <Icon active name="warning" style={{ color: 'red' }} />}
                  </Item>
                  {
                    showPasswordError &&
                    LoginViewStore.validationErrors.password.map((err, index) =>
                      <ErrorMsg key={index}>
                        {err}
                      </ErrorMsg>
                    )
                  }
                </View>

                <Button
                  transparent
                  style={{ alignSelf: 'flex-end', marginBottom: (Platform.OS === 'ios') ? 5 : 5, marginTop: 5 }}
                >
                  <Text style={{ color:'#fff' }}>
                    Forgot Password
                  </Text>
                </Button>

                <Button
                  rounded
                  block
                  style={{ marginBottom: 5 }}
                  onPress={
                  () => {
                    LoginViewStore.submit();
                  }
                }
                >
                  {!LoginViewStore.isSubmitting ? <Text style={{ color: 'rgba(1,188,140,1)' }}>Log In</Text> : <Spinner color={'rgba(1,188,140,1)'} />}
                </Button>

                <Button
                  transparent
                  style={{ alignSelf: 'center' }}
                  onPress={() => Actions.signup()}
                >
                  <Text style={{ color:'#fff' }}>
                    Sign Up Here
                  </Text>
                </Button>
                </View>
            </Image>
          </Image>
          </Content>
      </Container>
    );
  }
}

export default Login;
