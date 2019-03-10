import React from 'react';
import { NetInfo } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import NoNetwork from './src/components/NoNetwork';
import GetStarted from './src/containers/GetStarted';
import Home from './src/containers/Home';
import { getInitialScreen } from './src/libs/screen';
import store from './src/store';
import TNC from './src/containers/TNC';
import AppIntro from './src/containers/Intro';
import Welcome from './src/containers/Welcome';
import Profile from './src/containers/Profile';
import LoginWebView from './src/screens/Login'
const getAppNavigator = initialRouteName => {
  return createStackNavigator(
    {
      Welcome: { screen: Welcome },
      TNC: { screen: TNC },
      AppIntro: { screen: AppIntro },
      GetStarted: { screen: GetStarted },
      Home: { screen: Home },
      Profile: { screen: Profile },
      LoginWebView:{screen:LoginWebView}
    },
    {
      initialRouteName: 'LoginWebView',
      defaultNavigationOptions: {
        header: null
      }
    }
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialized: false,
      netInfo: null
    };
  }

  componentWillMount() {
    NetInfo.addEventListener('connectionChange', netInfo => {
      this.setState({ netInfo }, () => {
        store.dispatch.network.networkChange({ connection: netInfo });
      });
    });
  }

  async componentDidMount() {
    store.dispatch.auth
      .getAuthUser()
      .then(() => {
        this.setState({ initialized: true });
      })
      .catch(() => {
        this.setState({ initialized: true });
      });
  }

  render() {
    const { initialized, netInfo } = this.state;

    const { auth } = store.getState();
    const { authUser } = auth;

    const noConnection = netInfo && netInfo.type === 'none';
    const hasConnection = netInfo && netInfo.type !== 'none';

    const initialRouteName = getInitialScreen(authUser);
    const AppNavigator = getAppNavigator(initialRouteName);
    const AppContainer = createAppContainer(AppNavigator);

    return (
      <Provider store={store}>
        <React.Fragment>
          {noConnection && <NoNetwork />}
          {hasConnection && initialized && <AppContainer />}
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
