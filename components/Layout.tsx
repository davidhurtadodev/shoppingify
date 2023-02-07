import Image from 'next/image';
import logo from '../public/assets/images/logo.svg';
import MenuTab from './MenuTab';

export default function Layout() {
  return (
    <div>
      <div className="grid min-h-screen grid-cols-6">
        <aside className="col-span-1 flex flex-col justify-center pt-8">
          <div className="mt-0 mb-auto flex   items-center justify-center">
            <Image src={logo} className="w-10" alt="logo" />
          </div>
          <div>
            <MenuTab icon="list" />
            <MenuTab icon="replay" />
            <MenuTab icon="assessment" iconCustomStyle="-outlined" />
          </div>
          <div className="mb-10 mt-auto flex items-center justify-center">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary-accent">
              <span className=" absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded bg-danger text-xs text-white">
                1
              </span>
              <span className="material-icons-outlined md-light  z-50 text-white">
                shopping_cart
              </span>
            </div>
          </div>
        </aside>
        <main className=""></main>
      </div>
    </div>
  );
}
