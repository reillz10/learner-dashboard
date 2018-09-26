import React from 'react';
import { Link } from 'react-router-dom';

import Img from '../../components/Img';

import EdxLogo from '../../images/edx-logo.png';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="container pb-4">
        <div className="row justify-content-between align-items-center">
          <div className="col-xs-12 col-md-4 logo-links">
            <Link className="logo" to="/">
              <Img src={EdxLogo} alt="edX logo" />
            </Link>
          </div>
          <div className="col-xs-12 col-md footer-links">
            <nav>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.edx.org/edx-terms-service">
                    Terms of Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.edx.org/edx-privacy-policy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
