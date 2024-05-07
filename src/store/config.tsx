import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// @ts-ignore
import { api } from 'src/store/api.jsx';
// @ts-ignore
import globalReducer from 'src/store/index';

const persistConfig = {
  key: 'wo-sumatra',
  storage,
  version: 1,
}
const persistedReducer = persistReducer(persistConfig, globalReducer)

const store = configureStore({
  reducer: {
    global: persistedReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
})
setupListeners(store.dispatch)

export type RootStateStype = ReturnType<typeof store.getState>
export default store