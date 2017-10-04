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
    let person = {
      name: "Jerome O. Moore",
      address: "928 Elton St.",
      city: "Brooklyn",
      state: "New York",
      zipcode: 11208,
      phone: "(347)788-8436",
      employer: "RomeCode Inc.",
      position: "Design Specialist"
    };

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
                 <Title>Home</Title>
              </Body>
              <Right>
                <Button transparent onPress={() => { AppViewStore.drawerOpened = true; }}>
                  <Icon active name="menu" />
                </Button>
              </Right>
          </Header>

          <Content style={{ backgroundColor: 'transparent' }} padder>

              <View>
              <Card>
            <CardItem>
              <Left>
                <Thumbnail style={{paddingTop: '2%'}}
                source={{uri: 'http://via.placeholder.com/100x100'}} />

                <Body style={{paddingLeft:'2%'}}>
                  <Text style={styles.heading} note>{person.name}</Text>
                  <Text style={styles.heading} note>{person.employer}</Text>
                  <Text style={styles.position} note>{person.position}</Text>
                  <Text note>{person.address}</Text>
                  <Text note>{person.city}, {person.state} {person.zipcode}</Text>
                  <Text note>{person.phone}</Text>
                </Body>
              </Left>
              <Button style={styles.editCard} transparent warning
              onPress={
                () => {
                  Actions.editCard();
                }
              }>
              <Icon name="paper"/>
              </Button>
            </CardItem>
            </Card>

            <Button transparent style={styles.actionButton}
            onPress={
              () => {
              Actions.contacts();
              }
            }>
            <Text style={styles.textOnBack}>Contacts</Text>
            </Button>

              </View>

          </Content>
        </Thumbnail>
        <Footer>
                  <FooterTab>
                    <Button vertical
                    onPress={
                      () => {
                        Actions.profiles();
                      }
                    }>
                      <Icon name="contact" />
                      <Text>Profiles</Text>
                    </Button>
                    <Button vertical active>
                      <Icon active name="navigate" />
                      <Text>Local</Text>
                    </Button>
                    <Button vertical>
                      <Icon name="settings" />
                      <Text>Settings</Text>
                    </Button>
                  </FooterTab>
                </Footer>
      </Container>
        );
  }
}

export default Home;
