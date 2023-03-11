import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import AddItem from './AddItem';
import ShoppingList from './ShoppingList';
import { changeName, changeListToCreateState } from '@/redux/listsSlice';
import { RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';

export default function ShoppingSidebar() {
  const dispatch = useDispatch();
  // const listToCreateName = useSelector(
  //   (state: RootState) => state.lists.listToCreate.name
  // );
  const listToCreateState = useSelector(
    (state: RootState) => state.lists.listToCreate.state
  );
  const handleListToCreateNameChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    dispatch(changeName(e.currentTarget.value));
  };

  const listState = useSelector(
    (state: RootState) => state.lists.listToCreate.state
  );

  const handleToggleListState = () => {
    if (listState === 'editing')
      return dispatch(changeListToCreateState('completing'));
    return dispatch(changeListToCreateState('editing'));
  };

  return (
    <div className="flex h-full flex-col bg-primary-lighter pt-6 ">
      <div className="flex-grow  px-3 xl:px-8">
        <AddItem />
        <ShoppingList />
      </div>
      {listToCreateState === 'editing' && (
        <div className=" w-100 mb-0 mt-auto  flex-grow-0 bg-white px-5 py-4  xl:py-9">
          <div className="flex max-h-[61px] overflow-hidden rounded-xl border-2 border-primary-accent">
            <Input
              placeholder="Enter a name"
              customClasses="focus-visible:outline-none border-0  grow p-5 focus:outline-0x"
              onChangeFunc={handleListToCreateNameChange}
            />
            <Button
              onClickFunc={(e) => handleToggleListState()}
              customClasses="text-white text-base font-bold bg-primary-accent border-2 border-primary-accent px-6  "
            >
              Save
            </Button>
          </div>
        </div>
      )}
      {listToCreateState === 'completing' && (
        <div className=" w-100 mb-0 mt-auto flex flex-grow-0  justify-center bg-white px-5 py-4  xl:py-9">
          <Button customClasses="font-bold text-base px-6 py-5 bg-transparent border-0">
            cancel
          </Button>
          <Button
            buttonType="submit"
            customClasses="bg-accept font-bold text-base px-6 py-5 text-white rounded-xl"
          >
            Complete
          </Button>
        </div>
      )}
    </div>
  );
}
