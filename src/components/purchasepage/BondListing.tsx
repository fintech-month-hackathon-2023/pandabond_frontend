import {FC} from 'react';
import type {Bond} from './BondListings';

type BondListingProps = {
  bond: Bond;
  handleClick: (index: number) => void;
  index: number;
}
const BondListing: FC<BondListingProps> = ({index, bond, handleClick}) => {
  return (
    <div onClick={() => handleClick(index)} className='cursor-pointer border border-black w-full flex justify-between p-2'>
      <div>{bond.symbol}</div>
      <div>{bond.couponRate}</div>
      <div>Maturity Date: {bond.maturityDate}</div>
    </div>
  )
}
export default BondListing;
