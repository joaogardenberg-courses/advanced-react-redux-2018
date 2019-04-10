import React from 'react';
import { connect } from 'react-redux';

import {
  reduxForm,
  Field
} from 'redux-form';

import { signin } from '../../actions';
import {compose} from 'redux';

class Signin extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>
          { this.props.errorMessage }
        </div>
        <button>Sign In</button>
      </form>
    );
  }

  onSubmit = (values) => {
    const { signin, history } = this.props;

    signin(values, () => {
      history.push('/feature');
    });
  };
}

const mapStateToProps = ({ auth: { errorMessage } }) => {
  return { errorMessage };
};

export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: 'Signin' })
)(Signin)