import { Inter } from '@next/font/google';
import { useEffect } from 'react';
import { fetchItemsAsync } from '@/redux/itemsSlice';
import Layout from '@/components/Layout';
import MainItems from '@/components/MainItems';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Home() {
  return <MainItems />;
}
