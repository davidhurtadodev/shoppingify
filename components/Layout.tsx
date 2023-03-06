import MainSidebar from './MainSidebar';
import ShoppingSidebar from './ShoppingSidebar';
import AddItemForm from './AddItemForm';
import ItemInfo from './ItemInfo';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const sidebarSection = useSelector(
    (state: RootState) => state.UI.sidebar.value
  );
  return (
    <div>
      <div className="grid min-h-screen grid-cols-6 grid-rows-1 bg-[#FAFAFE] xl:grid-cols-[100px_3fr_1fr]">
        <aside className="col-span-1  row-span-1 flex flex-col justify-center bg-white pt-8">
          <MainSidebar />
        </aside>
        <main className="col-span-5 col-start-2 row-start-1  row-end-2 bg-[#FAFAFE] px-3 pt-10 xl:col-start-2 xl:col-end-3">
          {children}
        </main>
        <aside className="z-50 col-span-5 col-start-2 col-end-7 row-span-1 row-start-1 row-end-2 flex flex-col  xl:col-start-3 xl:min-w-[380px]">
          {sidebarSection === 'shopping-list' ? <ShoppingSidebar /> : null}
          {sidebarSection === 'item-info' ? <ItemInfo /> : null}
          {sidebarSection === 'add-item-form' ? <AddItemForm /> : null}
        </aside>
      </div>
    </div>
  );
}
