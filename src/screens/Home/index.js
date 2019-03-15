import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    );
  }
}

export default Home;
