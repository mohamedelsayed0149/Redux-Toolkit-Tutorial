import React from "react";
import { useDispatch } from "react-redux";
import { dencrement, increment, reset } from "./redux/features/counterSlice";

export default function Counter({ handleIncrement, handleDecrement }) {
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button onClick={() => dispatch(increment(1))}> + </button>
      <button onClick={() => dispatch(increment(3))}> + 3 </button>
      <button onClick={() => dispatch(dencrement(1))}> - </button>
      <button onClick={() => dispatch(reset())}> reset </button>
    </div>
  );
}
