import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
const Store = configureStore({
  reducer: {
    tasks:cartSlice,
  },
})

export default Store;