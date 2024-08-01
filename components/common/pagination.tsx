'use client';

import React, { useState } from 'react';

import { pages } from '@/constant/constant';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState('1');

  const changePage = (page: string, typeOperation: string) => {
    if (typeOperation === 'next') {
      if (parseInt(page) > pages.length - 1) {
        return setCurrentPage('7');
      }
      setCurrentPage((parseInt(page) + 1).toString());
    } else {
      if (parseInt(page) < 1) {
        return setCurrentPage('1');
      }
      setCurrentPage((parseInt(page) - 1).toString());
    }
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center py-10">
        <div className="flex items-center gap-5">
          <button className="flex flex-col items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 transition-all">
            <MdChevronLeft
              onClick={() => changePage(currentPage, 'prev')}
              size={40}
              className="text-gray-500 p-3"
            />
          </button>
          {pages.map((page) => (
            <button
              key={page.id}
              className={`flex flex-col items-center justify-center rounded-lg ${
                currentPage === page.name && 'bg-gray-200'
              } py-2 px-4`}
            >
              {page.name}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage, 'next')}
            className="flex flex-col items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 transition-all"
          >
            <MdChevronRight size={40} className="text-gray-500 p-3" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
