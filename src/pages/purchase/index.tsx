import NavBar from '@/components/NavBar';
import BondListings from '@/components/purchasepage/BondListings';
import type {NextPage} from 'next';

const PurchasePage: NextPage = () => {
  return (
    <div className='h-screen relative'>
      <NavBar isLoggedIn={true}/>
      <BondListings/>
    </div>
  );
}

export default PurchasePage;
