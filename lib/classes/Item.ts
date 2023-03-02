import { Item } from '../types/Items';

class ItemClass implements Item {
  name: string;
  note: string;
  imageUrl: string;
  category: string;

  constructor(name: string, note: string, imageUrl: string, category: string) {
    this.name = name;
    this.note = note;
    this.imageUrl = imageUrl;
    this.category = category;
  }
}

export default ItemClass;
