import Image from 'next/image';
import logo from '../public/assets/images/logo.svg';
import MenuTab from './MenuTab';
import AsideNav from './AsideNav';
import Button from './Button';
import CategoryGrid from './CategoryGrid';
import MainContent from './MainContent';
import bottle from '../public/assets/images/bottle.svg';

export default function Layout() {
  return (
    <div>
      <div className="grid min-h-screen grid-cols-6 grid-rows-1">
        <aside className="col-span-1  row-span-1 flex flex-col justify-center pt-8">
          <div className=" mt-0 mb-auto flex cursor-pointer   items-center justify-center">
            <Image src={logo} className="w-10" alt="logo" />
          </div>
          <AsideNav />

          <div className=" relative mx-auto mb-10 mt-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary-accent">
            <span className=" absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded bg-danger text-xs text-white">
              1
            </span>
            <span className="material-icons-outlined md-light  z-50 text-white">
              shopping_cart
            </span>
          </div>
        </aside>
        <main className="col-span-5 col-start-2  row-start-1 row-end-2 bg-[#FAFAFE] px-3 pt-10">
          <MainContent />
        </main>
        <aside className="z-50 col-span-5 col-start-2 col-end-7 row-span-1 row-start-1 row-end-2 px-3 pt-6">
          <div className=" relative  flex h-[120px] w-full rounded-3xl bg-secondary pr-9">
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
        </aside>
      </div>
    </div>
  );
}
