import { FC } from 'react';

type ServiceDisplayProps = {
  service: string;
  setIsModalOpen: (bool: boolean) => void;
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
        setIsModalOpen(true);
        setService(service);
      }}
      className='cursor-pointer'
    >
      {service}
    </div>
  );
};
export default ServiceDisplay;
