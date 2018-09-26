import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch => ({
});

const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default DashboardPage;
