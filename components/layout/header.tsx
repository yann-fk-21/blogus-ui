import Link from 'next/link';
import React from 'react';
import Button from '../common/button';
// import Button from '../common/button';

export default function Header() {
  return (
    <React.Fragment>
      <header className="px-5 md:px-14 lg:px-20 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blogus</h1>
        <div className="flex items-center gap-5">
          <Link href="/auth/sign-in">Log in</Link>
          <Link href="/auth/sign-up">
            <Button>Sign up</Button>
          </Link>
        </div>
      </header>
    </React.Fragment>
  );
}
