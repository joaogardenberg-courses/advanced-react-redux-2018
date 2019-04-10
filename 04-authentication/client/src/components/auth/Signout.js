import React       from 'react';
import { connect } from 'react-redux';

import { signout } from '../../actions';

class Signout extends React.Component {
  render() {
    return (
      <div>Sorry to see you go</div>
    );
  }

  componentDidMount() {
    this.props.signout();
  }
}

Signout = connect(
  null,
  { signout }
)(Signout);

export default Signout;