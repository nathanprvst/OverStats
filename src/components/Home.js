import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';

import BackgroundImage from '../fragments/BackgroundImage';

export default class Home extends React.Component {
  constructor(){
      super()
      this.state = {
          username : 'Mahito-21973'
      }
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
  }

  handleChangeUsername(text) {
    this.setState({ username: text })
  }

  render() {
    return (
      <BackgroundImage>
        <StatusBar barStyle="light-content" />
        <View style={styles.main_view}>
          <Text style={[styles.main_text, {paddingBottom: 20}]}>
            Bienvenu sur Overstats, retrouvez les statistiques complets d'un joueur, en parties rapides et compétitives ainsi que de ses héros favoris.
          </Text>
          <Text style={styles.form}>
              <Text style={styles.main_text}>
                Renseigner votre battle tag (nomDuJoueur-xxxxx)
              </Text>
              <Text style={styles.second_text}> Overwatch </Text>
              <Text style={styles.main_text}>
                pour voir vos statistiques. Remplissez le champ ci-dessous :
              </Text>
          </Text>
          <Formik
            initialValues={{ username: '' }}
            onSubmit={values => console.log(values)}
          >
            {props => (
              <View>
                <TextInput
                  onChangeText={this.handleChangeUsername}
                  value={this.state.username}
                  style={styles.input}
                  placeholder="Nom d'utilisateur..."
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => Actions.overview({username: this.state.username})}
                  title="Submit"
                  style={styles.submit}
                >
                    <Text style={styles.submitText}>Rechercher</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
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
    height: '100%',
    margin: 20,
    padding: 20,
  },
  main_text: {
      color: '#FFF',
      fontSize: 20,
  },
  second_text: {
      color: '#DFAA35',
      fontWeight: 'bold',
      fontSize: 20,
  },
  form: {
    marginBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#DFAA35',
    fontSize: 18,
  },
  submit: {
    backgroundColor: '#494949',
    padding: 10,
    borderRadius: 20,
    fontSize: 12,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
  submitText: {
    textAlign: 'center',
    color: '#FFF',
  },
});
