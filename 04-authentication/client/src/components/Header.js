import React       from 'react';
import { Link }    from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        { this.renderLinks() }
      </div>
    );
  }

  renderLinks() {
    if (!this.props.authenticated) {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }

    return (
      <div>
        <Link to="/signout">Sign Out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { authenticated } }) => {
  return { authenticated };
};

Header = connect(
  mapStateToProps
)(Header);

export default Header;