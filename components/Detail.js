'use strict';

var React = require('react-native');
var {View,
    Image,
    Text, StyleSheet} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image source={require("../landing.png")} style={styles.backgroundImage}>
                        <Button style={styles.button} onPress={Actions.appDetail}> </Button>
                    </Image>
                </View>

                <View style={styles.bottom}>
                    <View>
                        <View></View>
                        <View></View>

                    </View>

                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
    },

    top: {
        alignSelf: 'center',
        height: 200,
        justifyContent: 'center',
        backgroundColor: 'blue',
    },

    backgroundImage: {
        resizeMode: 'contain',
        flex: 1,
    },

    bottom: {
        flex: 2,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'red',
    },
});


module.exports = Login;