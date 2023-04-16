import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchCategoriesAsync } from '@/redux/categoriesSlice';
import { fetchItemsAsync } from '@/redux/itemsSlice';
import { changeSidebarValue, changeSelectedItem } from '@/redux/UISlice';

import CategorySectionTest from './CategorySection';
import Icon from './Icon';
import Button from './Button';
import { ItemFetched } from '@/lib/types/Items';
import helper from '@/lib/helper';

export default function CategoryGrid() {
  const dispatch = useAppDispatch();
  const fetchedCategories = useAppSelector(
    (state) => state.categories.elements
  );

  const itemInfoBtnHandler = (id: string) => {
    dispatch(changeSidebarValue('item-info'));
    dispatch(changeSelectedItem(id));
  };

  return (
    <div>
      {fetchedCategories &&
        fetchedCategories.map((category) => {
          return (
            <CategorySectionTest title={category.name} key={category.id}>
              {category.items.map((item: ItemFetched) => (
                <div className="h-[70px]" key={item.id}>
                  <Button
                    onClickFunc={() => itemInfoBtnHandler(item.id)}
                    customClasses="group hover:bg-primary-accent hover:text-white text-left shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[140px] rounded-xl "
                  >
                    {helper.capitalizeString(item.name)}
                    <Icon
                      icon="add"
                      customClasses="group-hover:text-white group-hover:opacity-100  block mr-0 ml-auto opacity-20"
                    />
                  </Button>
                </div>
              ))}
            </CategorySectionTest>
          );
        })}
    </div>
  );
}
