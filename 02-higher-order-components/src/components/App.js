import React       from 'react';
import { connect } from 'react-redux';

import {
  Route,
  Link
} from 'react-router-dom';

import CommentBox     from 'components/CommentBox';
import CommentList    from 'components/CommentList';
import { toggleAuth } from '../actions';

class App extends React.Component {
  render() {
    return (
      <div>
        { this.renderHeader() }
        <Route path="/post" component={CommentBox}/>
        <Route exact path="/" component={CommentList}/>
      </div>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Comments</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          { this.renderButton() }
        </li>
      </ul>
    );
  }

  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={ this.props.toggleAuth }>
          Sign out
        </button>
      );
    }

    return (
      <button onClick={ this.props.toggleAuth }>
        Sign in
      </button>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

App = connect(
  mapStateToProps,
  { toggleAuth }
)(App);

export default App;