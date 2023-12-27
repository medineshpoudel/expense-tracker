import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { decreament, increament } from '../store/counter/counterSlice';

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => dispatch(increament())}>
        +{' '}
      </button>
      <button type="button" onClick={() => dispatch(decreament())}>
        -
      </button>
    </div>
  );
};

export default Home;
