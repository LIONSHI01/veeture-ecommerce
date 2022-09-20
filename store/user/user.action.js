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

export const setRecentViews = (recentViewsArr, productToAdd) => {
  const newRecentViewsArr = addItemToArr(recentViewsArr, productToAdd);
  return createAction(USER_ACTION_TYPES.setRecentViews, newRecentViewsArr);
};
