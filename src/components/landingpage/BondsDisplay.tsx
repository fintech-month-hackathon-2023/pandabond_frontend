import { FC } from 'react';

const BondsDisplay: FC = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center p-10'>
      <div className='mb-5 text-2xl font-bold'>The Bonds We Offer</div>
      <div className='flex flex-col gap-5'>
        <div>
          <div className='p-5 shadow'>
            <div className='text-md font-bold '>Time Contract Bond</div>
            <div className='text-xs'>
              The faster, cheaper, more efficient version of the Tradfi Bond or
              what some may call Bond 2.0. Time Contract Bonds have a fixed
              maturity date. The bond issuer is obligated to pay the interest as
              well as the principal after the designated maturity date.
            </div>
          </div>
          <div className='p-5 shadow'>
            <div className='text-md font-bold '>Instalment Bond</div>
            <div className='text-xs'>
              Lowest Interest rates in the bond market. Bond Issuers are
              obligated to pay at regular intervals of the entire maturity
              duration. Refer to percentages <a>here</a>
            </div>
          </div>
          <div className='p-5 shadow'>
            <div className='text-md font-bold'>Callable Bond</div>
            <div className='text-xs'>
              Bond Issuer may redeem the bond before it reaches the stated
              maturity date. This provides a great level of flexibility and
              nimbleness for the company.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BondsDisplay;
