import { createAction } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    payment: {},
    address: {}
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload
      };
    case 'SET_PAYMENT':
      return {
        ...state,
        payment: action.payload
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload
      };
    default:
      return state;
  }
}

export const setCart = createAction('SET_CART');
export const setPayment = createAction('SET_PAYMENT');
export const setAddress = createAction('SET_ADDRESS');