import React from 'react';
import { ScrollView, TouchableOpacity, StatusBar, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import MaterialTabs from 'react-native-material-tabs';
import { Actions } from 'react-native-router-flux';
import AutoHeightImage from 'react-native-auto-height-image';

import BackgroundImage from '../fragments/BackgroundImage';
import Ability from '../fragments/Ability';

import * as Api from '../services/api';
import { _heroes } from '../services/content';

export default class HeroInfos extends React.Component {

  static get defaultProps() {
    return {
      _hero: {},
    }
  }

  render() {
    let { _hero } = this.props;
    let hero = _heroes.dVa;
    console.log({hero});
    return (
      <BackgroundImage>
        <StatusBar barStyle="light-content" />
          <ScrollView style={styles.main_view}>
            <Row style={{alignItems: 'center', height: 102, borderBottomWidth: 2, borderBottomColor: '#DFAA35', backgroundColor: '#1A1A1A', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
              <Image
                style={[{ width: 100, height: 100 }]}
                source={{uri: hero.icon}}
              />
              <Text style={{ color: '#FFF', margin: 20, fontSize: 30, textTransform: 'capitalize' }}>{(hero.name).toUpperCase()}</Text>
            </Row>
            <Text style={{ color: '#DFAA35', marginTop: 20, marginLeft: 20, fontSize: 20 }}>Overview</Text>
            <Text style={{ color: '#FFF', margin: 20, marginBottom: 30, fontSize: 13 }}>{hero.overview}</Text>
            <Ability
              color='#1A1A1A'
              data={hero.weapon}
              type="Weapon"
              showType={true}
              border={true}
            />
            <Ability
              color='#2A2A2A'
              data={hero.passive}
              type="Passive Ability"
              showType={true}
              border={true}
            />
            <Ability
              color='#0A0A0A'
              data={hero.ability1}
              type="Abilities"
              showType={true}
              border={true}
            />
            <Ability
              color='#0A0A0A'
              data={hero.ability2}
              type="Abilities"
              showType={false}
              border={false}
            />
            <Ability
              color='#0A0A0A'
              data={hero.ability3}
              type="Abilities"
              showType={false}
              border={false}
            />
            <Ability
              color='#2A2A2A'
              data={hero.ultimate}
              type="Ultimate Ability"
              showType={true}
              border={true}
            />
          </ScrollView>
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
  text_left: {
    textAlign: 'left',
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
