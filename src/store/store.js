import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

//ek reducer ke ander multiple slices hote hai

//here we have create one app store which will have
//lots of slices
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
