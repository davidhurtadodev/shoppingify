import Button from './Button';
import Icon from './Icon';
import { ItemFetched } from '@/lib/types/Items';
import { useSelector, useDispatch } from 'react-redux';
import {
  addQuantity,
  restQuantity,
  deleteItemInList,
} from '@/redux/listsSlice';

interface EditQuantityProps {
  children: React.ReactNode;
  item: ItemFetched;
}

export default function EditQuantity({ children, item }: EditQuantityProps) {
  const dispatch = useDispatch();
  const handleAddButton = () => {
    dispatch(addQuantity(item.id));
  };
  const handleRestButton = () => {
    dispatch(restQuantity(item.id));
  };
  const handleDeleteButton = () => {
    dispatch(deleteItemInList(item.id));
  };
  return (
    <div className="ml-auto mr-0 flex items-center overflow-hidden rounded-xl bg-white ">
      <Button
        onClickFunc={handleDeleteButton}
        customClasses="bg-primary-accent self-stretch rounded-xl mr-3 p-3"
      >
        <Icon icon="delete" customClasses="text-white" />
      </Button>
      <Button onClickFunc={handleRestButton} customClasses="bg-white">
        <Icon icon="remove" customClasses="mr-2 text-primary-accent" />
      </Button>
      <Button customClasses="border-2 mr-2 my-2 border-primary-accent rounded-3xl bg-white text-primary-accent w-[68px] py-2 font-bold text-xs ml-auto mr-0">
        {children}
      </Button>
      <Button
        onClickFunc={handleAddButton}
        customClasses="bg-white"
        customIconClasses="text-primary-accent"
      >
        <Icon icon="add" customClasses="text-primary-accent" />
      </Button>
    </div>
  );
}
