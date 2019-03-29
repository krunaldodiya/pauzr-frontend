import { Container, Content } from 'native-base';
import React from 'react';
import LeaderBoard from '../../components/LeaderBoard';
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
            <LeaderBoard {...this.props} />
          </Content>
        </Container>
      </SideDrawer>
    );
  }
}

export default Rewards;
