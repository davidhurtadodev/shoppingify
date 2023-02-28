import Select from 'react-select';
import Input from './Input';
import Button from './Button';
import Textarea from './Textarea';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { changeVisibility } from '@/redux/UISlice';
import helper from '@/lib/helper';
import classNames from 'classnames';
import createCache from '@emotion/cache';
import { StylesConfig } from 'react-select';

export default function AddItemForm() {
  const dispatch = useDispatch();
  const categories = useAppSelector(
    (state: RootState) => state.categories.elements
  );

  const options = categories.map((category) => {
    return {
      value: category.name,
      label: helper.capitalizeString(category.name),
    };
  });
  const cancelAddItemBtnHandler = () => {
    dispatch(changeVisibility('shopping-list'));
  };
  return (
    <form className="h-full">
      <div className="flex h-full flex-col bg-light-gray px-3 pt-6">
        <h2 className="mb-5  text-2xl font-medium">Add a new item</h2>
        <Input labelText="Name" placeholder="Enter a name" />
        <div className="mb-4 w-full">
          <label className="mb-1 block text-sm font-normal">
            Note (optional)
          </label>
          <textarea
            className={`min-h-[110px] w-full rounded-xl border-2 border-unselected px-4 py-5 text-sm font-medium placeholder:text-unselected `}
            placeholder="Enter a note"
          ></textarea>
        </div>
        <Input labelText="Image (optional)" placeholder="Enter a url" />
        <label className="mb-1 block text-sm font-normal">Category</label>
        <Select
          options={options}
          styles={{
            control: (baseStyles, state) => {
              let borderColor: string = '#BDBDBD';
              if (state.isFocused) borderColor = '#F9A109';

              if (state.isFocused && state.isDisabled) borderColor = '#F9A109';
              return {
                ...baseStyles,
                '&:hover': {
                  borderColor: 'none',
                },
                '&:focus': {
                  borderColor: '#F9A109',
                },
                borderColor,
                boxShadow: 'none',
                borderWidth: '2px',
                borderRadius: '12px',
                fontSize: '14px',
                padding: '1.25rem 1rem',
              };
            },
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              padding: '0',
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              margin: '0',
              padding: '0',
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              margin: '0',
              padding: '0',
            }),
            indicatorsContainer: (baseStyles) => ({
              ...baseStyles,
              margin: '0',
              padding: '0',
            }),
          }}
        />
        <div className="mt-auto mb-0 flex justify-center py-4  xl:py-9">
          <Button
            onClickFunc={cancelAddItemBtnHandler}
            customClasses="font-bold text-base px-6 py-5 bg-transparent border-0"
          >
            cancel
          </Button>
          <Button customClasses="bg-primary-accent font-bold text-base px-6 py-5 text-white rounded-xl">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
