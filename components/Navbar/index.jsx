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
import buildSearchResults from "../../lib/buildSearchResults.utils";

import {
  GiHamburgerMenu,
  BsHeart,
  BsHandbag,
  AiOutlineUser,
  FiSearch,
  VscSignOut,
} from "../ReactIcons";
import { navbarItems } from "../../assets/constants";
import { MobileSidebar } from "../index";
import { NavbarContainer } from "./index.styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  // STATES MANAGEMENT
  const [openSearch, setOpenSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [openMobielSidebar, setOpenMobielSidebar] = useState(false);
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

  const onOpenMobileSidebarHandler = () => {
    setOpenMobielSidebar((prev) => !prev);
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
    <>
      <MobileSidebar
        showup={openMobielSidebar}
        setShowup={setOpenMobielSidebar}
      />
      <NavbarContainer>
        <div className="nav-container sticky">
          {/* Open Mobile sidebar */}
          <button
            className="mobileSidebarBtn"
            onClick={onOpenMobileSidebarHandler}
          >
            <GiHamburgerMenu size={25} />
          </button>
          <div className="logo-container">
            <Link href="/">
              <a>
                <span>vee</span>
              </a>
            </Link>
          </div>
          <ul className="categories">
            {navbarItems.map(({ title, url }) => (
              <li key={title}>
                <Link href={url}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
          {/* <div className={openSearch ? "searchbar show" : "searchbar"}>
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
          </div> */}
          <div className="navRight">
            <ul className="authBox">
              <Link href="/account">
                <a>
                  <li className="item">
                    <AiOutlineUser className="icon" />
                  </li>
                </a>
              </Link>
              <Link href="/wishlist">
                <a>
                  <li className="item">
                    <BsHeart className="icon" />
                    <span className="wishNum">{wishlistCount}</span>
                  </li>
                </a>
              </Link>

              {session && (
                <li className="signout" onClick={signOutHandler}>
                  <VscSignOut className="icon" />
                </li>
              )}
            </ul>
            <div className="cart" onClick={cartOpenHandler}>
              <BsHandbag className="icon" />
              <span className="cartNum">{cartCount || 0}</span>
            </div>
          </div>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
