import React from 'react';
import { BsTwitterX, BsInstagram, BsFacebook } from 'react-icons/bs';

export default function footer() {
  return (
    <div className="bg-gray-950 px-20 py-5 flex items-center justify-between">
      <h1 className="text-white text-xl">Blogus</h1>
      <p className="text-white text-md">Copyrigth@2024</p>
      <div className=" flex items-center gap-5">
        <BsFacebook className="text-white text-2xl" />
        <BsInstagram className="text-white text-2xl" />
        <BsTwitterX className="text-white text-2xl" />
      </div>
    </div>
  );
}
