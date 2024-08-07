import React from 'react';
import Link from 'next/link';

import Input from '@/components/common/input';
import Button from '@/components/common/button';

export default function signUpPage() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center py-12">
        <div className="text-center">
          <Link href="/">
            {' '}
            <h1 className="text-gray-950 text-2xl font-bold">Blogus</h1>
          </Link>
          <p className="text-md text-gray-500">
            Sign up to blogus, start writing the story :)
          </p>
        </div>
        <form className="w-1/3 flex flex-col gap-5 pt-8">
          <Input placeholder="Jane Doe" label="name" inputType="text" />
          <Input
            placeholder="example@gmail.com"
            label="email"
            inputType="text"
          />
          <Input
            placeholder="+6 characters"
            label="password"
            inputType="password"
          />
          <Button>Sign Up</Button>
          <div className="text-center text-sm">
            <p className="text-gray-500">
              Already have an account?
              <Link href="/auth/sign-in" className="underline font-bold">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
