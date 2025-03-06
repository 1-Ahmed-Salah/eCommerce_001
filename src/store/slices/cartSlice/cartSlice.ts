import { TProduct } from "@customTypes/product.type";
import { createSlice } from "@reduxjs/toolkit";

interface ICartSlice {
    items: {[key: number] : number};
    productFullInfo: TProduct[]
}

const initialState: ICartSlice = {
    items: {},
    productFullInfo: []
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload;
            if(state.items[id]) {
                state.items[id]++;
            } else {
                state.items[id] = 1;
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;