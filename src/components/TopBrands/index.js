import { Text, View } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ChipView from '../../components/UIAssets/ChipView';
import styles from './styles';

class TopBrands extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>Top Brands</Text>
          <Text style={[styles.text, { color: '#FFA000' }]}>View More</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator>
          <View style={{ flexDirection: 'row', height: 150, paddingLeft: 13 }}>
            {data.map(item => {
              return (
                <ChipView
                  key={item.id}
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
                  <Text>{item.title}</Text>
                </ChipView>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TopBrands;
