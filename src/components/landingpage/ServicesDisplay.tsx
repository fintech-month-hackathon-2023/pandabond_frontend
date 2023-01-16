/* eslint-disable unused-imports/no-unused-vars */
import { FC, useState } from 'react';

import IssueModal from './IssueModal';
import PurchaseModal from './PurchaseModal';
import ServiceDisplay from './ServiceDisplay';

const ServicesDisplay: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(0);
  return (
    <div className='flex h-1/3 justify-evenly pl-10 pr-10'>
      <IssueModal
        isModalOpen={isModalOpen == 1}
        setIsModalOpen={setIsModalOpen}
      />
      <PurchaseModal
        isModalOpen={isModalOpen == 2}
        setIsModalOpen={setIsModalOpen}
      />
      <div
        onClick={() => setIsModalOpen(0)}
        className={`${
          isModalOpen ? 'cursor-pointer' : 'hidden'
        } absolute top-0 left-0 bottom-0 right-0 h-full bg-black opacity-50`}
      ></div>
      <ServiceDisplay setIsModalOpen={setIsModalOpen} service='Corporate' />
      <ServiceDisplay setIsModalOpen={setIsModalOpen} service='Consumer' />
    </div>
  );
};
export default ServicesDisplay;
