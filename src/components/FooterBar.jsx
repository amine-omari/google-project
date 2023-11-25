import Globe from "@/icons/Globe";
import React from "react";

const FooterBar = () => {
  return (
    <footer className="grid-w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>United Kingdom</p>
      </div>
      <div className="grid grid-cols-1">
        <div>
          <Globe styles="h-5 mr-1 text-green-700" /> Carboon neutral since 2007
        </div>
        <div>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
