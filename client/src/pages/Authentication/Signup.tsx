import React from 'react';
import SignupForm from '../../components/forms/SignupForm';

const Signup = () => {
  const onSignupSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-form-wrapper">
        <SignupForm onSubmit={onSignupSubmit} />
      </div>
      <div className="login-image">
        <img src="/images/login-page-image.jpg" alt="login-page" />
      </div>
    </div>
  );
};

export default Signup;
