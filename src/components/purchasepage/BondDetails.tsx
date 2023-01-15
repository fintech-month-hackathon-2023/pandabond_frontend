import { FC } from 'react';
import type { Bond } from './BondListings';

type BondDetailsProps = {
  bond: Bond;
};
const BondDetails: FC<BondDetailsProps> = ({ bond }) => {
  return (
    <div className='flex grow justify-between'>
      <div>
        <div>Company Name: {bond.symbol}</div>
        <div>Bond Type: {bond.bondType}</div>
        <div>Maturity Date: {bond.maturityDate}</div>
        <div>Coupon Rate: {bond.couponRate}</div>
      </div>
      <div>
        <div>Volume: {bond.volume}</div>
        <div>Cost: {bond.cost}</div>
      </div>
    </div>
  );
};
export default BondDetails;
