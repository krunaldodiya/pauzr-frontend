import { Container, Content, Header } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import BottomNav from '../../components/Home/BottomNav';
import styles from './styles';

class Rewards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header />
        <Content>
          <Text style={styles.text}>Rewards Screen</Text>
        </Content>
        <BottomNav {...this.props} />
      </Container>
    );
  }
}

export default Rewards;
