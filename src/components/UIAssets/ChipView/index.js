import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from './styles';

export default class ChipView extends React.Component {
  render() {
    return (
      <ImageBackground
        source={this.props.backgroundImage}
        resizeMode="stretch"
        style={[styles.container,{borderRadius:20},this.props.style]}
        key={this.props.slideKey}
      >
        <View
          style={[
            styles.content,
            {
              height: this.props.height,
              width: this.props.width,
              color: this.props.color,
              backgroundColor:this.props.backgroundColor,
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
                backgroundColor: this.props.chipConfig.right.fallbackColor,
                bottom: this.props.chipConfig.right.bottom,
                right: this.props.chipConfig.right.right,
              },
              { ...this.props.chipConfig.style }
            ]}
          />
        </View>
      </ImageBackground>
    );
  }
}
