import { useState } from 'react';
import type { NextPage } from 'next';
import NavBar from '@/components/NavBar';
import BondButtons from '@/components/issuepage/BondButtons';
import MaturitySlider from '@/components/issuepage/MaturitySlider';
import CapitalSlider from '@/components/issuepage/CapitalSlider';
import CouponRateInput from '@/components/issuepage/CouponRateInput';
import IssueButton from '@/components/issuepage/IssueButton';

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
          <CapitalSlider />
        </div>
        <div className='flex flex-col'>
          <div className='self-center text-lg font-bold text-red-500'>
            Target Coupon Rate
          </div>
          <CouponRateInput bondNumber={selectedBond} />
        </div>
        <div className='self-center text-lg font-bold text-red-500'>
          Relevant Company Financial Details
        </div>
        <input className='self-center' type='file' />
        <IssueButton page='/receipt'>Issue Bond</IssueButton>
      </div>
    </div>
  );
};
export default IssuePage;
