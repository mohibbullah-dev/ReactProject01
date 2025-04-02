import React from "react";

const Flex = ({ children, classname = "" }) => {
  return <div className={`flex ${classname}`}>{children}</div>;
};

export default Flex;
