import { Container, Content, Text, View } from 'native-base';
import React from 'react';
import SideDrawer from '../../components/SideDrawer';
import Slider from '../../components/Slider';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../../libs/theme';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const results = [
      {
        id: 1,
        image_url: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
        title: 'Title 1',
        published_at_readable: '24'
      },
      {
        id: 1,
        image_url: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
        title: 'Title 2',
        published_at_readable: '24'
      }
    ];

    return (
      <SideDrawer {...this.props}>
        <Slider {...this.props} results={results} />

        <View style={{ flex: 1 }}>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
              <Text style={{ fontFamily: theme.fonts.TitilliumWebRegular }}>Top Brands</Text>
              <Text style={{ fontFamily: theme.fonts.TitilliumWebRegular }}>View More</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator>
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{ width: 160, height: 120, margin: 1, padding: 5, backgroundColor: 'red' }}
                >
                  <Text>hello</Text>
                </View>
                <View
                  style={{
                    width: 160,
                    height: 120,
                    margin: 1,
                    padding: 5,
                    backgroundColor: 'green'
                  }}
                >
                  <Text>hello</Text>
                </View>
                <View
                  style={{
                    width: 160,
                    height: 120,
                    margin: 1,
                    padding: 5,
                    backgroundColor: 'yellow'
                  }}
                >
                  <Text>hello</Text>
                </View>
                <View
                  style={{
                    width: 160,
                    height: 120,
                    margin: 1,
                    padding: 5,
                    backgroundColor: 'pink'
                  }}
                >
                  <Text>hello</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
              <Text style={{ fontFamily: theme.fonts.TitilliumWebRegular }}>Featured Category</Text>
              <Text style={{ fontFamily: theme.fonts.TitilliumWebRegular }}>View More</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator>
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{ width: 160, height: 120, margin: 1, padding: 5, backgroundColor: 'red' }}
                >
                  <Text>hello</Text>
                </View>
                <View
                  style={{
                    width: 160,
                    height: 120,
                    margin: 1,
                    padding: 5,
                    backgroundColor: 'green'
                  }}
                >
                  <Text>hello</Text>
                </View>
                <View
                  style={{
                    width: 160,
                    height: 120,
                    margin: 1,
                    padding: 5,
                    backgroundColor: 'yellow'
                  }}
                >
                  <Text>hello</Text>
                </View>
                <View
                  style={{
                    width: 160,
                    height: 120,
                    margin: 1,
                    padding: 5,
                    backgroundColor: 'pink'
                  }}
                >
                  <Text>hello</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SideDrawer>
    );
  }
}

export default Home;
