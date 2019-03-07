import React from 'react';
import {StyleSheet,Text,Button} from 'react-native';
import {LinearGradient} from 'expo';
window.navigator.userAgent='react-native';
export default class Intro extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this._handleClick.bind(this);
    }
    _handleClick(){
       this.props.navigation.push('logSign');
    }
    render(){

        return(

            <LinearGradient style={styles.parent} colors={['#141E30','#243B55']}>
            <Text style={{color:'#ffffff'}}>This is the intro screen</Text>
                <Button
                                title='Continue'
                                color='#43c6ac'
                                height='58'
                                onPress={()=>this.handleClick()}
                            >
                            </Button>
            </LinearGradient>
        )
    }
}
const styles=StyleSheet.create({
    parent:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})