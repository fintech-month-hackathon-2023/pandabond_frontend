import type { NextPage } from 'next';

import NavBar from '@/components/NavBar';
import BondListings from '@/components/purchasepage/BondListings';
import ConnectWallet from '@/components/purchasepage/ConnectWallet';

const PurchasePage: NextPage = () => {
  return (
    <div className='relative h-screen'>
      <NavBar isLoggedIn={true} />
      <BondListings />
      <ConnectWallet />
    </div>
  );
};

export default PurchasePage;
