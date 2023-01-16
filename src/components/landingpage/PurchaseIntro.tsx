import { FC } from 'react';

const PurchaseIntro: FC = () => {
  return (
    <div className='flex h-full flex-col justify-center '>
      <div className='mb-5 self-center text-2xl font-bold'>
        Your One Stop Shop for Web3 Bonds
      </div>
      <div className='p-5 text-red-500 shadow'>
        <div className='text-lg font-bold'>The way we beat inflation</div>
        <div>
          Investing in bonds can help to beat inflation since they tend to have
          higher yields than traditional finance banks. This means that the
          interest payments on bonds will be higher which can help to offset the
          effects of inflation.
        </div>
      </div>
      <div className='p-5 text-red-500 shadow'>
        <div className='text-lg font-bold'>Why invest in PandaBonds?</div>
        <ol>
          <li>Additional Income</li>
          <li>Portfolio Diversification</li>
          <li>Preservation of Capital</li>
          <li>Inflation Hedge</li>
          <li>Credit Risk</li>
        </ol>
      </div>
    </div>
  );
};
export default PurchaseIntro;
