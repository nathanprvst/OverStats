import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Header from './fragments/Header';

import Home from './components/Home';
import Overview from './components/Overview';
import Stats from './components/Stats';
import TopHeroes from './components/TopHeroes';
import HeroInfos from './components/HeroInfos';

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
            backButtonTintColor="#FFF"
          />
          <Scene
            key="overview"
            component={Overview}
            renderTitle={Header}
            navigationBarStyle={styles.nav_bar}
            backButtonTintColor="#FFF"
            back
          />
          <Scene
            key="stats"
            component={Stats}
            renderTitle={Header}
            navigationBarStyle={styles.nav_bar}
            backButtonTintColor="#FFF"
            back
          />
          <Scene
            key="topHeroes"
            component={TopHeroes}
            renderTitle={Header}
            navigationBarStyle={styles.nav_bar}
            backButtonTintColor="#FFF"
            back
          />
          <Scene
            key="heroInfos"
            component={HeroInfos}
            renderTitle={Header}
            navigationBarStyle={styles.nav_bar}
            backButtonTintColor="#FFF"
            back
            initial={true}
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
