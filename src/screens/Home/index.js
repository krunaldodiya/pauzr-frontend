import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Container, Header, Content } from 'native-base';
import BottomNav from '../../components/Home/BottomNav';
import TickTock from '../../components/Timer/TickTock';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header />
        <Content>
          <TickTock playAnimationOnMount={true} duration={5000}></TickTock>
          <Text style={styles.text}>Home Screen</Text>
        </Content>
        <BottomNav />
      </Container>
    );
  }
}

export default Home;
