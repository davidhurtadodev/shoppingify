import MonthListContainer from './MonthListContainer';
import { useListsStructured } from '@/lib/hooks/useListsStructured';

export default function MainLists() {
  const { byYearListArray } = useListsStructured();

  // interface SortedListObject {
  //   [year: number]: {
  //     [month: string]: ListFetched[];
  //   };
  // }

  return (
    <div className="xl:px-20">
      <h2 className="mb-5  text-[26px] font-medium ">Shopping history</h2>
      {byYearListArray.map(([year, monthData]) => {
        const months = Object.entries(monthData);
        return months.map((monthArray) => (
          <MonthListContainer
            monthArray={monthArray}
            year={year}
            key={monthArray[0]}
          />
        ));
      })}
    </div>
  );
}
