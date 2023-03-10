import { PieChart } from 'react-minimal-pie-chart';
import { FC } from 'react';

type Bond = {
  title: string;
  value: number;
  color: string;
};
const DashBoard: FC = () => {
  const data = [
    { title: 'Callable Bonds', value: 72000000, color: '#DAF7A6' },
    { title: 'Time Contract Bonds', value: 95000000, color: '#FFC300' },
    { title: 'Installation Bonds', value: 172000000, color: '#FF5733' },
  ];
  return (
    <div className='flex h-full flex-col'>
      <div className='text-center text-2xl font-bold'>Total Value Logged</div>
      <div className='flex h-full items-center'>
        <PieChart className='w-2/3' lineWidth={30} radius={40} data={data} />
        <div className='flex flex-col items-start gap-5'>
          {data.map((bond) => (
            <DashBoardItem bond={bond} key={bond.color} />
          ))}
        </div>
      </div>
    </div>
  );
};
type DashBoardItemProps = {
  bond: Bond;
};
const DashBoardItem: FC<DashBoardItemProps> = ({ bond }) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
  });
  return (
    <div className='flex flex-col '>
      <div className='flex items-center justify-start gap-5'>
        <div
          className={`h-5 w-5 rounded-3xl ${
            bond.title == 'Callable Bonds'
              ? 'bg-pie1'
              : bond.title == 'Time Contract Bonds'
              ? 'bg-pie2'
              : 'bg-pie3'
          }`}
        ></div>
        <div className='font-bold'>{bond.title}</div>
      </div>
      <div>{USDollar.format(bond.value)} USDC</div>
    </div>
  );
};
export default DashBoard;
