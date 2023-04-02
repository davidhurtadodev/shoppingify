import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import categoryReducer from './categoriesSlice';
import UIReducer from './UISlice';
import listReducer from './listsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  items: itemsReducer,
  categories: categoryReducer,
  UI: UIReducer,
  lists: listReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    // reducer: {
    //   items: itemsReducer,
    //   categories: categoryReducer,
    //   UI: UIReducer,
    //   lists: listReducer,
    // },
    reducer: persistedReducer,
    devTools: true,
  });

export const store = makeStore();
export const persistor = persistStore(store);

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
// export default store;
