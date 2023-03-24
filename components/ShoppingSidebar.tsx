import AddItem from './AddItem';
import ShoppingList from './ShoppingList';
import ShoppingSidebarFooter from './ShoppingSidebarFooter';

export default function ShoppingSidebar() {
  return (
    <div className="flex h-full flex-col bg-primary-lighter pt-6 ">
      <div className="flex flex-grow flex-col   px-3 xl:px-8">
        <AddItem />
        <ShoppingList />
      </div>
      <ShoppingSidebarFooter />
    </div>
  );
}
