import {FC, useState} from 'react';

const CapitalSlider: FC = () => {
  const [val, setVal] = useState('0');
  return (
    <div className='flex justify-center gap-10'>
      <input onChange={(event) => setVal(event.target.value)} className='w-1/2' type='range' min='.5' max='10' value={val} step='.5'/>
      <div>{val} million USD</div>
    </div>
  )
}
export default CapitalSlider;
