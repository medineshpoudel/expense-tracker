import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingPage = () => (
  <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CircularProgress />
  </div>
);

export default LoadingPage;
