import { Text, View } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ChipView from '../../components/UIAssets/ChipView';
import styles from './styles';

class TopBrands extends React.Component {
  render() {
    return (
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
    );
  }
}

export default TopBrands;
