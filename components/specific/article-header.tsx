import React from 'react';

import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

export default function articleHeader() {
  const imageAvatar =
    'https://images.unsplash.com/photo-1521566652839-697aa473761a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D';
  return (
    <React.Fragment>
      <div className="bg-gray-100 h-96 px-20 py-12">
        <h1 className="text-5xl font-bold text-gray-950">
          {' '}
          ChatGPT can use to assist UI/UX design in a few different ways
        </h1>
        <div className="flex gap-4 items-start pt-5">
          <Image
            src={imageAvatar}
            alt="avatar"
            className="h-10 w-10 rounded-full object-cover"
            height={500}
            width={500}
            loading="lazy"
          />
          <div>
            <h1 className="text-md font-bold text-gray-950">Jane Smith</h1>
            <div className="flex items-center gap-2">
              <h1>30 Jan 2024</h1>
              <FaCircle className="text-gray-300" size={5} />
              <h1>7 min read</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
