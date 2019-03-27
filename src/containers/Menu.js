import { connect } from 'react-redux';
import Menu from '../screens/Menu';

const mapStateToProps = state => ({
  loading: state.loading,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
