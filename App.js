'use strict';

var React = require('react-native');
var {AppRegistry, Navigator, StyleSheet,Text,View} = React;
var Launch = require('./components/Launch');
var ScanQR = require('./components/ScanQR');
var Detail = require('./components/Detail');
var RNRF = require('react-native-router-flux');
var {Route, Schema, Animations, Actions, TabBar} = RNRF;
var Error = require('./components/Error');

// Redux stuff is optional
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

function reducer(state = {}, action) {
    switch (action.type) {
        case Actions.BEFORE_ROUTE:
            //console.log("BEFORE_ROUTE:", action);
            return state;
        case Actions.AFTER_ROUTE:
            //console.log("AFTER_ROUTE:", action);
            return state;
        case Actions.AFTER_POP:
            //console.log("AFTER_POP:", action);
            return state;
        case Actions.BEFORE_POP:
            //console.log("BEFORE_POP:", action);
            return state;
        case Actions.AFTER_DISMISS:
            //console.log("AFTER_DISMISS:", action);
            return state;
        case Actions.BEFORE_DISMISS:
            //console.log("BEFORE_DISMISS:", action);
            return state;
        default:
            return state;
    }

}
let store = createStore(reducer);
const Router = connect()(RNRF.Router);

export default class Example extends React.Component {
    render() {
        // Provider is optional (if you want to use redux)
        return (
            <Provider store={store}>
                <Router hideNavBar={true} name="root">
                    <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                    <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                    <Route name="register" component={ScanQR} title="Register"/>
                    <Route name="appDetail" schema="modal">
                        <Router name="loginRouter">
                            <Route name="loginModal" component={Detail} schema="modal"/>
                        </Router>
                    </Route>
                    <Route name="launch"  initial={true} component={Launch} wrapRouter={true} title="Launch" hideNavBar={true}/>
                </Router>
            </Provider>
        );
    }
}
