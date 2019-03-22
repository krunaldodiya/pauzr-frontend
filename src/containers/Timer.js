import { connect } from 'react-redux';
import Timer from '../screens/Timer';

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  drawer: state.drawer
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: dispatch.drawer.toggleDrawer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
