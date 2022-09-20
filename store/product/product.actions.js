import createAction from "../../lib/reducer.utils";
import { PRODUCT_ACTIONS_TYPES } from "./product.types";

export const setALLProducts = (productsArr) =>
  createAction(PRODUCT_ACTIONS_TYPES.setALLProducts, productsArr);

export const setFilterConds = (conditions) =>
  createAction(PRODUCT_ACTIONS_TYPES.setFilterConds, conditions);

export const setSearchResults = (productsArr) =>
  createAction(PRODUCT_ACTIONS_TYPES.setSearchResults, productsArr);
