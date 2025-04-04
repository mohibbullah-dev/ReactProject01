import React, { useContext } from "react";
import { themeContext } from "../contexts/allContext";

const Title = ({ classname = "", text = "" }) => {
  const { theme } = useContext(themeContext);
  return (
    <div
      className={`m-0 p-0 ${
        theme === "dark" ? "text-white" : "text-black"
      } font-bold capitalize ${classname} `}
    >
      {text}
    </div>
  );
};

export default Title;
