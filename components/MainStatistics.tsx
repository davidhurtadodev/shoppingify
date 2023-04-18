import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import RankingElements from './RankingElements';

export default function MainStatistics() {
  const allLists = useAppSelector(
    (state: RootState) => state.lists.lists.value
  );
  let listMonthItems = allLists.map((list) => {
    return {
      month: new Date(list.date).getMonth(),
      items: list.items.reduce((acc, curr) => acc + curr.quantity, 0),
    };
  });

  let totalItemsPerMonth = {};
  listMonthItems.forEach((list) => {
    if (!totalItemsPerMonth.hasOwnProperty(list.month)) {
      totalItemsPerMonth[list.month] = list.items;
    } else {
      totalItemsPerMonth[list.month] += list.items;
    }
  });
  console.log({ months: totalItemsPerMonth });
  let categoriesInLists = {
    totalElements: 0,
  };
  let itemsInList = { totalElements: 0 };
  // Get total items and categories data
  allLists.forEach((list) => {
    const items = list.items;
    items.forEach(({ item, quantity }, index) => {
      //Populate items

      if (!itemsInList.hasOwnProperty(item.name)) {
        itemsInList[item.name] = quantity;
        itemsInList.totalElements += quantity;
      } else {
        itemsInList[item.name] += quantity;
        itemsInList.totalElements += quantity;
      }
      //Populate categories
      if (!categoriesInLists.hasOwnProperty(item.category.name)) {
        categoriesInLists[item.category.name] = 1;
        categoriesInLists.totalElements += 1;
      } else {
        categoriesInLists[item.category.name] += 1;
        categoriesInLists.totalElements += 1;
      }
    });
  });

  // console.log(categoriesInLists);
  // console.log(itemsInList);
  return (
    <div className="xl:px-20">
      <div className="flex w-full flex-col xl:flex-row">
        <RankingElements
          elementType="items"
          position="left"
          elements={itemsInList}
        />
        <RankingElements
          elementType="categories"
          position="right"
          elements={categoriesInLists}
        />
      </div>

      <div className="mb-10 w-[300px]"></div>
    </div>
  );
}
