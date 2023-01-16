import { FC } from 'react';

type BondButtonProps = {
  bond: string;
  isSelected: boolean;
  setSelectedBond: (bondNumber: number) => void;
  isAvailable: boolean;
};
const BondButton: FC<BondButtonProps> = ({
  bond,
  isAvailable,
  isSelected,
  setSelectedBond,
}) => {
  const handleClick = () => {
    const bondNumber =
      bond == 'Installation Bonds'
        ? 0
        : bond == 'Time Contract Bonds'
        ? 1
        : bond == 'Callable Bonds'
        ? 2
        : 3;
    setSelectedBond(bondNumber);
  };
  if (isAvailable) {
    return (
      <div
        onClick={handleClick}
        className={`${
          isSelected ? 'bg-red-500 text-white' : 'text-red-500'
        } cursor-pointer border border-red-500 p-2`}
      >
        {bond}
      </div>
    );
  } else {
    return (
      <div
        onClick={() =>
          alert(
            `You require at least ${
              bond == 'Time Contract Bonds' ? '2' : '5'
            } years of experience to issue ${bond}`
          )
        }
        className='cursor-not-allowed border border-gray-300 p-2 text-gray-300'
      >
        {bond}
      </div>
    );
  }
};
export default BondButton;
