import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// type Foo = JSX.IntrinsicAttributes; // たどっていくとkeyがある

ReactDOM.render(
  // keyはエラーにならない
  //   <App message="Hello, React!" key="1" />,
  <App />,
  document.getElementById("root")
);
