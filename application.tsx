import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

const App: React.FC = () => (
  <StrictMode>
    <h1>Exercise</h1>
  </StrictMode>
);

ReactDOM.render(<App />, document.getElementById("main"));
