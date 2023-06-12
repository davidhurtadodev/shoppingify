import axios from 'axios';
// const baseUrl = 'http://localhost:3003/api/v1/categories';
// const baseUrl = `https://shoppingify-backend-w77z.onrender.com/api/v1/categories`;
const baseUrl = `https://shoppingify.fly.dev/api/v1/categories`;

const getAll = async () => {
  try {
    const { data } = await axios.get(baseUrl);
    return data;
  } catch (err) {
    console.error(err);
  }
};

// const create = async (item: Item) => {
//   const { data } = await axios.post(baseUrl, item);

//   return data;
// };

// const deleteItem = async (id: string) => {
//   await axios.delete(`${baseUrl}/${id}`);

//   return;
// };

export default { getAll };
