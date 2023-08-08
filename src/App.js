import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";
import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
    <div className='App'>
      <h1> the count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        {" "}
        increment by 33
      </button>
    </div>
    </>
  );
}

export default App;
