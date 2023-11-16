/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export interface FormProps {
  onSubmit: (formData: any) => void;
  errorMessage?: string;
}

const SignupForm = ({ onSubmit, errorMessage }: FormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [userImage, setUserImage] = useState('');
  const navigate = useNavigate();
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      email,
      password,
      username,
      userImage,
    });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onFormSubmit}>
        <h1 className="login-form-header"> Create an Account</h1>
        <label htmlFor="email"> Email Address </label> <br />
        <input
          type="email"
          placeholder="youremail@email.com"
          name="email"
          id="email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <label htmlFor="username">Username </label> <br />
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="firstname"> Password </label> <br />
        <input
          type="password"
          placeholder="password"
          name="firstname"
          id="firstname"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="username">Upload your picture </label> <br />
        <input
          type="file"
          name="username"
          id="username"
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <br />
        <button type="submit" className="login-button ">
          SIGNUP
        </button>
        <br />
        <label>Already have an account? </label>
        <button
          type="button"
          role="link"
          className="signup-switch-button"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <br />
        {errorMessage && <p className="error-message">{errorMessage} </p>}
      </form>
    </div>
  );
};

export default SignupForm;
