import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Header from './fragments/Header';

import Home from './components/Home';
import Stats from './components/Stats';

export default class App extends React.Component {
  render() {
    return (
        <Router>
            <Stack key="root">
                <Scene key="home" component={Home} navBar={Header} />
                <Scene key="stats" component={Stats} navBar={Header} />
            </Stack>
        </Router>
    );
  }
}
