import React from "react";

const Title = ({ classname = "", text = "" }) => {
  return (
    <div className={`m-0 p-0 text-white font-bold capitalize ${classname} `}>
      {text}
    </div>
  );
};

export default Title;
