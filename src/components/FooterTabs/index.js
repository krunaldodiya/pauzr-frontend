import { Button, Footer, FooterTab, Text,Icon} from 'native-base';
import React, { Component } from 'react';
import styles from './styles';
import {Animated,Easing,View,Alert} from 'react-native';
import EditProfileForm from "../User/Profile/EditProfileForm";
import MidBtn from "../BottomNav/MidBtn";
export default class FooterTabs extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen:this.props.isOpen,
      height: 70,
    }
    
    this.handleHeight=this._handleHeight.bind(this);
    this.moveProfileUp=this._moveProfileUp.bind(this);
    this.moveProfileDown=this._moveProfileDown.bind(this);
  }
  _handleHeight(){
    
    if(!this.state.isOpen){
      Alert.alert("Handel height up");
      this.moveProfileUp;
      this.setState({isOpen:true,height:400});
    }else{
      Alert.alert("Handel height down");
      this.moveProfileDown
      this.setState({isOpen:false,height:70});
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
    const {height}=this.state;
    return (
      <Footer style={[styles.container,{height:height}]}>
        <FooterTab style={styles.footer}>
          <Button  style={styles.icon} onPress={() => navigation.replace('EditProfile')}>
            <Text>Home</Text>
          </Button>
          <View
            style={{
              marginBottom: 60,
              height: 75,
              width: 75,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <MidBtn {...this.props}
              navigation={navigation}
              actionSize={30}
              icon={<Icon name="pause" color="#ffffff" size={15} style={{ color: '#ffffff' }} />}
              routes={[
                {
                  routeName: 'Timer',
                  color: '#4CAF50',
                  icon: <Icon name="home" color="#ffffff" size={15} style={{ color: '#ffffff' }} />
                },
                {
                  routeName: 'Timer',
                  color: '#E91E63',
                  icon: <Icon name="home" color="#ffffff" size={15} style={{ color: '#ffffff' }} />
                },
                {
                  routeName: 'Timer',
                  color: '#673AB7',
                  icon: <Icon name="home" color="#ffffff" size={15} style={{ color: '#ffffff' }} />
                }
              ]}
            />
          </View>
          <Button style={styles.icon} onPress={() => this.handleHeight()}>
            <Text>Rewards</Text>
          </Button>
        </FooterTab>
        
      </Footer>
    );
  }
}
