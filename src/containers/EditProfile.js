import { connect } from 'react-redux';
import EditProfile from '../screens/User/EditProfile';

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  locations: state.locations
});

const mapDispatchToProps = dispatch => ({
  handleInput: dispatch.auth.handleInput,
  getLocations: dispatch.locations.getLocations
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
