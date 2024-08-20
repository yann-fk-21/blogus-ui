'use client';

import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

import Header from '@/components/layout/header';
import Input from '@/components/common/input';
import Button from '@/components/common/button';
import InputSelect from '@/components/common/input-select';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function writePage() {
  const [value, setValue] = useState('');

  const fileInput = useRef<HTMLInputElement>(null);

  const handleChange = (content: any) => {
    setValue(content);
    console.log(content);
  };

  const openFileSystem = () => {
    fileInput.current?.click();
  };

  return (
    <React.Fragment>
      <Header />
      <div className="px-20 py-12 flex  gap-8">
        <div className="space-y-5 w-1/3">
          <InputSelect label="Category" />
          <div className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg">
            <div>
              <Button onClick={openFileSystem}>Upload image</Button>
              <input
                ref={fileInput}
                className="hidden"
                type="file"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        <div className="w-2/3 space-y-5 ">
          <Input
            label="title of article"
            placeholder="House of Dragon"
            inputType="text"
          />
          <ReactQuill value={value} onChange={handleChange} className="h-80" />
        </div>
      </div>
    </React.Fragment>
  );
}
