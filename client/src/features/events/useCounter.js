import { useState, useEffect } from "react";

const useCounter = (val) => {
  const [count, setCount] = useState(val);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    if (count == 11) {
      alert("Max Ticket Quantity Reached");
      setCount(10);
    }
  }, [count]);

  return [count, increment, decrement, reset];
};

export default useCounter;
