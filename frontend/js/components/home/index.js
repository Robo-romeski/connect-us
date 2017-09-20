import React, { Component } from 'react';
import { Container, Header, Title, Content, Button,Thumbnail, Icon, Text,Left, Body, Right, Footer, FooterTab, Card, CardItem, Badge } from 'native-base';
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
                   Welcome {AuthStore.user.email}!
                </Text>
              </View>
              <View style={{ marginTop: 20 }}>

              <Card>
                <CardItem>
                <Text>
                The Status Board
                </Text>
                </CardItem>
              </Card>
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
        <Footer>
                  <FooterTab>
                    <Button vertical>
                      <Icon name="apps" />
                      <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                      <Icon name="camera" />
                      <Text>Camera</Text>
                    </Button>
                    <Button vertical active>
                      <Icon active name="navigate" />
                      <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                      <Icon name="person" />
                      <Text>Contact</Text>
                    </Button>
                  </FooterTab>
                </Footer>
      </Container>
        );
  }
}

export default Home;
