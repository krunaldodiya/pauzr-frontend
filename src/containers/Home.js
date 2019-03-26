import { connect } from 'react-redux';
import Home from '../screens/Home';

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth,
  drawer: state.drawer,
  home: state.home
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: dispatch.drawer.toggleDrawer,
  getInitialData: dispatch.home.getInitialData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
