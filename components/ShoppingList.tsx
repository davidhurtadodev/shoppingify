import Button from './Button';
import ShoppingProductRow from './ShoppingProductRow';

export default function ShoppingList() {
  return (
    <>
      <h2 className="mb-10 text-2xl font-bold text-[#34333A]">Shopping list</h2>
      <div>
        <h3 className="mb-5 text-sm font-medium text-[#828282]">
          Fruit and vegetables
        </h3>
        <ShoppingProductRow product="Avocado" pieces={2} />
        <ShoppingProductRow product="Orange" pieces={3} />
        <ShoppingProductRow product="Banana" pieces={5} />
      </div>
    </>
  );
}
