'use strict';
import React, {
    AppRegistry,
    Component,
    Dimensions,
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Camera from 'react-native-camera';

class BadInstagramCloneApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qr_readed: false
        }
    }


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
        )

    }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}

                    onBarCodeRead={this.onBarCodeRead.bind(this)}

                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
            </View>
        );
    }

    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});

AppRegistry.registerComponent('qr_reader', () => BadInstagramCloneApp);
