import { configureStore } from '@reduxjs/toolkit';
import countersReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'counters',
  storage,
}
const persistedReducer = persistReducer(persistConfig, countersReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store)

export { store, persistor };