import { FC, useState } from 'react';
import BondListing from './BondListing';
import BondDetails from './BondDetails';
import Link from 'next/link';

export type Bond = {
  symbol: string;
  maturityDate: string;
  couponRate: string;
  volume: string;
  cost: string;
  bondType: string;
};
const BondListings: FC = () => {
  const bonds: Bond[] = [
    {
      symbol: 'A',
      maturityDate: '15-01-24',
      couponRate: '4.00%',
      volume: '100m',
      cost: '20 USD',
      bondType: 'Installation Bond',
    },
    {
      symbol: 'B',
      maturityDate: '15-07-23',
      couponRate: '6.00%',
      volume: '30m',
      cost: '40USD',
      bondType: 'Time Contract Bond',
    },
    {
      symbol: 'C',
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
        } absolute top-1/2 left-1/2 z-10 flex h-2/3 w-1/2 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-5 rounded bg-white p-10`}
      >
        <div className='flex justify-between'>
          <div>PandaBonds</div>
          <div className='cursor-pointer' onClick={() => setIsModalOpen(false)}>
            Close
          </div>
        </div>
        {selectedBond && <BondDetails bond={selectedBond} />}
        <Link href=''>Purchase Bond</Link>
      </div>
      <div
        onClick={() => setIsModalOpen(false)}
        className={`${
          isModalOpen ? 'cursor-pointer' : 'hidden'
        } absolute top-0 left-0 bottom-0 right-0 bg-black opacity-50`}
      ></div>
      <div className='m-10 flex h-full flex-col items-center'>
        {bonds.map((bond, index) => (
          <BondListing
            bond={bond}
            index={index}
            key={bond.symbol}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};
export default BondListings;
