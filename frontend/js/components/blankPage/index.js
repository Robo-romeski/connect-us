
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Header, Title, Content, Button, Thumbnail,Icon,Left,Body,Right } from 'native-base';
import theme from '../../themes/base-theme';
import styles from './styles';

import AppViewStore from '../../stores/ViewStore/AppViewStore.js';

const backgroundImage = require('../../../images/glow2.png');

class BlankPage extends Component { // eslint-disable-line

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
            <Title>Blank Page</Title>
            </Body>
            <Right />
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }} />
        </Thumbnail>
      </Container>
        );
  }
}

export default BlankPage;
