import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import Input from './Input';
import Button from './Button';
import {
  changeName,
  changeListToCreateState,
  createListAsync,
  cleanListToCreate,
} from '@/redux/listsSlice';
import { openModal } from '@/redux/UISlice';
import React from 'react';

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
    if (listToCreateState === 'editing') {
      return dispatch(changeListToCreateState('completing'));
    }

    return dispatch(changeListToCreateState('editing'));
  };
  const handleListCompletedCreation = async (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    await dispatch(createListAsync(target.innerText));
    dispatch(cleanListToCreate());
  };
  const handleListCancel = async (e: React.MouseEvent) => {
    dispatch(openModal(null));
  };

  if (listToCreateState === 'editing') {
    return (
      <div className=" w-100 mb-0 mt-auto  flex-grow-0 bg-white px-5 py-4  xl:py-9">
        <div
          className={` flex max-h-[61px] overflow-hidden rounded-xl border-2 ${
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
            disabled={listItems.length < 1 && true}
            onClickFunc={(e) => handleToggleListState()}
            customClasses={`text-white text-base font-bold bg-primary-accent border-2 border-primary-accent px-6 ${
              listItems.length === 0
                ? 'border-unselected bg-unselected'
                : 'border-primary-accent bg-primary hover:bg-primary-accent-dark hover:border-primary-accent-dark'
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
          onClickFunc={handleListCancel}
          customClasses="w-[105px] mx-2 hover:bg-danger-dark bg-danger  font-bold text-white rounded-xl py-5  border-0"
        >
          Cancel
        </Button>
        <Button
          onClickFunc={handleListCompletedCreation}
          buttonType="submit"
          customClasses="bg-accept hover:bg-accept-dark w-[105px] mx-2 font-bold text-base  py-5 text-white rounded-xl"
        >
          Complete
        </Button>
      </div>
    );
  }
  return null;
}
