import { PieChart } from 'react-minimal-pie-chart';
import { FC } from 'react';

type Bond = {
  title: string;
  value: number;
  color: string;
};
const DashBoard: FC = () => {
  const data = [
    { title: 'Callable Bonds', value: 172000000, color: '#DAF7A6' },
    { title: 'Time Contract Bonds', value: 95000000, color: '#FFC300' },
    { title: 'Installation Bonds', value: 750255, color: '#FF5733' },
    { title: 'Multi-Currency Bonds', value: 250000, color: '#C70039' },
  ];
  return (
    <div className='flex h-full items-center'>
      <PieChart className='w-2/3' lineWidth={10} radius={30} data={data} />
      <div className='flex flex-col items-center gap-5'>
        {data.map((bond) => (
          <DashBoardItem bond={bond} key={bond.color} />
        ))}
      </div>
    </div>
  );
};
type DashBoardItemProps = {
  bond: Bond;
};
const DashBoardItem: FC<DashBoardItemProps> = ({ bond }) => {
  return (
    <div className='flex flex-col items-center'>
      <div>{bond.title}</div>
      <div>{bond.value} USD</div>
    </div>
  );
};
export default DashBoard;
