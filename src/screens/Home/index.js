import { Container, Content, Header } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header />
        <Content>
          <Text style={styles.text}>Home Screen</Text>
        </Content>
      </Container>
    );
  }
}

export default Home;
