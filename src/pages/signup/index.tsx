/* eslint-disable no-console */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { BsShop } from 'react-icons/bs';
import { FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import UnstyledLink from 'src/components/links/UnstyledLink';

const endpoint = process.env.API_ENDPOINT;

const fetchConfig: RequestInit = {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.AWS_API_KEY,
  } as HeadersInit,
  mode: 'cors',
  cache: 'default',
};

export default function SignUpPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [uen, setUen] = useState<string>('');
  const [tier, setTier] = useState<number>(0);
  const [account, setaccount] = useState('0x0');

  useEffect(
    () => {
      if (!window.ethereum) {
        // Nothing to do here... no ethereum provider found
        return;
      }
      const accountWasChanged = (accounts: string[]) => {
        setaccount(accounts[0]);
        console.log('accountWasChanged');
      };
      const getAndSetAccount = async () => {
        const changedAccounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setaccount(changedAccounts[0]);
        console.log('getAndSetAccount');
      };
      const clearAccount = () => {
        setaccount('0x0');
        console.log('clearAccount');
      };
      window.ethereum.on('accountsChanged', accountWasChanged);
      window.ethereum.on('connect', getAndSetAccount);
      window.ethereum.on('disconnect', clearAccount);
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(
        (accounts: string) => {
          console.log('accounts', accounts);
          // No need to set account here, it will be set by the event listener
        },
        (error: string) => {
          // Handle any UI for errors here, e.g. network error, rejected request, etc.
          // Set state as needed
          console.log(error);
        }
      );
      return () => {
        // Return function of a non-async useEffect will clean up on component leaving screen, or from re-reneder to due dependency change
        window.ethereum.off('accountsChanged', accountWasChanged);
        window.ethereum.off('connect', getAndSetAccount);
        window.ethereum.off('disconnect', clearAccount);
      };
    },
    [
      /* empty array to avoid re-request on every render, but if you have state related to a connect button, put here */
    ]
  );

  const generateTier = () => {
    const tier = Math.floor(Math.random() * 3) + 1;
    setTier(tier);
    return tier;
  };

  const register = async (
    account: string,
    name: string,
    tier: number,
    unhashed: string
  ) => {
    const name1 = name
      .split(' ')
      .map((item) => item.trim())
      .join('+');
    await fetch(
      endpoint +
        `/register?account=${account}&name=${name1}&tier=${tier}&unhashed=${unhashed}`,
      fetchConfig
    );
  };

  const handleSubmit = async () => {
    const tier = generateTier();
    console.log(email);
    console.log(password);
    console.log(uen);
    console.log(tier);
    const unhashed = [email, uen].join('-');
    await register(account, name, tier, unhashed);
  };

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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className='mb-3 flex w-64 items-center bg-gray-100 p-2'>
                  <MdLockOutline className='m-2 text-gray-400' />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='flex-1 border-transparent bg-gray-100 text-sm'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className='mb-3 flex w-64 items-center bg-gray-100 p-2'>
                  <BsShop className='m-2 text-gray-400' />
                  <input
                    type='text'
                    name='name'
                    placeholder='Company Name'
                    className='flex-1 border-transparent bg-gray-100 text-sm'
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className='mb-3 flex w-64 items-center bg-gray-100 p-2'>
                  <BsShop className='m-2 text-gray-400' />
                  <input
                    type='text'
                    name='uen'
                    placeholder='Company UEN'
                    className='flex-1 border-transparent bg-gray-100 text-sm'
                    onChange={(e) => {
                      setUen(e.target.value);
                    }}
                  />
                </div>
                {account === '0x0' ? (
                  <p>No ethereum account detected</p>
                ) : (
                  <p>Address: {account}</p>
                )}

                <button
                  disabled={account === '0x0'}
                  className='inline-block rounded-full border-2 border-red-500 px-12 py-2 font-semibold text-red-500 hover:bg-red-500 hover:text-white'
                  type='submit'
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
