import { Container, Content } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import SideDrawer from '../../components/SideDrawer';
import styles from './styles';

class Rewards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SideDrawer {...this.props}>
        <Container style={styles.container}>
          <Content>
            <Text style={styles.text}>Rewards Screen</Text>
          </Content>
        </Container>
      </SideDrawer>
    );
  }
}

export default Rewards;
