import React from 'react';
import { Dimensions, ScrollView, FlatList, Modal, TouchableOpacity, StatusBar, StyleSheet, Text, View, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from "react-native-easy-grid";

import BackgroundImage from '../fragments/BackgroundImage';

import { _heroes } from '../services/content';
import * as Api from '../services/api';

export default class Overview extends React.Component {

  static get defaultProps() {
    return {
      username: '',
    }
  }

  state = {
    profile: null,
    loading: true,
    heroes: [],
  }

  componentDidMount = async () => {
    let heroes = [];
    let profile = await Api.getProfile(this.props.username);
    for (let hero of Object.keys(_heroes)) {
      heroes.push(_heroes[hero]);
    }
    this.setState({
        profile: profile,
        loading: false,
        heroes: heroes,
    });
  }

  render() {
    console.log(this.state.profile);
    let { heroes } = this.state;
    console.log({heroes});

    return (
      <BackgroundImage>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.main_view}>
            {!this.state.loading && (
                <React.Fragment>
                  {this.state.profile.error ? (
                    <Row style={{ height: 200 }}>
                        <Col>
                            <Text style={[styles.text_white, styles.text_center, {paddingTop: 30, paddingBottom: 30, fontSize: 20}]}>This Battle Tag doesn't exist</Text>
                            <TouchableOpacity
                              onPress={() => Actions.home()}
                              title="Submit"
                              style={styles.submit}
                            >
                              <Text style={[styles.text_white, styles.text_center]}>Effectuer une autre recherche</Text>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                  ) : (
                    <React.Fragment>
                      <Row style={{ height: 115 }}>
                          <Col>
                              <Image
                                style={[{ width: 100, height: 100 }, styles.img_center]}
                                source={{uri: this.state.profile.icon}}
                              />
                          </Col>
                      </Row>
                      <Text style={ styles.name_text }>{this.state.profile.name}</Text>
                      <Row style={{ padding: 5, height: 90, backgroundColor: '#1f1e1e' }}>
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
                      <Row style={{ paddingTop: 20, paddingBottom: 20, height: 80, backgroundColor: '#1A1A1A' }}>
                        <Col>
                          <TouchableOpacity
                            onPress={() => Actions.stats({quick: this.state.profile.quickPlayStats, competitive: this.state.profile.competitiveStats})}
                            title="Submit"
                            style={styles.submit}
                          >
                            <Text style={[styles.text_white, styles.text_center]}>Voir les statistiques complets</Text>
                          </TouchableOpacity>
                        </Col>
                      </Row>
                      <Row style={{paddingTop: 10, paddingBottom: 30, backgroundColor: '#1A1A1A'}}>
                        <FlatList
                          data={heroes}
                          showsVerticalScrollIndicator={false}
                          numColumns={5}
                          renderItem={({item}) =>
                            <React.Fragment>
                              <TouchableOpacity
                                onPress={() => Actions.heroInfos({ hero: item })}
                                style={{borderColor: '#FFF', borderWidth: 1}}
                              >
                                <Image
                                  style={{width: (Dimensions.get('window').width - 50) / 5, height: (Dimensions.get('window').width - 50) / 5}}
                                  source={{uri: item.icon}}
                                />
                              </TouchableOpacity>
                            </React.Fragment>
                          }
                          keyExtractor={item => item.icon}
                        />
                      </Row>
                    </React.Fragment>
                  )}
                </React.Fragment>
            )}
            {this.state.loading && (
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.loading}
              >
                <View style={{backgroundColor: '#2A2A2A', height: '100%'}}>
                  <View>
                    <Image source={require('../../assets/loader2.gif')} style={[{ width: 200, height: 200, marginTop: 300 }, styles.img_center]}/>
                  </View>
                </View>
              </Modal>
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
