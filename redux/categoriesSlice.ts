import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryFetched } from '@/lib/types/Categories';
import categoriesService from '@/lib/services/categoriesService';

// Type of state
export interface categoriesState {
  elements: [] | CategoryFetched[];
  status: 'idle' | 'loading' | 'failed';
}

// Initial state

const initialState: categoriesState = {
  elements: [],
  status: 'idle',
};

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const categories = await categoriesService.getAll();
    return categories;
  }
);
// export const deleteItemsAsync = createAsyncThunk(
//   'items/deleteAsync',
//   async (id: string) => {
//     await itemsService.deleteItem(id);
//     return id;
//   }
// );
// export const createItemAsync = createAsyncThunk(
//   'items/createAsync',
//   async (content: Item) => {
//     const book = await bookService.create(content);
//     return book;
//   }
// );

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(createItemAsync.fulfilled, (state, action) => {
      //   state.status = 'idle';
      //   state.items.push(action.payload);
      // })
      // .addCase(createItemAsync.rejected, (state, action) => {
      //   state.status = 'failed';
      // })
      // .addCase(createItemAsync.pending, (state, action) => {
      //   state.status = 'loading';
      // })
      // .addCase(deleteItemsAsync.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(deleteItemsAsync.fulfilled, (state, action) => {
      //   const idDeleted: string = action.payload;
      //   const filterDeleted = state.items.filter(
      //     (item: ItemFetched) => item.id !== idDeleted
      //   );
      //   state.items = filterDeleted;
      // })
      // .addCase(deleteItemsAsync.rejected, (state, action) => {
      //   state.status = 'failed';
      // })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.elements = action.payload;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default categoriesSlice.reducer;
