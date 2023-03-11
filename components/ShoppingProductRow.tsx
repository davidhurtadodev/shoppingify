import { useState } from 'react';
import useOutsideClick from '@/lib/hooks/useOutsideClick';
import Button from './Button';
import EditQuantity from './EditQuantity';
import Input from './Input';
import helper from '@/lib/helper';
import { ItemFetched } from '@/lib/types/Items';
import { useSelector } from 'react-redux';
import { AppState } from '@/redux/store';

interface ShoppingProductRowProps {
  product: ItemFetched;
  pieces: number;
}

export default function ShoppingProductRow({
  product,
  pieces,
}: ShoppingProductRowProps) {
  const listState = useSelector(
    (state: AppState) => state.lists.listToCreate.state
  );
  const [isEditable, setIsEditable] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleClickQuantityButton = (e: any) => {
    e.stopPropagation();
    console.log(isEditable, 'set to true');
    // if (!isEditable) {
    setIsEditable(true);
    // }
  };
  const setFalseEditable = () => {
    console.log(isEditable, 'set to false');

    // if (isEditable) {

    setIsEditable(false);
    // }
  };
  const ref = useOutsideClick(setFalseEditable);

  if (listState === 'completing') {
    return (
      <div className="mb-6 flex min-h-[56px] items-center">
        <div>
          <Input
            onChangeFunc={(e) => {
              console.log('jola');
              setIsChecked(!isChecked);
            }}
            isChecked={isChecked}
            type="checkbox"
          />
        </div>
        <label className={`text-sm ${isChecked ? 'line-through' : null} `}>
          {helper.capitalizeString(product.name)}
        </label>
        <Button
          onClickFunc={() => null}
          customClasses="border-2 border-primary-accent rounded-3xl text-primary-accent w-[68px] py-2 font-bold text-xs ml-auto mr-0"
        >
          {pieces} pcs
        </Button>
      </div>
    );
  } else if (listState === 'editing') {
    return (
      <div className="mb-6 flex min-h-[56px] items-center">
        <label className="text-sm">
          {helper.capitalizeString(product.name)}
        </label>
        {!isEditable ? (
          <Button
            onClickFunc={(e) => handleClickQuantityButton(e)}
            customClasses="border-2 border-primary-accent rounded-3xl text-primary-accent w-[68px] py-2 font-bold text-xs ml-auto mr-0"
          >
            {pieces} pcs
          </Button>
        ) : (
          <EditQuantity item={product} ref={ref}>
            {pieces} pcs
          </EditQuantity>
        )}
      </div>
    );
  }
  // return (
  //   <div className="mb-6 flex min-h-[56px] items-center">
  //     {isCheckbox ? (
  //       <div>
  //         <Input type="checkbox" />
  //       </div>
  //     ) : null}

  //     <label className="text-sm">{helper.capitalizeString(product.name)}</label>
  //     {!isEditable ? (
  //       <Button
  //         onClickFunc={(e) => handleClickQuantityButton(e)}
  //         customClasses="border-2 border-primary-accent rounded-3xl text-primary-accent w-[68px] py-2 font-bold text-xs ml-auto mr-0"
  //       >
  //         {pieces} pcs
  //       </Button>
  //     ) : (
  //       <EditQuantity item={product} ref={ref}>
  //         {pieces} pcs
  //       </EditQuantity>
  //     )}
  //   </div>
  // );
}
