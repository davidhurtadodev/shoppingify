import MainSidebar from './MainSidebar';
import ShoppingSidebar from './ShoppingSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="grid min-h-screen grid-cols-6 grid-rows-1">
        <aside className="col-span-1  row-span-1 flex flex-col justify-center pt-8">
          <MainSidebar />
        </aside>
        <main className="col-span-5 col-start-2  row-start-1 row-end-2 bg-[#FAFAFE] px-3 pt-10">
          {children}
        </main>
        <aside className="z-50 col-span-5 col-start-2 col-end-7 row-span-1 row-start-1 row-end-2 bg-primary-lighter px-3 pt-6">
          <ShoppingSidebar />
        </aside>
      </div>
    </div>
  );
}
