//this is the central redux store

import { configureStore } from "@reduxjs/toolkit";

//importing reducers of different slices
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice"

// Configuring the Redux store using configureStore or in other words creating the store
const store = configureStore({
    // Combining reducers from different slices
  reducer: {
    cart: cartReducer, //reducer for cart slice
    wishlist: wishlistReducer //reducer for wishlist slice
  },
});

//exporting our redux store
export default store;
