import createAction from "../../lib/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, itemToAdd) => {
  // check if exist
  const existItem = cartItems.find(
    (item) =>
      item._id === itemToAdd._id && item.selectedSize === itemToAdd.selectedSize
  );
  console.log(existItem);
  // if exist, add original item quanity +1
  if (existItem) {
    return cartItems.map((item) =>
      item._id === itemToAdd._id
        ? {
            ...item,
            quantity: +item.quantity + 1,
            subTotal: (+item.quantity + 1) * item.price,
          }
        : item
    );
  }
  // if not exist, add item into array and quantity =1
  return [
    ...cartItems,
    { ...itemToAdd, quantity: 1, subTotal: itemToAdd.price },
  ];
};

export const addItemToCart = (cartItems, itemToAdd) => {
  const newCartItems = addCartItem(cartItems, itemToAdd);
  return createAction(CART_ACTION_TYPES.setCartItems, newCartItems);
};
