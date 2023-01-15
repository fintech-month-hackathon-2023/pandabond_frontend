import { FC } from 'react';
import User from './navbar/User';
import Link from 'next/link';

type NavBarProps = {
  isLoggedIn: boolean;
};
const NavBar: FC<NavBarProps> = ({ isLoggedIn }) => {
  return (
    <div className='flex items-center justify-between p-5'>
      <Link href='/'>PandaBond</Link>
      <User isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default NavBar;
