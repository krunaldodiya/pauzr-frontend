import { connect } from "react-redux";
import EditProfile from "../screens/User/EditProfile";

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
