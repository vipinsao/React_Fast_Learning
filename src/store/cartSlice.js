//we are creating slice in redux
import { createSlice } from "@reduxjs/toolkit";

//here we have created one single slice
//and in that slice prviding all the three
//main things - name,initial state and reducers

const cartSlice = createSlice({
  //providing name
  name: "cart",
  //providing initial state
  initialState: {
    cartItems: [],
  },
  reducers: {
    //Pair
    //key - action
    //value - reducer function
    //this are all actions and reducer function or
    // we can say action functions
    addItems: (state, action) => {
      //we cant direct get the cartItems
      state.cartItems.push(action.payload);
    },
    removeItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearItems: (state, action) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

//Very Important
//When ever there is createSlice created
//it will create one object and inside it
//its have {actions,reducers}
export default cartSlice.reducer;

// //we can pass anything inside this
// addItems("name"); //action.payload - name
