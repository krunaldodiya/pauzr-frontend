import { Text, View } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import theme from '../../libs/theme';
import { httpUrl } from '../../libs/vars';

class Slider extends React.Component {
  showData(data, navigation) {
    return data.map(item => {
      return (
        <ImageBackground
          source={{ uri: `${httpUrl}/storage/${item.image}` }}
          resizeMode="stretch"
          style={{ flex: 1, padding: 10 }}
          key={item.id}
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
        </ImageBackground>
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
