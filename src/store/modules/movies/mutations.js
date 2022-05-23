import lockr from "lockr";

const setCartItems = (state, cartItems) => {
  state.cart = cartItems;
  lockr.set("cart", state.cart);
};

export default { setCartItems };
