import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-10">
        <div className="basis-1/2">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight">
            Refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => ( 
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Sitemap</h4>
            {["Home", "Work", "Career", "Contact Us"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae laborum sapiente maiores labore porro eos excepturi
              animi facilis consequatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
