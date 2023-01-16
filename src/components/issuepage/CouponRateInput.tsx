import { FC, useState } from 'react';

type CouponRateInput = {
  bondNumber: number;
};

const CouponRateInput: FC<CouponRateInput> = ({ bondNumber }) => {
  const recommendedRates = ['4.00', '6.00', '8.00'];
  const [couponRate, setCouponRate] = useState(recommendedRates[bondNumber]);
  return (
    <div className='flex justify-evenly'>
      <div className='flex justify-center gap-5'>
        <button
          onClick={() =>
            setCouponRate((prev) => {
              const newVal: number = parseFloat(prev) - 0.05;
              return newVal.toFixed(2);
            })
          }
        >
          -
        </button>
        <input
          onChange={(event) => setCouponRate(event.target.value)}
          className='w-1/3 p-2 text-center'
          value={couponRate + '%'}
        />
        <button
          onClick={() =>
            setCouponRate((prev) => {
              const newVal: number = parseFloat(prev) + 0.05;
              return newVal.toFixed(2);
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CouponRateInput;
