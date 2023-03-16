import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ListFetched, ListWithState } from '@/lib/types/List';
import listsService from '@/lib/services/listsService';
import { RootState } from './store';

// Type of state
export interface ListState {
  lists: { value: ListFetched[]; status: 'idle' | 'loading' | 'failed' };
  listToCreate: ListWithState;
}

// Initial state

const initialState: ListState = {
  lists: { value: [], status: 'idle' },
  listToCreate: {
    name: 'Default list',
    isCancelled: false,
    date: null,
    items: [],
    state: 'editing',
  },
};
export const fetchListsAsync = createAsyncThunk(
  'categories/fetchLists',
  async () => {
    const lists = await listsService.getAll();
    return lists;
  }
);

export const createListAsync = createAsyncThunk(
  'lists/createAsync',
  async (arg: string, { getState }) => {
    const storeState = getState();
    const typedState: RootState = storeState as RootState;
    const currentList = typedState.lists.listToCreate;

    const date = new Date();

    console.log({ currentList: currentList });

    const { state, ...listToPost } = currentList;
    listToPost.date = date;
    if (arg !== 'Complete') {
      listToPost.isCancelled = true;
    }
    //name date iscancelled items

    const item = await listsService.create(listToPost);
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
      .addCase(createListAsync.fulfilled, (state, action) => {
        state.lists.status = 'idle';
        state.lists.value.push(action.payload);
      })
      .addCase(createListAsync.rejected, (state, action) => {
        state.lists.status = 'failed';
      })
      .addCase(createListAsync.pending, (state, action) => {
        state.lists.status = 'loading';
      })
      .addCase(fetchListsAsync.fulfilled, (state, action) => {
        state.lists.status = 'idle';
        state.lists.value = action.payload;
      })
      .addCase(fetchListsAsync.rejected, (state, action) => {
        state.lists.status = 'failed';
      })
      .addCase(fetchListsAsync.pending, (state, action) => {
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
