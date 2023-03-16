import { useEffect } from 'react';
import Button from './Button';
import Icon from './Icon';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { CategoryFetched } from '@/lib/types/Categories';
import { fetchCategoriesAsync } from '@/redux/categoriesSlice';
import { fetchItemsAsync } from '@/redux/itemsSlice';
import CategorySection from './CategorySection';

export default function CategoryGrid() {
  const dispatch = useAppDispatch();
  const fetchedCategories = useAppSelector(
    (state) => state.categories.elements
  );

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchItemsAsync());
  }, [dispatch]);

  return (
    <div>
      {fetchedCategories &&
        fetchedCategories.map((category) => {
          return (
            <CategorySection
              categoryName={category.name}
              items={category.items}
              key={category.id}
            />
          );
        })}
    </div>
  );
}
