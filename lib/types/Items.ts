import { CategoryFetched } from './Categories';

export interface Item {
  name: string;
  note?: string;
  imageUrl?: string;
  category: CategoryFetched | string;
}

export interface ItemFetched extends Item {
  id: string;
}
