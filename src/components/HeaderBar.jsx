import Menu from "@/icons/Menu";
import React from "react";

const HeaderBar = () => {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      {/* LEFT SECTION */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
      </div>

      <Menu styles="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
    </header>
  );
};

export default HeaderBar;
