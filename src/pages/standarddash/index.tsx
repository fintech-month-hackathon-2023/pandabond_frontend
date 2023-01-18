import ProceedButton from '@/components/ProceedButton';
import type { NextPage } from 'next';

const StandardDash: NextPage = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <ProceedButton page='/issuedash'>Issue</ProceedButton>
      </div>
    </div>
  );
};
export default StandardDash;
