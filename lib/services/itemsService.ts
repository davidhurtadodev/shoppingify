import axios from 'axios';
import { Item, ItemFetched } from '../types/Items';
const baseUrl = 'http://localhost:3003/api/v1/items';

const getAll = async () => {
  try {
    const res = await axios.get(baseUrl);
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
};

const create = async (item: Item) => {
  const { data } = await axios.post(baseUrl, item);

  return data;
};

const deleteItem = async (id: string) => {
  await axios.delete(`${baseUrl}/${id}`);

  return;
};

export default { getAll, deleteItem, create };
