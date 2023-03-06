import { ItemFetched } from './Items';

export interface List {
  name: string;
  isCancelled: boolean;
  date: string;
  items: { item: ItemFetched; quantity: number }[];
}

export interface ListFetched extends List {
  id: string;
}
