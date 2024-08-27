"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <div
      className="w-[1216px] mx-auto flex py-8 justify-between items-center
    "
    >
      <div className="w-[158px] h-{36px}">
        <img src="Logo.png" alt="" />
      </div>
      <div
        className="w-[667px] flex justify-center gap-10
      "
      >
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex items-center bg-gray-300 rounded-md p-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-300 rounded-md"
        />
        <CiSearch />
      </div>
    </div>
  );
};
