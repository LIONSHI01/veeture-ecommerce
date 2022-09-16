import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BsCheck2Square } from "react-icons/bs";

import Button from "../../Button";
import { Wrapper } from "./index.styles";
import { buildTime } from "../../../lib/buildTime.utils";
import Accordion from "../Accordion";

const DetailSection = ({ product }) => {
  const { defaultProductVariant, category, title } = product;
  const { price, images } = defaultProductVariant;
  const deliveryDate = buildTime();
  return (
    <Wrapper>
      <div className="product-infos">
        <h2>{title}</h2>
        <p>Black Ankle Boots</p>
        <span>{`$ ${price}`}</span>
      </div>
      <div className="sizes-box">
        EU36
        {/* Loop over the available sizes */}
      </div>
      <Button fontSize="var(--fs-xl)" width="100%" height="7rem" type="solid">
        Add to cart
      </Button>
      {/* <button className="atc-btn">Add to cart</button> */}
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
