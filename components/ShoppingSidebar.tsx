import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import AddItem from './AddItem';
import ShoppingList from './ShoppingList';
import { changeName } from '@/redux/listsSlice';
import { RootState } from '@/redux/store';

export default function ShoppingSidebar() {
  const dispatch = useDispatch();
  const listToCreateName = useSelector(
    (state: RootState) => state.lists.listToCreate.name
  );
  const handleListToCreateNameChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    dispatch(changeName(e.currentTarget.value));
  };

  return (
    <div className="flex h-full flex-col bg-primary-lighter pt-6 ">
      <div className="flex-grow  px-3 xl:px-8">
        <AddItem />
        <ShoppingList />
      </div>
      <div className=" w-100 mb-0 mt-auto  flex-grow-0 bg-white px-5 py-4  xl:py-9">
        <div className="flex max-h-[61px] overflow-hidden rounded-xl border-2 border-primary-accent">
          <Input
            placeholder="Enter a name"
            customClasses="focus-visible:outline-none border-0  grow p-5 focus:outline-0x"
            onChangeFunc={handleListToCreateNameChange}
          />
          <Button customClasses="text-white text-base font-bold bg-primary-accent border-2 border-primary-accent px-6  ">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
