import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import AddItem from './AddItem';
import ShoppingList from './ShoppingList';
import { changeName, changeListToCreateState } from '@/redux/listsSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';
import { createListAsync } from '@/redux/listsSlice';
import ShoppingSidebarFooter from './ShoppingSidebarFooter';

export default function ShoppingSidebar() {
  return (
    <div className="flex h-full flex-col bg-primary-lighter pt-6 ">
      <div className="flex flex-grow flex-col   px-3 xl:px-8">
        <AddItem />
        <ShoppingList />
      </div>
      <ShoppingSidebarFooter />
    </div>
  );
}
