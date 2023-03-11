import { ItemFetched } from './Items';

export interface List {
  name: string;
  isCancelled: boolean;
  date: string;
  items: { item: ItemFetched; quantity: number }[];
  state: 'editing' | 'completing' | 'done';
}

export interface ListFetched extends List {
  id: string;
}
