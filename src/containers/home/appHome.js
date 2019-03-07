import React from 'react';
import {AsyncStorage,View, Text, TouchableNativeFeedback, Alert,StatusBar,Image,StyleSheet} from 'react-native';
import BottomNav from './bottomNav';
import {Icon} from 'react-native-elements';
import axios from 'axios';
window.navigator.userAgent='react-native'; // for socketio this line is necessary to eliminate a bug which hinders 
                                            //realtime connectivity 

const timer = require('react-native-timer');

const statusBarAvoid=StatusBar.currentHeight;
console.log("Status Bar is "+statusBarAvoid);
export default class AppHome extends React.Component {
    constructor(props) {
        super(props);
        this.self=this;
    }
    

    render() {
        return (
            <View style={styles.dtContainer}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                    animated={true}
                    showHideTransition={'slide'}
                />
                <BottomNav lock={true}/>
            </View>
        )
    }
};
const styles=StyleSheet.create({
    dtContainer:{
        backgroundColor:"#455A64",
        flex:1,
    },
    

})