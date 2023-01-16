import { FC } from 'react';
import Link from 'next/link';
import DashBoard from '../DashBoard';
import PurchaseIntro from './PurchaseIntro';
import ProceedButton from '../ProceedButton';

type PurchaseModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (num: number) => void;
};

const PurchaseModal: FC<PurchaseModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <div
      className={`${
        isModalOpen ? '' : 'hidden'
      } absolute top-1/2 left-1/2 z-10 flex h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-5 rounded bg-white p-10`}
    >
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>Purchase Bonds</div>
        <div
          className='cursor-pointer font-bold'
          onClick={() => setIsModalOpen(0)}
        >
          Close
        </div>
      </div>
      <div className='flex h-1/2 grow'>
        <div className='w-1/2'>
          <PurchaseIntro />
        </div>
        <div className='w-1/2 border border-black'>test</div>
      </div>
      <ProceedButton page='/purchase'>Start Now</ProceedButton>
    </div>
  );
};
export default PurchaseModal;
