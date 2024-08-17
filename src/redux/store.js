import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // or other storage like 'async-storage' for React Native
import clientReducer from './clientReducer';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shoppingCart'] // Persist only the shoppingCart reducer
};

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware());
const persistor = persistStore(store);

export default store
  
export { persistor }