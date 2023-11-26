import React from "react";

function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile pic"
      className="h-10 rounded-full cursor-pointer transition transform duration-300 hover:scale-110"
    />
  );
}

export default Avatar;
