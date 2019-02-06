import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

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
    loading: true,
  }

  async componentDidMount() {
    let profile = await Api.getProfile(this.props.username);
    this.setState({
        profile: profile,
        loading: false
    });
  }

  render() {
    return (
      <BackgroundImage>
        <StatusBar barStyle="light-content" />
        <View style={styles.main_view}>
            {!this.state.loading && (
                <Grid style={styles.grid}>
                    <Row>
                        <Col style={{ width: 65 }}>
                        <Image
                          style={{width: 50, height: 50}}
                          source={{uri: this.state.profile.icon}}
                        />
                        </Col>
                        <Col>
                            <Text style={styles.name_text}>{this.state.profile.name}</Text>
                            <Row style={{ height: 35 }}>
                                <Col>
                                    <Image
                                      style={{width: 30, height: 30}}
                                      source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                    />
                                </Col>
                                <Col>
                                    <Image
                                      style={{width: 30, height: 30}}
                                      source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text>1290</Text>
                                </Col>
                                <Col>
                                    <Text>456</Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            )}
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
  },
  grid: {
    padding: 15,
  },
  name_text: {
      color: '#DFAA35',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 15,
  },
});
