import { ItemFetched } from './Items';

export interface List {
  name: string;
  isCancelled: boolean;
  date: string;
  items: { item: ItemFetched; quantity: number }[];
}
export interface ListWithState extends List {
  state: 'editing' | 'completing' | 'done';
}

export interface ListFetched extends List {
  id: string;
}