import { FC } from 'react';

const BondsDisplay: FC = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center p-10'>
      <div className='mb-5 text-2xl font-bold'>The Bonds We Offer</div>
      <div className='flex flex-col gap-5'>
        <div className='text-red-500'>
          <div className='p-5 shadow'>
            <div className='text-lg font-bold '>Time Contract Bond</div>
            <div>
              Standard bond, fixed maturity date. The bond issuer is obligated
              to make regular interst payments until maturity date. This is
              different from a callable bond which gives the issuer the option
              to redeem the bond before its maturity date.
            </div>
          </div>
          <div className='p-5 shadow'>
            <div className='text-lg font-bold '>Installation Bond</div>
            <div>
              Repay periodically to your bondholders until full payment is met.
              Freedom to stretch between 6 months and 10 years.
            </div>
          </div>
          <div className='p-5 shadow'>
            <div className='text-lg font-bold'>Callable Bond</div>
            <div>
              Provides the issuer with the right to redeem the bond before
              maturity date to refinance debts at a lower cost.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BondsDisplay;
