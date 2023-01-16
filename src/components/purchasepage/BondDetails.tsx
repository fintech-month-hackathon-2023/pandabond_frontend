import { FC } from 'react';
import type { Bond } from './BondListings';

type BondDetailsProps = {
  bond: Bond;
};
const BondDetails: FC<BondDetailsProps> = ({ bond }) => {
  return (
    <div className='flex grow justify-between'>
      <div>
        <div className='text-lg'>
          <span className='font-bold'>Bond Type: </span>
          {bond.bondType}
        </div>
        <div className='text-lg'>
          <span className='font-bold'>Maturity Date: </span>
          {bond.maturityDate}
        </div>
        <div className='text-lg'>
          <span className='font-bold'>Coupon Rate: </span>
          {bond.couponRate}
        </div>
      </div>
      <div>
        <div className='text-lg'>
          <span className='font-bold'>Volume: </span>
          {bond.volume}
        </div>
        <div className='text-lg'>
          <span className='font-bold'>Cost: </span>
          {bond.cost}
        </div>
      </div>
    </div>
  );
};
export default BondDetails;
