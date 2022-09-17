export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartCount = (state) =>
  state.cart.cartItems?.reduce(
    (currTotal, item) => currTotal + item.quantity,
    0
  );
export const selectCartTotal = (state) =>
  state.cart.cartItems?.reduce(
    (currTotal, item) => currTotal + item.subTotal,
    0
  );
