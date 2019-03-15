import React from 'react';
import { NetInfo } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
// components
import NoNetwork from './src/components/NoNetwork';
import Splash from './src/components/Splash';
// containers
import EditProfile from './src/containers/EditProfile';
import Home from './src/containers/Home';
import Intro from './src/containers/Intro';
import RequestOtp from './src/containers/RequestOtp';
import VerifyOtp from './src/containers/VerifyOtp';
// libs & services
import { getInitialScreen } from './src/libs/screen';
import store from './src/store';

const getAppNavigator = initialRouteName => {
  return createStackNavigator(
    {
      Home: { screen: Home },
      Intro: { screen: Intro },
      RequestOtp: { screen: RequestOtp },
      VerifyOtp: { screen: VerifyOtp },
      EditProfile: { screen: EditProfile }
    },
    {
      initialRouteName,
      defaultNavigationOptions: {
        header: null
      }
    }
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    NetInfo.addEventListener('connectionChange', connection => {
      store.dispatch.network.networkChange({ connection });
    });

    store.dispatch.auth.getAuthUser();
  }

  render() {
    const { network, auth } = store.getState();
    const { connection } = network;
    const { authUser, init } = auth;

    console.log(init);
    

    const noConnection = connection && connection.type === 'none';
    const hasConnection = connection && connection.type !== 'none';

    const initialRouteName = getInitialScreen(authUser);
    const AppNavigator = getAppNavigator(initialRouteName);
    const AppContainer = createAppContainer(AppNavigator);

    return (
      <Provider store={store}>
        <React.Fragment>
          {init === false && <Splash />}
          {noConnection && <NoNetwork />}
          {hasConnection && init === true && <AppContainer />}
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
