import React, { useState } from "react";
import { themeContext } from "../contexts/allContext";
const ContextProvider = ({ children }) => {
  
  const [theme, setTheme] = useState("dark");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ContextProvider;
