import React from 'react';
import { useCounter } from './useCounter';

const CounterComponent = () => {
  const { count, increment } = useCounter(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default CounterComponent;