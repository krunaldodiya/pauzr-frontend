import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';

export default class ChipView extends React.Component {
  render() {
    return (
      <ImageBackground
        source={this.props.backgroundImage}
        resizeMode="stretch"
        style={styles.container}
        key={this.props.slideKey}
      >
        <View
          style={[
            styles.content,
            {
              height: 200,
              width: '100%',
              color: this.props.color
            },
            { ...this.props.style }
          ]}
        >
          <View
            style={[
              styles.cardCutLeft,
              {
                height: 50,
                width: 50,
                backgroundColor: '#000',
                bottom: 50,
                left: -25,
                borderRadius: 10
              },
              { ...this.props.chipConfig.style }
            ]}
          />
          <View
            style={[
              styles.cardCutRight,
              {
                height: 50,
                width: 50,
                backgroundColor: '#000',
                bottom: 50,
                right: -25
              },
              { ...this.props.chipConfig.style }
            ]}
          />
        </View>
      </ImageBackground>
    );
  }
}
