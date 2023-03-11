import Button from './Button';
import ShoppingProductRow from './ShoppingProductRow';
import Icon from './Icon';
import ShoppingListCategory from './ShoppingListCategory';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { CategoryFetched } from '@/lib/types/Categories';
import { changeListToCreateState } from '@/redux/listsSlice';

export default function ShoppingList() {
  const dispatch = useDispatch();
  const listName = useSelector(
    (state: RootState) => state.lists.listToCreate.name
  );

  const listItems = useSelector(
    (state: RootState) => state.lists.listToCreate.items
  );

  const categoriesName = listItems.map((element) => element.item.category.name);

  const filteredCategories = [...new Set(categoriesName)];

  return (
    <>
      <div className="flex ">
        <h2 className="mb-10 text-2xl font-bold text-[#34333A]">{listName}</h2>
        <div className="ml-auto mt-2 mr-0 cursor-pointer">
          <Icon icon="create" filled />
        </div>
      </div>
      {filteredCategories.map((name) => {
        return <ShoppingListCategory categoryName={name} key={name} />;
      })}
    </>
  );
}
