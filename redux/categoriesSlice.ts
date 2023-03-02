import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryFetched } from '@/lib/types/Categories';
import categoriesService from '@/lib/services/categoriesService';
import { createItemAsync } from './itemsSlice';

// Type of state
export interface categoriesState {
  elements: CategoryFetched[];
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

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';

        const category: CategoryFetched = action.payload.category;
        // if category doesnt exist
        const categoryIndex = state.elements.findIndex(
          (element) => element.name === category.name
        );
        if (categoryIndex < 0) {
          console.log(category);
          state.elements.push(category);
        }
        if (categoryIndex >= 0) {
          state.elements[categoryIndex].items.push(action.payload);
        }
      })
      .addCase(createItemAsync.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(createItemAsync.pending, (state, action) => {
        state.status = 'loading';
      })

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
