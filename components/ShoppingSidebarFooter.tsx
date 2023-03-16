import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import Input from './Input';
import Button from './Button';
import {
  changeName,
  changeListToCreateState,
  createListAsync,
} from '@/redux/listsSlice';

export default function ShoppingSidebarFooter() {
  const dispatch = useDispatch<AppDispatch>();
  const listToCreateState = useSelector(
    (state: RootState) => state.lists.listToCreate.state
  );
  const listItems = useSelector(
    (state: RootState) => state.lists.listToCreate.items
  );
  const handleListToCreateNameChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    dispatch(changeName(e.currentTarget.value));
  };
  const handleToggleListState = () => {
    if (listToCreateState === 'editing')
      return dispatch(changeListToCreateState('completing'));
    return dispatch(changeListToCreateState('editing'));
  };
  const handleListCreation = async (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    await dispatch(createListAsync(target.innerText));
  };

  if (listToCreateState === 'editing') {
    return (
      <div className=" w-100 mb-0 mt-auto  flex-grow-0 bg-white px-5 py-4  xl:py-9">
        <div
          className={`flex max-h-[61px] overflow-hidden rounded-xl border-2 ${
            listItems.length === 0
              ? 'border-unselected'
              : 'border-primary-accent'
          } `}
        >
          <Input
            disabled={listItems.length < 1 && true}
            placeholder="Enter a name"
            customClasses="focus-visible:outline-0 border-0  grow p-5 focus:outline-0x"
            onChangeFunc={handleListToCreateNameChange}
          />
          <Button
            onClickFunc={(e) => handleToggleListState()}
            customClasses={`text-white text-base font-bold bg-primary-accent border-2 border-primary-accent px-6 ${
              listItems.length === 0
                ? 'border-unselected bg-unselected'
                : 'border-primary-accent bg-primary'
            }`}
          >
            Save
          </Button>
        </div>
      </div>
    );
  } else if (listToCreateState === 'completing') {
    return (
      <div className=" w-100 mb-0 mt-auto flex flex-grow-0  justify-center bg-white px-5 py-4  xl:py-9">
        <Button
          onClickFunc={handleListCreation}
          customClasses="font-bold text-base px-6 py-5 bg-transparent border-0"
        >
          cancel
        </Button>
        <Button
          onClickFunc={handleListCreation}
          buttonType="submit"
          customClasses="bg-accept font-bold text-base px-6 py-5 text-white rounded-xl"
        >
          Complete
        </Button>
      </div>
    );
  }
  return null;
}
