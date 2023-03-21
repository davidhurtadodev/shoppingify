import { useDispatch } from 'react-redux';
import Icon from './Icon';
import Button from './Button';
import helper from '@/lib/helper';
import { changeSidebarValue, changeSelectedItem } from '@/redux/UISlice';
import { ItemFetched } from '@/lib/types/Items';

interface CategorySectionProps {
  items: ItemFetched[];
  categoryName: string;
}

export default function CategorySection({
  categoryName,
  items,
}: CategorySectionProps) {
  const dispatch = useDispatch();
  const itemInfoBtnHandler = (id: string) => {
    console.log(id);
    dispatch(changeSidebarValue('item-info'));
    dispatch(changeSelectedItem(id));
  };
  return (
    <div>
      <h2 className="mb-5 text-base font-medium">
        {helper.capitalizeString(categoryName)}
      </h2>
      <div className="gap-x-{2} gap-y-{6} mb-12 grid  grid-cols-2 gap-y-12 lg:grid-cols-4">
        {items.map((item: any) => {
          return (
            <div className="h-[70px]" key={item.id}>
              <Button
                onClickFunc={() => itemInfoBtnHandler(item.id)}
                customClasses="text-left shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[140px] rounded-xl "
              >
                {helper.capitalizeString(item.name)}
                <Icon
                  icon="add"
                  customClasses="block mr-0 ml-auto opacity-20"
                />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
