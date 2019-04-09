import React from 'react';
import { ScrollView, TouchableOpacity, StatusBar, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import MaterialTabs from 'react-native-material-tabs';
import { Actions } from 'react-native-router-flux';
import AutoHeightImage from 'react-native-auto-height-image';

import BackgroundImage from '../fragments/BackgroundImage';
import Ability from '../fragments/Ability';

import * as Api from '../services/api';
import { heroes } from '../services/content';

export default class HeroInfos extends React.Component {

  static get defaultProps() {
    return {
      hero: {},
    }
  }

  render() {
    let { hero } = this.props;
    return (
      <BackgroundImage>
        <StatusBar barStyle="light-content" />
          <ScrollView style={styles.main_view}>
            <Row style={{alignItems: 'center', height: 102, borderBottomWidth: 2, borderBottomColor: hero.color, backgroundColor: hero.color, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
              <Image
                style={[{ width: 100, height: 100 }]}
                source={{uri: hero.icon}}
              />
              <Text style={{ color: '#FFF', margin: 20, fontSize: 30, textTransform: 'capitalize' }}>{(hero.name).toUpperCase()}</Text>
            </Row>
            <Text style={{ color: hero.color, marginTop: 20, marginLeft: 20, fontSize: 20 }}>Overview</Text>
            <Text style={{ color: '#FFF', margin: 20, marginBottom: 30, fontSize: 13 }}>{hero.overview}</Text>
            <Ability
              color='#1A1A1A'
              heroColor={hero.color}
              data={hero.weapon}
              type="Weapons"
              showType={true}
              border={true}
            />
            {hero.weapon2 && (
              <Ability
                color='#1A1A1A'
                heroColor={hero.color}
                data={hero.weapon2}
                type="Weapons"
                showType={false}
                border={false}
              />
            )}
            {hero.passive && (
              <Ability
                color='#2A2A2A'
                heroColor={hero.color}
                data={hero.passive}
                type="Passive Abilities"
                showType={true}
                border={true}
              />
            )}
            {hero.passive2 && (
              <Ability
                color='#2A2A2A'
                heroColor={hero.color}
                data={hero.passive2}
                type="Passive Abilities"
                showType={false}
                border={false}
              />
            )}
            {hero.ability1 && (
              <Ability
                color='#0A0A0A'
                heroColor={hero.color}
                data={hero.ability1}
                type="Abilities"
                showType={true}
                border={true}
              />
            )}
            {hero.ability2 && (
              <Ability
                color='#0A0A0A'
                heroColor={hero.color}
                data={hero.ability2}
                type="Abilities"
                showType={false}
                border={false}
              />
            )}
            {hero.ability3 && (
              <Ability
                color='#0A0A0A'
                heroColor={hero.color}
                data={hero.ability3}
                type="Abilities"
                showType={false}
                border={false}
              />
            )}
            {hero.ability4 && (
              <Ability
                color='#0A0A0A'
                heroColor={hero.color}
                data={hero.ability4}
                type="Abilities"
                showType={false}
                border={false}
              />
            )}
            {hero.ultimate && (
              <Ability
                color='#2A2A2A'
                heroColor={hero.color}
                data={hero.ultimate}
                type="Ultimate Abilities"
                showType={true}
                border={true}
              />
            )}
            {hero.ultimate2 && (
              <Ability
                color='#2A2A2A'
                heroColor={hero.color}
                data={hero.ultimate2}
                type="Ultimate Abilities"
                showType={false}
                border={false}
              />
            )}
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
