import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchListsAsync } from '@/redux/listsSlice';
import { RootState } from '@/redux/store';
import MonthListContainer from './MonthListContainer';
import { useListsStructured } from '@/lib/hooks/useListsStructured';

export default function MainLists() {
  const dispatch = useAppDispatch();
  const fetchedLists = useAppSelector(
    (state: RootState) => state.lists.lists.value
  );

  useEffect(() => {
    dispatch(fetchListsAsync());
  }, [dispatch]);

  const { byYearListArray } = useListsStructured(fetchedLists);

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
