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
                    <Image source={thermometer} style={styles.backgroundImage}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#519af2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },


    backgroundImage: {
        flex: 1,
        resizeMode: 'contain', // or 'stretch'
    }

});

module.exports = Launch;