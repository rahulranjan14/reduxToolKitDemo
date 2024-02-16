import { createSlice, current } from "@reduxjs/toolkit";

//creating a slice(logical partition of redux store) for the cart section 
const cartSlice = createSlice({ 
  //naming the slice 
  name: "cart",
  //defining initial state/value for the slice  
  initialState: {
    items: [], 
  },
  //defining reducers for different actions (logic for updating the slice)
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); //logic for updating the state/slice for the action "addItem"
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1); //logic for updating the state/slice for the action "removeItem"
    },
    clearCart: (state, action) => {
      //use "current" for accessing values while debugging
      // console.log("cart state value", current(state))
      state.items = [];
    },
  },
});

//exporting actions of this slice
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//exporting reducers of this slice
export default cartSlice.reducer;
