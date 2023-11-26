import React from "react";

const BodyButtons = ({ textButton }) => {
  return (
    <button className="bg-[#f8f9fa] p-3 rounded-md ring-gray-200 txet-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md transition duration-300">
      <p>{textButton}</p>
    </button>
  );
};

export default BodyButtons;
