import React from "react";
import Counter from "./Counter";
import CounterWithReducer from "./CounterWithReducer";

interface Props {
  message?: string;
  name?: string;
  dispriction?: string;
}

const App: React.FunctionComponent<Props> = ({
  message,
  name,
  dispriction,
}) => {
  return (
    <div>
      <Counter />
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: "Hello, default!",
  name: "default",
  dispriction: "This is App Component",
};

export default App;
