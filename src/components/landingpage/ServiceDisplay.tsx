import { FC } from 'react';

type ServiceDisplayProps = {
  service: string;
  setIsModalOpen: (num: number) => void;
};
const ServiceDisplay: FC<ServiceDisplayProps> = ({
  service,
  setIsModalOpen,
}) => {
  return (
    <div
      onClick={() => {
        setIsModalOpen(service == 'Corporate' ? 1 : 2);
      }}
      className='h-1/2 w-1/4 cursor-pointer rounded-lg bg-red-500 p-10'
    >
      <div className='text-xl font-bold text-white'>{service}</div>
      <div className='text-white'>
        {service == 'Corporate'
          ? `Build the foundation for tomorrow's success, fuel your progress and stability through bond issuance`
          : `Invest in our bonds, Invest in your future`}
      </div>
    </div>
  );
};
export default ServiceDisplay;
