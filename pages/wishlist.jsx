import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { getUserProfile } from "../lib/authRequest";
import { selectSearchResults } from "../store/product/product.selector";
import ProductCard from "../components/Product-Card";
import FilterSidebar from "../components/Sidebar/Filter-Sidebar";
import { selectWishlist } from "../store/user/user.selector";
import { ProductGroup, ProductMain } from "../pages_styles/favorites.styles";

const WishlistPage = () => {
  const wishlist = useSelector(selectWishlist);

  // console.log(user);
  return (
    <ProductGroup>
      <div className="group-container">
        <div className="sidebar-container">
          <FilterSidebar />
        </div>
        <ProductMain>
          <div className="section-container">
            <div className="gallary">
              {wishlist.length > 0 ? (
                wishlist.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div className="not-found">
                  <p>No Product found, please try again.</p>
                </div>
              )}
            </div>
          </div>
        </ProductMain>
      </div>
    </ProductGroup>
  );
};

export const getServerSideProps = async (context) => {
  const user = await getUserProfile();

  return {
    props: {},
  };
};

export default WishlistPage;
