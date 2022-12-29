import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../../../store/cart/cart.selector";

import { BsBagPlus, ImArrowLeft2 } from "../../ReactIcons";
import { setIsCartOpen } from "../../../store/cart/cart.action";
import { Overlay, CartItem, LinkButton } from "../../index";
import { Wrapper } from "./index.styles";

const CartBar = () => {
  const disptach = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const closeCartHandler = () => {
    disptach(setIsCartOpen(false));
  };

  return (
    <>
      <Wrapper>
        <div className={`cartbar ${isCartOpen ? "open" : ""}`}>
          <div className="cartbar__goback-box" onClick={closeCartHandler}>
            <ImArrowLeft2 className="cartbar__back-icon" />
            <span className="cartbar__backText">Back To Shopping</span>
            <span className="cartbar__itemQty">{`(${
              cartCount ?? 0
            } items)`}</span>
          </div>

          {cartItems?.length >= 1 ? (
            <>
              <div className="cartItemList">
                {cartItems?.map((product, i) => (
                  <CartItem key={i} product={product} />
                ))}
              </div>
              <div className="cartItem__summary">
                <span className="cartbar__total">{`Total HK$ ${cartTotal}`}</span>
              </div>

              <LinkButton url="/cart" onClick={closeCartHandler}>
                Check out &rarr;
              </LinkButton>
            </>
          ) : (
            <div className="cartItem__emptyBox">
              <BsBagPlus className="cartItem__emptyBox-icon" />
              <span className="cartItem__emptyBox-text">
                Your cart is Empty
              </span>
            </div>
          )}
        </div>
      </Wrapper>
      <Overlay showup={isCartOpen} setShowup={closeCartHandler} />
    </>
  );
};

export default CartBar;
