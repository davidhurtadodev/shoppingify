import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchListsAsync } from '@/redux/listsSlice';
import Button from './Button';
import { ListFetched } from '@/lib/types/List';
import Icon from './Icon';

export default function MainLists() {
  const dispatch = useAppDispatch();
  const fetchedLists = useAppSelector(
    (state: RootState) => state.lists.lists.value
  );

  useEffect(() => {
    dispatch(fetchListsAsync());
  }, [dispatch]);

  console.log(fetchedLists);
  return (
    <div className="xl:px-20">
      <h2 className="mb-5  text-[26px] font-medium ">Shopping history</h2>
      <div className="w-full">
        <h3 className="mb-4 text-xs font-medium">August 2020</h3>
        {fetchedLists &&
          fetchedLists.map((list: ListFetched) => {
            return (
              <Button
                customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-full rounded-xl"
                key={list.id}
              >
                <span>{list.name}</span>
                <div className="mr-0 ml-auto flex items-center">
                  <Icon filled customClasses="text-gray" icon="event_note" />
                  <span className="text-xs text-gray">{list.date}</span>
                </div>
              </Button>
            );
          })}
      </div>
    </div>
  );
}
