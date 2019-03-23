import React from 'react';
import { Animated, Easing } from 'react-native';
import Svg, { G, Path,Line,Circle } from 'react-native-svg';
import TimerSvg from "../../../../assets/images/Timer/ticktock.svg";
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
      <Svg height={328.168 } px width={328.701}>
        <G  fill="yellow">
    <G >
        <Path  d="M163.76,301.17s4,3,4,3.17V325c0,.14-4,3.2-4,3.2s-4-3.06-4-3.2V304.34C159.76,304.19,163.76,301.17,163.76,301.17Z" />
        <Path  d="M247.08,21.91s1.67,4.72,1.61,4.84l-9.35,16.08c-.07.11-5.18,1.08-5.18,1.08s-1.54-4.77-1.47-4.89L242,22.94C242.11,22.82,247.08,21.91,247.08,21.91Z" />
        <Path  d="M27,164.1s-4.09,4-4.22,4H3.61c-.14,0-3.61-4-3.61-4s3.47-4,3.61-4H22.78C22.91,160.1,27,164.1,27,164.1Z" />
        <Path  d="M45,97.66s-5,1.55-5.1,1.49L24.37,89.8c-.11-.07-1.4-5.37-1.4-5.37s5-1.34,5.07-1.28l15.5,9.35C43.65,92.57,45,97.66,45,97.66Z" />
        <Path  d="M97.19,44.21s-5.09-1-5.16-1.15l-9.35-15.6c-.06-.11,1.28-5.25,1.28-5.25s5.3,1.44,5.37,1.55l9.35,15.6C98.74,39.47,97.19,44.21,97.19,44.21Z" />
        <Path  d="M96.87,284.16s1.23,5.16,1.16,5.28l-9.75,16.89c-.07.12-5.27,1.28-5.27,1.28s-1.73-5.16-1.66-5.28l9.75-16.89C91.17,285.32,96.87,284.16,96.87,284.16Z" />
        <Path  d="M305.87,84.63s-.95,5.1-1.06,5.16l-15.94,9.36c-.11.06-5-1.48-5-1.48s1.11-5.1,1.22-5.17L301,83.15C301.14,83.08,305.87,84.63,305.87,84.63Z" />
        <Path  d="M44.77,233.45s-1.25,5.22-1.37,5.29l-16.89,9.75C26.39,248.56,21,247,21,247s1.43-5.41,1.55-5.48l16.89-9.75C39.52,231.74,44.77,233.45,44.77,233.45Z" />
        <Path  d="M328.7,164.1s-2.74,4-2.89,4H304.56l-2.86-4,2.86-4h21.25C326,160.1,328.7,164.1,328.7,164.1Z" />
        <Path  d="M305.88,246.5s-4.74,1.71-4.85,1.65L285.1,238.8c-.12-.07-1.22-5.59-1.22-5.59s4.88-1.12,5-1.06l15.94,9.35C304.92,241.57,305.88,246.5,305.88,246.5Z" />
        <Path  d="M247.16,307.47s-5.06-.52-5.13-.63L232.68,290c-.06-.11,1.85-4.53,1.85-4.53s4.73.43,4.8.54l9.35,16.84C248.74,303,247.16,307.47,247.16,307.47Z" />
        <Path  d="M164.76,0s4,3.7,4,3.83V23.47c0,.14-4,3.53-4,3.53s-4-3.39-4-3.53V3.83C160.76,3.7,164.76,0,164.76,0Z" />
    </G>
</G>
</Svg>
        {this.props.children}
      </Animated.View>    
    );
  }
}
