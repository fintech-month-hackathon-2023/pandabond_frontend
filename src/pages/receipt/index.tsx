import NavBar from '@/components/NavBar';
import type { NextPage } from 'next';
import Image from 'next/image';
import bamboo from '../../../public/images/bamboo.jpg';

const ReceiptPage: NextPage = () => {
  return (
    <div>
      <NavBar isLoggedIn={true} />
      <div className='flex items-center justify-center'>
        <div>You have received 40 Bamboo Tokens</div>
        <Image width='20' height='20' src={bamboo} alt='bamboo' />
      </div>
    </div>
  );
};
export default ReceiptPage;
