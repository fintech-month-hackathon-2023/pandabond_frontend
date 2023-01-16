import { FC } from 'react';
import DashBoard from '../DashBoard';
import BondsDisplay from './BondsDisplay';
import ProceedButton from '../ProceedButton';

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
        <div className='text-2xl font-bold'>Issue Bonds</div>
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
        <div className='w-1/2 '>
          <BondsDisplay setIsModalOpen={setIsModalOpen} />
        </div>
      </div>
      <ProceedButton page='/issue'>Issue Bond</ProceedButton>
    </div>
  );
};
export default IssueModal;
/*
      <div
        className='w-fit cursor-pointer rounded-3xl border border-red-500 p-2 font-bold text-red-500'
        onClick={() => setIsModalOpen(3)}
      >
        Select Bond
      </div>
 */
