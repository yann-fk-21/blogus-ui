import React from 'react';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';
import Link from 'next/link';

interface CardProps {
  isHorizontal?: boolean;
}

export default function Card({ isHorizontal }: CardProps) {
  const dummyImage =
    'https://images.unsplash.com/photo-1716637644831-e046c73be197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhdGdwdHxlbnwwfHwwfHx8MA%3D%3D';

  return (
    <React.Fragment>
      <div className={` h-full ${isHorizontal && 'flex flex-col gap-2'}`}>
        <div className="h-60 w-full">
          <Image
            className="h-full w-full  object-cover bg-gray-100"
            src={dummyImage}
            alt="placeholder"
            width={500}
            height={500}
          />
        </div>
        <div className="py-2 text-sm text-gray-400 flex items-center gap-2">
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
          <FaCircle className="text-gray-300" size={5} />
          <h1>30 Jan 2024</h1>
        </div>
        <div className="">
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
          <button className="text-xs px-4 py-2  mt-3 rounded-full text-gray-600 text-center border-gray-600 border">
            Tech-AI
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
