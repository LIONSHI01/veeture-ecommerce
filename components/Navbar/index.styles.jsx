import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 10rem;
  /* background-color: var(--bg); */
  background-color: var(--bg);
  color: var(--white);
  font-size: var(--fs);
  display: flex;
  align-items: center;
  transition: all 0.3s;

  /* width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000; */

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
    position: relative;
    height: 5rem;
    width: 5rem;
    display: flex;
    align-items: center;
    border: 1px solid var(--white);
    border-radius: 200px;
    padding: 0.8rem;
    line-height: 0;
    transition: all 0.5s cubic-bezier(0.78, -0.1, 0.49, 1.12);
    overflow: hidden;

    &.show {
      width: 30rem;
      transition: all 0.5s cubic-bezier(0.78, -0.1, 0.49, 1.12);
      background-color: var(--white);
    }
  }

  .search-box {
    width: 30rem;
    height: 5rem;
    border: none;
    border-radius: 200px;
    outline: none;
    font-size: var(--fs);
    background-color: var(--white);
    visibility: hidden;
    transition: all 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(100%);

    &.show {
      top: 0;
      left: 0;
      opacity: 1;

      transform: translateX(0%);
      padding: 0 2rem;
      transition: all 0.5s;
      visibility: visible;
    }
  }

  .search-icon {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    color: var(--white);
    height: 3rem;
    width: 3rem;

    &.show {
      color: var(--black);
    }
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
    z-index: 10;

    &.show {
      color: var(--black);
    }
  }

  /* .nav-container.sticky {
    position: fixed;
    top: 0;
    left: 0;
    height: 10rem;
    background-color: var(--bg);
    display: flex;
    align-items: center;
  } */
`;
