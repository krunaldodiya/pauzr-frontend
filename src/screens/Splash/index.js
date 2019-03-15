import React from 'react';
import { Text, View } from 'react-native';
import { getInitialScreen } from '../../libs/screen';
import styles from './styles';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    const screen = await getInitialScreen(this.props.auth.authUser);

    setTimeout(() => {
      this.props.navigation.replace(screen);
    }, 5000);
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
