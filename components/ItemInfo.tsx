import { useDispatch } from 'react-redux';
import { changeVisibility } from '@/redux/UISlice';
import Button from './Button';
import Icon from './Icon';
import Image from 'next/image';

export default function ItemInfo() {
  const dispatch = useDispatch();
  const backItemInfoBtnHandler = () => {
    dispatch(changeVisibility('shopping-list'));
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
        <h3 className="text-2xl font-medium">Avocado</h3>
      </div>
      <div className="mb-8">
        <label className="mb-3 block text-sm text-gray">name</label>
        <p className="text-lg font-medium">Fruit and vegetables</p>
      </div>
      <div className="mb-8">
        <label className="mb-3 block text-sm text-gray">note</label>
        <p className="text-lg font-medium">
          Nutrient-dense foods are those that provide substantial amounts of
          vitamins, minerals and other nutrients with relatively few calories.
          One-third of a medium avocado (50 g) has 80 calories and contributes
          nearly 20 vitamins and minerals, making it a great nutrient-dense food
          choice.
        </p>
      </div>
      <div className=" mb-0 mt-auto flex justify-center">
        <Button customClasses="font-bold text-base px-6 py-5 bg-transparent border-0">
          delete
        </Button>
        <Button customClasses="bg-primary-accent font-bold text-base px-6 py-5 text-white rounded-xl">
          Add to list
        </Button>
      </div>
    </section>
  );
}
