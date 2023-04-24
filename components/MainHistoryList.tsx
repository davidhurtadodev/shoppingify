import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import Button from './Button';
import Icon from './Icon';
import HistoryCategoryItems from './HistoryCategoryItems';
import CategorySection from './CategorySection';
import helper from '@/lib/helper';

interface MainHistoryList {
  listId: string;
}

export default function MainHistoryList({ listId }: MainHistoryList) {
  const lists = useAppSelector((state: RootState) => state.lists.lists.value);

  const selectedList = lists.find((list) => list.id === listId);
  const categoriesInList = selectedList?.items.map(
    (item) => item.item.category
  );

  const notDuplicatesCategories = Array.from(
    new Set(categoriesInList!.map((category) => category.id))
  ).map((id) => {
    return categoriesInList?.find((category) => category.id === id);
  });

  return (
    <div className="xl:px-20">
      <Link href="/history">
        <Button customClasses=" text-primary-accent text-sm flex items-center mb-8">
          <Icon
            icon="arrow_right_alt"
            customClasses="text-primary-accent font-bold rotate-180  mr-[6px]"
          />
          back
        </Button>
      </Link>
      <h2 className="mb-5 hidden text-[26px] font-medium lg:block">
        {selectedList?.name}
      </h2>
      <div className="mb-14 flex items-center">
        <Icon filled customClasses="text-gray mr-3" icon="event_note" />
        <span className="mr-6 text-xs text-gray">
          {helper.formatDate(selectedList?.date)}
        </span>
      </div>

      {notDuplicatesCategories.map((category) =>
        category ? (
          <CategorySection key={category.id} title={category.name}>
            {selectedList?.items.map(({ item, quantity }) => {
              return item.category.id === category.id ? (
                <div className="h-[70px]" key={item.id}>
                  <Button customClasses="  relative text-left shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[182px] rounded-xl ">
                    <div className="w-1/2">
                      {helper.capitalizeString(item.name)}
                    </div>
                    <span className=" absolute right-4 top-4 ml-auto mr-0 self-start text-xs font-bold text-primary-accent">
                      {quantity} pcs
                    </span>
                  </Button>
                </div>
              ) : null;
            })}
          </CategorySection>
        ) : null
      )}
    </div>
  );
}
