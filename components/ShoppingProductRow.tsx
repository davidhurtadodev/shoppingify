import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import useOutsideClick from '@/lib/hooks/useOutsideClick';

import Button from './Button';
import EditQuantity from './EditQuantity';
import Input from './Input';
import helper from '@/lib/helper';
import { ItemFetched } from '@/lib/types/Items';

interface ShoppingProductRowProps {
  product: ItemFetched;
  pieces: number;
}

export default function ShoppingProductRow({
  product,
  pieces,
}: ShoppingProductRowProps) {
  const [isEditable, setIsEditable] = useState(true);
  const [isCheckbox, setIsCheckbox] = useState(true);

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
    console.log('entro');
    setIsEditable(false);
    // }
  };
  const ref = useOutsideClick(setFalseEditable);

  return (
    <div className="mb-6 flex items-center">
      {isCheckbox ? (
        <div>
          <Input type="checkbox" />
        </div>
      ) : null}

      <label className="text-sm">{helper.capitalizeString(product.name)}</label>
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
