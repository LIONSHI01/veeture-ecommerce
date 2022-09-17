import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../../lib/sanity-client.utils";
import styled from "styled-components";

const Wrapper = styled.figure`
  cursor: pointer;
  .image-container {
    width: 35rem;
    height: auto;
    margin-bottom: var(--mg-s);
  }
  figcaption {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .name {
    font-size: var(--fs-x);
    font-weight: 600;
    text-transform: uppercase;
  }
  .category {
    font-size: var(--fs);
    text-transform: capitalize;
    font-weight: 500;
  }
  .price {
    font-size: var(--fs-s);
    color: var(--black-light-2);
  }
`;

const ProductCard = ({ product }) => {
  const { title, price, category, type, slug, images } = product;
  // const { title, price } = defaultProductVariant;
  // const { images } = defaultProductVariant;
  const imageUrl = urlFor(images && images[0]);

  return (
    <Link href={`/${type}/${category}/${slug.current}`}>
      <a>
        <Wrapper>
          <div className="image-container">
            <Image src={imageUrl} width={350} height={350} alt={title} />
          </div>
          <figcaption>
            <h4 className="name">{title}</h4>

            <span className="category">{category}</span>
            <span className="price">{`$ ${price}`}</span>
          </figcaption>
        </Wrapper>
      </a>
    </Link>
  );
};

export default ProductCard;
