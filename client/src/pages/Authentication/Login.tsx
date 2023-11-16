import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/forms/LoginForm';
import BaseService from '../../services/Base.service';
import { LocalStorageConstants } from '../../constants/Constants';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  // const navigate = useNavigate();

  const onLoginSubmit = (formData: any) => {
    BaseService.add({ query: 'login', data: formData })
      .then((result) => {
        localStorage.setItem(LocalStorageConstants.expenseTrackerToken, result.data.token);
        localStorage.setItem(LocalStorageConstants.expenseTrackerUsername, result.data.username);
        // navigate('/');
        window.location.href = '/';
      })
      .catch((error) => setErrorMessage(error.response.data.error));
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-form-wrapper">
        <LoginForm onSubmit={onLoginSubmit} errorMessage={errorMessage} />
      </div>
      <div className="login-image">
        <img src="/images/login-page-image.jpg" alt="login-page" />
      </div>
    </div>
  );
};

export default Login;
