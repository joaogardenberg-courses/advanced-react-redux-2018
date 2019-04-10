import React       from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
  class ComposedComponent extends React.Component {
    render() {
      return <ChildComponent { ...this.props } />;
    }

    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const { auth, history } = this.props;

      if (!auth) {
        history.push('/');
      }
    }
  }

  const mapStateToProps = ({ auth: { authenticated } }) => {
    return { auth: authenticated };
  };

  ComposedComponent = connect(
    mapStateToProps
  )(ComposedComponent);

  return ComposedComponent;
};

export default requireAuth;