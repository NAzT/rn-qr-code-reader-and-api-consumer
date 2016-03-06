'use strict';

var React = require('react-native');
var {View,
    Alert,
    Text, StyleSheet} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

class Home extends React.Component {

    onBarCodeRead() {
        if (this.state.qr_readed) return;
        else
            this.state.qr_readed = true;
            console.log("onBarCodeRead", arguments);
            Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {
                        text: 'OK', onPress: () => {
                        console.log('OK Pressed');
                        this.state.qr_readed = false
                    }
                    }

                ]
            );

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Replace screen</Text>
                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = Home;
