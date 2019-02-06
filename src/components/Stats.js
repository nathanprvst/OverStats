import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import BackgroundImage from '../fragments/BackgroundImage';

export default class Stats extends React.Component {

  render() {
    return (
      <BackgroundImage>
        <View style={styles.main_view}>
        <Grid style={styles.grid}>
            <Row>
                <Col style={{ width: 125 }}>
                <Image
                  style={{width: 110, height: 110}}
                  source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                </Col>
                <Col>
                    <Text style={styles.name_text}>{this.props.username}</Text>
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
      fontSize: 23,
      marginBottom: 15,
  },
});
