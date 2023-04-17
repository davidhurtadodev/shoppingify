import { useState } from 'react';
import CategoryGrid from './CategoryGrid';
import Select from 'react-select';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import helper from '@/lib/helper';
import selectStyles from '@/lib/misc/selectStyles';

export default function MainItems() {
  const fetchedCategories = useAppSelector(
    (state: RootState) => state.categories.elements
  );

  let selectOptions = fetchedCategories.map((category) => {
    return {
      value: category.name,
      label: helper.capitalizeString(category.name),
    };
  });
  selectOptions.splice(0, 0, {
    value: 'all',
    label: 'All',
  });
  const [category, setCategory] = useState(selectOptions[0].value);

  const handleCategoryChange = (selectedOption: any) => {
    setCategory(selectedOption.value);
  };
  return (
    <div className="xl:px-20">
      <h2 className="mb-5 hidden text-[26px] font-medium lg:block">
        <span className="text-primary-accent">Shoppingify</span> allows you take
        your shopping list wherever you go
      </h2>
      <div className="mb-10 w-[300px]">
        <Select
          onChange={handleCategoryChange}
          options={selectOptions}
          styles={selectStyles}
        />
      </div>
      <CategoryGrid selectedCategory={category} />
    </div>
  );
}
