import { useDispatch, useSelector } from 'react-redux';
import { changeSidebarValue, changeSidebarVisible } from '@/redux/UISlice';
import { RootState } from '@/redux/store';

import Image from 'next/image';
import AsideNav from './AsideNav';
import logo from '../public/assets/images/logo.svg';
import Icon from './Icon';

export default function MainSidebar() {
  const dispatch = useDispatch();
  const sidebarState = useSelector(
    (store: RootState) => store.UI.sidebar.value
  );
  const listLength = useSelector(
    (state: RootState) => state.lists.listToCreate.items.length
  );
  const shoppingCartClickHandler = () => {
    if (sidebarState !== 'shopping-list')
      return dispatch(changeSidebarValue('shopping-list'));
    return dispatch(changeSidebarVisible(null));
  };
  return (
    <>
      <div className=" mt-0 mb-auto flex cursor-pointer   items-center justify-center">
        <Image src={logo} className="w-10" alt="logo" />
      </div>
      <AsideNav />
      <div
        onClick={shoppingCartClickHandler}
        className="relative mx-auto mb-10 mt-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary-accent"
      >
        <span className=" absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded bg-danger text-xs text-white">
          {listLength}
        </span>
        <Icon icon="shopping_cart" customClasses="md-light  z-50 text-white" />
      </div>
    </>
  );
}
