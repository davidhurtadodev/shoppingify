import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import RankingElements from './RankingElements';

export default function MainStatistics() {
  const allLists = useAppSelector(
    (state: RootState) => state.lists.lists.value
  );

  //array of each list with month and object
  let listMonthItems = allLists.map((list) => {
    return {
      month: new Date(list.date).getMonth(),
      items: list.items.reduce((acc, curr) => acc + curr.quantity, 0),
    };
  });

  let totalItemsPerMonth = {};
  //Get total items per month
  listMonthItems.forEach((list) => {
    if (!totalItemsPerMonth.hasOwnProperty(list.month)) {
      totalItemsPerMonth[list.month] = list.items;
    } else {
      totalItemsPerMonth[list.month] += list.items;
    }
  });
  // console.log(listMonthItems);
  // console.log({ months: totalItemsPerMonth });
  const dataArray = [];

  for (const [month, items] of Object.entries(totalItemsPerMonth)) {
    dataArray.push({ items: items, month: month });
  }
  console.log(dataArray);
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
      <div className="mb-16 flex w-full flex-col xl:flex-row">
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
      <h2 className="mb-10 text-2xl font-medium">Monthly Summary</h2>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          width={400}
          // height={400}
          data={dataArray}
          margin={{ top: 5, right: 5, bottom: 5, left: -30 }}
        >
          <Line type="monotone" dataKey="items" stroke="#F9A109" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis dataKey="items" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
