import React from 'react';
import { Animated, Easing } from 'react-native';
export default class TickTock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: new Animated.Value(0),
      duration: this.props.duration
    };
  }

  componentDidMount() {
    if (this.props.playAnimationOnMount) {
      Animated.loop(
        Animated.timing(this.state.rotate, {
          toValue: 1,
          duration: 20000,
          useNativeDriver: true,
          easing: Easing.linear
        }),
        {
          iterations: -1
        }
      ).start();
    }
  }

  render() {
    let { rotate } = this.state;
    let { duration } = this.state;
    let test = 50;

    const spin = rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <Animated.View
        style={{
          ...this.props.style,
          transform: [
            {
              rotate: spin
            }
          ] 
        }}
      >
    );
  }
}
