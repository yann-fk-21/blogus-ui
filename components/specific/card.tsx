import React from 'react';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function Card() {
  const dummyImage =
    'https://images.unsplash.com/photo-1716637644831-e046c73be197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhdGdwdHxlbnwwfHwwfHx8MA%3D%3D';

  return (
    <React.Fragment>
      <div className="w-full h-full">
        <div className="relative h-60 w-full">
          <Image
            className="h-full w-full rounded-lg object-cover bg-gray-100"
            src={dummyImage}
            alt="placeholder"
            width={500}
            height={500}
          />
          <span className="px-4 py-2 text-xs rounded-full text-white text-center  bg-gray-500 absolute top-3 left-2">
            <p> Tech-AI</p>
          </span>
        </div>
        <div className="py-2 text-sm text-gray-400 flex items-center gap-4">
          <h1>30 Jan 2024</h1>
          <FaCircle className="text-gray-300" size={5} />
          <p>10 mins read</p>
        </div>
        <div className="py-2">
          <Link
            href="/"
            className="text-lg text-gray-900 font-bold hover:underline"
          >
            Exploring the Future of Technology
          </Link>
          <p className="text-sm text-gray-600 max-w-lg pt-2 hover:underline">
            As we step into 2024, the landscape of technology continues to
            evolve at a rapid pace...
          </p>
        </div>
        <div className="flex items-center gap-3 pt-1">
          <Image
            className="h-7 w-7 rounded-full object-cover"
            src={dummyImage}
            alt="placeholder"
            width={500}
            height={500}
          />
          <p className="text-sm text-gray-600 font-semibold hover:underline cursor-pointer">
            Will Smith
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
