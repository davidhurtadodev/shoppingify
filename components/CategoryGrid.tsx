import { useEffect } from 'react';
import Button from './Button';
import Icon from './Icon';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { CategoryFetched } from '@/lib/types/Categories';
import { fetchCategoriesAsync } from '@/redux/categoriesSlice';
import CategorySection from './CategorySection';

export default function CategoryGrid() {
  const dispatch = useAppDispatch();
  const fetchedCategories = useAppSelector(
    (state) => state.categories.elements
  );
  console.log(fetchedCategories);
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);
  return (
    <div>
      {fetchedCategories
        ? fetchedCategories.map((category) => {
            return (
              <CategorySection
                categoryName={category.name}
                items={category.items}
                key={category.id}
              />
            );
          })
        : null}
      {/* <h2 className="mb-5 text-lg font-medium">Fruit and vegetables</h2>
      <div className="gap-x-{2} gap-y-{6} grid  grid-cols-2 lg:grid-cols-4">
        <Button customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[140px] rounded-xl ">
          Avocado
          <Icon icon="add" customClasses="block mr-0 ml-auto opacity-20" />
        </Button>
        <Button customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)] flex items-center py-3  px-4 w-[140px] rounded-xl ">
          Avocado
          <Icon icon="add" customClasses="block mr-0 ml-auto opacity-20" />
        </Button>
      </div> */}
    </div>
  );
}
