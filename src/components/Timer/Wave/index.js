import React from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

class Wave extends React.PureComponent {
  constructor(props) {
    super(props);

    let { H, waveParams, animated } = this.props;

    this.state = {
      H,
      waveParams,
      height: new Animated.Value(1)
    };

    this._animValues = [];
    this._animations = [];
    this._animated = animated || false;
    
    for (let i = 0; i < this.state.waveParams.length; i++) {
      this._animValues.push(new Animated.Value(0));
    }
  }

  componentDidMount() {
    Animated.parallel([
      this._animated && this.startAnim(),
      Animated.timing(
        this.state.height,
        {
          toValue: 0,
          duration: 22000
        }
      )
    ],
    {
      useNativeDriver: true
    }).start();
  }

  componentWillUnmount() {
    this.stopAnim();
    this._animValues = null;
    this._animations = null;
  }

  render() {
    let { style } = this.props;
    let { H, waveParams, height } = this.state;

    let waves = [];

    for (let i = 0; i < waveParams.length; i++) {
      let { A, T, fill } = waveParams[i];
      let translateX = this._animValues[i].interpolate({
        inputRange: [0, 1],
        outputRange: [0, -2 * T]
      });
      let translateY = height.interpolate({
        inputRange: [0, 1],
        outputRange: [A + H, 0]
      });
      let wave = (
        <AnimatedSvg
          key={i}
          style={{
            width: 3 * T,
            height: A + H,
            position: 'absolute',
            left: 0,
            bottom: 0,
            transform: [{ translateY: translateY }, { translateX: translateX }]
          }}
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 ${3 * T} ${A + H}`}
        >
          <Path
            d={`M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${(3 * T) / 2} 0 T ${2 * T} 0 T ${(5 *
              T) /
              2} 0 T ${3 * T} 0 V ${H} H 0 Z`}
            fill={fill}
            transform={`translate(0, ${A})`}
          />
        </AnimatedSvg>
      );
      waves.push(wave);
    }

    return <View style={style}>{waves}</View>;
  }

  setWaveParams(waveParams) {
    if (!waveParams) return;

    let animated = this._animated;
    let newWaveCount = waveParams.length;
    let oldWaveCount = this.state.waveParams.length;
    if (animated) {
      this.stopAnim();
      for (let v of this._animValues) {
        v.setValue(0);
      }
    }
    if (newWaveCount !== oldWaveCount) {
      this._animValues = [];
      for (let i = 0; i < waveParams.length; i++) {
        this._animValues.push(new Animated.Value(0));
      }
    }

    this.setState(
      {
        waveParams
      },
      () => {
        if (animated) {
          this.startAnim();
        }
      }
    );
  }

  setWaterHeight(H) {
    this.setState({ H });
  }

  startAnim() {
    this.stopAnim();

    const { speed = 5000, speedIncreasePerWave = 1000, easing = 'linear' } = this.props;

    for (let i = 0; i < this._animValues.length; i++) {
      let anim = Animated.loop(
        Animated.timing(this._animValues[i], {
          toValue: 1,
          duration: speed + i * speedIncreasePerWave,
          easing: Easing[easing]
        })
      );
      this._animations.push(anim);
      anim.start();
    }
    this._animated = true;
  }

  stopAnim() {
    for (let _anim of this._animations) {
      _anim.stop();
      _anim = null;
    }
    this._animations = [];
    this._animated = false;
  }
}

export default Wave;
