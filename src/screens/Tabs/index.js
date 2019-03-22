import { Icon } from 'native-base';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
// screens
import Home from '../../containers/Home';
import Rewards from '../../containers/Rewards';
import Timer from '../../containers/Timer';
import AddButton from './AddButton';

const Tabs = createBottomTabNavigator(
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
      // navigationOptions: {
      //   tabBarLabel: 'Home',
      //   tabBarIcon: ({ tintColor }) => (
      //     <Icon type="Entypo" size={24} name="lock" style={{ color: tintColor }} />
      //   )
      // },

      navigationOptions: () => ({
        tabBarButtonComponent: () => <AddButton />
      })
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

export default Tabs;
