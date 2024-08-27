'use client';

import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import User from '@/models/user';

import Input from '@/components/common/input';
import Button from '@/components/common/button';
import { redirect } from 'next/navigation';

export default function signUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const user: User = {
    name: name,
    email: email,
    password: password,
  };

  const signUp = async (e: FormEvent) => {
    e.preventDefault();

    if (user.name === '' || user.email === '' || user.password === '') {
      return setError('Please fill in all fields');
    }

    setLoading(true);
    try {
      const response = await fetch(
        'http://127.0.0.1:8080/api/v1/auth/sign-up',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        redirect('/auth/sign-in');
      } else {
        setError('Failed to sign up user');
        setLoading(false);
      }
    } catch (error: any) {
      setError(error.message);
      console.log(error);
      setLoading(false);
    }
  };

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
        <form onSubmit={signUp} className="w-1/3 flex flex-col gap-5 pt-8">
          {error && (
            <div className="w-full rounded-lg border border-red-300 bg-red-100 p-2">
              <h1 className="text-md text-red-300 text-center">{error}</h1>
            </div>
          )}
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            label="name"
            inputType="text"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            label="email"
            inputType="text"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="+6 characters"
            label="password"
            inputType="password"
          />
          <Button type="submit">{!loading ? 'Sign Up' : 'Loading ...'}</Button>
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
