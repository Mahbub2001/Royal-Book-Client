import React from "react";

const MainSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-orange-400"></div>
    </div>
  );
};

export default MainSpinner;
