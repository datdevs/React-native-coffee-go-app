import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,Image,Animated,TouchableOpacity} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { View, Text } from 'react-native-animatable';

import Wallpaper from '../Wallpaper';
import Logoview from '../Logoview';
import styles from '../../styles/styles';

export default class MainScreen extends Component {

	render() {
		return (
			<View style={styles.containerMainActivity}>
				<Wallpaper>
				<View style={styles.containerMainScreen}>
					<Logoview/>
					<View style={styles.LayoutButtonContainer}>
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.buttonds}
							onPress={() => Actions.signupscr()}
						>
							<Text style={styles.text_button}> Sign Up </Text>
						</TouchableOpacity>
						<Text style={styles.main_text}>- Or -</Text>
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.buttonds}
							onPress={() => Actions.logscr()}
						>
							<Text style={styles.text_button}> Log In </Text>
						</TouchableOpacity>
					</View>
				</View>
				<Text style={styles.ver_text}> Version 0.1 beta </Text>
				</Wallpaper>
			</View>
		);
	}
}
