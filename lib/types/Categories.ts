// export interface Category {
//     name: string;
//     note?: string;
//     imageUrl?: string;
//     category: string;
//   }

import { ItemFetched } from './Items';

export interface CategoryFetched {
  name: string;
  items: ItemFetched[];
  id: string;
}
