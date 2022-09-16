import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsHeart, BsHandbag } from "react-icons/bs";

const NavbarContainer = styled.nav`
  height: 10rem;
  /* background-color: var(--bg); */
  background-color: var(--bg);
  color: var(--white);
  font-size: var(--fs);
  display: flex;
  align-items: center;
  transition: all 0.3s;

  ul {
    list-style: none;
  }

  .nav-container {
    max-width: 144rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* LOGO */

  .logo-container {
    & span {
      text-transform: uppercase;
      font-size: 5.4rem;
      letter-spacing: -1px;
    }
  }

  /* CATEGORIES */

  .categories {
    display: flex;
    gap: 2.5rem;
    font-size: var(--fs-x);
    font-weight: 600;

    & > * {
      transition: all 0.3s;

      &:hover {
        color: var(--black-light-3);
      }
    }

    a {
      text-transform: uppercase;
    }
  }

  /* LINKS */

  .links {
    display: flex;
    align-items: center;
    gap: 3rem;

    & > * {
      cursor: pointer;
    }
  }

  .searchbar {
  }
  .account {
  }

  .wishlist {
    position: relative;
  }

  .cart {
    position: relative;
  }

  .wishNum,
  .cartNum {
    position: absolute;
    top: -8px;
    right: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    font-size: var(--fs-x);
    font-weight: 500;
    color: var(--black);
    background-color: var(--white);
    border-radius: 50%;
  }
  .icon {
    height: 3rem;
    width: 3rem;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="nav-container">
        <div className="logo-container">
          <span>veeture</span>
        </div>
        <ul className="categories">
          <li>
            <Link href="/">
              <a>men</a>
            </Link>
          </li>
          <li>
            <Link href="/">
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
            <BsHandbag className="icon" />
            <span className="cartNum">0</span>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
