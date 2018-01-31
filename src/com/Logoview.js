import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
} from 'react-native';

import log_logo_app from '../images/app_login_logo.png';
import styles from '../styles/styles';

export default class Logoview extends Component {

	render() {
		return (
			<Image source={log_logo_app} style={styles.top_image_app} />
		);
	}
}
