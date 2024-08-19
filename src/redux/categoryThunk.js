import axios from "axios";
import {setCategories} from "../redux/productReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
  }
);

export const fetchCategoriesAndSet = createAsyncThunk(
  'categories/fetchCategoriesAndSet',
  async () => {
    const categories = await fetchCategories();
    return setCategories(categories);
  }
);

