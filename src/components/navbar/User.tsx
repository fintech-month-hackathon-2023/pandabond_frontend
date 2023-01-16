import { FC } from 'react';

import SignButton from './SignButton';

type UserProps = {
  isLoggedIn: boolean;
};
const User: FC<UserProps> = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div>Welcome User!</div>;
  } else {
    return (
      <div className='flex justify-between gap-10'>
        <SignButton page='/login'>Sign In</SignButton>
        <SignButton page='/login/SignUpPage'>Sign Up</SignButton>
      </div>
    );
  }
};
export default User;
