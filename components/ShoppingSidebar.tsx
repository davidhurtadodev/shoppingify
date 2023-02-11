import Image from 'next/image';
import Button from './Button';
import bottle from '../public/assets/images/bottle.svg';

export default function ShoppingSidebar() {
  return (
    <>
      <div className="relative mb-8  flex h-[120px] w-[283px]  rounded-3xl bg-secondary pr-9">
        <div className="mr-7 shrink-0">
          <Image className="relative bottom-5" src={bottle} alt="bottle" />
        </div>
        <div className="mr-0 ml-auto py-4">
          <h3 className="mb-3 text-base font-bold leading-5 text-white">{`Didn't find what you need?`}</h3>
          <Button
            buttonType="button"
            text="Add item"
            customClasses="shadow-[0_2px_12px_rgba(0,0,0,0.05)]  py-2  px-2 w-[110px] rounded-xl bg-white text-center"
          />
        </div>
      </div>
      <h2 className="mb-10 text-2xl font-bold text-[#34333A]">Shopping list</h2>
      <div>
        <h3 className="mb-5 text-sm font-medium text-[#828282]">
          Fruit and vegetables
        </h3>
        <div className="mb-6 flex items-center">
          <label htmlFor="" className="text-sm">
            Avocado
          </label>
          <Button
            buttonType="button"
            text="3 pcs"
            customClasses="border-2 border-primary-accent rounded-3xl text-primary-accent w-[68px] py-2 font-bold text-xs ml-auto mr-0"
          />
        </div>
        <div className="mb-6 flex items-center">
          <label htmlFor="" className="text-sm">
            Pre cooked corn
          </label>
          <Button
            buttonType="button"
            text="5 pcs"
            customClasses="border-2 border-primary-accent rounded-3xl text-primary-accent w-[68px] py-2 font-bold text-xs ml-auto mr-0"
          />
        </div>
        <div className="mb-6 flex items-center">
          <label htmlFor="" className="text-sm">
            Pre cooked corn
          </label>
          <div className="ml-auto mr-0 flex items-center overflow-hidden rounded-xl bg-white ">
            <Button
              icon="delete"
              buttonType="button"
              customIconClasses="outlined text-white"
              customClasses="bg-primary-accent self-stretch rounded-xl mr-3 p-3"
            />
            <Button
              buttonType="button"
              customClasses="bg-white"
              customIconClasses="text-primary-accent mr-2"
              icon="remove"
            />
            <Button
              buttonType="button"
              text="5 pcs"
              customClasses="border-2 mr-2 my-2 border-primary-accent rounded-3xl bg-white text-primary-accent w-[68px] py-2 font-bold text-xs ml-auto mr-0"
            />
            <Button
              buttonType="button"
              customClasses="bg-white"
              customIconClasses="text-primary-accent"
              icon="add"
            />
          </div>
        </div>
      </div>
    </>
  );
}
