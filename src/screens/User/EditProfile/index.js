import React from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Loader from '../../../components/Loader';
import EditProfileForm from '../../../components/User/Profile/EditProfileForm';
import EditProfileHeader from '../../../components/User/Profile/EditProfileHeader';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avoidKeyboard: false
    };
  }

  componentWillMount() {
    this.props.getInitialData();
  }

  get isLoading() {
    const { loading } = this.props;

    return loading.effects.users.getInitialData || loading.effects.auth.updateAuthUser;
  }

  toggleKeyboardAvoidView = avoidKeyboard => {
    this.setState({ avoidKeyboard });
  };

  render() {
    const { avoidKeyboard } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled={avoidKeyboard}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={this.isLoading} />
          <EditProfileHeader {...this.props} />
          <EditProfileForm {...this.props} toggleKeyboardAvoidView={this.toggleKeyboardAvoidView} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default EditProfile;
