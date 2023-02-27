import { CategoryFetched } from './Categories';

export interface Item {
  name: string;
  note?: string;
  imageUrl?: string;
  category: string | CategoryFetched;
}

export interface ItemFetched extends Item {
  id: string;
}
