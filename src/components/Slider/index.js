import { Spinner, Text, View } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import ChipView from '../../components/UIAssets/ChipView';
import theme from '../../libs/theme';

const showSlider = (results, navigation) => {
  return (
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
      {results.map(data => (
        <ImageBackground resizeMode="stretch" style={{ flex: 1, padding: 13 }} key={data.id}>
          <ChipView
            height={100}
            width={'100%'}
            backgroundColor={data.backgroundColor}
            color={'#ffffff'}
            chipConfig={{
              style: { borderRadius: 50 },
              left: {
                bottom: 90,
                left: -30,
                size: 50,
                fallbackColor: '#000000'
              },
              right: {
                bottom: 90,
                right: -30,
                size: 50,
                fallbackColor: '#000000'
              }
            }}
          >
            <View
              style={{
                flex: 1,
                padding: 10
              }}
            >
              <Text
                numberOfLines={3}
                style={{
                  color: '#fff',
                  fontSize: 24,
                  fontFamily: theme.fonts.TitilliumWebSemiBold,
                  height: '60%'
                }}
              >
                {data.title}
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('NewsDetailScreen', { news: data })}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    marginTop: 15
                  }}
                >
                  Read More
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: theme.fonts.TitilliumWebLight,
                  marginTop: 5
                }}
              >
                {data.published_at_readable}
              </Text>
            </View>
          </ChipView>
        </ImageBackground>
      ))}
    </Swiper>
  );
};

const Slider = props => {
  const { results, navigation, loading } = props;

  return (
    <View style={{ flex: 1 }}>
      {loading.global == true && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Spinner size="small" color="#000" />
        </View>
      )}

      {loading.global == false && showSlider(results, navigation)}
    </View>
  );
};

export default Slider;
