import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../../../lib/sanity-client.utils";

import { ItemWrapper } from "./index.styles";

const SingleProductItem = ({ product }) => {
  const { title, price, images, slug, selectedSize, category, type } = product;

  return (
    <ItemWrapper>
      <div className="cartItem">
        <div className="cartItem__product-image">
          <Image
            src={urlFor(images && images[0])}
            width={150}
            height={150}
            objectFit="cover"
            alt="product img"
          />
        </div>
        <div className="cartItem__content">
          <div className="cartItem__top">
            <div className="cartItem__details">
              <Link href={`/${type}/${category}/${slug.current}`}>
                <h4 className="cartItem__productName">{title}</h4>
              </Link>

              {selectedSize && (
                <h4 className="cartItem__productType">{`Size: ${selectedSize}`}</h4>
              )}
            </div>
          </div>
          <div className="cartItem__bottom">
            <span className="cartItem__price">Unit price: ${price}</span>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
};

export default SingleProductItem;
