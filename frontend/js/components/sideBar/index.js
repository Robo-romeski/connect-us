
import React, { Component } from 'react';
import { Text, Icon, List, ListItem, Content, Thumbnail ,Left, Body,Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './style';

import AppViewStore from '../../stores/ViewStore/AppViewStore.js';

import AuthStore from '../../stores/EntityStore/AuthStore.js';

const logo = require('../../../images/icon2.png');

class SideBar extends Component { // eslint-disable-line
  render() { // eslint-disable-line class-methods-use-this
    return (
      <Content style={{ backgroundColor: '#252A30' }} >
        <Thumbnail  style={{ alignSelf: 'center', width: 200, height: 200, marginTop: 20, marginBottom: 15, resizeMode: 'contain' }} circular source={logo} />
          <ListItem
            button
            onPress={
              () => {
                AppViewStore.drawerOpened = false;
                if (AppViewStore.routeStack2[AppViewStore.routeStack2.length - 1].key !== 'home') {
                  Actions.home();
                }
              }
            }
            icon style={styles.links}
          >
            <Left>
             <Icon active name="home" />
            </Left>
            <Body>
              <Text >Home</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem
            button
            onPress={
              () => {
                AppViewStore.drawerOpened = false;
                Actions.blankPage();
              }
            }
            icon style={styles.links}
          >
            <Left>
               <Icon active name="chatboxes" />
            </Left>
            <Body>
               <Text>Blank Page</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem
            button
            onPress={
              () => {
                AppViewStore.drawerOpened = false;
                AuthStore.unsetUser();
              }
            }
            icon style={styles.links}
          >
            <Left>
               <Icon active name="exit" />
            </Left>
            <Body>
               <Text>Log Out</Text>
            </Body>
            <Right />
          </ListItem>
      </Content>
    );
  }
}

export default SideBar;
