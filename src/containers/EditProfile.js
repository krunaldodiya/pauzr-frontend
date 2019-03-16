import { connect } from 'react-redux';
import EditProfile from '../screens/User/EditProfile';

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  handleInput: dispatch.auth.handleInput,
  getLocation: dispatch.location.getLocation
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
