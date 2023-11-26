"use client";

import Avatar from "@/components/Avatar";
import BodyBar from "@/components/BodyBar";
import FooterBar from "@/components/FooterBar";
import Menu from "@/icons/Menu";
import Moon from "@/icons/Moon";
import Sun from "@/icons/Sun";
import { useState } from "react";

export default function Home() {
  const [darkmode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div className={`${darkmode && "dark"}`}>
      <div className="flex flex-col items-center justify-center h-screen dark:bg-neutral-800">
        <header className="dark:text-white flex w-full p-5 justify-between text-sm text-gray-700">
          {/* LEFT SECTION */}
          <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex space-x-4 items-center">
            <button
              className="p-1 rounded-full bg-neutral-700 text-gray-200 dark:text-neutral-700 dark:bg-gray-200 hover:opacity-90 hover:scale-105 transition duration-300"
              onClick={toggleDarkMode}
            >
              {darkmode ? <Sun styles="w-5 h-5" /> : <Moon styles="w-5 h-5" />}
            </button>
            <p className="link">Gmail</p>
            <p className="link">Images</p>

            <Menu styles="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer dark:hover:bg-neutral-600" />

            <Avatar url="https://avatars.githubusercontent.com/u/108984827?v=4" />
          </div>
        </header>
        <BodyBar />
        <FooterBar />
      </div>
    </div>
  );
}
