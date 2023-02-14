import { useState } from 'react';
import Button from './Button';
import EditQuantity from './EditQuantity';
import Input from './Input';

interface ShoppingProductRowProps {
  product: string;
  pieces: number;
}

export default function ShoppingProductRow({
  product,
  pieces,
}: ShoppingProductRowProps) {
  const [isEditable, setIsEditable] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(true);

  return (
    <div className="mb-6 flex items-center">
      {isCheckbox ? (
        <div>
          <Input type="checkbox" />
        </div>
      ) : null}

      <label className="text-sm">{product}</label>
      {!isEditable ? (
        <Button customClasses="border-2 border-primary-accent rounded-3xl text-primary-accent w-[68px] py-2 font-bold text-xs ml-auto mr-0">
          {pieces} pcs
        </Button>
      ) : (
        <EditQuantity>{pieces} pcs</EditQuantity>
      )}
    </div>
  );
}
