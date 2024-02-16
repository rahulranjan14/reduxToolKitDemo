import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((store) => store.wishlist.items);

  const handleRemoveFromWishlist = (elementIndex) => {
    dispatch(removeFromWishlist(elementIndex));
  };

  return (
    <div>
      <h2>Your Wishlist</h2>
      <div>
        <h3>Wishlisted items : {wishlistItems.length}</h3>
      </div>
      <div>
        <h3>Items in wishlist :</h3>
      </div>
      <div>
        {wishlistItems.length == 0 ? (
          <h4>No items here</h4>
        ) : (
          <div>
            {wishlistItems.map((item, index) => {
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
                    onClick={() => handleRemoveFromWishlist(index)}
                  >
                    remove from wishlist
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
