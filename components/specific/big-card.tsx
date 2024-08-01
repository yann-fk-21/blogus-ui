import React from 'react';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';

export default function BigCard() {
  const dummyImage =
    'https://plus.unsplash.com/premium_photo-1701030722746-914e989d3a40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0YXRpb258ZW58MHx8MHx8fDA%3D';

  return (
    <div className="flex flex-col gap-3 w-2/3">
      <Image
        src={dummyImage}
        width={500}
        height={500}
        className="h-full w-full object-cover"
        alt="top news"
      />
      <div className="flex items-center gap-3">
        <Image
          src={dummyImage}
          width={500}
          height={500}
          className="h-7 w-7 object-cover rounded-full"
          alt="top news"
        />
        <p className="text-gray-500 text-sm hover:underline cursor-pointer">
          Will Smith
        </p>
        <div className="py-2 text-sm text-gray-400 flex items-center gap-4">
          <FaCircle className="text-gray-300" size={5} />
          <h1>30 Jan 2024</h1>
        </div>
      </div>
      <div className="w-full h-full space-y-2">
        <div className="space-y-2">
          <h1 className="text-gray-600 text-3xl hover:underline cursor-pointer">
            JO Paris 2024: French lead in swimming
          </h1>
          <p className="text-md max-w-xl text-gray-400 hover:underline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maiores
            cum! Quos excepturi voluptatibus nam ex harum rerum aut aspernatur
            molestiae omnis, blanditiis minus! Rerum odio earum consectetur
            laudantium mollitia ...
          </p>
        </div>
      </div>
    </div>
  );
}
