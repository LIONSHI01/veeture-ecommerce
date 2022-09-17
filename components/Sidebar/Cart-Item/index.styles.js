import styled from "styled-components";

export const Wrapper = styled.div`
  .cartItem {
    display: grid;
    grid-template-columns: max-content 1fr;
    padding: 2rem;
    gap: 2rem;
    border-radius: var(--br-x);

    transition: all 0.3s;

    &:hover {
      background-color: var(--grey-light-3);
    }
  }

  .cartItem__product-image {
    border-radius: 1.2rem;
    overflow: hidden;
    width: 15rem;
    height: 15rem;
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

  .cartItem__deleteButton {
    cursor: pointer;
  }

  .cartItem__delete-icon {
    color: var(--black-light-2);
    width: 2.5rem;
    height: 2.5rem;
  }

  .cartItem__qty-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cartItem__icon-plus,
  .cartItem__icon-minus {
    width: 2rem;
    height: 2rem;
    color: var(--white);
  }

  .cartItem__btn-minus,
  .cartItem__btn-plus {
    cursor: pointer;
    border-radius: 3px;
  }
  .cartItem__btn-minus {
    background-color: var(--black-light-2);
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

  .cartItem__qty:focus {
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .cartItem__btn-plus {
    background-color: var(--black-light-2);
  }

  .cartItem__price {
    font-size: var(--fs-s);
    font-weight: 700;
    color: var(--black-light-2);
  }
`;