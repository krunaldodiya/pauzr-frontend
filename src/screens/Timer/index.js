import React from 'react';
import { Text, View} from 'react-native';
import {Container,Header,Content} from 'native-base';
import TickTock from '../../components/Timer/TickTock';
import styles from './styles';
import Wave from '../../components/Timer/Wave'
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
