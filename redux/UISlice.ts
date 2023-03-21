import { createSlice } from '@reduxjs/toolkit';

export interface UIState {
  sidebar: {
    value: string;
    isVisible: boolean;
  };
  selectedItem: {
    id: string | null;
  };
  mainSection: {
    value: boolean;
  };
  // addItemSection: {
  //   isVisible: boolean;
  // };
  // itemInfoSection: {
  //   isVisible: boolean;
  // };
  // shoppingListSection: {
  //   isVisible: boolean;
  // };
}

const initialState: UIState = {
  sidebar: {
    value: 'shopping-list',
    isVisible: true,
  },
  selectedItem: {
    id: null,
  },
  mainSection: {
    value: true,
  },
  // itemInfoSection: {
  //   isVisible: false,
  // },
  // shoppingListSection: {
  //   isVisible: true,
  // },
};

export const UISlice = createSlice({
  name: 'UI',
  initialState: initialState,
  reducers: {
    changeSidebarValue: (state, action) => {
      state.sidebar.value = action.payload;
    },
    changeSidebarVisible: (state, action) => {
      state.sidebar.isVisible = !state.sidebar.isVisible;
    },
    changeSelectedItem: (state, action) => {
      state.selectedItem.id = action.payload;
    },
  },
});
export const { changeSidebarValue, changeSelectedItem, changeSidebarVisible } =
  UISlice.actions;

export default UISlice.reducer;
