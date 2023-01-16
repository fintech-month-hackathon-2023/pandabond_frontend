import NavBar from '@/components/NavBar';
import type { NextPage } from 'next';
import payment from '../../../public/images/payment.jpg';
import Image from 'next/image';

const PaymentPage: NextPage = () => {
  return (
    <div>
      <NavBar isLoggedIn={true} />
      <div className='flex items-center justify-center'>
        <Image width='500' height='500' src={payment} alt='payment' />
      </div>
    </div>
  );
};
export default PaymentPage;
