import { FC } from 'react';

const MainContent: FC = () => {
  return (
    <div className='flex h-1/3 w-screen flex-col items-center justify-center '>
      <div className='self-start pl-5 pb-5 text-5xl font-bold'>
        Liberating Funding Troubles
      </div>
      <div className='w-3/4 self-start pl-5 text-lg'>
        "You are here, I am here". The creation of PandaBond stemmed from the
        hardships faced by startups and SMEs during the COVID season. At
        PandaBank, we understand what it means for a growing company to have
        funds and we are here to help. The implementation of PandaBond will
        offer a revolutionary way for our clients to fulfil their funding
        requirements and of course, their dreams.
      </div>
    </div>
  );
};
export default MainContent;
