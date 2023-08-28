import { useState } from "react";
import Column from "./components/Column";
import "./App.css";

function App() {
  return (
    <>
      <Column state="PLANNED" />
      <Column state="IN_PROGRESS" />
      <Column state="DONE" />
    </>
  );
}

export default App;
