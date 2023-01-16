import { FC } from 'react';
import Image from 'next/image';
import whyPanda from '../../../public/images/whypanda.png';

const PurchaseIntro: FC = () => {
  return (
    <div className='flex h-full flex-col justify-center '>
      <div className='mb-5 self-center text-2xl font-bold'>
        Your One Stop Shop for Web3 Bonds
      </div>
      <div className='p-5'>
        <div className='text-lg font-bold'>
          The way we beat inflation and more
        </div>
        <div>
          Investing in blockchain bonds can provide significant yields in the
          long term. At PandaBonds, other than the usual standard bonds, we
          offer a range of bond products such as the instalment bond and dual
          currency bond option.
        </div>
      </div>
      <Image
        className='self-center'
        src={whyPanda}
        alt='whypanda'
        width='400'
        height='400'
      />
    </div>
  );
};
export default PurchaseIntro;
