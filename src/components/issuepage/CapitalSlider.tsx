import { FC, useState } from 'react';

const CapitalSlider: FC = () => {
  const [val, setVal] = useState('0');
  return (
    <div className='flex justify-center'>
      <div className='flex w-2/3 flex-col gap-5'>
        <input
          //eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          style={{ accentColor: '#ef4444' }}
          onChange={(event) => setVal(event.target.value)}
          className='grow'
          type='range'
          min='.5'
          max='10'
          value={val}
          step='.5'
        />
        <div className='self-center'>{val} million USD</div>
      </div>
    </div>
  );
};
export default CapitalSlider;
