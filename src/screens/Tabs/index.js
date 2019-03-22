import { Icon } from 'native-base';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from '../Home';
import Rewards from '../Rewards';
import Timer from '../Timer';

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon type="Entypo" name="home" size={24} style={{ color: tintColor }} />
        )
      }
    },
    Timer: {
      screen: Timer,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon type="Entypo" size={24} name="lock" style={{ color: tintColor }} />
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
        backgroundColor: '#171F33'
      }
    }
  }
);

export default AppTabNavigator;
