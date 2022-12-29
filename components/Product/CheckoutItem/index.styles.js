import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Wrapper = styled.div`
  grid-column: 1/-1;
  width: 100%;

  .cartItem {
    display: grid;
    grid-template-columns: 25fr 25fr 10fr 20fr repeat(2, 10fr);
    justify-items: center;
    align-items: center;
    font-size: var(--default-fs);
    color: var(--black-light-2);
    padding: 1rem 0;
    border-bottom: 2px solid var(--grey-light-1);

    &__img_box {
      position: relative;
      overflow: hidden;
      border-radius: var(--br-x);
      height: 7rem;
      width: 7rem;

      @media ${device.tablet_portrait} {
        height: 6rem;
        width: 6rem;
      }

      @media ${device.mobileL} {
        height: 5rem;
        width: 5rem;
      }
    }

    &__name_box {
      justify-self: flex-start;
      display: flex;

      gap: 2rem;
      align-items: center;

      @media ${device.mobileL} {
        font-size: var(--fs-s);
      }
    }

    &__name {
      &:link,
      &:visited {
        text-decoration: none;
        color: var(--black);
        font-weight: 500;
        text-transform: capitalize;
        transition: all 0.3s;
      }
      &:hover,
      &:active {
        color: var(--blue-dark);
      }
    }

    &__qty_box {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    &__unit-price {
      @media ${device.mobileL} {
        display: none;
      }
    }

    &__minus,
    &__plus {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid var(--black-light-3);
      border-radius: 3px;
      padding: 3px;
      transition: all 0.3s;
    }

    &__minus:hover &__amountIcon,
    &__plus:hover &__amountIcon {
      color: var(--white);
    }

    &__minus {
      &:hover {
        background-color: var(--red);
      }
    }

    &__plus {
      &:hover {
        background-color: var(--blue);
      }
    }

    &__amountIcon {
      color: var(--black);
      width: 1.5rem;
      height: 1.5rem;
      transition: all 0.3s;
    }

    &__number {
      width: 3rem;
      height: 100%;
      padding: 0.5rem 0;
      border-radius: 3px;
      border: none;
      text-align: center;
      font-family: inherit;
      color: var(--black);
      border-bottom: 1px solid var(--black-light-3);
      border-top: 1px solid var(--black-light-3);
    }

    &__number:invalid {
      outline: 1px solid var(--red);
      border: 1px solid var(--red);
    }

    &__btn_remove {
      justify-self: end;
      cursor: pointer;
    }

    &__remove_icon {
      width: 3rem;
      height: 3rem;
    }
  }
`;
