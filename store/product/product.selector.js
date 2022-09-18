import { filterFn } from "../../lib/buildFilteredList.utils";

export const selectFilteredProducts = (state) => {
  // console.log(state.product.filterConditions);

  // const { gender, category, sizes, clothing, price } =
  //   state.product.filterConditions;
  // console.log({ gender, category, sizes, clothing, price });
  return filterFn(state.product.allProducts, state.product.filterConditions);
};
