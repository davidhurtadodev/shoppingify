import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import categoryReducer from './categoriesSlice';
import UIReducer from './UISlice';
import listReducer from './listsSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      items: itemsReducer,
      categories: categoryReducer,
      UI: UIReducer,
      lists: listReducer,
    },
    devTools: true,
  });

const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type RootState = ReturnType<typeof store.getState>;
export default store;
