import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_USER_STATE = {
  userProfile: {},
  recentViewsArr: [],
  wishlist: [],
};

export const userReducer = (state = INITIAL_USER_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.setUserProfile:
      return {
        ...state,
        userProfile: payload,
      };
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
    case USER_ACTION_TYPES.setLogout:
      return {
        ...state,
        recentViewsArr: [],
        wishlist: [],
      };

    default:
      return state;
  }
};
