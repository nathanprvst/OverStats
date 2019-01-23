import React from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import BackgroundImage from './fragments/BackgroundImage';
import Header from './fragments/Header';

export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage>
        <StatusBar barStyle='light-content' />
        <Header />
        <View style={styles.main_view}></View>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    fontFamily: 'Gotham-Medium',
    height: '100%',
    margin: 20,
    // marginBottom: 0,
  },
});
