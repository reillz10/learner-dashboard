import { connect } from 'react-redux';
import Header from '../../components/Header';

const mapStateToProps = state => ({
  email: state.authentication.email,
});

export default connect(mapStateToProps)(Header);
