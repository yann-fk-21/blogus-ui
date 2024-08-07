'use client';

import React, { useState } from 'react';

import BigCard from './big-card';
import Card from './card';

export default function Hero() {
  return (
    <React.Fragment>
      <div className="py-10 flex flex-col  gap-12">
        <div className="text-center space-y-2">
          <h1 className="text-md font-semibold text-gray-800">The Blog</h1>
          <h1 className="text-3xl font-bold text-gray-900">
            write the story that will change the world.
          </h1>
          <p className="text-lg text-gray-500">
            Find the latest news, cooking recipes or the latest tip :)
          </p>
        </div>
        <div className=" flex gap-10 px-20 py-5">
          <div className=" w-2/3 flex flex-col items-center gap-5">
            <BigCard />
            <BigCard />
          </div>
          <div className="w-1/3 flex flex-col gap-3">
            <Card isHorizontal />
            <Card isHorizontal />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
