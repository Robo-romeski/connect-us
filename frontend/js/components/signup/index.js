import React, { Component } from 'react';
import { Image,Platform } from 'react-native';

import { Container, Header, Title, Content, Text, Button,Spinner, Icon, Item, Input,Left, Body, Right, View } from 'native-base';
import { observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';

import theme from '../../themes/base-theme';
import styles from './styles';
import AppViewStore from '../../stores/ViewStore/AppViewStore.js';
import SignUpViewStore from '../../stores/ViewStore/SignUpViewStore.js';
import ErrorMsg from '../errorMsg';

// import { observable, computed } from 'mobx';

const backgroundImage = require('../../../images/glow2.png');

@observer
class SignUp extends Component { // eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    const showErrors = !SignUpViewStore.isValid &&
                          SignUpViewStore.isSubmitted &&
                          SignUpViewStore.validationErrors;
    const showEmailError = showErrors && SignUpViewStore.validationErrors.email;
    const showNameError = showErrors && SignUpViewStore.validationErrors.name;
    const showPasswordError = showErrors && SignUpViewStore.validationErrors.password;
    const showReTypePasswordError = showErrors && SignUpViewStore.validationErrors.reTypePassword;
    return (
      <Container theme={theme} style={{ backgroundColor: 'rgba(65,75,85,1)' }}>
        <Image source={backgroundImage} style={styles.container} >
          <Header>
              <Left>
                <Button transparent onPress={() => Actions.pop()}>
                  <Icon name="arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
                </Button>
              </Left>
              <Body>
                <Title>Sign Up</Title>
              </Body>
              <Right />
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }} keyboardShouldPersistTaps="always">
            <View padder>

              <View style={styles.mb25}>
                <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 1 : 1 }}>
                  <Icon name="mail-open" />
                  <Input
                    placeholderTextColor="white"
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={
                    SignUpViewStore.isSubmitted
                    ?
                    (email) => {
                      SignUpViewStore.email = email;

                      SignUpViewStore.validate();
                    }
                    :
                    (email) => { SignUpViewStore.email = email; }
                  }
                    value={SignUpViewStore.email}
                  />
                  {showEmailError && <Icon active name="warning" style={{ color: 'red' }} />}
                </Item>
                {
                  showEmailError &&
                  SignUpViewStore.validationErrors.email.map((err, index) =>
                    <ErrorMsg key={index} >
                      {err}
                    </ErrorMsg>
                  )
                }
              </View>
              <View style={styles.mb25}>
                <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 1 : 1 }}>
                  <Icon active name="person" />
                  <Input
                    placeholder="Name"
                    placeholderTextColor="white"
                    value={SignUpViewStore.name}
                    onChangeText={
                    SignUpViewStore.isSubmitted
                    ?
                    (name) => {
                      SignUpViewStore.name = name;

                      SignUpViewStore.validate();
                    }
                    :
                    (name) => { SignUpViewStore.name = name; }
                  }
                  />
                  {showNameError && <Icon active name="warning" style={{ color: 'red' }} />}
                </Item>
                {
                  showNameError &&
                  SignUpViewStore.validationErrors.name.map((err, index) =>
                    <ErrorMsg key={index} >
                      {err}
                    </ErrorMsg>
                  )
                }
              </View>

              <View style={styles.mb25}>
                <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 1 : 1 }}>
                  <Icon name="unlock" />
                  <Input
                    placeholderTextColor="white"
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={
                        SignUpViewStore.isSubmitted
                        ?
                        (password) => {
                          SignUpViewStore.password = password;

                          SignUpViewStore.validate();
                        }
                        :
                        (password) => { SignUpViewStore.password = password; }
                      }
                    value={SignUpViewStore.password}
                  />
                  {showPasswordError && <Icon active name="warning" style={{ color: 'red' }} />}
                </Item>
                {
                  showPasswordError &&
                  SignUpViewStore.validationErrors.password.map((err, index) =>
                    <ErrorMsg key={index} >
                      {err}
                    </ErrorMsg>
                  )
                }
              </View>
              <View style={styles.mb25}>
                <Item underline style={{ borderBottomWidth:(Platform.OS === 'ios') ? 1 : 1 }}>
                  <Icon name="unlock" />
                  <Input
                    placeholder="Re-Type Password"
                    secureTextEntry
                    placeholderTextColor="white"
                    onChangeText={
                        SignUpViewStore.isSubmitted
                        ?
                        (reTypePassword) => {
                          SignUpViewStore.reTypePassword = reTypePassword;

                          SignUpViewStore.validate();
                        }
                        :
                        (reTypePassword) => { SignUpViewStore.reTypePassword = reTypePassword; }
                      }
                    value={SignUpViewStore.reTypePassword}
                  />
                  {showReTypePasswordError && <Icon active name="warning" style={{ color: 'red' }} />}
                </Item>
                {
                  showReTypePasswordError &&
                  SignUpViewStore.validationErrors.reTypePassword.map((err, index) =>
                    <ErrorMsg key={index} >
                      {err}
                    </ErrorMsg>
                  )
                }
              </View>

              <Button
                rounded
                block
                style={{ backgroundColor: '#fff', marginTop: 20 }}
                textStyle={{ color: '#00c497' }}
                onPress={() => SignUpViewStore.submit()}
              >
                {!SignUpViewStore.isSubmitting ? <Text style={{ color: 'rgba(1,188,140,1)' }}>Save and Continue</Text> : <Spinner color={'rgba(1,188,140,1)'} />}
              </Button>
            </View>
          </Content>
        </Image>
      </Container>
    );
  }
}

export default SignUp;
