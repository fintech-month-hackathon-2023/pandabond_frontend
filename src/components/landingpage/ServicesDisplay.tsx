/* eslint-disable unused-imports/no-unused-vars */
import { FC, useState } from 'react';
import BondsModal from './BondsModal';

import IssueModal from './IssueModal';
import PurchaseModal from './PurchaseModal';
import ServiceDisplay from './ServiceDisplay';

const ServicesDisplay: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(0);
  return (
    <div className='m-20 flex flex-col items-center justify-center gap-10 rounded-3xl p-10 shadow shadow-black'>
      <div
        onClick={() => setIsModalOpen(0)}
        className={`${
          isModalOpen ? 'cursor-pointer' : 'hidden'
        } fixed top-0 left-0 bottom-0 right-0 h-full bg-black opacity-50`}
      ></div>
      <BondsModal
        isModalOpen={isModalOpen == 3}
        setIsModalOpen={setIsModalOpen}
      />
      <IssueModal
        isModalOpen={isModalOpen == 1}
        setIsModalOpen={setIsModalOpen}
      />
      <PurchaseModal
        isModalOpen={isModalOpen == 2}
        setIsModalOpen={setIsModalOpen}
      />
      <div className='flex flex-col items-center justify-center'>
        <div className='pb-5 text-5xl font-bold'>"Bonds as a Service"</div>
        <div className='w-3/4 text-center text-lg'>
          Empowering Start-ups, SMEs and investors one step at a time - Invest
          in blockchain for a smart, more secure future. Live your dream NOW -
          We provide budding companies and brilliant entrepreneurs with a chance
          to raise capital to fund ideas, possibilities and dreams. With the
          power of Web3, we have successfully transmogrified the bonds market to
          suit the needs of our clients.
        </div>
      </div>
      <div className='flex w-3/4 justify-center'>
        <ServiceDisplay
          setIsModalOpen={setIsModalOpen}
          service='Build-Your-Own-Bond'
        />
        <ServiceDisplay
          setIsModalOpen={setIsModalOpen}
          service='Invest In Blockchain Bonds Now'
        />
      </div>
    </div>
  );
};
export default ServicesDisplay;
/*
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='text-3xl font-bold'>Build-Your-Own-Bond</div>
        </div>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='text-3xl font-bold'>
            Invest In Blockchain Bonds Now!
          </div>
        </div>
 */
