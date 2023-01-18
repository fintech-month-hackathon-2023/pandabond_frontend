import type { NextPage } from 'next';
import Button from '@/components/buttons/Button';
import NavBar from '@/components/NavBar';

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
