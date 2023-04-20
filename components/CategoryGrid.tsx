import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchCategoriesAsync } from '@/redux/categoriesSlice';
import { fetchItemsAsync } from '@/redux/itemsSlice';
import {
  changeSidebarValue,
  changeSelectedItem,
  changeSidebarVisible,
} from '@/redux/UISlice';

import CategorySection from './CategorySection';
import Icon from './Icon';
import Button from './Button';
import { ItemFetched } from '@/lib/types/Items';
import helper from '@/lib/helper';
import { RootState } from '@/redux/store';

interface CategoryGridProps {
  selectedCategory: string;
}

export default function CategoryGrid({ selectedCategory }: CategoryGridProps) {
  const dispatch = useAppDispatch();
  const fetchedCategories = useAppSelector(
    (state) => state.categories.elements
  );
  const isSidebarVisible = useAppSelector(
    (state) => state.UI.sidebar.isVisible
  );
  let filteredCategories;
  if (selectedCategory !== 'all') {
    filteredCategories = fetchedCategories.filter(
      (category) => category.name === selectedCategory
    );
  } else filteredCategories = fetchedCategories;

  const itemInfoBtnHandler = (id: string) => {
    dispatch(changeSidebarValue('item-info'));
    if (!isSidebarVisible) dispatch(changeSidebarVisible());

    dispatch(changeSelectedItem(id));
  };

  return (
    <div>
      {filteredCategories &&
        filteredCategories.map((category) => {
          return (
            <CategorySection title={category.name} key={category.id}>
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
            </CategorySection>
          );
        })}
    </div>
  );
}
