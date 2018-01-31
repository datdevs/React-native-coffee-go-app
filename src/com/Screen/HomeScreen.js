import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import log_logo_app from '../../images/app_login_logo.png';

export default class LogScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={log_logo_app} style={styles.image} />
				<Text style={styles.text}>MAP STORE</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
	}
});
