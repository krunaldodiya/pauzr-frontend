import { Button, Footer, FooterTab, Text } from 'native-base';
import React, { Component } from 'react';
import styles from './styles';
import {Animated,Easing,View} from 'react-native';
import EditProfileForm from "../User/Profile/EditProfileForm";

export default class FooterTabs extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen:this.props.isOpen,
      height: new Animated.Value(0),
    }
    
    this.handleHeight=this._handleHeight.bind(this);
    this.moveProfileUp=this._moveProfileUp.bind(this);
    this.moveProfileDown=this._moveProfileDown.bind(this);
  }
  _handleHeight(){
    if(!this.state.isOpen){
      this.moveProfileUp;
      this.setState({isOpen:true});
    }else{
      this.moveProfileDown
      this.setState({isOpen:false});
    }
  }
  _moveProfileUp(){
    Animated.timing(this.state.height,{
      toValue:1,
      duration:1000,
      easing:Easing.cubic,
    },
    {
      useNativeDriver: true
    }).start();
   this.height.setValue(1);
  }
  _moveProfileDown(){
    Animated.timing(this.state.height,{
      toValue:0,
      duration:1000,
      easing:Easing.cubic,
    },
    {
      useNativeDriver: true
    }).start();
    this.height.setValue(0);
  }

  
  render() {
    const { navigation } = this.props;
    
    return (
      <Footer style={[styles.container,{height:this.state.height.interpolate({
        inputRange:[0,1],
        outputRange:[70,400],
      })}]}>
        <FooterTab style={styles.footer}>
          <Button  style={styles.icon} onPress={() => navigation.replace('EditProfile')}>
            <Text>Home</Text>
          </Button>
          <Button style={styles.iconMid} onPress={() => navigation.replace('Timer')}>
            <Text>Timer</Text>
          </Button>
          <Button style={styles.icon} >
            <Text>Rewards</Text>
          </Button>
        </FooterTab>
        
      </Footer>
    );
  }
}
