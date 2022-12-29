import styled, { css } from "styled-components";
import { device } from "../../styles/devices";

const stickyStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: var(--bs-m);
  z-index: 5000;
`;

export const StickyFillDiv = styled.div`
  height: ${(props) => (props.sticky ? "10rem" : 0)};
`;

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10rem;
  background-color: var(--bg);
  color: var(--white);
  font-size: var(--fs);
  transition: all 0.3s;
  padding: 0 3rem;

  ${(props) => props.sticky && stickyStyles}

  @media ${device.tablet} {
    padding: 0 1rem;
  }

  ul {
    list-style: none;
  }

  .navRight {
    display: flex;
    align-items: center;
  }

  .mobileSidebarBtn {
    display: none;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media ${device.tablet} {
      display: flex;
    }

    svg {
      color: var(--white);
      height: 3rem;
      width: 3rem;
    }
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
      font-family: var(--ff-logo-font);
    }
  }

  /* CATEGORIES */
  .categories {
    display: flex;
    gap: 2.5rem;
    font-size: var(--fs-x);
    font-weight: 600;

    @media ${device.tablet} {
      display: none;
    }

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

  /* Auth Box */

  .authBox {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-left: auto;
    margin-right: 3rem;

    & > * {
      cursor: pointer;
    }

    @media ${device.tablet} {
      display: none;
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

  .cart {
    position: relative;
    cursor: pointer;
  }

  .item {
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

    @media ${device.tablet} {
      top: -5px;
      right: -10px;
    }
  }
  .icon {
    height: 3.5rem;
    width: 3.5rem;
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
