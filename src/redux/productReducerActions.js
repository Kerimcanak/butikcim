import { fetchProducts, setCategories, setTotal, setProducts, setFetchState } from './productReducer';
import { createAction } from '@reduxjs/toolkit';

export const setLimit = createAction('SET_LIMIT');
export const setOffset = createAction('SET_OFFSET');
export const setFilter = createAction('SET_FILTER');
export const productActions = {
    fetchProducts: createAction('FETCH_PRODUCTS'),
    setCategories: createAction('SET_CATEGORIES'),
    setProducts: createAction('SET_PRODUCTS'),
    setTotal: createAction('SET_TOTAL'),
    setFetchState: createAction('SET_FETCH_STATE'),
    setLimit: createAction('SET_LIMIT'),
    setOffset: createAction('SET_OFFSET'),
    setFilter: createAction('SET_FILTER'),
};

