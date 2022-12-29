import styled from "styled-components";
import { device } from "../styles/devices";
export const Wrapper = styled.div`
  margin-bottom: 10rem;
  min-height: calc(100vh - 30rem - 10rem);

  .section-container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 14px;
  }

  .cart__amount {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* TABLE HEADING */
  .cart__shopping {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cart__title {
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 1rem;
    margin-bottom: var(--mg-s);

    @media ${device.mobileL} {
      margin-bottom: -1rem;
    }
  }

  .cart__title-icon-box {
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    background-color: var(--black-light-3);
    border-radius: 50%;
  }

  .cart__title-icon {
    color: var(--white);
    width: 2rem;
    height: 2rem;
  }
  .cart__title-text {
    font-size: var(--fs-x);
    color: var(--black-light-2);
  }

  /* TABLE CONTENT */
  .cart__table {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 3rem;

    font-size: var(--fs-s);
    margin-bottom: var(--mg-x);
  }

  .cart__table-body,
  .cart__table-data,
  .cart__table-head,
  .cart__sum-box {
    width: 100%;
    grid-column: 1 / -1;
    display: grid;
    text-align: center;

    grid-template-columns: 25fr 25fr 10fr 20fr repeat(2, 10fr);
    font-size: var(--fs-x);
    padding: 1rem 2rem;
  }

  .cart__table-head {
    font-size: var(--fs-s);
    font-weight: 500;
    color: var(--black-light-2);
    background-color: var(--grey-light-1);
    text-transform: capitalize;

    @media ${device.mobileL} {
      display: none;
    }
  }

  .cart__table-head > :first-child {
    text-align: left;
  }
  .cart__table-head > :last-child {
    text-align: right;
  }

  .cart__table-body {
    margin-bottom: var(--mg-m);
  }

  .cart__sum-box {
    display: grid;
    grid-template-columns: 85fr 15fr;
    justify-items: flex-end;
    text-transform: capitalize;

    @media ${device.mobileL} {
      grid-template-columns: 80fr 20fr;
    }
  }

  /* BUTTONS GROUP */
  .cart__btns-group {
    display: flex;
    gap: 3rem;

    @media ${device.mobileL} {
      flex-direction: column;
    }
  }

  .cart__shopping-btn-box,
  .cart__shopping-btn-box:visited {
    position: relative;
    display: flex;
    justify-content: center;
    width: 25rem;
    gap: 1rem;
    cursor: pointer;

    padding: 1rem 0;
    font-size: var(--fs-x);
    background-color: var(--bg);
    border-radius: var(--br-m);
    text-transform: uppercase;
    text-decoration: none;
    color: var(--white);

    transition: all 0.3s;
  }

  .cart__shopping-btn-box:hover,
  .cart__shopping-btn-box:active {
    background-color: var(--black);
  }

  .cart__shopping-btn-icon {
    width: 2rem;
    height: 2rem;
  }

  .cart__shopping-btn-left {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }
  .cart__shopping-btn-right {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }

  .cart__empty-msg {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  .cart__empty-text {
    margin: 10rem 0;
    width: 100%;
    grid-column: 1/-1;
    text-align: center;
    font-size: var(--fs-xl);
    color: var(--black-light-2);
    font-weight: 600;
    font-style: italic;
  }
`;
