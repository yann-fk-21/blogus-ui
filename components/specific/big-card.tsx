import React from 'react';
import Image from 'next/image';

export default function BigCard() {
  const dummyImage =
    'https://plus.unsplash.com/premium_photo-1701030722746-914e989d3a40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0YXRpb258ZW58MHx8MHx8fDA%3D';

  return (
    <div className="px-20 py-5 flex gap-10">
      <Image
        src={dummyImage}
        width={500}
        height={500}
        className="h-full w-full object-cover rounded-lg"
        alt="top news"
      />
      <div className="w-full h-full space-y-5">
        <div className="space-y-5">
          <h1 className="text-gray-600 text-3xl hover:underline cursor-pointer">
            JO Paris 2024: French lead in swimming
          </h1>
          <p className="text-md text-gray-400 hover:underline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maiores
            cum! Quos excepturi voluptatibus nam ex harum rerum aut aspernatur
            molestiae omnis, blanditiis minus! Rerum odio earum consectetur
            laudantium mollitia ...
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Image
            src={dummyImage}
            width={500}
            height={500}
            className="h-8 w-8 object-cover rounded-full"
            alt="top news"
          />
          <p className="text-gray-500 text-sm hover:underline cursor-pointer">
            Will Smith
          </p>
        </div>
      </div>
    </div>
  );
}
