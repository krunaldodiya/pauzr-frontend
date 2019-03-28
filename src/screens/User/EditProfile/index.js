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

  toggleKeyboardAvoidView = avoidKeyboard => {
    this.setState({ avoidKeyboard });
  };

  render() {
    const { avoidKeyboard } = this.state;
    const { loading } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled={avoidKeyboard}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading.global} />
          <EditProfileHeader {...this.props} />
          <EditProfileForm {...this.props} toggleKeyboardAvoidView={this.toggleKeyboardAvoidView} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default EditProfile;
