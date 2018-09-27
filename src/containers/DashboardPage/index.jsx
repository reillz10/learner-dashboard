import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';
import { fetchActiveCourses } from '../../data/actions/courses';

const mapStateToProps = state => (
  {
    activeCourses: state.activeCourses,
  }
);

const mapDispatchToProps = dispatch => ({
  activeCourses: dispatch(fetchActiveCourses()),
});

const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default DashboardPage;
