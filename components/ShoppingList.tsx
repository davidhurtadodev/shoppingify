import Button from './Button';
import ShoppingProductRow from './ShoppingProductRow';
import ShoppingListCategory from './ShoppingListCategory';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { CategoryFetched } from '@/lib/types/Categories';

export default function ShoppingList() {
  const listName = useSelector(
    (state: RootState) => state.lists.listToCreate.name
  );

  const listItems = useSelector(
    (state: RootState) => state.lists.listToCreate.items
  );

  const categoriesName = listItems.map((element) => element.item.category.name);
  // let filteredCategories = categories.filter((element, index, array) => {

  //  }
  // });
  const filteredCategories = [...new Set(categoriesName)];
  // categories.forEach((category) => {

  //   if (categories.some(({ id }) => id !== category.id))
  //     // )    if (filteredCategories.name(category)) return;

  //     filteredCategories.push(category);
  // });
  // const filteredCategories = categories.filter((category, index, array) => {
  //   if (index=== 0)  return category;
  //   for (let i = index; i >= 0; i++) {

  //   }
  // })

  return (
    <>
      <h2 className="mb-10 text-2xl font-bold text-[#34333A]">{listName}</h2>
      {filteredCategories.map((name) => {
        return <ShoppingListCategory categoryName={name} key={name} />;
      })}
    </>
  );
}
