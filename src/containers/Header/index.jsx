import { connect } from 'react-redux';
import Header from '../../components/Header';

const mapStateToProps = state => ({
  email: state.authentication.email,
  username: state.authentication.username,
});

export default connect(mapStateToProps)(Header);
