import React from 'react';
import { connect } from 'react-redux';

import {
  reduxForm,
  Field
} from 'redux-form';

import { signup } from '../../actions';
import {compose} from 'redux';

class Signup extends React.Component {
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
        <button>Sign Up</button>
      </form>
    );
  }

  onSubmit = (values) => {
    const { signup, history } = this.props;

    signup(values, () => {
      history.push('/feature');
    });
  };
}

const mapStateToProps = ({ auth: { errorMessage } }) => {
  return { errorMessage };
};

export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({ form: 'Signup' })
)(Signup);