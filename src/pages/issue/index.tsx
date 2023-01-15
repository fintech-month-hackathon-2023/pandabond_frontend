import { useState } from 'react';
import type { NextPage } from 'next';
import NavBar from '@/components/NavBar';
import BondButtons from '@/components/issuepage/BondButtons';
import MaturitySlider from '@/components/issuepage/MaturitySlider';
import CapitalSlider from '@/components/issuepage/CapitalSlider';
import CouponRateInput from '@/components/issuepage/CouponRateInput';

const IssuePage: NextPage = () => {
  const [selectedBond, setSelectedBond] = useState(0);
  const [yoe, setYOE] = useState(2);
  return (
    <div className='h-screen'>
      <NavBar isLoggedIn={true} />
      <div className='flex h-full flex-col gap-10'>
        <div className='flex flex-col'>
          <div className='text-center'>Choose your bond</div>
          <BondButtons
            yoe={yoe}
            selectedBond={selectedBond}
            setSelectedBond={setSelectedBond}
          />
        </div>
        <div className='flex flex-col'>
          <div className='self-center'>Time (Maturity Date)</div>
          <MaturitySlider />
        </div>
        <div className='flex flex-col'>
          <div className='self-center'>Volume/Capital</div>
          <CouponRateInput bondNumber={selectedBond} />
        </div>
        <div className='flex flex-col'>
          <div className='self-center'>Volume/Capital</div>
          <CapitalSlider />
        </div>
        <div className='self-center'>Company Details</div>
        <input className='self-center' type='file' />
      </div>
    </div>
  );
};
export default IssuePage;
