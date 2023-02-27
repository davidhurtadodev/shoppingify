import Image from 'next/image';
import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import AddItem from './AddItem';
import ShoppingList from './ShoppingList';

export default function ShoppingSidebar() {
  return (
    <div className="flex h-full flex-col bg-primary-lighter pt-6">
      <div className="flex-grow  px-3 xl:px-12">
        <AddItem />
        <ShoppingList />
      </div>
      <div className="w-100 mb-0 mt-auto flex-grow-0 bg-white px-5 py-4">
        <div className="flex overflow-hidden rounded-xl border-2 border-primary-accent">
          <Input
            placeholder="Enter a name"
            customClasses=" border-0  grow p-5 focus:outline-0x"
          />
          <Button customClasses="text-white text-base font-bold bg-primary-accent border-2 border-primary-accent px-6 py-5  ">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
