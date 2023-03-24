import Button from './Button';
import helper from '@/lib/helper';
import { CategoryFetched } from '@/lib/types/Categories';
import { ListFetched } from '@/lib/types/List';

interface HistoryCategoryItemsProps {
  category: CategoryFetched;
  selectedList: ListFetched | undefined;
}

export default function HistoryCategoryItems({
  category,
  selectedList,
}: HistoryCategoryItemsProps) {
  return (
    <div key={category.id}>
      <h2 className="mb-5 text-base font-medium">
        {helper.capitalizeString(category.name)}
      </h2>
      <div className="gap-x-{2} gap-y-{6} mb-12 grid  grid-cols-2 gap-y-12 lg:grid-cols-4">
        {selectedList?.items.map(({ item, quantity }) => {
          return item.category.id === category.id ? (
            <div className="h-[70px]" key={item.id}>
              <Button customClasses=" relative text-left shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[182px] rounded-xl ">
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
      </div>
    </div>
  );
}
