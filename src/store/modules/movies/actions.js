const addToCart = async ({ state, commit }, item) => {
  const exist = state.cart.some((cartItem) => cartItem.id === item.id);
  if (!exist) {
    const newCart = [...state.cart, item];
    commit("setCartItems", newCart);
    return true;
  } else {
    return false;
  }
};

const restoreCart = ({ commit }, lockrCart) => {
  commit("setCartItems", lockrCart);
};

const resetCart = ({ commit }) => {
  commit("setCartItems", []);
};

export default { addToCart, restoreCart, resetCart };
