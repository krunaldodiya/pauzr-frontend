import { connect } from "react-redux";
import TermsNConditions from "../screens/termsNConditions/index";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TermsNConditions);
