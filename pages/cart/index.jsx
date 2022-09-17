import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import { FaShippingFast } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineFileDone,
} from "react-icons/ai";

import CheckoutItem from "../../components/Product/CheckoutItem";

import { Wrapper } from "./index.styles";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <Wrapper>
      <div className="section-container">
        <div className="cart__flow-container">
          <div className="cart__flow-step">
            <span className="cart__flow-num">1</span>
            <FaShippingFast className="cart__flow-icon" />
            <span>Choose Shipping Method</span>
          </div>
          <div className="cart__flow-step">
            <span className="cart__flow-num">2</span>
            <AiOutlineFileDone className="cart__flow-icon" />
            <span>Fill In Info</span>
          </div>
          <div className="cart__flow-step">
            <span className="cart__flow-num">3</span>
            <MdSystemSecurityUpdateGood className="cart__flow-icon" />
            <span>Finish Check Out</span>
          </div>
        </div>
        {cartItems.length >= 1 ? (
          <div className="cart__shopping">
            <div className="cart__table">
              <div className="cart__title">
                <div className="cart__title-icon-box">
                  <FaShippingFast className="cart__title-icon" />
                </div>
                <h4 className="cart__title-text">Cart Items</h4>
              </div>
              <div className="cart__table-head">
                <span>Product Name</span>
                <span>Specifications</span>
                <span>Unit Price</span>
                <span>Quantity</span>
                <span>Sub-total</span>
                <span>Remove</span>
              </div>
              <div className="cart__table-body">
                {cartItems?.map((product, i) => (
                  <CheckoutItem
                    key={`${product._id}-${product.selectedSize}`}
                    product={product}
                  />
                ))}
              </div>
              {cartItems?.length >= 1 ? (
                <div className="cart__sum-box">
                  <span>Total</span>
                  <span>{`HK$ ${cartTotal}`}</span>
                </div>
              ) : (
                <div className="cart__empty-text">
                  {"No Item Yet ! Let's Explore!"}
                </div>
              )}
            </div>
            <div className="cart__btns-group">
              <Link href="/">
                <a className="cart__shopping-btn-box">
                  <AiOutlineLeft className="cart__shopping-btn-left" />
                  <span>Shopping</span>
                </a>
              </Link>
              <div onClick={() => {}}>
                <a className="cart__shopping-btn-box">
                  <span>Check Out</span>
                  <SiCashapp />
                  <AiOutlineRight className="cart__shopping-btn-right" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart__empty-msg">
            <div className="cart__empty-text">
              {"No Item Yet ! Let's Explore !"}
            </div>
            <Link href="/">
              <a className="cart__shopping-btn-box">
                <AiOutlineLeft className="cart__shopping-btn-left" />
                <span>Shopping</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default CartPage;
