import React from 'react';
import { NetInfo } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
// components
import NoNetwork from './src/components/NoNetwork';
// containers
import EditProfile from './src/containers/EditProfile';
import Home from './src/containers/Home';
import Intro from './src/containers/Intro';
import RequestOtp from './src/containers/RequestOtp';
import Splash from './src/containers/Splash';
import VerifyOtp from './src/containers/VerifyOtp';
// libs & services
import store from './src/store';

const getAppNavigator = () => {
  return createStackNavigator(
    {
      Splash: { screen: Splash },
      Home: { screen: Home },
      Intro: { screen: Intro },
      RequestOtp: { screen: RequestOtp },
      VerifyOtp: { screen: VerifyOtp },
      EditProfile: { screen: EditProfile }
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        header: null
      }
    }
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    const { network } = store.getState();

    this.state = {
      connection: network.connection
    };
  }

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', connection => {
      this.setState({ connection }, () => {
        store.dispatch.network.networkChange({ connection });
        store.dispatch.auth.getAuthUser();
      });
    });
  }

  render() {
    const { connection } = this.state;

    const noConnection = connection && connection.type === 'none';
    const hasConnection = connection && connection.type !== 'none';

    const AppNavigator = getAppNavigator();
    const AppContainer = createAppContainer(AppNavigator);

    return (
      <Provider store={store}>
        <React.Fragment>
          {noConnection && <NoNetwork />}
          {hasConnection && <AppContainer />}
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
