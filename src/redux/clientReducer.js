// clientReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: '',
  language: '',
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAdressList: (state, action) => {
      state.addressList = action.payload;
    },
    setCreditCards: (state, action) => {
      state.creditCards = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setUser } = clientSlice.actions;
export default clientSlice.reducer;
