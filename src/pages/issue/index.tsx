import { useState } from 'react';
import type { NextPage } from 'next';
import NavBar from '@/components/NavBar';
import BondButtons from '@/components/issuepage/BondButtons';
import MaturitySlider from '@/components/issuepage/MaturitySlider';
import CapitalSlider from '@/components/issuepage/CapitalSlider';
import CouponRateInput from '@/components/issuepage/CouponRateInput';
import IssueButton from '@/components/issuepage/IssueButton';
import FinePrint from '@/components/issuepage/FinePrint';

const IssuePage: NextPage = () => {
  const [selectedBond, setSelectedBond] = useState(0);
  const [yoe, setYOE] = useState(2);
  return (
    <div className='h-screen'>
      <NavBar isLoggedIn={true} />
      <div className='flex h-full flex-col gap-10'>
        <div className='flex flex-col gap-1'>
          <div className='text-center text-2xl font-bold text-red-500'>
            Choose your bond
          </div>
          <BondButtons
            yoe={yoe}
            selectedBond={selectedBond}
            setSelectedBond={setSelectedBond}
          />
        </div>
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
          <CapitalSlider yoe={yoe} />
        </div>
        <div className='flex flex-col'>
          <div className='self-center text-lg font-bold text-red-500'>
            Target Coupon Rate
          </div>
          <CouponRateInput bondNumber={selectedBond} />
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
        <IssueButton page='/receipt'>Issue Bond</IssueButton>
        <hr />
        <FinePrint />
      </div>
    </div>
  );
};
export default IssuePage;
