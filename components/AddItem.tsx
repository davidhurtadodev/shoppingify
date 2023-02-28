import Image from 'next/image';
import Button from './Button';
import bottle from '../public/assets/images/bottle.svg';
import { useDispatch } from 'react-redux';
import { changeVisibility } from '@/redux/UISlice';

export default function AddItem() {
  const dispatch = useDispatch();
  const addItemBtnHandler = () => {
    dispatch(changeVisibility('add-item-form'));
  };

  return (
    <div className="relative mb-8  flex h-[120px] w-[283px]  rounded-3xl bg-secondary pr-9">
      <div className="mr-7 shrink-0">
        <Image className="relative bottom-5" src={bottle} alt="bottle" />
      </div>
      <div className="mr-0 ml-auto py-4">
        <h3 className="mb-3 text-base font-bold leading-5 text-white">{`Didn't find what you need?`}</h3>
        <Button
          onClickFunc={addItemBtnHandler}
          buttonType="button"
          customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)]  py-2  px-2 w-[110px] rounded-xl bg-white text-center"
        >
          Add Item
        </Button>
      </div>
    </div>
  );
}
