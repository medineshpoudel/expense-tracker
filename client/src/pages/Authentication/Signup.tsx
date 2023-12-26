import React, { useEffect, useState } from 'react';
import SignupForm from '../../components/forms/SignupForm';
import BaseService from '../../services/Base.service';
import { LocalStorageConstants } from '../../constants/Constants';

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const onSignupSubmit = async (formData: any) => {
    BaseService.add({ query: 'user/signup', data: formData })
      .then((result) => {
        localStorage.setItem(LocalStorageConstants.expenseTrackerToken, result.data.token);
        localStorage.setItem(LocalStorageConstants.expenseTrackerUsername, result.data.username);
        window.location.href = '/';
      })
      .catch((error) => setErrorMessage(error.response.data.error));
  };
  // Function to set error message and trigger animation
  const showError = (message: any) => {
    setErrorMessage(message);

    // Clear the error message after the animation duration
    setTimeout(() => {
      setErrorMessage('');
    }, 10000); // Change 3000 to the duration you want in milliseconds
  };

  // Use useEffect to trigger the animation when errorMessage changes
  useEffect(() => {
    if (errorMessage) {
      showError(errorMessage);
    }
  }, [errorMessage]);

  return (
    <div className="login-page-wrapper">
      <div className="login-form-wrapper">
        <SignupForm onSubmit={onSignupSubmit} errorMessage={errorMessage} />
      </div>
      <div className="login-image">
        <img src="/images/login-page-image.jpg" alt="login-page" />
      </div>
    </div>
  );
};

export default Signup;
