import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import BackgroundImage from '../fragments/BackgroundImage';

export default class Stats extends React.Component {

  render() {
    return (
      <BackgroundImage>
        <View style={styles.main_view}>
            <Button
              title="Accueil"
              onPress={() => Actions.home()}
            />
            <Text>
                {this.props.username}
            </Text>
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
    margin: 20
  }
});
