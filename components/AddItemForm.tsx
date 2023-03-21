import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Textarea from './Textarea';
import { useAppDispatch } from '@/redux/hooks';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { changeSidebarValue } from '@/redux/UISlice';
import { createItemAsync } from '@/redux/itemsSlice';
import helper from '@/lib/helper';
import selectStyles from '@/lib/misc/selectStyles';
import ItemClass from '@/lib/classes/Item';

export default function AddItemForm() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    (state: RootState) => state.categories.elements
  );
  const options = categories.map((category) => {
    return {
      value: category.name,
      label: helper.capitalizeString(category.name),
    };
  });
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState(options[0].value);

  const cancelAddItemBtnHandler = () => {
    dispatch(changeSidebarValue('shopping-list'));
  };

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleNoteChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setNote(e.currentTarget.value);
  };
  const handleImageChange = (e: React.FormEvent<HTMLInputElement>) => {
    setImage(e.currentTarget.value);
  };
  const handleCategoryChange = (selectedOption: any) => {
    setCategory(selectedOption.value);
  };

  const handleAddItemSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const item = new ItemClass(name, note, image, category);
    const createdItem = await dispatch(createItemAsync(item));
    console.log(item);
  };

  return (
    <form onSubmit={(e) => handleAddItemSubmit(e)} className="h-full">
      <div className="flex h-full flex-col bg-light-gray px-3 pt-6">
        <h2 className="mb-5  text-2xl font-medium">Add a new item</h2>
        <Input
          onChangeFunc={handleNameChange}
          labelText="Name"
          placeholder="Enter a name"
        />
        <Textarea
          placeholder="Enter a note"
          onChangeFunc={handleNoteChange}
          labelText="Note (optional)"
        />
        <Input
          labelText="Image (optional)"
          placeholder="Enter a url"
          onChangeFunc={handleImageChange}
        />
        <label className="mb-1 block text-sm font-normal">Category</label>
        <CreatableSelect
          options={options}
          styles={selectStyles}
          onChange={handleCategoryChange}
        />
        <div className="mt-auto mb-0 flex justify-center py-4  xl:py-9">
          <Button
            onClickFunc={cancelAddItemBtnHandler}
            customClasses="font-bold text-base px-6 py-5 bg-transparent border-0"
          >
            cancel
          </Button>
          <Button
            buttonType="submit"
            customClasses="bg-primary-accent font-bold text-base px-6 py-5 text-white rounded-xl"
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
