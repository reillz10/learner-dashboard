import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

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
