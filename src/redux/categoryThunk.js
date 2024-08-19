import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCategories } from "./productReducer";
//this code works inshallah (https://youtu.be/D2tPBaO4nbs?si=yN0Re0Mx0YmhLF1U&t=30)

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    const categories = await axios.get("https://fakestoreapi.com/products/categories");
    thunkAPI.dispatch(setCategories(categories.data));
  }
);

