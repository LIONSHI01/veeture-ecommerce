import createAction from "../../lib/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

const addItemToArr = (recentViewsArr, productToAdd) => {
  const existingItem = recentViewsArr?.find(
    (item) => item._id === productToAdd._id
  );
  if (existingItem) return [...recentViewsArr];
  recentViewsArr.unshift(productToAdd);
  const newRecentViews = [...recentViewsArr];

  return newRecentViews;
};

const toggleLikeItem = (likeList, itemToAdd) => {
  const existingItem = likeList.find((item) => item._id === itemToAdd._id);
  // if item exist, remove it
  if (existingItem) {
    return likeList.filter((item) => item._id !== itemToAdd._id);
  }
  return [...likeList, { ...itemToAdd, isLiked: true }];
};

export const setRecentViews = (recentViewsArr, productToAdd) => {
  const newRecentViewsArr = addItemToArr(recentViewsArr, productToAdd);
  return createAction(USER_ACTION_TYPES.setRecentViews, newRecentViewsArr);
};

export const setLikeList = (likeList, itemToAdd) => {
  const newLikeList = toggleLikeItem(likeList, itemToAdd);

  // TEMPORARY
  localStorage.setItem("likeList", JSON.stringify(newLikeList));
  return createAction(USER_ACTION_TYPES.setLikeList, newLikeList);
};
