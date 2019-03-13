import React from 'react';
import { TouchableOpacity, StatusBar, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import BackgroundImage from '../fragments/BackgroundImage';

import * as Api from '../services/api';

export default class Stats extends React.Component {

  static get defaultProps() {
    return {
      quick: {},
      competitive: {},
    }
  }

  state = {
    panel: 0,
  }

  componentDidMount() {}

  render() {
    console.log('quick : ', this.props.quick);
    console.log('competitive : ', this.props.competitive);
    return (
      <BackgroundImage>
        <StatusBar barStyle="light-content" />
        <View style={styles.main_view}>
            {!this.state.loading && (
                <React.Fragment>
                  <Text style={{ color: '#FFF', margin: 20, fontSize: 20 }}>Ranked Mode</Text>
                  <Row style={{ padding: 5, height: 90, backgroundColor: '#1f1e1e' }}>
                    <Col>
                        <Text style={[styles.text_center, styles.secondary_text]}>Jouées</Text>
                        <Text style={[styles.text_white, styles.text_center, styles.text]}>{this.props.competitive.games.played}</Text>
                    </Col>
                    <Col>
                        <Text style={[styles.text_center, styles.secondary_text]}>Gagnées</Text>
                        <Text style={[styles.text_white, styles.text_center, styles.text]}>{this.props.competitive.games.won}</Text>
                    </Col>
                    <Col>
                        <Text style={[styles.text_center, styles.secondary_text]}>Win rate</Text>
                        <Text style={[styles.text_white, styles.text_center, styles.text]}>{Math.round(this.props.competitive.games.won / this.props.competitive.games.played * 100)} %</Text>
                    </Col>
                  </Row>
                </React.Fragment>
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
  },
  submit: {
    backgroundColor: '#494949',
    padding: 10,
    borderRadius: 20,
    fontSize: 12,
    marginLeft: 20,
    marginRight: 20,
  },
});
