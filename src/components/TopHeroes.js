import React from 'react';
import { TouchableOpacity, StatusBar, StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import MaterialTabs from 'react-native-material-tabs';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import BackgroundImage from '../fragments/BackgroundImage';
import { _heroes } from '../services/content'

import * as Api from '../services/api';

export default class TopHeroes extends React.Component {

  static get defaultProps() {
    return {
      topHeroes: {},
    }
  }

  state = {
    heroes: [],
    loading: true,
  }

  heroesData = _heroes

  componentDidMount() {
    // console.log(this.heroesData);
    // console.log(this.props.topHeroes);
    let heroes = [];
    for (let hero of Object.keys(this.props.topHeroes)) {
      // console.log(hero);
      // console.log(this.heroesData[hero]);
      _.assign(this.props.topHeroes[hero], this.heroesData[hero]);
      let timePlayed = this.props.topHeroes[hero].timePlayed.split(':');
      let minutesInSeconds = parseInt(timePlayed[0]) * 60;
      let _timePlayedInSeconds = minutesInSeconds + parseInt(timePlayed[1]);
      _.assign(this.props.topHeroes[hero], {_timePlayedInSeconds});
      // console.log(this.props.topHeroes[hero]);
      heroes.push(this.props.topHeroes[hero]);
    }
    // console.log('teeest : ', heroes);
    let sortedHeroes = heroes.sort((a, b) => (a.timePlayed < b.timePlayed) ? 1 : ((b.timePlayed < a.timePlayed) ? -1 : 0));
    this.setState({heroes: sortedHeroes, loading: false});
  }

  getHeroPlayedTimeWidth(heroes, hero) {
    console.log({heroes, hero});
    let totalWidth = heroes.reduce((a, b) => a + b._timePlayedInSeconds, 0);
    let heroWidth = hero._timePlayedInSeconds;
    let finalWidth = heroWidth / (totalWidth !== 0 ? totalWidth : 1) * 100;
    console.log({totalWidth, heroWidth, finalWidth});
    return `${Math.round(finalWidth)}%`;
  }

  render() {
    let { heroes } = this.state;
    return (
      <BackgroundImage>
        <StatusBar barStyle="light-content" />
        <View style={styles.main_view}>
          <Text style={[styles.h2text, {marginLeft: 25}]}>
            Top Heroes
          </Text>
          {!this.state.loading && (
            <React.Fragment>
              <View style={{marginTop: 30, marginBottom: 20, height: 20}}>
                <Text style={[styles.legend, {position: 'absolute', left: 30}]}>Heroes</Text>
                <Text style={[styles.legend, {position: 'absolute', right: 60}]}>Played(in s)</Text>
                <Text style={[styles.legend, {position: 'absolute', right: 20}]}>%</Text>
              </View>
              <FlatList
                data={this.state.heroes}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                <React.Fragment>
                  <Row style={{ height: 60, backgroundColor: '#1f1e1e', alignItems: 'center'}}>
                    <Image
                      style={[{ width: 60, height: 60 }]}
                      source={{uri: item.icon}}
                    />
                    <View style={{width: this.getHeroPlayedTimeWidth(heroes, item), height: 60, backgroundColor: item.color}}></View>
                    <Text style={[styles.name, {textTransform: 'capitalize', position: 'absolute', left: 70}]}>{item.name}</Text>
                    <Text style={[styles.legend, {position: 'absolute', right: 80}]}>{item.timePlayed}</Text>
                    <Text style={[styles.legend, {position: 'absolute', right: 20}]}>{this.getHeroPlayedTimeWidth(heroes, item)}</Text>
                  </Row>
                </React.Fragment>
                }
                keyExtractor={item => item.name}
              />
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
  h2text: {
    marginTop: 10,
    fontSize: 28,
    color: '#DFAA35',
  },
  name: {
    fontSize: 18,
    color: '#FFF',
  },
  legend: {
    color: '#FFF',
  }
});
