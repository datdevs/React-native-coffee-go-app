import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	ImageBackground,
} from 'react-native';

import wallpaper_log from '../images/wallpaper_login.jpg';
import styles from '../styles/styles';

export default class Wallpaper extends Component {
	render() {
		return (
			<ImageBackground style={styles.wallpaper_log} source={wallpaper_log} blurRadius={5} >
				{this.props.children}
			</ImageBackground>
		);
	}
}
