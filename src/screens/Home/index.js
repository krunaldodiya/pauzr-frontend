import { Container, Content } from 'native-base';
import React from 'react';
import SideDrawer from '../../components/SideDrawer';
import Slider from '../../components/Slider';
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const results = [
      {
        id: 1,
        image_url: '',
        title: '',
        published_at_readable: '24'
      }
    ];

    return (
      <SideDrawer {...this.props}>
        <Container style={styles.container}>
          <Content>
            <Slider {...this.props} results={results} />
          </Content>
        </Container>
      </SideDrawer>
    );
  }
}

export default Home;
