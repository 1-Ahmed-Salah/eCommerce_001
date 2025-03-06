import { TCategory } from "@customTypes/category.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TCategory[];

export const thunkGetCategories = createAsyncThunk('categoriesSlice/thunkGetCategories', async (_, thunkAPI)=> {
    const {rejectWithValue} = thunkAPI;

    try {
        const res = await axios.get<TResponse>('/categories');
        return res.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            rejectWithValue(error.response?.data.message || error.message)
        } else {
            rejectWithValue('An unexpected error')
        }
    }

})