import styled from "styled-components";

export const Wrapper = styled.figure`
  transition: all 0.5s;
  &:hover {
    transform: translateY(-1rem);
  }

  .image-container {
    position: relative;
    width: 35rem;
    height: 35rem;
    margin-bottom: var(--mg-s);
    position: relative;
  }
  .icon-container {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .icon {
    width: 4rem;
    height: 4rem;
    color: var(--black);
    transition: all 0.3s;
    cursor: pointer;

    &.like {
      color: red;
    }
  }

  .dots {
    display: flex;
    gap: 1rem;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
  }

  .dot {
    height: 1.4rem;
    width: 1.4rem;
    background-color: rgba(37, 42, 52, 0.5);
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s;

    &:hover {
      background-color: rgba(37, 42, 52, 1);
    }
  }
  .dot.active {
    border: 3px solid var(--black);
    background-color: var(--white);
    box-shadow: var(--bs-s);
  }

  figcaption {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: var(--fs-x);
    font-weight: 600;
    text-transform: uppercase;
    font-family: var(--ff-display);
    margin-bottom: var(--mg-s);
  }
  .category {
    font-size: var(--fs);
    text-transform: capitalize;
    font-weight: 500;
    color: var(--black-light-2);
    margin-bottom: var(--mg-xs);
  }
  .price {
    font-size: var(--fs-s);
    color: var(--black-light-2);
  }
`;
