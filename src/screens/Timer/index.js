import { Container, Content, Header } from 'native-base';
import React from 'react';
<<<<<<< HEAD
import { Text, View,ImageBackground } from 'react-native';
import BottomNav from '../../components/Home/BottomNav';
import TickTock from '../../components/Timer/TickTock';
import styles from './styles';
import Wave from '../../components/Timer/Wave'
=======
import { Text, View } from 'react-native';
import TickTock from '../../components/Timer/TickTock';
import Wave from '../../components/Timer/Wave';
import styles from './styles';
>>>>>>> 6c4eb4b4711989bcae48842d12f96d9ccc183482
export default class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header} />
        <Content contentContainerStyle={styles.content}>
          <View style={styles.timerBox}>
            <TickTock playAnimationOnMount={true} duration={1200000} style={styles.tickTock} />
            <View style={styles.innerCircle}>
              <Wave
                style={styles.waveBall}
                H={170}
                waveParams={[
                  { A: 10, T: 280, fill: '#62c2ff' },
                  { A: 15, T: 240, fill: '#0087dc' },
                  { A: 20, T: 200, fill: '#1aa7ff' }
                ]}
                animated={true}
              />
            </View>

            <Text style={styles.timerText}>22</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
