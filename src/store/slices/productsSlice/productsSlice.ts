import { TProduct } from "@customTypes/product.type";
import { createSlice } from "@reduxjs/toolkit";
import { thunkGetProductsByPrefix } from "./thunk/thunkGetProductsByPrefix";

interface IProductsSlice {
    records: TProduct[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: IProductsSlice = {
    records: [],
    loading: 'idle',
    error: null
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        productsCleanUp: (state) => {
            state.records = [];
        }
    },
    extraReducers: (builder) => {
        // pending [thunkGetProductsByPrefix]
        builder.addCase(thunkGetProductsByPrefix.pending, (state)=> {
            state.loading = 'pending';
            state.error = null;
        })
        // fulfilled [thunkGetProductsByPrefix]
        builder.addCase(thunkGetProductsByPrefix.fulfilled, (state, action)=> {
            state.loading = 'succeeded';
            if(action.payload !== undefined) {
                state.records = action.payload;
            }
        })
        //
        builder.addCase(thunkGetProductsByPrefix.rejected, (state, action)=> {
            state.loading = 'failed';
            if(action.payload && typeof action.payload === 'string') {
                state.error = action.payload;
            }
        })
    }
})

export { thunkGetProductsByPrefix }
export const { productsCleanUp } = productsSlice.actions
export default productsSlice.reducer;