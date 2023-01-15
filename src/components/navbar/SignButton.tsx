import { FC, useState } from 'react';
import Link from 'next/link';

type SignButtonProps = {
  children: string;
};
const SignButton: FC<SignButtonProps> = ({ children }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      href='/login'
      className={`${
        isHover ? 'bg-black text-white' : ''
      } cursor-pointer rounded border border-black p-2`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </Link>
  );
};
export default SignButton;
