import React from "react";

const Button = ({ text = "", classname = "" }) => {
  return (
    <div>
      <button
        className={`border-2 rounded-[6px] text-[16px] py-2 px-7 ${classname}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
