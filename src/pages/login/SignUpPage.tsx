import Head from 'next/head';
import React from 'react';
import { BsShop } from 'react-icons/bs';
import { FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function SignUpPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2'>
      <Head>
        <title> Sign Up </title>
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <div className='flex w-2/3 max-w-4xl rounded-2xl bg-white shadow-2xl'>
          <div className='w-full p-5'>
            <div className='text-left font-bold'>
              <UnstyledLink href='/'> PandaBond </UnstyledLink>
            </div>
            <div className='py-10'>
              <h2 className='mb-2 text-3xl font-bold text-red-500'>
                Sign up for Account
              </h2>
              <div className='mb-2 inline-block w-10 border-2 border-red-500'></div>
              <div className='my-2 flex justify-center'>
                <a
                  href='#'
                  className='mx-1 rounded-full border-2 border-gray-200 p-3'
                >
                  <FaGoogle className='text-sm' />
                </a>
              </div>
              {/* Social Login Section */}
              <p className='my-3 text-gray-500'>or use your email account</p>
              <div className='flex flex-col items-center'>
                <div className='mb-3 flex w-64 items-center bg-gray-100 p-2'>
                  <FaRegEnvelope className='m-2 text-gray-400' />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='flex-1 border-transparent bg-gray-100 text-sm'
                  />
                </div>
                <div className='mb-3 flex w-64 items-center bg-gray-100 p-2'>
                  <MdLockOutline className='m-2 text-gray-400' />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='flex-1 border-transparent bg-gray-100 text-sm'
                  />
                </div>
                <div className='mb-3 flex w-64 items-center bg-gray-100 p-2'>
                  <BsShop className='m-2 text-gray-400' />
                  <input
                    type='password'
                    name='password'
                    placeholder='Company UEN'
                    className='flex-1 border-transparent bg-gray-100 text-sm'
                  />
                </div>
                <a
                  href='#'
                  className='inline-block rounded-full border-2 border-red-500 px-12 py-2 font-semibold text-red-500 hover:bg-red-500 hover:text-white'
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}