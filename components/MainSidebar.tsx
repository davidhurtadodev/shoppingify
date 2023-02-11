import Image from 'next/image';
import AsideNav from './AsideNav';
import logo from '../public/assets/images/logo.svg';

export default function MainSidebar() {
  return (
    <>
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
    </>
  );
}
