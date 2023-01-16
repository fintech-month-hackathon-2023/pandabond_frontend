import { FC } from 'react';
import Link from 'next/link';
import DashBoard from '../DashBoard';
import BondsDisplay from './BondsDisplay';

type IssueModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (num: number) => void;
};

const IssueModal: FC<IssueModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`${
        isModalOpen ? '' : 'hidden'
      } absolute top-1/2 left-1/2 z-10 flex h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-5 rounded bg-white p-10`}
    >
      <div className='flex justify-between'>
        <div className='text-xl font-bold'>PandaBond</div>
        <div
          className='cursor-pointer font-bold '
          onClick={() => setIsModalOpen(0)}
        >
          Close
        </div>
      </div>
      <div className='flex h-1/2 grow'>
        <div className='w-1/2'>
          <DashBoard />
        </div>
        <div className='w-1/2 text-red-500'>
          <BondsDisplay />
        </div>
      </div>
      <Link className='font-bold text-red-500' href='/issue'>
        Start Now
      </Link>
    </div>
  );
};
export default IssueModal;
