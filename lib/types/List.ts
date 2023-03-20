import { ItemFetched } from './Items';

export interface List {
  name: string;
  isCancelled: boolean;
  date: any;
  items: { item: ItemFetched; quantity: number }[];
}
export interface ListWithState extends List {
  state: 'editing' | 'completing' | 'done';
}

export interface ListFetched extends List {
  id: string;
}

export interface StructuredLists {
  [key: string]: {
    [key: string]: ListFetched[];
  };
}

export type StructuredByYear = [string, Record<string, ListFetched[]>];
