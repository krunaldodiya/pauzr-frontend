import { Icon } from 'native-base';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

class AddButton extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.bigBubble}
          hitSlop={{
            top: 20,
            bottom: 20,
            left: 20,
            right: 20
          }}
          onPress={this.handleAdduButtonPress}
        >
          <Icon type="Entypo" name="home" style={{ color: 'black', fontSize: 36 }} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddButton;
