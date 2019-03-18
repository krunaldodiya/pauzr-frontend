import React from 'react';
import { Animated, Text, View } from 'react-native';
import styles from './styles';
import { Container, Header, Content } from 'native-base';
import BottomNav from '../../components/Home/BottomNav';
import TickTock from '../../components/Timer/TickTock';
export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header />
        <Content contentContainerStyle={styles.content}>
          <TickTock playAnimationOnMount={true} duration={1000} style={styles.tickTock}  >
            <Text style={styles.text}>The tickTock will be here</Text>
          </TickTock>
        </Content>
        <BottomNav />
      </Container>
    );
  }
}
