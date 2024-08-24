import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCategories } from "./productReducer";
import { setTotal } from "./productReducer";

export const fetchProducts = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    const products = await axios.get("https://fakestoreapi.com/products");
    thunkAPI.dispatch(setCategories(products.data));
    const count = await axios.get("https://fakestoreapi.com/products/rating/count");
    thunkAPI.dispatch(setTotal(count.data));
    return products.data;
  }
);

