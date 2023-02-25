import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      items: itemsReducer,
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

export default store;
