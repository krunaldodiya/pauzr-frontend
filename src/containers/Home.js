import { connect } from 'react-redux';
import Home from '../screens/Home';

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
)(Home);
