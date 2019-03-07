import { connect } from "react-redux";
import AppIntro from "../screens/appIntro/index";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppIntro);
