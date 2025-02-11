import { Icon } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const TopBar = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <TouchableOpacity onPress={() => navigation.push('Menu')}>
          <Icon
            type="MaterialIcons"
            color="#ffffff"
            name="menu"
            style={{ fontSize: 50, textAlign: 'center', color: '#ffffff' }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.push('Timer')}>
          <Image
            style={styles.avatar}
            source={require('../../../assets/images/Profile/photo.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
