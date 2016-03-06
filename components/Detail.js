'use strict';

var React = require('react-native');
var {View,
    Image,
    Text, StyleSheet} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

class Login extends React.Component {

    constructor() {
        super();
    }


    componentWillMount() {
        this.setState({
            image_url: ""
        });
    }

    componentDidMount() {
        if (!this.props.data) {
            return;
        }
        const json = JSON.parse(this.props.data);
        console.log(">>>>>>>>>");
        console.log(json[0].field_img[0].url);
        console.log("<<<<<<<<<");
        this.setState({
            image_url: json[0].field_img[0].url,
            harvest_date: json[0].field_harvest_date[0].value.split("T")[0],
            plant_date: json[0].field_plant_date[0].value.split("T")[0],
        });
    }

    render() {
        return (
            <View style={styles.container}>


                <View style={styles.top}>
                    <Image
                        source={{uri: this.state.image_url}}
                        style={{width: 325, height: 325}}>
                        <Button style={{position: 'absolute', top: 0, height: 1000,
                        width: 400, backgroundColor: 'transparent'}} onPress={Actions.pop}>Back</Button>
                    </Image>

                </View>


                <View style={styles.bottom}>
                    <View style={styles.bottomInside}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={styles.label}>Plant</Text><Text
                            style={styles.value}>{this.state.plant_date}</Text></View>

                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={styles.label}>Harvest</Text><Text
                            style={styles.value}>{this.state.harvest_date}</Text></View>
                    </View>
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        //backgroundColor: 'purple',
        flex: 1,
        flexDirection: 'column',
    },

    top: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        //height: 200,
        flex: 1,
        backgroundColor: 'blue',
    },

    backgroundImage: {
        resizeMode: 'cover',
        flex: 1
    },

    bottom: {
        top: 80,
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: 'red',
    },

    bottomInside: {
        flex: 1,
        flexDirection: 'row',
        //backgroundColor: 'red',
    },

    label: {
        fontSize: 30,
        marginBottom: 20
    },

    value: {
        fontSize: 20,
    },
});


module.exports = Login;