import React from 'react';
import { Animated,Text, View } from 'react-native';
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
          <Header/>
          <Content>
            <TickTock playAnimationOnMount={true} duration ={5000}></TickTock>
          </Content>
        <BottomNav />
      </Container>
    );
  }
}
