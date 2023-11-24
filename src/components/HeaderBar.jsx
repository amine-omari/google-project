import React from "react";
import Menu from "@/icons/Menu";
import Avatar from "./Avatar";

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

        <Menu styles="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        <Avatar url="https://avatars.githubusercontent.com/u/108984827?v=4" />
      </div>
    </header>
  );
};

export default HeaderBar;