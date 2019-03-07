import React from 'react';
import { View, Button, Animated, Easing, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import handler from '../../components/routerHandler';
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalProgress: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.timing(this.state.totalProgress, {
      toValue: 1,
      duration: 5000,
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
        <StatusBar hidden />
        <LottieView source={require('../../../assets/lottie/pauzrlogo3.json')} progress={this.state.totalProgress} />
        <View style={styles.button}>
          <Button title="Continue" color="#FFC107" height="58" onPress={()=>handler('push', 'TNC')} />
        </View>
      </View>
    );
  }
}
