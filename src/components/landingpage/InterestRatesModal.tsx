import { FC } from 'react';
import instalmentBonds from '../../../public/images/test.png';
import Image from 'next/image';

type InterestRatesModal = {
  isModalOpen: boolean;
  setIsModalOpen: (num: number) => void;
};
const InterestRatesModal: FC<InterestRatesModal> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <div
      className={`${
        isModalOpen ? '' : 'hidden'
      } absolute top-1/2 left-1/2 z-10 flex h-2/3 w-1/2 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-5 rounded bg-white p-10`}
    >
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>Instalment Bonds Rates</div>
        <div
          className='cursor-pointer font-bold '
          onClick={() => setIsModalOpen(1)}
        >
          Close
        </div>
      </div>
      <Image src={instalmentBonds} alt='instalment bonds rates' />
    </div>
  );
};
export default InterestRatesModal;
