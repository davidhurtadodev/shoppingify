import { createSlice } from '@reduxjs/toolkit';

export interface UIState {
  sidebar: {
    value: string;
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
    changeVisibility: (state, action) => {
      state.sidebar.value = action.payload;
    },
    changeSelectedItem: (state, action) => {
      state.selectedItem.id = action.payload;
    },
  },
});
export const { changeVisibility, changeSelectedItem } = UISlice.actions;

export default UISlice.reducer;
