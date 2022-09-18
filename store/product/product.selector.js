import { filterFn } from "../../lib/buildFilteredList.utils";

export const selectFilteredProducts = (state) =>
  filterFn(state.product.allProducts, state.product.filterConditions);

export const selectFilterConditions = (state) => state.product.filterConditions;
