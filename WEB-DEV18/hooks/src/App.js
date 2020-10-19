import React, { useDebugValue, useEffect, useReducer, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import usedDocumentTitle from "./useDocumentTitle";
// functia reducer primeste tot timpul parametri (state, action)

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    default: {
      //a reducer most always rturn a valid state
      //alternatively we can throw errors here
      return state;
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    case "reset": {
      return { count: 0 };
    }
  }
}

function App() {
  //const [count, setCount]=useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [name, setName] = useState("cosmin");
  const [date, setDate] = useState(new Date());
  usedDocumentTitle("my page");

  // useEffect(
  // () => {
  //document.title=` clicked ${state.count} times`;
  // }, [state.count]);

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  return (
    <div>
      <p>
        {" "}
        {name}You Clicked {state.count} times at {date.toLocaleTimeString()}
      </p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
          //obligatoriu sa scriem "type"
          setName("some name");
        }}
      >
        Click me!
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
export default App;
