import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello, ReactJS</h1>
      <p>Lorem ipsume sit amet dolor</p>
    </div>
  );
}

const mountElement = document.getElementById("app");
ReactDOM.render(<App />, mountElement);
