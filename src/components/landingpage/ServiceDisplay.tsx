import {FC} from 'react';

type ServiceDisplayProps = {
  service: string;
  setIsModalOpen: (bool: boolean) => void;
}
const ServiceDisplay: FC<ServiceDisplayProps> = ({service, setIsModalOpen}) => {
  return (
  <div onClick={() => setIsModalOpen(true)} className='cursor-pointer'>
    {service}
  </div>
  )
}
export default ServiceDisplay;
