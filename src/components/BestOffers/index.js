import { Text, View } from 'native-base';
import React from 'react';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import ChipView from '../../components/UIAssets/ChipView';
import styles from './styles';

class BestOffers extends React.Component {
  renderItem(data, navigation) {
    return (
      <View>
        <Text>{data.title}</Text>
      </View>
    );
  }

  render() {
    const { data, navigation } = this.props;

    return (
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

            <View>
              <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={data => this.renderItem(data, navigation)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default BestOffers;
