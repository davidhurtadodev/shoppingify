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
  modal: {
    isVisible: boolean;
    type: string;
  };
}

const initialState: UIState = {
  modal: {
    isVisible: false,
    type: '',
  },
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
    openModal: (state, action) => {
      state.modal = {
        isVisible: true,
        type: action.payload,
      };
    },
    closeModal: (state) => {
      state.modal = {
        isVisible: false,
        type: '',
      };
    },
  },
});
export const {
  changeSidebarValue,
  changeSelectedItem,
  changeSelectedList,
  changeSidebarVisible,
  openModal,
  closeModal,
} = UISlice.actions;

export default UISlice.reducer;
