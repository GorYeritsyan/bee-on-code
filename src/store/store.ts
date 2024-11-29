import {configureStore} from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice'

const store = configureStore({
    reducer: {
        categorySlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store