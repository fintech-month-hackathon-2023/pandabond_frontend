import { FC, useState } from 'react';
import BondButton from '../issuepage/BondButton';
import ProceedButton from '../ProceedButton';

type BondsModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (num: number) => void;
};
const BondsModal: FC<BondsModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [selectedBond, setSelectedBond] = useState(0);
  return (
    <div
      className={`${
        isModalOpen ? '' : 'hidden'
      } absolute top-1/2 left-1/2 z-10 flex h-1/3 w-1/2 -translate-x-1/2 -translate-y-1/2 transform flex-col gap-5 rounded bg-white p-10`}
    >
      <div className='flex justify-between'>
        <div className='text-2xl font-bold'>Select Bond</div>
        <div
          className='cursor-pointer font-bold '
          onClick={() => setIsModalOpen(0)}
        >
          Close
        </div>
      </div>
      <div className='flex justify-evenly'>
        <BondButton
          isAvailable={true}
          isSelected={selectedBond == 0}
          setSelectedBond={setSelectedBond}
          bond='Installation Bonds'
        />
        <BondButton
          isAvailable={true}
          isSelected={selectedBond == 1}
          setSelectedBond={setSelectedBond}
          bond='Time Contract Bonds'
        />
        <BondButton
          isAvailable={true}
          isSelected={selectedBond == 2}
          setSelectedBond={setSelectedBond}
          bond='Callable Bonds'
        />
        <BondButton
          isAvailable={true}
          isSelected={selectedBond == 3}
          setSelectedBond={setSelectedBond}
          bond='Dual Currency Bonds'
        />
      </div>
      <ProceedButton
        page={`${
          selectedBond == 0
            ? 'instalment'
            : selectedBond == 1
            ? 'simple'
            : selectedBond == 2
            ? 'callable'
            : 'dual'
        }`}
      >
        Start Now
      </ProceedButton>
    </div>
  );
};
export default BondsModal;
