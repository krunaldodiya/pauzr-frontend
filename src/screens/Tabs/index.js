import { Icon, View } from 'native-base';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import MidBtn from '../../components/BottomNav/MidBtn';
// screens
import Home from '../../containers/Home';
import Rewards from '../../containers/Rewards';
import Timer from '../../containers/Timer';

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} size={34} />
      }
    },

    Timer: {
      screen: Timer,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <View
            style={{
              marginBottom: 60,
              height: 75,
              width: 75,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <MidBtn
              navigation={navigation}
              actionSize={30}
              icon={<Icon name="pause" color="#ffffff" size={15} style={{ color: '#ffffff' }} />}
              routes={[
                {
                  routeName: 'Timer',
                  color: '#4CAF50',
                  icon: <Icon name="home" color="#ffffff" size={15} style={{ color: '#ffffff' }} />
                },
                {
                  routeName: 'Timer',
                  color: '#E91E63',
                  icon: <Icon name="home" color="#ffffff" size={15} style={{ color: '#ffffff' }} />
                },
                {
                  routeName: 'Timer',
                  color: '#673AB7',
                  icon: <Icon name="home" color="#ffffff" size={15} style={{ color: '#ffffff' }} />
                }
              ]}
            />
          </View>
        )
      }),
      params: {
        navigationDisabled: false,
      }
    },
    Rewards: {
      screen: Rewards,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="heart" color={tintColor} size={34} />
      }
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
        height: 70
      }
    }
  }
);
export default Tabs;
