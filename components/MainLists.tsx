import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchListsAsync } from '@/redux/listsSlice';
import helper from '@/lib/helper';
import Button from './Button';
import { ListFetched } from '@/lib/types/List';
import Icon from './Icon';
import Badge from './Badge';
import { ObjectType } from 'typescript';

export default function MainLists() {
  const dispatch = useAppDispatch();
  const fetchedLists = useAppSelector(
    (state: RootState) => state.lists.lists.value
  );

  useEffect(() => {
    dispatch(fetchListsAsync());
  }, [dispatch]);
  let sortedListsObject;
  let byYearListArray;
  if (fetchedLists.length > 0) {
    sortedListsObject = helper.structureLists(helper.sortLists(fetchedLists));

    const structuredByYear = Object.entries(sortedListsObject);
    console.log({ strudtued: structuredByYear });

    byYearListArray = structuredByYear.map((yearStructure) => ({
      year: yearStructure[0],
      months: Object.entries(yearStructure[1]),
    }));
  }

  function test(byYearListArray) {
    return byYearListArray.map((object, index) => {
      let year = object.year;
      let months = byYearListArray[index].months;

      return months.map((monthArray, index) => {
        const month = monthArray[0];
        console.log(monthArray, 'montharray');
        return (
          <div className="w-full" key="month">
            <h3 className="mb-4 text-xs font-medium">{`${month} ${year}`}</h3>
            {monthArray[1].map((list) => {
              console.log(list, 'lista');
              console.log(`${list.name} ${month} ${year}`);
              return (
                <Button
                  customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-6  px-4 w-full rounded-xl mb-7"
                  key={list.id}
                >
                  <span>{helper.capitalizeString(list.name)}</span>
                  <div className="mr-0 ml-auto flex items-center">
                    <Icon
                      filled
                      customClasses="text-gray mr-3"
                      icon="event_note"
                    />
                    <span className="mr-6 text-xs text-gray">
                      {helper.formatDate(list.date)}
                    </span>
                    <Badge
                      customClasses="mr-8"
                      isCancelled={list.isCancelled}
                    />
                    <Icon
                      icon="chevron_right"
                      customClasses="text-primary-accent"
                    />
                  </div>
                </Button>
              );
            })}
          </div>
        );
      });
    });
  }
  return (
    <div className="xl:px-20">
      <h2 className="mb-5  text-[26px] font-medium ">Shopping history</h2>
      {fetchedLists.length > 0 && test(byYearListArray)}
      {/* <div className="w-full">
        <h3 className="mb-4 text-xs font-medium">August 2020</h3>
        {fetchedLists &&
          fetchedLists.map((list: ListFetched) => {
            return (
              <Button
                customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-6  px-4 w-full rounded-xl mb-7"
                key={list.id}
              >
                <span>{helper.capitalizeString(list.name)}</span>
                <div className="mr-0 ml-auto flex items-center">
                  <Icon
                    filled
                    customClasses="text-gray mr-3"
                    icon="event_note"
                  />
                  <span className="mr-6 text-xs text-gray">
                    {helper.formatDate(list.date)}
                  </span>
                  <Badge customClasses="mr-8" isCancelled={list.isCancelled} />
                  <Icon
                    icon="chevron_right"
                    customClasses="text-primary-accent"
                  />
                </div>
              </Button>
            );
          })}
      </div> */}
    </div>
  );
}
