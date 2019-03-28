import { connect } from 'react-redux';
import EditProfile from '../screens/User/EditProfile';

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  home: state.home
});

const mapDispatchToProps = dispatch => ({
  handleInput: dispatch.auth.handleInput,
  updateAuthUser: dispatch.auth.updateAuthUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
