import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { List, ListFetched } from '@/lib/types/List';
// import itemsService from '@/lib/services/itemsService';

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
  },
};

// export const fetchItemsAsync = createAsyncThunk(
//   'items/fetchItems',
//   async () => {
//     const items = await itemsService.getAll();
//     return items;
//   }
// );
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
//     const item = await itemsService.create(content);
//     return item;
//   }
// );

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
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
      if (state.listToCreate.items[index].quantity > 0)
        state.listToCreate.items[index].quantity -= 1;
    },
    toggleCancel: (state) => {
      state.listToCreate.isCancelled = !state.listToCreate.isCancelled;
    },
    setName: (state, action) => {
      state.listToCreate.name = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(createItemAsync.fulfilled, (state, action) => {
  //         state.status = 'idle';
  //         state.items.push(action.payload);
  //       })
  //       .addCase(createItemAsync.rejected, (state, action) => {
  //         state.status = 'failed';
  //       })
  //       .addCase(createItemAsync.pending, (state, action) => {
  //         state.status = 'loading';
  //       })
  //       .addCase(deleteItemsAsync.pending, (state) => {
  //         state.status = 'loading';
  //       })
  //       .addCase(deleteItemsAsync.fulfilled, (state, action) => {
  //         const idDeleted: string = action.payload;
  //         const filterDeleted = state.items.filter(
  //           (item: ItemFetched) => item.id !== idDeleted
  //         );
  //         state.items = filterDeleted;
  //       })
  //       .addCase(deleteItemsAsync.rejected, (state, action) => {
  //         state.status = 'failed';
  //       })
  //       .addCase(fetchItemsAsync.pending, (state) => {
  //         state.status = 'loading';
  //       })
  //       .addCase(fetchItemsAsync.fulfilled, (state, action) => {
  //         state.status = 'idle';
  //         state.items = action.payload;
  //       })
  //       .addCase(fetchItemsAsync.rejected, (state, action) => {
  //         state.status = 'failed';
  //       });
  //   },
});

export const {
  changeName,
  addItem,
  addQuantity,
  setName,
  toggleCancel,
  restQuantity,
} = listsSlice.actions;
export default listsSlice.reducer;
