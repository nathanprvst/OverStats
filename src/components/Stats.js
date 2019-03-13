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

  componentDidMount = async () => {
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
                    <Row style={{ height: 115 }}>
                        <Col>
                            <Image
                              style={[{ width: 100, height: 100 }, styles.img_center]}
                              source={{uri: this.state.profile.icon}}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Text style={ styles.name_text }>{this.state.profile.name}</Text>
                            <Row style={{ padding: 5, height: 90, backgroundColor: '#1f1e1e', marginLeft: -15, marginRight: -15 }}>
                                <Col>
                                    <Image
                                      style={[{ width: 50, height: 50 }, styles.img_center]}
                                      source={{uri: this.state.profile.ratingIcon}}
                                    />
                                    <Text style={[styles.text_white, styles.text_center]}>{this.state.profile.rating}</Text>
                                </Col>
                                <Col>
                                    <Text style={[styles.text_center, styles.secondary_text]}>Level</Text>
                                    <Text style={[styles.text_white, styles.text_center, styles.text]}>{this.state.profile.level}</Text>
                                </Col>
                                <Col>
                                    <Text style={[styles.text_center, styles.secondary_text]}>Prestige</Text>
                                    <Text style={[styles.text_white, styles.text_center, styles.text]}>{this.state.profile.prestige}</Text>
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
      textAlign: 'center',
  },
  secondary_text: {
    fontSize: 16,
    color: '#DFAA35',
    marginTop: 16,
  },
  text_white: {
    color: '#FFF',
  },
  text_center: {
    textAlign: 'center',
  },
  img_center: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
      marginTop: 15,
  }
});
