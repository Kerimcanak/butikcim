// clientReducer.js
import { createAction } from '@reduxjs/toolkit';


const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: '',
  language: '',
};

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_ROLES':
      return {
        ...state,
        roles: action.payload,
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}


export const setUser = createAction('SET_USER');
export const setRoles = createAction('SET_ROLES');
export const setTheme = createAction('SET_THEME');
export const setLanguage = createAction('SET_LANGUAGE');
