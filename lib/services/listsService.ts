import axios from 'axios';
import { List, ListFetched } from '../types/List';
// const baseUrl = 'http://localhost:3003/api/v1/lists';
const baseUrl = `https://shoppingify-backend-w77z.onrender.com/api/v1/lists`;

const getAll = async () => {
  try {
    const { data } = await axios.get(baseUrl);

    return data;
  } catch (err) {
    console.error(err);
  }
};

const create = async (list: List) => {
  const { data } = await axios.post(baseUrl, list);

  return data;
};

// const deleteItem = async (id: string) => {
//   await axios.delete(`${baseUrl}/${id}`);

//   return;
// };

export default { getAll, create };
