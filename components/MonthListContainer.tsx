import Link from 'next/link';
import { ListFetched } from '@/lib/types/List';
import MonthListButton from './MonthListButton';

interface MonthListContainerProps {
  monthArray: [string, ListFetched[]];
  year: string;
}

export default function MonthListContainer({
  monthArray,
  year,
}: MonthListContainerProps) {
  const month = monthArray[0];
  return (
    <div className="w-full" key={month}>
      <h3 className="mb-4 text-xs font-medium">{`${month} ${year}`}</h3>
      {monthArray[1].map((list) => (
        <Link href={`/history/${encodeURIComponent(list.id)}`} key={list.id}>
          <MonthListButton list={list} />
        </Link>
      ))}
    </div>
  );
}
