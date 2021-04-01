import React from "react";
import Employee from "./components/Search/employee";
//import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="mb-5 text-center bold">
        <h1>Employee Directory</h1>
      </header>
      <Employee />
    </div>
  );
}

export default App;
