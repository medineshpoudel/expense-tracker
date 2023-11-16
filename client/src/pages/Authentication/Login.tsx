import React from 'react';
import LoginForm from '../../components/forms/LoginForm';

const Login = () => {
  const onLoginSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-form-wrapper">
        <LoginForm onSubmit={onLoginSubmit} />
      </div>
      <div className="login-image">
        <img src="/images/login-page-image.jpg" alt="login-page" />
      </div>
    </div>
  );
};

export default Login;
