import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
// import Heading from "./containers/Heading";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <HomePage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
