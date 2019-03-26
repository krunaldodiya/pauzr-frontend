import { Text, View } from 'native-base';
import React from 'react';
import { Image, ScrollView } from 'react-native';
import styles from './styles';
import theme from '../../libs/theme';

class TopBrands extends React.Component {
  showData(data) {
    return data.map(item => {
      return (
        <View style={{ margin: 5, padding: 5, borderWidth: 1, borderColor: 'white' }}>
          <Image source={{ uri: item.url }} style={{ width: 150, flex: 1 }} />
          <Text
            numberOfLines={1}
            style={{
              color: 'white',
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 14
            }}
          >
            {item.name}
          </Text>
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
