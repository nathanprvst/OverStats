import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Header = ({ icon }) => {
  return (
      <Text>
        <Text style={styles.title1}>Over</Text>
        <Text style={styles.title2}>Stats</Text>
      </Text>
  );
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 40,
    color: '#FFF',
    textAlign: 'center',
  },
  title2: {
    fontSize: 40,
    color: '#DFAA35',
    textAlign: 'center',
  },
});

export default Header;
