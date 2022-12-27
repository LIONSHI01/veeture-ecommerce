import React from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { selectWishlist } from "../store/user/user.selector";

import { PageHero, LinkButton, ProductCard } from "../components";
import {
  ProductGroup,
  ProductMain,
  Unauthentication,
} from "../pages_styles/wishlist.styles";

const WishlistPage = () => {
  // STATE MANAGEMENT
  const { status } = useSession();
  const wishlist = useSelector(selectWishlist);

  if (status === "unauthenticated") {
    return (
      <Unauthentication>
        <div className="section-container">
          <div className="unauthenticate-box">
            <p>Please sign in to access your wishlist</p>
            <LinkButton url="/auth">Sign in</LinkButton>
          </div>
        </div>
      </Unauthentication>
    );
  }

  if (status === "authenticated") {
    return (
      <ProductGroup>
        <PageHero heading="My Wishlist" />
        <div className="group-container">
          <ProductMain>
            <div className="section-container">
              <div className="gallary">
                {wishlist?.length > 0 ? (
                  wishlist?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                ) : (
                  <div className="not-found">
                    <p>No Item yet. Lets explore!</p>
                    <LinkButton url="/products">View All Products</LinkButton>
                  </div>
                )}
              </div>
            </div>
          </ProductMain>
        </div>
      </ProductGroup>
    );
  }
};

export default WishlistPage;
