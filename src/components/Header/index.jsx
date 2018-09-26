import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Dropdown } from '@edx/paragon';

import Img from '../Img';
import EdxLogo from '../../images/edx-logo.png';
import './Header.scss';

class Header extends React.Component {
  renderLogo() {
    return (
      <Img
        src={EdxLogo}
        alt={'edX logo'}
        onError={(e) => { e.target.src = EdxLogo; }}
      />
    );
  }

  render() {
    const { email } = this.props;
    return (
      <header className="container">
        <nav className="navbar px-0 justify-content-between">
          <div>
            <Link
              to="/"
              className="navbar-brand"
            >
              {this.renderLogo()}
            </Link>
            <span className="badge badge-secondary beta">Beta</span>
          </div>
          {email && <Dropdown
            title={email}
            menuItems={[
              <a href={process.env.LOGOUT_URL}>Logout</a>,
            ]}
          />}
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
};

Header.defaultProps = {
  email: null,
};

export default Header;
