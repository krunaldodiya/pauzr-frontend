import { Container, Text, View } from 'native-base';
import { Button } from 'react-native';
import React from 'react';
import styles from './styles';
import handler from '../../components/routerHandler';
import BottomNav from '../../components/BottomNav/BottomNav';
class Home extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.text}>home</Text>
        <Button
          title="Continue"
          color="#43c6ac"
          height="58"
          onPress={() => {
            this.props.navigation.push('Profile');
          }}
        />

        <BottomNav style={styles.bottomNav} />
      </Container>
    );
  }
}

export default Home;
