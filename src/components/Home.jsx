import React, { useState, useReducer } from "react";

const firstReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PLUS:
      return { ...state, count: state.count + 1 };
    case ACTIONS.MINUS:
      return { ...state, count: state.count - 1 };
    case ACTIONS.UPDATE_KEY:
      return { ...state, key: action.payload };
    default:
      throw new Error();
  }
};

const ACTIONS = {
  PLUS: "plus",
  MINUS: "minus",
  UPDATE_KEY: "updateKey",
};

export default function Home() {
  const [state, dispatch] = useReducer(firstReducer, { key: "", count: 0 });

  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "updateKey", payload: e.target.value })
        }
      />
      <p>Your Key is - {state.key} </p>
      <br></br>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
    </div>
  );
}
