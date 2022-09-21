import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_USER_STATE = {
  recentViewsArr: [],
  likeList: [],
};

export const userReducer = (state = INITIAL_USER_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.setRecentViews:
      return {
        ...state,
        recentViewsArr: payload,
      };
    case USER_ACTION_TYPES.setLikeList:
      return {
        ...state,
        likeList: payload,
      };
    default:
      return state;
  }
};
