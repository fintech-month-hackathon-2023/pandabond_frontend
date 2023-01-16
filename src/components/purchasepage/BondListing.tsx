import { FC } from 'react';
import ViewDetailButton from '../issuepage/ViewDetailButton';

import type { Bond } from './BondListings';

type BondListingProps = {
  bond: Bond;
  handleClick: (index: number) => void;
  index: number;
};
const BondListing: FC<BondListingProps> = ({ index, bond, handleClick }) => {
  return (
    <div className='flex w-full p-5'>
      <div
        onClick={() => handleClick(index)}
        className='flex w-full flex-4 cursor-pointer'
      >
        <div className='flex-1'>{bond.companyName}</div>
        <div className='flex-1'>{bond.couponRate}</div>
        <div className='flex-1'>{bond.maturityDate}</div>
        <div className='flex-1'>{bond.bondType}</div>
      </div>
      <div className='flex-1'>
        <ViewDetailButton page='/'>View</ViewDetailButton>
      </div>
    </div>
  );
};
export default BondListing;
