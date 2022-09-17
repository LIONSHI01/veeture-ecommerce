import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { selectCartCount } from "../../store/cart/cart.selector";

import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsHeart, BsHandbag } from "react-icons/bs";

import { NavbarContainer } from "./index.styles";

const Navbar = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <NavbarContainer>
      <div className="nav-container">
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

          <li className="cart">
            <Link href="/cart">
              <a>
                <BsHandbag className="icon" />
                <span className="cartNum">{cartCount || 0}</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
