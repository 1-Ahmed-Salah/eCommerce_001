import { TProduct } from "@customTypes/product.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

export const thunkGetProducts = createAsyncThunk('productsSlice/thunkGetProducts', async (_, thunkAPI)=> {
    const { rejectWithValue } = thunkAPI;

    try {
        const res = await axios.get<TResponse>('http://localhost:5005/products');
        return res.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            rejectWithValue(error.response?.data.message || error.message);
        } else {
            rejectWithValue('An unexpected error');
        }
    }
})
