import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import DashboardMock from '../../images/dashboard.png';
import Img from '../Img';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Learner Dashboard</title>
        </Helmet>
        <Img
          src={DashboardMock}
          alt={'Dashboard'}
          onError={(e) => { e.target.src = DashboardMock; }}
        />
      </div>
    );
  }
}


Dashboard.defaultProps = {
  loading: false,
  error: null,
};

Dashboard.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.instanceOf(Error),
};

export default Dashboard;
