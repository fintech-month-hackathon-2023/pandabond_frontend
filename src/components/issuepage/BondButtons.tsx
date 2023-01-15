import { FC } from 'react';
import BondButton from './BondButton';

type BondButtonsProps = {
  selectedBond: number;
  setSelectedBond: (bondNumber: number) => void;
  yoe: number;
};
const BondButtons: FC<BondButtonsProps> = ({
  yoe,
  selectedBond,
  setSelectedBond,
}) => {
  return (
    <div className='flex h-fit items-center justify-center gap-16'>
      <BondButton
        isAvailable={yoe > 0}
        isSelected={selectedBond == 0}
        setSelectedBond={setSelectedBond}
        bond={'Installation Bonds'}
      />
      <BondButton
        isAvailable={yoe > 2}
        isSelected={selectedBond == 1}
        setSelectedBond={setSelectedBond}
        bond={'Time Contract Bonds'}
      />
      <BondButton
        isAvailable={yoe > 5}
        isSelected={selectedBond == 2}
        setSelectedBond={setSelectedBond}
        bond={'Callable Bonds'}
      />
      <BondButton
        isAvailable={true}
        isSelected={selectedBond == 3}
        setSelectedBond={setSelectedBond}
        bond={'Multi-Currency Bonds'}
      />
    </div>
  );
};
export default BondButtons;
