import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between font-["satoshi"]'>
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "About", "News", "Careers"].map((elem, index) => (
            <a
              key={index}
              className="font-regular flex items-center text-sm gap-1"
              href="#"
            >
              {index === 1 && (
                <span
                  key={index} 
                  style={{ boxShadow: " 0 0 0.45em #00FF19" }}
                  className="inline-block bg-green-500 w-1 h-1 rounded-full"
                ></span>
              )}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
