import styled from "styled-components";
import { device } from "../../../styles/devices";

export const ItemWrapper = styled.div`
  .cartItem {
    display: grid;
    grid-template-columns: max-content 1fr;
    padding: 2rem;
    gap: 2rem;
    border-radius: var(--br-x);
    transition: all 0.3s;
  }

  .cartItem__product-image {
    border-radius: 1.2rem;
    overflow: hidden;
    width: 15rem;
    height: 15rem;

    @media ${device.mobileL} {
      width: 10rem;
      height: 10rem;
    }
  }
  .cartItem__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cartItem__top {
    display: flex;
    justify-content: space-between;
  }

  .cartItem__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cartItem__details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .cartItem__productName {
    font-size: var(--fs-s);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    color: var(--black);
    text-transform: uppercase;

    &:hover {
      color: var(--black-light-2);
    }
  }
  .cartItem__productType {
    font-size: var(--fs-s);
    font-weight: 100;
    color: var(--black-light-2);
  }

  .cartItem__qty {
    width: 3rem;
    text-align: center;
    border: 1px solid var(--black-light-2);
    border-left: none;
    border-right: none;
    padding: 2px 0;
    font-size: var(--fs-s);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .cartItem__price {
    font-size: var(--fs-s);
    font-weight: 100;
    color: var(--black-light-2);
  }
`;
