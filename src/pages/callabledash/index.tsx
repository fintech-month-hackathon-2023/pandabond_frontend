import NavBar from '@/components/NavBar';
import ProceedButton from '@/components/ProceedButton';
import type { NextPage } from 'next';

const CallableDash: NextPage = () => {
  return (
    <div>
      <NavBar isLoggedIn={true} />
      <div className='flex items-center justify-center'>
        <ProceedButton page='/issuedash'>Issue</ProceedButton>
      </div>
    </div>
  );
};
export default CallableDash;
