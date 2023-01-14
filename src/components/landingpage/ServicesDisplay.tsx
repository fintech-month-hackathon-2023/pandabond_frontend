import {FC, useState} from 'react';
import ServiceDisplay from './ServiceDisplay';
import Link from 'next/link';

const ServicesDisplay: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [service, setService] = useState('');
  return (
    <div className='flex justify-evenly'>
      <div className={`${isModalOpen ? '' : 'hidden'} absolute flex flex-col gap-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 w-1/2 p-10 rounded z-10 bg-white`}>
        <div className='flex justify-between'>
          <div>PandaBonds</div>
          <div className='cursor-pointer' onClick={() => setIsModalOpen(false)}>Close</div>
        </div>
        <div className='grow border border-black'></div>
        <Link href={service == 'Create Your Own Bonds' ? '/issue' : '/purchase'}>Proceed</Link>
      </div>
      <div onClick={() => setIsModalOpen(false)} className={`${isModalOpen ? 'cursor-pointer' : 'hidden'} absolute top-0 left-0 bottom-0 right-0 bg-black opacity-50`}></div>
      <ServiceDisplay setService={setService} setIsModalOpen={setIsModalOpen} service={'Create Your Own Bonds'}/>
      <ServiceDisplay setService={setService} setIsModalOpen={setIsModalOpen} service={'purchase bonds'}/>
    </div>
  )
}
export default ServicesDisplay;
