import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import BackgroundImage from '../fragments/BackgroundImage';

export default class Stats extends React.Component {
  render() {
    return (
      <BackgroundImage>
        <StatusBar barStyle='light-content' />
        <View style={styles.main_view}>
            <Button
              title="Accueil"
              onPress={() => Actions.home()}
            />
        </View>
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
