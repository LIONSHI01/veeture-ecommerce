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

import { AiOutlineMinus, AiOutlinePlus, MdDelete } from "../../ReactIcons";

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

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
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
              src={urlFor(images?.[0])}
              alt={title}
              objectFit="contain"
              layout="fill"
              objectPosition="center"
            />
          </div>
          <Link href={`/${type}/${category}/${slug?.current}`}>
            <a className="cartItem__name">{title}</a>
          </Link>
        </div>
        <span>{selectedSize ? `Size: ${selectedSize}` : ""}</span>
        <span className="cartItem__unit-price">{`$ ${price}`}</span>
        <div className="cartItem__qty_box">
          <span className="cartItem__minus" onClick={minusFromCartHandler}>
            <AiOutlineMinus className="cartItem__amountIcon" />
          </span>
          <span className="cartItem__number">{quantity}</span>

          <span className="cartItem__plus" onClick={addToCartHandler}>
            <AiOutlinePlus className="cartItem__amountIcon" />
          </span>
        </div>
        <span>{`$ ${subTotal}`}</span>
        <div className="cartItem__btn_remove" onClick={removeFromCartHandler}>
          <MdDelete className="cartItem__remove_icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default CheckoutItem;
