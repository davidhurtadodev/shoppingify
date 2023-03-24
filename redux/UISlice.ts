import { createSlice } from '@reduxjs/toolkit';

export interface UIState {
  sidebar: {
    value: string;
    isVisible: boolean;
  };
  selectedItem: {
    id: string | null;
  };
  selectedList: {
    id: string | null;
  };
  mainSection: {
    value: boolean;
  };
}

const initialState: UIState = {
  sidebar: {
    value: 'shopping-list',
    isVisible: true,
  },
  selectedItem: {
    id: null,
  },
  selectedList: {
    id: null,
  },
  mainSection: {
    value: true,
  },
};

export const UISlice = createSlice({
  name: 'UI',
  initialState: initialState,
  reducers: {
    changeSidebarValue: (state, action) => {
      state.sidebar.value = action.payload;
    },
    changeSidebarVisible: (state) => {
      state.sidebar.isVisible = !state.sidebar.isVisible;
    },
    changeSelectedItem: (state, action) => {
      state.selectedItem.id = action.payload;
    },
    changeSelectedList: (state, action) => {
      state.selectedList.id = action.payload;
    },
  },
});
export const {
  changeSidebarValue,
  changeSelectedItem,
  changeSelectedList,
  changeSidebarVisible,
} = UISlice.actions;

export default UISlice.reducer;
