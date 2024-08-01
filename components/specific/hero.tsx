'use client';

import React, { useState } from 'react';

import { filters } from '@/constant/constant';
import Link from 'next/link';
import Button from '../common/button';
import BigCard from './big-card';

export default function Hero() {
  const [currentFliter, setCurrentFilter] = useState('all');

  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
  };

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
        <BigCard />
        <div className="flex items-center gap-4 px-20">
          {filters.map((filter) => (
            <span>
              {currentFliter.toLowerCase() ===
              filter.name.toLocaleLowerCase() ? (
                <Button>{filter.name}</Button>
              ) : (
                <Link
                  className="text-gray-500 hover:text-gray-400 transition-all"
                  onClick={() => changeFilter(filter.name)}
                  key={filter.id}
                  href="/"
                >
                  {filter.name}
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
