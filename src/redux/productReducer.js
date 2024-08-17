import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    products: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: '',
    fetchState: 'NOT_FETCHED',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.fetchState = 'FETCHING';
      state.filter = action.payload.filter;
      state.limit = action.payload.limit;
      state.offset = action.payload.offset;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setTotal(state, action) {
      state.total = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
      state.fetchState = 'FETCHED';
    },
    setFetchState(state, action) {
      state.fetchState = action.payload;
    },
  },
});

export const { fetchProducts, setCategories, setTotal, setProducts, setFetchState } = productSlice.actions;
export default productSlice.reducer;

