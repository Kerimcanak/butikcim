import { createAction } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: '',
    fetchState: 'NOT_FETCHED',
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload,
            };
        case 'SET_PRODUCTLIST':
                return {
                    ...state,
                    products: action.payload,
                };
        case 'SET_TOTAL':
            return {
                ...state,
                total: action.payload,
            };
        case 'SET_OFFSET':
            return {
                ...state,
                offset: action.payload,
            };
        case 'SET_LIMIT':
            return {
                ...state,
                limit: action.payload,
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            };
        case 'SET_FETCH_STATE':
            const allowedStates = ['NOT_FETCHED', 'FETCHING', 'FETCHED', 'FAILED'];
            if (!allowedStates.includes(action.payload)) {
                throw new Error(`Invalid fetch state: ${action.payload}`);
            }
            return {
                ...state,
                fetchState: action.payload,
            };
        default:
            return state;
    }
}

export const setCategories = createAction('SET_CATEGORIES');
export const setProductList = createAction('SET_PRODUCTLIST');
export const setTotal = createAction('SET_TOTAL');
export const setOffset = createAction('SET_OFFSET');
export const setLimit = createAction('SET_LIMIT');
export const setFilter = createAction('SET_FILTER');
export const setFetchState = createAction('SET_FETCH_STATE');