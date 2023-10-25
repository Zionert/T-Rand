import "./App.css"
import React from 'react';
import Header from "./header/Header";
import SelecetPartAndGroup from "./selectPartAndGroup/SelecetPartAndGroup";
import TeamShow from "./teamShow/TeamShow";

function App() {
  return (
    <div>
      <Header />
      <SelecetPartAndGroup />
      <TeamShow />
    </div>
  );
}

export default App;
