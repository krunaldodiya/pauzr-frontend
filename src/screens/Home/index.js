import { Container, Content, Text, View } from 'native-base';
import React from 'react';
import Swiper from 'react-native-swiper';
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
            <Swiper height={360}>
              {results.map(result => {
                return (
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: 'black' }}>{result.title}</Text>
                  </View>
                );
              })}
            </Swiper>

            <Slider {...this.props} results={results} />
          </Content>
        </Container>
      </SideDrawer>
    );
  }
}

export default Home;
