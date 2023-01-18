import Button from '@/components/buttons/Button';
import type { NextPage } from 'next';

const SimplePage: NextPage = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <Button>Register</Button>
      </div>
    </div>
  );
};
export default SimplePage;
