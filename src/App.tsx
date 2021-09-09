import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/buttons/Button";
function App() {
  return (
    <div>
      <Button btnType={"standard"} btnContent={"Click Me!"} btnColor={'bg-blue-500'}/>
      <br />
      <Button btnType={"icon"} btnContent={<i className="material-icons">add</i>} btnColor={'bg-blue-500'}/>

    </div>
  );
}

export default App;
