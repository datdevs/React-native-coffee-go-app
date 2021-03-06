import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,Image,Animated,TouchableOpacity,TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native-animatable';

import Wallpaper from '../Wallpaper';
import Logo_coffee from '../../images/logo_coffee.png';
import styles from '../../styles/styles';

export default class SignUpScreen extends Component {

	state = {
		isFocused: false
	}

	render() {
    	const { isFocused } = this.state
		const borderColor = isFocused ? '#ff7a00' : '#ffffff'
		return (
			<View style={styles.containerMainActivity}>
				<Wallpaper>
					<View style={styles.containerMainScreen}>
						<Image source={Logo_coffee} style={styles.top_logo_cf_app} />
						<Text style={styles.bigText}>Sign Up For Free</Text>
						<View style={styles.LayoutComContainer}>
							<TextInput
								placeholder="Email"
								placeholderTextColor='white'
								underlineColorAndroid='transparent'
								returnKeyType='next'
								autoCapitalize={'none'}
								autoCorrect={false}
								keyboardType={'email-address'}
								maxLength={32}
								selectionColor={'white'}
								blurOnSubmit={false}
								style={[styles.input, { borderColor }]}
								onSubmitEditing = { () => this.inputnumber.focus() }
								onFocus={() => this.setState({ isFocused: true })}
								onBlur={() => this.setState({ isFocused: false })}/>
							<TextInput
								placeholder="Phone Number"
								placeholderTextColor='white'
								underlineColorAndroid='transparent'
								returnKeyType='next'
								autoCapitalize={'none'}
								autoCorrect={false}
								keyboardType={'phone-pad'}
								maxLength={32}
								selectionColor={'white'}
								blurOnSubmit={false}
								style={[styles.input, { borderColor }]}
								ref = { (input) => this.inputnumber = input }
								onSubmitEditing = { () => this.inputpassword.focus() }
								onFocus={() => this.setState({ isFocused: true })}
								onBlur={() => this.setState({ isFocused: false })}/>
							<TextInput
								placeholder="Password"
								placeholderTextColor='white'
								underlineColorAndroid='transparent'
								secureTextEntry
								returnKeyType='done'
								autoCapitalize={'none'}
								maxLength={32}
								selectionColor={'white'}
								ref = { (input) => this.inputpassword = input }
								style={[styles.input, { borderColor }]}
								onFocus={() => this.setState({ isFocused: true })}
								onBlur={() => this.setState({ isFocused: false })}/>
							<TouchableOpacity
								activeOpacity={0.7}
								style={styles.buttondsnew}
								onPress={() => Actions.mainscr()}
							>
								<Text style={styles.text_button}> Create Account </Text>
							</TouchableOpacity>
						</View>
						<Text style={styles.smallText}
							onPress={() => Actions.logscr()}
						>Already have an account ? Click here</Text>
					</View>
				</Wallpaper>
			</View>
		);
	}
}
