import { FC, useState } from 'react';

type CouponRateInput = {
  bondNumber: number;
};

const CouponRateInput: FC<CouponRateInput> = ({ bondNumber }) => {
  const recommendedRates = ['6.00', '8.00', '10.00'];
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
        <div className='flex w-1/3 items-center justify-center'>
          <input
            onChange={(event) => setCouponRate(event.target.value)}
            className='w-full text-center'
            value={couponRate}
          />
          <div>%</div>
        </div>
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
