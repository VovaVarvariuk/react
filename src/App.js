import React from "react";
import Child from "./Child/Child";
import "./App.css";
import { contract } from "./Child/Child";

function App() {
  return (
    <>
      <div>
        {contract.map((item) => {
          return <Child data={item} />;
        })}
      </div>
    </>
  );
}

export default App;
