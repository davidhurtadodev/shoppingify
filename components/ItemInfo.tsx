import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changeSidebarValue } from '@/redux/UISlice';
import Button from './Button';
import Icon from './Icon';
import helper from '@/lib/helper';
import { RootState } from '@/redux/store';
import { addItem } from '@/redux/listsSlice';
import { deleteItemsAsync } from '@/redux/itemsSlice';

export default function ItemInfo() {
  const dispatch = useAppDispatch();
  const selectedItemId = useAppSelector(
    (state: RootState) => state.UI.selectedItem.id
  );
  const items = useAppSelector((state: RootState) => state.items.items);

  const selectedItem = items.find((item) => item.id === selectedItemId);
  const backItemInfoBtnHandler = () => {
    dispatch(changeSidebarValue('shopping-list'));
  };

  const addToListHandler = () => {
    dispatch(addItem(selectedItem));
    dispatch(changeSidebarValue('shopping-list'));
  };
  const deleteItemBtnHandler = () => {
    if (selectedItemId) {
      dispatch(deleteItemsAsync(selectedItemId));
      dispatch(changeSidebarValue('shopping-list'));
    }
  };
  return (
    <section className="y flex h-full flex-col bg-white px-11 pb-8 pt-6">
      <Button
        onClickFunc={backItemInfoBtnHandler}
        customClasses="text-primary-accent text-sm flex items-center mb-8"
      >
        <Icon
          icon="arrow_right_alt"
          customClasses="text-primary-accent font-bold rotate-180  mr-[6px]"
        />
        back
      </Button>

      <div className="mb-8">
        <label className="mb-3 block text-sm text-gray">name</label>
        <h3 className="text-2xl font-medium">
          {helper.capitalizeString(selectedItem!.name)}
        </h3>
      </div>
      <div className="mb-8">
        <label className="mb-3 block text-sm text-gray">category</label>
        <p className="text-lg font-medium">
          {helper.capitalizeString(selectedItem!.category.name)}
        </p>
      </div>
      {selectedItem!.note ? (
        <div className="mb-8">
          <label className="mb-3 block text-sm text-gray">note</label>
          <p className="text-lg font-medium">{selectedItem!.note}</p>
        </div>
      ) : null}

      <div className=" mb-0 mt-auto flex justify-center">
        <Button
          onClickFunc={deleteItemBtnHandler}
          customClasses="font-bold text-base px-6 py-5 bg-transparent border-0"
        >
          delete
        </Button>
        <Button
          onClickFunc={addToListHandler}
          customClasses="bg-primary-accent font-bold text-base px-6 py-5 text-white rounded-xl"
        >
          Add to list
        </Button>
      </div>
    </section>
  );
}
