import Globe from "@/icons/Globe";
import React from "react";

const FooterBar = () => {
  return (
    <footer className="grid-w-full divide-y-[1px] divide-gray-300">
      <div className="px-8 py-3">
        <p>United Kingdom</p>
      </div>
      <div>
        <div>
          <Globe styles="h-5 mr-1 text-green-700" /> Carboon neutral since 2007
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
