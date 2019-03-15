import React from "react";
// import { KeyboardAvoidingView, SafeAreaView } from "react-native";
// component
// import Loader from "../../../components/Loader";
// import EditProfileForm from "../../../components/User/Profile/EditProfileForm";
// styles
// import styles from "./styles";
import { View, Text } from "native-base";

class EditProfile extends React.Component {
  render() {
    // const { loading } = this.props;

    return (
      <View>
        <Text>hello</Text>
      </View>

      // <SafeAreaView style={styles.container}>
      //   <KeyboardAvoidingView
      //     behavior="position"
      //     enabled
      //     style={{ flex: 1 }}
      //     contentContainerStyle={{ flex: 1 }}
      //   >
      //     <Loader loading={loading.global} />
      //     <Info />
      //     <EditProfileForm {...this.props} />
      //   </KeyboardAvoidingView>
      // </SafeAreaView>
    );
  }
}

export default EditProfile;
