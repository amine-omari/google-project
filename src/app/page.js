"use client";

import BodyBar from "@/components/BodyBar";
import FooterBar from "@/components/FooterBar";
import HeaderBar from "@/components/HeaderBar";
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
        <HeaderBar>
          <button
            className="p-1 rounded-full bg-neutral-700 text-gray-200 dark:text-neutral-700 dark:bg-gray-200 hover:opacity-90 hover:scale-105 transition duration-300"
            onClick={toggleDarkMode}
          >
            {darkmode ? <Sun styles="w-5 h-5" /> : <Moon styles="w-5 h-5" />}
          </button>
        </HeaderBar>
        <BodyBar />
        <FooterBar />
      </div>
    </div>
  );
}
