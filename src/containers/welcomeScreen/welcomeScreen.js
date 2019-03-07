import React from 'react';
import {
        StyleSheet,
        View,
        Button,
        Animated,
        Easing,
        StatusBar
    } from 'react-native';
import axios from 'axios';
import LottieView from 'lottie-react-native';


export default class WelcomeScreen extends React.Component{
    constructor(props){
      super(props);
      this.state={
        totalProgress: new Animated.Value(0),
      }
      this.handleClick=this._handleClick.bind(this)

    }
    _handleClick(){
       this.props.navigation.push('intro');
    }
    componentDidMount() {
        Animated.timing(this.state.totalProgress, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
        }).start();
      }
    render(){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center',
                    backgroundColor:'rgba(0,0,0,1)',}}>
                    <StatusBar hidden/>
                    <LottieView source={require('../../assets/lottie/pauzrLogo2.json')} progress={this.state.totalProgress} />
                    <View style={styles.button}>
                        <Button title='Continue' color='#FFC107' height='58' onPress={()=>this.handleClick()}></Button>
                    </View>
                </View>
            
        )
    }
}
const styles=StyleSheet.create({
    welcomeContainer:{
      flex:0.5,
        marginTop:20,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        justifyContent:'flex-end',
        alignItems: 'center',
        color:'#ffffff'
    },
    button:{
        position:"absolute",
        bottom:100,
    }

})