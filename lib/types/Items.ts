interface Item {
  name: string;
  note?: string;
  imageUrl?: string;
  category: string;
}

interface ItemFetched extends Item {
  id: string;
}
