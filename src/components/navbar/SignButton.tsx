import {FC, useState} from 'react';

type SignButtonProps = {
  children: string;
}
const SignButton: FC<SignButtonProps> = ({children}) => {
  const [isHover, setIsHover] = useState(false);
  return <div className={`${isHover ? 'text-white bg-black' : ''} cursor-pointer border border-black rounded p-2`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>{children}</div>
}
export default SignButton;
