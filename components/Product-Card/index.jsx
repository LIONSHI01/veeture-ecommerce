import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import isLikedCompare from "../../lib/compareIsLiked";
import {
  selectRecentViews,
  selectWishlist,
} from "../../store/user/user.selector";
import { setRecentViews, toggleWishlist } from "../../store/user/user.action";
import { urlFor } from "../../lib/sanity-client.utils";
import { AiOutlineHeart } from "../ReactIcons";
import { Wrapper } from "./index.styles";

const ProductCard = ({ product }) => {
  // CONFIGURATION
  const dispatch = useDispatch();
  const { status } = useSession();
  const { title, price, category, type, slug, images } = product;
  const imageUrls = images?.map((image) => urlFor(image));

  // STATES MANAGEMENT
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // REDUX DATA
  const recentViews = useSelector(selectRecentViews);
  const wishlist = useSelector(selectWishlist);

  // HANDLERS
  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  const setRecentViewHandler = () =>
    dispatch(setRecentViews(recentViews, product));

  const toggleWishlistHandler = () => {
    if (status === "unauthenticated") {
      toast.warning("Please login to access your wishlist!");
      return;
    }
    dispatch(toggleWishlist(wishlist, product));
    toast.success("Wishlist changed successfully!");
    setIsLiked((prev) => !prev);
  };

  useEffect(() => {
    setIsLiked(isLikedCompare(wishlist, product?._id));
  }, [wishlist, product]);

  return (
    <Wrapper>
      <div className="image-container">
        <Image
          src={imageUrls && imageUrls[currentIndex]}
          // width={350}
          // height={350}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          alt={title}
        />
        <div className="icon-container" onClick={toggleWishlistHandler}>
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
