import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import Router from "next/router";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { selectWishlistCount } from "../../store/user/user.selector";
import { setWishlist, setUserProfile } from "../../store/user/user.action";
import { setCartList, setIsCartOpen } from "../../store/cart/cart.action";

import {
  GiHamburgerMenu,
  BsHeart,
  BsHandbag,
  AiOutlineUser,
  VscSignOut,
} from "../ReactIcons";
import { navbarItems } from "../../assets/constants";
import { MobileSidebar } from "../index";
import { NavbarContainer, StickyFillDiv } from "./index.styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  // STATES MANAGEMENT

  const [sticky, setSticky] = useState(false);
  const [openMobielSidebar, setOpenMobielSidebar] = useState(false);
  const cartOpenHandler = () => dispatch(setIsCartOpen(!isCartOpen));

  // REDUX DATA
  const reduxCartCount = useSelector(selectCartCount);
  const reduxWishlistCount = useSelector(selectWishlistCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  // INITIATION
  console.log(session);
  useEffect(() => {
    if (session) {
      const userWishlist = session?.profile?.wishlist;
      const userCartList = session?.profile?.cartList;

      dispatch(setCartList(userCartList));
      dispatch(setWishlist(userWishlist));
      dispatch(setUserProfile(session));
    }
  }, [dispatch, session]);

  // HANDLERS

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

  const setNavSticky = () => {
    if (window.scrollY >= 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setNavSticky, true);
  }, []);

  return (
    <>
      <MobileSidebar
        showup={openMobielSidebar}
        setShowup={setOpenMobielSidebar}
      />
      <StickyFillDiv sticky={sticky} />
      <NavbarContainer sticky={sticky}>
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
                    <span className="wishNum">{reduxWishlistCount || 0}</span>
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
              <span className="cartNum">{reduxCartCount || 0}</span>
            </div>
          </div>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
