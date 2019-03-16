import LottieView from 'lottie-react-native';
import React from 'react';
import { Animated, Easing, View } from 'react-native';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalProgress: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.totalProgress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,1)'
        }}
      >
        <LottieView
          source={require('../../../assets/lottie/pauzrlogo3.json')}
          progress={this.state.totalProgress}
        />
      </View>
    );
  }
}

export default Splash;
