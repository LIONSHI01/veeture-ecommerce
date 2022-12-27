import styled from "styled-components";
import { device } from "../../pages_styles/device";

export const StyledFeature = styled.section`
  margin: 10rem 0;

  h2 {
    font-size: var(--fs-xxl);
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: var(--mg-m);
    font-family: var(--ff-display);
  }

  .feature-container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 16px;

    @media ${device.tablet} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .feature-images {
    display: flex;
    justify-content: center;
    gap: 5rem;

    @media ${device.tablet} {
      flex-direction: column;
      align-items: center;
    }
  }

  .card {
    max-width: 45rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: right;

    cursor: pointer;

    span {
      text-transform: uppercase;
      font-size: var(--fs-xl);
      font-weight: 500;
      line-height: 1.2;
    }
  }

  .feature-image {
    width: 100%;
    height: auto;
  }
`;
