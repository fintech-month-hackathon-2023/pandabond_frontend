/* eslint-disable unused-imports/no-unused-vars */
import { FC, useState } from 'react';

import IssueModal from './IssueModal';
import PurchaseModal from './PurchaseModal';
import ServiceDisplay from './ServiceDisplay';

const ServicesDisplay: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(0);
  const [service, setService] = useState('');
  return (
    <div className='flex justify-evenly'>
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
        } absolute top-0 left-0 bottom-0 right-0 bg-black opacity-50`}
      ></div>
      <ServiceDisplay
        setService={setService}
        setIsModalOpen={setIsModalOpen}
        service='Create Your Own Bonds'
      />
      <ServiceDisplay
        setService={setService}
        setIsModalOpen={setIsModalOpen}
        service='Purchase Bonds'
      />
    </div>
  );
};
export default ServicesDisplay;
