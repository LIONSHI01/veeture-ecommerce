import styled from "styled-components";
import { device } from "../styles/devices";

export const ProductDetails = styled.div`
  margin: 5rem 0;

  @media ${device.tablet} {
    margin: 2.5rem 0;
  }

  .master-container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 14px;
  }

  .product-details-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    @media ${device.tablet} {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .recent-views-container {
    grid-column: 1 / -1;
    display: flex;
  }

  .image-section {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(43rem, 1fr));
    justify-items: center;
    gap: 2rem;
  }

  .image-container {
    position: relative;
    width: 43rem;
    height: 50rem;
  }

  .details-container {
    @media ${device.tablet} {
      margin-top: var(--mg-m);
    }
  }
`;
export const CategoryDetails = styled.div`
  margin: 5rem 0;
  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 14px;
  }
  .heading {
    margin-bottom: var(--mg-x);
    h1 {
      font-size: var(--fs-xl);
      text-transform: uppercase;
      margin-bottom: var(--mg-s);
    }
  }
  .guide-links {
    a {
      font-size: var(--fs);
      color: var(--black-light-2);
      text-transform: capitalize;

      &:hover {
        color: var(--black);
      }
    }
  }

  .product-details-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 2.5rem;
  }

  .image-section {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45rem, max-content));
    gap: 2rem;
  }

  .details-section {
    grid-column: 3 / -1;
  }
`;
