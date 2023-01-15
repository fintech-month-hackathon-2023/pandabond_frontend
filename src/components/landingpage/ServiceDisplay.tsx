import { FC } from 'react';

type ServiceDisplayProps = {
  service: string;
  setIsModalOpen: (num: number) => void;
  setService: (service: string) => void;
};
const ServiceDisplay: FC<ServiceDisplayProps> = ({
  service,
  setService,
  setIsModalOpen,
}) => {
  return (
    <div
      onClick={() => {
        setIsModalOpen(service == 'Create Your Own Bonds' ? 1 : 2);
        setService(service);
      }}
      className='cursor-pointer'
    >
      {service}
    </div>
  );
};
export default ServiceDisplay;
