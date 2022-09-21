import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

import {
  selectRecentViews,
  selectLikeList,
} from "../../store/user/user.selector";
import { setRecentViews, setLikeList } from "../../store/user/user.action";
import { urlFor } from "../../lib/sanity-client.utils";

import { Wrapper } from "./index.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const recentViews = useSelector(selectRecentViews);
  const likeList = useSelector(selectLikeList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(product.isLiked);
  const { title, price, category, type, slug, images } = product;

  const imageUrls = images?.map((image) => urlFor(image));

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  const setRecentViewHandler = () =>
    dispatch(setRecentViews(recentViews, product));

  const setLikeListHandler = () => {
    dispatch(setLikeList(likeList, product));

    setIsLiked(!isLiked);
  };

  return (
    <Wrapper>
      <div className="image-container">
        <Image
          src={imageUrls && imageUrls[currentIndex]}
          width={350}
          height={350}
          objectFit="cover"
          alt={title}
          className="image"
        />
        <div className="icon-container" onClick={setLikeListHandler}>
          <AiOutlineHeart className={isLiked ? "icon like" : "icon"} />
        </div>
        <div className="dots">
          {images?.map((image, imageIndex) => (
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
