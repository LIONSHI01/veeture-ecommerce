import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_USER_STATE = {
  recentViewsArr: [],
  wishlist: [],
};

export const userReducer = (state = INITIAL_USER_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.setRecentViews:
      return {
        ...state,
        recentViewsArr: payload,
      };
    case USER_ACTION_TYPES.setWishlist:
      return {
        ...state,
        wishlist: payload,
      };
    default:
      return state;
  }
};
