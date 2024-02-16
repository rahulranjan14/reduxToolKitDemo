import React from "react";

import { useSelector, useDispatch } from "react-redux";

//importing actions for slices
import { clearCart, removeItem } from "../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items); // subscribing(syncing) cart items slice

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (elementIndex) => {
    dispatch(removeItem(elementIndex));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        <h3>Cart items : {cartItems.length}</h3>
      </div>
      <div>
        <h3>Items in cart :</h3>
      </div>
      <div>
        {cartItems.length == 0 ? (
          <h4>Cart is empty</h4>
        ) : (
          <div>
            {cartItems.map((item, index) => {
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
                    style={{ backgroundColor: "red" }}
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    remove from cart
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {cartItems.length !== 0 && (
          <div>
            <button
              style={{ backgroundColor: "red" }}
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
