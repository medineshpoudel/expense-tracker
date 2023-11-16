/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface FormProps {
  onSubmit: (formData: any) => void;
  errorMessage?: string;
}

const LoginForm = ({ onSubmit, errorMessage }: FormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      email,
      password,
    });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onFormSubmit}>
        <h1 className="login-form-header">Login</h1>
        <label htmlFor="email"> Email Address </label> <br />
        <input
          type="email"
          placeholder="youremail@email.com"
          name="email"
          id="email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="firstname"> Password </label> <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="login-button">
          LOGIN
        </button>
        <br />
        <label>Do not have an account? </label>
        <button
          type="button"
          role="link"
          className="signup-switch-button"
          onClick={() => navigate('/signup')}
        >
          Signup
        </button>
        <br />
        {errorMessage && <p className="error-message">{errorMessage} </p>}
      </form>
    </div>
  );
};

export default LoginForm;
