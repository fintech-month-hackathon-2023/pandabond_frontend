import type { NextPage } from 'next';

import Register from '@/components/instalment/Register';
import NavBar from '@/components/NavBar';

const InstalmentPage: NextPage = () => {
  return (
    <div>
      <NavBar isLoggedIn={true} />
      <div className='flex justify-center'>
        <Register />
      </div>
    </div>
  );
};
export default InstalmentPage;
