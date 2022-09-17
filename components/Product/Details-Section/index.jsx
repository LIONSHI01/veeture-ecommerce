import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsCheck2Square } from "react-icons/bs";

import { addItemToCart } from "../../../store/cart/cart.action";

import Button from "../../Button";
import { Wrapper } from "./index.styles";
import { buildTime } from "../../../lib/buildTime.utils";
import Accordion from "../Accordion";
import SizesContainer from "../Sizes";
import { selectCartItems } from "../../../store/cart/cart.selector";

const DetailSection = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { price, title, sizes } = product;
  console.log({ price, title, sizes });
  // const { price, images } = defaultProductVariant;
  const deliveryDate = buildTime();

  const addCartHandler = () => dispatch(addItemToCart(cartItems, product));
  return (
    <Wrapper>
      <div className="product-infos">
        <h2>{title}</h2>
        <p>Black Ankle Boots</p>
        <span>{`$ ${price}`}</span>
      </div>
      <SizesContainer sizes={sizes} />
      <Button
        fontSize="var(--fs-xl)"
        width="100%"
        height="7rem"
        type="solid"
        onClick={addCartHandler}
      >
        Add to cart
      </Button>

      <ul className="purchase-terms">
        <li className="term">
          <BsCheck2Square className="icon" />
          <p>
            {`Ordered before 23:59, delivered on ${deliveryDate} for `}
            <strong>free</strong>
          </p>
        </li>
        <li className="term">
          <BsCheck2Square className="icon" />
          <p>Worldwide shipping. Free shipping Europe</p>
        </li>
        <li className="term">
          <BsCheck2Square className="icon" />
          <p>30 days return policy</p>
        </li>
      </ul>
      <Accordion />
    </Wrapper>
  );
};

export default DetailSection;
