import React from "react";
import { NetInfo } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";

// components
import NoNetwork from "./src/components/NoNetwork";

// screens
import HomeScreen from "./src/containers/HomeScreen";

// libs & services
import { getInitialScreen } from "./src/libs/screen";
import store from "./src/store";

const getAppNavigator = initialRouteName => {
  return createStackNavigator(
    {
      HomeScreen: { screen: HomeScreen },
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

    this.state = {
      initialized: false
    };
  }

  componentWillMount() {
    NetInfo.addEventListener("connectionChange", netInfo => {
      store.dispatch.network.networkChange({ connection: netInfo });
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
    const { initialized } = this.state;

    const { auth, network } = store.getState();
    const { authUser } = auth;
    const { connection } = network;

    const noConnection = connection && connection.type === "none";
    const hasConnection = connection && connection.type !== "none";

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
