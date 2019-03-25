import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import React, { Component } from 'react';
import { Alert } from 'react-native';
import styles from './styles';

export default class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      height: 70
    };
  }
  _handleProfile(isOpen) {
    if (isOpen) {
      Alert.alert("if true");
      this.setState({ isOpen: false, height: 400, });
    } else if(!isOpen){
      Alert.alert("if false");
      this.setState({ isOpen: true, height: 70 });
    }
  }
  render() {
    const { navigation } = this.props;

    return (
      <Footer  style={[styles.footerContainer,{
        height:this.state.height,
      }]}>
        
      </Footer>
    );
  }
}
