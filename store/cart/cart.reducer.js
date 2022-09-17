import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_CART_STATE = {
  cartItems: [],
};

export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.setCartItems:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
