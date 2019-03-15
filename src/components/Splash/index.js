import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    );
  }
}

export default Splash;
