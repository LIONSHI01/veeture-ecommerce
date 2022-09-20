import { PRODUCT_ACTIONS_TYPES } from "./product.types";

const INITIAL_PRODUCT_STATE = {
  allProducts: [],
  filterConditions: {
    gender: [],
    category: [],
    price: [],
    sizes: [],
    clothing: [],
  },
  filteredProducts: [],
  searchResults: [],
};

export const productReducer = (state = INITIAL_PRODUCT_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_ACTIONS_TYPES.setALLProducts:
      return {
        ...state,
        allProducts: payload,
      };

    case PRODUCT_ACTIONS_TYPES.setFilterConds:
      return {
        ...state,
        filterConditions: payload,
      };

    case PRODUCT_ACTIONS_TYPES.setFilteredProducts:
      return {
        ...state,
        filteredProducts: payload,
      };
    case PRODUCT_ACTIONS_TYPES.setSearchResults:
      return {
        ...state,
        searchResults: payload,
      };

    default:
      return state;
  }
};
