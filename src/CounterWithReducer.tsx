import React, { useReducer } from "react";

type StateType = {
  count: number;
};

const initialState: StateType = { count: 0 };

type ActionType = {
  type: "decrement" | "increment" | "reset";
};

// reducerは状態を受け取り、新たな状態を返す
function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default CounterWithReducer;
