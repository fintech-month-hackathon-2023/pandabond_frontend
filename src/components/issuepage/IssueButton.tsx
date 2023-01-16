import Link from 'next/link';
import { FC, useState } from 'react';

type IssueButtonProps = {
  children: string;
  page: string;
};
const IssueButton: FC<IssueButtonProps> = ({ children, page }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      href={page}
      className={`${isHover ? 'bg-red-500 text-white' : ''
        } cursor-pointer self-center rounded border border-red-500 p-2 text-red-500`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </Link>
  );
};
export default IssueButton;
