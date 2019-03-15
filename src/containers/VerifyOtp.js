import { connect } from "react-redux";
import VerifyOtp from "../screens/Otp/VerifyOtp";

const mapStateToProps = state => ({
  loading: state.loading,
  otp: state.otp
});

const mapDispatchToProps = dispatch => ({
  handleInput: dispatch.otp.handleInput,
  setOtp: dispatch.otp.setOtp,
  verifyOtp: dispatch.otp.verifyOtp
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyOtp);
