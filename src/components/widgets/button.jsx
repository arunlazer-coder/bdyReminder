import React from "react";

export const Button = ({ children, cls }) => {
  return (
    <button className={`bg-blue-500  hover:bg-blue-700 h-10 ${cls} text-white cursor-pointer font-bold`}>
      {children}
    </button>
  );
};
