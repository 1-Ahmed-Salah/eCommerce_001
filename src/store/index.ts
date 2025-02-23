import { RootState } from './index';
import { configureStore } from '@reduxjs/toolkit';
import categories from './slices/categoriesSlice/categoriesSlice'

export const store = configureStore({
    reducer: {
        categories
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

