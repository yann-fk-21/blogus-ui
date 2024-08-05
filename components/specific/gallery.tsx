import React from 'react';
import Card from './card';

export default function Gallery() {
  return (
    <React.Fragment>
      <div className="py-5 px-20 space-y-5">
        <div>
          <h1 className="text-lg font-bold text-gray-500">Top read</h1>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </React.Fragment>
  );
}
