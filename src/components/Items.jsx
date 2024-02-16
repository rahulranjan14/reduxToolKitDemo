import React from "react";
import { useDispatch, useSelector } from "react-redux";

//importing actions from the respective slices
import { addItem } from "../store/cartSlice";
import { addToWishlist } from "../store/wishlistSlice";

export default function Items() {
  const dispatch = useDispatch(); //retriving dispatch function from redux store to trigger the actions
  const wishlistItems = useSelector((store) => store.wishlist.items); // getting/syncing the wishlist items slice from the store

  const allItems = ["Cap", "Shirt", "Trouser", "Shoe"];

  const handleAddToCart = (item) => {
    dispatch(addItem(item)); // dispatching (or invoking in simple words) "addItem" action(or function in simple words) of the cart slice & passing "item" as agrument
  };

  const handleAddToWishlist = (item) => {
    if (wishlistItems.includes(item)) {
      window.alert("item already in wishlist");
    } else {
      dispatch(addToWishlist(item)); // dispatching the action "addToWishlist"
    }
  };

  return (
    <div>
      <h2>All Items</h2>

      {allItems.map((item, index) => {
        return (
          <div
            style={{
              margin: "10px",
              backgroundColor: "teal",
              border: "1px solid white",
            }}
          >
            <h3>{item}</h3>
            <button
              style={{ backgroundColor: "blue" }}
              onClick={() => handleAddToWishlist(item)}
            >
              add to wishlist
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => handleAddToCart(item)}
            >
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
