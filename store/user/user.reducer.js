import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_USER_STATE = {
  recentViewsArr: [],
};

export const userReducer = (state = INITIAL_USER_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.setRecentViews:
      return {
        ...state,
        recentViewsArr: payload,
      };
    default:
      return state;
  }
};
