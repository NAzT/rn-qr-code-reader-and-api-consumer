'use strict';

var React = require('react-native');
var {
    Image,
    View,
    Dimensions,
    Text,
    StyleSheet, TouchableHighlight} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;
var thermometer = require("../landing.png");
class Launch extends React.Component {

    componentDidMount() {
        //Actions.modalBox;
        //setTimeout()
        console.log("DID MOUNT");
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={thermometer} style={styles.backgroundImage}>
                </Image>
                <Button style={styles.button} onPress={Actions.register}>Go to Register page</Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fd7a9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },


    backgroundImage: {
        flex: 10,
        resizeMode: 'contain', // or 'stretch'
    },

    button: {
        backgroundColor: 'transparent',
        flex: 1
    }

});

module.exports = Launch;