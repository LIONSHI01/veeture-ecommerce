import React, { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";
import { client } from "../../lib/sanity-client.utils";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import { selectWishlistCount } from "../../store/user/user.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { setSearchResults } from "../../store/product/product.actions";

import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsHeart, BsHandbag } from "react-icons/bs";
import { VscSignOut } from "react-icons/vsc";
import buildSearchResults from "../../lib/buildSearchResults.utils";

import { NavbarContainer } from "./index.styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  // STATES MANAGEMENT
  const [openSearch, setOpenSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const cartOpenHandler = () => dispatch(setIsCartOpen(!isCartOpen));

  // REDUX DATA
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const wishlistCount = useSelector(selectWishlistCount);

  // HANDLERS
  const toggleSearchHandler = () => setOpenSearch(!openSearch);
  const onChangeInput = (e) => setInputSearch(e.target.value);
  //Make it async, so extract data promise and let Router push to '/' without refresh page
  const signOutHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });

    // CLEAR ALL STATES
    dispatch({ type: "USER_LOGOUT" });
    Router.push(data.url);
  };

  // Fetch Products with search keywords
  const onSubmitSearch = async (e) => {
    e.preventDefault();
    setInputSearch("");
    const allProductsQuery = `*[_type=="product"]`;
    const allProducts = await client.fetch(allProductsQuery);
    const searchResults = buildSearchResults(allProducts, inputSearch);
    dispatch(setSearchResults(searchResults));
    setOpenSearch(false);
    Router.push("/search");
  };

  return (
    <NavbarContainer>
      <div className="nav-container sticky">
        <div className="logo-container">
          <Link href="/">
            <a>
              <span>veeture</span>
            </a>
          </Link>
        </div>
        <ul className="categories">
          <li>
            <Link href="/men">
              <a>men</a>
            </Link>
          </li>
          <li>
            <Link href="/women">
              <a>women</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>All</a>
            </Link>
          </li>
        </ul>
        <ul className="links">
          <li className={openSearch ? "searchbar show" : "searchbar"}>
            <form onSubmit={onSubmitSearch}>
              <input
                type="text"
                value={inputSearch}
                onChange={onChangeInput}
                className={openSearch ? "search-box show" : "search-box"}
              />
            </form>
            <FiSearch
              className={openSearch ? "search-icon show" : "search-icon"}
              onClick={toggleSearchHandler}
            />
          </li>
          <Link href="/account">
            <a>
              <li className="account">
                <AiOutlineUser className="icon" />
              </li>
            </a>
          </Link>
          <Link href="/wishlist">
            <a>
              <li className="wishlist">
                <BsHeart className="icon" />
                <span className="wishNum">{wishlistCount}</span>
              </li>
            </a>
          </Link>

          <li className="cart" onClick={cartOpenHandler}>
            <BsHandbag className="icon" />
            <span className="cartNum">{cartCount || 0}</span>
          </li>
          {session && (
            <li className="signout" onClick={signOutHandler}>
              <VscSignOut className="icon" />
            </li>
          )}
        </ul>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
