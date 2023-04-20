import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { fetchListsAsync } from '@/redux/listsSlice';
import helper from '@/lib/helper';
import { ListFetched, StructuredByYear } from '@/lib/types/List';

interface ListStructuredState {
  byYearListArray: StructuredByYear[];
}

export function useListsStructured(
  fetchedLists: ListFetched[]
): ListStructuredState {
  const [byYearListArray, setByYearListArray] = useState<StructuredByYear[]>(
    []
  );

  useEffect(() => {
    if (fetchedLists.length > 0) {
      const sortedListsObject = helper.structureLists(
        helper.sortLists(fetchedLists)
      );
      console.log(sortedListsObject);
      const structuredByYear = Object.entries(sortedListsObject);

      setByYearListArray(structuredByYear);
    }
  }, [fetchedLists]);

  return { byYearListArray };
}
