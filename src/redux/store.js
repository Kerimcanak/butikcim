import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // or other storage like 'async-storage' for React Native
import clientReducer from './clientReducer';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['client', 'product', 'shoppingCart'] // Persist all reducers
};


const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
const persistor = persistStore(store);

//when we close the website the persistence must be removed
window.addEventListener('beforeunload', () => {
  persistor.purge()
})

export default store
  
export { persistor }