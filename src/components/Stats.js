import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import MaterialTabs from 'react-native-material-tabs';
import { Actions } from 'react-native-router-flux';

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
    selectedTab: 0,
  }

  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

  componentDidMount() {}

  render() {
    const { selectedTab } = this.state;
    const data = selectedTab === 0 ? this.props.competitive : this.props.quick;

    if (this.props.quick.games && this.props.competitive.games) {
      return (
        <BackgroundImage>
          <StatusBar barStyle="light-content" />
          <MaterialTabs
            items={['Ranked', 'Quickplay']}
            selectedIndex={this.state.selectedTab}
            onChange={index => this.setState({ selectedTab: index })}
            barColor="#1f1e1e"
            indicatorColor="#DFAA35"
            activeTextColor="white"
          />
            <View style={styles.main_view}>
              <Text style={{ color: '#FFF', margin: 20, fontSize: 20 }}>{selectedTab === 0 ? 'Ranked Games' : 'Quick Games'}</Text>
              <Row style={{ padding: 5, height: 90, backgroundColor: '#1f1e1e' }}>
                <Col>
                    <Text style={[styles.text_center, styles.secondary_text]}>Played</Text>
                    <Text style={[styles.text_white, styles.text_center, styles.text]}>{data.games.played}</Text>
                </Col>
                <Col>
                    <Text style={[styles.text_center, styles.secondary_text]}>Wons</Text>
                    <Text style={[styles.text_white, styles.text_center, styles.text]}>{data.games.won}</Text>
                </Col>
                <Col>
                    <Text style={[styles.text_center, styles.secondary_text]}>Win rate</Text>
                    <Text style={[styles.text_white, styles.text_center, styles.text]}>{Math.round(data.games.won / data.games.played * 100)} %</Text>
                </Col>
              </Row>
              <Row style={{ height: 250 }}>
                <Col>
                  <Text style={{textAlign: 'center', fontSize: 18, marginTop: 15, color: '#FFF'}}>Awards</Text>
                  <Row style={{marginTop: 10}}>
                    <Col>
                      <Text style={{textAlign: 'center', fontSize: 15, marginTop: 15, color: '#DFAA35'}}>Cards</Text>
                      <Text style={{textAlign: 'center', fontSize: 15, marginTop: 15, color: '#DFAA35'}}>Medals</Text>
                      <Text style={{textAlign: 'center', fontSize: 13, marginTop: 15, color: '#DFAA35'}}>Golds</Text>
                      <Text style={{textAlign: 'center', fontSize: 13, marginTop: 15, color: '#DFAA35'}}>Silvers</Text>
                      <Text style={{textAlign: 'center', fontSize: 13, marginTop: 15, color: '#DFAA35'}}>Bronzes</Text>
                    </Col>
                    <Col>
                      <Text style={[styles.text_white, styles.text_center, styles.text]}>{data.awards.cards}</Text>
                      <Text style={[styles.text_white, styles.text_center, styles.text]}>{data.awards.medals}</Text>
                      <Text style={[styles.text_white, styles.text_center, styles.text]}>{data.awards.medalsGold}</Text>
                      <Text style={[styles.text_white, styles.text_center, styles.text]}>{data.awards.medalsSilver}</Text>
                      <Text style={[styles.text_white, styles.text_center, styles.text]}>{data.awards.medalsBronze}</Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Image
                    style={[{ width: '100%', height: '100%' }]}
                    source={require('../../assets/soldier.jpg')}
                  />
                </Col>
              </Row>
              <Row style={{padding: 10, height: 400, backgroundColor: '#1f1e1e'}}>
                <Col>
                    <Text style={[styles.text_white, styles.text_center, {fontSize: 18}]}>Top Heroes</Text>
                    <TouchableOpacity
                      onPress={() => Actions.topHeroes({topHeroes: this.props.competitive.topHeroes})}
                      title="Submit"
                      style={[styles.submit, {marginTop: 15}]}
                    >
                      <Text style={[styles.text_white, styles.text_center]}>Checkout top heroes stats</Text>
                    </TouchableOpacity>
                    <Text style={{color: '#FFF', fontSize: 11, textAlign: 'center', marginTop: 5}}>Available for ranked only</Text>
                </Col>
              </Row>
            </View>
        </BackgroundImage>
      );
    } else {
      return (
        <Row style={{ height: 200 }}>
            <Col>
                <Text style={[styles.text_white, styles.text_center, {paddingTop: 30, paddingBottom: 30, fontSize: 20}]}>No stats available</Text>
                <TouchableOpacity
                  onPress={() => Actions.home()}
                  title="Submit"
                  style={styles.submit}
                >
                  <Text style={[styles.text_white, styles.text_center]}>Effectuer une autre recherche</Text>
                </TouchableOpacity>
            </Col>
        </Row>
      );
    }
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
