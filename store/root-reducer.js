import { combineReducers } from "redux";

import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";
import { userReducer } from "./user/user.reducer";

const appReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  user: userReducer,
});

export const rootReducer = (state, action) => {
  //KEYNOTE: CLEAR ALL STATES
  if (action.type === "USER_LOGOUT") {
    const { routing } = state;
    state = { routing };
  }

  return appReducer(state, action);
};
