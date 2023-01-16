import Link from 'next/link';
import { FC, useState } from 'react';

type ViewDetailButtonProps = {
  children: string;
  page: string;
};
const ViewDetailButton: FC<ViewDetailButtonProps> = ({ children, page }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      href={page}
      className={`${isHover ? 'bg-red-500 text-white' : 'text-red-500'} 
        w-fit cursor-pointer rounded-3xl  border 
      border-red-500 p-2 font-bold `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </Link>
  );
};
export default ViewDetailButton;
