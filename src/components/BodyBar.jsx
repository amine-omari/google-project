import Microphone from "@/icons/Microphone";
import Search from "@/icons/Search";
import Image from "next/image";
import React from "react";
import BodyButtons from "./BodyButtons";

const BodyBar = () => {
  const BODY_BUTTONS = [
    {
      id: 1,
      textButtons: "Google Search",
    },
    {
      id: 2,
      textButtons: "I'm Feeling Lucky",
    },
  ];

  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="googlelogo"
        height={100}
        width={300}
      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <Search styles="h-5 mr-3 text-gray-500" />
        <input type="text" className="flex-grow focus:outline-none" />
        <button>
          <Microphone styles="h-5 hover:opacity-70" />
        </button>
      </div>
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        {BODY_BUTTONS.map(({ id, textButtons }) => (
          <BodyButtons key={id} textButton={textButtons} />
        ))}
      </div>
    </form>
  );
};

export default BodyBar;
