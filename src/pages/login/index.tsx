import type { NextPage } from 'next';
import Head from 'next/head';
import { FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

import UnstyledLink from '@/components/links/UnstyledLink';

const SignInPage: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2'>
      <Head>
        <title> Sign In </title>
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <div className='flex w-2/3 max-w-4xl rounded-2xl bg-white shadow-2xl'>
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <UnstyledLink href='/'> PandaBond </UnstyledLink>
            </div>
            <div className='py-10'>
              <h2 className='mb-2 text-3xl font-bold text-red-500'>
                Sign in to Account
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
                <div className='mb-5 flex w-64 justify-between'>
                  <label className='flex items-center text-xs'>
                    <input type='checkbox' name='remember' className='mr-1' />
                    Remember Me
                  </label>
                  <a href='#' className='text-xs'>
                    Forgot Password?
                  </a>
                </div>
                <a
                  href='#'
                  className='inline-block rounded-full border-2 border-red-500 px-12 py-2 font-semibold text-red-500 hover:bg-red-500 hover:text-white'
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
          <div className='w-2/5 rounded-tr-2xl rounded-br-2xl bg-red-500 py-36 px-12 text-white'>
            <h2 className='mb-2 text-3xl font-bold'>Don't have an account?</h2>
            <div className='mb-2 inline-block w-10 border-2 border-white'></div>
            <p className='mb-10'>Sign up now!</p>
            <UnstyledLink
              href='/SignUpPage'
              className='inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-red-500'
            >
              Sign Up
            </UnstyledLink>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SignInPage;

export async function getStaticProps(context) {
  return {
    props: { noNavBar: true },
  };
}
