import Button from './Button';
import Image from 'next/image';
import ShoppingProductRow from './ShoppingProductRow';
import Icon from './Icon';
import ShoppingListCategory from './ShoppingListCategory';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { CategoryFetched } from '@/lib/types/Categories';
import { changeListToCreateState } from '@/redux/listsSlice';
import shoppingImage from '@/public/assets/images/shopping.svg';

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
      {/* if there are items */}
      {listItems &&
        filteredCategories.map((name) => {
          return <ShoppingListCategory categoryName={name} key={name} />;
        })}
      {/* {if there are not items} */}
      {listItems.length === 0 && (
        <div className="relative flex flex-grow flex-col items-center justify-center">
          <p className="mt-auto text-xl font-bold">No item</p>

          <Image
            className="mt-auto -mb-2"
            src={shoppingImage}
            alt="no item image"
          />
        </div>
      )}
    </>
  );
}
