import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { selectCartItems } from "../../../store/cart/cart.selector";

import { Wrapper } from "./index.styles";

import {
  addItemToCart,
  minusItemFromCart,
  removeItemFromCart,
} from "../../../store/cart/cart.action";
import { urlFor } from "../../../lib/sanity-client.utils";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const CheckoutItem = ({ product }) => {
  const {
    title,
    price,
    images,
    slug,
    quantity,
    subTotal,
    selectedSize,
    type,
    category,
  } = product;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const addToCartHandler = () => dispatch(addItemToCart(cartItems, product));
  const minusFromCartHandler = () =>
    dispatch(minusItemFromCart(cartItems, product));
  const removeFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, product));

  return (
    <Wrapper>
      <div className="cartItem">
        <div className="cartItem__name_box">
          <div className="cartItem__img_box">
            <Image
              src={urlFor(images && images[0])}
              width={70}
              height={70}
              alt="PRODUCT NAME"
            />
          </div>
          <Link href={`/${type}/${category}/${slug.current}`}>
            <a className="cartItem__name">{title}</a>
          </Link>
        </div>
        <span>{selectedSize ? `Size: ${selectedSize}` : ""}</span>
        <span>{`HK$ ${price}`}</span>
        <div className="cartItem__qty_box">
          <span>Amount :</span>
          <span className="cartItem__minus" onClick={minusFromCartHandler}>
            <AiOutlineMinus className="cartItem__amountIcon" />
          </span>
          <span className="cartItem__number">{quantity}</span>

          <span className="cartItem__plus" onClick={addToCartHandler}>
            <AiOutlinePlus className="cartItem__amountIcon" />
          </span>
        </div>
        <span>{`HK$ ${subTotal}`}</span>
        <div className="cartItem__btn_remove" onClick={removeFromCartHandler}>
          <MdDelete className="cartItem__remove_icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default CheckoutItem;
