
import React, { Component } from 'react';
import { Image, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Header, Title, Content, Button, Thumbnail,Icon,Left,Body,Right, List, ListItem, Text } from 'native-base';
import theme from '../../themes/base-theme';
import styles from './styles';

const personas = [
  'Benjamin Blanco',
  'Terry Crews',
  'Ray Donovan',
  'Jessie Teague',
  'Fredrick Grey',
  'Derrick FoReal',
  'Patrick Peterson',
  'Delvin Cook',
  'Art Shell',
  'Patty Mills'
];

import AppViewStore from '../../stores/ViewStore/AppViewStore.js';

const backgroundImage = require('../../../images/glow2.png');

class Contacts extends Component { // eslint-disable-line

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container theme={theme} style={{ backgroundColor: '#384850' }}>
        <Thumbnail square source={backgroundImage} style={styles.container} >
          <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
            <Body>
            <Title>Contacts</Title>
            </Body>
            <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
          </Header>
            <Content>
              <List dataArray={personas}
                renderRow={(item) =>
                  <ListItem>
                    <Text>{item}</Text>
                  </ListItem>
                }>
              </List>
            </Content>


        </Thumbnail>
      </Container>
        );
  }
}

export default Contacts;
