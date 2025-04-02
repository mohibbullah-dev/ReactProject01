import React from "react";

const TitleDes = ({ classname = "", text = "" }) => {
  return <p className={` text-gray ${classname}`}>{text}</p>;
};

export default TitleDes;
