import Button from '@/components/buttons/Button';
import NavBar from '@/components/NavBar';
import type { NextPage } from 'next';

const InstalmentPage: NextPage = () => {
  return (
    <div>
      <NavBar isLoggedIn={true} />
      <div className='flex justify-center'>
        <Button>Register</Button>
      </div>
    </div>
  );
};
export default InstalmentPage;
