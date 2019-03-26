import { Container, Content } from 'native-base';
import React from 'react';
import Wave from '../../components/Timer/Wave';
import styles from './styles';
export default class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
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
