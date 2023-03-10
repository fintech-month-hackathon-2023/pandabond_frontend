import { useState } from 'react';
import ProceedButton from '@/components/ProceedButton';
import type { NextPage } from 'next';
import MaturitySlider from '@/components/issuepage/MaturitySlider';
import CapitalSlider from '@/components/issuepage/CapitalSlider';
import CouponRateInput from '@/components/issuepage/CouponRateInput';
import IssueButton from '@/components/issuepage/IssueButton';
import FinePrint from '@/components/issuepage/FinePrint';

const IssueCallable: NextPage = () => {
  const [isFactoryCreated, setIsFactoryCreated] = useState(false);
  return (
    <div className='h-screen'>
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
          <CapitalSlider bondNumber={2} />
        </div>
        <div className='flex flex-col'>
          <div className='self-center text-lg font-bold text-red-500'>
            Target Coupon Rate
          </div>
          <CouponRateInput bondNumber={2} />
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
        <div className='flex justify-center gap-10'>
          {isFactoryCreated || (
            <ProceedButton page='/'>Create Factory</ProceedButton>
          )}
          <IssueButton page='/'>Issue Bond</IssueButton>
        </div>
        <hr />
        <FinePrint />
      </div>
    </div>
  );
};
export default IssueCallable;
