import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import HomeContent from "./home_content";
import HomeHeader from "./home_header";

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled={true}
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <HomeHeader {...this.props} />
          <HomeContent {...this.props} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default Home;
