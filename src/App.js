import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Header from './fragments/Header';

import Home from './components/Home';
import Stats from './components/Stats';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="home"
            component={Home}
            renderTitle={Header}
            navigationBarStyle={styles.nav_bar}
            titleStyle={styles.title}
            initial={true}
          />
          <Scene
            key="stats"
            component={Stats}
            renderTitle={Header}
            navigationBarStyle={styles.nav_bar}
            backButtonTintColor="#FFF"
            back
          />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
    nav_bar: {
        backgroundColor: '#303030',
        height: 100
    }
})
