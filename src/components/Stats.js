import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import BackgroundImage from '../fragments/BackgroundImage';

import * as Api from '../services/api';

export default class Stats extends React.Component {

  static get defaultProps() {
    return {
      username: '',
    }
  }

  state = {
    profile: null,
  }

  async componentDidMount() {
    let profile = await Api.getProfile(this.props.username);
    this.setState({ profile: profile });
  }

  render() {
    return (
      <BackgroundImage>
        <StatusBar barStyle="light-content" />
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
