import Link from 'next/link';
import { FC, useState } from 'react';

type SignButtonProps = {
  children: string;
  page: string;
};
const SignButton: FC<SignButtonProps> = ({ children, page }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      href={page}
      className={`${
        isHover ? 'bg-red-500 text-white' : 'text-red-500'
      } cursor-pointer rounded-3xl border border-red-500 p-2`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </Link>
  );
};
export default SignButton;
