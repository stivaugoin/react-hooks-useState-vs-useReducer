import React from "react";
import ReactDOM from "react-dom";

import UseReducer from "./useReducer";
import UseState from "./useState";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hooks: useState VS useReducer</h1>
      <h4>Open console and click on buttons</h4>
      <div className="Main">
        <UseState />
        <UseReducer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
