import { StructuredLists, ListFetched } from './types/List';

const capitalizeString = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

function formatWeekDay(dayNumber: number) {
  const days = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  };

  return days[dayNumber as keyof typeof days];
}
function formatMonth(monthNumber: number) {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  return months[monthNumber as keyof typeof months];
}
function formatDate(dateString: string) {
  const arg = new Date(dateString);
  const date = arg.getDate();
  const month = arg.getMonth() + 1;
  const year = arg.getFullYear();

  const weekDay = formatWeekDay(arg.getDay());

  return `${weekDay} ${date}.${month}.${year}`;
}

//Sort list by date
function sortLists(lists: ListFetched[]): ListFetched[] {
  const copiedLists = [...lists];
  console.log({ before: copiedLists });
  copiedLists.sort((a: ListFetched, b: ListFetched) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA.getTime() - dateB.getTime();
  });

  return copiedLists;
}
// structure list in arrays
function structureLists(sortedList: ListFetched[]): StructuredLists {
  let structuredLists: StructuredLists = {};
  sortedList.forEach((list, index) => {
    const dateObject = new Date(list.date);
    const year: string = dateObject.getFullYear().toString();
    const month: string = formatMonth(dateObject.getMonth());
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
