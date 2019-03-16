import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import Loader from "../../../components/Loader";
import Header from "../../../components/User/Profile/EditProfileForm/header";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avoidKeyboard: false
    };
  }

  async componentWillMount() {
    //
  }

  toggleKeyboardAvoidView = avoidKeyboard => {
    this.setState({ avoidKeyboard });
  };

  render() {
    const { loading } = this.props;
    const { avoidKeyboard } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled={avoidKeyboard}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading.effects.auth.updateAuthUser} />
          <Header {...this.props} />
          <Content
            {...this.props}
            toggleKeyboardAvoidView={this.toggleKeyboardAvoidView}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default EditProfile;
