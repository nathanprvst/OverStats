import React from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import BackgroundImage from './fragments/BackgroundImage';
import Header from './fragments/Header';

export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Header />
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    fontFamily: 'Gotham-Medium'
  },
});
