import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gray-200 border-t border-gray-500  ">
      <div className="w-[1216px] mx-auto flex mt-16 mb-3 justify-between">
        <div className="w-[289px] flex flex-col gap-6">
          <div>About</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, vel
            quo ullam itaque sapiente velit amet quisquam minima. Quidem,
            aperiam.
          </div>
          <div>
            Email:
            <a href="">info@jstemplate.net</a>
          </div>
          <div>
            Phone:
            <a href="">880123456789</a>
          </div>
        </div>
        <div>
          <a className="block" href="/">
            Home
          </a>
          <a className="block" href="/blog">
            Blog
          </a>
          <a className="block" href="/contact">
            Contact
          </a>
        </div>
        <div>
          <img src="./Social wrapper.png" alt="" />
        </div>
      </div>
      <div className="w-[1216px] mx-auto">sxas</div>
    </div>
  );
};
