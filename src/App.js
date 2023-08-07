import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='App'>
      <h1> the count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
    </>
  );
}

export default App;
