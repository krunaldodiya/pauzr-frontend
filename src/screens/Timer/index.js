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
  componentDidMount() {}
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header} />
        <Content contentContainerStyle={styles.content}>
          <View style={styles.timerBox}>
            <TickTock playAnimationOnMount={true} duration={10000} style={styles.tickTock} >
            
            </TickTock>
            <View style={styles.innerCircle} >
            <Text style={styles.timerText}>22</Text>
            </View>
          </View>
        </Content>
        <BottomNav />
      </Container>
    );
  }
}
