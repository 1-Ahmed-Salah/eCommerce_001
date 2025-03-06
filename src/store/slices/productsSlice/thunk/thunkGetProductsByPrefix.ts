import { TProduct } from "@customTypes/product.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

export const thunkGetProductsByPrefix = createAsyncThunk('productsSlice/thunkGetProductsByPrefix', async (prefix: string, thunkAPI)=> {
    const { rejectWithValue } = thunkAPI;

    try {
        const res = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`);
        return res.data;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            rejectWithValue(error.response?.data.message || error.message);
        } else {
            rejectWithValue('An unexpected error');
        }
    }
})