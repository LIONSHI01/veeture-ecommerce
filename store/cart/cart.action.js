import createAction from "../../lib/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import { updateAccount } from "../../lib/apiRequest/authRequest";

// HELPER FUNCTIONS
const addCartItem = (cartItems, itemToAdd) => {
  // check if exist
  const existItem = cartItems.find(
    (item) =>
      item._id === itemToAdd._id && item.selectedSize === itemToAdd.selectedSize
  );

  // if exist, add original item quanity +1
  if (existItem) {
    return cartItems.map((item) =>
      item._id === itemToAdd._id && item.selectedSize === itemToAdd.selectedSize
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
const minusCartItem = (cartItems, itemToMinus) => {
  // find item in the array
  const existItem = cartItems.find(
    (item) =>
      item._id === itemToMinus._id &&
      item.selectedSize === itemToMinus.selectedSize
  );

  // if exist item quantity > 1
  if (existItem.quantity > 1) {
    return cartItems.map((item) =>
      item._id === itemToMinus._id &&
      item.selectedSize === itemToMinus.selectedSize
        ? {
            ...item,
            quantity: +item.quantity - 1,
            subTotal: (+item.quantity - 1) * item.price,
          }
        : item
    );
  }
  return cartItems;
};

const removeCartItem = (cartItems, itemToRemove) =>
  cartItems.filter(
    (item) =>
      !(
        item._id === itemToRemove._id &&
        item.selectedSize === itemToRemove.selectedSize
      )
  );

// ACTIONS ON CARTLIST
// Fetch user data from database
export const setCartList = (cartItems) =>
  createAction(CART_ACTION_TYPES.setCartItems, cartItems);

export const addItemToCart = (cartItems, itemToAdd) => {
  const newCartItems = addCartItem(cartItems, itemToAdd);

  // Update user profile in Database
  updateAccount(newCartItems, "cartList");
  return createAction(CART_ACTION_TYPES.setCartItems, newCartItems);
};

export const minusItemFromCart = (cartItems, itemToMinus) => {
  const newCartItems = minusCartItem(cartItems, itemToMinus);
  updateAccount(newCartItems, "cartList");
  return createAction(CART_ACTION_TYPES.setCartItems, newCartItems);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const newCartItems = removeCartItem(cartItems, itemToRemove);
  updateAccount(newCartItems, "cartList");
  return createAction(CART_ACTION_TYPES.setCartItems, newCartItems);
};

// ACTIONS ON CART SIDEBAR
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.setIsCartOpen, boolean);
