import { createSlice } from "@reduxjs/toolkit";
import { thunkGetCategories } from "./thunk/thunkGetCategories";
import { TCategory } from "@customTypes/category.types";
import { TLoading } from "@customTypes/shared.types";

interface ICategoriesSlice {
    records: TCategory[];
    loading: TLoading;
    error: string | null;
}

const initialState: ICategoriesSlice = {
    records: [],
    loading: 'idle',
    error: null
}

const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // pending [thunkGetCategories]
        builder.addCase(thunkGetCategories.pending, (state)=> {
            state.loading = 'pending';
            state.error = null;
        } );
        // fulfilled [thunkGetCategories]
        builder.addCase(thunkGetCategories.fulfilled, (state, action)=> {
            state.loading = 'succeeded';
            if(action.payload !== undefined) {
                state.records = action.payload;
            }
        })
        // rejected [thunkGetCategories]
        builder.addCase(thunkGetCategories.rejected, (state, action)=> {
            state.loading = 'failed';
            if(action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        })

    }
})

export {thunkGetCategories}
export default categoriesSlice.reducer;