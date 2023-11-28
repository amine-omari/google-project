import Globe from "@/icons/Globe";
import React from "react";

const FooterBar = () => {
  return (
    <footer className="grid w-full divide-y-[1px] divide-neutral-500 bg-gray-100 text-sm text-gray-500 dark:divide-neutral-600 dark:bg-neutral-700/50 dark:text-gray-200">
      <div className="px-8 py-3">
        <p>United Kingdom</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <Globe styles="h-5 mr-1 text-green-700 dark:text-gray-100" /> Carboon
          neutral since 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
