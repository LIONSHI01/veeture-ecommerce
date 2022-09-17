import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsHeart, BsHandbag } from "react-icons/bs";

import { NavbarContainer } from "./index.styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartOpenHandler = () => dispatch(setIsCartOpen(!isCartOpen));

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
          <li className="searchbar">
            <FiSearch className="icon" />
          </li>
          <li className="account">
            <AiOutlineUser className="icon" />
          </li>
          <li className="wishlist">
            <BsHeart className="icon" />
            <span className="wishNum">0</span>
          </li>

          <li className="cart" onClick={cartOpenHandler}>
            <BsHandbag className="icon" />
            <span className="cartNum">{cartCount || 0}</span>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
