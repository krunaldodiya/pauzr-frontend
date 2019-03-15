import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
// component
import Loader from "../../../components/Loader";
import VerifyOtpForm from "../../../components/Otp/VerifyOtp/Form";
import Info from "../../../components/Otp/VerifyOtp/Info";
import Timer from "../../../components/Otp/VerifyOtp/Timer";
// styles
import styles from "./styles";

class VerifyOtp extends React.Component {
  render() {
    const { otp, navigation, loading } = this.props;
    const { mobile } = otp;

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={loading.effects.otp.verifyOtp} />
          <Info mobile={mobile} />
          <Timer navigation={navigation} />
          <VerifyOtpForm {...this.props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default VerifyOtp;
