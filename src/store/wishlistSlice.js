import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        items:[]
    },
    reducers:{
        addToWishlist: (state, action) => {
            if(!state.items.includes(action.payload)){
                state.items.push(action.payload)
            }
        },
        removeFromWishlist: (state, action) => {
            console.log("hi from reducer")
            state.items.splice(action.payload,1)
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer;