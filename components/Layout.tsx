import MainSidebar from './MainSidebar';
import ShoppingSidebar from './ShoppingSidebar';
import AddItemForm from './AddItemForm';
import ItemInfo from './ItemInfo';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { fetchCategoriesAsync } from '@/redux/categoriesSlice';
import { fetchItemsAsync } from '@/redux/itemsSlice';
import { fetchListsAsync } from '@/redux/listsSlice';
import { useAppDispatch } from '@/redux/hooks';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchItemsAsync());
    dispatch(fetchListsAsync());
  });
  const sidebarSection = useSelector(
    (state: RootState) => state.UI.sidebar.value
  );
  const sidebarVisibility = useSelector(
    (state: RootState) => state.UI.sidebar.isVisible
  );
  return (
    <div>
      <Modal />
      <div className="relative grid h-screen grid-cols-6 grid-rows-1  bg-[#FAFAFE] xl:grid-cols-[100px_3fr_1fr]">
        <aside className=" col-span-1  row-span-1 flex  h-full  flex-col justify-center  bg-white pt-8">
          <MainSidebar />
        </aside>
        <main className="col-span-5 col-start-2 row-start-1 row-end-2  overflow-y-auto bg-[#FAFAFE] px-3 pt-10 xl:col-start-2 xl:col-end-3">
          {children}
        </main>
        <aside
          className={`${
            !sidebarVisibility ? 'left-full' : 'left-0'
          }  relative z-50 col-span-5 col-start-2 col-end-7 row-span-1 row-start-1 row-end-2 flex  h-full flex-col overflow-y-hidden transition-all delay-75  duration-500 ease-in-out xl:col-start-3 xl:min-w-[380px]`}
        >
          {sidebarSection === 'shopping-list' ? <ShoppingSidebar /> : null}
          {sidebarSection === 'item-info' ? <ItemInfo /> : null}
          {sidebarSection === 'add-item-form' ? <AddItemForm /> : null}
        </aside>
      </div>
    </div>
  );
}
