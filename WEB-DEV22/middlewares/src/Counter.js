import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "./actionCreators";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.value);

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {counterValue}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
};
