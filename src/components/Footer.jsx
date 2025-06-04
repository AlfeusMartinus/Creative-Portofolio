import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <hr className="w-[calc(100%-20px)] sm:w-full max-w-[1150px]" />
      <p className="text-secondary text-[17px] text-center py-10">
        {new Date().getFullYear()} &copy; Alfeus-Space. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
