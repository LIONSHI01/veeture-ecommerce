import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import { selectRecentViews } from "../../store/user/user.selector";
import { setRecentViews } from "../../store/user/user.action";
import { urlFor } from "../../lib/sanity-client.utils";
import styled from "styled-components";

const Wrapper = styled.figure`
  transition: all 0.5s;
  &:hover {
    transform: translateY(-1rem);
  }

  .image-container {
    width: 35rem;
    height: 35rem;
    margin-bottom: var(--mg-s);
    position: relative;
  }

  .dots {
    display: flex;
    gap: 1rem;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .dot {
    height: 1.4rem;
    width: 1.4rem;
    background-color: rgba(37, 42, 52, 0.5);
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s;

    &:hover {
      background-color: rgba(37, 42, 52, 1);
    }
  }
  .dot.active {
    border: 3px solid var(--black);
    background-color: var(--white);
    box-shadow: var(--bs-s);
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
  const dispatch = useDispatch();
  const recentViews = useSelector(selectRecentViews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, price, category, type, slug, images } = product;

  const imageUrls = images.map((image) => urlFor(image));

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  const setRecentViewHandler = () =>
    dispatch(setRecentViews(recentViews, product));

  return (
    <Wrapper>
      <div className="image-container">
        <Image
          src={imageUrls[currentIndex]}
          width={350}
          height={350}
          objectFit="cover"
          alt={title}
          className="image"
        />
        <div className="dots">
          {images.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className={currentIndex === imageIndex ? "dot active" : "dot"}
              onClick={() => goToSlide(imageIndex)}
            >
              &nbsp;
            </div>
          ))}
        </div>
      </div>
      <Link href={`/${type}/${category}/${slug.current}`}>
        <a>
          <figcaption onClick={setRecentViewHandler}>
            <h4 className="name">{title}</h4>
            <span className="category">{category}</span>
            <span className="price">{`$ ${price}`}</span>
          </figcaption>
        </a>
      </Link>
    </Wrapper>
  );
};

export default ProductCard;
