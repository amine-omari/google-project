import Image from "next/image";
import React from "react";

const BodyBar = () => {
  return (
    <form>
      <Image
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="googlelogo"
        height={100}
        width={300}
      />
    </form>
  );
};

export default BodyBar;
