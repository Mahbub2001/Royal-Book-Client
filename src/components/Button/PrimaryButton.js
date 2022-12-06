import React from "react";

const PrimaryButton = ({ children, classes }) => {
  return (
    <button className={`border-2 border-gray-500 rounded-lg px-4 py-1.5 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200 ${classes}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
