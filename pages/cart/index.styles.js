import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5rem 0;
  .section-container {
    max-width: var(--container);
    margin: 0 auto;
  }
  .cart {
    margin: 10rem 0;
  }

  .cart__amount {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* FLOW */
  .cart__flow-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    font-size: var(--fs-x);
    font-weight: 500;
    text-transform: uppercase;
    background-color: var(--grey-light-1);
    color: var(--black-light-2);
    border-radius: var(--br-m);
    margin: var(--mg-x) 0;
  }
  .cart__flow-step {
    position: relative;
    display: flex;
    align-items: center;

    gap: 1.5rem;
    padding: 1rem 7rem 1rem 1rem;
  }

  .cart__flow-step:not(:last-child)::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    height: 90px;
    width: 45px;
    transform: translateY(-22%);
    vertical-align: middle;

    background-image: url(../assets/img/util-img/step_arrow.png);
  }

  .cart__flow-num {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--white);
    border-radius: 100%;
    padding: 1rem;
  }
  .cart__flow-icon {
    width: 3rem;
    height: 3rem;
  }

  .cart__shopping {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* TABLE HEADING */

  .cart__title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: var(--mg-m);
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
    text-transform: uppercase;
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
    text-transform: uppercase;
  }

  /* BUTTONS GROUP */

  .cart__btns-group {
    display: flex;
    gap: 3rem;
  }

  .cart__shopping-btn-box,
  .cart__shopping-btn-box:visited {
    position: relative;
    width: 25rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;

    padding: 1rem 0;
    font-size: var(--fs-x);
    background-color: var(--bg);
    /* border-radius: var(--br-m); */
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
