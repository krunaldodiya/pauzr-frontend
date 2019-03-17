import React from 'react';
import { Animated, Text, View,Easing } from 'react-native';

export default class TickTock extends React.Component {
  state = {
    rotate: new Animated.Value(0),
    duration: this.props.duration 
  };

  componentDidMount() {
    if (this.props.playAnimationOnMount) {
      Animated.timing(
       
        this.state.rotate,
        {
          toValue: 1,
          duration: this.state.duration ,
          useNativeDriver: true,
          easing:Easing.linear,
        }
      ).start();
    } 
  }

  render() {
    let { rotate } = this.state;
    let { duration } = this.state;
    return (
      <Animated.View 
        style={{
          ...this.props.style,
          transform: [
            {
              rotate: '0deg',
            }
          ],
          opacity: rotate 
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
