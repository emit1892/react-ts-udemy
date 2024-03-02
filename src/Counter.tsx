import React, { useEffect, useRef, useState } from "react";

const array: Array<number> = [1, 2, 3];
const readonlyArray: ReadonlyArray<number> = [1, 2, 3];

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);
  //  const value = 0;
  array[0] = 11;
  // readonlyArray[0] = 11; //error

  const increment = () => {
    setValue((prevState) => prevState + 1);
    // setValue(value + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
    // setValue(value - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    console.log("render was done");
    renderTimes.current = renderTimes.current + 1;
  }); // renderごとに実行

  // useEffect(() => {
  //   console.log("render was done");
  // }, []);

  // null!で使用時のはnullではないことを示す
  const ref = useRef<HTMLInputElement>(null!);

  // const focusInput = () => {
  //   // useRefを設定したオブジェクトにfocusされる
  //   ref.current?.focus();
  // };

  const focusInput = () => {
    // useRefを設定したオブジェクトにfocusされる
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
};

export default Counter;
