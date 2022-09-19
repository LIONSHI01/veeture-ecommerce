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
