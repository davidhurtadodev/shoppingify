import { StructuredLists, ListFetched } from './types/List';

const capitalizeString = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

function formatWeekDay(dayNumber: number) {
  switch (dayNumber) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
  }
}
function formatMonth(monthNumber: number) {
  switch (monthNumber) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 6:
      return 'September';
    case 6:
      return 'October';
    case 6:
      return 'November';
    case 6:
      return 'December';
    default:
      return '';
  }
}
function formatDate(input: Date) {
  const date = input.getDate();
  const month = input.getMonth() + 1;
  const year = input.getFullYear();

  const weekDay = formatWeekDay(input.getDay());

  return `${weekDay} ${date}.${month}.${year}`;
}

function sortLists(lists: ListFetched[]) {
  console.log(lists);
  const copiedLists = [...lists];
  return copiedLists.sort((a: ListFetched, b: ListFetched) => {
    const dateA = a.date;
    const dateB = b.date;
    console.log(dateA.getTime() - dateB.getTime());
    return Math.abs(dateA.getTime() - dateB.getTime());
  });
}
function structureLists(sortedList: ListFetched[]) {
  let structuredLists: StructuredLists = {};
  sortedList.forEach((list, index) => {
    const year: string = list.date.getFullYear().toString();

    const month: string = formatMonth(list.date.getMonth());
    if (index === 0) {
      structuredLists = {
        [year]: { [month]: [list] },
      };
      return;
    }
    const hasYear = Object.hasOwn(structuredLists, year);

    if (hasYear) {
      const hasMonth = Object.hasOwn(structuredLists[year], month);
      if (hasMonth) {
        structuredLists[year as keyof StructuredLists][
          month as keyof StructuredLists
        ].push(list);
      } else {
        structuredLists[year as keyof StructuredLists][
          month as keyof StructuredLists
        ] = [list];
      }
    } else {
      structuredLists[year as keyof StructuredLists][
        month as keyof StructuredLists
      ] = [list];
    }
  });

  return structuredLists;
}

export default {
  capitalizeString,
  formatDate,
  formatMonth,
  sortLists,
  structureLists,
};
