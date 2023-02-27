import { createSlice } from '@reduxjs/toolkit';

export interface UIState {
  sidebar: {
    value: string;
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
      //   for (const section in state) {
      //     state[`${section}`];
      //   }
      //   state[section as keyof UIState].isVisible =
      //     !state[section as keyof UIState].isVisible;
      // },
      state.sidebar.value = action.payload;
    },
  },
});
export const { changeVisibility } = UISlice.actions;

export default UISlice.reducer;
