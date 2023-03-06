import Button from './Button';
import ShoppingProductRow from './ShoppingProductRow';
import ShoppingListCategory from './ShoppingListCategory';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function ShoppingList() {
  const listName = useSelector(
    (state: RootState) => state.lists.listToCreate.name
  );

  const listItems = useSelector(
    (state: RootState) => state.lists.listToCreate.items
  );
  const categories = listItems.map((element) => element.item.category);

  return (
    <>
      <h2 className="mb-10 text-2xl font-bold text-[#34333A]">{listName}</h2>
      {categories.map((category) => {
        return (
          <ShoppingListCategory
            categoryName={category.name}
            key={category.id}
          />
        );
      })}
    </>
  );
}
