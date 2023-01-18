import type { NextPage } from 'next';
import NavBar from '@/components/NavBar';
import MaturitySlider from '@/components/issuepage/MaturitySlider';
import CapitalSlider from '@/components/issuepage/CapitalSlider';
import CouponRateInput from '@/components/issuepage/CouponRateInput';
import IssueButton from '@/components/issuepage/IssueButton';
import FinePrint from '@/components/issuepage/FinePrint';

const IssueDual: NextPage = () => {
  return (
    <div className='h-screen'>
      <NavBar isLoggedIn={true} />
      <div className='flex h-full flex-col gap-10'>
        <div className='flex flex-col'>
          <div className='self-center text-lg font-bold text-red-500'>
            Time (Maturity Date)
          </div>
          <MaturitySlider />
        </div>
        <div className='flex flex-col'>
          <div className='self-center text-lg font-bold text-red-500'>
            Volume/Capital
          </div>
          <CapitalSlider bondNumber={1} />
        </div>
        <div className='flex flex-col'>
          <div className='self-center text-lg font-bold text-red-500'>
            Target Coupon Rate
          </div>
          <CouponRateInput bondNumber={1} />
        </div>
        <div className='flex w-3/4 self-center'>
          <div className='flex-1 text-center text-lg font-bold text-red-500'>
            Company Financial Statements
          </div>
          <input className='flex-1' type='file' />
        </div>
        <div className='flex w-3/4 self-center'>
          <div className='flex-1 text-center text-lg font-bold text-red-500'>
            Relevant Company Financial Details
          </div>
          <input className='flex-1 self-center' type='file' />
        </div>
        <IssueButton page='/'>Issue Bond</IssueButton>
        <hr />
        <FinePrint />
      </div>
    </div>
  );
};
export default IssueDual;
