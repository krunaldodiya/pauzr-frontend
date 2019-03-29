import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';

export default class ChipView extends React.Component {
  render() {
    console.log(this.props);

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
              height: this.props.height,
              width: this.props.width,
              backgroundColor: this.props.backgroundColor,
              color: this.props.color
            },
            { ...this.props.style }
          ]}
        >
          <View
            style={[
              styles.cardCutLeft,
              {
                height: this.props.chipConfig.left.size,
                width: this.props.chipConfig.left.size,
                backgroundColor: this.props.chipConfig.left.fallbackColor,
                bottom: this.props.chipConfig.left.bottom,
                left: this.props.chipConfig.left.left,
                borderRadius: 10
              },
              { ...this.props.chipConfig.style }
            ]}
          />
          <View
            style={[
              styles.cardCutRight,
              {
                height: this.props.chipConfig.right.size,
                width: this.props.chipConfig.right.size,
                backgroundColor: this.props.chipConfig.left.fallbackColor,
                bottom: this.props.chipConfig.right.bottom,
                right: this.props.chipConfig.right.right
              },
              { ...this.props.chipConfig.style }
            ]}
          />
        </View>
      </ImageBackground>
    );
  }
}
