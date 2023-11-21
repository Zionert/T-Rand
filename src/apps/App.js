import "./App.css"
import React from 'react';
import Header from "./header/Header";
import SelectPartAndGroup from "./selectPartAndGroup/SelectPartAndGroup";
import TeamShow from "./teamShow/TeamShow";

function App() {
  return (
    <div className="light">
      <Header />
      <SelectPartAndGroup />
      <TeamShow />
    </div>
  );
}

export default App;
