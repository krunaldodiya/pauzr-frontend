import { Text, View } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import ChipView from '../../components/UIAssets/ChipView';
import { httpUrl } from '../../libs/vars';
import styles from './styles';

class TopBrands extends React.Component {
  showData(data) {
    return data.map(item => {
      return (
        <View style={{ margin: 8, flex: 1 }} key={item.id}>
          <ChipView
            style={{ borderRadius: 13 }}
            height={100}
            width={100 * 1.618}
            backgroundColor={'transparent'}
            backgroundImage={{ uri: `${httpUrl}/storage/${item.logo}` }}
            chipConfig={{
              style: { borderRadius: 12.5 },
              left: {
                size: 25,
                fallbackColor: '#000',
                bottom: 30,
                left: -12.5
              },
              right: {
                size: 25,
                fallbackColor: '#000',
                bottom: 30,
                right: -12.5
              }
            }}
          />
        </View>
      );
    });
  }

  render() {
    const { home } = this.props;
    const { top_brands } = home;

    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <View
          style={{
            backgroundColor: '#000',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
          }}
        >
          <Text style={[styles.text, { fontWeight: 'bold' }]}>Top Brands</Text>
          <Text style={[styles.text, { color: '#FFA000' }]}>View More</Text>
        </View>

        <ScrollView
          style={{ flexDirection: 'row', height: 150, paddingLeft: 13 }}
          horizontal
          showsHorizontalScrollIndicator
        >
          {this.showData(top_brands)}
        </ScrollView>
      </View>
    );
  }
}

export default TopBrands;
