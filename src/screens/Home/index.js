import { Text, View } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SideDrawer from '../../components/SideDrawer';
import Slider from '../../components/Slider';
import ChipView from '../../components/UIAssets/ChipView';
import styles from './styles';
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
        published_at_readable: '24',
        backgroundColor: '#536DFE'
      },
      {
        id: 1,
        image_url: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
        title: 'Title 2',
        published_at_readable: '24',
        backgroundColor: '#009688'
      }
    ];

    return (
      <SideDrawer {...this.props}>
        <View style={styles.greeting}>
          <Text style={styles.greetingSmall}>Welcome</Text>
          <Text style={styles.greetingBig}>SHIVANSHU</Text>
        </View>
        <Slider {...this.props} results={results} />

        <View style={{ flex: 1, backgroundColor: '#000000' }}>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>Top Brands</Text>
              <Text style={[styles.text, { color: '#FFA000' }]}>View More</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator>
              <View style={{ flexDirection: 'row', height: 150, paddingLeft: 13 }}>
                <ChipView
                  height={150}
                  width={170}
                  backgroundColor={'#5D4037'}
                  color={'#ffffff'}
                  chipConfig={{
                    left: {
                      bottom: 50,
                      left: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    },
                    right: {
                      bottom: 50,
                      right: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    }
                  }}
                >
                  <Text>Hello</Text>
                </ChipView>

                <ChipView
                  height={150}
                  width={170}
                  backgroundColor={'#607D8B'}
                  color={'#ffffff'}
                  chipConfig={{
                    left: {
                      bottom: 50,
                      left: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    },
                    right: {
                      bottom: 50,
                      right: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    }
                  }}
                >
                  <Text>Hello</Text>
                </ChipView>

                <ChipView
                  height={150}
                  width={170}
                  backgroundColor={'#E64A19'}
                  color={'#ffffff'}
                  chipConfig={{
                    left: {
                      bottom: 50,
                      left: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    },
                    right: {
                      bottom: 50,
                      right: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    }
                  }}
                >
                  <Text>Hello</Text>
                </ChipView>

                <ChipView
                  height={150}
                  width={170}
                  backgroundColor={'#FFC107'}
                  color={'#ffffff'}
                  chipConfig={{
                    left: {
                      bottom: 50,
                      left: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    },
                    right: {
                      bottom: 50,
                      right: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    }
                  }}
                >
                  <Text>Hello</Text>
                </ChipView>
              </View>
            </ScrollView>
          </View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>Featured Category</Text>
              <Text style={[styles.text, { color: '#FFA000' }]}>View More</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator>
              <View style={{ flexDirection: 'row', height: 200, paddingLeft: 13 }}>
                <ChipView
                  width={170}
                  height={150}
                  backgroundColor={'#388E3C'}
                  color={'#ffffff'}
                  chipConfig={{
                    left: {
                      bottom: 50,
                      left: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    },
                    right: {
                      bottom: 50,
                      right: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    }
                  }}
                >
                  <Text>Hello</Text>
                </ChipView>

                <ChipView
                  width={170}
                  height={150}
                  backgroundColor={'#536DFE'}
                  color={'#ffffff'}
                  chipConfig={{
                    left: {
                      bottom: 30,
                      left: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    },
                    right: {
                      bottom: 30,
                      right: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    }
                  }}
                >
                  <Text>Hello</Text>
                </ChipView>

                <ChipView
                  width={170}
                  height={150}
                  backgroundColor={'#FF4081'}
                  color={'#ffffff'}
                  chipConfig={{
                    left: {
                      bottom: 30,
                      left: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    },
                    right: {
                      bottom: 30,
                      right: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    }
                  }}
                >
                  <Text>Hello</Text>
                </ChipView>

                <ChipView
                  width={170}
                  height={150}
                  backgroundColor={'#7B1FA2'}
                  color={'#ffffff'}
                  chipConfig={{
                    left: {
                      bottom: 30,
                      left: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    },
                    right: {
                      bottom: 30,
                      right: -10,
                      size: 20,
                      fallbackColor: '#000000'
                    }
                  }}
                >
                  <Text>Hello</Text>
                </ChipView>
              </View>
            </ScrollView>
          </View>
        </View>
      </SideDrawer>
    );
  }
}

export default Home;
