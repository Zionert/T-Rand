import "./App.scss"
import React, { useContext, useEffect } from 'react';
import Header from "./header/Header";
import SelectPartAndGroup from "./selectPartAndGroup/SelectPartAndGroup";
import { ThemeContext } from "../context/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <div className={theme}>
      <Header 
        setTheme={setTheme}
        theme={theme}
      />
      <SelectPartAndGroup />
    </div>
  );
}

export default App;
