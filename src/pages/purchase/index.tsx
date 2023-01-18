import type { NextPage } from 'next';

import BondListings from '@/components/purchasepage/BondListings';
import ConnectWallet from '@/components/purchasepage/ConnectWallet';

const PurchasePage: NextPage = () => {
  return (
    <div className='relative h-screen'>
      <BondListings />
      <ConnectWallet />
    </div>
  );
};

export default PurchasePage;
