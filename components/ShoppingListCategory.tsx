import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ShoppingProductRow from './ShoppingProductRow';

interface ShoppingListCategoryProps {
  categoryName: string;
}

export default function ShoppingListCategory({
  categoryName,
}: ShoppingListCategoryProps) {
  const listItems = useSelector(
    (state: RootState) => state.lists.listToCreate.items
  );
  const itemsInCategory = listItems.filter((item) => {
    return item.item.category.name === categoryName;
  });
  return (
    <div>
      <h3 className="mb-5 text-sm font-medium text-[#828282]">
        {categoryName}
      </h3>
      {itemsInCategory.map((item) => {
        return (
          <ShoppingProductRow
            key={item.item.id}
            product={item.item}
            pieces={item.quantity}
          />
        );
      })}
    </div>
  );
}
