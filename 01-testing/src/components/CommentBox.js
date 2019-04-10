import React from 'react';
import { connect } from 'react-redux';

import {
  saveComment,
  fetchComments
} from 'actions';

const INITIAL_STATE = { comment: '' };

class CommentBox extends React.Component {
  state = INITIAL_STATE;

  render() {
    const { comment } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <h4>Add a comment</h4>
        <textarea value={ comment } onChange={ this.handleChange } />
        <div>
          <button>Submit comment</button>
          <button
            className="fetch-comments"
            type="button"
            onClick={ this.props.fetchComments }
          >Fetch comments</button>
        </div>
      </form>
    );
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ comment: value })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState(INITIAL_STATE);
  };
}

CommentBox = connect(
  null,
  { saveComment, fetchComments }
)(CommentBox);

export default CommentBox;