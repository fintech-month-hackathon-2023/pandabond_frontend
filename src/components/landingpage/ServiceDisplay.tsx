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
        setIsModalOpen(service == 'Build-Your-Own-Bond' ? 1 : 2);
      }}
      className={`${
        service == 'Build-Your-Own-Bond'
          ? 'rounded-tl-xl rounded-bl-xl bg-salmon pr-20 pl-10 text-start'
          : 'rounded-br-xl rounded-tr-xl bg-yellow pr-10 pl-20 text-end'
      } w-1/2 cursor-pointer pb-32 pt-10`}
    >
      <div className='pb-5 text-3xl font-bold'>{service}</div>
      <div className='text-md h-full'>
        {service == 'Build-Your-Own-Bond'
          ? `A hassle-free way to create your own bonds, your way. Build the foundation for tomorrow's success, fuel your progress and stability through bond issuance`
          : `Numbers don't lie. Invest in our bonds. Invest in your future`}
      </div>
    </div>
  );
};
export default ServiceDisplay;
