import { Icon, View } from 'native-base';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
// screens
import Home from '../../containers/Home';
import Rewards from '../../containers/Rewards';
import Timer from '../../containers/Timer';
import styles from './styles';

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View style={styles.home}>
            <Icon type="Entypo" name="home" size={24} style={{ color: tintColor }} />
          </View>
        )
      }
    },

    Timer: {
      screen: Timer,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View style={styles.bigBubble}>
            <Icon name="pause" style={{ color: '#fff', fontSize: 30 }} />
          </View>
        )
      }
    },

    Rewards: {
      screen: Rewards,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon type="Entypo" size={24} name="newsletter" style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    initialRouteName: 'Timer',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
        height:60,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#ffffff',
        elevation: 1,
        zIndex: 1,
        display: 'flex',
        borderColor:"green",
        borderWidth:2,

      }
    }
  }
);

export default Tabs;
