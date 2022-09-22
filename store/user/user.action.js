import createAction from "../../lib/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { updateAccount } from "../../lib/authRequest";

// LOGOUT MANAGEMENT
export const setLogout = () => createAction(USER_ACTION_TYPES.setLogout);

// RECENTVIEWS MANAGEMENT
const addItemToArr = (recentViewsArr, productToAdd) => {
  const existingItem = recentViewsArr?.find(
    (item) => item._id === productToAdd._id
  );
  if (existingItem) return [...recentViewsArr];
  recentViewsArr.unshift(productToAdd);
  const newRecentViews = [...recentViewsArr];

  return newRecentViews;
};

export const setRecentViews = (recentViewsArr, productToAdd) => {
  const newRecentViewsArr = addItemToArr(recentViewsArr, productToAdd);
  return createAction(USER_ACTION_TYPES.setRecentViews, newRecentViewsArr);
};

// WISHLIST MANAGEMENT

const toggleLikeItem = (likeList, itemToAdd) => {
  const existingItem = likeList.find((item) => item._id === itemToAdd._id);
  // if item exist, remove it
  if (existingItem) {
    return likeList.filter((item) => item._id !== itemToAdd._id);
  }
  return [...likeList, { ...itemToAdd, isLiked: true }];
};

export const toggleWishlist = (wishlist, itemToAdd) => {
  // STEP1: BUILD NEW LIST
  const newWishlist = toggleLikeItem(wishlist, itemToAdd);

  // STEP2: UPDATE DATABASE
  updateAccount(newWishlist);

  // STEP3: RETURN ACTION
  return createAction(USER_ACTION_TYPES.setWishlist, newWishlist);
};

export const setWishlist = (wishlist) =>
  createAction(USER_ACTION_TYPES.setWishlist, wishlist);
