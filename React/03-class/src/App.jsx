import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log(count);
    console.log('useEffect')
  }, [count]);

  return (
    <>
      <h2 className="text-4xl text-center">{count}</h2>
      <button className="m-2" onClick={() => setCount(count + 1)}>
        Addition
      </button>
      <button className="m-2" onClick={() => setCount(count - 1)}>
        subtraction
      </button>
    </>
  );
};

export default App;
