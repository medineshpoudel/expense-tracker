import React from 'react';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

const FormInput = () => {
  console.log('hi');
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We will never share your email.</FormHelperText>
    </FormControl>
  );
};

export default FormInput;
