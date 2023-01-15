import Link from 'next/link';
import { FC, useState } from 'react';

type SignButtonProps = {
  children: string;
};
const SignButton: FC<SignButtonProps> = ({ children }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      href='/login'
      className={`${
        isHover ? 'bg-red-500 text-white' : ''
      } cursor-pointer rounded-2xl border border-red-500 p-2 text-red-500`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </Link>
  );
};
export default SignButton;
