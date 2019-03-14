import React from 'react';
import { Image, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../../assets/images/Intro/1.jpg'),
    backgroundColor: '#59b2ab'
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../../assets/images/Intro/2.jpg'),
    backgroundColor: '#febe29'
  },
  {
    key: 'three',
    title: 'Title 3',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../../assets/images/Intro/3.jpg'),
    backgroundColor: '#22bcb5'
  }
];

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem = item => {
    return (
      <View style={{ backgroundColor: item.backgroundColor }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _onDone() {
    console.log('done');
  }

  _onSkip() {
    console.log('skip');
  }

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={data => this._renderItem(data)}
        onDone={() => this._onDone()}
        onSkip={() => this._onSkip()}
        showSkipButton
        activeDotStyle={{ backgroundColor: 'red' }}
      />
    );
  }
}
