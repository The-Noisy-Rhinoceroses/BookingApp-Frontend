import React from 'react';
import PropTypes from 'prop-types';

const LoginFormView = props => {
  const { email, password } = props.loginInfo;
  const { handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
        <input type="text" name="email" value={email} onChange={handleChange} required></input>
      <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handleChange} required></input>
      <button>Submit</button>
    </form>
  )
};

LoginFormView.propTypes = {
  loginInfo: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default LoginFormView;
