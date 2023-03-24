import { CategoryFetched } from './Categories';

export interface Item {
  name: string;
  note?: string;
  imageUrl?: string;
}

export interface ItemToCreate extends Item {
  category: string;
}

export interface ItemFetched extends Item {
  id: string;
  category: CategoryFetched;
}
