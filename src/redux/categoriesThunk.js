import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCategories } from "./productReducer";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { dispatch }) => { // Use the second argument for dispatch
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    dispatch(setCategories(response.data));
  }
);