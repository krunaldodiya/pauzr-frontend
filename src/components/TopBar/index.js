import { Icon } from 'native-base';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const TopBar = props => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => props.toggleDrawer({ isOpen: true })}>
          <Icon
            type="MaterialIcons"
            color="black"
            name="menu"
            style={{ fontSize: 28, textAlign: 'center' }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 7 }}>
        <Text style={styles.name}>Pauzr</Text>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => null}>
          <Icon
            type="MaterialIcons"
            color="black"
            name="search"
            style={{ fontSize: 28, textAlign: 'center' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
