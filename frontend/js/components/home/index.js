import React, { Component } from 'react';
import { Container, Header, Title, Content, Button,Thumbnail, Icon, Text,Left, Body, Right } from 'native-base';
import { Image, View, Platform, BackAndroid } from 'react-native';
import { observer } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';
import theme from '../../themes/base-theme';
import styles from './styles';
import AppViewStore from '../../stores/ViewStore/AppViewStore.js';
import AuthStore from '../../stores/EntityStore/AuthStore.js';

const backgroundImage = require('../../../images/glow2.png');


@observer
class Home extends Component { // eslint-disable-line

  componentDidMount() {
  BackAndroid.addEventListener('hardwareBackPress', () => {
   Actions.pop();
  });
  }
  render() { // eslint-disable-line class-methods-use-this

    console.log(AppViewStore.drawerOpened);
    return (
      <Container theme={theme} style={{ backgroundColor: '#384850' }}>
        <Thumbnail square source={backgroundImage} style={styles.container} >
          <Header>
              <Left>
                <Button transparent>
                  <Text />
                </Button>
              </Left>
              <Body>
                 <Title>Dashboard</Title>
              </Body>
              <Right>
                <Button transparent onPress={() => { AppViewStore.drawerOpened = true; }}>
                  <Icon active name="menu" />
                </Button>
              </Right>
          </Header>

          <Content style={{ backgroundColor: 'transparent' }} padder>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Text>
                   User email: {AuthStore.user.email}
                </Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Button
                  transparent
                  large
                  style={styles.roundedButton}
                  onPress={() => AuthStore.unsetUser()}
                >
                  <Icon name="close" style={{ fontSize: (Platform.OS === 'ios') ? 50 : 40, color: '#fff' }} />
                </Button>
              </View>
            </View>
          </Content>
        </Thumbnail>
      </Container>
        );
  }
}

export default Home;
