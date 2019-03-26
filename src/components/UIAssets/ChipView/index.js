import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export default class ChipView extends React.Component {
  constructor(props) {
    super(props);
    let { height, width, backgroundColor, color, chipConfig } = this.props;
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.content,
            {
              height: this.props.height,
              width: this.props.width,
              backgroundColor: this.props.backgroundColor,
              color: this.props.color,
              borderRadius: 13
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
                right: this.props.chipConfig.right.right,
                borderRadius: 10
              },
              { ...this.props.chipConfig.style }
            ]}
          />
        </View>
      </View>
    );
  }
}
