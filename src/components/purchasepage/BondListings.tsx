import { FC, useState } from 'react';

import BondDetails from './BondDetails';
import BondListing from './BondListing';
import PurchaseBond from './PurchaseBond';

export type Bond = {
  companyName: string;
  maturityDate: string;
  couponRate: string;
  volume: string;
  cost: string;
  bondType: string;
};
const BondListings: FC = () => {
  const bonds: Bond[] = [
    {
      companyName: 'A',
      maturityDate: '15-01-24',
      couponRate: '4.00%',
      volume: '100m',
      cost: '20 USD',
      bondType: 'Installation Bond',
    },
    {
      companyName: 'B',
      maturityDate: '15-07-23',
      couponRate: '6.00%',
      volume: '30m',
      cost: '40USD',
      bondType: 'Time Contract Bond',
    },
    {
      companyName: 'C',
      maturityDate: '15-01-25',
      couponRate: '8.00%',
      volume: '80m',
      cost: '50USD',
      bondType: 'Callable Bond',
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBond, setSelectedBond] = useState<Bond | undefined>();
  const handleClick = (index: number) => {
    setIsModalOpen(true);
    setSelectedBond(bonds[index]);
  };

  return (
    <div>
      <div
        className={`${
          isModalOpen ? '' : 'hidden'
        } absolute top-1/2 left-1/2 z-10 flex h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-5 rounded bg-white p-10`}
      >
        <div className='flex justify-between'>
          <div className='text-2xl font-bold'>
            {selectedBond && selectedBond.companyName}
          </div>
          <div
            className='cursor-pointer font-bold'
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </div>
        </div>
        {selectedBond && <BondDetails bond={selectedBond} />}
        <PurchaseBond />
      </div>
      <div
        onClick={() => setIsModalOpen(false)}
        className={`${
          isModalOpen ? 'cursor-pointer' : 'hidden'
        } absolute top-0 left-0 bottom-0 right-0 bg-black opacity-50`}
      ></div>
      <div className='m-10 flex h-full flex-col items-center rounded shadow shadow-black'>
        <div className='flex w-full p-5 font-bold'>
          <div className='flex-1'>Company Name</div>
          <div className='flex-1'>Coupon Rate</div>
          <div className='flex-1'>Maturity Date</div>
          <div className='flex-1'>Bond Type</div>
          <div className='flex-1'>Company Details</div>
        </div>
        {bonds.map((bond, index) => (
          <BondListing
            bond={bond}
            index={index}
            key={bond.companyName}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};
export default BondListings;
