import { Text, View } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import theme from '../../libs/theme';
import { httpUrl } from '../../libs/vars';
import ChipView from '../../components/UIAssets/ChipView';
class Slider extends React.Component {
  showData(data, navigation) {
    return data.map(item => {
      return (
        <View style={{ flex: 1 }} key={item.id}>
          <ChipView
            style={{ borderRadius: 13 }}
            height={200}
            width={'100%'}
            backgroundColor={'transparent'}
            backgroundImage={{ uri: `${httpUrl}/storage/${item.image}` }}
            chipConfig={{
              style: { borderRadius: 25 },
              left: {
                height: 50,
                width: 50,
                fallbackColor: '#000000',
                bottom: 50,
                left: -25
              },
              right: {
                height: 50,
                width: 50,
                fallbackColor: '#000000',
                bottom: 50,
                right: -25
              }
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('Test')}
              style={{
                flex: 1,
                padding: 10
              }}
            >
              <Text
                numberOfLines={3}
                style={{
                  color: '#0fff00',
                  fontSize: 24,
                  fontFamily: theme.fonts.TitilliumWebSemiBold
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          </ChipView>
        </View>
      );
    });
  }

  render() {
    const { home, navigation } = this.props;
    const { banners } = home;

    return (
      <View style={{ flex: 1 }}>
        <Swiper
          loadMinimal
          loadMinimalSize={1}
          loop
          dotColor="gray"
          activeDotColor="white"
          autoplay
          autoplayTimeout={3}
          style={{ backgroundColor: '#000000' }}
        >
          {this.showData(banners, navigation)}
        </Swiper>
      </View>
    );
  }
}

export default Slider;
