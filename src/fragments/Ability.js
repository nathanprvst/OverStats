import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import AutoHeightImage from 'react-native-auto-height-image';

const Ability = ({ color, heroColor, data, type, border, showType }) => {
  return (
    <Row style={[border && { borderTopWidth: 2, borderTopColor: heroColor}, styles.container, { backgroundColor: color }]}>
      <Text style={[styles.name, { color: heroColor }]}>{data.name}</Text>
      {showType && (<Text style={styles.abilityType}>{type}</Text>)}
      <Row style={{ marginTop: 20}}>
        <Col style={{ flex: 1 }}>
          <AutoHeightImage
            width={70}
            source={{uri: data.icon}}
          />
        </Col>
        <Col style={{ flex: 2 }}>
          <Text style={styles.abilityText}>{data.text}</Text>
        </Col>
      </Row>
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    paddingBottom: 30,
  },
  name: {
    fontSize: 20,
  },
  abilityType: {
    color: '#FFF',
    fontSize: 11,
    fontStyle: 'italic',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  abilityText: {
    color: '#FFF',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'left',
  },
});

export default Ability;
