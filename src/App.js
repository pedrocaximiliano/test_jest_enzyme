import React from "react";
import "./App.css";

//import { Modulo1 } from "./App";

export function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [module1Number, setModule1Number] = React.useState(false);

  function getModule1() {
    const modulo1 = Modulo1(11);
    return setModule1Number(modulo1);
  }

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      {/* Notes:
      - using ternary on the error state to determine whether or not to hide
      - the 'error' and 'hidden' classes are defined in App.css
      */}
      <div
        data-test="error-message"
        className={`error ${error ? "" : "hidden"}`}
      >
        The counter cannot go below 0
      </div>
      <button
        data-test="increment-button"
        onClick={() => {
          if (error) {
            setError(false);
          }
          setCount(count + 1);
        }}
      >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setError(true);
          }
        }}
      >
        Decrement counter
      </button>
      <h1 data-test="getModule1">chamar modulo1</h1>
      <button
        data-test="modulo1-button"
        onClick={() => {
          getModule1();
        }}
      >
        chamar modulo1
      </button>
      <h1>{module1Number}</h1>
    </div>
  );
}

export const Modulo1 = (exempleValue) => {
  const objetArray = [
    {
      numero1: 1,
      numero2: 2,
      numero3: 3,
      numero4: 4,
      numero11: 11,
    },
  ];

  let newValue = 0;
  objetArray.map((obj) => {
    if (obj.numero11 === exempleValue);
    return (newValue = obj.numero11);
  });
  return newValue;
  // const array = [1, 2, 3, 4, 5, 6, 11];
  // const teste = array.filter((number) => number === valorReturn);
  // console.log("teste", Number(teste));
};
