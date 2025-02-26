import { TProduct } from "@customTypes/product.type";
import { createSlice } from "@reduxjs/toolkit";
import { thunkGetProductsByPrefix } from "./thunk/thunkGetProductsByPrefix";
import { thunkGetProducts } from "./thunk/thunkGetProducts";

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
        // rejected [thunkGetProductsByPrefix]
        builder.addCase(thunkGetProductsByPrefix.rejected, (state, action)=> {
            state.loading = 'failed';
            if(action.payload && typeof action.payload === 'string') {
                state.error = action.payload;
            }
        })
        // pending [thunkGetProducts]
        builder.addCase(thunkGetProducts.pending, (state)=> {
            state.loading = 'pending';
            state.error = null;
        })
        // fulfilled [thunkGetProducts]
        builder.addCase(thunkGetProducts.fulfilled, (state, action)=> {
            state.loading = 'succeeded';
            if(action.payload !== undefined) {
                state.records = action.payload;
            }
        })
        // rejected [thunkGetProducts]
        builder.addCase(thunkGetProducts.rejected, (state, action)=> {
            state.loading = 'failed';
            if(action.payload && typeof action.payload === 'string'){
                state.error = action.payload;
            }
        })
    }
})

export { thunkGetProductsByPrefix }
export const { productsCleanUp } = productsSlice.actions
export default productsSlice.reducer;