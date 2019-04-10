import React       from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  render() {
    return (
      <div>
        <h4>Comment list</h4>
        <ul>
          { this.renderComments() }
        </ul>
      </div>
    );
  }

  renderComments() {
    return this.props.comments.map((comment) => {
      return <li key={ comment }>{ comment }</li>
    });
  }
}

const mapStateToProps = ({ comments }) => {
  return { comments };
};

CommentList = connect(
  mapStateToProps
)(CommentList);

export default CommentList;