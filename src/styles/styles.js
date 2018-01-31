import { StyleSheet } from 'react-native';
import metrics from '../config/metrics';

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8
const styles = StyleSheet.create({
    containerMainActivity: {
        flex: 1,
    },

    //Main Screen
    containerMainScreen: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    wallpaper_log: {
        flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
	},
	top_image_app: {
        height: IMAGE_WIDTH,
		width: IMAGE_WIDTH,
	},
	main_text: {
		color: 'white',
        fontFamily: 'Roboto-ThinItalic',
        fontSize: 18,
	},
	LayoutButtonContainer: {
		flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        //marginTop: 30
	},
	buttonds: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderWidth: 0.4,
        borderColor: 'white',
        marginVertical: 18,
        height: 52,
        width: metrics.DEVICE_WIDTH - 142
    },
    text_button: {
        fontFamily: 'Roboto-Thin',
        fontSize: 20,
        color: 'white'
    },
    ver_text: {
		color: 'white',
        fontFamily: 'Roboto-LightItalic',
        fontSize: 14,
        alignSelf: 'center',
        marginBottom: 15
	},

    //SignUp Screen
    input: {
        width: metrics.DEVICE_WIDTH - 142,
        color: '#ffffff',
        fontFamily: 'Roboto-Thin',
        paddingHorizontal: 12,
        fontSize: 17,
        borderWidth: 0.4,
        marginVertical: 10
    },
    LayoutComContainer:{
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginTop: 30,
    },
    top_logo_cf_app: {
        height: IMAGE_WIDTH*378/512,
        width: IMAGE_WIDTH,
    },
    bigText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 32,
    },
    smallText: {
        color: 'white',
        fontFamily: 'Roboto-LightItalic',
        fontSize: 16,
    },
    buttondsnew: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#794B24',
        borderWidth: 0.4,
        borderColor: 'white',
        marginVertical: 18,
        height: 52,
        width: metrics.DEVICE_WIDTH - 142
    },
    smallText2: {
        color: 'white',
        fontFamily: 'Roboto-LightItalic',
        fontSize: 16,
        alignSelf:'flex-end',
    },

});

export default styles;