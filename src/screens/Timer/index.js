import { Container, Content, Header } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import SideDrawer from '../../components/SideDrawer';
import TickTock from '../../components/Timer/TickTock';
import styles from './styles';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SideDrawer {...this.props}>
        <Container style={styles.container}>
          <Header style={styles.header} />
          <Content contentContainerStyle={styles.content}>
            <View style={styles.timerBox}>
              <TickTock playAnimationOnMount={true} duration={10000} style={styles.tickTock} />
              <View style={styles.innerCircle}>
                <Text style={styles.timerText}>22</Text>
              </View>
            </View>
          </Content>
        </Container>
      </SideDrawer>
    );
  }
}
