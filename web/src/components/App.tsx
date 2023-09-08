import React from "react";
import "./App.css";
import { debugData } from "../utils/debugData";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <h1>Oi</h1>
    </>
  );
};

export default App;
