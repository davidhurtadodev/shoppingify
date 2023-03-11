import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { List, ListFetched } from '@/lib/types/List';
import listsService from '@/lib/services/listsService';

// Type of state
export interface ListState {
  lists: { value: ListFetched[]; status: 'idle' | 'loading' | 'failed' };
  listToCreate: List;
}

// Initial state

const initialState: ListState = {
  lists: { value: [], status: 'idle' },
  listToCreate: {
    name: 'Default list',
    isCancelled: false,
    date: '',
    items: [],
    state: 'editing',
  },
};

export const createItemAsync = createAsyncThunk(
  'lists/createAsync',
  async (content: List) => {
    const item = await listsService.create(content);
    return item;
  }
);

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    changeListToCreateState: (state, action) => {
      const { payload } = action;
      if (
        payload === 'editing' ||
        payload === 'completing' ||
        payload === 'done'
      ) {
        state.listToCreate.state = action.payload;
      }
    },
    changeName: (state, action) => {
      if (action.payload === '') {
        state.listToCreate.name = 'Enter a name';
        return;
      }
      state.listToCreate.name = action.payload;
      return;
    },
    addItem: (state, action) => {
      // Validate that item its not already on the list
      const isInTheList = state.listToCreate.items.find(
        ({ item }) => item.id === action.payload.id
      );

      if (!isInTheList)
        state.listToCreate.items.push({ item: action.payload, quantity: 1 });
    },
    addQuantity: (state, action) => {
      const itemId = action.payload;
      const index = state.listToCreate.items.findIndex(
        ({ item }) => item.id === itemId
      );
      state.listToCreate.items[index].quantity += 1;
    },
    restQuantity: (state, action) => {
      const itemId = action.payload;
      const index = state.listToCreate.items.findIndex(
        ({ item }) => item.id === itemId
      );
      if (state.listToCreate.items[index].quantity > 1)
        state.listToCreate.items[index].quantity -= 1;
    },
    deleteItemInList: (state, action) => {
      const itemId = action.payload;
      const index = state.listToCreate.items.findIndex(
        ({ item }) => item.id === itemId
      );
      state.listToCreate.items.splice(index, 1);
    },
    toggleCancel: (state) => {
      state.listToCreate.isCancelled = !state.listToCreate.isCancelled;
    },
    setName: (state, action) => {
      state.listToCreate.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createItemAsync.fulfilled, (state, action) => {
        state.lists.status = 'idle';
        state.lists.value.push(action.payload);
      })
      .addCase(createItemAsync.rejected, (state, action) => {
        state.lists.status = 'failed';
      })
      .addCase(createItemAsync.pending, (state, action) => {
        state.lists.status = 'loading';
      });
  },
});

export const {
  changeListToCreateState,
  changeName,
  addItem,
  addQuantity,
  setName,
  toggleCancel,
  restQuantity,
  deleteItemInList,
} = listsSlice.actions;
export default listsSlice.reducer;
