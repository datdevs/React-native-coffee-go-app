/**
 * Assignment React Native
 * FPT Polytechnic
 * https://github.com/datdevs
 */

import React, { Component } from 'react';
import { Router, Scene} from 'react-native-router-flux';

import MainScreen from './src/com/Screen/MainScreen';
import HomeScreen from './src/com/Screen/HomeScreen';
import LogScreen from './src/com/Screen/LogScreen';
import SignupScreen from './src/com/Screen/SignupScreen';
import styles from './src/styles/styles';


export default class MainActivity extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="mainscr"
            component={MainScreen}
            animation='fade'
            hideNavBar={true}
            initial={true}
          />
          <Scene key="homescr"
            component={HomeScreen}
            animation='fade'
            hideNavBar={true}
          />
          <Scene key="logscr"
            component={LogScreen}
            animation='fade'
            hideNavBar={true}
          />
          <Scene key="signupscr"
            component={SignupScreen}
            animation='fade'
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}
