import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import MainContent from '@/components/landingpage/MainContent';
import ServicesDisplay from '@/components/landingpage/ServicesDisplay';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo />
        <Head>
          <title>PandaBond</title>
          <link rel='icon' href='/favicon.ico'/>
        </Head>
        <div className='h-screen relative'>
          <NavBar isLoggedIn={false}/>
          <MainContent/>
          <ServicesDisplay/>
        </div>
    </Layout>
  );
}
