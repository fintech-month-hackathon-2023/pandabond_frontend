import { FC, useState } from 'react';

type SignButtonProps = {
  children: string;
};
const SignButton: FC<SignButtonProps> = ({ children }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`${
        isHover ? 'bg-black text-white' : ''
      } cursor-pointer rounded border border-black p-2`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </div>
  );
};
export default SignButton;
